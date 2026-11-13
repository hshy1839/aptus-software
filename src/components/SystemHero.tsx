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
      const wordmark = select("#logo-wordmark, #logo-divider, #logo-subtext");
      const desktop = window.matchMedia("(min-width: 821px)").matches;
      const offsets = desktop
        ? [{ x: -78, y: 34, rotation: -10 }, { x: 4, y: -52, rotation: 9 }, { x: 80, y: 31, rotation: 8 }]
        : [{ x: -56, y: 28, rotation: -9 }, { x: 0, y: -39, rotation: 8 }, { x: 58, y: 24, rotation: 7 }];

      parts.forEach((part, index) => gsap.set(part, { ...offsets[index], transformOrigin: "50% 50%" }));
      gsap.set(wordmark, { autoAlpha: 0 });
      gsap.set(select(".hero-manifesto"), { autoAlpha: 0, y: 18 });
      gsap.set(select(".logo-guide"), { autoAlpha: 0.72, scaleX: 1 });

      const sequence = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: desktop ? "+=1650" : "+=1050",
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
        },
      });

      sequence
        .to(parts, { x: 0, y: 0, rotation: 0, duration: 0.3, ease: "power2.inOut" }, 0)
        .to(select(".logo-guide"), { autoAlpha: 0, scaleX: 0.4, duration: 0.16 }, 0.22)
        .to(wordmark, { autoAlpha: 1, duration: 0.2 }, 0.48)
        .to(select("#logo-divider"), { scaleY: 1, transformOrigin: "top", duration: 0.15 }, 0.48)
        .to(select(".hero-manifesto"), { autoAlpha: 1, y: 0, duration: 0.22 }, 0.58)
        .to(select(".aptus-logo"), { scale: desktop ? 0.66 : 0.72, y: desktop ? -118 : -88, duration: 0.26, ease: "power2.inOut" }, 0.76)
        .to(select(".hero-manifesto"), { y: desktop ? -36 : -22, duration: 0.24 }, 0.76);
    }, root);
    return () => context.revert();
  }, []);

  return <section ref={root} className="bright-hero assembly-hero" aria-labelledby="hero-title">
    <div className="hero-grid" aria-hidden="true" />
    <div className="hero-line hero-rule rule-top" aria-hidden="true" /><div className="hero-line hero-rule rule-side" aria-hidden="true" />
    <div className="hero-meta"><span>APTUS / DIGITAL SYSTEMS</span><span>SEOUL · KOREA / 2026</span></div>
    <div className="assembly-stage">
      <div className="logo-guide guide-horizontal" aria-hidden="true" /><div className="logo-guide guide-vertical" aria-hidden="true" />
      <AptusLogo className="aptus-logo" data-logo-instance="hero" />
    </div>
    <div className="hero-manifesto"><p className="hero-eyebrow">INDEPENDENT DIGITAL PRODUCT STUDIO</p><h1 id="hero-title">Systems for<br /><i>digital products.</i></h1><p>Designed for what&apos;s next. 명확한 문제를 정밀하게 해결합니다.</p></div>
    <div className="assembly-actions"><a className="system-button primary" href="#systems">OUR SERVICES <span>↘</span></a><button className="system-button" type="button" onClick={open}>PROJECT INQUIRY <span>↗</span></button></div>
    <div className="hero-foot"><span>SCROLL TO ASSEMBLE ↓</span><span>STRATEGY · DESIGN · ENGINEERING</span></div>
  </section>;
}
