// src/components/sections/IntegrationsSection.tsx
import Container from "../Container";

const tools = [
  "Slack",
  "Notion",
  "Google Drive",
  "Gmail",
  "Stripe",
  "Zapier",
  "Figma",
  "GitHub",
];

export default function IntegrationsSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.25em] text-black/40">INTEGRATIONS</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">Works with your tools</h2>
          <p className="mt-4 text-base md:text-lg text-black/60 max-w-2xl mx-auto">
            Plug Aptus into your existing workflow. Keep it simple, keep it fast.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {tools.map((t) => (
            <div
              key={t}
              className="rounded-2xl border border-black/10 bg-white p-5 text-center shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
            >
              <div className="mx-auto h-10 w-10 rounded-2xl bg-black/5" />
              <div className="mt-3 text-sm font-semibold text-black/70">{t}</div>
              <div className="mt-1 text-xs text-black/45">Connect</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
