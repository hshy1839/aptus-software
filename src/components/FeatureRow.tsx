// src/components/FeatureRow.tsx
import Container from "./Container";
import Button from "./Button";

type Props = {
  eyebrow?: string;
  title: string;
  description: string;
  bullets?: string[];
  ctaText?: string;
  ctaHref?: string;
  reverse?: boolean;
  children: React.ReactNode; // 왼쪽/오른쪽 카드(미리보기) 영역
};

export default function FeatureRow({
  eyebrow,
  title,
  description,
  bullets = [],
  ctaText,
  ctaHref = "/signup",
  reverse = false,
  children,
}: Props) {
  return (
    <section className="py-20">
      <Container>
        <div
          className={[
            "grid grid-cols-12 gap-10 items-center",
            reverse ? "" : "",
          ].join(" ")}
        >
          {/* 왼쪽: 텍스트 */}
          <div className={`col-span-12 md:col-span-5 ${reverse ? "md:order-2" : ""}`}>
            {eyebrow ? (
              <p className="text-xs font-semibold tracking-[0.25em] text-black/40">
                {eyebrow}
              </p>
            ) : null}

            <h3 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight leading-tight">
              {title}
            </h3>

            <p className="mt-4 text-base md:text-lg text-black/60 leading-relaxed">
              {description}
            </p>

            {bullets.length > 0 && (
              <ul className="mt-6 space-y-3 text-sm text-black/60">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-black/30" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}

            {ctaText ? (
              <div className="mt-8">
                <Button href={ctaHref}>{ctaText}</Button>
              </div>
            ) : null}
          </div>

          {/* 오른쪽: 프리뷰 카드 */}
          <div className={`col-span-12 md:col-span-7 ${reverse ? "md:order-1" : ""}`}>
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}
