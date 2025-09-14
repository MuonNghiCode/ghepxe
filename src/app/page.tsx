import {
  DownloadSection,
  HomeHeroSection,
  IntroduceSection,
  PartnerSection,
  Statcard,
} from "@/components";

export default function Home() {
  return (
    <section>
      <HomeHeroSection />
      <Statcard />
      <IntroduceSection />
      <PartnerSection />
      <DownloadSection />
    </section>
  );
}
