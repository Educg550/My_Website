import { env } from "./env";
import type { Pr, Profile, Repo, Stats, Upstream } from "./types";

const REST = "https://api.github.com";
const GQL = "https://api.github.com/graphql";
const UA = "educg550-dev-website";

type FetchInit = Omit<RequestInit, "headers"> & { headers?: Record<string, string> };

async function gh<T>(
  path: string,
  init: FetchInit = {},
  revalidate = 3600,
  tag = "gh",
): Promise<T | null> {
  const res = await fetch(`${REST}${path}`, {
    ...init,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${env.githubToken}`,
      "User-Agent": UA,
      "X-GitHub-Api-Version": "2022-11-28",
      ...(init.headers ?? {}),
    },
    next: { revalidate, tags: [tag] },
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`GitHub REST ${path} → ${res.status}`);
  return (await res.json()) as T;
}

async function ghGql<T>(
  query: string,
  variables: Record<string, unknown> = {},
  revalidate = 3600,
  tag = "gh-gql",
): Promise<T> {
  const res = await fetch(GQL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.githubToken}`,
      "User-Agent": UA,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate, tags: [tag] },
  });
  if (!res.ok) throw new Error(`GitHub GraphQL → ${res.status}`);
  const body = (await res.json()) as { data: T; errors?: unknown };
  if (body.errors) throw new Error(`GitHub GraphQL errors: ${JSON.stringify(body.errors)}`);
  return body.data;
}

function repoFromRest(r: {
  full_name: string;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  topics?: string[];
}): Repo {
  return {
    slug: r.full_name,
    name: r.name,
    fullName: r.full_name,
    description: r.description,
    url: r.html_url,
    stars: r.stargazers_count,
    language: r.language,
    topics: r.topics ?? [],
  };
}

export async function getProfile(): Promise<Profile> {
  type R = {
    login: string;
    name: string | null;
    bio: string | null;
    avatar_url: string;
    html_url: string;
    public_repos: number;
    followers: number;
  };
  const r = await gh<R>(`/users/${env.githubUsername}`, {}, 3600, "gh-profile");
  if (!r) throw new Error("Profile not found");
  return {
    login: r.login,
    name: r.name,
    bio: r.bio,
    avatarUrl: r.avatar_url,
    htmlUrl: r.html_url,
    publicRepos: r.public_repos,
    followers: r.followers,
  };
}

export async function getRepo(owner: string, name: string): Promise<Repo | null> {
  const r = await gh<Parameters<typeof repoFromRest>[0]>(
    `/repos/${owner}/${name}`,
    {},
    21600,
    `gh-upstream-${owner}-${name}`,
  );
  return r ? repoFromRest(r) : null;
}

export async function getFeaturedRepos(slugs: string[]): Promise<Repo[]> {
  const results = await Promise.all(
    slugs.map(async (s) => {
      const [owner, name] = s.split("/");
      if (!owner || !name) return null;
      const repo = await gh<Parameters<typeof repoFromRest>[0]>(
        `/repos/${owner}/${name}`,
        {},
        3600,
        `gh-featured-${s}`,
      );
      return repo ? ({ ...repoFromRest(repo), isFeatured: true } as Repo) : null;
    }),
  );
  return results.filter((r): r is Repo => r !== null);
}

export async function getPinnedRepos(): Promise<Repo[]> {
  type R = {
    user: {
      pinnedItems: {
        nodes: Array<{
          nameWithOwner: string;
          name: string;
          description: string | null;
          url: string;
          stargazerCount: number;
          primaryLanguage: { name: string } | null;
          repositoryTopics: { nodes: Array<{ topic: { name: string } }> };
        }>;
      };
    };
  };
  const data = await ghGql<R>(
    `query($login: String!) {
      user(login: $login) {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              nameWithOwner
              name
              description
              url
              stargazerCount
              primaryLanguage { name }
              repositoryTopics(first: 10) { nodes { topic { name } } }
            }
          }
        }
      }
    }`,
    { login: env.githubUsername },
    3600,
    "gh-pinned",
  );
  return data.user.pinnedItems.nodes.map((n) => ({
    slug: n.nameWithOwner,
    name: n.name,
    fullName: n.nameWithOwner,
    description: n.description,
    url: n.url,
    stars: n.stargazerCount,
    language: n.primaryLanguage?.name ?? null,
    topics: n.repositoryTopics.nodes.map((t) => t.topic.name),
    isPinned: true,
  }));
}

export async function getContributedUpstreams(): Promise<Upstream[]> {
  type SearchItem = {
    number: number;
    title: string;
    html_url: string;
    pull_request: { merged_at: string | null } | null;
    repository_url: string;
  };
  type SearchResp = { items: SearchItem[] };

  const user = env.githubUsername;
  const q = encodeURIComponent(`author:${user} is:pr is:merged -user:${user}`);
  const data = await gh<SearchResp>(
    `/search/issues?q=${q}&per_page=100&sort=created&order=desc`,
    {},
    3600,
    "gh-prs",
  );
  if (!data) return [];

  const prs: Pr[] = data.items
    .filter((i) => i.pull_request?.merged_at)
    .map((i) => {
      const repoSlug = i.repository_url.replace("https://api.github.com/repos/", "");
      return {
        number: i.number,
        title: i.title,
        url: i.html_url,
        mergedAt: i.pull_request?.merged_at as string,
        repoSlug,
      };
    });

  const slugs = Array.from(new Set(prs.map((p) => p.repoSlug)));
  const repos = await Promise.all(
    slugs.map(async (s) => {
      const [o, n] = s.split("/");
      return getRepo(o, n);
    }),
  );

  const bySlug = new Map<string, Upstream>();
  for (const r of repos) {
    if (!r) continue;
    bySlug.set(r.slug, {
      slug: r.slug,
      name: r.name,
      fullName: r.fullName,
      description: r.description,
      url: r.url,
      stars: r.stars,
      language: r.language,
      prs: [],
    });
  }
  for (const p of prs) {
    bySlug.get(p.repoSlug)?.prs.push(p);
  }
  return Array.from(bySlug.values()).sort((a, b) => b.stars - a.stars);
}

export async function getStats(
  upstreams: Upstream[],
  featured: Repo[],
  pinned: Repo[],
): Promise<Stats> {
  const ownRepos = [...featured, ...pinned];
  const totalStars = ownRepos.reduce((sum, r) => sum + r.stars, 0);
  const totalPrsMerged = upstreams.reduce((sum, u) => sum + u.prs.length, 0);
  const upstreamsTouched = upstreams.length;
  const langCounts = new Map<string, number>();
  for (const r of [...ownRepos, ...upstreams]) {
    if (r.language) {
      const lang = r.language === "Jupyter Notebook" ? "Python" : r.language;
      langCounts.set(lang, (langCounts.get(lang) ?? 0) + 1);
    }
  }
  const topLanguages = Array.from(langCounts.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
  return { totalStars, totalPrsMerged, upstreamsTouched, topLanguages };
}
