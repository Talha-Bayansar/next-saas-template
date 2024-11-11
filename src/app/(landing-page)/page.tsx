import { FeaturesSection } from "./_components/features-section";
import { Footer } from "./_components/footer";
import { Heading } from "./_components/heading";
import { HeroSection } from "./_components/hero-section";
import { PricingSection } from "./_components/pricing-section";
import { SignupSection } from "./_components/signup-section";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Heading />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <SignupSection />
      </main>
      <Footer />
    </div>
  );
}
