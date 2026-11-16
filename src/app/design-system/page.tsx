import type { Metadata } from "next";
import { notFound } from "next/navigation";

import AptusLogo from "@/components/hero/AptusLogo";
import {
  DiagonalMask,
  EyebrowLabel,
  ImageRevealFrame,
  PrecisionDivider,
  PrimaryButton,
  SecondaryButton,
  SectionHeading,
  SlideControls,
} from "@/components/design-system/Primitives";

import "./design-system.css";

export const metadata: Metadata = {
  title: "APTUS Design System",
  robots: { index: false, follow: false },
};

const colors = [
  ["Canvas", "#F7F8FA", "#F7F8FA"],
  ["Surface", "#FFFFFF", "#FFFFFF"],
  ["Ink", "#101418", "#101418"],
  ["Graphite", "#2A3138", "#2A3138"],
  ["Structural line", "#C9D0D7", "#C9D0D7"],
] as const;

export default function DesignSystemPage() {
  // This is a development preview, never a public production route.
  if (process.env.NODE_ENV === "production") notFound();

  return (
    <main className="ds-page">
      <header>
        <span>APTUS / DESIGN FOUNDATION</span>
        <span>V7.0 / INTERNAL</span>
      </header>

      <section className="ds-intro">
        <div className="ds-logo"><AptusLogo /></div>
        <EyebrowLabel>01 — ALIGN / CUT / ASSEMBLE</EyebrowLabel>
        <h1>ALIGN.<br />CUT.<br />ASSEMBLE.</h1>
        <p className="ds-copy">A quiet corporate system for digital products. Structure gives content a place. The cut creates a distinct APTUS signature. Assembly explains progress without delaying action.</p>
      </section>

      <section id="colors">
        <EyebrowLabel>02 — COLOR SYSTEM</EyebrowLabel>
        <div className="ds-grid">
          <SectionHeading>White space carries confidence.</SectionHeading>
          <div className="ds-swatches">
            {colors.map(([name, value, color]) => (
              <div key={name} style={{ background: color, color: value === "#101418" || value === "#2A3138" ? "#fff" : "#101418" }}>
                <span>{name}</span><span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="typography">
        <EyebrowLabel>03 — TYPOGRAPHY</EyebrowLabel>
        <p className="type-xl">Ideas become<br />working systems.</p>
        <PrecisionDivider />
        <p className="type-l">Designed for what&apos;s next.</p>
        <p className="type-m">한글 제목은 충분한 줄 간격과 제한된 행 길이로 사용합니다. 본문은 읽기 속도와 서비스 이해를 우선하며, 영문 모노 라벨은 구조와 상태를 보조합니다.</p>
        <p className="type-meta">DISPLAY / GEIST · BODY / PRETENDARD · META / IBM PLEX MONO</p>
      </section>

      <section id="grid">
        <EyebrowLabel>04 — GRID &amp; SPACING</EyebrowLabel>
        <div className="ds-grid-diagram" aria-label="Responsive column grid">
          <span>12 columns / desktop</span><i /><span>8 columns / tablet</span><i /><span>4 columns / mobile</span>
        </div>
      </section>

      <section id="components">
        <EyebrowLabel>05 — UI COMPONENTS</EyebrowLabel>
        <SectionHeading>Controls make intent obvious.</SectionHeading>
        <div className="ds-buttons">
          <PrimaryButton type="button">Start a project</PrimaryButton>
          <SecondaryButton type="button">View capability</SecondaryButton>
        </div>
        <SlideControls />
      </section>

      <section id="align">
        <EyebrowLabel>06 — ALIGN / STRUCTURE</EyebrowLabel>
        <ImageRevealFrame><span>STRUCTURE / 01</span></ImageRevealFrame>
      </section>

      <section id="cut">
        <EyebrowLabel>07 — CUT / SIGNATURE</EyebrowLabel>
        <DiagonalMask><span>PRECISION / 02</span></DiagonalMask>
      </section>

      <section id="assemble">
        <EyebrowLabel>08 — ASSEMBLE / MOTION</EyebrowLabel>
        <div className="ds-assemble" aria-label="Three APTUS mark components assembling"><i /><i /><i /></div>
      </section>

      <section id="responsive">
        <EyebrowLabel>09 — RESPONSIVE RULES</EyebrowLabel>
        <SectionHeading>One system, three intentional scales.</SectionHeading>
        <p className="ds-copy">Desktop uses disciplined composition. Tablet protects reading measures. Mobile removes pins, preserves actions and replaces spatial complexity with a clear vertical story.</p>
      </section>
    </main>
  );
}
