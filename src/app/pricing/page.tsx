import { Metadata } from "next";
import { Heading } from "../(landing-page)/_components/heading";
import { PricingSection } from "../(landing-page)/_components/pricing-section";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Subscribe and start using the app",
};

const PricingPage = () => {
  return (
    <main>
      <Heading />
      <PricingSection />
    </main>
  );
};

export default PricingPage;
