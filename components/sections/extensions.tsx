import { ExtensionCard } from "@/components/ui/extension-card";
import { SectionHeader } from "@/components/ui/section-header";
import data from "@/data/extensions.json";
import { getPublisherExtensions } from "@/lib/vscode";

export async function Extensions() {
  const exts = await getPublisherExtensions(data.publisher);
  const [lead, ...rest] = exts;

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeader
        id="extensions"
        num="06"
        crumb="marketplace/"
        title={
          <>
            VS Code extensions, shipped<span className="text-mk-pink">.</span>
          </>
        }
        meta={`marketplace.visualstudio.com/publishers/${data.publisher}`}
      />

      {exts.length === 0 ? (
        <p className="mt-10 font-mono text-sm text-mk-fg-mute">
          No published extensions yet for <code>{data.publisher}</code>.
        </p>
      ) : (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-5">
          {lead ? (
            <ExtensionCard ext={lead} variant="big" className="md:col-span-1 md:row-span-1" />
          ) : null}
          {rest.slice(0, 2).map((e) => (
            <ExtensionCard key={e.id} ext={e} variant="small" />
          ))}
        </div>
      )}

      <p className="mt-6 font-mono text-xs text-mk-fg-mute">
        <a
          href={`https://marketplace.visualstudio.com/publishers/${data.publisher}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-mk-cyan"
        >
          → marketplace.visualstudio.com/publishers/{data.publisher}
        </a>
      </p>
    </section>
  );
}
