# Application Frame

**Confluence:** https://mobilehealthc.atlassian.net/wiki/spaces/MDS/pages/1344045104
**Reference:** Material 3 — Top App Bar, Navigation Bar (m3.material.io/components)
**Status:** 🔶 Updating — rewritten around the top-nav redesign target 2026-05-22. Current side-nav production values preserved in [Legacy / Migration](#legacy--migration).

---

## Purpose

The structural skeleton of the app. Defines the persistent regions every screen is built within. Adapts by Material 3 window size class. Consistent across all employer implementations unless SDK/partner rules override.

---

## Regions by Window Size Class

The frame uses **two regions at Medium and above** (Top Nav + Body) and **three regions at Compact** (App Bar + Bottom Nav + Body).

| Region | Compact (0–599dp) | Medium and above (600dp+) |
|--------|-------------------|---------------------------|
| **Top Nav** | — | 64dp · brand + nav items + actions |
| **App Bar** (mobile context) | 56dp · brand logo + actions (notifications, profile) | — |
| **Bottom Nav** | 80dp · primary nav (5 items, persistent) | — |
| **Body** | All content | All content |

---

## Top Nav (Medium and above)

The primary navigation at Medium and above. Combines branding, navigation, and top-level actions in a single horizontal bar.

| Property | Value |
|----------|-------|
| Height | **64dp** (Material 3 Small Top App Bar) |
| Position | Sticky at top of viewport |
| Background | Surface color |
| Separation | 1dp bottom border *or* Depth 1 shadow (not both) |
| Contents | Brand logo (left) · Primary nav items (center or right) · Top-level actions (right: notifications, profile) |
| Item count | 3–5 nav items (see [navigation-responsive.md](../patterns/navigation-responsive.md)) |

---

## Bottom Nav (Compact only)

Primary navigation on Compact. Material 3 Navigation Bar.

| Property | Value |
|----------|-------|
| Height | **80dp** (Material 3 Navigation Bar) |
| Items | 3–5 destinations · always shows icon + label |
| Visibility | Persistent — hidden only on modal / dialog surfaces |
| Background | Surface color |
| Position | Fixed at bottom of viewport |

---

## App Bar (Compact only)

A lightweight top bar on Compact. Primary nav lives at the bottom, so this bar handles branding and top-level actions only — not navigation.

| Property | Value |
|----------|-------|
| Height | **56dp** (Material 3 Top App Bar — Compact density) |
| Contents | Brand logo (left) · Notifications + profile (right) |
| Position | Sticky at top |
| Note | No nav items here — those live in the Bottom Nav |

---

## Body Region

Body widths and margins follow [responsive-grid.md](responsive-grid.md).

| Window size class | Body max width | Margin |
|-------------------|----------------|--------|
| Compact (0–599dp) | — (full width minus margins) | 16dp |
| Medium (600–839dp) | — | 24dp |
| Expanded (840–1199dp) | — | 24dp |
| Large (1200–1599dp) | **1280dp** | 24dp + auto-centering |
| Extra-large (1600dp+) | **1440dp** | 24dp + auto-centering |

### Reading Column Widths

For text-dominant content (articles, forms, focused reading), constrain the inner column independently of the body max — wide bodies are for grids and dashboards, not running text.

| Inner column | Use |
|--------------|-----|
| 720dp | Body text columns (≈70 characters per line) |
| 640dp | Forms, single-column layouts |
| 480dp | Narrow focused content — auth screens, short forms |

---

## Rules

- Never change navigation structure without executive sign-off (see [navigation-responsive.md](../patterns/navigation-responsive.md))
- Modal pages hide Bottom Nav (Compact) and may show a back-action App Bar
- SDK / white-label implementations may override the frame — check partner requirements before designing
- Brand and partner logos appear in the App Bar / Top Nav, never in the Body
- Body content centers above 1280dp (Large body max) and 1440dp (Extra-large body max) — never let body reach the viewport edge at desktop widths

---

## Escalate if

- A navigation structure change is needed
- A new frame region is proposed
- A partner SDK requires a frame override outside this system

---

## Legacy / Migration

The current production app uses a **side-nav layout**, not the top-nav target described above. These values document the current state for engineering reference during the transition. Do not design to these — they describe what exists today, not what we're building toward.

### Current (Side-Nav) Navigation by Platform

| Platform | Navigation type | Notes |
|----------|----------------|-------|
| Mobile iOS / Android | Bottom Navigation bar | 3–5 items, always visible (unchanged in target) |
| Desktop / Tablet ≥600dp | **Navigation Panel** (left side nav) | 256dp expanded, 72dp collapsed |
| Mobile browser <600dp | Modal navigation drawer | Opens on trigger, overlays content |

### Current Body Region

| Context | Max content width |
|---------|-------------------|
| Desktop default | **940dp** |
| Common inner column widths | 720dp, 640dp, 480dp (unchanged in target) |
| SDK / white-label | Partner requirements may override |

### Current Margins

- Base (mobile): 16dp
- ≥600dp breakpoint: 32dp
- ≥840dp breakpoint: **200dp max margin each side** (the side nav consumes most of this)

### Migration Deltas

| Item | Current (side-nav) | Target (top-nav) | Notes |
|------|--------------------|--------------------|-------|
| Primary nav at Medium+ | Side nav (256dp expanded) | Top Nav (64dp tall) | Frees full body width for content |
| Body max at Large | 940dp | **1280dp** | Per responsive-grid Large body max |
| Body max at Extra-large | 940dp | **1440dp** | Per responsive-grid Extra-large body max |
| ≥840dp margin | 200dp (side-nav consumes) | 24dp | Material standard |
| Mobile web nav | Modal drawer | Bottom Nav (consistent with native mobile) | Pending confirmation in navigation-responsive.md |

---

## Related

- [responsive-grid.md](responsive-grid.md) — window size classes, body max widths, margins
- [image-sizing.md](image-sizing.md) — how images behave inside the body region
- [navigation-responsive.md](../patterns/navigation-responsive.md) — IA destinations and nav patterns

---

## Revision Log

| Date | Change |
|------|--------|
| 2026-05-22 | Rewrote around the top-nav target. Two regions at Medium+ (Top Nav 64dp + Body) and three regions at Compact (App Bar 56dp + Bottom Nav 80dp + Body). Body max widths per responsive-grid.md (1280 / 1440). Current side-nav values moved to a Legacy / Migration section for engineering reference during transition. Removed the 200dp ≥840dp margin from active rules (preserved in Legacy). |
