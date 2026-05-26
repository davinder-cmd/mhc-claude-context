# Notion Home — Prototype Log

Reference: Notion homepage redesign from Figma file `Home-Page-redesign` (node 4450-6364), specced from the design.md provided in chat.

## Iterations

| Version | File | Date | Notes |
|---|---|---|---|
| v1 | [notion-home-v1-prototype.html](notion-home-v1-prototype.html) | 2026-05-13 | Full single-page implementation of the Notion design system spec: promo banner, sticky nav, navy hero with mesh-wire + sticky-note dot decoration and Ramp HQ kanban workspace mockup, logo wall, "Keep work moving 24/7" sticky panel with status feed, bold yellow assistants banner + pastel feature tiles, 3-column feature grid (sky tutorial / cream calendar / brown testimonial), stat strip with bar viz, 4-tier pricing + dense comparison table, FAQ accordion, navy CTA banner, 6-column footer. Honors token system: 8px rectangular buttons (NOT pills), 12px card radius, signature purple primary CTA, Inter as Notion-Sans fallback. Responsive collapses 3-col → 2-col → 1-col with hero type scaling 80px → 56px → 44px. |

## Open follow-ups
- Wire mesh decorations are SVG path-based — could swap to a richer multi-wire pattern if more atmospheric depth needed.
- Workspace mockup uses a static Roadmap Q3 kanban — could swap to a different page type (timeline, doc) to vary the hero across A/B tests.
- Pastel tiles use placeholder mini-UI chips; could deepen with real product screenshots.
