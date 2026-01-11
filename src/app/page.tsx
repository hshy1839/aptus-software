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

import Reveal from "@/components/ui/Reveal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Reveal>
          <Hero />
        </Reveal>

     
        <Reveal>
          <ShowcaseSync />
        </Reveal>

          <FeaturesSection />

        <Reveal>
          <div id="pricing">
            <PricingSection />
          </div>
        </Reveal>

        <Reveal>
          <TestimonialsSection />
        </Reveal>

        <Reveal>
          <div id="integrations">
            <IntegrationsSection />
          </div>
        </Reveal>

        <Reveal>
          <FinalCTASection />
        </Reveal>

        <Reveal>
          <BlogPreviewSection />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
