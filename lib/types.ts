export type Repo = {
  slug: string; // "owner/name"
  name: string;
  fullName: string;
  description: string | null;
  url: string;
  stars: number;
  language: string | null;
  topics: string[];
  isPinned?: boolean;
  isFeatured?: boolean;
};

export type Pr = {
  number: number;
  title: string;
  url: string;
  mergedAt: string;
  repoSlug: string;
};

export type Upstream = {
  slug: string;
  name: string;
  fullName: string;
  description: string | null;
  url: string;
  stars: number;
  language: string | null;
  prs: Pr[];
};

export type Profile = {
  login: string;
  name: string | null;
  bio: string | null;
  avatarUrl: string;
  htmlUrl: string;
  publicRepos: number;
  followers: number;
};

export type Stats = {
  totalStars: number;
  totalPrsMerged: number;
  upstreamsTouched: number;
  topLanguages: { name: string; count: number }[];
};

export type Extension = {
  id: string; // "publisher.name"
  displayName: string;
  shortDescription: string;
  version: string;
  installs: number;
  rating: number;
  ratingCount: number;
  url: string;
};
