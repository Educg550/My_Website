import { SectionHeader } from "@/components/ui/section-header";
import about from "@/data/about.json";

export function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeader
        id="about"
        num="02"
        crumb="about/"
        title={
          <>
            About<span className="text-mk-pink">.</span>
          </>
        }
        meta="cat bio.md"
      />
      <p className="mt-8 max-w-3xl font-mono text-mk-fg leading-relaxed">{about.bio}</p>
    </section>
  );
}
