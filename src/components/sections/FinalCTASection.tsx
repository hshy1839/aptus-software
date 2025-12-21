// src/components/sections/FinalCTASection.tsx
import Container from "../Container";
import Button from "../Button";

export default function FinalCTASection() {
  return (
    <section className="py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[40px] border border-black/10 bg-white p-10 md:p-14 shadow-[0_25px_80px_rgba(15,23,42,0.12)]">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-100 via-white to-white" />
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.25em] text-black/40">GET STARTED</p>
            <h3 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
              Ready to run your work like a system?
            </h3>
            <p className="mt-4 text-base md:text-lg text-black/60">
              Start free and upgrade later. Set up in minutes—no complex configuration.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button href="/signup">Create account</Button>
              <Button href="/blog" variant="secondary">
                See how it works
              </Button>
            </div>

            <div className="mt-6 text-xs text-black/45">
              No credit card required · Cancel anytime
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
