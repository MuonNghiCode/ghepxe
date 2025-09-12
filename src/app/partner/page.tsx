import HeroSection from "@/components/partner/HeroSection";
import PartnerValues from "@/components/partner/PartnerValues";
import RequirementsSection from "@/components/partner/RequirementsSection";
import FAQSection from "@/components/partner/FAQSection";

export default function Partner() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PartnerValues />
      <RequirementsSection />
      <FAQSection />
    </div>
  );
}
