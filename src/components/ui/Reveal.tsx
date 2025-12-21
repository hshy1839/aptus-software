// src/components/ui/Reveal.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /**
   * once=true  : 한번만 등장
   * once=false : 스크롤로 다시 들어오면 또 등장(요청한 “스크롤할때마다”에 가까움)
   */
  once?: boolean;
  /**
   * 등장까지의 거리(px)
   */
  y?: number;
  /**
   * 딜레이(초)
   */
  delay?: number;
  /**
   * duration(초)
   */
  duration?: number;
};

export default function Reveal({
  children,
  className,
  once = false,
  y = 24,
  delay = 0,
  duration = 0.55,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  // amount: 화면에 얼마나 들어오면 트리거할지
  const isInView = useInView(ref, {
    once,
    amount: 0.18,
    margin: "0px 0px -10% 0px", // 살짝 빨리 등장
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // 고급스럽게 쭉 나오는 느낌
      }}
    >
      {children}
    </motion.div>
  );
}
