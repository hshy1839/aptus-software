# APTUS V7 Phase 8 Hero Microinteraction

Date: 2026-11-16

## Change

Added a desktop-only pointer response to the APTUS signature object.

- The Hero keeps the existing GSAP logo assembly and ScrollTrigger lifecycle.
- Pointer movement updates CSS variables on the logo stage.
- Translation is clamped to 14px horizontally and 10px vertically.
- Pointer leave returns the object to the neutral origin.
- Mobile and prefers-reduced-motion paths do not enable the pointer listener.

## Verification

Pointer dispatch changed the Hero stage transform from neutral to positive and negative translation values. The title, CTA and logo geometry remained visually separate.

Captures saved under .qa/v7/phase-8/.

- hero-1440-pointer-ready.png
- hero-390-static.png

## Intent

The movement gives the assembled mark a physical presence without applying a cursor effect to content, controls or scrolling. It stays within the V7 restraint rule.
