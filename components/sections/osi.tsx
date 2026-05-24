import { ExtensionCard } from "@/components/ui/extension-card";
import { RepoCard } from "@/components/ui/repo-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import featured from "@/data/featured.json";
import { env } from "@/lib/env";
import { getFeaturedRepos, getPinnedRepos } from "@/lib/github";
import type { Extension } from "@/lib/types";
import { getPublisherExtensions } from "@/lib/vscode";

const OsiTitle = (
  <>
    <span className="text-mk-pink">O</span>pen <span className="text-mk-green">S</span>ource{" "}
    <span className="text-mk-cyan">I</span>nitiatives<span className="text-mk-pink">.</span>
  </>
);

export async function Osi() {
  const featuredExtIds = featured.extensions.map((e) => e.id.toLowerCase());
  const dedupe = new Set(
    [...featured.slugs, ...featured.extensions.map((e) => e.repoSlug)].map((s) => s.toLowerCase()),
  );

  const [allPinned, featuredRepos, allExtensions] = await Promise.all([
    getPinnedRepos(),
    getFeaturedRepos(featured.slugs),
    featuredExtIds.length > 0
      ? getPublisherExtensions(env.vscodePublisher)
      : Promise.resolve([] as Extension[]),
  ]);

  const featuredExts = allExtensions.filter((e) => featuredExtIds.includes(e.id.toLowerCase()));
  const pinned = allPinned.filter((p) => !dedupe.has(p.slug.toLowerCase()));

  const hasFeatured = featuredExts.length > 0 || featuredRepos.length > 0;
  const [bigExt, ...restExts] = featuredExts;
  const bigRepo = !bigExt ? featuredRepos[0] : null;
  const smallRepos = bigExt ? featuredRepos : featuredRepos.slice(1);

  return (
    <Reveal>
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeader
          id="osi"
          num="05"
          crumb="osi/"
          title={OsiTitle}
          meta="cat data/featured.json"
        />

        {!hasFeatured && pinned.length === 0 ? (
          <p className="mt-10 font-mono text-sm text-mk-fg-mute">
            Add entries to <code>data/featured.json</code> to populate this section.
          </p>
        ) : null}

        {hasFeatured ? (
          <div className="mt-10">
            <div className="font-mono text-xs text-mk-fg-mute mb-3">
              <span className="text-mk-green">$</span> <span className="text-mk-fg">Featured</span>{" "}
              - cat data/featured.json
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {bigExt ? (
                <ExtensionCard ext={bigExt} variant="big" className="md:col-span-2 md:row-span-2" />
              ) : bigRepo ? (
                <RepoCard repo={bigRepo} variant="big" className="md:col-span-2 md:row-span-2" />
              ) : null}
              {restExts.slice(0, 2).map((e) => (
                <ExtensionCard key={e.id} ext={e} variant="small" />
              ))}
              {smallRepos.slice(0, 2 - Math.min(restExts.length, 2)).map((r) => (
                <RepoCard key={r.slug} repo={r} variant="small" />
              ))}
            </div>
          </div>
        ) : null}

        {pinned.length > 0 ? (
          <div className="mt-12">
            <div className="font-mono text-xs text-mk-fg-mute mb-3">
              <span className="text-mk-green">$</span>{" "}
              <span className="text-mk-fg">Also pinned</span> - gh api graphql ... pinnedItems
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {pinned.slice(0, 3).map((r) => (
                <RepoCard key={r.slug} repo={r} variant="small" />
              ))}
            </div>
          </div>
        ) : null}
      </section>
    </Reveal>
  );
}
