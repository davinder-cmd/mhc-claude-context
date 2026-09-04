# HTML/CSS Page Build System

**Source files:** `~/Downloads/original file.html` (baseline) + `~/Downloads/mst-breakpoint-fix/` (v1, breakpoint fix) + `~/Downloads/mst-home-v2/` (v2, redesign — current)
**Figma (v2 redesign):** `HnUshNiMH7xIzws6CUXX02` ("Home Page redesign v2"), node `6519:54541`
**Status:** 🔶 Active — Home page v2 built on top of the v1 breakpoint fix; other pages not yet started
**Last updated:** 2026-08-28

---

## Purpose

MHC pages get hand-built as static HTML/CSS recreations — using this system's tokens
(`typography.md`, `spacing.md`, `object-styles.md`, `responsive-grid.md`) — so they can
be pasted into the MST admin's CodeMirror content editor without needing an engineering
build. Home is the first page built this way. This doc is the index of what went into
that build, what broke when it hit production, and the checklist to keep every
subsequent page consistent instead of re-solving the same problems from scratch.

Read this **before** starting a new page. Update it **after** finishing one.

---

## Origin — two sessions, one line

This build has two source sessions. Neither exists as a standalone transcript —
both are absorbed directly into the design system as revision history, which is
the actual record of what was decided and why:

1. **The token session (2026-05-22 → 05-24).** Where the type scale got typed in,
   argued over, and walked back live — visible as same-day, iterative entries in
   [typography.md](typography.md)'s Revision Log (Eyebrow re-spec'd, Caption/Small
   bump partially reverted, Label tier added, line-heights snapped to the 4dp grid)
   and [responsive-grid.md](responsive-grid.md)'s adoption of Material 3 window
   size classes in place of the old custom 5-tier system. This is where
   `--f-display`/`--f-text`, the 25-class type scale, and the Compact/Medium/Large
   responsive tiers this build uses all come from.
2. **The build + production-fix session (2026-08).** Taking those tokens and
   hand-building Home as static HTML/CSS, then discovering — only once it hit MST's
   actual admin shell — that the ≥1200 breakpoint those tokens specify doesn't
   survive being embedded next to a fixed-width side nav. That's everything below.

Read in order, they're one continuous line: decide the tokens → build the page →
find out what breaks when the token-level assumptions (Large tier starts at 1200,
full window width available) meet a real host page that doesn't give you that.
The next page build should start from token session's outputs directly
(`typography.md`, `responsive-grid.md`) and treat "What broke in production" below
as known-in-advance, not something to rediscover.

---

## Inputs — what this build draws from

| Source | What it supplies |
|---|---|
| [typography.md](typography.md) | The 25-class type scale, Compact/Medium/Large responsive tiers, font stack tokens |
| [spacing.md](spacing.md) | The `--s-01` … `--s-09` spacing scale |
| [object-styles.md](object-styles.md) | Shape/radius tokens (`--r-xs` … `--r-full`) |
| [responsive-grid.md](responsive-grid.md) | Window size classes (Compact/Medium/Expanded/Large/Extra-large), body max-widths, **the side-nav content-width caveat — see Revision Log there for the corrected real numbers this build produced** |
| [patterns/navigation-responsive.md](../patterns/navigation-responsive.md) | Side nav vs. top nav, the planned end-of-year top-nav migration this whole interim fix is bridging |
| Live MST admin (inspected via DevTools) | Ground truth for what the CSS actually has to survive once embedded — see "What broke in production" below |

---

## Build log (from the Home CSS's own version comments)

The stylesheet accumulates its history inline (`/* EXPERIMENT (vNN): ... */`). Distilled here so the next page doesn't have to re-read every comment to know what's already been decided:

| Version | Decision |
|---|---|
| v58 | Program card media: `aspect-ratio: 16/9`, fluid width, no fixed height |
| v63–v70 | Split hero pattern (image + content columns), pair card thumb goes 4:3 at Large, pair card footer link shows full text at Large |
| v71 | Type-scale "Medium+" values moved to fire at ≥1200 instead of ≥600 — this is the threshold that later caused the production bug (see below) |
| v77 | Rail max-widths set to 1280 (Large) / 1440 (Extra-large) — up from 1232/1392 |
| v80 | Hero internal spacing made uniform via `display: contents` on title/copy groups |
| v81 | MHC system fully applied — eyebrow bumps 11/14 → 12/16 at Large (single step, not full scale jump, since uppercase reads chunkier) |
| v82 | Pair section (interest/employer cards) goes borderless on desktop — only the card itself carries a border; mobile keeps the bordered-section pattern |
| **2026-08 (breakpoint-fix pass)** | Top bar removed (MST renders its own); icon spans clipped to a fixed 1em box (font-loading fallback guard); **the ≥1200 breakpoint disabled for production** — see below |
| **2026-08 (v2 redesign pass)** | Recommendations merged (interest + employer, one header, Edit pill inline not right-anchored); recommendation cards restyled to fixed 200×150 image-left rows with a light-blue placeholder gradient; **Rewards moved up and consolidated into one card** (was 4 tiles near the bottom, after Challenge — now one card right after Recommendations, before "This week"); "Continue your programs" renamed **"Keep going"**, cards drop the per-card progress bar + dollar amount, gain a category chip and cream placeholder. The progress bar didn't disappear — it moved to the new Rewards card as tier/points progress. Full detail: `~/Downloads/mst-home-v2/README.md`. |

---

## What broke in production (read this before embedding any page)

The recreation renders correctly as a standalone file. Pasted into MST's CodeMirror, three separate things went wrong — each is a **general risk for every future page**, not a one-off:

### 1. `@media` reads the whole browser window, not the visible content area
MST's app shell (`mat-sidenav-container`) hard-caps total width (sidenav + content) at **1210px**, confirmed via DevTools computed style. The sidenav itself measures **265px**. That leaves the content column at **~945px, always** — it can never grow past that no matter how wide the user's actual monitor is. But `@media (min-width: ...)` doesn't know that; it reads the full browser window, which on any normal desktop monitor is comfortably past 1200px. Result: the "Large" tier fired for nearly all real traffic, even though the visible column never got wide enough to justify it.

**Two fixes exist, at different maturity levels:**
- **Container queries** (`future-container-query-candidate.html`) — the correct long-term fix. Make the content wrapper a size container (`container-type: inline-size`) and swap `@media` for `@container` on every breakpoint that's supposed to describe *this component's* width, not the window's. Not yet validated in production.
- **Interim: disable the tier** (`PRODUCTION-interim-fix.html`, live now) — bump the unreachable breakpoints from `1200px` to `99999px` so the Large tier never fires, full stop, until the sidenav moves to a top nav (planned EOY — see `patterns/navigation-responsive.md`) and the content column can actually reach 1200px+. Documented in-file with a banner comment and a one-line revert instruction.

**Rule for every future page:** if it's going to be embedded next to the sidenav, assume the same ~945px ceiling and either use container queries from the start, or ship with the Large tier deliberately disabled and documented the same way.

### 2. The Material Symbols icon font doesn't reliably load in admin
Root cause not fully confirmed (likely stripped by admin's content sanitizer, or blocked by CSP — both survived <style> tags fine, so it's specific to the external font `<link>`). When it fails, the icon ligature text (e.g. `chevron_right`) renders as literal words and can overflow surrounding layout.

**Fix applied, keep doing this on every page:** give `.material-symbols-outlined` (or whatever the icon class is) `width: 1em; height: 1em; overflow: hidden; white-space: nowrap;`. When the font loads, glyphs fill a 1em box exactly, so nothing visually changes. When it doesn't, the fallback text clips to that box instead of breaking layout. This doesn't fix the icons — it just stops their failure from cascading into everything around them.

**Longer-term, not yet done:** self-host the icon font (same pattern already used for Roboto in the admin shell) instead of depending on an external Google Fonts `<link>` surviving the CMS pipeline.

### 3. CSS comments cannot nest — don't wrap a block in `/* */` to disable it if the block contains its own comments
Tried this first, it broke: the block's own inline comment (e.g. `/* 4:3 photo treatment */`) closes the wrapper early and re-exposes the rest as live CSS. **Bump the threshold number instead of commenting out** — same effect, no risk, trivially reversible.

### 4. `container-type: inline-size` makes the container a containing block for `position: fixed` descendants
If a page has a fixed bottom nav (mobile tab bar), keep it **outside** any element you turn into a size container — otherwise its `position: fixed` starts resolving against the container's box instead of the real viewport, and it stops behaving like a real fixed bar.

### 5. `!important` alone doesn't guarantee winning inside an unknown host page
`@layer` does, specifically for `!important` declarations — per spec, priority for `!important` is the *reverse* of normal priority: anything in a named layer beats anything unlayered. Wrapping the whole page's stylesheet in `@layer` is cheap insurance against whatever the host page's own CSS happens to contain, and doesn't cost anything if it turns out to be unnecessary.

### 6. Always verify which file is actually live before diagnosing further
The single biggest time-sink in this build was testing against a file that *wasn't* the one being edited. Before trusting any visual result in admin: open DevTools, search the live DOM (Cmd+F in the Elements panel) for a string that's unique to the file you *think* is loaded — a comment, a specific value — and confirm it's actually there. Don't diagnose CSS behavior from a screenshot until the content is confirmed.

### 7. The Google Fonts icon `<link>` ships its own `.material-symbols-outlined` rule — and it's unlayered
Wrapping this page's own stylesheet in `@layer mhc-widget` (see gotcha #5) has a side effect: the **external** Material Symbols stylesheet from `fonts.googleapis.com` defines its own `.material-symbols-outlined { display: inline-block; ... }` (the standard Google integration snippet). That stylesheet loads via a plain `<link>`, so it's **unlayered** — and per the Cascade Layers spec, an unlayered rule beats *any* layered rule for normal declarations, regardless of selector specificity. This showed up as a component-level bug: hiding an icon (`.rec-card__chev { display: none }`) inside the layer silently lost to Google's unlayered rule no matter how specific the selector was made (`.rec-card .rec-card__chev` didn't help — specificity is irrelevant once a layer boundary is crossed). Confirmed via direct CSSOM inspection (`document.styleSheets`, `getComputedStyle`), not just visual testing — a real headless-browser check was needed to catch this, since it looks identical to an ordinary cascade bug from the outside.

**Fix:** `!important` on any of our own rules that need to override something on an icon span. Importance is resolved before layer priority in the cascade sort order, so it's the one thing guaranteed to win regardless of which layer either side is in. **Rule of thumb for every future page:** any CSS meant to control the *visibility or layout* of a `.material-symbols-outlined` element (not just its size/color) needs `!important`, because it's competing with an external, unlayered stylesheet we don't control.

### 8. The type-scale "Medium" bump and the structural "Medium" breakpoint must be the SAME number
A prior page (v71, pre-dating the Figma v2 redesign) deliberately gated the type-scale bump block (`.heading-*`, `.title-*`, `.body-*`, `.caption`, `.eyebrow`, `.small`, `.paragraph-*`) behind `min-width: 1200px`, leaving the 600–1199px range rendering at Compact type sizes on purpose. The v2 redesign added real structural Medium behavior starting at 600px (recommendation merge, 3-col grids, etc.) without revisiting that older 1200px gate — so from 600–1199px, the page had Medium-tier layout with Small-tier type. Symptom as reported by a stakeholder looking at a real desktop width: "I see small form on large form pages." Confirmed via Figma that the bump table's *values* were already correct for the Medium tier — only the threshold number was stale. **Rule for every future page: there is one canonical "Medium starts here" number for a given design. Every breakpoint in the file — type scale included — must key off that same number, not off whatever an older or unrelated experiment happened to use.** If a design system doc or comment specifies a threshold, treat it as current only after checking it against the actual Figma tier boundaries being built — a comment can outlive the decision it described.

Lowering a stale global threshold like this reactivates dormant style rules everywhere at once — expect it to surface individual elements whose class was only ever correct at the tier that was actually rendering (Compact), the same way fixing gotcha #9 below surfaces individual mismatches. Re-verify computed styles across the *whole* page after changing a shared breakpoint number, not just the one component that prompted the change.

---

## Checklist for the next page

1. Start from the token files (`typography.md`, `spacing.md`, `object-styles.md`) — don't invent new values.
2. Validate at the three widths `responsive-grid.md` specifies: **1040** (legacy/sidenav), **1280** (target), **1440** (max target).
3. Decide up front: container queries, or a disabled-Large-tier interim file? Don't discover this after pasting into admin.
4. Clip every icon span to a fixed box regardless of whether the font issue is confirmed fixed yet. Any rule controlling an icon span's visibility/layout (not just size/color) needs `!important` — it's competing with Google's own unlayered stylesheet.
5. Wrap the stylesheet in `@layer` before it ever touches admin.
6. Before disabling any breakpoint for an interim fix, bump the number — never wrap in comments.
7. Keep anything `position: fixed` outside of any size-container wrapper.
8. After pasting into CodeMirror, confirm the live DOM actually contains what you expect before judging the visual result.
9. **Don't reuse "the class that was already there" for a redesigned element.** Re-check every text element against the actual Figma node for the breakpoint you're building, even ones that look like obviously-fine carryovers — v2's build did this and produced six real type-scale mismatches (title, chip, and meta-text classes one size too large) across four different sections. Fetch the Mobile-tier node specifically; a desktop node's sizes do not predict it.
10. Update this doc's Build Log and "What broke in production" section with anything new the page surfaces.

---

## Escalate if

- A page needs a breakpoint, token, or pattern outside what's documented here and in the linked foundation docs
- The sidenav → top-nav migration timeline changes (affects when the interim fix in item 1 above can be removed)
- A future page's embedding context turns out to have a *different* content-width ceiling than 945px (would mean MST has more than one shell configuration)

---

## Related

- [responsive-grid.md](responsive-grid.md) — window size classes, body max-widths, corrected content-width numbers
- [typography.md](typography.md) — type scale and responsive tiers
- [patterns/navigation-responsive.md](../patterns/navigation-responsive.md) — side nav vs. top nav, EOY migration
- `~/Downloads/mst-breakpoint-fix/README.md` — which working file is which

---

## Revision Log

| Date | Change |
|---|---|
| 2026-08-31 | Found and fixed a page-wide root cause: the type-scale "Medium" bump was gated at a stale 1200px (a pre-v2 "v71 experiment" decision) while every structural Medium split in the same file fires at 600px, so the 600-1199px range rendered Medium-tier layout with Small-tier type sitewide. Values in the bump table were already correct per Figma — only the threshold was wrong; corrected to 600px, applied to **both** `mst-home-v2/` (the v2 redesign) **and** `mst-breakpoint-fix/` (the plainer v1 files it was built on top of, which shared the identical bug) — 4 files total. Surfaced and fixed several individual class mismatches this reactivated (greeting, hero title, hero meta, insight body text; v2 additionally needed Keep going card title/chip) — see gotcha #8 and each folder's own README for the full before/after tables. Also fixed the "This week" tracker icon circle size (48/56, was flat 56) and a trend-arrow icon stuck at 24px despite its own CSS saying 16px (gotcha #7 again — needed `!important`) in all 4 files. Flagged, but did not fix, a separate structural gap: Figma's Medium-tier "This week" tracker is a different card component entirely, not a CSS reflow of the mobile markup. v1's own "Continue your programs" section (different structure from v2's "Keep going," not built from the same Figma nodes) was left unverified. |
| 2026-08-28 | v2 round 2 — fixed mobile-specific mistakes made from only checking the desktop Figma node: Recommendations merge is Medium+ only (mobile stays two separate bordered cards — real content difference, confirmed from the actual mobile nodes); Rewards badge/CTA-label differ by breakpoint (hidden badge + "Start →" on Compact vs. shown badge + "Redeem →" at Medium+ — not a copy bug, genuine per-breakpoint Figma content); "Keep going" mobile is a vertical stack, not a carousel (guessed carousel from a screenshot with what turned out to be Figma's own canvas scrollbar, not a real design signal — the actual node settled it). **Lesson: fetch the mobile-specific Figma node before building mobile behavior — a desktop node's structure does not reliably predict it.** Also hit two more instances of the layer/cascade-order and comment-nesting gotchas (#3, #7) while fixing the Keep going layout — documented in `mst-home-v2/README.md`'s Verification section rather than duplicated here. |
| 2026-08-28 | v2 redesign built on top of the v1 fix — recs merged, rewards moved up + consolidated to one card, "Continue your programs" → "Keep going" (progress bar moved to the Rewards card, not removed). Sourced from Figma via `get_design_context`, verified in a headless browser against screenshots before being considered done — one build attempt silently deleted several sections due to a string-match collision (the new "Your rewards" HTML contained the same text used to search for the old one to remove); caught by rendering the page, not by re-reading the code. |
| 2026-08-28 | Initial version — full breakpoint-fix build log, the three production gotchas (viewport-vs-content mismatch, icon font fallback, comment-nesting), and the per-page checklist |
