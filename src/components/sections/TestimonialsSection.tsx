// src/components/sections/TestimonialsSection.tsx
import Container from "../Container";

type T = {
  name: string;
  role: string;
  text: string;
  initials: string;
};

const testimonials: T[] = [
  {
    name: "Soojin Park",
    role: "Freelance Designer",
    text: "I finally have a single place to track clients, projects, and invoices. It feels calm, not chaotic.",
    initials: "SP",
  },
  {
    name: "Minho Kim",
    role: "Solo Dev / Studio Owner",
    text: "The dashboard is clean and fast. I can see what matters in 10 seconds and get back to shipping.",
    initials: "MK",
  },
  {
    name: "Jihyun Lee",
    role: "Operations",
    text: "Simple enough for the team. Powerful enough for reporting. This hits the sweet spot.",
    initials: "JL",
  },
];

function Avatar({ initials }: { initials: string }) {
  return (
    <div className="h-10 w-10 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold">
      {initials}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.25em] text-black/40">TESTIMONIALS</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">Loved by people who build</h2>
          <p className="mt-4 text-base md:text-lg text-black/60 max-w-2xl mx-auto">
            Real teams and solo operators using the same simple system.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-[32px] border border-black/10 bg-white p-7 shadow-[0_25px_80px_rgba(15,23,42,0.10)]"
            >
              <p className="text-sm leading-relaxed text-black/70">“{t.text}”</p>
              <div className="mt-6 flex items-center gap-3">
                <Avatar initials={t.initials} />
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-black/45">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
