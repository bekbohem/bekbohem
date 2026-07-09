export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-8 py-28">
      <div className="grid gap-12 md:grid-cols-2">
        <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
          About
        </p>

        <div>
          <h2 className="text-4xl font-light leading-tight">
            A quiet visual archive.
          </h2>

          <p className="mt-8 max-w-xl leading-8 text-zinc-600">
            Bekbohem is a personal space for photography and films shaped by
            atmosphere, silence and honest observation.
          </p>
        </div>
      </div>
    </section>
  );
}