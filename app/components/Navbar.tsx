import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-[#F7F5F2]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-8">
        <Link
          href="/"
          className="text-xs lowercase tracking-[0.4em] transition-opacity hover:opacity-60"
        >
          bekbohem
        </Link>

        <div className="flex gap-10 text-[11px] uppercase tracking-[0.32em]">
          <Link href="/work">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/journal">Journal</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}