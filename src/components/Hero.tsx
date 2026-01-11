// src/components/Hero.tsx
import Image from "next/image";
import Container from "./Container";
import HeroCtaButton from "./HeroCtaButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 md:py-28">
      {/* Background image (optimized) */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/background02.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          quality={70} // ✅ 용량/디코딩 부담 줄이기 (70~80 권장)
          className="object-cover object-center"
        />
      </div>

      {/* Overlay (가독성용) */}
      <div className="absolute inset-0 -z-10 bg-white/80" />

      <Container>
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.15] text-[#0B1220]">
            IT 외주 개발,
            <br />
            왜 항상 힘들기만 할까요?
          </h1>

          <p className="mt-6 sm:mt-12 md:mt-10 text-[15px] sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            책임감 없는 개발사, 높은 견적가, 잠수 타는 프리랜서 때문에 속 타셨나요?
            <br />
            앱터스는 투명한 과정 공유와 철저한 기한 준수로
            <br />
            비즈니스 파트너의 성공만 생각합니다.
          </p>

          <div className="mt-8 sm:mt-10 flex justify-center">
            {/* ✅ 버튼만 클라이언트 */}
            <HeroCtaButton />
          </div>
        </div>
      </Container>
    </section>
  );
}
