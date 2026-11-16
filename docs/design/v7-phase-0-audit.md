# APTUS V7 Phase 0 Audit

Date: 2026-11-16

## Runtime and repository

- Project path: `E:\project\aptus-software`.
- Branch: `codex/aptus-v6-signature-hero`.
- Latest commit at audit start: `cd9300f feat: capture img.`
- Working tree: clean before this audit document and QA captures.
- Development server: Next.js process listening on `localhost:3000`.
- Installed interaction libraries: GSAP 3.15.1 with ScrollTrigger, Framer Motion and Playwright.
- No Three.js or React Three Fiber dependency is installed. The current experience does not have a demonstrated 3D requirement.

## Mounted experience

The landing page mounts Header, AptusExperience, Footer, ContactDrawerProvider, ScrollToTopButton and FloatingKakaoButton.

| Area | Primary implementation | Protection |
| --- | --- | --- |
| Hero | `SystemHero.tsx` plus inline `AptusLogo.tsx` SVG | Preserve three logo part IDs, CTA and reduced-motion path |
| Services | `ServiceShowcase.tsx` | Preserve three service facts, internal-demo disclosure and drawer CTA |
| Purpose, archive, capabilities, process | `components/v5/Sections.tsx` | Preserve real-data disclosures and content hierarchy |
| Contact | `ContactDrawerProvider.tsx` and `POST /api/contact` | Preserve required fields and API payload |
| Kakao | `FloatingKakaoButton.tsx` | Preserve destination URL |

The current visual system is a white, black and gray Swiss-grid direction. The V6 route at `/design-system` is already available for private development previews.

## SVG and GSAP audit

- The runtime logo is an accessible inline SVG. It is not a PNG placement.
- `AptusLogo.tsx` exposes `#logo-part-1`, `#logo-part-2` and `#logo-part-3` for controlled assembly. Wordmark, divider and sublabel are separate targets.
- `SystemHero.tsx` uses GSAP, ScrollTrigger and `gsap.context().revert()`.
- `ServiceShowcase.tsx` uses a GSAP scene timeline and the same cleanup pattern.
- Purpose, capabilities and process use smaller ScrollTrigger effects.
- Reduced motion is respected by Hero and Services. Capabilities and Process need the same explicit bypass during V7 implementation.

## Captures

Current full-page captures were saved to `.qa/v7/phase-0/`.

- `home-1440x900.png`
- `home-768x1024.png`
- `home-390x844.png`

## Findings by impact

### P0 — Hero content is not immediately discoverable

At scroll position zero, the accessibility snapshot exposes the assembled SVG logo and scroll instruction, but does not expose the Hero heading or project CTA. The motion timeline initially places the manifesto and action group at zero opacity. This breaks the requirement that CTA and service messaging remain immediately usable before the assembly completes.

V7 action: render essential Hero heading and CTA in their final accessible state from first paint. Animate only nonessential logo position, guide lines and supporting layers.

### P0 — Two long consecutive pinned experiences slow the page

Hero has a desktop pin of approximately 950px. Services adds a separate 2200px pin. The pair dominates the first-scroll budget and delays Purpose, Archive and Contact content.

V7 action: retain one short Hero pin only if screenshots validate its value. Replace the Services pin with a scroll-linked but naturally flowing sequence. Mobile remains unpinned.

### P1 — Hero is visually strong but too empty before copy enters

The three-part mark is distinctive. The desktop initial frame gives it most of the viewport and leaves large inactive space below. At the mobile first frame, the brand promise sits substantially below the mark. This weakens commercial clarity.

V7 action: use the logo assembly as the signature cue, then retain a persistent compact title and CTA column at all scroll positions.

### P1 — Services communicate scope but lack differentiated showcase density

Web, mobile and web-to-app scenes have functional internal demo visuals and explicit internal-demo disclosure. The current shared stage layout is coherent, but the three scenes rely on nearly identical text/visual ratios and the desktop pin forces progression.

V7 action: keep internal demos, differentiate each scene through browser architecture, device composition and conversion diagram, and render in a normal mobile vertical flow.

### P1 — Contact Drawer is functionally complete, visually detached

The Drawer has service, budget, timeline, contact, message and consent fields and retains focus, Escape and body-scroll behavior. Its Tailwind panel styling does not yet share the Hero's precise grid and typography rules.

V7 action: restyle the Drawer through shared tokens without changing form names, validation, endpoint contract or Kakao handoff.

### P2 — Capabilities SVG needs direct labels

The diagram has interactive circles and separate labeled buttons. The SVG plane itself communicates topology but not category identity.

V7 action: retain the buttons, add concise visible SVG labels and make selection state clear through text plus stroke, not color alone.

### P2 — Global CSS is hard to review safely

`globals.css` combines multiple generations of styling in very long compressed blocks. Earlier components remain unmounted.

V7 action: extract V7 tokens and component blocks into readable sections. Do not delete legacy components during V7 unless a dependency audit proves they are unused.

## Protected behavior

- Header anchors and Hero, service and contact CTAs.
- Contact fields: name, company, contact, service, message, timeline, budget and consent.
- `POST /api/contact` validation and Resend environment variables.
- Kakao URL `http://pf.kakao.com/_BCUxcn/chat`.
- Existing inline SVG logo structure.
- Internal-demo disclosures and the absence of invented client work, testimonials or metrics.

## Phase 0 verification

- Browser console errors: none observed during the audit navigation.
- Desktop, tablet and mobile document widths were captured. Mobile capture requires a fresh Drawer-closed retest before visual-change acceptance because the Drawer can affect a full-page capture state.
- No code or design values were changed in Phase 0. Only this audit and the Phase 0 QA artifacts were added.
