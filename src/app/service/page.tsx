import {
  Footer,
  Header,
  ServiceFAQSection,
  ServiceHeroSection,
  ServiceIntroduceSection,
  ServiceValues,
} from "@/components";

export default function Service() {
  return (
    <div>
      <Header />
      <ServiceHeroSection />
      <ServiceValues />
      <ServiceIntroduceSection />
      <ServiceFAQSection />
      <Footer />
    </div>
  );
}
