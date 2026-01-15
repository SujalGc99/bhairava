import Navbar from "@/components/Navbar";
import ShirtScrollSequence from "@/components/ShirtScrollSequence";
import BuySection from "@/components/BuySection";
import Footer from "@/components/Footer";
import LegacySection from "@/components/LegacySection";
import CraftSection from "@/components/CraftSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-void-black selection:bg-temple-gold selection:text-void-black">
      <Navbar />

      {/* Hero & Story Sequence */}
      <ShirtScrollSequence />

      {/* Legacy/Story Section */}
      <LegacySection />

      {/* Craft/Details Section */}
      <CraftSection />

      {/* Buy Section */}
      <BuySection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
