# APTUS V7 Phase 2 Hero Verification

Date: 2026-11-16

## Changes

- Shortened the desktop Hero ScrollTrigger range from approximately 950px to 560px.
- Removed GSAP opacity initialization from Hero manifesto and action controls.
- Kept the logo-parts assembly, guide-line draw, wordmark reveal, GSAP context cleanup and reduced-motion bypass.
- Moved the logo stage to the upper-right on desktop and reduced it on mobile.
- Kept Hero title, service line and both CTAs visible at the initial scroll position.

## Required behavior checks

| Check | Result |
| --- | --- |
| Initial desktop title and CTA | Visible |
| Initial mobile title and CTA | Visible |
| SVG logo part assembly | Visible during the short desktop scroll sequence |
| Reverse scroll | Title and actions stay visible while logo returns to separated state |
| Reduced motion | Static final readable state without an assembly sequence |
| Contact CTA | Exposed in the accessibility tree |
| Service anchor CTA | Exposed in the accessibility tree |

## Captures

Saved under .qa/v7/phase-2/.

- hero-1440-initial-fixed.png
- hero-1440-progress-fixed.png
- hero-390-initial-fixed.png
- hero-390-reduced-motion.png

## Result

The first frame now communicates the APTUS proposition and provides conversion paths before the animation completes. The logo is a separate signature object rather than a competing text layer. Mobile uses the same identity with a smaller top-stage and normal vertical reading order.
