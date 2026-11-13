"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useContactDrawer } from "@/components/contact/ContactDrawerProvider";
import { useEffect, useState } from "react";

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
  const [booted, setBooted] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const active = modules[activeModule];
  const isReady = booted || Boolean(reduceMotion);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setTimeout(() => setBooted(true), 900);
    return () => window.clearTimeout(timer);
  }, [reduceMotion]);

  return (
    <div id="top" className="system-shell">
      <section className="system-hero" aria-labelledby="system-title" onPointerMove={(event) => setCursor({ x: Math.max(-16, Math.min(16, (event.clientX / window.innerWidth - 0.5) * 32)), y: Math.max(-12, Math.min(12, (event.clientY / window.innerHeight - 0.5) * 24)) })}>
        <div className="cinematic-image" aria-hidden="true" />
        <div className="system-grid" aria-hidden="true" />
        <div className="system-hero-top"><span>APTUS SYSTEMS / PUBLIC ACCESS</span><span>BUILD 2026.01 / SEOUL</span></div>
        <motion.div className="system-visual" animate={reduceMotion ? {} : { x: cursor.x, y: cursor.y }} transition={{ type: "spring", stiffness: 90, damping: 20 }} aria-hidden="true"><div className="system-ring ring-one" /><div className="system-ring ring-two" /><div className="system-core"><span>APTUS</span><b>ACTIVE</b></div><i className="system-axis axis-x" /><i className="system-axis axis-y" /></motion.div>
        <motion.div className={isReady ? "system-hero-copy is-ready" : "system-hero-copy"} {...fade(Boolean(reduceMotion))}><p className="system-kicker">SYSTEM INITIALIZATION / COMPLETE</p><h1 id="system-title">DESIGNED.<br />ENGINEERED.<br /><em>DEPLOYED.</em></h1><p className="system-lede">웹사이트부터 모바일 앱까지,<br />비즈니스의 아이디어를 정교한 디지털 시스템으로 구현합니다.</p><div className="system-actions"><a className="system-button primary" href="#systems">EXPLORE SYSTEMS <span>↘</span></a><button className="system-button" type="button" onClick={open}>START A PROJECT <span>↗</span></button></div></motion.div>
        <div className="system-hero-status" aria-live="polite"><span className="status-dot" />{isReady ? "SYSTEM READY" : "LOADING SYSTEM"}<b>100%</b></div>
      </section>

      <section className="system-intro system-section" aria-labelledby="intro-title"><div className="section-marker">01 / PURPOSE</div><motion.div className="intro-layout" {...fade(Boolean(reduceMotion))}><h2 id="intro-title">명확한 문제를<br /><span>정밀하게 해결합니다.</span></h2><div><p>APTUS는 보기 좋은 결과물만 전달하는 개발사가 아닙니다. 사용자의 다음 행동, 팀의 운영 방식, 출시 이후의 변경까지 하나의 시스템으로 설계합니다.</p><div className="data-strip"><span>INPUT / IDEA</span><span>PROCESS / SYSTEM</span><span>OUTPUT / PRODUCT</span></div></div></motion.div></section>

      <section id="systems" className="system-section modules-section" aria-labelledby="modules-title"><div className="section-marker">02 / SYSTEM MODULES</div><motion.div className="section-heading" {...fade(Boolean(reduceMotion))}><div><p className="system-kicker">CORE SERVICES</p><h2 id="modules-title">필요한 시스템을<br /><span>선택하세요.</span></h2></div><p>세 모듈은 독립적으로 시작할 수 있고, 하나의 제품 흐름으로 확장할 수 있습니다.</p></motion.div><div className="module-console"><div className="module-index">{modules.map((module, index) => <button key={module.id} className={activeModule === index ? "module-tab is-active" : "module-tab"} type="button" onClick={() => setActiveModule(index)} aria-pressed={activeModule === index}><span>{module.code}</span><b>{module.label}</b><i>0{index + 1}</i></button>)}</div><motion.article key={active.id} className="module-panel" initial={false} animate={{ opacity: 1 }} transition={{ duration: reduceMotion ? 0 : 0.3 }}><div className="module-panel-visual" aria-hidden="true"><span>{active.code}</span><div className="module-scan" /><b>APTUS<br />MODULE<br />ONLINE</b></div><div className="module-panel-copy"><p className="system-kicker">{active.label}</p><h3>{active.title}</h3><p className="module-summary">{active.summary}</p><p className="module-problem"><span>USE CASE</span>{active.problem}</p><ul className="module-features">{active.features.map((feature) => <li key={feature}>{feature}</li>)}</ul><div className="module-footer"><span>{active.scope}</span><button type="button" onClick={open}>이 모듈로 상담하기 ↗</button></div></div></motion.article></div></section>

      <section id="archive" className="system-section archive-section" aria-labelledby="archive-title"><div className="section-marker">03 / PROJECT ARCHIVE</div><motion.div className="archive-layout" {...fade(Boolean(reduceMotion))}><div className="archive-visual" aria-hidden="true"><div className="archive-frame"><span>PUBLIC ARCHIVE</span><b>VERIFIED<br />MATERIALS<br />ONLY</b><i /></div><div className="archive-device"><span>APTUS / VIEWPORT</span></div></div><div className="archive-copy"><p className="system-kicker">PROJECT EVIDENCE</p><h2 id="archive-title">실제 프로젝트만<br /><span>기록합니다.</span></h2><p>현재 저장소에는 공개 가능한 고객사 이미지와 사례 데이터가 없습니다. 가상의 실적을 채우지 않고, 실제 자료가 준비되는 즉시 프로젝트 유형·개발 범위·기술·디바이스 목업을 연결할 수 있도록 구조를 열어두었습니다.</p><div className="archive-state"><span>ARCHIVE STATUS</span><b>AWAITING VERIFIED MATERIALS</b></div><button className="system-button dark" type="button" onClick={open}>자료 전달 및 상담 ↗</button></div></motion.div></section>

      <section id="capabilities" className="system-section capabilities-section" aria-labelledby="capabilities-title"><div className="section-marker">04 / ENGINEERING CAPABILITIES</div><motion.div className="section-heading" {...fade(Boolean(reduceMotion))}><div><p className="system-kicker">TECHNICAL MAP</p><h2 id="capabilities-title">실제로 사용하는<br /><span>기술의 구조.</span></h2></div><p>항목을 선택하면 해당 기술로 구현 가능한 범위와 기능을 확인할 수 있습니다.</p></motion.div><div className="capability-map"><div className="capability-graph"><div className="graph-core" aria-hidden="true">APTUS</div>{capabilityGroups.map(([name], index) => <button key={name} type="button" className={activeCapability === index ? "graph-node active" : "graph-node"} style={{ "--node-index": index } as React.CSSProperties} onClick={() => setActiveCapability(index)} aria-label={name + " 기술 선택"} aria-pressed={activeCapability === index}>{name}</button>)}</div><div className="capability-detail" aria-live="polite"><span className="system-kicker">SELECTED CAPABILITY / 0{activeCapability + 1}</span><h3>{capabilityGroups[activeCapability][0]}</h3><strong>{capabilityGroups[activeCapability][1]}</strong><p>{capabilityGroups[activeCapability][2]}</p><div className="capability-rule"><span>STATUS</span><b>AVAILABLE FOR SCOPING</b></div></div></div></section>

      <section id="process" className="system-section process-section" aria-labelledby="process-title"><div className="section-marker">05 / OPERATIONAL PROCESS</div><motion.div className="section-heading" {...fade(Boolean(reduceMotion))}><div><p className="system-kicker">CONTROLLED DELIVERY</p><h2 id="process-title">상담에서 출시까지,<br /><span>단계별로 확인합니다.</span></h2></div><p>진행 작업과 고객 확인사항, 결과물, 완료 기준을 매 단계에서 공유합니다.</p></motion.div><div className="phase-list">{phases.map(([number, title, label, description, output], index) => <motion.article key={number} className="phase-row" {...fade(Boolean(reduceMotion), index * .04)}><span className="phase-number">{number}</span><div><p className="phase-label">{label}</p><h3>{title}</h3><p>{description}</p></div><div className="phase-output"><span>OUTPUT</span><b>{output}</b></div><span className="phase-state">READY</span></motion.article>)}</div></section>

      <section id="contact" className="system-section contact-section" aria-labelledby="contact-title"><div className="section-marker">06 / INITIATE PROJECT</div><motion.div className="contact-system" {...fade(Boolean(reduceMotion))}><div><p className="system-kicker">NEW PROJECT REQUEST</p><h2 id="contact-title">새로운 시스템을<br /><span>시작합니다.</span></h2><p>서비스 유형, 예상 예산, 프로젝트 설명, 일정과 연락처를 남겨주시면 다음 단계를 정리해 답변드립니다.</p></div><div className="contact-launch"><div className="launch-row"><span>SERVICE</span><b>WEB / APP / PACKAGE</b></div><div className="launch-row"><span>RESPONSE</span><b>WITHIN PROJECT REVIEW</b></div><button className="system-button primary" type="button" onClick={open}>INITIATE REQUEST ↗</button><a href="http://pf.kakao.com/_BCUxcn/chat" className="system-text-link">카카오톡으로 빠르게 상담하기 ↗</a></div></motion.div></section>
    </div>
  );
}
