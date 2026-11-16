"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useContactDrawer } from "@/components/contact/ContactDrawerProvider";
import SystemHero from "./SystemHero";
import ServiceShowcase from "./ServiceShowcase";
import { Archive, Capabilities, Process, Purpose } from "./v5/Sections";

const fade = (reduceMotion: boolean, delay = 0) => reduceMotion ? {} : { initial: false, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-72px" }, transition: { duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] as const } };

export default function AptusExperience() {
  const { open } = useContactDrawer();
  const reduceMotion = useReducedMotion();

  return (
    <div id="top" className="system-shell">
      <SystemHero />

      <Purpose />

      <ServiceShowcase />

      <Archive />

      <Capabilities />

      <Process />

      <section id="contact" className="system-section contact-section" aria-labelledby="contact-title"><div className="section-marker">06 / INITIATE PROJECT</div><motion.div className="contact-system" {...fade(Boolean(reduceMotion))}><div><p className="system-kicker">NEW PROJECT REQUEST</p><h2 id="contact-title">새로운 시스템을<br /><span>시작합니다.</span></h2><p>서비스 유형, 예상 예산, 프로젝트 설명, 일정과 연락처를 남겨주시면 다음 단계를 정리해 답변드립니다.</p></div><div className="contact-launch"><div className="launch-row"><span>SERVICE</span><b>WEB / APP / PACKAGE</b></div><div className="launch-row"><span>RESPONSE</span><b>WITHIN PROJECT REVIEW</b></div><button className="system-button primary" type="button" onClick={open}>INITIATE REQUEST ↗</button><a href="http://pf.kakao.com/_BCUxcn/chat" className="system-text-link">카카오톡으로 빠르게 상담하기 ↗</a></div></motion.div></section>
      <style jsx global>{`
        .purpose-v5,.archive-v5,.cap-v5,.process-v5{min-height:100svh;display:flex;flex-direction:column;justify-content:center}
        .contact-section{min-height:100svh;display:flex;flex-direction:column;justify-content:center}
      `}</style>
    </div>
  );
}
