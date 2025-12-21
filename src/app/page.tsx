import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LogosStrip from "@/components/LogosStrip";
import ShowcaseSync from "@/components/ShowcaseSync";
import FeaturesSection from "@/components/FeaturesSection";

import PricingSection from "@/components/sections/PricingSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import IntegrationsSection from "@/components/sections/IntegrationsSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import BlogPreviewSection from "@/components/sections/BlogPreviewSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogosStrip />
        <ShowcaseSync />
        <FeaturesSection />

        <div id="pricing">
          <PricingSection />
        </div>

        <TestimonialsSection />

        <div id="integrations">
          <IntegrationsSection />
        </div>

        <FinalCTASection />
        <BlogPreviewSection />
      </main>
      <Footer />
    </>
  );
}
