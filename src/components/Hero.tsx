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
          <h1 className="text-7xl md:text-7xl font-bold tracking-tight leading-tight">
           외주 개발, <br className="hidden md:block" />
            왜 항상 힘들기만 할까요?
          </h1>

          <p className="mt-20 text-xl text-gray-600 max-w-3xl mx-auto">
            책임감 없는 개발사, 잠수 타는 프리랜서 때문에 속 타셨나요?<br/> 앱터스는 투명한 과정 공유와 철저한 기한 준수로 비즈니스 파트너의 성공만 생각합니다.
          </p>

          <div className="mt-30 flex justify-center gap-4 ">
            <Button href="/signup">
              프로젝트 문의하기
            </Button>
          
          </div>
        </div>

        {/* 대시보드 카드 */}
        
      </Container>
    </section>
  );
}
