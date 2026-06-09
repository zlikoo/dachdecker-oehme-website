import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LeistungenSection from "@/components/LeistungenSection";
import StatsSection from "@/components/StatsSection";
import GalerieSection from "@/components/GalerieSection";
import KontaktSection from "@/components/KontaktSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <LeistungenSection />
      <StatsSection />
      <GalerieSection />
      <KontaktSection />
      <Footer />
    </main>
  );
}
