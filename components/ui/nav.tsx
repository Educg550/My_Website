import { cn } from "@/lib/cn";

const items = [
  { num: "01", label: "about", href: "#about" },
  { num: "02", label: "stack", href: "#stack" },
  { num: "03", label: "contributions", href: "#contributions" },
  { num: "04", label: "osi", href: "#osi" },
  { num: "05", label: "contact", href: "#contact" },
];

export function Nav({ className }: { className?: string }) {
  return (
    <nav
      aria-label="Sections"
      className={cn(
        "sticky top-0 z-30 border-b border-mk-border-soft backdrop-blur-md",
        "bg-mk-bg/70 supports-[backdrop-filter]:bg-mk-bg/50",
        className,
      )}
    >
      <ul className="mx-auto max-w-6xl flex items-center gap-4 md:gap-6 px-6 py-3 font-mono text-xs md:text-sm">
        <li className="font-display italic text-mk-fg mr-auto">
          educg550<span className="text-mk-pink">.</span>
        </li>
        {items.map((it) => (
          <li key={it.href} className="hidden sm:list-item">
            <a
              href={it.href}
              className="group inline-flex items-baseline gap-1 text-mk-fg-mute hover:text-mk-fg"
            >
              <span className="text-mk-purple group-hover:text-mk-pink">{it.num}</span>
              <span>.{it.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
