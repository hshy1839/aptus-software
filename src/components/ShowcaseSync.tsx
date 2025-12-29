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
    sub: "아이디어를 빠르게 MVP로 구현하고, 운영까지 확장합니다.",
    tone: "primary",
  },
  {
    emoji: "💸",
    label: "불필요한 거품을 뺀 합리적 비용",
    sub: "예산에 맞춰 범위/우선순위를 설계해 낭비를 없앱니다.",
  },
  {
    emoji: "💎",
    label: "타협하지 않는 퀄리티",
    sub: "‘돌아가는 수준’이 아니라 ‘서비스 수준’으로 완성합니다.",
  },
  {
    emoji: "🤝",
    label: "끝까지 책임지는 파트너십",
    sub: "잠수/회피 없이 진행 공유, 일정 준수, 배포까지 책임집니다.",
    tone: "muted",
  },
];

export default function ShowcaseSync() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-28 text-neutral-900">
      {/* subtle background tone */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-50 to-white" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      <Container>
        {/* Top headline */}
        <div className="text-center">
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] text-neutral-400">
            OUTSOURCING PARTNER
          </p>

          {/* ✅ 모바일 베이스를 확 낮춤: text-3xl -> sm:4xl -> md:6xl */}
          <h2 className="mx-auto mt-3 max-w-4xl text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-[1.12] sm:leading-[1.15]">
            개발이 필요한 <span className="text-blue-600">모든 순간</span>
            <br />
            앱터스와 함께하세요.
          </h2>

          {/* small dots */}
          <div className="mt-8 sm:mt-10 flex items-center justify-center">
            <div className="flex flex-col items-center gap-2 opacity-50">
              <span className="h-1 w-1 rounded-full bg-neutral-400" />
              <span className="h-1 w-1 rounded-full bg-neutral-400" />
              <span className="h-1 w-1 rounded-full bg-neutral-400" />
            </div>
          </div>
        </div>

        {/* Two-column content */}
        <div className="mt-12 sm:mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-20 items-start md:items-center">
          {/* Left: WHY block */}
          <div className="order-1">
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] text-blue-600">
              WHY
            </p>

            {/* ✅ 모바일에서 확실히 작게: text-2xl/3xl/5xl */}
            <h3 className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-5xl font-bold leading-[1.15] sm:leading-[1.12] tracking-tight">
              거품은 걷어내고,
              <br />
              책임감은 더했습니다
            </h3>

            {/* ✅ 모바일 본문도 내려줌 */}
            <p className="mt-5 sm:mt-8 max-w-lg text-[15px] sm:text-base md:text-lg leading-relaxed text-neutral-600">
              “어디는 안 된다 하고, 어디는 너무 비싸고…”
              <br className="hidden sm:block" />
              이제 비교에 시간 쓰지 마세요. 앱터스는 어떤 프로젝트든
              <br className="hidden sm:block" />
              합리적인 비용으로 최상의 퀄리티를 약속합니다.
            </p>

            {/* brand signature */}
            <div className="mt-8 sm:mt-12 inline-flex items-center gap-3 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-neutral-600">
                APTUS SOFTWARE SOLUTIONS
              </span>
            </div>
          </div>

          {/* Right: vertical roadmap */}
          <div className="order-2 relative mx-auto w-full max-w-md">
            {/* vertical dotted line */}
            <div className="absolute left-6 sm:left-8 top-4 sm:top-6 bottom-4 sm:bottom-6 w-px bg-neutral-200" />
            <div className="absolute left-6 sm:left-8 top-4 sm:top-6 bottom-4 sm:bottom-6 w-px [background-image:repeating-linear-gradient(to_bottom,#a3a3a3_0px,#a3a3a3_6px,transparent_6px,transparent_14px)] opacity-40" />

            <div className="space-y-4 sm:space-y-6">
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
                  <div key={idx} className="relative pl-12 sm:pl-14">
                    {/* node */}
                    <div className="absolute left-4 sm:left-6 top-3 flex h-5 w-5 items-center justify-center">
                      <span
                        className={["h-2.5 w-2.5 rounded-full", dotClass].join(" ")}
                      />
                    </div>

                    {/* pill */}
                    <div
                      className={[
                        "w-full rounded-2xl px-4 sm:px-5 py-4",
                        "border",
                        "shadow-sm",
                        "transition-transform duration-300 hover:-translate-y-0.5",
                        pillClass,
                      ].join(" ")}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-lg sm:text-xl leading-none mt-0.5">
                          {s.emoji}
                        </span>
                        <div className="min-w-0">
                          <div className="text-[15px] sm:text-base md:text-lg font-semibold tracking-tight text-neutral-900">
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
