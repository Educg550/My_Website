import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import contact from "@/data/contact.json";

export function Contact() {
  return (
    <Reveal>
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeader
          id="contact"
          num="07"
          crumb="contact/"
          title={
            <>
              Get in touch<span className="text-mk-pink">.</span>
            </>
          }
          meta="ping me"
        />

        <div className="mt-10 grid md:grid-cols-2 gap-6 font-mono text-sm">
          <a
            href={`mailto:${contact.email}`}
            className="border border-mk-border bg-mk-bg-elev rounded-md p-5 hover:border-mk-cyan hover:text-mk-cyan"
          >
            <div className="text-xs uppercase text-mk-fg-mute">Email</div>
            <div className="mt-1 text-mk-fg">{contact.email}</div>
          </a>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {contact.socials.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-mk-border bg-mk-bg-elev rounded-md p-4 hover:border-mk-cyan hover:text-mk-cyan"
                >
                  <div className="text-xs uppercase text-mk-fg-mute">{s.label}</div>
                  <div className="mt-1 text-mk-fg">{s.handle}</div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Reveal>
  );
}
