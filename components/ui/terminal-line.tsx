import { cn } from "@/lib/cn";

type Props = {
  prompt?: string;
  command: string;
  className?: string;
};

export function TerminalLine({ prompt = "$", command, className }: Props) {
  return (
    <div className={cn("font-mono text-sm flex items-baseline gap-2 text-mk-fg-mute", className)}>
      <span className="text-mk-green select-none">{prompt}</span>
      <span className="text-mk-fg">{command}</span>
    </div>
  );
}
