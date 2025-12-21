// src/components/Header.tsx
import Link from "next/link";
import Container from "./Container";
import Button from "./Button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="py-6">
      <Container>
        <div className="flex items-center justify-between">
          {/* 로고 */}
          <Link href="/" className="flex items-center">
            <Image
              src="/aptus-logo.png"
              alt="Aptus"
              width={180}   // ✅ 가로형 로고 기준값 (필요하면 160~220 사이로 튜닝)
              height={36}   // ✅ height랑 비율 맞추기
              priority
              className="h-9 w-auto"  // ✅ 실제 렌더링 크기(높이 기준)
            />
          </Link>

          {/* 네비게이션 */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <Link href="/product" className="text-black/60 hover:text-black transition">
              Product
            </Link>
            <Link href="/pricing" className="text-black/60 hover:text-black transition">
              Pricing
            </Link>
            <Link href="/blog" className="text-black/60 hover:text-black transition">
              Blog
            </Link>
          </nav>

          {/* 액션 */}
          <Button href="/signup">Get started</Button>
        </div>
      </Container>
    </header>
  );
}
