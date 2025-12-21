// src/components/LogosStrip.tsx
import Container from "./Container";

const logos = [
  "Amsterdam",
  "GAVANISH",
  "Relativity",
  "Olimno",
  "Froya",
  "Aptx",
];

export default function LogosStrip() {
  return (
    <section className="pb-14">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-semibold text-black/35">
          {logos.map((name) => (
            <span key={name} className="tracking-wide">
              {name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
