import {
  AboutHeroSection,
  PlatformSection,
  MemberSection,
  Header,
  Footer,
} from "@/components";

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <AboutHeroSection />
      <PlatformSection />
      <MemberSection />
      <Footer />
    </div>
  );
}
