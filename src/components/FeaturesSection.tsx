// src/components/ProcessSection.tsx
import Container from "./Container";
import Button from "./Button";

type Step = {
  step: string;
  title: string;
  desc: string;
  bullets: string[];
};

const STEPS: Step[] = [
  {
    step: "01",
    title: "상담 · 요구사항 정리",
    desc: "목표/예산/일정을 먼저 정리하고, 꼭 필요한 범위를 확정합니다.",
    bullets: [
      "기능 범위(필수/선택) 정리",
      "예상 일정/우선순위 합의",
      "리스크(외부 API/심사/권한) 선제 체크",
    ],
  },
  {
    step: "02",
    title: "범위 · 일정 문서화",
    desc: "‘말’이 아니라 ‘문서’로 합의합니다. 이후 변경은 원칙에 따라 관리합니다.",
    bullets: [
      "요구사항/화면/데이터 구조 정리",
      "마일스톤(주차별 목표) 설정",
      "변경 요청(CR) 프로세스 적용",
    ],
  },
  {
    step: "03",
    title: "개발 진행 · 주간 공유",
    desc: "진행 상황을 감추지 않습니다. 작업 로그와 데모를 주기적으로 공유합니다.",
    bullets: [
      "주간 단위 진행 리포트 공유",
      "데모/테스트 링크 제공",
      "이슈/의사결정 사항 즉시 기록",
    ],
  },
  {
    step: "04",
    title: "배포 · 운영 · 유지보수",
    desc: "오픈이 끝이 아닙니다. 운영 안정화까지 함께 책임집니다.",
    bullets: [
      "배포/스토어 심사 대응",
      "모니터링/버그 핫픽스",
      "운영 개선(추가 기능) 로드맵 제안",
    ],
  },
];

export default function ProcessSection() {
  return (
    <section className="relative py-24 bg-white">
      {/* subtle background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-neutral-50 to-white" />

      <Container>
        {/* header */}
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.28em] text-neutral-400">
            PROCESS
          </p>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-neutral-900">
            Aptus는 이렇게 일합니다
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-neutral-600">
            외주 개발에서 가장 중요한 건 결과는 물론, 과정입니다.
            <br className="hidden md:block" />
            Aptus는 일정과 커뮤니케이션을 시스템처럼 관리합니다.
          </p>
        </div>

        {/* steps */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {STEPS.map((s) => (
            <div
              key={s.step}
              className="group rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-3">
                    <span className="text-sm font-semibold tracking-[0.22em] text-blue-600">
                      STEP {s.step}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-neutral-300" />
                    <span className="text-xs font-medium text-neutral-500">
                      Aptus Workflow
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl md:text-2xl font-bold text-neutral-900 tracking-tight">
                    {s.title}
                  </h3>

                  <p className="mt-3 text-neutral-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                {/* subtle badge */}
                <div className="hidden md:flex shrink-0">
                  <div className="h-12 w-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold">
                    {s.step}
                  </div>
                </div>
              </div>

              {/* bullets */}
              <ul className="mt-6 space-y-3">
                {s.bullets.map((b, idx) => (
                  <li key={idx} className="flex gap-3 text-neutral-700">
                    <span className="mt-2 h-2 w-2 rounded-full bg-blue-600/80 shrink-0" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>

              {/* hover underline */}
              <div className="mt-8 h-px bg-neutral-200 group-hover:bg-neutral-300 transition" />

              {/* footer line */}
              <p className="mt-5 text-sm text-neutral-500">
                * 필요 시, 화면 정의서/기능 명세서/테스트 체크리스트까지 포함해 제공합니다.
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-4">
          <Button href="/contact">프로젝트 상담하기</Button>
          <Button href="/portfolio" variant="secondary">
            포트폴리오 보기
          </Button>
        </div>
      </Container>
    </section>
  );
}
