# State Layers

**Confluence:** _pending — new v3 foundation entry_
**Figma:** Design-System-Master → `01_Foundation` → State Layers (to be added)
**Reference:** Material 3 State Layers · Apple HIG (pointer vs. touch)
**Status:** 🔄 New foundation — adopted 2026-08-12. Supersedes the per-component state notes in [atoms/button.md](../atoms/button.md).

---

## Purpose

A **single, system-wide definition of interaction states** — hover, focus, pressed, dragged, disabled — expressed as opacity tokens that apply to **any** interactive surface: buttons, list rows, support rows, nav items, chips, tabs, cards-as-buttons, links. States are defined once here and composited over a component's resting color, so no component re-invents its own hover.

Before this entry, only `atoms/button.md` specified states — every other interactive surface (rows, nav, links) had no documented hover. This foundation closes that gap for all prototypes built on the design system.

---

## The model — a state layer

A **state layer** is a translucent overlay of a single color, composited over the component's resting fill at a defined opacity. This is Material 3's model, and it is what these tokens encode.

- **Layer color = the interactive foreground role** of the surface:
  - Neutral surfaces (list row on a white card, nav item) → **on-surface ink** (use `currentColor`).
  - Branded controls (filled brand button) → the **on-container** color (effectively darkens the fill).
- The layer **inherits the component's shape** — it honors the same corner radius and is clipped to the component's box ([object-styles.md](object-styles.md)).
- States **compose**: a focused element that is also hovered shows both signals.

---

## Opacity tokens

| State | Token | Opacity | Notes |
|---|---|---|---|
| **Hover** | `--state-hover` | **0.08** | Pointer over the target. Pointer-only (see gating). |
| **Focus** | `--state-focus` | **0.10** | Supplementary to — never a replacement for — the 2px focus ring. |
| **Pressed** | `--state-pressed` | **0.12** | Click/tap held (`:active`). MHC uses 12% (a firmer press than M3's 10%). |
| **Dragged** | `--state-dragged` | **0.16** | While a draggable element is held. |
| **Disabled — content** | `--state-disabled-content` | **0.38** | Text/icon opacity on a disabled control. |
| **Disabled — container** | `--state-disabled-container` | **0.12** | Fill/border opacity on a disabled control. |

```css
:root{
  --state-hover: 0.08;
  --state-focus: 0.10;
  --state-pressed: 0.12;
  --state-dragged: 0.16;
  --state-disabled-content: 0.38;
  --state-disabled-container: 0.12;
}
```

These align with Material 3 state layers (hover 8 / focus 10 / pressed 10 / dragged 16); MHC adopts **pressed 12%** to match the shipped button spec. Filled-button variants may instead use the explicit darker-fill tokens in `atoms/button.md` — the effect is equivalent (a state layer over the container).

---

## Application

**Recommended technique — a pseudo-element overlay** (works over any fill, including images and gradients, and clips to the component radius):

```css
.interactive{ position:relative; isolation:isolate; }
.interactive::after{
  content:""; position:absolute; inset:0; border-radius:inherit;
  background:currentColor; opacity:0; pointer-events:none;
  transition:opacity .15s ease;
}
@media (hover:hover) and (pointer:fine){
  .interactive:hover::after{ opacity:var(--state-hover); }
}
.interactive:active::after{ opacity:var(--state-pressed); }
.interactive:focus-visible::after{ opacity:var(--state-focus); }
```

For simple solid-fill controls, `color-mix(in srgb, currentColor calc(var(--state-hover)*100%), transparent)` as a `background` overlay is an acceptable shorthand.

---

## Rules

1. **Hover is pointer-only.** Gate `:hover` behind `@media (hover:hover) and (pointer:fine)` so touch devices never get a stuck hover after a tap. Pressed/`:active` still applies on touch.
2. **Focus ring is the real focus signal.** The 10% focus layer is supplementary. The **2px focus ring is mandatory and never suppressed** — see [colors.md](colors.md) and the accessibility floor. A state layer alone does not satisfy focus visibility.
3. **Never color-only.** Per `colors.md`, hover may be pointer-only, but focus/disabled must be distinguishable beyond hue (ring for focus; reduced opacity + `cursor:not-allowed` for disabled).
4. **Disabled is inert.** `cursor:not-allowed`, content at 38% / container at 12%, and **no** hover/pressed/focus response. Honor both `:disabled` and `[aria-disabled="true"]`.
5. **Layer honors shape.** The overlay clips to the component's corner radius; it never bleeds past rounded corners.
6. **Motion.** `150ms` transition on the layer's opacity. Respect `prefers-reduced-motion` — reduced means near-instant, not merely slower.
7. **One layer, composed.** Don't stack multiple bespoke tints; use the token opacities and let states compose.

---

## Applies to (non-exhaustive)

Buttons (all variants) · list rows / list items · nav items (bottom nav, rail, tabs) · support/contact rows · link rows · chips · segmented controls · any card that is itself a tap target · icon buttons.

Non-interactive surfaces (static cards, headers, dividers) get **no** state layer.

---

## Escalate if

A required interaction cannot show a state within these tokens (e.g., a control on a busy photographic fill where 8% is invisible) — escalate for a per-context layer opacity rather than inventing an undocumented value inline.

---

## Revision Log

| Date | Change |
|---|---|
| 2026-08-12 | Initial foundation entry — system-wide state-layer opacity tokens (hover/focus/pressed/dragged/disabled), pointer gating, pseudo-element application pattern. Extracted and generalized from `atoms/button.md` so all interactive surfaces share one definition. |
