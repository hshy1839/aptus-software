// src/components/Header.tsx
import Link from "next/link";
import Container from "./Container";
import Button from "./Button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="py-0">
      <Container>
        <div className="flex items-center justify-between">
          {/* 로고 */}
       <Link href="/" className="flex items-center">
  <Image
    src="/aptus-logo.png"
    alt="Aptus"
    width={200}
    height={20}
    priority
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
          <Button href="/signup">문의하기</Button>
        </div>
      </Container>
    </header>
  );
}
