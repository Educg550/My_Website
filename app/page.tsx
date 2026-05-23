export default function Home() {
  return (
    <main className="min-h-screen bg-mk-bg text-mk-fg flex flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-mk-pink text-4xl">Monokai theme smoke test</h1>
      <p className="text-mk-fg-mute">
        bg-mk-bg · text-mk-fg · <span className="text-mk-green">text-mk-green</span> ·{" "}
        <span className="text-mk-cyan">text-mk-cyan</span> ·{" "}
        <span className="text-mk-yellow">text-mk-yellow</span> ·{" "}
        <span className="text-mk-orange">text-mk-orange</span> ·{" "}
        <span className="text-mk-purple">text-mk-purple</span>
      </p>
      <div className="border border-mk-border bg-mk-bg-elev px-4 py-2">
        border-mk-border + bg-mk-bg-elev
      </div>
    </main>
  );
}
