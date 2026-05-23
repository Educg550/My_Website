import { CountUp } from "@/components/ui/count-up";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { UpstreamCard } from "@/components/ui/upstream-card";
import { getContributedUpstreams } from "@/lib/github";

export async function Contributions() {
  const upstreams = await getContributedUpstreams();
  const totalPrs = upstreams.reduce((s, u) => s + u.prs.length, 0);
  const totalStars = upstreams.reduce((s, u) => s + u.stars, 0);
  const shown = upstreams.slice(0, 6);

  return (
    <Reveal>
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeader
          id="contributions"
          num="04"
          crumb="contributions/"
          title={
            <>
              Where I&apos;ve helped<span className="text-mk-pink">.</span>
            </>
          }
          meta="gh api search/issues?q=author:me+is:pr+is:merged"
        />

        <ul className="mt-10 grid grid-cols-1 sm:grid-cols-3 border border-mk-border bg-mk-bg-elev rounded-md overflow-hidden font-mono">
          <li className="p-5 border-b sm:border-b-0 sm:border-r border-mk-border">
            <div className="text-xs uppercase text-mk-fg-mute">PRs merged</div>
            <div className="font-display italic text-4xl text-mk-green">
              <CountUp value={totalPrs} />
            </div>
          </li>
          <li className="p-5 border-b sm:border-b-0 sm:border-r border-mk-border">
            <div className="text-xs uppercase text-mk-fg-mute">Upstreams touched</div>
            <div className="font-display italic text-4xl text-mk-cyan">
              <CountUp value={upstreams.length} />
            </div>
          </li>
          <li className="p-5">
            <div className="text-xs uppercase text-mk-fg-mute">Combined stars</div>
            <div className="font-display italic text-4xl text-mk-yellow">
              <CountUp value={totalStars} />
            </div>
          </li>
        </ul>

        {shown.length === 0 ? (
          <p className="mt-10 font-mono text-sm text-mk-fg-mute">
            No upstream merges visible yet — check back later.
          </p>
        ) : (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {shown.map((u, i) => (
              <UpstreamCard key={u.slug} upstream={u} span={i === 0 ? "double" : "single"} />
            ))}
          </div>
        )}
      </section>
    </Reveal>
  );
}
