# APTUS V7 Phase 6 Quality Report

Date: 2026-11-16

## Whole-page visual review

Final captures saved under .qa/v7/phase-6/.

- home-1440x900.png
- home-768x1024.png
- home-390x844.png

The complete experience maintains the white, black and gray V7 system from Hero to Contact. Hero uses the APTUS SVG signature, Services present three different product-demo scenes, Archive remains explicitly internal-demo content, Capabilities presents labeled technology nodes, Process uses an unpinned progress line, and Contact remains a clear conversion endpoint.

## Functional regression checks

| Area | Result |
| --- | --- |
| Hero title and CTA at first frame | Pass |
| Header Modules anchor | Pass after 88px anchor offset |
| Service inquiry CTA | Opens Drawer |
| Contact first-field focus | Pass |
| Contact required fields and API contract | Preserved |
| KakaoTalk link | Preserved |
| Desktop, tablet, mobile horizontal overflow | None |
| Browser console errors | None |
| Reduced motion Hero state | Readable static state |
| Lint | Pass with no warnings |
| Production build | Pass |

## Final improvements during QA

- Added anchor offset so fixed header navigation no longer obscures section starts.
- Added Drawer viewport clipping so the transformed closed panel no longer expands mobile document width.
- Removed unused V5 data and state from AptusExperience, eliminating the legacy lint warnings.

## External integrations

- No external form submission was made.
- RESEND_API_KEY was not inspected.
- No deployment or remote push was performed.

## Remaining limitations

- Project archive content is internal APTUS demo material because verified customer project assets are not present.
- The persistent KakaoTalk control can overlap low-priority visual space on some screenshots. It does not cover a primary CTA or form field in final checks.
