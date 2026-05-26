# Button

**Figma Page:** `A_Button` — https://www.figma.com/file/QGp66GqX7B1LDkjD82bvwC/Design-Building-Blocks
**Notion:** https://www.notion.so/Button-Atom-Documentation-33e69fed903181f28e49ea51c832df18
**Status:** ✅ Ready

---

## Quick Reference

- **Variants:** Primary, Secondary, Outlined, Danger, Text, Contrast
- **Default:** Secondary
- **Sizes (Material 3 button scale):** XS (32dp), S (40dp, default), M (56dp), L (96dp), XL (136dp)
- **Icon positions:** Left, Right, Icon-only (centered, no text)
- **One Primary per screen max**
- **Danger requires confirmation dialog**
- **Text** for inline/minimal emphasis actions
- **Contrast** for use on dark/image backgrounds

---

## Label Type Class

Button labels use the `Label` tier from the type system (see [typography.md](../foundation/typography.md)). All Label classes are **static across viewports** — button labels keep a consistent tap-target size on both Small and Medium forms.

| Size | Height | Label class | Size / LH | Weight | Use |
|------|--------|-------------|-----------|--------|-----|
| **XS** | 32dp | **Label 2** | 12 / 16 | 500 medium | Dense UI, supportive actions, chips |
| **S** (default) | 40dp | **Label 1** | 14 / 16 | 500 medium | Standard CTAs, default buttons across the product |
| **M** | 56dp | **Label 0** | 16 / 20 | 500 medium | Emphasized / hero CTAs (e.g. Start the program) |
| **L** | 96dp | *TBD — needs ≥24sp label* | — | — | Promoted / marketing surfaces. Not currently used in MHC. |
| **XL** | 136dp | *TBD — needs ≥32sp label* | — | — | Splash pages / landing emphasis. Not currently used in MHC. |

**Sizing aligned to Material 3.** This is the M3 Expressive size scale (`xs / s / m / l / xl` = 32 / 40 / 56 / 96 / 136dp). Default for everyday CTAs is S (40dp). M (56dp) replaces what MHC used to call "Jumbo" (48dp) — slightly taller, matches M3 convention. L and XL are part of the framework but not yet wired up in MHC components — flag back here when first introduced so the label-class pairing can be formalized.

**All sizes use the Label tier.** The button's visual prominence comes from height, padding, and the filled/outlined treatment. M bumps its label size up to Label 0 (16sp) because 14sp inside a 56dp pill reads under-weighted. XS / S keep their Label-tier label since their proportions don't need the bump. System rule stays clean: interactive controls use Label classes.

**Never override the label class.** An S (40dp) button always uses Label 1; do not apply an inline `font-size` or `font-weight` to make it bigger or bolder for a single screen.

**Icon-only buttons:** no label class applies. The icon-only variant has no visible text; an `aria-label` provides the accessible name.

---

## States

Every variant supports five interaction states, matching the Figma button component spec:

| State | CSS hook | When it applies |
|---|---|---|
| **Default** | (base) | Resting / no interaction |
| **Hover** | `:hover` | Pointer over the button |
| **Pressed** | `:active` | Click or tap held |
| **Focus** | `:focus-visible` | Keyboard focus |
| **Disabled** | `:disabled` or `[aria-disabled="true"]` | Inert / non-interactive |

### Per-variant state spec

| Variant | Default | Hover | Pressed | Focus | Disabled |
|---|---|---|---|---|---|
| **Filled** | brand fill / on-brand text | darker brand fill | darkest brand fill | matches hover (+ focus ring) | hairline fill / ink-placeholder text |
| **Outlined** | surface fill / hairline border / ink text | surface-tinted fill / ink-placeholder border | hairline fill / ink-soft border | matches hover (+ focus ring) | surface fill / hairline border / ink-placeholder text |
| **Text** | transparent / link-color text | brand-tint pill @ 8% opacity | brand-tint pill @ 12% opacity | matches pressed (+ focus ring) | transparent / ink-placeholder text |

### Universal focus ring

All button variants get a `:focus-visible` outline for keyboard a11y:

```css
.btn:focus-visible { outline: 2px solid var(--link); outline-offset: 2px; }
```

Figma's button component doesn't currently show this ring — add it as a "focused" variant detail at the next Figma sync. It's a web-platform a11y requirement, not optional.

### Disabled affordance

Always set `cursor: not-allowed` on disabled buttons. Honor BOTH `:disabled` (semantic for `<button>` and `<input>`) and `[aria-disabled="true"]` (for link- or div-styled-as-button cases). Disabled buttons should not respond to hover/active/focus state changes.

### Transition timing

Use a `150ms` transition on `background-color`, `border-color`, and `color` so state changes feel responsive but not abrupt:

```css
.btn { transition: background-color .15s, border-color .15s, color .15s; }
```

---

## Escalate If

- New variant requested
- Icon-only button needed without visible label
- Size outside XS / S / M needed (L and XL are framework-available but need label-class definition first)
- Engineering requests behavior not documented

---

## Decision Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-04-09 | Reduced from 8 variants to 4 | Principle #1: Fewer Options. Carbon has 4, Material has 5. 8 was overconfigured. |
| 2026-04-09 | Renamed Standard → Secondary, Stroked → Outlined | Principle #2: Industry Naming. Engineers can Google these terms. |
| 2026-04-09 | Made Medium the default size | Principle #4: One Default. 90% of usage is Medium. |
| 2026-04-09 | Removed Tinted variant | Merged into Outlined. Behavioral difference was minimal. |
| 2026-04-09 | Moved from Components to Atoms | Button is a primitive — single-purpose, no internal composition. |
| 2026-04-10 | Added Text variant back | Needed for inline/minimal emphasis actions where filled buttons are too heavy. |
| 2026-04-10 | Added Contrast variant back | Required for buttons on dark backgrounds, images, or colored surfaces. |
| 2026-04-10 | Confirmed 4 sizes: Jumbo/Large/Medium/Small | Jumbo (48dp) for hero CTAs, Large (40dp) for modals/pages, Medium (36dp) default, Small (32dp) for dense UI. |
| 2026-05-23 | Mapped each size to the Label type class | Type system v3 added a Label tier specifically for interactive UI labels. Small → Label 2 (12/16), Medium + Large → Label 1 (14/16), Jumbo → Body 1 (18/24, bumps at 600dp). All Label classes are static across viewports — buttons don't grow with the form factor. Removes the prior implicit pattern of using Body 3 + inline weight override on a 36dp button. |
| 2026-05-23 | Jumbo switched from Body 1 → Label 1 | Same-day revision. Body 1 mapping was a special-case exception that broke the "buttons use Label" rule. Switching to Label 1 (14sp medium static) makes the mapping consistent across all four sizes — Jumbo's prominence comes purely from height (48dp) + padding + filled treatment. Matches Material 3 precedent (Extended FAB and large CTAs all use Label Large regardless of button size). |
| 2026-05-24 | Jumbo bumped from Label 1 → Label 0 | Validated in prototype v55. Label 1 (14sp) inside a 48dp Jumbo button read anemic — 3.4:1 button-to-label height ratio created visible empty space around the text. Added Label 0 (16sp medium static, same family/weight) to typography.md and pointed Jumbo at it. Ratio drops to ~3:1, label has visible presence inside the pill. Still in the Label tier, system rule intact. Departs slightly from Material 3 (which doesn't bump label size) — but Material's Extended FAB uses larger button padding to compensate, which MHC's 48dp doesn't. |
| 2026-05-24 | Adopted Material 3 button size scale | Reworked size names + heights from MHC's `Small/Medium/Large/Jumbo` (32/36/40/48dp) to M3 Expressive's `XS/S/M/L/XL` (32/40/56/96/136dp). Default = S (40dp). Hero CTAs = M (56dp, was Jumbo 48dp). XS stays at 32dp. The old Medium (36dp) collapses into S (40dp) — most CTAs grow 4dp. The old Large (40dp) is now just S — no separate class needed. L and XL are framework-available but not currently used; will need ≥24sp / ≥32sp label classes when first used. Decision: align to a recognized framework (M3) instead of carrying our own ad-hoc scale. Figma button component will need to be updated to match (currently uses xs/sm/md/lg = 28/32/40/48dp). Filed for future Figma sync. |
