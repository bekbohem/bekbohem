export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-8 py-28">
      <div className="grid gap-12 md:grid-cols-2">
        <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
          Contact
        </p>

        <div className="space-y-4 text-lg text-zinc-600">
          <p>
            If you'd like to collaborate, discuss a project, or simply say
            hello, I'd love to hear from you.
          </p>

          <a
            href="mailto:info@bekbohem.com"
            className="inline-block transition-opacity hover:opacity-60"
          >
            info@bekbohem.com
          </a>
        </div>
      </div>
    </section>
  );
}