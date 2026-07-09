export default function Navbar() {
  return (
    <header className="bg-[#F7F5F2]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-8">
        <a
          href="#"
          className="text-xs tracking-[0.4em] lowercase"
        >
          bekbohem
        </a>

        <div className="flex gap-10 text-[11px] uppercase tracking-[0.32em]">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#journal">Journal</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
}