export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-8 py-28">
      <div className="grid gap-12 md:grid-cols-2">
        <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
          About
        </p>

        <div className="max-w-2xl space-y-6 text-lg leading-8 text-zinc-600">
          <p>
            I&apos;m Ömer Aydoğan, a photographer and filmmaker based in
            Turkey.
          </p>

          <p>
            Inspired by natural light, quiet moments, and everyday life, I
            create photographs and films that capture fleeting moments with
            atmosphere, precision, and emotion.
          </p>

          <p>
            My goal is simple: to create honest, timeless visuals that allow
            people to pause, feel, and remember.
          </p>
        </div>
      </div>
    </section>
  );
}