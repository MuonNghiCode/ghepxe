import HeroSection from "@/components/download/HeroSection";
import CTASection from "@/components/download/CTASection";
import { Footer, Header } from "@/components";

export default function Download() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CTASection />
      <Footer />
    </div>
  );
}
