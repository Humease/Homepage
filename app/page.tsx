import { HeroSection } from "@/components/HeroSection";
import { BusinessTabsSection } from "@/components/BusinessTabsSection";
import { TrustSection } from "@/components/TrustSection";
import { ConsultingTimelineSection } from "@/components/ConsultingTimelineSection";
import { BuddyChatSection } from "@/components/BuddyChatSection";
import { ScenarioSection } from "@/components/ScenarioSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactFormSection } from "@/components/ContactFormSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BusinessTabsSection />
      <TrustSection />
      <ConsultingTimelineSection />
      <BuddyChatSection />
      <ScenarioSection />
      <FAQSection />
      <ContactFormSection />
    </>
  );
}
