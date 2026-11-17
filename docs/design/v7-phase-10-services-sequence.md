# APTUS V7 Phase 10 Combined Services Sequence

Date: 2026-11-17

## Change

The three service chapters now run as one desktop and tablet sequence.

1. Website Development starts in the combined Services section.
2. Mobile App Development enters from the right as the Website scene exits to the left.
3. Web-to-App Packaging enters from the right as the Mobile scene exits to the left.

The sequence uses one GSAP ScrollTrigger pin with a finite 1800px scroll range. No additional service pins are used.

## Mobile behavior

Below 821px, the GSAP pin and transforms are bypassed. The same three scenes render as a readable vertical sequence.

## Verification

- Each desktop scene was measured with computed transforms.
- Website starts at x 0.
- Mobile and Packaging start at x 104 percent.
- Outgoing scenes exit at x minus 104 percent with opacity 0.
- Browser console errors: none.
- The service CTA and existing internal-demo disclosure remain in every scene.

## Captures

Saved under .qa/v7/phase-10/.

- services-1440-web-fixed.png
- services-1440-app-final.png
- services-1440-package-final.png
- services-390-web.png
- services-390-app.png
