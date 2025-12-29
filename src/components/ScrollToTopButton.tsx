"use client";

import { useEffect, useState } from "react";
import { useContactDrawer } from "@/components/contact/ContactDrawerProvider";

export default function ScrollToTopButton() {
  const { isOpen } = useContactDrawer();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 문의 Drawer 열려 있으면 숨김
  if (isOpen || !visible) return null;

  return (
    <button
      aria-label="페이지 맨 위로 이동"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="
        fixed bottom-[90px] right-6 z-[120]
        h-11 w-11
        rounded-[14px]
        bg-white
        border border-black/10
        shadow-[0_10px_24px_rgba(0,0,0,0.18)]
        flex items-center justify-center
        transition
        hover:scale-[1.05] hover:shadow-[0_14px_30px_rgba(0,0,0,0.22)]
        active:scale-[0.96]
      "
    >
      {/* Arrow Icon */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-black/80"
      >
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
