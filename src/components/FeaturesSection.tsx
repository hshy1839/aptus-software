// src/components/ProcessSection.tsx
import Container from "./Container";

type ReasonCard = {
  title: string;
  desc: string;
};

type SpecCard = {
  title: string;
  desc: string;
};

const REASONS: ReasonCard[] = [
  {
    title: "책임감 있는 진행",
    desc: "주간 공유 · 이슈 기록 · 일정 관리로\n‘연락 끊김/잠수’ 리스크를 없앱니다.",
  },
  {
    title: "복잡한 시스템도 OK",
    desc: "단순 랜딩부터 관리자/정산/권한/자동화까지 구조 설계로 안정적으로 구축합니다.",
  },
  {
    title: "빠른 일정 · 합리적 견적",
    desc: "범위를 먼저 확정하고,\n불필요한 비용/일정을 줄여 효율을 극대화합니다.",
  },
  {
    title: "높은 완성도 · 운영까지",
    desc: "오픈이 끝이 아닙니다.\n배포/심사/핫픽스/개선까지 운영 관점으로 갑니다.",
  },
];

const SPECS: SpecCard[] = [
  {
    title: "백엔드 개발",
    desc: "Node.js(Express), NestJS, MongoDB/Mongoose, MySQL\nAuth(JWT/Cookie), Admin API, 결제/정산/권한 등" ,
  },
  {
    title: "프론트엔드 개발",
    desc: "Next.js, React, TypeScript, Tailwind CSS\n관리자 대시보드/테이블/필터/모달/차트 등",
  },
  {
    title: "모바일 앱 개발",
    desc: "Flutter (Android/iOS), Firebase(FCM/Auth)\n스토어 배포/심사 대응, WebView 패키징 등",
  },
  {
    title: "외부 API · 인프라",
    desc: "Kakao(지도/로그인), PG 연동, OpenAI API, 알림\nAWS/Render/Vercel 배포, 환경변수/로그/모니터링 등",
  },
];

function BrText({ text }: { text: string }) {
  return (
    <>
      {text.split("\n").map((line, i) => (
        <span key={i} className="block">
          {line}
        </span>
      ))}
    </>
  );
}

export default function ProcessSection() {
  return (
    <section className="relative bg-white py-24">
      {/* 배경 톤 (이미지처럼 보이게) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-neutral-50 to-white" />
      <div className="absolute inset-0 -z-10 opacity-[0.04] [background-image:radial-gradient(#000_1px,transparent_1px)] [background-size:22px_22px]" />

      <Container>
        {/* ─────────────────────────────────────────────
            TOP: WHY APTUS
           ───────────────────────────────────────────── */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
            왜 <span className="text-blue-600">APTUS</span>인가요?
          </h2>
          <p className="mt-5 text-sm md:text-base text-neutral-500">
            외주 개발에서 가장 큰 리스크(연락, 일정, 책임)를{" "}
            <span className="font-semibold text-neutral-700">프로세스</span>로 제거합니다.
          </p>
        </div>

        {/* 4 cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map((c, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-neutral-200 bg-white px-6 py-7 shadow-[0_10px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_18px_46px_rgba(15,23,42,0.10)] transition"
            >
              <div className="text-lg font-bold text-neutral-900">{c.title}</div>
              <div className="mt-3 text-sm leading-relaxed text-neutral-600 whitespace-pre-line">
                <BrText text={c.desc} />
              </div>
            </div>
          ))}
        </div>

        {/* ─────────────────────────────────────────────
            MID: APTUS SPEC
           ───────────────────────────────────────────── */}
        <div className="mt-50 text-center">
          <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
            <span className="text-blue-600">APTUS</span>의 개발 스펙
          </h3>
        </div>

        {/* 2x2 spec cards (bigger, image-like blocks) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {SPECS.map((c, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-neutral-200 bg-neutral-50 px-8 py-8 shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
            >
              <div className="text-lg md:text-xl font-extrabold text-neutral-900">
                {c.title}
              </div>
              <div className="mt-3 text-sm md:text-base leading-relaxed text-neutral-600 whitespace-pre-line">
                <BrText text={c.desc} />
              </div>
            </div>
          ))}
        </div>

 
      </Container>
    </section>
  );
}
