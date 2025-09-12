import {
  HomeHeroSection,
  IntroduceSection,
  PartnerSection,
  Statcard,
} from "@/components";

export default function Home() {
  return (
    <main>
      <HomeHeroSection />
      <Statcard />
      <IntroduceSection />
      <PartnerSection />
    </main>
  );
}
