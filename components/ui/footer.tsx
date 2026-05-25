import contact from "@/data/contact.json";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-mk-border-soft">
      <div className="mx-auto max-w-6xl px-6 py-10 font-mono text-xs text-mk-fg-mute flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div>
          built with <span className="text-mk-fg">Next 16</span> ·{" "}
          <span className="text-mk-fg">Tailwind v4</span> · deployed on{" "}
          <span className="text-mk-fg">Vercel</span>
        </div>
        <div className="flex gap-4">
          <a
            href="https://github.com/Educg550/my-website"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-mk-cyan"
          >
            source
          </a>
          {contact.cv ? (
            <a
              href={contact.cv}
              className="hover:text-mk-cyan"
              target="_blank"
              rel="noopener noreferrer"
            >
              cv.en.pdf
            </a>
          ) : null}
          {contact.cv_pt ? (
            <a
              href={contact.cv_pt}
              className="hover:text-mk-cyan"
              target="_blank"
              rel="noopener noreferrer"
            >
              cv.pt.pdf
            </a>
          ) : null}
          <span>© {new Date().getFullYear()} Eduardo Guedes</span>
        </div>
      </div>
    </footer>
  );
}
