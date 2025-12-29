// src/components/ShowcaseSync.tsx
import Container from "./Container";

type StepTone = "primary" | "muted" | "normal";

type Step = {
  label: string;
  emoji: string;
  tone?: StepTone;
  sub?: string;
};

const STEPS: Step[] = [
  {
    emoji: "📱",
    label: "앱·웹·소프트웨어 커스텀 개발",
    sub: "어떤 아이디어든 현실로 구현하는 전천후 기술력",
    tone: "primary",
  },
  {
    emoji: "💸",
    label: "불필요한 거품을 뺀 합리적 비용",
    sub: "고객사의 예산에 맞춘 최적화된 개발 플랜 제안",
  },
  {
    emoji: "💎",
    label: "타협하지 않는 압도적 퀄리티",
    sub: "대충 만들지 않습니다. 결과로 증명하는 완성도",
  },
  {
    emoji: "🤝",
    label: "처음부터 끝까지 '진짜' 책임감",
    sub: "잠수나 외면 없는, 든든한 비즈니스 파트너십",
    tone: "muted",
  },
];

export default function ShowcaseSync() {
  return (
    <section className="relative overflow-hidden bg-white py-28 text-neutral-900">
      {/* subtle background tone */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-50 to-white" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      <Container>
        {/* Top headline */}
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.28em] text-neutral-400">
            OUTSOURCING PARTNER
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl text-4xl md:text-6xl font-bold tracking-tight leading-[1.15]">
         
            <br className="hidden md:block" />  
            개발이 필요한 <span className="text-blue-600">모든 순간</span>
             <br/>앱터스와 함께하세요.
          </h2>

          {/* small dots */}
          <div className="mt-10 flex items-center justify-center">
            <div className="flex flex-col items-center gap-2 opacity-50">
              <span className="h-1 w-1 rounded-full bg-neutral-400" />
              <span className="h-1 w-1 rounded-full bg-neutral-400" />
              <span className="h-1 w-1 rounded-full bg-neutral-400" />
            </div>
          </div>
        </div>

        {/* Two-column content */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center">
          {/* Left: WHY block */}
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-blue-600">
              WHY
            </p>

            <h3 className="mt-6 text-4xl md:text-5xl font-bold leading-[1.12] tracking-tight">
  거품은 걷어내고,<br />
  책임감은 더했습니다
</h3>

<p className="mt-8 max-w-lg text-base md:text-lg leading-relaxed text-neutral-600">
  "어디는 안 된다 하고, 어디는 너무 비싸고..."<br />
  더 이상 고민하지 마세요. 앱터스는 어떤 프로젝트든 <br />
  합리적인 비용으로 최상의 퀄리티를 약속합니다.
</p>

            {/* brand signature */}
            <div className="mt-12 inline-flex items-center gap-3 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              <span className="text-xs font-semibold tracking-[0.22em] text-neutral-600">
                APTUS SOFTWARE SOLUTIONS
              </span>
            </div>
          </div>

          {/* Right: vertical roadmap */}
          <div className="relative mx-auto w-full max-w-md">
            {/* vertical dotted line */}
            <div className="absolute left-8 top-6 bottom-6 w-px bg-neutral-200" />
            <div className="absolute left-8 top-6 bottom-6 w-px [background-image:repeating-linear-gradient(to_bottom,#a3a3a3_0px,#a3a3a3_6px,transparent_6px,transparent_14px)] opacity-40" />

            <div className="space-y-6">
              {STEPS.map((s, idx) => {
                const tone = s.tone ?? "normal";
                const isPrimary = tone === "primary";
                const isMuted = tone === "muted";

                const dotClass = isPrimary
                  ? "bg-blue-600"
                  : isMuted
                  ? "bg-neutral-300"
                  : "bg-neutral-500";

                const pillClass = isPrimary
                  ? "border-blue-200 bg-blue-50"
                  : isMuted
                  ? "border-neutral-200 bg-neutral-50"
                  : "border-neutral-200 bg-white";

                return (
                  <div key={idx} className="relative pl-14">
                    {/* node */}
                    <div className="absolute left-6 top-3 flex h-5 w-5 items-center justify-center">
                      <span className={["h-2.5 w-2.5 rounded-full", dotClass].join(" ")} />
                    </div>

                    {/* pill */}
                    <div
                      className={[
                        "w-full rounded-2xl px-5 py-4",
                        "border",
                        "shadow-sm",
                        "transition-transform duration-300 hover:-translate-y-0.5",
                        pillClass,
                      ].join(" ")}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-xl leading-none mt-0.5">{s.emoji}</span>
                        <div>
                          <div className="text-base md:text-lg font-semibold tracking-tight text-neutral-900">
                            {s.label}
                          </div>
                          {s.sub && (
                            <div className="mt-1 text-sm leading-relaxed text-neutral-500">
                              {s.sub}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
