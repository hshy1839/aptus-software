"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContactDrawer } from "@/components/contact/ContactDrawerProvider";

gsap.registerPlugin(ScrollTrigger);

const scenes = [
  { number: "01", eyebrow: "WEBSITE DEVELOPMENT", title: "웹사이트 제작", text: "브랜드의 구조와 사용자의 다음 행동을 연결하는 반응형 웹 경험을 만듭니다.", scope: "전략 · UX/UI · 프론트엔드 · 배포", features: ["반응형 UI", "SEO 구조", "예약 · 문의", "관리자 기능"], kind: "browser" },
  { number: "02", eyebrow: "MOBILE APP DEVELOPMENT", title: "모바일 앱 개발", text: "검증할 핵심 사용자 흐름을 Android와 iOS 앱으로 정교하게 구현합니다.", scope: "제품 구조 · Flutter · API · QA", features: ["Android · iOS", "로그인", "푸시 알림", "관리자 API"], kind: "phone" },
  { number: "03", eyebrow: "WEB-TO-APP PACKAGING", title: "웹사이트 앱 패키징", text: "기존 웹 자산을 살리면서 앱 아이콘, 푸시, 스토어 출시까지 확장합니다.", scope: "범위 진단 · WebView · 패키징 · 출시", features: ["WebView", "앱 아이콘", "푸시 옵션", "스토어 출시"], kind: "transform" },
];

function Demo({ kind }: { kind: string }) {
  if (kind === "phone") return <div className="demo-phone" aria-label="APTUS 모바일 앱 데모"><i /><div className="phone-screen"><span>09:41</span><b>Welcome back.</b><em>Project overview</em><div className="phone-bars"><i /><i /><i /></div></div></div>;
  if (kind === "transform") return <div className="demo-transform" aria-label="웹에서 앱으로 전환되는 데모"><div className="demo-browser mini"><span /><span /><span /><b>Web experience</b></div><div className="transform-arrow">→</div><div className="demo-phone mini"><i /><div className="phone-screen"><b>App ready.</b><em>WebView / Native shell</em></div></div></div>;
  return <div className="demo-browser" aria-label="APTUS 웹사이트 데모"><div className="browser-chrome"><span /><span /><span /><b>aptus.demo / website</b></div><div className="browser-layout"><aside>01<br />02<br />03</aside><main><i>Digital<br />presence.</i><span /><span /><span /></main></div></div>;
}

export default function ServiceShowcase() {
  const root = useRef<HTMLElement>(null);
  const { open } = useContactDrawer();
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      if (window.matchMedia("(max-width: 820px), (prefers-reduced-motion: reduce)").matches) return;
      const q = gsap.utils.selector(root);
      const slides = q(".service-scene");
      gsap.set(slides.slice(1), { autoAlpha: 0, y: 36 });
      const tl = gsap.timeline({ scrollTrigger: { trigger: root.current, start: "top top", end: "+=2200", scrub: 0.7, pin: true, anticipatePin: 1 } });
      slides.slice(0, -1).forEach((slide, index) => {
        const next = slides[index + 1];
        const at = index * 0.34 + 0.23;
        tl.to(slide, { autoAlpha: 0, y: -36, duration: 0.16 }, at).to(next, { autoAlpha: 1, y: 0, duration: 0.2 }, at + 0.05);
      });
      tl.from(q(".service-scene .service-demo"), { clipPath: "inset(0 0 100% 0)", stagger: 0.08, duration: 0.32 }, 0);
    }, root);
    return () => context.revert();
  }, []);
  return <section ref={root} id="systems" className="service-showcase" aria-labelledby="services-title">
    <div className="showcase-label"><span>02 / SERVICES</span><span>APTUS DEMO INTERFACES</span></div>
    <h2 id="services-title" className="sr-only">APTUS 서비스</h2>
    {scenes.map((scene, index) => <article className={`service-scene scene-${scene.kind}`} key={scene.number}>
      <div className="service-copy"><p>{scene.eyebrow} / {scene.number}</p><h3>{scene.title}</h3><span className="service-scope">{scene.scope}</span><div className="service-features">{scene.features.map((feature) => <span key={feature}>{feature}</span>)}</div><p className="service-text">{scene.text}</p><button className="system-button" type="button" onClick={open}>이 서비스로 상담하기 ↗</button></div>
      <div className="service-demo"><Demo kind={scene.kind} /><small>APTUS INTERNAL DEMO / NOT A CLIENT PROJECT</small></div>
      <div className="scene-progress" aria-hidden="true">{scenes.map((item, progressIndex) => <span className={progressIndex === index ? "active" : ""} key={item.number}>{item.number}</span>)}</div>
    </article>)}
  </section>;
}
