import Image from "next/image";
import { CodeBlock } from "@/components/ui/code-block";
import { TypedLine } from "@/components/ui/typed-line";
import { getProfile } from "@/lib/github";
import contact from "@/data/contact.json";

export async function Hero() {
  const profile = await getProfile();

  return (
    <section id="hero" className="relative mx-auto max-w-6xl px-6 pt-16 md:pt-24 pb-20 md:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_30%_20%,rgba(249,38,114,0.08),transparent_60%),radial-gradient(50%_40%_at_80%_60%,rgba(102,217,239,0.08),transparent_60%)]"
      />
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="flex flex-col gap-6">
          <p className="font-mono text-sm text-mk-fg-mute">
            <span className="text-mk-purple">01</span> <span className="text-mk-pink">/hero</span>
          </p>
          <h1 className="font-display italic text-6xl md:text-7xl leading-[0.95] text-mk-fg">
            Eduardo Guedes<span className="text-mk-green">.</span>
          </h1>
          <p className="font-mono text-mk-fg-mute max-w-md">
            Software engineer · Open-source contributor · AI enthusiast
          </p>
          <div className="font-mono text-sm flex items-baseline gap-2 text-mk-fg-mute">
            <span className="text-mk-green select-none">$</span>
            <TypedLine text="whoami" className="text-mk-fg" />
          </div>
          <CodeBlock>
            {`> ${profile.name ?? profile.login}
> ${profile.bio ?? "Software engineer."}
> https://github.com/${profile.login}`}
          </CodeBlock>
          <div className="flex flex-wrap gap-3 mt-2">
            <a
              href="#contributions"
              className="inline-flex items-center gap-2 bg-mk-green text-mk-bg font-mono text-sm px-4 py-2 rounded-md hover:bg-mk-green/90"
            >
              → ./view-contributions
            </a>
            <a
              href={contact.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-mk-border text-mk-fg font-mono text-sm px-4 py-2 rounded-md hover:border-mk-cyan hover:text-mk-cyan"
            >
              cat cv.pdf
            </a>
            <a
              href={contact.cv_pt}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-mk-fg-mute hover:text-mk-cyan self-center"
            >
              [pt]
            </a>
          </div>
        </div>

        <CodeBlock filename="identity.ts" className="md:justify-self-end w-full max-w-md">
          {`const me = {
  name:      "${profile.name ?? profile.login}",
  github:    "@${profile.login}",
  repos:     ${profile.publicRepos},
  followers: ${profile.followers},
  stack:     ["Python", "TS", "Backend", "AI"],
};`}
          <div className="mt-4 flex items-center gap-3">
            <Image
              src={profile.avatarUrl}
              alt={`${profile.login} avatar`}
              width={56}
              height={56}
              className="rounded-full border border-mk-border"
              priority
            />
            <a
              href={profile.htmlUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-mk-cyan hover:underline"
            >
              github.com/{profile.login}
            </a>
          </div>
        </CodeBlock>
      </div>
    </section>
  );
}
