import { CountUp } from "@/components/ui/count-up";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import type { Stats } from "@/lib/types";

type Props = { stats: Stats };

export function StatsSection({ stats }: Props) {
  const max = Math.max(...stats.topLanguages.map((l) => l.count), 1);
  return (
    <Reveal>
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeader
          id="stats"
          num="07"
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
          <Punch
            label="Top language"
            value={stats.topLanguages[0]?.name ?? "-"}
            accent="text-mk-pink"
          />
        </div>

        {stats.topLanguages.length > 0 ? (
          <div className="mt-10">
            <h3 className="font-mono text-xs uppercase text-mk-fg-mute mb-3">Top languages</h3>
            <ul className="flex flex-col gap-2">
              {stats.topLanguages.map((l) => (
                <li key={l.name} className="flex items-center gap-3 font-mono text-sm text-mk-fg">
                  <span className="w-32 shrink-0">{l.name}</span>
                  <span
                    className="h-2 bg-mk-cyan rounded-sm"
                    style={{ width: `${(l.count / max) * 100}%` }}
                  />
                  <span className="text-mk-fg-mute text-xs">{l.count}</span>
                </li>
              ))}
            </ul>
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
