# LifeForce — grid-aligned responsive set (Aug 09 2026)

A **duplicate** of `aug08-lifeforce-responsive/` with the Material-3 **grid-aligned width**
treatment applied across every screen, plus a **two-column desktop layout** (main content +
persistent support rail). The original `aug08-lifeforce-responsive/` is untouched.

## What changed vs aug08
- **Width → Material 3 grid.** Single-column pages cap at **820** (Option B — calm, wide, not
  the full 12-col body-max). Two-column pages use `.wrap.wide` → **1200** (Large) / **1440**
  (Extra-large), centered. Margins 16 (Compact) → 24 (Medium+).
- **Two-column layout on every screen.** Header (back · title · tabs) spans full width on top;
  page content sits in `.col.main`; a **standardized support rail** (`.col.rail`) — Peak Health
  Support + Your LifeForce records + About LifeForce — sits on the right. The rail is **sticky**
  on desktop and **stacks below** the main content on mobile (`.layout` collapses to one column
  below 1000px).
- **My Progress** pages: Recommended programs + Handouts render **two-up** (`.card-grid`) in the
  wide main column.
- Type scale unchanged from aug08 (MHC Type System v3, Medium+ bump at the canonical **≥600**).

## Kept intact
- **`index.html`** — the list linking out to every screen (single column).
- **`docnav.js`** — the doc-only flip-through nav (‹ Prev / Next ›, 1…18, arrow keys).
- All semantic colors, components, and content.

## Serve locally
`python3 -m http.server 8750` in this folder → `http://127.0.0.1:8750/index.html`
(file:// is blocked by the headless browser; must be served over HTTP.)

## Screens (18 + gallery)
Same set as aug08 — open **`index.html`**. All now two-column at desktop, single-column on mobile.
`_c-progress.html` (the earlier two-column My Progress demo) is carried over but not in the
flip-through order.

## Status
This is an exploratory pass — expect adjustments (rail content per page, single- vs two-column
per screen type, card-grid counts). Verified: 03 renders correct two-column desktop + mobile
stack; batches A–E structurally confirmed (balanced tags, main+rail, no CSS edits).
