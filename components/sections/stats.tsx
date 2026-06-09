import { CountUp } from "@/components/ui/count-up";
import { LanguageRadar } from "@/components/ui/language-radar";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import type { Stats } from "@/lib/types";

type Props = { stats: Stats };

export function StatsSection({ stats }: Props) {
  return (
    <Reveal>
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeader
          id="stats"
          num="06"
          crumb="stats/"
          title={
            <>
              By the numbers<span className="text-mk-pink">.</span>
            </>
          }
          meta="derived from /search + /repos cache"
        />

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-5 font-mono">
          <Punch label="PRs merged" value={stats.totalPrsMerged} accent="text-mk-green" />
          <Punch label="Upstreams" value={stats.upstreamsTouched} accent="text-mk-cyan" />
          <Punch label="Combined stars" value={stats.totalStars} accent="text-mk-yellow" />
        </div>

        {stats.topLanguages.length > 0 ? (
          <div className="mt-10 max-w-2xl">
            <h3 className="font-mono text-xs uppercase text-mk-fg-mute mb-4">Top languages</h3>
            <LanguageRadar languages={stats.topLanguages} />
          </div>
        ) : null}
      </section>
    </Reveal>
  );
}

function Punch({
  label,
  value,
  accent,
}: {
  label: string;
  value: string | number;
  accent: string;
}) {
  return (
    <div className="border border-mk-border bg-mk-bg-elev rounded-md p-5">
      <div className="text-xs uppercase text-mk-fg-mute">{label}</div>
      <div className={`font-display italic text-4xl mt-1 ${accent}`}>
        {typeof value === "number" ? <CountUp value={value} /> : value}
      </div>
    </div>
  );
}
