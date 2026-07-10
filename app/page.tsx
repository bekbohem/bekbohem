import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F5F2] text-[#111111]">
      <Navbar />
      <Hero />
    </main>
  );
}