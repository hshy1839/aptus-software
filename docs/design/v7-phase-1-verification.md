# APTUS V7 Phase 1 Verification

Date: 2026-11-16

## Changes

- Updated the private development route /design-system from V6 wording to the V7 ALIGN / CUT / ASSEMBLE direction.
- Updated preview tokens to canvas, surface, ink, graphite, muted text and structural-line roles.
- Updated preview typography, component labels, responsive rules and internal version label.
- Added the Phase 1 direction record.
- Home page, Hero, Services, contact API and Kakao integration were not changed in this phase.

## Captures

Saved under .qa/v7/phase-1/.

- design-system-1440x900.png
- design-system-768x1024.png
- design-system-390x844.png

## Visual review

| Viewport | Result |
| --- | --- |
| 1440×900 | Typography, five-color palette, 12-column concept and principle previews remain structured and spacious. |
| 768×1024 | Palette collapses cleanly into a two-column grid. Reading measure remains controlled. |
| 390×844 | Content follows a clear single-column story. No horizontal overflow. Controls remain separated. |

## Browser checks

- Console errors: none.
- Document horizontal overflow: none at 1440, 768 and 390 viewport widths.
- Body font resolves to Inter with Geist, SUIT and Pretendard fallbacks.
- The /design-system route remains non-indexed and development-only.

## Open item

The persistent KakaoTalk button overlaps part of the design-system palette at tablet width. It does not block a primary control in the preview. Phase 5 should define its mobile and tablet clearance relative to content and the Contact Drawer.

## Phase 1 acceptance

The V7 design direction is documented and previewed. Phase 2 can now change the Hero, with required checks for first-frame visibility, CTA availability, reduced motion, reverse scrolling and the 1440×900 / 390×844 captures.
