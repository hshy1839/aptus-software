# APTUS V6 component map

## Mounted landing-page tree

`src/app/page.tsx`

1. `Header`
2. `AptusExperience`
   - `SystemHero` — logo assembly SVG and Hero ScrollTrigger
   - `Purpose` (`components/v5/Sections.tsx`)
   - `ServiceShowcase` — three product-demo scenes and Services ScrollTrigger
   - `Archive` (`components/v5/Sections.tsx`)
   - `Capabilities` (`components/v5/Sections.tsx`)
   - `Process` (`components/v5/Sections.tsx`)
   - Contact section / `useContactDrawer()` CTA
3. `Footer`
4. `ContactDrawerProvider` overlay, `ScrollToTopButton`, `FloatingKakaoButton`

## Primary component responsibility map

| Component | Current responsibility | V6 protection / dependency |
| --- | --- | --- |
| `SystemHero.tsx` | SVG assembly animation, top CTAs | Preserve three SVG part IDs and drawer CTA |
| `hero/AptusLogo.tsx` | Inline logo geometry and accessible title | Do not replace with PNG; scope IDs when multiple instances are needed |
| `ServiceShowcase.tsx` | Browser, phone and web-to-app internal demos | Preserve service facts and drawer CTA; avoid client-project claims |
| `v5/Sections.tsx` | Purpose, Archive, diagram, Process | Split into focused components before substantive V6 visual work |
| `contact/ContactDrawerProvider.tsx` | Form UI, validation and API submit | Functional protected area; test with endpoint-safe validation |
| `app/api/contact/route.ts` | Resend submission contract | Preserve payload fields and environment variables |
| `Header.tsx` | Anchor navigation and drawer entry | Preserve anchors or migrate them atomically |
| `FloatingKakaoButton.tsx` | External Kakao handoff | Preserve destination URL |

## CSS ownership

- `src/app/globals.css` owns nearly all visual rules, including V5 Hero, Services and V5 sections.
- CSS is currently highly compressed into long rules. Before V6 visual edits, separate design tokens, layout rules and component blocks to make regression review practical.

## Unmounted / legacy surface

`Hero.tsx`, `ShowcaseSync.tsx`, `FeaturesSection.tsx`, preview cards and `components/sections/*` are present but not mounted by `app/page.tsx`. Do not delete them during the baseline phase; evaluate removal or reuse only after a dependency review.
