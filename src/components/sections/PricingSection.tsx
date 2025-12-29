// src/components/sections/UseCaseSection.tsx
import Container from "../Container";
import Reveal from "../ui/Reveal";

type UseCase = {
  text: string;
};

const useCases: UseCase[] = [
  { text: "시장 검증을 위한 MVP, 가장 빠른 속도로 현실화합니다" },
  { text: "복잡한 기능 구현과 합리적인 비용, 두 마리 토끼를 잡으세요" },
  { text: "정체된 개발 스케줄에 즉각적인 실행력을 더해드립니다" },
  { text: "완성된 디자인을 빈틈없는 코드와 사용자 경험으로 전환합니다" },
  { text: "LLM 및 AI API 연동으로 서비스의 기술적 격차를 만듭니다" },
  { text: "단순 런칭을 넘어 비즈니스의 지속 가능한 성장을 함께 고민합니다" },
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
             막막한 개발의 해답, <br /><span className="text-blue-600"> Aptus</span>의 강점
            </h2>

            <p className="mt-5 text-sm md:text-base text-black/55">
              고객 맞춤형 개발 아웃소싱의 진정한 가치를 경험하세요.
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
