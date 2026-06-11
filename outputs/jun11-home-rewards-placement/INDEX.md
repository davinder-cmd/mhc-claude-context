# Home fragment · jun 11 · rewards promoted

**Date:** 2026-06-11
**Branch:** `jun11-home-rewards-placement`
**Reference:** Figma *Home Page redesign v2* — Anatomy section, node `6519:54541`
**Conforms to:** `reference/html-fragment-authoring-guide.md`
**Built from:** byte-for-byte copies of `outputs/jun08-home-fragments/` with surgical edits only — everything outside the rewards / pair-section / keep-going / challenge changes is unchanged from jun 08.

---

## Files

| File | Purpose |
|------|---------|
| **`fragment-home-with-employer.html`** | V1 scenario — "Based on your interest" + "From your employer" as two stacked pair sections |
| **`fragment-home-no-employer.html`** | V2 scenario — single "Based on your interests" with two cards inline |
| **`test-harness.html`** | Shadow-root injector with a dropdown to switch between V1 / V2 |
| **`INDEX.md`** | This file |

Drop either fragment file straight into the admin — they're self-contained (inline `<style>`, Font Awesome `@font-face` pinned to `/6.5.1/`, no external CSS or JS dependencies).

---

## What changed since jun 08

The fragments are **identical to jun 08** outside the changes listed here.

### 1. Rewards module — moved + redesigned

| | jun 08 | jun 11 |
|---|---|---|
| Position | Bottom of the page (after Challenge) | **Between Personalization and This Week** |
| Module | Three small cards (Gift card / Store credit / Raffle) | **Single banner** — Points & Levels balance variant |
| Banner anatomy | n/a | 56-px medal disc · "Silver tier" chip · "1,250 points balance · 750 to Gold" · 62%-filled progress bar · "Redeem" outlined button |
| Section-head link | "Dashboard" | "Reward Dashboard" |
| Desktop padding / vertical gap | n/a | `var(--s-06)` (32) padding · `var(--s-04)` (16) vertical body gap |
| Mobile padding | n/a | `20px` · icon disc hidden to save horizontal width |

### 2. Pair-section chevron

The `&#xf054;` chevron on each rec-card now shows on desktop only. Hidden on mobile via `.rec-card__chev { display: none }` in the mobile media query — cards remain tappable through the existing stretched-link anchor.

### 3. Pair-section footer links ("See N more")

Replaced the `.btn-text` padded-button hover treatment with standard-link behavior — `padding: 0`, `height: auto`, hover swaps the blue background for `text-decoration: underline`. Now the link text aligns flush-left with the section title above it. Section-head links (Reward Dashboard / All data / All programs) keep their existing text-button styling.

### 4. Keep going — mobile single-card variant

Mobile now collapses the 3-card carousel into a single horizontal card. Implementation lives in `@media (max-width: 599px)` placed AFTER the default `.program` rules (cascade order was the original bug).

| | Desktop | Mobile |
|---|---|---|
| Layout | 3-column grid, cover-on-top per card | **Single card · `flex-direction: row-reverse`** (body left, square media right) |
| Cards visible | 3 | **1** (`.program:nth-child(n+2) { display: none }`) |
| Image | 16:9 cover on top | **1:1 square**, 35% width, fills card height |
| Body alignment | Top of card under image | **Vertically centered** (`justify-content: center`) |
| Tag | Dot-prefixed uppercase eyebrow | **Pill chip** — `#DDE9EE` light blue bg, navy text |
| Progress bar | Visible | **Hidden** |

First card's tag text changed from "Sleep" to "Digital Care" so the pill reads "DIGITAL CARE" (this also affects desktop — call out if you want different text per breakpoint).

### 5. Challenge banner

- Trophy icon disc now shows on mobile (removed `.challenge .banner-icon` from the mobile-hide rule that previously hid it).
- Icon disc bumped to **56 × 56 px** (matches the rewards banner disc).
- Meta shortened from `"Day 22 of 30 · Currently 4th of 8 teammates"` → `"Day 22 of 30 · Currently 4th"` to fit comfortably on mobile.

---

## How to view locally

The localhost server is running on port **8766** (replaced the previous server on the same port):

```
http://localhost:8766/test-harness.html
```

Dropdown in the harness toolbar flips between V1 (with-employer) and V2 (no-employer). Resize the browser past the 599-px breakpoint to verify the mobile layouts.

---

## Compliance with the authoring guide

Same shape as jun 08 — no surgical edit introduced any spec violation:

- ✅ No `<html>`, `<head>`, or `<body>` tags
- ✅ No `<script>` tags (harness only)
- ✅ No `<svg>` elements
- ✅ No ligature-based icon fonts
- ✅ No `<i class="fa fa-…">` syntax — codepoint references throughout
- ✅ Tokens on `:host`, not `:root`
- ✅ Every `font-family` ends in OS fallbacks
- ✅ Decorative icons `aria-hidden="true"`; standalone icon buttons carry `aria-label`
- ✅ Font Awesome URL pinned to `/6.5.1/`
- ✅ Every interactive element has an accessible name
- ✅ Renders correctly in the shadow-root harness

---

## Open items

1. **Keep-going chip text**: "DIGITAL CARE" now shows on **both** desktop and mobile. If desktop should keep saying "SLEEP" while mobile shows "DIGITAL CARE", a small markup or CSS swap is needed.
2. **"All programs" vs "See more"** section-head link on Keep going: still says "All programs" in markup; Figma reference shows "See more" on mobile. Easy swap if wanted.
3. **Hero / pair-card / program imagery**: still CSS gradient placeholders. When production photography lands, swap to `<img>` with explicit `width` / `height` / `alt`.
