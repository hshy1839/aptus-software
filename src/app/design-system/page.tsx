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
  ["White", "#FFFFFF", "#FFFFFF"],
  ["Off white", "#F7F8FA", "#F7F8FA"],
  ["Black", "#101010", "#101010"],
  ["Border", "#D4D4D4", "#D4D4D4"],
] as const;

export default function DesignSystemPage() {
  // This is a development preview, never a public production route.
  if (process.env.NODE_ENV === "production") notFound();

  return (
    <main className="ds-page">
      <header>
        <span>APTUS / DESIGN FOUNDATION</span>
        <span>V6.0 / INTERNAL</span>
      </header>

      <section className="ds-intro">
        <div className="ds-logo"><AptusLogo /></div>
        <EyebrowLabel>01 — A QUIET, PRECISE SYSTEM</EyebrowLabel>
        <h1>ALIGN.<br />CUT.<br />ASSEMBLE.</h1>
        <p className="ds-copy">A restrained visual foundation for digital products: geometric, calm and engineered for clear communication.</p>
      </section>

      <section id="colors">
        <EyebrowLabel>02 — COLOR SYSTEM</EyebrowLabel>
        <div className="ds-grid">
          <SectionHeading>Monochrome, with room to think.</SectionHeading>
          <div className="ds-swatches">
            {colors.map(([name, value, color]) => (
              <div key={name} style={{ background: color, color: value === "#101010" ? "#fff" : "#101010" }}>
                <span>{name}</span><span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="typography">
        <EyebrowLabel>03 — TYPOGRAPHY</EyebrowLabel>
        <p className="type-xl">Systems that stay clear.</p>
        <PrecisionDivider />
        <p className="type-l">Designed for what&apos;s next.</p>
        <p className="type-m">본문은 충분한 행간과 절제된 대비로, 복잡한 내용을 조용하고 정확하게 전달합니다.</p>
        <p className="type-meta">METADATA / IBM PLEX MONO / 10 PX</p>
      </section>

      <section id="grid">
        <EyebrowLabel>04 — GRID &amp; SPACING</EyebrowLabel>
        <div className="ds-grid-diagram" aria-label="Responsive column grid">
          <span>12 columns / desktop</span><i /><span>8 columns / tablet</span><i /><span>4 columns / mobile</span>
        </div>
      </section>

      <section id="components">
        <EyebrowLabel>05 — UI COMPONENTS</EyebrowLabel>
        <SectionHeading>Purposeful controls.</SectionHeading>
        <div className="ds-buttons">
          <PrimaryButton type="button">Start a project</PrimaryButton>
          <SecondaryButton type="button">View capability</SecondaryButton>
        </div>
        <SlideControls />
      </section>

      <section id="align">
        <EyebrowLabel>06 — ALIGN</EyebrowLabel>
        <ImageRevealFrame><span>STRUCTURE / 01</span></ImageRevealFrame>
      </section>

      <section id="cut">
        <EyebrowLabel>07 — CUT</EyebrowLabel>
        <DiagonalMask><span>PRECISION / 02</span></DiagonalMask>
      </section>

      <section id="assemble">
        <EyebrowLabel>08 — ASSEMBLE</EyebrowLabel>
        <div className="ds-assemble" aria-label="Three APTUS mark components assembling"><i /><i /><i /></div>
      </section>

      <section id="responsive">
        <EyebrowLabel>09 — RESPONSIVE LAYOUT</EyebrowLabel>
        <SectionHeading>One system, three clear scales.</SectionHeading>
        <p className="ds-copy">The layout condenses from twelve to eight and then four columns without sacrificing hierarchy, touch targets or breathing room.</p>
      </section>
    </main>
  );
}
