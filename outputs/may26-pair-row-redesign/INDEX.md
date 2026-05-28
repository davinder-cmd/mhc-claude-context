# v82 — Pair row redesign (borderless treatment)

**Source:** [`outputs/may23-figma-recreation/home-figma-recreation-v81.html`](../may23-figma-recreation/home-figma-recreation-v81.html) — preserved.

**Scope:** ONLY the second row (Based on your interests + From your employer). Everything else carries over from v81 unchanged.

## Files

- **`home-figma-recreation-v82a-with-employer.html`** — V1: interest + employer (two-column desktop)
- **`home-figma-recreation-v82b-no-employer.html`** — V2: no employer → one full-width "Based on your interests" header + two interest cards side-by-side

## What changed from v81

| Old (v81) | New (v82) |
|-----------|-----------|
| `.pair-card` wrapped header + content + footer in one bordered box | `.pair-section` is borderless; only the `.rec-card` inside carries a border |
| Title sat inside the card frame | Title floats above the card (`.pair-section__header`) |
| "See N more" + "Edit Interests" sat as `btn btn-text` inside the card footer | "See N more" floats below the card as a link (`.pair-section__footer`); "Edit" is a separate `.pill-edit` pinned to the right of the header row |
| `.pair-card` was both the structural container and the visual frame | Structural container (`.pair-section`) and visual frame (`.rec-card`) are decoupled |

## Mobile (< 600px) — unchanged from v81

A media query at `<600px` reverts each `.pair-section` to the v81 bordered-section pattern: the section regains the frame, the card inside loses its border. The "See N more" link sits inside the section. This preserves v81's cohesion on a narrow screen.

## V1 vs V2

| Aspect | V1 (with employer) | V2 (no employer) |
|--------|--------------------|--------------------|
| `.pair` columns on desktop | 2 (1fr 1fr) | 1 (full width) |
| Pair sections | 2 (one for interests, one for employer) | 1 (interests only) |
| Cards per section | 1 each | 2 (in a `.pair-section__cards` grid) |
| Edit pill | Right of "Based on your interests" header (within left column) | Right of "Based on your interests" header (spans full row) |
| "See N more" link | One per section ("…matched to your interests" / "…from Acme") | One total ("…matching your interests") |

## Verify

Open either file in a browser. Drag the window narrow to < 600 px to confirm the mobile-bordered-section treatment kicks in. Everything outside the pair row (top bar, hero, This week, Insight, Keep going, Your rewards) should look and behave exactly as in v81.
