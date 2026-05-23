import { Star } from "lucide-react";
import { cn } from "@/lib/cn";
import type { Upstream } from "@/lib/types";

const langDot = (lang: string | null) => {
  const c: Record<string, string> = {
    TypeScript: "bg-[#3178C6]",
    JavaScript: "bg-[#F7DF1E]",
    Go: "bg-[#00ADD8]",
    Python: "bg-[#3572A5]",
    Rust: "bg-[#DEA584]",
  };
  return c[lang ?? ""] ?? "bg-mk-fg-mute";
};

type Props = {
  upstream: Upstream;
  span?: "single" | "double";
  className?: string;
};

export function UpstreamCard({ upstream, span = "single", className }: Props) {
  const wide = span === "double";
  const prsToShow = wide ? upstream.prs.slice(0, 8) : upstream.prs.slice(0, 4);
  return (
    <article
      className={cn(
        "border border-mk-border bg-mk-bg-elev rounded-md p-5 flex flex-col gap-4",
        wide && "md:col-span-2 md:p-7",
        className,
      )}
    >
      <header className="flex flex-col gap-1">
        <a
          href={upstream.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-baseline gap-1 font-mono text-xs text-mk-fg-mute hover:text-mk-cyan"
        >
          {upstream.fullName.split("/")[0]}/
          <span className="font-display italic text-mk-fg text-lg group-hover:text-mk-cyan">
            {upstream.name}
          </span>
        </a>
        <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-mk-fg-mute">
          {upstream.language ? (
            <span className="flex items-center gap-1.5">
              <span className={cn("size-2.5 rounded-full", langDot(upstream.language))} />
              {upstream.language}
            </span>
          ) : null}
          <span className="flex items-center gap-1 text-mk-yellow">
            <Star className="size-3.5" /> {upstream.stars}
          </span>
          <span className="ml-auto inline-flex items-center gap-1 text-mk-green">
            {upstream.prs.length} PRs merged
          </span>
        </div>
        {upstream.description ? (
          <p className="mt-1 text-mk-fg-mute font-mono text-sm">{upstream.description}</p>
        ) : null}
      </header>

      <ul className="flex flex-col gap-2 border-t border-mk-border-soft pt-3 font-mono text-sm">
        {prsToShow.map((p) => (
          <li key={p.url} className="flex items-baseline gap-2">
            <span aria-hidden className="text-mk-green select-none">
              ●
            </span>
            <span className="text-mk-purple shrink-0">#{p.number}</span>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-mk-fg hover:text-mk-cyan truncate"
            >
              {p.title}
            </a>
          </li>
        ))}
        {upstream.prs.length > prsToShow.length ? (
          <li className="text-mk-fg-mute text-xs">
            +{upstream.prs.length - prsToShow.length} more
          </li>
        ) : null}
      </ul>
    </article>
  );
}
