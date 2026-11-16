# APTUS V7 Phase 4 Sections Verification

Date: 2026-11-16

## Changes

- Preserved Purpose and Archive editorial content, including the persistent APTUS internal-demo disclosure.
- Added direct labels to all six visual nodes in the Capabilities SVG.
- Kept the labeled button group as the accessible control surface and added aria-pressed state plus an aria-live detail panel.
- Added reduced-motion bypass to Capabilities and Process GSAP effects.
- Tuned Process progress to a shorter non-pinned scroll range.

## Verification

| Check | Result |
| --- | --- |
| Capability SVG node labels | Six visible labels |
| Capability selection | Backend selection updates detail to Node.js · API · Database |
| Capability controls | Buttons retain pressed state |
| Process layout | Natural scroll, no pin |
| Reduced motion | Decorative Capabilities and Process tweens bypassed |
| Console errors | None observed |

## Captures

Saved under .qa/v7/phase-4/.

- capabilities-1440-fixed.png
- capabilities-390-fixed.png
- process-1440-fixed.png

## Note

Earlier fragment-navigation captures that landed in Services are retained as raw evidence but are not used as acceptance captures. Direct scroll-to-element captures above are the valid Phase 4 review artifacts.
