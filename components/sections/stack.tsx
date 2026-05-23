import { SectionHeader } from "@/components/ui/section-header";
import stack from "@/data/stack.json";

export function Stack() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeader
        id="stack"
        num="03"
        crumb="stack/"
        title={
          <>
            Tech stack<span className="text-mk-pink">.</span>
          </>
        }
        meta="ls -la stack/"
      />
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stack.groups.map((g) => (
          <div key={g.label} className="border border-mk-border bg-mk-bg-elev rounded-md p-5">
            <h3 className="font-mono text-xs uppercase tracking-wider text-mk-fg-mute mb-3">
              {g.label}
            </h3>
            <ul className="flex flex-col gap-2 font-mono text-sm text-mk-fg">
              {g.items.map((it) => (
                <li key={it.name} className="flex items-center gap-2">
                  <span
                    aria-hidden
                    className="size-2.5 rounded-full"
                    style={{ backgroundColor: it.color }}
                  />
                  {it.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
