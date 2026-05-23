export default function Home() {
  return (
    <main className="min-h-screen bg-mk-bg text-mk-fg flex flex-col items-center justify-center gap-8 p-8">
      <h1 className="font-display italic text-6xl text-mk-fg">Eduardo Guedes.</h1>
      <p className="text-mk-fg-mute max-w-md text-center">
        Smoke-test: <span className="font-display italic text-mk-pink">display italic</span>{" "}
        + mono body. Ligatures below should fuse <code>=&gt;</code>, <code>&gt;=</code>,{" "}
        <code>!==</code>.
      </p>
      <pre className="bg-mk-bg-elev border border-mk-border px-4 py-3 text-mk-green">
{`const ok = (x) => x >= 0 && x !== null;`}
      </pre>
    </main>
  );
}
