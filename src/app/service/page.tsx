import {
  ServiceFAQSection,
  ServiceHeroSection,
  ServiceIntroduceSection,
  ServiceValues,
} from "@/components";

export default function Service() {
  return (
    <div>
      <ServiceHeroSection />
      <ServiceValues />
      <ServiceIntroduceSection />
      <ServiceFAQSection />
    </div>
  );
}
