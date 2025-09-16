import {
  FAQSection,
  Footer,
  Header,
  PartnerHeroSection,
  PartnerValues,
  RequirementsSection,
} from "@/components";

export default function Partner() {
  return (
    <div className="min-h-screen">
      <Header />
      <PartnerHeroSection />
      <PartnerValues />
      <RequirementsSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
