import { RepoCard } from "@/components/ui/repo-card";
import { SectionHeader } from "@/components/ui/section-header";
import featured from "@/data/featured.json";
import { getOsiRepos } from "@/lib/github";

const OsiTitle = (
  <>
    <span className="text-mk-pink">O</span>pen <span className="text-mk-green">S</span>ource{" "}
    <span className="text-mk-cyan">I</span>nitiatives<span className="text-mk-pink">.</span>
  </>
);

export async function Osi() {
  const { featured: feats, pinned } = await getOsiRepos(featured.slugs);

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeader
        id="osi"
        num="05"
        crumb="osi/"
        title={OsiTitle}
        meta="cat data/featured.json"
      />

      {feats.length === 0 && pinned.length === 0 ? (
        <p className="mt-10 font-mono text-sm text-mk-fg-mute">
          Add repo slugs to <code>data/featured.json</code> to populate this section.
        </p>
      ) : null}

      {feats.length > 0 ? (
        <div className="mt-10">
          <div className="font-mono text-xs text-mk-fg-mute mb-3">
            <span className="text-mk-green">$</span> <span className="text-mk-fg">Featured</span> —
            cat data/featured.json
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <RepoCard repo={feats[0]} variant="big" className="md:col-span-2 md:row-span-2" />
            {feats.slice(1, 3).map((r) => (
              <RepoCard key={r.slug} repo={r} variant="small" />
            ))}
          </div>
        </div>
      ) : null}

      {pinned.length > 0 ? (
        <div className="mt-12">
          <div className="font-mono text-xs text-mk-fg-mute mb-3">
            <span className="text-mk-green">$</span> <span className="text-mk-fg">Also pinned</span>{" "}
            — gh api graphql ... pinnedItems
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pinned.slice(0, 3).map((r) => (
              <RepoCard key={r.slug} repo={r} variant="small" />
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
