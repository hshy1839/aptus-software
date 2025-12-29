"use client";

import Image from "next/image";
import { useContactDrawer } from "@/components/contact/ContactDrawerProvider";

export default function FloatingKakaoButton() {
  const { isOpen } = useContactDrawer();

  // 문의 Drawer 열려 있을 땐 숨김 (UX 깔끔)
  if (isOpen) return null;

  return (
    <a
      href="http://pf.kakao.com/_BCUxcn/chat"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="카카오톡 실시간 상담"
      className="
        fixed bottom-6 right-6 z-[120]
        flex items-center gap-3
        rounded-3xl bg-[#FEE500]
        px-4 py-3
        shadow-[0_12px_30px_rgba(0,0,0,0.25)]
        transition
        hover:scale-[1.04] hover:shadow-[0_16px_36px_rgba(0,0,0,0.28)]
        active:scale-[0.98]
      "
    >
      {/* Kakao Icon */}
      <Image
        src="/KakaoTalk_logo.svg"
        alt="KakaoTalk"
        width={32}
        height={32}
        priority
      />

      {/* Text (모바일에서는 숨김) */}
      <span className="hidden sm:inline text-sm font-bold text-black">
        실시간 상담하기
      </span>
    </a>
  );
}
