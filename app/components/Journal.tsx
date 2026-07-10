import Navbar from "../components/Navbar";
import Journal from "../components/Journal";

export default function JournalPage() {
  return (
    <main className="min-h-screen bg-[#F7F5F2] text-[#111111]">
      <Navbar />
      <Journal />
    </main>
  );
}