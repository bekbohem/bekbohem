export default function Work() {
  const works = [
    "The Silent Road",
    "Tokyo Mornings",
    "Black Sea",
  ];

  return (
    <section id="work" className="mx-auto max-w-7xl px-8 py-28">
      <div className="space-y-28">
        {works.map((title, index) => (
          <article key={title}>
            <p className="mb-6 text-xs uppercase tracking-[0.35em] text-zinc-500">
              0{index + 1}
            </p>

            <h2 className="mb-8 text-4xl font-light tracking-tight">
              {title}
            </h2>

            <div className="mx-auto aspect-[16/8] w-[84%] rounded-sm border border-zinc-200 bg-[#efefed]" />
          </article>
        ))}
      </div>
    </section>
  );
}