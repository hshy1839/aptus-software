// src/components/Hero.tsx
"use client";

import Button from "./Button";
import Container from "./Container";
import { useContactDrawer } from "@/components/contact/ContactDrawerProvider";

export default function Hero() {
  const { open } = useContactDrawer();

  return (
    <section className="relative overflow-hidden py-20 sm:py-24 md:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-100 via-white to-white" />

      <Container>
        <div className="text-center">
          {/* ✅ 타이틀: 모바일 줄이고 단계별 확대 */}
          <h1 className="
            text-3xl
            sm:text-4xl
            md:text-6xl
            lg:text-7xl
            font-bold
            tracking-tight
            leading-[1.15]
          ">
            IT 외주 개발,
            <br/>
            왜 항상 힘들기만 할까요?
          </h1>

          {/* ✅ 설명 문구: 간격/크기 모바일 최적화 */}
          <p className="
            mt-6
            sm:mt-12
            md:mt-10
            text-[15px]
            sm:text-base
            md:text-lg
            text-gray-600
            max-w-3xl
            mx-auto
            leading-relaxed
          ">
            책임감 없는 개발사, 높은 견적가, 잠수 타는 프리랜서 때문에 속 타셨나요?
            <br  />
            앱터스는 투명한 과정 공유와 철저한 기한 준수로
            <br  />
            비즈니스 파트너의 성공만 생각합니다.
          </p>

          {/* ✅ CTA 간격도 줄임 */}
          <div className="mt-8 sm:mt-10 flex justify-center">
            <Button onClick={open}>
              프로젝트 문의하기
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
