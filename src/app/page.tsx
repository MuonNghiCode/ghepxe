import {
  DownloadSection,
  HomeHeroSection,
  IntroduceSection,
  PartnerSection,
  Statcard,
} from "@/components";

export default function Home() {
  return (
    <div>
      <HomeHeroSection />
      <Statcard />
      <IntroduceSection />
      <PartnerSection />
      <DownloadSection />
    </div>
  );
}
