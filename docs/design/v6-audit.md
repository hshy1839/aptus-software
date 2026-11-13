# APTUS V6 baseline audit

Date: 2026-11-13

## Scope and baseline

- Source branch protected: `codex/aptus-v5-interaction` at `ad032e6`.
- Audit branch: `codex/aptus-v6-baseline-audit`.
- Working tree was clean before the audit branch and no application source or design values were changed in this step.
- Local runtime: `http://localhost:3001` responded as the active Next development server. Port `3000` had no listening process.
- Captures: `.qa/v6/baseline/`.

## Visual findings, ordered by impact

1. **Hero assembly occupies too much of the first-scroll budget (high).** The isolated symbol stage is visually strong, but the first frame can leave the brand copy absent and parts near viewport edges at wide sizes. The pinned range (`+=1650`) adds a substantial scroll commitment before the primary service content.
2. **Hero-to-Purpose-to-Services pacing is uneven (high).** The hero pin, purpose motion and the services pin form two large consecutive scroll-controlled experiences. Content remains accessible but the page feels slower than a corporate landing page should.
3. **Services use a robust scene language but need consistent typographic containment (medium).** Korean service names require a constrained line measure at desktop widths; the current CSS fixes the most visible overflow, but V6 should establish a shared headline scale/token.
4. **Archive is intentionally a demo gallery (medium).** It does not misrepresent customer work, but its visual weight is close to a portfolio. A V6 content rule should keep the internal-demo label persistently visible and distinguish it from future verified case studies.
5. **Capabilities diagram lacks visible node labels in the SVG plane (medium).** The selected detail panel is legible, while the diagram itself reads as anonymous dots until a user understands the button group. V6 should place concise accessible labels adjacent to nodes.
6. **Process timeline is readable, but the progress rail starts after the title area (low).** The effect is clean on mobile; desktop needs a precise start/end calibration after layout changes.
7. **Legacy components remain in the repository (low).** `Hero.tsx`, `ShowcaseSync.tsx`, pre-V5 sections and preview components are not mounted by `app/page.tsx`. They increase audit surface but do not affect the current landing page.

## Motion and implementation audit

| Area | Mechanism | Cleanup / reduced motion | Risk |
| --- | --- | --- | --- |
| Hero | GSAP timeline + ScrollTrigger pin, scrub `0.8`, `+=1650` | `gsap.context().revert()`; reduced-motion bypass | High scroll budget |
| Services | GSAP scene timeline + ScrollTrigger pin, scrub `0.7`, `+=2200` | `gsap.context().revert()`; mobile/reduced-motion bypass | Second large pin |
| Purpose | ScrollTrigger `from` reveals | context cleanup; reduced-motion bypass | Low |
| Capabilities | SVG path draw + button state | context cleanup | SVG paths have no visible labels |
| Process | scrubbed progress rail | context cleanup | Needs post-V6 calibration |

There are two intentional pins: Hero and Services. No radar, concentric-circle or neon scanning implementation was found.

## Logo comparison

- Reference input and `public/aptus-logo.png` are 1080 × 1080 raster exports.
- Runtime logo is inline SVG (`viewBox="0 0 900 250"`), not a PNG placement.
- The mark is split into three polygons: `#logo-part-1`, `#logo-part-2`, `#logo-part-3`; wordmark, divider and sublabel remain separate targets.
- The audited geometry preserves the reference's three slanted black mark segments, horizontal wordmark, vertical divider and `software solution` label. The wordmark is text rather than outlined paths, so its exact raster glyph shape can vary with the Geist fallback/font availability. Treat exact wordmark matching as a V6 visual acceptance item.

## Protected functional inventory

- Contact drawer: `ContactDrawerProvider`, opened by Hero, Services, Header and Contact section CTAs.
- Form endpoint: `POST /api/contact`; required fields are name, contact, message, service and consent. Delivery uses `RESEND_API_KEY` and `CONTACT_TO_EMAIL`.
- Kakao consultation links: `http://pf.kakao.com/_BCUxcn/chat` in both the floating button and contact section.
- Anchor navigation: `#top`, `#systems`, `#archive`, `#capabilities`, `#process`, `#contact`.

## Available tooling

- Installed runtime libraries: GSAP + ScrollTrigger, Framer Motion, and Playwright.
- Browser verification: Playwright CLI with local Chrome was available and used; a Playwright MCP tool was not available in this environment.
- Available design-related skills in this session: `sites`, `visualize`, `imagegen`. No skill named UI/UX Pro Max or Frontend Design Pro is installed. This audit was intentionally code- and browser-observation-only, so no design skill was invoked.
