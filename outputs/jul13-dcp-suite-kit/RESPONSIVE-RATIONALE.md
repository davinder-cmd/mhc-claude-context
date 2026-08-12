# MHC Responsive Rationale — the *why* behind the system

Distilled from `home-figma-recreation-v81` (locked master) and the design
foundation docs. This is the reasoning layer: apply it by understanding, not by
copying pixels. When a new DCP-suite page needs a responsive decision, resolve
it here first, then reach for a token/class in `mhc-base.css`.

Related memory: [[feedback_wireframe_breakpoint_views]], [[project_content_width_range]],
[[feedback_scale_is_a_guideline]], [[feedback_readability_over_density]].

---

## 1. Breakpoints = Material 3 window size classes

| Class | Width | MHC context |
|---|---|---|
| **Compact** | < 600 | Phone. Single column, bottom nav, carousels for horizontal sets. |
| **Medium** | 600–839 | Small tablet / split. |
| **Expanded** | 840–1199 | Legacy desktop with **side-nav** (the active product today, ~940–1040 usable). |
| **Large** | 1200–1599 | **Top-nav target.** Rail caps at 1280. |
| **Extra-large** | ≥ 1600 | Rail caps at 1440. |

In practice the CSS only trips **three** hard breakpoints: `600` (Compact→up),
`1200` (the "real desktop" line), and `1600` (max-width bump 1280→1440). Plus
`max-width: 599px` for Compact-only affordances (carousels, stretched links).

**Always produce three views per revision:** wide-flex ~1440 (Extra-large),
desktop ~1024–1100 (Expanded/legacy side-nav), mobile 375 (Compact).

---

## 2. The load-bearing rule: **real desktop starts at 1200**

The type-scale "Medium+" bump, the larger image treatments (e.g. 4:3 photo
thumbs), and full-length inline labels all fire at **≥1200**, *not* ≥600.

**Why:** the product ships today inside a side-nav shell whose usable width is
only ~940–1040 even on a large monitor. Treating ≥600 as "desktop" made Medium/
Expanded viewports feel oversized and mismatched to that cramped side-nav
context. So everything below 1200 renders at Compact sizing; only the top-nav
target width (1200+) earns the larger scale. This was confirmed repeatedly
(v71, v74) after experiments that bumped at ≥600 (v72) were rejected.

Consequence for new pages: **design the ≥1200 and the ~1040 views as genuinely
different densities**, not just reflows of the same sizes.

---

## 3. Macro spacing bumps; micro spacing stays static

- **Macro** (section gaps, container padding, hero content gaps, grid gaps)
  *increases* at the breakpoint — e.g. section-internal gaps 16dp Compact →
  24dp Medium+; page margins 16dp Compact → 24dp Medium+.
- **Micro** (gap between an eyebrow and its title, label↔value, chip padding)
  stays **constant** across viewports. Tightly-bound elements shouldn't drift
  apart just because the screen grew.

Rule of thumb: if two things are *one idea* (overline + headline), their gap is
micro and static. If they're *separate blocks*, their gap is macro and bumps.

---

## 4. Two-tier shell (gutter + rail)

```
.shell        → padding only (the gutter outside the content)
  .shell__rail → max-width only (1280 Large / 1440 Extra-large), centered
```

Content width = the rail's max-width exactly — no "max-width minus padding"
mental math, matches Figma artboards 1:1. Every page uses this same wrapper so
the content column lines up surface-to-surface. Cost: one extra wrapper div.

**Content must work across the full 1040 → 1440 range** (Expanded side-nav on
the low end, top-nav target on the high end). Don't design only for 1440.

---

## 5. Nav model — today vs. target (drives page chrome)

- **Today (Expanded/side-nav era):** top bar is hamburger + brand logo only;
  primary actions (mail, search) live in the page's greeting/header row, not the
  bar. Compact gets the fixed **bottom nav** (5 items, `.label-3`).
- **Target (Large+/top-nav):** top nav will carry primary destinations.

New DCP pages should keep the same chrome so navigating *from home* feels
continuous: same top bar, same bottom nav on Compact, same greeting-row action
pattern. A page reached from home is a sibling surface, not a new world.

---

## 6. Image patterns (locked conventions)

- **Locked-aspect where the box has visible edges** (thumbs, program tiles):
  fixed integer dimensions or a fixed aspect (1:1, 16:9, 4:3). Real photos use
  `object-fit: cover`.
- **Adaptive by viewport** is allowed and common: e.g. pair thumb 80×80 (1:1)
  below 1200 → 160×120 (4:3 photo) at ≥1200. Compact = identifying marker;
  desktop = the image earns real estate.
- **Hero / paired image+content:** lock the image to a fixed aspect on desktop
  (3:2), size the content group to match image height — image-driven, not
  content-driven. ([[feedback_hero_shape_locked_aspect]])
- The documented Imagery scale is a **guideline for consistency, not a strict
  bible** ([[feedback_scale_is_a_guideline]]). Pragmatic > pixel-perfect.

---

## 7. Type family — Apple's 20pt optical rule

Anything **< 20pt = SF Pro Text**; **≥ 20pt = SF Pro Display**. A few classes
cross the line at ≥1200 (Title 1, Body 1, Paragraph 1) and flip Text→Display
there. Everything else is single-family. Don't hand-set families — use the
scale classes; they already encode this.

---

## 8. Locked visual-treatment decisions (carry forward verbatim)

1. **Palette:** warm beige page (`--bg`) + white surfaces + dark navy brand.
   Warm tones live ONLY on backgrounds; text/borders are near-neutral graphite
   ink, never brown. ([[feedback_neutral_vs_surface_warmth]])
2. **Type:** 25-class atomic scale. No inline font styles — one class per text
   element. Eyebrow runs one tier below Caption (11/14 → 12/16).
3. **Shape:** radius tokens `--r-xs…--r-xl` (2/4/8/12/16) + `--r-full`. Cards =
   `--r-xl` (16). Chips = `--r-m` (8).
4. **Buttons:** M3 size scale (XS/S/M used), full state machine, keyboard focus
   ring. Text buttons = invisible chrome + pill state layer.
5. **Readability over density:** for landing/browse surfaces, default to calm +
   scannable — cut items per section before tightening spacing.
   ([[feedback_readability_over_density]])
6. **Reference ≠ driver:** other teams' "AI slop" is a counter-example only,
   never an anchor. ([[feedback_reference_not_driver]])

---

## 9. How to show the work (process conventions)

- Save every iteration as `*-v{N}-{slug}.html`; never overwrite. Keep an
  `INDEX.md` log with per-version rationale + rejected alternatives.
  ([[feedback_iteration_versioning]], [[feedback_decision_log_defensibility]])
- Run every design decision through Nielsen heuristics + UX laws and **state
  which context files you loaded** at the top of the response.
  ([[feedback_ux_heuristics_filter]])
- Show a 60/30/10-style color-weighting breakdown on each iteration.
  ([[feedback_color_weighting_visualization]])
- Output folders: `{monthabbr}{day}-{slug}/`, no year.
  ([[feedback_outputs_folder_naming]])
