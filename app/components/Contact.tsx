import Navbar from "../components/Navbar";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F7F5F2] text-[#111111]">
      <Navbar />

      <section className="mx-auto max-w-7xl px-8 py-28">
        <div className="grid gap-12 md:grid-cols-2">
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
            Contact
          </p>

          <div className="space-y-3 text-lg text-zinc-600">
            <a
              href="tel:+905472936426"
              className="block transition-opacity hover:opacity-60"
            >
              +90 547 293 64 26
            </a>

            <a
              href="mailto:info@bekbohem.com"
              className="block transition-opacity hover:opacity-60"
            >
              info@bekbohem.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}