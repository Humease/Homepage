import { HeroSection } from "@/components/HeroSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { BusinessOverviewSection } from "@/components/BusinessOverviewSection";
import { TrustSection } from "@/components/TrustSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <BusinessOverviewSection />
      <TrustSection />
    </>
  );
}
