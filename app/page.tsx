import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="bg-[#F7F5F2] text-[#111111]">
      <Navbar />
      <Hero />
      <Work />
      <About />
      <Contact />
    </main>
  );
}