// components/Header.tsx
import Link from "next/link";
import Container from "./Container";
import Button from "./Button";

export default function Header() {
  return (
    <header className="py-6">
      <Container>
        <div className="flex items-center justify-between">
          {/* 로고 */}
          <Link href="/" className="text-lg font-bold">
            APTUS
          </Link>

          {/* 네비게이션 */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <Link href="/product" className="text-gray-600 hover:text-black">
              Product
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-black">
              Pricing
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-black">
              Blog
            </Link>
          </nav>

          {/* 액션 */}
          <Button href="/signup">
            Get started
          </Button>
        </div>
      </Container>
    </header>
  );
}
