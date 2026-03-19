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

| Token | Size | Use |
|-------|------|-----|
| xs | 2dp | |
| s | 4dp | Default rounding — used by the majority of components. Scales with component proportions. |
| m | 8dp | |
| l | 12dp | |
| xl | 16dp | |
| Round | 999dp | Full rounding — used for buttons and CTAs to draw attention. Use sparingly. |

**Special case:** Checkboxes use a smaller corner radius tied to their border width, so the interior remains visually square while the exterior is rounded.

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

- Default corner radius: 4dp (s) for most components
- Full rounding (999dp): buttons and CTAs only — use sparingly
- Keyboard focus ring: always 2dp border — never suppress
- Shadow depth communicates elevation — use consistently to avoid visual hierarchy confusion

## Escalate if

A component needs a corner radius, shadow, or border width outside this scale.
