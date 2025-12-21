// src/components/Hero.tsx
import Button from "./Button";
import Container from "./Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-100 via-white to-white" />

      <Container>
        {/* 텍스트 영역 */}
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            Run your freelance <br className="hidden md:block" />
            business like a pro
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Manage clients, projects, and invoices in one place.
            Everything you need to stay organized and get paid faster.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Button href="/signup">
              Get started
            </Button>
            <Button href="/blog" variant="secondary">
              View demo
            </Button>
          </div>
        </div>

        {/* 대시보드 카드 */}
        <div className="mt-20">
          <div className="relative mx-auto max-w-5xl rounded-3xl border border-gray-200 bg-white shadow-2xl">
            {/* 상단 브라우저 바 */}
            <div className="flex items-center gap-2 px-5 py-3 border-b">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-4 text-sm text-gray-400">
                Dashboard · Projects · Invoices
              </span>
            </div>

            {/* 내부 콘텐츠 */}
            <div className="grid grid-cols-12 gap-6 p-6">
              {/* 사이드바 */}
              <div className="col-span-12 md:col-span-3 rounded-2xl border bg-gray-50 p-4">
                <div className="h-3 w-24 bg-gray-300 rounded mb-4" />
                <div className="space-y-3">
                  <div className="h-3 w-32 bg-gray-200 rounded" />
                  <div className="h-3 w-28 bg-gray-200 rounded" />
                  <div className="h-3 w-24 bg-gray-200 rounded" />
                  <div className="h-3 w-20 bg-gray-200 rounded" />
                </div>
              </div>

              {/* 메인 차트 */}
              <div className="col-span-12 md:col-span-6 rounded-2xl border p-4">
                <div className="flex justify-between items-center mb-4">
                  <div className="h-3 w-32 bg-gray-300 rounded" />
                  <div className="h-8 w-24 bg-gray-200 rounded-full" />
                </div>
                <div className="h-56 rounded-xl bg-gradient-to-b from-gray-200 to-gray-100" />
              </div>

              {/* 통계 카드 */}
              <div className="col-span-12 md:col-span-3 space-y-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="rounded-2xl border p-4"
                  >
                    <div className="h-3 w-20 bg-gray-300 rounded mb-2" />
                    <div className="h-6 w-24 bg-gray-400 rounded mb-1" />
                    <div className="h-3 w-28 bg-gray-200 rounded" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
