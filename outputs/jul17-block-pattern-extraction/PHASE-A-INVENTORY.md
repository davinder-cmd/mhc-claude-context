# Phase A — Component Inventory & Audit

**Task:** Pattern Extraction & Standardization (reverse extraction of authored HTML/CSS → documented, reusable block set)
**Date:** 2026-07-17
**Status:** ⛔ CHECKPOINT — Phase A only. No component files generated. Awaiting review before Phase B.

---

## Context files loaded

- Brief: `Pattern Extraction & Standardization Brief` (this session)
- Block authoring rules: [reference/innovations/CLAUDE-MHC-blocks (1) (2).md](../../reference/innovations/CLAUDE-MHC-blocks%20(1)%20(2).md)
- CodeMirror/CKEditor split: [reference/innovations/HANDOFF-ckeditor-codemirror.md](../../reference/innovations/HANDOFF-ckeditor-codemirror.md)
- Seed (confirmed with Davinder): [outputs/may26-v81-mhc-blocks/](../may26-v81-mhc-blocks/) — `mhc-home.css` + `block-1…7`, `action-button-audit.md`, `host-page-example.html`, `INDEX.md`

## Decisions carried in (from clarifying round)

1. **Primary seed = v81 MHC blocks** (`may26-v81-mhc-blocks`). Best-practice review layered on top where noted.
2. **jun11-component-sheets ignored** — extract fresh; logged as prior art in §5 for honesty, not consumed.
3. **Responsive model = document as authored** (viewport media queries). Container-query migration recorded as a flagged recommendation only (§4), not performed.

---

## 1. Responsive model (source of truth for Phase B `BREAKPOINTS.md`)

Authored with **viewport media queries**. Four thresholds, mapping cleanly to Material 3 window size classes:

| Class | Range | Query in source | What changes |
|---|---|---|---|
| **Compact** | < 600px | `@media (max-width: 599px)` | Programs become horizontal scroll-snap carousel; hero stacks + stretched-link active + button hidden; banner icons hidden on insight/challenge; challenge reflows to 2-row grid |
| **Medium** | 600–1199px | `@media (min-width: 600px)` | Pair → 2-col; trackers → 4-col; rewards → 4-col; programs → 3-col; hero → 5fr/7fr split @ 360px fixed height; greeting swaps to "medium" copy; larger section/gap spacing |
| **Large** | 1200–1599px | `@media (min-width: 1200px)` | Type scale bumps (Title 1 / Body 1 / Paragraph 1 flip Text→Display at 20sp); pair thumb → 160×120 4:3; `.medium-up-inline` label fragments appear |
| **Extra-large** | ≥ 1600px | `@media (min-width: 1600px)` | `.top-bar__inner` + `.shell__rail` max-width 1280 → 1440 |

Base (mobile-first) styles are unprefixed; Compact adds a *few* `max-width:599px` overrides on top of base. Note the asymmetry: most shifts are `min-width` (progressive enhancement) but programs-carousel, hero-stretched-link, and banner-icon-hide are `max-width:599px` (Compact-only teardowns). Phase B tables must document both directions per component.

**Flagged (do not action without instruction):** migrating to container queries. Rationale for the flag → GAPS. Blocks are dropped into varying admin/host contexts where viewport ≠ available width; container queries would make each block responsive to its actual slot. This is a re-architecture of every component's CSS, so it is a recommendation, not part of this extraction.

---

## 2. Foundations (tokens + base — not components, but Phase B must document as the layer components reference)

| Item | Source | Notes |
|---|---|---|
| Color tokens | `mhc-home.css:1–22` | Warm beige bg + graphite ink + navy brand + per-tracker accent colors. Matches Davinder's "warm on backgrounds, neutral ink" rule. |
| Type families | `:25–26` | SF Pro Display (≥20sp) / SF Pro Text (<20sp), Apple optical-size rule. |
| Shape scale | `:29–34` | `--r-xs…--r-full` |
| Spacing scale | `:37–38` | `--s-01…--s-09` (0.25–4rem) |
| Base reset | `:42–60` | Universal box-sizing, margin reset, link/button defaults |
| **Type scale (24 atomic classes)** | `:62–142` | display/heading/title/body/label/caption/eyebrow/small/paragraph + `@1200` size bumps. Multi-instance, authorable, core. |

**Best-practice note:** these are effectively layer-2 semantic tokens already (CSS custom properties + atomic type classes). This satisfies the brief's "components reference layer-2 tokens only" constraint. `.reward-chip` (`:635`) hardcodes `0.6875rem`/`0.04em` rather than referencing a Label token — flag as a minor token-compliance gap for Phase B.

---

## 3. Component inventory

Legend — **Authorable:** ✅ block HTML | 🎨 style-only (host injects the element) | 🚫 non-authorable (host chrome / forbidden) · **Evidence:** M = multi-instance, S = single-instance, I = inferred/defined-not-used

### Structural / layout

| # | Component | Classes | Source | Inst. | Auth. | Responsive | Ev. |
|---|---|---|---|---|---|---|---|
| 1 | Page shell + rail | `.shell`, `.shell__rail` | css:182–201; host-page-example | 1 | 🚫 host | max-width 1280→1440 @1600; padding step @600 | S |
| 2 | Recommendations supergroup | `.recommendations` | css:220–231; host-composed | 1 | 🚫 host | gap 16→24 @600 | S |
| 3 | Section wrapper | `.section` | css:218 | 4 (thisweek, programs, challenge, rewards) | ✅ | margin-top 40dp, static | M |
| 4 | Section head + trailing link | `.section-head`, `.section-head__title`, `.meta` | css:232–242 | 4 | ✅ | static (baseline-aligned title + link row) | M |
| 5 | Greeting | `.greeting`, `.greeting__actions`, `.greet-compact/-medium` | css:203–215; block-1 | 1 | ✅ | copy swap compact↔medium @600 | S |

### Cards & banners

| # | Component | Classes | Source | Inst. | Auth. | Responsive | Ev. |
|---|---|---|---|---|---|---|---|
| 6 | Hero | `.hero`, `__media/__content/__title-group/__copy-group/__meta/__stretched-link` | css:244–312; block-1 | 1 | ✅ (CTA 🎨) | stacked+216px media <600 (stretched-link on, button off); 5fr/7fr split @360px fixed ≥600 | S |
| 7 | Pair card | `.pair-card`, `__title/__row/__thumb/__row-body/__footer/__link` | css:392–449; block-2 | 2 (interest, employer) | ✅ | grid 1→2 col @600; thumb 80×80 → 160×120 4:3 @1200; footer text buttons full-label @1200 | M |
| 8 | Tracker stat tile | `.tracker`, `--sleep/--calories/--active`, `__icon/__label/__value/__meta`, `.arrow` | css:451–492; block-3 | 4 + 3 color modifiers | ✅ | grid 2-col → 4-col @600 | M |
| 9 | Insight banner | `.insight`, `__label/__body/__action`, `.banner-icon--insight` | css:494–530; block-4 | 1 | ✅ (action 🎨) | banner-icon hidden <600; state-flag driven (ready/refreshable/readOnly/hidden) | S |
| 10 | Program card | `.program`, `__media/__body/__tag/__footer`, `.price`, `.progress/__fill` | css:532–588; block-5 | 3 | ✅ | 1-col; **Compact <600 = scroll-snap carousel (78% cols, CSS-only)**; 3-col @600; media 16:9 fluid | M |
| 11 | Challenge banner | `.challenge`, `__body/__meta/__link`, `.banner-icon--challenge` | css:590–614; block-6 | 1 | ✅ | banner-icon hidden <600; reflows to 2-row grid <600 (was inline row) | S |
| 12 | Reward card | `.reward`, `__meta/__sub/__link`, `.reward-chip` + `--gift/--points/--raffle/--store` | css:616–653; block-7 | 4 + 4 chip modifiers | ✅ | grid 2-col → 4-col @600 | M |

### Atoms / cross-cutting patterns

| # | Component | Classes | Source | Inst. | Auth. | Responsive | Ev. |
|---|---|---|---|---|---|---|---|
| 13 | **Stretched-link** (CKEditor-safe card overlay anchor) | `.program__link/.reward__link/.challenge__link/.pair-card__link/.hero__stretched-link` | css:698–721; every card block | 6+ | ✅ | hero variant Compact-only; others static | M |
| 14 | Text-link "button" (nav styled as button) | `.btn.btn-text` on `<a>` + `.medium-up-inline` | css:376–390; blocks 2,3,5,7 | 5+ | ✅ | full label fragments @1200 | M |
| 15 | Banner icon | `.banner-icon`, `--insight/--challenge` | css:521–530 | 2 | ✅ | hidden <600 | M |
| 16 | Reward chip / lozenge | `.reward-chip` + 4 modifiers | css:632–651 | 4 | ✅ | static | M |
| 17 | Progress bar | `.progress`, `.progress__fill` (`--p` custom prop) | css:578–588; block-5 | 3 | ✅ ⚠️ | static; **`style="--p:X%"` = CodeMirror/CKEditor sanitizer risk** (handoff §config-4) | M |
| 18 | Icon button (nav) | `.icon-btn`, `--filled` | css:157–167; block-1 | 2 (messages, search) | ✅ | static | M |
| 19 | Eyebrow + dot meta row | `.eyebrow`, `.dot`, `.program__tag`, `.hero__meta`, `.insight__label` | css:294–298, 568–572, 503–510 | many | ✅ | static | M |
| 20 | Visually-hidden label | `.mhc-visually-hidden` | css:686–696 | many | ✅ | n/a | M |
| 21 | Text-color / responsive utils | `.ink-soft`, `.ink-placeholder`, `.medium-up-inline` | css:677–684 | many | ✅ | `.medium-up-inline` shows @1200 | M |

### Non-authorable (document in GAPS, exclude from block set)

| # | Component | Classes | Source | Why excluded | Ev. |
|---|---|---|---|---|---|
| 22 | Top bar | `.top-bar`, `__inner/__spacer`, `.acme-logo` | css:144–180 | Host chrome, not a block | S |
| 23 | Bottom nav | `.bottom-nav`, `.bn-item` | css:655–675 | Host chrome; `<button>`→`<a>` in host shell | S |
| 24 | Primary/secondary action buttons | `.btn-filled`, `.btn-outlined`, `.btn-m/-l/-xl` | css:314–371 | Mutating actions = host-injected action button or MHC action on User Input block (rules §3). Only `.btn-text`-on-`<a>` nav is authorable (#14). | M (filled/outlined), I (l/xl unused) |
| 25 | Insight action slot | `.insight__action` | css:516–519 | Visual slot; host renders the button into it | S |

---

## 4. Best-practice observations (for Phase B, not blockers)

1. **`.tracker__value` uses `.heading-6`** (a display-family heading class) for a data value — semantically it's a stat, not a heading. Works visually; note for consistency with a future "stat value" role.
2. **`.reward-chip` bypasses the type scale** (hardcoded 11sp/uppercase/tracking, css:635–647). It's a genuine component-level pattern (uppercase chip ≠ any single Label tier), but the hardcoded values should be swapped to reference tokens where they exist.
3. **Stretched-link is prototype-grade** — the CSS comments (css:255–258) flag missing keyboard focus styling on the link and `aria-hidden` on duplicated card content. Phase B docs should carry this caveat forward, not present it as production-ready.
4. **Tracker tiles reuse `.program__link`** for their stretched anchor (block-3) rather than a `.tracker__link` class. Works, but couples two components. Flag: either mint `.tracker__link` or document the intentional reuse.
5. **`display: contents` on hero title/copy groups** (css:292–293) — clever uniform-spacing trick; note it can affect AT tree and is worth a caveat in the hero doc.

---

## 5. Collisions with existing kit / prior art

- **`outputs/jun11-component-sheets/`** — a prior, partial component extraction (`01-hero-cards`…`07-rewards-examples`, `variants-library.html`, `home-styles.css`). **Per direction, ignored and not consumed.** Logged here so Phase B's `INDEX.md` does not silently duplicate or contradict it; recommend it be superseded by this pass's output rather than left as a competing gallery.
- **`00-master-brief.md`, `component-author.md`, `reference-updater.md`** — referenced by the brief as siblings but **not present in the repo.** Phase B output (`INDEX.md`) is authored to be *consumable by* a future `reference-updater.md`, not a competing gallery, per §6.
- No collision with `design/_index.md` component inventory found for these block-level patterns; the v81 CSS already cites `design/foundation/*` for shape/spacing/type, so foundations are aligned.

---

## 6. Proposed Phase B component set (for your approval)

**Generate docs for (12 authorable components + foundations):**
Foundations doc (tokens + type scale) · #3 Section · #4 Section-head · #5 Greeting · #6 Hero · #7 Pair card · #8 Tracker tile · #9 Insight banner · #10 Program card · #11 Challenge banner · #12 Reward card · #13 Stretched-link · #14 Text-link · #15 Banner icon · #16 Reward chip · #17 Progress bar · #18 Icon button · #19 Meta row · #20/#21 Utilities.

**Exclude to GAPS:** #1 Shell, #2 Supergroup (host structure — document for host, not as blocks) · #22 Top bar · #23 Bottom nav · #24 Action buttons · #25 Insight action slot · `.tracker--zero` (referenced in block-3 comments but **not present in CSS** — inferred, do not fabricate) · container-query migration recommendation.

**Deliverables in Phase B:** one doc file per approved component + `INDEX.md`, `BREAKPOINTS.md`, `GAPS.md`.

---

## ⛔ Checkpoint — awaiting review

Per §5, no component files exist yet. Confirm or adjust:
1. The authorable set in §6 (anything to promote from GAPS or demote to it?).
2. Evidence-confidence handling — single-instance components (hero, insight, challenge, greeting) are documented from ONE source page; okay to mark them `single-instance, needs more source pages` rather than fabricate variants?
3. Anything CCAD-specific beyond the CodeMirror/CKEditor handoff I should design the doc format around.
