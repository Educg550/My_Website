import { cn } from "@/lib/cn";

type Props = {
  crumb: string;
  num: string;
  title: React.ReactNode;
  meta?: string;
  id?: string;
  className?: string;
};

export function SectionHeader({ crumb, num, title, meta, id, className }: Props) {
  return (
    <header id={id} className={cn("flex flex-col gap-3", className)}>
      <div className="flex items-baseline gap-3 text-xs font-mono uppercase tracking-wider text-mk-fg-mute">
        <span className="text-mk-purple">{num}</span>
        <span className="text-mk-pink">{crumb}</span>
      </div>
      <h2 className="font-display italic text-5xl md:text-6xl text-mk-fg leading-[0.95]">
        {title}
      </h2>
      {meta ? (
        <div className="font-mono text-sm text-mk-fg-mute">
          <span className="text-mk-green">$</span> {meta}
        </div>
      ) : null}
    </header>
  );
}
