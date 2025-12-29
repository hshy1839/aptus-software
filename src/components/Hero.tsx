// src/components/Hero.tsx
"use client";

import Button from "./Button";
import Container from "./Container";
import { useContactDrawer } from "@/components/contact/ContactDrawerProvider";

export default function Hero() {
  const { open } = useContactDrawer(); // ✅ 이 줄 반드시 있어야 함

  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-100 via-white to-white" />

      <Container>
        <div className="text-center">
          <h1 className="text-7xl md:text-7xl font-bold tracking-tight leading-tight">
            IT 외주 개발, <br className="hidden md:block" />
            왜 항상 힘들기만 할까요?
          </h1>

          <p className="mt-20 text-xl text-gray-600 max-w-3xl mx-auto">
            책임감 없는 개발사, 높은 견적가, 잠수 타는 프리랜서 때문에 속 타셨나요?
            <br />
            앱터스는 투명한 과정 공유와 철저한 기한 준수로 비즈니스 파트너의 성공만 생각합니다.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Button onClick={open}>프로젝트 문의하기</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
