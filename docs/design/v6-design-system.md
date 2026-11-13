# APTUS V6 design system

- Colors: `--v6-white`, `--v6-off-white`, `--v6-black`, `--v6-gray`, `--v6-border`.
- Type: display uses `clamp(3rem, 8vw, 9rem)`; headings use `clamp(2rem, 5vw, 5rem)`; Korean headings use `word-break: keep-all` and a 14ch maximum measure.
- Grid: 12 columns desktop, 8 tablet and 4 mobile via `--v6-gutter` and `--v6-content`.
- Motion: micro 160ms; standard 420ms; cinematic 900ms; `cubic-bezier(.22,1,.36,1)`. New pins are prohibited until Hero/Services pin reductions are completed.
- Primitives: ALIGN (grid/divider), CUT (diagonal clip), ASSEMBLE (three SVG logo parts).
- Reduced motion removes transform/clip animation; focus uses visible black outlines.
