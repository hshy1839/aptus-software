# APTUS V7 Phase 1 Creative Direction

## Approved creative system

### ALIGN

Alignment is the primary sign of confidence. Shared column edges, consistent metadata positions and one-pixel dividers make every section feel part of the same product studio.

### CUT

The separated diagonal planes in the inline APTUS SVG are the signature form. They are used at the Hero and in restrained editorial crops. They do not become a repeated decorative pattern.

### ASSEMBLE

Motion represents work becoming complete. It begins with the logo planes, continues with product demos and finishes with an inquiry. A visitor can read, navigate and contact APTUS before any motion completes.

## Token decisions

| Category | Decision |
| --- | --- |
| Canvas | #F7F8FA |
| Surface | #FFFFFF |
| Ink | #101418 |
| Graphite | #2A3138 |
| Muted text | #5B6670 |
| Structural line | #C9D0D7 |
| Display and UI | Geist or Inter |
| Korean display and body | SUIT or Pretendard |
| Metadata | IBM Plex Mono |
| Desktop grid | 12 columns |
| Tablet grid | 8 columns |
| Mobile grid | 4 columns |
| Motion timing | 160ms feedback, 420ms state change, 900ms Hero assembly |

## Interaction ownership

- Hero uses a short, reversible logo assembly that never hides the title or CTAs.
- Purpose uses one typographic crop. No independent pin.
- Services use product-specific browser, phone and conversion scenes. Desktop uses scroll-linked stage transitions only after Hero is released. Mobile renders the same scenes vertically.
- Archive uses static editorial evidence cards labeled as APTUS internal demos until verified project materials exist.
- Capabilities uses direct SVG labels, keyboard-accessible controls and one selected detail panel.
- Process uses a light scroll progress line. It never pins the viewport.
- Contact uses a consistent visual token layer over the existing validation and API contract.

## V7 preview

The non-indexed /design-system route is updated to V7 vocabulary for private inspection. It provides visual checks for color, typography, grid, components, the three principles and responsive behavior.

## Implementation impact

1. Phase 2 changes SystemHero.tsx, AptusLogo.tsx only if needed, and the Hero CSS block.
2. Phase 3 changes ServiceShowcase.tsx and its CSS block.
3. Phase 4 splits the V5 section module into focused pieces only when a section needs a change.
4. Phase 5 restyles the Drawer while preserving field names and API behavior.

## Constraints preserved

- No Three.js dependency.
- No invented customer work, numbers or testimonials.
- No neon, lime, radar, glitch, terminal or HUD direction.
- No new repeated pinning. Hero is the only candidate and requires Phase 2 screenshot approval.
