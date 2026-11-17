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
      const element = root.current;
      if (!element) return;
      const scenes = Array.from(element.querySelectorAll<HTMLElement>(".service-scene"));
      const [web, mobile, packageScene] = scenes;
      if (!web || !mobile || !packageScene) return;

      gsap.set(scenes, { autoAlpha: 1 });
      gsap.set([mobile, packageScene], { xPercent: 104 });
      const webDemo = web.querySelector(".service-demo");
      if (!webDemo) return;
      gsap.set(webDemo, { clipPath: "inset(0 0 100% 0)" });

      const sequence = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=1800",
          scrub: 0.7,
          pin: true,
          anticipatePin: 1,
        },
      });

      sequence
        .to(webDemo, { clipPath: "inset(0 0 0% 0)", duration: 0.16, ease: "power2.out" }, 0)
        .to(web, { xPercent: -104, autoAlpha: 0, duration: 0.16, ease: "power2.inOut" }, 0.31)
        .to(mobile, { xPercent: 0, duration: 0.2, ease: "power2.inOut" }, 0.31)
        .fromTo(mobile.querySelector(".service-demo"), { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", duration: 0.16, ease: "power2.out" }, 0.4)
        .to(mobile, { xPercent: -104, autoAlpha: 0, duration: 0.16, ease: "power2.inOut" }, 0.65)
        .to(packageScene, { xPercent: 0, duration: 0.2, ease: "power2.inOut" }, 0.65)
        .fromTo(packageScene.querySelector(".service-demo"), { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", duration: 0.16, ease: "power2.out" }, 0.74);
    }, root);
    return () => context.revert();
  }, []);
  return <section ref={root} id="systems" className="service-showcase" aria-labelledby="services-title">
    <div className="showcase-label"><span>02 / SERVICES</span><span>APTUS DEMO INTERFACES</span></div>
    <h2 id="services-title" className="sr-only">APTUS 서비스</h2>
    {scenes.map((scene) => <article className={`service-scene scene-${scene.kind}`} key={scene.number}>
      <div className="service-copy"><p>{scene.eyebrow} / {scene.number}</p><h3>{scene.title}</h3><span className="service-scope">{scene.scope}</span><div className="service-features">{scene.features.map((feature) => <span key={feature}>{feature}</span>)}</div><p className="service-text">{scene.text}</p><button className="system-button" type="button" onClick={open}>이 서비스로 상담하기 ↗</button></div>
      <div className="service-demo"><Demo kind={scene.kind} /><small>APTUS INTERNAL DEMO / NOT A CLIENT PROJECT</small></div>
      <div className="scene-progress" aria-hidden="true"><span>SCENE</span><b>{scene.number} / 03</b></div>
    </article>)}
    <style jsx global>{`
      .service-showcase{position:relative;min-height:100svh;padding:0;background:var(--sys-bg);overflow:hidden}
      .showcase-label{position:absolute;z-index:5;top:32px;left:7vw;right:7vw;display:flex;justify-content:space-between;color:var(--sys-muted);font:10px var(--font-mono);letter-spacing:.12em}
      .service-scene{position:absolute;inset:0;display:grid;min-height:100svh;max-width:none;margin:0;padding:128px 7vw 82px;grid-template-columns:minmax(300px,.76fr) minmax(500px,1.25fr);gap:8vw;align-items:center;opacity:1;visibility:visible;background:var(--sys-bg);border-top:0}
      .service-scene:last-of-type{border-bottom:0}
      .scene-phone .service-copy{order:2}.scene-phone .service-demo{order:1;background:var(--sys-soft)}.scene-transform .service-demo{background:var(--sys-bg)}
      .scene-progress{position:absolute;right:0;bottom:26px;display:flex;gap:10px;color:var(--sys-muted);font:10px var(--font-mono)}.scene-progress b{color:var(--sys-ink);font-weight:400}
      .service-copy h3{max-width:6ch;word-break:keep-all}.service-demo{min-height:500px}
      @media(max-width:820px){.service-showcase{padding:74px 20px 0;min-height:auto;overflow:visible}.showcase-label{position:static;margin-bottom:28px;font-size:8px}.service-scene,.scene-phone .service-copy,.scene-phone .service-demo{position:relative;inset:auto;display:block;min-height:0;padding:76px 0 64px;opacity:1!important;visibility:visible!important;transform:none!important}.service-scene+.service-scene{border-top:1px solid var(--sys-line)}.scene-progress{display:none}.service-demo{min-height:360px;margin-top:38px}.scene-phone .service-copy{order:initial}.scene-phone .service-demo{order:initial}.service-copy h3{max-width:7ch}}
    `}</style>
  </section>;
}
