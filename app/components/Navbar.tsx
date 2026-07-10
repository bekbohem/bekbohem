import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-black text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-8">
        <Link
          href="/"
          className="text-xs lowercase tracking-[0.4em] transition-opacity hover:opacity-60"
        >
          bekbohem
        </Link>

        <div className="flex gap-10 text-[11px] uppercase tracking-[0.32em]">
          <Link href="/work" className="transition-opacity hover:opacity-60">
            Work
          </Link>

          <Link href="/about" className="transition-opacity hover:opacity-60">
            About
          </Link>

          <Link href="/journal" className="transition-opacity hover:opacity-60">
            Journal
          </Link>

          <Link href="/contact" className="transition-opacity hover:opacity-60">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}