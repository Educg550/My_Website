import Image from "next/image";
import { CodeBlock } from "@/components/ui/code-block";
import { type CodeToken, TypedCode } from "@/components/ui/typed-code";
import { TypedLine } from "@/components/ui/typed-line";
import contact from "@/data/contact.json";
import { getProfile } from "@/lib/github";

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
              cat resume.pdf
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
          <TypedCode
            tokens={
              [
                { text: "interface", className: "text-mk-pink" },
                { text: " Identity", className: "text-mk-green" },
                { text: " {\n", className: "text-mk-fg" },
                { text: "  name", className: "text-mk-cyan" },
                { text: ":      ", className: "text-mk-fg" },
                { text: "string", className: "text-mk-cyan" },
                { text: ";\n", className: "text-mk-fg" },
                { text: "  github", className: "text-mk-cyan" },
                { text: ":    ", className: "text-mk-fg" },
                { text: "string", className: "text-mk-cyan" },
                { text: ";\n", className: "text-mk-fg" },
                { text: "  repos", className: "text-mk-cyan" },
                { text: ":     ", className: "text-mk-fg" },
                { text: "number", className: "text-mk-cyan" },
                { text: ";\n", className: "text-mk-fg" },
                { text: "  followers", className: "text-mk-cyan" },
                { text: ": ", className: "text-mk-fg" },
                { text: "number", className: "text-mk-cyan" },
                { text: ";\n", className: "text-mk-fg" },
                { text: "  stack", className: "text-mk-cyan" },
                { text: ":     ", className: "text-mk-fg" },
                { text: "string", className: "text-mk-cyan" },
                { text: "[]", className: "text-mk-fg" },
                { text: ";\n", className: "text-mk-fg" },
                { text: "}\n\n", className: "text-mk-fg" },
                { text: "const", className: "text-mk-pink" },
                { text: " me", className: "text-mk-fg" },
                { text: ":", className: "text-mk-fg" },
                { text: " Identity", className: "text-mk-green" },
                { text: " = {\n", className: "text-mk-fg" },
                { text: "  name", className: "text-mk-cyan" },
                { text: ":      ", className: "text-mk-fg" },
                { text: `"${profile.name ?? profile.login}"`, className: "text-mk-yellow" },
                { text: ",\n", className: "text-mk-fg" },
                { text: "  github", className: "text-mk-cyan" },
                { text: ":    ", className: "text-mk-fg" },
                { text: `"@${profile.login}"`, className: "text-mk-yellow" },
                { text: ",\n", className: "text-mk-fg" },
                { text: "  repos", className: "text-mk-cyan" },
                { text: ":     ", className: "text-mk-fg" },
                { text: String(profile.publicRepos), className: "text-mk-purple" },
                { text: ",\n", className: "text-mk-fg" },
                { text: "  followers", className: "text-mk-cyan" },
                { text: ": ", className: "text-mk-fg" },
                { text: String(profile.followers), className: "text-mk-purple" },
                { text: ",\n", className: "text-mk-fg" },
                { text: "  stack", className: "text-mk-cyan" },
                { text: ":     [", className: "text-mk-fg" },
                { text: '"Python"', className: "text-mk-yellow" },
                { text: ", ", className: "text-mk-fg" },
                { text: '"TS"', className: "text-mk-yellow" },
                { text: ", ", className: "text-mk-fg" },
                { text: '"Backend"', className: "text-mk-yellow" },
                { text: ", ", className: "text-mk-fg" },
                { text: '"AI"', className: "text-mk-yellow" },
                { text: "],\n", className: "text-mk-fg" },
                { text: "};", className: "text-mk-fg" },
              ] satisfies CodeToken[]
            }
          />
          <div className="mt-3 pt-3 border-t border-mk-border flex items-center gap-4">
            <Image
              src={profile.avatarUrl}
              alt={`${profile.login} avatar`}
              width={80}
              height={80}
              className="rounded-full border-2 border-mk-cyan/50 shrink-0"
              priority
            />
            <div className="flex flex-col gap-1 min-w-0">
              <span className="text-mk-fg font-mono text-sm font-semibold truncate">
                {profile.name ?? profile.login}
              </span>
              <a
                href={profile.htmlUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-mk-cyan text-sm hover:underline truncate"
              >
                github.com/{profile.login}
              </a>
            </div>
          </div>
        </CodeBlock>
      </div>
    </section>
  );
}
