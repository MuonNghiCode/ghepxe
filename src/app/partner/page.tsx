import {
  FAQSection,
  PartnerHeroSection,
  PartnerValues,
  RequirementsSection,
} from "@/components";

export default function Partner() {
  return (
    <div className="min-h-screen">
      <PartnerHeroSection />
      <PartnerValues />
      <RequirementsSection />
      <FAQSection />
    </div>
  );
}
