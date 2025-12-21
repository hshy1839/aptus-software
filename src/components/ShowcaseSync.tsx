// src/components/ShowcaseSync.tsx
import Container from "./Container";
import Button from "./Button";

export default function ShowcaseSync() {
  return (
    <section className="py-20">
      <Container>
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.25em] text-black/40">
            WORK ANYWHERE
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
            Work from anywhere, <br className="hidden md:block" />
            stay in sync
          </h2>
        </div>

        <div className="mt-10">
          <div className="mx-auto max-w-5xl rounded-[32px] border border-black/10 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.14)] overflow-hidden">
            {/* 상단 여백(원본처럼 카드 안에서 여유) */}
            <div className="p-8 md:p-10">
              <div className="grid grid-cols-12 gap-8 items-center">
                {/* 폰 프리뷰 카드 */}
                <div className="col-span-12 md:col-span-7">
                  <div className="rounded-[28px] bg-black/5 p-6">
                    <div className="mx-auto w-full max-w-[340px] rounded-[26px] bg-white border border-black/10 shadow-sm overflow-hidden">
                      {/* phone header */}
                      <div className="h-10 bg-black/5 flex items-center px-4">
                        <div className="h-2.5 w-20 rounded bg-black/15" />
                      </div>

                      {/* phone content */}
                      <div className="p-4 space-y-3">
                        <div className="h-3 w-32 rounded bg-black/10" />
                        <div className="h-3 w-44 rounded bg-black/10" />
                        <div className="h-24 rounded-xl bg-gradient-to-b from-black/10 to-black/5" />
                        <div className="grid grid-cols-2 gap-3">
                          <div className="h-10 rounded-xl bg-black/5" />
                          <div className="h-10 rounded-xl bg-black/5" />
                        </div>
                        <div className="h-10 rounded-xl bg-black/5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 오른쪽 텍스트 */}
                <div className="col-span-12 md:col-span-5">
                  <h3 className="text-xl font-bold tracking-tight">
                    Keep every project moving forward
                  </h3>
                  <p className="mt-3 text-base text-black/60 leading-relaxed">
                    Stay organized across clients, tasks, and invoices with a clean
                    workflow that works on desktop and mobile.
                  </p>

                  <div className="mt-6 flex items-center justify-center md:justify-start">
                    <Button href="/signup">Get started</Button>
                  </div>

                  <div className="mt-6 flex items-center gap-5 text-xs text-black/45">
                    <span className="inline-flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-black/30" />
                      iOS
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-black/30" />
                      Android
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-black/30" />
                      Web
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 카드 하단 살짝 톤 변화 */}
            <div className="h-10 bg-gradient-to-b from-white to-black/5" />
          </div>
        </div>
      </Container>
    </section>
  );
}
