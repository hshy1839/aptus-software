"use client";

import Button from "./Button";
import Container from "./Container";
import { useContactDrawer } from "@/components/contact/ContactDrawerProvider";

export default function Hero() {
  const { open } = useContactDrawer();

  return (
    <section className="relative overflow-hidden py-20 sm:py-24 md:py-28">
      {/* 1️⃣ background image */}
      <div
        className="absolute inset-0 -z-20 bg-center bg-cover"
        style={{
          backgroundImage: "url('/background02.jpg')",
        }}
      />

      {/* 2️⃣ overlay (텍스트 가독성용) */}
      <div className="absolute inset-0 -z-10 bg-white/80" />
      {/* 더 강하게 하고 싶으면 bg-black/40 같은 값으로 조절 */}

      <Container>
        <div className="text-center">
          <h1
            className="
              text-3xl
              sm:text-4xl
              md:text-6xl
              lg:text-7xl
              font-bold
              tracking-tight
              leading-[1.15]
              text-[#0B1220]
            "
          >
            IT 외주 개발,
            <br />
            왜 항상 힘들기만 할까요?
          </h1>

          <p
            className="
              mt-6
              sm:mt-12
              md:mt-10
              text-[15px]
              sm:text-base
              md:text-lg
              text-gray-700
              max-w-3xl
              mx-auto
              leading-relaxed
            "
          >
            책임감 없는 개발사, 높은 견적가, 잠수 타는 프리랜서 때문에 속 타셨나요?
            <br />
            앱터스는 투명한 과정 공유와 철저한 기한 준수로
            <br />
            비즈니스 파트너의 성공만 생각합니다.
          </p>

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
