// src/components/sections/UseCaseSection.tsx
import Container from "../Container";
import Reveal from "../ui/Reveal";

type UseCase = {
  text: string;
};

const useCases: UseCase[] = [
  { text: "빠르게 MVP를 만들어 시장 반응을 확인해야 할 때" },
  { text: "복잡한 로직이 필요하지만, 비용 때문에 개발이 망설여질 때" },
  { text: "내부 개발 리소스가 부족해 일정이 계속 밀리고 있을 때" },
  { text: "디자인은 준비됐고, 이제 개발 파트너만 필요할 때" },
  { text: "AI/GPT API 연동 등 외부 API 기반 기능 구현이 필요할 때" },
  { text: "오픈 이후까지 안정적으로 함께 갈 개발 파트너가 필요할 때" },
];

export default function UseCaseSection() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Theme: warm premium (not the old slate/blue) */}
      <div className="absolute inset-0 -z-10">
        {/* base */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FBFAF7] via-[#F6F4EE] to-[#FBFAF7]" />

        {/* soft “ink” vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(15,23,42,0.05)_55%,rgba(15,23,42,0.09)_100%)]" />

        {/* subtle grain */}
        <div className="absolute inset-0 opacity-[0.035] [background-image:radial-gradient(#000_1px,transparent_1px)] [background-size:26px_26px]" />

        {/* warm highlight blobs */}
        <div className="absolute -top-56 left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-amber-400/12 blur-[140px]" />
        <div className="absolute -bottom-72 -right-56 h-[620px] w-[620px] rounded-full bg-emerald-400/10 blur-[160px]" />
      </div>

      <Container>
        {/* Header */}
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.28em] text-black/35">
              USE CASE
            </p>

            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-[#0B1220]">
              이런 경우 <span className="text-blue-600">Aptus</span>가 필요합니다
            </h2>

            <p className="mt-5 text-sm md:text-base text-black/55">
              “외주가 필요한 순간”을 딱 6가지로 정리했습니다.
            </p>
          </div>
        </Reveal>

        {/* Pills (image-like) */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {useCases.map((u, idx) => (
            <Reveal key={u.text} delay={idx * 0.06} y={16}>
              <div
                className={[
                  "rounded-full px-7 py-5 text-center",
                  "border border-black/10",
                  "bg-white/60 backdrop-blur-md",
                  "shadow-[0_18px_45px_rgba(15,23,42,0.10)]",
                  "text-[15px] md:text-base font-semibold",
                  "text-[#111827]",
                  "transition-transform duration-300 hover:-translate-y-0.5",
                ].join(" ")}
              >
                {u.text}
              </div>
            </Reveal>
          ))}
        </div>

        {/* small note */}
        <p className="mt-10 text-center text-xs text-black/40">
          * Aptus는 “빠른 실행 + 합리적 비용 + 책임 있는 운영”을 기준으로 일합니다.
        </p>
      </Container>
    </section>
  );
}
