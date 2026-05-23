import { Star } from "lucide-react";
import { cn } from "@/lib/cn";
import type { Extension } from "@/lib/types";

type Props = {
  ext: Extension;
  variant?: "big" | "small";
  className?: string;
};

function fmtInstalls(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return `${n}`;
}

export function ExtensionCard({ ext, variant = "small", className }: Props) {
  const big = variant === "big";
  return (
    <a
      href={ext.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group block border-l-2 border-mk-orange bg-mk-bg-elev rounded-md p-5",
        "border-y border-r border-mk-border",
        "transition-all hover:-translate-y-0.5 hover:border-l-mk-pink",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-mk-cyan",
        big ? "md:p-7" : "p-4",
        className,
      )}
    >
      <div className="flex items-baseline gap-2">
        <h3
          className={cn(
            "font-display italic text-mk-fg leading-tight",
            big ? "text-3xl md:text-4xl" : "text-xl",
          )}
        >
          {ext.displayName}
        </h3>
        <span className="font-mono text-xs text-mk-fg-mute">v{ext.version}</span>
      </div>
      <p className={cn("mt-2 text-mk-fg-mute font-mono", big ? "text-base" : "text-sm")}>
        {ext.shortDescription}
      </p>
      <div className="mt-4 flex items-center gap-4 font-mono text-xs text-mk-fg-mute">
        <span className="text-mk-orange">{fmtInstalls(ext.installs)} installs</span>
        {ext.ratingCount > 0 ? (
          <span className="flex items-center gap-1 text-mk-yellow">
            <Star className="size-3.5" /> {ext.rating.toFixed(1)} ({ext.ratingCount})
          </span>
        ) : null}
      </div>
    </a>
  );
}
