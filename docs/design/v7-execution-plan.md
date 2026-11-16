# APTUS V7 Execution Plan

## Design principles

1. **ALIGN**  
   A Swiss grid carries navigation, copy, device frames and CTA placement. Alignment makes the site read as a disciplined product studio.

2. **CUT**  
   The three separated APTUS logo planes introduce a precise diagonal cut. It appears once as the Hero signature and returns in controlled crops, not as repeated decoration.

3. **ASSEMBLE**  
   Motion demonstrates a product becoming coherent. Logo parts, service visuals and process steps move toward a completed state while essential content remains available.

## Token direction

- Colors: white, off-white, black, neutral gray and one restrained graphite emphasis. No neon, lime, radar, glitch or terminal syntax.
- Type: Geist or Inter for interface and English display. Pretendard or SUIT for Korean. IBM Plex Mono only for technical labels and metadata.
- Grid: twelve columns at desktop, eight at tablet and four at mobile. Shared gutters and 1px structural dividers.
- Spacing: 8px rhythm with 24px, 48px, 80px and 128px section tiers.
- Motion: 160ms feedback, 420ms state change, 900ms Hero assembly. Transform and opacity only where possible.

## Section strategy

| Section | Role | Interaction | V7 implementation boundary |
| --- | --- | --- | --- |
| Hero | Memorable brand signature and immediate conversion | Short logo-part assembly, subtle guide-line draw | One validated desktop pin maximum, no pin on mobile |
| Purpose | Explain what APTUS changes | Large type crop and one phrase emphasis | Static final copy remains present in DOM |
| Services | Make the three offers comparable and tangible | Web browser, mobile device, web-to-app conversion demos | Natural vertical mobile sequence; service CTAs remain |
| Archive | Show evidence without inventing client work | Editorial internal-demo gallery | Internal-demo label remains persistent |
| Capabilities | Explain engineering coverage | Labeled SVG graph with selected detail | Keyboard-selectable node controls |
| Process | Explain delivery confidence | Scroll-progress line | No pin, no autoplay or blocking |
| Contact | Convert intent to a valid inquiry | Structured Drawer and clear primary CTA | Keep endpoint payload and Kakao link unchanged |

## Implementation order

1. Create a safe checkpoint commit before design source changes.
2. Rework shared V7 tokens and readable CSS organization.
3. Correct Hero first-frame accessibility and reduce Hero pin duration.
4. Verify Hero at 1440×900 and 390×844, including reverse scroll and reduced motion.
5. Rework Services as three differentiated product-showcase scenes without a desktop blocking pin.
6. Verify Services at all target viewports.
7. Improve Purpose, Archive, Capabilities and Process one section at a time.
8. Restyle Contact Drawer while preserving API contracts.
9. Run navigation, CTA, focus, mobile overflow, console, lint, TypeScript and production-build checks.

## QA contract

Each phase saves captures to `.qa/v7/<step>/` at 1440×900, 768×1024 and 390×844, then records changes, checks and open limitations in `docs/design/`.

No push, deploy, external email, API form submission or dependency addition occurs without separate authorization.
