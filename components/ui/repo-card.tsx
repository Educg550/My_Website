import { Star } from "lucide-react";
import { cn } from "@/lib/cn";
import type { Repo } from "@/lib/types";

type Props = {
  repo: Repo;
  variant?: "big" | "small";
  className?: string;
};

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

export function RepoCard({ repo, variant = "small", className }: Props) {
  const big = variant === "big";
  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative block border border-mk-border bg-mk-bg-elev rounded-md p-5",
        "transition-all hover:-translate-y-0.5 hover:border-mk-cyan/60",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-mk-cyan",
        big ? "md:p-7" : "p-4",
        className,
      )}
    >
      {repo.isPinned ? (
        <span aria-hidden className="absolute right-3 top-3 text-xs text-mk-fg-mute select-none">
          📌
        </span>
      ) : null}
      {repo.isFeatured ? (
        <span aria-hidden className="absolute right-3 top-3 text-xs text-mk-yellow select-none">
          ★
        </span>
      ) : null}

      <div className="font-mono text-xs text-mk-fg-mute">{repo.fullName.split("/")[0]}/</div>
      <h3
        className={cn(
          "font-display italic text-mk-fg leading-tight mt-1",
          big ? "text-4xl md:text-5xl" : "text-2xl",
        )}
      >
        {repo.name}
      </h3>

      {repo.description ? (
        <p className={cn("mt-3 text-mk-fg-mute font-mono", big ? "text-base" : "text-sm")}>
          {repo.description}
        </p>
      ) : null}

      <div className="mt-4 flex items-center gap-4 font-mono text-xs text-mk-fg-mute">
        {repo.language ? (
          <span className="flex items-center gap-1.5">
            <span className={cn("size-2.5 rounded-full", langDot(repo.language))} />
            {repo.language}
          </span>
        ) : null}
        <span className="flex items-center gap-1 text-mk-yellow">
          <Star className="size-3.5" /> {repo.stars}
        </span>
      </div>
    </a>
  );
}
