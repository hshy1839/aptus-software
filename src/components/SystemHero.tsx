"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContactDrawer } from "@/components/contact/ContactDrawerProvider";
import AptusLogo from "@/components/hero/AptusLogo";

gsap.registerPlugin(ScrollTrigger);

export default function SystemHero() {
  const root = useRef<HTMLElement>(null);
  const { open } = useContactDrawer();

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const select = gsap.utils.selector(root);
      const parts = select("#logo-part-1, #logo-part-2, #logo-part-3");
      const wordmark = select("#logo-wordmark, #logo-subtext");
      const desktop = window.matchMedia("(min-width: 821px)").matches;
      const offsets = desktop
        ? [{ x: -78, y: 34, rotation: -10 }, { x: 4, y: -52, rotation: 9 }, { x: 80, y: 31, rotation: 8 }]
        : [{ x: -56, y: 28, rotation: -9 }, { x: 0, y: -39, rotation: 8 }, { x: 58, y: 24, rotation: 7 }];

      parts.forEach((part, index) => gsap.set(part, { ...offsets[index], transformOrigin: "50% 50%" }));
      gsap.set(wordmark, { autoAlpha: 0, clipPath: "inset(0 100% 0 0)" });
      gsap.set(select("#logo-divider"), { autoAlpha: 0, scaleY: 0, transformOrigin: "top" });
      gsap.set(select(".hero-manifesto"), { autoAlpha: 0, y: 18 });
      gsap.set(select(".assembly-actions"), { autoAlpha: 0, y: 12 });
      gsap.set(select(".logo-guide"), { autoAlpha: 0.72, scaleX: 1 });

      const sequence = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: desktop ? "+=950" : "+=460",
          scrub: 0.65,
          ...(desktop ? { pin: true, anticipatePin: 1 } : {}),
        },
      });

      sequence
        .to(parts, { x: 0, y: 0, rotation: 0, duration: 0.3, ease: "power2.inOut" }, 0)
        .to(select(".logo-guide"), { autoAlpha: 0, scaleX: 0.4, duration: 0.16 }, 0.22)
        .to(wordmark, { autoAlpha: 1, clipPath: "inset(0 0% 0 0)", duration: 0.22 }, 0.48)
        .to(select("#logo-divider"), { autoAlpha: 1, scaleY: 1, duration: 0.15 }, 0.5)
        .to(select(".hero-manifesto"), { autoAlpha: 1, y: 0, duration: 0.22 }, 0.58)
        .to(select(".assembly-actions"), { autoAlpha: 1, y: 0, duration: 0.18 }, 0.65)
        .to(select(".aptus-logo"), { scale: desktop ? 0.7 : 0.82, y: desktop ? -18 : -38, duration: 0.22, ease: "power2.inOut" }, 0.76)
        .to(select(".hero-manifesto"), { y: desktop ? -22 : -10, duration: 0.2 }, 0.76);
    }, root);
    return () => context.revert();
  }, []);

  return <section ref={root} className="bright-hero assembly-hero" aria-labelledby="hero-title">
    <div className="hero-grid" aria-hidden="true" />
    <div className="hero-line hero-rule rule-top" aria-hidden="true" /><div className="hero-line hero-rule rule-side" aria-hidden="true" />
    <div className="hero-meta"><span>APTUS / PRECISION IN MOTION</span><span>SEOUL · KOREA / 2026</span></div>
    <div className="assembly-stage">
      <div className="logo-guide guide-horizontal" aria-hidden="true" /><div className="logo-guide guide-vertical" aria-hidden="true" />
      <AptusLogo className="aptus-logo" data-logo-instance="hero" />
    </div>
    <div className="hero-manifesto"><p className="hero-eyebrow">DIGITAL PRODUCT STUDIO</p><h1 id="hero-title">아이디어를<br /><i>실제 디지털 제품으로.</i></h1><p>웹사이트 제작 · 모바일 앱 개발 · 웹사이트 앱 패키징</p></div>
    <div className="assembly-actions"><button className="system-button primary" type="button" onClick={open}>프로젝트 문의하기 <span>↗</span></button><a className="system-button" href="#systems">서비스 살펴보기 <span>↘</span></a></div>
    <div className="hero-foot"><span>SCROLL TO ALIGN ↓</span><span>STRATEGY · DESIGN · ENGINEERING</span></div>
  </section>;
}
