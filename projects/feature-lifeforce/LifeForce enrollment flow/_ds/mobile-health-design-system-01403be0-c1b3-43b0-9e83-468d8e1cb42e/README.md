# MobileHealth Design System

A complete design system for **mobilehealth** — distilled from the MobileHealth Brand Guidelines v1.2 (2021). Use it to produce on-brand marketing pages, product UIs, sales decks, and throwaway prototypes.

> **Brand essence.** "We make creating healthy cultures simple." Guardian archetype — trust, credibility, dedication. Visual language built on circles, simple geometry, and wholeness.

## Sources

- **Uploaded**: `uploads/MHC-Brand Guidelines v2.pdf` — the canonical brand book (24 pages). Contains logo rules, color system, typography, graphic elements, photography, illustration, iconography, and example layouts. All visual foundations below were traced back to this document.
- No codebase, Figma link, or production screenshots were provided. UI kits in this system are inferred from the brand book's "Visual Language in Action" section and the reference layouts on pages 18–22.

---

## Quick Index

| Path | What it is |
|---|---|
| `colors_and_type.css` | CSS variables: every brand color, semantic tokens (`--mh-fg-1`, `--mh-bg-brand`, …), type scale, spacing, radii, shadows. Drop-in for any file. |
| `assets/` | Logos (primary + mark, blue + white), the 6 brand icons, the 3 brand illustrations. PNG, transparent where possible. |
| `preview/` | Design System tab cards — swatches, type specimens, component states. One card per concept. |
| `ui_kits/marketing_site/` | Marketing website UI kit — hero, feature sections, CTA, footer. Click-through prototype in `index.html`. |
| `ui_kits/member_app/` | Member-facing health app UI kit — onboarding, dashboard, activity, profile. |
| `slides/` | Sales deck slide templates matching the brand book's example layouts. |
| `SKILL.md` | Agent-Skills compatible entrypoint. |

---

## Content Fundamentals

**Voice.** Warm, plain, and quietly confident. The brand is a Guardian — it watches over your health — so copy should feel like an experienced friend, not a hype-man. Short sentences. Active voice. No exclamation points outside of genuine celebration.

**Casing.**
- **Title Case** for Headlines and Subheads — e.g. *"Start the Journey"*, *"Lorem Ipsum Dolor Amet"*.
- **Sentence case** for body copy and callouts. Yes even inside buttons on certain layouts: the reference hero uses `start the journey` all-lowercase inside a pill button, which doubles as a quiet style signature. Both are acceptable; pick one per surface and stick with it.
- Labels and eyebrows: UPPERCASE with wide tracking.

**Person.** Speak **to** the reader: *you, your*. The brand is *we / our*. Never third-person ("users say…") in marketing surfaces.

**Vibe words.** Simple. Whole. Natural. Steady. Together. Journey. Everyday.

**Avoid.** Jargon, "leverage", "unlock", "revolutionize", emoji (the brand has its own icon system — see below), ALL CAPS shouting, superlatives, medical disclaimers written in legalese.

**Example copy in-voice:**
- *Start the journey.* — primary CTA
- *Small daily habits, looked after.* — hero subhead
- *Your coach checks in, so you don't have to remember to.* — feature blurb
- *Take a breath. We've got the rest.* — micro-reassurance
- *Not today?* — secondary action in a survey

---

## Visual Foundations

### Colors

The system is anchored by a single serious blue (`#0f497f` Brand Blue) balanced by three lively secondaries (Aqua, Spring Green, Lava Orange). Neutrals are cool and calm. The tertiary palette supplies vibrancy for illustration accents and spot color — never as the dominant hue.

- **Primary.** Brand Blue `#0f497f` — the "guardian" color. App icons, full-bleed hero sections, primary buttons on light bg, logo default.
- **Secondary (bright).** Aqua Blue `#04a0b7`, Spring Green `#52a045`, Lava Orange `#f15922` — CTAs, graphic shapes, headline accents. **Lava Orange is specifically used as the subhead color on Brand Blue backgrounds** (see reference hero).
- **Secondary (neutral / dark).** Night Sky `#062a42` (deepest darks), Cloud `#e6ebec`, Silver `#c6cccd`, Slate `#6e7a7d` (body text), Charcoal `#373d3f` (primary text).
- **Tertiary.** Glacier, Zesty Green, Mango, Sky Blue, Lime Green, Tangerine. Accent + illustration only.

**Rules.** Slate/Charcoal are text, never primary background. Tertiary never overtakes primary. Use secondary bright colors sparingly and with intent — a single accent per composition, not a rainbow.

### Typography

**Raleway** for everything — web, marketing, presentations. Elegant geometric sans-serif with "old-style flare". Hierarchy:

| Role | Weight | Case | Example size |
|---|---|---|---|
| Headline / Display | Bold (700) | Title Case | 48–72px |
| Subhead | Bold (700) | Title Case | 20–24px |
| Heading / Label | Semibold (600) | Title Case | 14–18px |
| Body copy | Regular (400) | Sentence case | 16px |
| Callout | Semibold (600) | Sentence case | 14–16px |

Helvetica is the authorized fallback for Office / system contexts only. CSS tokens live in `colors_and_type.css` (`--mh-font-brand`, `--mh-size-h1`, etc).

### Backgrounds

- **Solid color blocks** are dominant. Brand Blue for heroes, Night Sky for deepest moments, Cloud for sectional separation, white for body content.
- **No gradients.** The brand book never uses a gradient fill. Avoid them entirely.
- **Photography** may be used full-bleed or masked inside a circle.
- **Geometric shape blocks** — circles, half-circles, quarter-circles stacked next to each other — act as framing devices. Never decorative-only; always carry content, mask an image, or anchor a CTA.

### Shape & corner radii

- **Circle** is the signature form. Whole, half, quarter — stacked horizontally or vertically.
- Buttons: **pill** (fully rounded) — matches the `start the journey` reference.
- Cards & surfaces: gentle 8–16px radius. Never sharp 0px unless deliberate (table cells, data grids).
- Photos: often **circle-masked** for portraits; full-bleed rectangular otherwise.

### Imagery vibe

- **Portraits.** Outdoors, natural light, subject looking **left or up-and-left** (never directly into camera). Happy, engaged, relaxed posture. Capture diversity intentionally.
- **Elemental photography.** Textures from the elements (solid, liquid, gas) — water, sand, foliage, lava, clouds, smoke. Colors should echo the palette (aquas, sunset oranges, stone grays).
- Tone: **warm + cool in balance**, slightly saturated. Never high-contrast gritty, never desaturated b&w.

### Illustration

Vibrant, colorful, flat-vector. **Rules:**
- A person or object anchored by a **layered background scene** (angled or wavy edges — denotes movement).
- Layers are **monochromatic**; the foreground subject contrasts and stands out.
- Circles or drops **mask** the layered background; the subject **extrudes past the edge** of the shape.
- Skintones from the Adobe Skintone library; diverse.

See `assets/illustration-woman-laptop.png`, `illustration-gear-leaves.png`, `illustration-plane-sunset.png`.

### Borders, elevation, transparency

- **Borders** are thin (1px) in `--mh-silver` on light, or `rgba(255,255,255,0.16)` on dark.
- **Shadows** are soft, cool, and used sparingly. Three levels in `colors_and_type.css` (`--mh-shadow-1..3`). Never use drop-shadow on the logo — explicitly forbidden.
- **Transparency / blur** are not brand motifs. Use a solid color over photography (e.g. Brand Blue at 85%) for contrast rather than backdrop-filter blur.

### Motion

The brand book is print-centric and does not prescribe motion, so we define modest defaults:
- **Duration:** 180ms for UI micro-interactions, 280ms for entrances.
- **Easing:** `cubic-bezier(0.2, 0.6, 0.2, 1)` — a measured ease-out that feels calm, never bouncy.
- **Hover:** 6–10% darker fill on buttons, or underline fade-in on links. No scale transforms.
- **Press:** slight 2% scale-down OR 10% darker fill. Never rotate.
- Respect `prefers-reduced-motion`.

### Layout

- Generous whitespace; **clear space around the logo equals the letter-height of the logotype**.
- Page numbers bottom-right, in muted Silver — lifted straight from the brand book.
- Orange text CTAs/subheads sit on Brand Blue; blue text CTAs/subheads sit on white or Cloud.

---

## Iconography

The brand's own icon set is **thick-outline, rooted in simple geometry, and every icon contains a small filled circle** as a unifying motif. Stroke is roughly 8–10% of the icon's height; corners are sharp mitered joins, not rounded. The six canonical brand icons live in `assets/icon-*.png`:

- `icon-crown.png` — royalty / VIP / member tier
- `icon-diamond.png` — value / premium
- `icon-mountain.png` — goal / challenge / journey
- `icon-clock.png` — time / schedule / habits
- `icon-tree-drop.png` — growth / wellbeing (person inside a leaf-drop, with circle)
- `icon-door-shield.png` — privacy / access / safety

**Expanding beyond the six.** The brand book shows only six icons, so for a full UI we substitute with **Lucide Icons** (https://lucide.dev/) — their thick-outline, geometric, uniform-weight style is the closest off-the-shelf match. Colored in Brand Blue by default.

> **Flagged substitution:** The brand signature of a *small filled circle inside every icon* is not present in Lucide. When producing polished marketing assets, prefer the six brand icons. For dense UI (dashboards, toolbars), Lucide is acceptable; note the deviation to the user.

**No emoji.** The brand does not use emoji as UI. No unicode symbol substitutes either.

**Delivery.** Icons are embedded as inline SVG or `<img>` tags; for Lucide use the CDN (`https://unpkg.com/lucide-static/…`).

---

## Flagged gaps & substitutions

- **Fonts.** No Raleway font files were supplied; we load from Google Fonts, which is metric-identical to the brand-supplied desktop family. If you need it self-hosted, drop woff2 files into `fonts/` and update `colors_and_type.css`.
- **Icons.** Only 6 brand icons exist in the source. Lucide is a stopgap — it does not include the circle motif.
- **No production screenshots.** UI kits are inferred from the brand book's example layouts, not from a live product. Visuals are pixel-intentional but not pixel-traced.
- **PMS color codes.** The brand book lists PMS as "XXX" (placeholder). Ask the brand team for the Pantone equivalents before any print production.
- **Motion.** Not specified in the brand book — values above are proposed defaults.
