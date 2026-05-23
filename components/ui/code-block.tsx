import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  filename?: string;
  className?: string;
};

export function CodeBlock({ children, filename, className }: Props) {
  return (
    <div
      className={cn("border border-mk-border bg-mk-bg-elev rounded-md overflow-hidden", className)}
    >
      {filename ? (
        <div className="flex items-center gap-2 px-4 py-2 border-b border-mk-border text-xs font-mono text-mk-fg-mute">
          <span className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-mk-pink/70" />
            <span className="size-2.5 rounded-full bg-mk-yellow/70" />
            <span className="size-2.5 rounded-full bg-mk-green/70" />
          </span>
          <span className="ml-2">{filename}</span>
        </div>
      ) : null}
      <pre className="px-4 py-3 text-sm leading-relaxed font-mono overflow-x-auto">{children}</pre>
    </div>
  );
}
