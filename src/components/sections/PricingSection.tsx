// src/components/sections/PricingSection.tsx
import Container from "../Container";
import Button from "../Button";
import Reveal from "../ui/Reveal";

type Plan = {
  name: string;
  price: string;
  period: string;
  tagline: string;
  features: string[];
  cta: { text: string; href: string; variant?: "primary" | "secondary" };
  highlight?: boolean;
};

const plans: Plan[] = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    tagline: "For trying the workflow",
    features: ["1 workspace", "Basic client list", "Simple project tracking", "Email support"],
    cta: { text: "Get started", href: "/signup", variant: "secondary" },
  },
  {
    name: "Pro",
    price: "$19",
    period: "/mo",
    tagline: "For serious freelancers",
    features: [
      "Unlimited clients & projects",
      "Invoices + payment status",
      "Analytics dashboard",
      "Export & reports",
      "Priority support",
    ],
    cta: { text: "Start Pro", href: "/signup", variant: "primary" },
    highlight: true,
  },
  {
    name: "Team",
    price: "$49",
    period: "/mo",
    tagline: "For small studios",
    features: [
      "Up to 5 seats",
      "Roles & permissions",
      "Shared pipeline",
      "Team analytics",
      "SLA support",
    ],
    cta: { text: "Contact sales", href: "/contact", variant: "secondary" },
  },
];

function Check() {
  return (
    <span className="mt-[2px] inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/5">
      <span className="h-2 w-2 rounded-full bg-black/50" />
    </span>
  );
}

export default function PricingSection() {
  return (
    <section className="py-24">
      <Container>
        {/* 타이틀 블록: 먼저 등장 */}
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.25em] text-black/40">PRICING</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
              Simple plans that scale
            </h2>
            <p className="mt-4 text-base md:text-lg text-black/60 max-w-2xl mx-auto">
              Start free, upgrade when you’re ready. No hidden fees, cancel anytime.
            </p>
          </div>
        </Reveal>

        {/* 카드 그리드 */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, idx) => (
            <Reveal key={p.name} delay={idx * 0.08} y={28}>
              <div
                className={[
                  "rounded-[32px] border border-black/10 bg-white p-7 md:p-8",
                  "shadow-[0_25px_80px_rgba(15,23,42,0.10)]",
                  "transition will-change-transform",
                  p.highlight ? "relative md:-mt-2 md:mb-2 ring-1 ring-black/10" : "",
                ].join(" ")}
              >
                {p.highlight ? (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
                      Most popular
                    </span>
                  </div>
                ) : null}

                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold">{p.name}</h3>
                    <p className="mt-1 text-sm text-black/55">{p.tagline}</p>
                  </div>
                </div>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold tracking-tight">{p.price}</span>
                  {p.period ? <span className="text-sm text-black/45">{p.period}</span> : null}
                </div>

                <div className="mt-6">
                  <Button href={p.cta.href} variant={p.cta.variant ?? "primary"}>
                    {p.cta.text}
                  </Button>
                </div>

                <div className="mt-7 space-y-3">
                  {p.features.map((f) => (
                    <div key={f} className="flex gap-3 text-sm text-black/65">
                      <Check />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                {p.highlight ? (
                  <div className="mt-7 rounded-2xl bg-black/5 p-4 text-xs text-black/60">
                    <div className="font-semibold text-black/70">Pro tip</div>
                    <div className="mt-1">Most users break even with 1–2 paid invoices.</div>
                  </div>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
