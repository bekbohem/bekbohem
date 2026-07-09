export default function Journal() {
  return (
    <section
      id="journal"
      className="mx-auto max-w-7xl px-8 py-32"
    >
      <p className="mb-4 text-xs uppercase tracking-[0.35em] text-zinc-500">
        Journal
      </p>

      <div className="space-y-12">

        <article className="border-b border-zinc-200 pb-8">

          <h3 className="text-3xl font-light">
            Notes on silence.
          </h3>

          <p className="mt-4 text-zinc-600">
            Thoughts, photographs and observations collected over time.
          </p>

        </article>

        <article className="border-b border-zinc-200 pb-8">

          <h3 className="text-3xl font-light">
            Behind the frame.
          </h3>

          <p className="mt-4 text-zinc-600">
            Stories behind photographs and films.
          </p>

        </article>

        <article className="border-b border-zinc-200 pb-8">

          <h3 className="text-3xl font-light">
            Personal archive.
          </h3>

          <p className="mt-4 text-zinc-600">
            A collection of places, people and quiet moments.
          </p>

        </article>

      </div>
    </section>
  );
}