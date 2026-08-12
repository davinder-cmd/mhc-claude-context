# Bundle context handoff — starter doc for a fresh conversation

Paste this into a new Claude conversation to pick up where the May 28 bundles ended. It captures: what was built, which reference files were used, the architectural rules, the process, and the gotchas discovered.

---

## What's already shipped

Two block bundles, both committed to `main`:

- **`outputs/may28-blocks-pair-with-employer/`** — V1 scenario (interest + employer, two columns on desktop)
- **`outputs/may28-blocks-pair-no-employer/`** — V2 scenario (single full-width interest section with two cards on desktop)

Each bundle contains:

| File | Notes |
|------|-------|
| `mhc-home.css` | **Identical between bundles** — same stylesheet supports both scenarios |
| `block-1-greeting-hero.html` … `block-7-rewards.html` | 5 unchanged from `may26-v81-mhc-blocks/`, **1 changed = `block-2-pair.html`** |
| `host-page-example.html` | Runnable smoke test — substituted tokens, opens directly in a browser |
| `INDEX.md` | Per-bundle notes |
| `action-button-audit.md` | Carried over from v81 bundle — no new buttons in v82 |
| `HANDOFF.md` | Operational handoff for Jill / ops — CKEditor + CodeMirror split |

Both verified at desktop and mobile widths via a local HTTP server. No console errors.

There's also a static (no-tokens) variant: **`outputs/may28-blocks-pair-with-employer-static/`** — same bundle architecture but with literal text in place of every Mustache token. Built for layout-only testing in CKEditor before formulas get wired in.

---

## Reference files used

### Loaded every session per CLAUDE.md

- `CLAUDE.md` — project-root operating instructions
- `about-me.md` — Davinder's role
- `working-preferences.md` — non-negotiable communication rules
- `strategy/Product Service Information.md` — product context
- `strategy/Ideal Customer Profile.md` — customer context
- `design/IA/_index.md` — information architecture index

### Loaded for this specific task

- **`reference/innovations/CLAUDE-MHC-blocks (1) (2).md`** — **THE primary architectural reference.** Defines the bundle / block / action-button / CKEditor-safety rules.
- `reference/innovations/HANDOFF-ckeditor-codemirror.md` — operational handoff doc authored during this session, summarizing what goes in CKEditor vs CodeMirror vs the host page
- `outputs/may05-home-redesign-review/00-requirements-from-pd-innov.md` — canonical John offsite + Darcy brief requirements
- `projects/feature-rewards/_brief.md` — rewards feature context (relevant for `block-7-rewards.html`)

### Source files the bundles were built from

- `outputs/may23-figma-recreation/home-figma-recreation-v81.html` — the monolithic v81 prototype (untouched)
- `outputs/may26-pair-row-redesign/home-figma-recreation-v82a-with-employer.html` — v82 monolithic with borderless pair-row treatment (V1)
- `outputs/may26-pair-row-redesign/home-figma-recreation-v82b-no-employer.html` — v82 monolithic, no-employer scenario (V2)
- **`outputs/may26-v81-mhc-blocks/`** — the first v81-to-blocks conversion this session built on. The May 28 bundles are forks of this with v82's pair-row CSS + markup spliced in.

---

## Architecture (summary of the MHC blocks rules)

Full doc: `reference/innovations/CLAUDE-MHC-blocks (1) (2).md`. The non-negotiables:

1. **One block per file.** Top-level wrapper is `<div class="mhc-home">…</div>`. A block may emit multiple sibling `mhc-home` wrappers if it owns more than one independent surface.
2. **No `<html>`, `<head>`, `<body>`, `<style>`, `<script>` inside a block.** Styles live in shared CSS (`mhc-home.css`), which is loaded by the host page, not by the block.
3. **No JavaScript ever.** No `<script>`, no `on*=` handlers, no `javascript:` URLs, no `data-*` JS hooks, no CSS-only `:target`/`:checked` interactivity tricks.
4. **No `<form>`, `<input>`, `<select>`, `<textarea>`, `<button type="submit">`.** Any user input or mutation = a separate User Input block with an MHC action attached by the host.
5. **No `<button>` for mutating actions.** Mutating actions = host-injected via MHC action mechanism. Navigations = `<a href>`.
6. **Mustache templating only:** `{{token.path}}`, `{{#flag}}…{{/flag}}`, `{{^flag}}…{{/flag}}`. No loops, no partials, no helpers, no expressions.
7. **CKEditor compatibility:**
   - Stretched-link card pattern (`<a class="*-link">` as last child + visually-hidden span). Never wrap a card in `<a>`.
   - No block content inside `<a>` / `<button>` / `<p>`.
   - Canonical HTML (closed tags, quoted attrs).
   - No inline `style="..."` except dynamic `background-image: url(…)` and CSS custom properties for runtime values (e.g. `style="--p:65%"` on progress fills).
8. **Self-suppression.** Every block wraps in a top-level conditional and emits zero markup if it has nothing to show.
9. **Accessibility.** `aria-labelledby="mhc-*"` on every section root; matching `id` on the heading; visually-hidden spans on stretched anchors; decorative SVGs `aria-hidden="true"`.
10. **Token naming:** `user.*` for user data, `formula.*` for everything else. `_href` suffix for links, `has*`/`is*`/`state_*` for booleans, `copy_*` for user-visible strings. Indexed items use `cardN_` / `inviteN_` / etc. (1-based, no loops).

---

## CKEditor + CodeMirror split

- **CKEditor** edits each `block-*.html` file
- **CodeMirror** edits `mhc-home.css`
- **Host page** loads both at render time + handles top bar / bottom nav chrome + injects action buttons between blocks

Full operational guide: `reference/innovations/HANDOFF-ckeditor-codemirror.md` (and a copy at `HANDOFF.md` in each bundle).

---

## The v82 pair-row redesign — what changed

The May 28 bundles' only delta vs the earlier `may26-v81-mhc-blocks/` bundle is **the pair row** (block 2). All other blocks were carried over unchanged.

### CSS change (in `mhc-home.css`, identical in both bundles)

Old (v81):
```css
.pair-card { background: surface; border: 1px solid hairline; border-radius: r-xl; padding: s-04; … }
.pair-card__title, .pair-card__row, .pair-card__footer { … }
```

New (v82):
```css
/* Section is structural, NOT visual. Borderless on desktop. */
.pair-section { display: flex; flex-direction: column; gap: s-03; min-width: 0; }
.pair-section__header { display: flex; justify-content: space-between; … }
.pair-section__footer { display: flex; }
.pair-section__cards { display: grid; … }      /* used by V2 only */

/* The actual visual card */
.rec-card { background: surface; border: 1px solid hairline; border-radius: r-xl; padding: s-04; display: flex; … }
.rec-card__thumb, .rec-card__body, .rec-card__chev { … }

/* Edit pill */
.pill-edit { … }

/* Mobile reverts to bordered-section pattern */
@media (max-width: 599px) {
  .pair-section { background: surface; border: 1px solid hairline; … }
  .rec-card { border: 0; padding: 0; background: transparent; }
}

/* Layout modifier — added to fix a 2-column-on-V2 bug */
.pair { display: grid; gap: s-05; grid-template-columns: 1fr; }
@media (min-width: 600px) {
  .pair.pair--cols-2 { grid-template-columns: 1fr 1fr; }
}
```

### Markup change (the only file that differs between the two bundles)

**V1 (`may28-blocks-pair-with-employer/block-2-pair.html`)**: TWO `.pair-section` divs (interest + employer), `.pair` carries the `.pair--cols-2` modifier class.

**V2 (`may28-blocks-pair-no-employer/block-2-pair.html`)**: ONE `.pair-section` div with `.pair-section__cards` grid containing TWO `.rec-card` instances. `.pair` has no modifier class — single full-width column.

### Mobile behavior

Both variants collapse identically on mobile: bordered section frame, cards lose their borders and stack vertically. The media query in `mhc-home.css` handles it — no markup change required.

---

## Conversion process (what was done, step by step)

1. **Clone the prior bundle.** `cp -p outputs/may26-v81-mhc-blocks/* outputs/may28-blocks-pair-with-employer/` (and same for the no-employer folder).

2. **Update `mhc-home.css`** in both folders with the v82 pair CSS (identical edit in both files).

3. **Rewrite `block-2-pair.html`** per scenario:
   - With-employer: two `.pair-section` divs, both gated by `{{#formula.hasInterestPair}}` / `{{#formula.hasEmployerPair}}`. Edit pill on the interest column header only.
   - No-employer: one `.pair-section` with a `.pair-section__cards` grid. Second card gated by `{{#formula.hasInterest2}}`.

4. **Update `host-page-example.html`** in each folder with the substituted-token version of the new pair markup. Other blocks unchanged.

5. **Update `INDEX.md`** in each folder — new scenario name, what changed from the v81 bundle, how to run, sibling-bundle pointer.

6. **Keep `action-button-audit.md` unchanged** — v82 added no new buttons.

7. **Add `HANDOFF.md` to each bundle** (and the canonical at `reference/innovations/HANDOFF-ckeditor-codemirror.md`) — CKEditor + CodeMirror operational guide.

8. **Verify in browser.** Local HTTP server (`python3 -m http.server`), open each `host-page-example.html`, check desktop and mobile widths, confirm zero console errors.

9. **Commit + push to `main`.**

---

## Gotchas / decisions captured during the build

1. **Inconsistency with the rest of the page.** The pair row is now borderless-section / bordered-card on desktop, but every other section (This Week, Keep going, Your rewards) is still bordered-section / borderless-card. Documented as a deliberate design choice; not propagated to other sections yet.

2. **The `.pair--cols-2` modifier class.** Initially `.pair` defaulted to `1fr 1fr` at >=600px. That broke V2 (single section ended up half-width because grid was still 2-column). Fixed by making `.pair` default to single column and requiring `.pair--cols-2` to opt into two columns. V1 uses the modifier; V2 doesn't.

3. **Edit pill placement shift.** V1: right edge of the interest column (left of the row). V2: right edge of the entire row. ~600 px sideways jump between scenarios. Acceptable but worth knowing.

4. **Inline `style="--p:62.5%"` on progress fills (in `block-5-programs.html`).** This is a CSS custom property assigned via inline style attribute. Some CKEditor sanitizers strip custom-property syntax. Test specifically: paste `block-5-programs.html` into CKEditor, save, copy out, check `--p` is preserved.

5. **Material Symbols font dependency.** Currently `host-page-example.html` references Google Fonts. For production / restricted environments, the font must be self-hosted (see `reference/innovations/HANDOFF-ckeditor-codemirror.md` for the `@font-face` recipe).

6. **The two-bundle vs one-bundle question.** In production, these could merge into a single block-2-pair.html with `{{#formula.hasEmployerPair}}` / `{{^formula.hasEmployerPair}}` branches inside. Kept separate here to make each scenario's markup unambiguous for review. Decision deferred to the platform team.

7. **Mobile two-card collapse.** V2 mobile shows BOTH cards stacked inside the bordered section (the natural CSS collapse of the desktop `.pair-section__cards` grid). Alternative: show only one card on mobile + "See N more" link, matching V1's per-section pattern. Currently set to show both — change in `mhc-home.css` if a different mobile behavior is preferred.

---

## What John has authorized (constraints on adding new requirements)

From John's offsite memo (`outputs/may05-home-redesign-review/00-requirements-from-pd-innov.md`):

1. Logo top/center
2. Eliminate / dismiss side nav
3. One hero image (or hero + 3 things)
4. **Eliminate spinners** (skeleton screens) — STILL NOT DESIGNED
5. *(deferred — tracker sync, not home design)*
6. **Simplified personalization with filters** + shut down the current personalization engine

Items not on John's list have come up since (dismiss/snooze, focus vs interest rename, rewards-higher-on-page). Treat anything new as a deliberate addition, not a fold-in. Push back on scope creep that's not in his memo.

---

## What's next (pick up here in the new conversation)

The user is bringing **admin-friendly requirements** to add on top of this. Likely candidates based on prior conversation:

- Modal designs (focus picker, "see more" content lists, dismiss/snooze)
- Skeleton/loading state for the home page (John's #4)
- Rewards reorder (move higher on the page) + single-primary reward treatment
- Singular interest / focus terminology shift across the prototype
- Hero variants (employer-driven, progress-bar in-progress program, welcome zero-state)

When the user states the new requirements, the path is: (1) check against John's authorized list, (2) check against the existing bundle architecture, (3) plan the minimum delta from the current bundles, (4) decide if a new bundle / sibling bundle / modifier on the existing bundles is the right delivery shape.

---

## File quick-reference

```
outputs/may26-v81-mhc-blocks/                    → previous (v81) blocks bundle
outputs/may26-pair-row-redesign/                 → v82 monolithic prototypes
outputs/may28-blocks-pair-with-employer/         → V1 bundle (this delivery)
outputs/may28-blocks-pair-no-employer/           → V2 bundle (this delivery)
outputs/may28-blocks-pair-with-employer-static/  → static no-tokens variant
reference/innovations/CLAUDE-MHC-blocks (1) (2).md   → THE architectural reference
reference/innovations/HANDOFF-ckeditor-codemirror.md → operational handoff
outputs/may05-home-redesign-review/00-requirements-from-pd-innov.md → John's offsite + Darcy brief
```
