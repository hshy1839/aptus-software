# APTUS V7 Phase 3 Services Verification

Date: 2026-11-16

## Changes

- Removed the 2200px desktop Services ScrollTrigger pin.
- Replaced the pinned scene swap with per-scene GSAP copy reveal and demo clip reveal.
- Retained GSAP context cleanup and the mobile or reduced-motion bypass.
- Kept the three existing APTUS internal demos, their explicit non-client disclosure and their inquiry CTAs.
- Differentiated desktop composition by placing the mobile-app device scene opposite the browser and conversion scenes.
- Kept mobile as a vertical sequence without pinning or hidden scenes.

## Browser checks

| Check | Result |
| --- | --- |
| Service scenes in DOM | 3 |
| Desktop web scene | Verified |
| Desktop mobile-app scene | Verified |
| Tablet layout | Verified |
| Mobile web and app scenes | Verified |
| Horizontal overflow at tablet | None |
| Browser console errors | None |
| Service CTA opens Drawer | Verified |
| Drawer service field remains available | Verified |

## Captures

Saved under .qa/v7/phase-3/.

- services-1440-start.png
- services-1440-mobile-app.png
- services-768-web.png
- services-768-app.png
- services-390-web.png
- services-390-app.png

## Acceptance

Services now use product-specific presentation scenes while preserving natural document scrolling. The long second pin has been eliminated, satisfying the V7 motion budget rule.
