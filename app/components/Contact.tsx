export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-8 py-28">
      <div className="grid gap-12 md:grid-cols-2">
        <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
          Contact
        </p>

        <div>
          <h2 className="text-4xl font-light leading-tight">
            Let&apos;s create something meaningful.
          </h2>

          <a
            href="mailto:hello@bekbohem.com"
            className="mt-8 inline-block text-lg text-zinc-600 hover:text-black"
          >
            hello@bekbohem.com
          </a>
        </div>
      </div>
    </section>
  );
}