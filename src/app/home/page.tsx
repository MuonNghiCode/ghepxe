import {
  DownloadSection,
  HomeHeroSection,
  IntroduceSection,
  PartnerSection,
  Statcard,
} from "@/components";

export default function Homepage() {
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
