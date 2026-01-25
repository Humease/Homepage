import { HeroSection } from "@/components/HeroSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { BusinessOverviewSection } from "@/components/BusinessOverviewSection";
import { DCSection } from "@/components/DCSection";
import { MyBuddySection } from "@/components/MyBuddySection";
import { TrustSection } from "@/components/TrustSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <BusinessOverviewSection />
      <DCSection />
      <MyBuddySection />
      <TrustSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
