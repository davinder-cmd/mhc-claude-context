# Object Styles

**Confluence:** https://mobilehealthc.atlassian.net/wiki/spaces/MDS/pages/1344045199
**Figma:** https://www.figma.com/file/QGp66GqX7B1LDkjD82bvwC/Design-System-Master?node-id=53453%3A38565
**Status:** ✅ Documented

---

## Purpose

Defines the visual treatment tokens — corner radius, drop shadow, and border width — that give components consistent shape and depth. Every object style carries a semantic meaning. Specific shapes or effects communicate interaction intent.

---

## Corner Radius (Rounding)

Almost all components are rounded. Only specific exceptions (e.g., tooltip tips) are square.

| Token | CSS variable | Size | Use |
|-------|--------------|------|-----|
| xs | `--r-xs` | 2dp | Borders / micro-rounded elements (rare) |
| s | `--r-s` | 4dp | **Default rounding** — used by the majority of components. Scales with component proportions. |
| m | `--r-m` | 8dp | Chips, tags, badges, small interactive elements |
| l | `--r-l` | 12dp | Thumbnails, smaller cards |
| xl | `--r-xl` | 16dp | Standard card / surface rounding |
| Full | `--r-full` | 999dp | Full rounding — buttons, CTAs, pills, circular icons. Use sparingly. |

**Special case:** Checkboxes use a smaller corner radius tied to their border width, so the interior remains visually square while the exterior is rounded.

**Rule:** all `border-radius` values in code must use one of these tokens. No literal px values.

---

## Drop Shadow

4 levels of shadow depth. Dimensions scale with desktop/mobile context.

| Level | Use |
|-------|-----|
| Depth 0 | No shadow — flat surface |
| Depth 1 | Subtle elevation — cards, surface separation |
| Depth 2 | Moderate elevation — dropdowns, popovers |
| Depth 3 | Maximum elevation — modals, overlays |

---

## Border Width

| Width | Use |
|-------|-----|
| 1dp | Most common — standard borders (text fields, tags, popovers) and small dividers |
| 2dp | Emphasis borders (buttons), medium dividers, sliders, tabs. Also used for keyboard focus rings. |
| 4dp | Large dividers only |
| 8dp | Progress bars and status bars |

---

## Rules

- Default corner radius: **4dp (`--r-s`)** for most components
- Full rounding (`--r-full`): buttons, CTAs, pills, dots, circular icons only — use sparingly
- Keyboard focus ring: always 2dp border — never suppress
- Shadow depth communicates elevation — use consistently to avoid visual hierarchy confusion
- All `border-radius` values must reference a token — no literal px

## Escalate if

A component needs a corner radius, shadow, or border width outside this scale.

---

## Revision Log

| Date | Change |
|------|--------|
| 2026-05-23 | Added CSS variable column to corner radius table. Renamed "Round" token to "Full" (`--r-full`) to match CSS variable convention. Added explicit use descriptions for each token. Added the "no literal px" rule. |
