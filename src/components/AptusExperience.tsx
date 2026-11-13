"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useContactDrawer } from "@/components/contact/ContactDrawerProvider";
import { useState } from "react";
import SystemHero from "./SystemHero";
import ServiceShowcase from "./ServiceShowcase";
import { Archive, Capabilities, Process, Purpose } from "./v5/Sections";

const modules = [
  { id: "web", code: "MODULE 01", label: "WEB ENGINEERING", title: "웹사이트 제작", summary: "기업 홈페이지, 랜딩페이지, 예약·문의 사이트를 운영 가능한 시스템으로 구축합니다.", problem: "브랜드를 설명해도 사용자가 어디로 가야 할지 모를 때", features: ["기업 홈페이지", "랜딩페이지", "예약 및 문의", "관리자 기능", "반응형 · SEO"], scope: "전략 · UX/UI · 프론트엔드 · 배포" },
  { id: "app", code: "MODULE 02", label: "APPLICATION SYSTEMS", title: "모바일 앱 개발", summary: "Flutter 기반 Android·iOS 앱과 백엔드, 관리자, 출시 준비를 하나의 흐름으로 설계합니다.", problem: "검증할 핵심 사용자 흐름을 실제 제품으로 만들고 싶을 때", features: ["Android · iOS", "Flutter", "로그인 · 푸시 · 결제", "백엔드 및 관리자", "스토어 배포"], scope: "제품 구조 · 앱 개발 · API 연동 · QA" },
  { id: "package", code: "MODULE 03", label: "WEB-TO-APP CONVERSION", title: "웹사이트 앱 패키징", summary: "기존 웹 자산을 살리면서 앱 아이콘, 스플래시, 푸시 옵션과 스토어 출시를 준비합니다.", problem: "이미 운영 중인 웹을 더 자주 쓰는 앱 경험으로 확장할 때", features: ["웹사이트 앱 전환", "앱 아이콘 · 스플래시", "푸시 옵션", "스토어 출시 지원", "유지보수"], scope: "범위 진단 · WebView · 패키징 · 출시" },
];

const capabilityGroups = [
  ["Frontend", "Next.js · React · TypeScript · Tailwind CSS", "반응형 인터페이스, 관리자 대시보드, 폼과 복잡한 상태"],
  ["Mobile", "Flutter · Android · iOS · Firebase", "로그인, 푸시, WebView, 스토어 배포"],
  ["Backend", "Node.js · Express · NestJS · MySQL · MongoDB", "인증, 권한, 관리자 API, 결제·정산"],
  ["Cloud", "Vercel · AWS · Render · Environment", "배포, 환경변수, 로그, 운영 가능한 기본 인프라"],
  ["Deployment", "QA · Store review · Monitoring", "검수, 심사 대응, 릴리즈와 핫픽스"],
  ["Integration", "Kakao · PG · OpenAI · External APIs", "지도, 로그인, 결제, 자동화와 외부 서비스 연결"],
];

const phases = [
  ["01", "상담", "SCOPE", "목표, 사용자, 우선순위와 예산을 확인합니다.", "요구사항 요약 · 상담 기록"],
  ["02", "설계", "SYSTEM MAP", "사이트맵과 핵심 화면, 기능 범위를 확정합니다.", "화면 설계 · 일정 · 견적"],
  ["03", "개발", "BUILD", "작동하는 단위로 만들고 진행 상황을 공유합니다.", "테스트 빌드 · 주간 기록"],
  ["04", "검증", "QA", "반응형, 기능, 배포 환경을 실제 조건에서 확인합니다.", "검수 목록 · 수정 내역"],
  ["05", "출시", "DEPLOY", "배포와 인계, 운영에 필요한 다음 단계를 정리합니다.", "배포본 · 인계 자료"],
];

const fade = (reduceMotion: boolean, delay = 0) => reduceMotion ? {} : { initial: false, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-72px" }, transition: { duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] as const } };

export default function AptusExperience() {
  const { open } = useContactDrawer();
  const reduceMotion = useReducedMotion();
  const [activeModule, setActiveModule] = useState(0);
  const [activeCapability, setActiveCapability] = useState(0);
  const active = modules[activeModule];

  return (
    <div id="top" className="system-shell">
      <SystemHero />

      <Purpose />

      <ServiceShowcase />

      <Archive />

      <Capabilities />

      <Process />

      <section id="contact" className="system-section contact-section" aria-labelledby="contact-title"><div className="section-marker">06 / INITIATE PROJECT</div><motion.div className="contact-system" {...fade(Boolean(reduceMotion))}><div><p className="system-kicker">NEW PROJECT REQUEST</p><h2 id="contact-title">새로운 시스템을<br /><span>시작합니다.</span></h2><p>서비스 유형, 예상 예산, 프로젝트 설명, 일정과 연락처를 남겨주시면 다음 단계를 정리해 답변드립니다.</p></div><div className="contact-launch"><div className="launch-row"><span>SERVICE</span><b>WEB / APP / PACKAGE</b></div><div className="launch-row"><span>RESPONSE</span><b>WITHIN PROJECT REVIEW</b></div><button className="system-button primary" type="button" onClick={open}>INITIATE REQUEST ↗</button><a href="http://pf.kakao.com/_BCUxcn/chat" className="system-text-link">카카오톡으로 빠르게 상담하기 ↗</a></div></motion.div></section>
    </div>
  );
}
