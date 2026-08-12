# LifeForce — Large-form (Web) · build log

**File:** `lifeforce-web-v1.html` (self-contained).
**What it is:** the Web/Angular ("large form") layout of D'Arcy's V3 two-tab hub
(**Status · My Progress**). Mirrors V3's states via a demo control bar (parity with
D'Arcy's prototype toggles).

**Type — aligned to MHC Type System v3** (`design/foundation/typography.md`): the 25
atomic classes are inlined as the type layer; **SF Pro** (`--f-display`/`--f-text`), rem
sizing, 600dp bump, and **no inline font properties** (size/weight/family/tracking live
only in the type classes; color via `.c-*` utilities). This **replaces D'Arcy's Raleway**
— see the flag in `_decisions.md` D12. Palette still the `mobile-health-design-system`
navy `#0f497f` / aqua `#04a0b7` / green `#52a045` / lava `#f15922`.

**Class map (element → class):** page title → `heading-1`; section titles → `heading-6`;
credit stat → `display-3`; card titles → `title-1`/`title-2`; step/handout names →
`title-2`/`title-3`; body/nurse copy → `paragraph-2/3` + `body-2/3`; nav/tabs/buttons →
`label-0/1`; kickers & status & table headers → `eyebrow`; metadata → `caption`.

Loaded for this work: `ux-usability-experts.md`, `ux-laws-quick-reference.md`,
`visual-design-experts.md` (filters below), plus D'Arcy's V3 files + `_ds`.

## What the large form does that the phone didn't
- **Web chrome:** top nav (not bottom nav) — the Large/Extra-large target.
- **Two-column** on ≥960px: primary column (hero → phase → appointment → next/completed
  steps) + **sticky right rail** (maximize-credit, Peak support, About / Calculate).
  The mobile single column becomes width-appropriate instead of a stretched phone.
- **Lab table** renders as a real 3-column table (desktop affords it); reflows on mobile.
- **Recommended programs** become a 2-up card grid.

## States covered (toggle in the demo bar)
| Control | States |
|---|---|
| Enrollment | Unenrolled · Enrolled |
| Appointment | Requested · Scheduled · Visit done |
| LifeForce Phase | 1–5 (segmented bar + nudge + reward line update; **hidden until scheduled**) |
| Nurse / Progress | Populated · Empty (drives nurse note, programs, handouts) |
| Dependent | Invite · Remind · Done (clears) |
| Recurring | All current (caught-up) · HA due (annual task) |

Zero/empty states included: Progress **locked** (unenrolled), and per-section empty
states (nurse, programs, handouts).

## Design rationale (through the filters)
- **Match to real world (Nielsen):** "Status" = where I stand; "My Progress" = what to
  work on. Plain labels over system nouns.
- **Visibility of system status:** phase stays hidden until an appointment is scheduled —
  no fabricated phase; appointment/enrollment/empty states are all explicit.
- **Aesthetic & minimalist:** McGriff's content volume is absorbed by the **right rail**
  and per-step detail pages, keeping the primary column scannable (readability > density).
- **Recognition over recall:** completed steps stay visible; nothing to remember.
- **Consistency & standards:** every color/type value is a DS token; no one-offs.
- **60 / 30 / 10:** ~60% neutral (canvas `#eef2f5`, white, cloud) · ~30% navy `#0f497f`
  (hero, nav, headings, primary buttons) · ~10% accent (lava `#f15922` eyebrows; aqua/green
  as functional status color, kept separate from the brand accent).

## Breakpoints
- **≥1160** (Extra-large): centered `--maxw` 1160, full two-column.
- **960–1160** (Large): fluid two-column.
- **<960** (Expanded→Compact): single column, rail drops below, top nav collapses.
- **<520** (Compact): tightened padding, table narrows. *(375 mobile parity already
  exists as D'Arcy's phone prototype — this file is the large-form complement.)*

## Not in v1 (next)
- Standalone **Overview / Checklist / Step-detail / Milestone / What's-next** screens in
  large form — these largely reuse V3's mobile treatment; `openStep()` is stubbed. Build
  next if we want the full unenrolled *flow* at desktop width (the hub's unenrolled
  *states* are covered here).
- **Figma** rebuild (deliverable) and **portable per-state HTML for Ren** (Django/CodeMirror)
  derive from this file — see `_decisions.md` D8 + open questions.
- Real `$[X]/$[Y]/$[amount]` values pending the requirements doc.

## Branches — v2 / v3 / v4 (design explorations, 2026-07-23)

Scoped to the **Status/dashboard surface at desktop**, enrolled state, on the v3 type
scale + spacing tokens (grid corrected to 1280 body max / 24dp margins). `v1` stays the
state-complete reference (all toggles + Progress tab).

**Intent they anchor to:** the job isn't "show a dashboard," it's **drive enrollment
completion + year-long re-engagement** (nurse-coached loop → phases → medical credit).
User = busy working adult motivated by **money** + **a human nurse**. Point-to-point
spine = incentive · next action · nurse · Peak hand-offs. Biggest gap in v1/D'Arcy V3:
reads as a *static status board* for what is really a *momentum loop* — under-uses
**Goal-Gradient** toward Phase 5 / full credit.

| File | Level | Moves | Principles |
|---|---|---|---|
| `lifeforce-web-v2-tweak.html` | **Tweak** | Grid/spacing tokens; **credit + phase merged into one "where you stand" hero** (2 cards → 1); "3 phases to full credit"; one clear primary action | Common Region · Von Restorff · Goal-Gradient (light) |
| `lifeforce-web-v3-elevated.html` | **Middle** | **Summary band** (money · phase · next visit); one prioritized **"Do next"**; **"Your LifeForce year"** loop timeline (the missing mental model); enrollment collapsed to one done-row; nurse pulled into rail | Cognitive-load summary-first · Hick's · Zeigarnik · Goal-Gradient · Peak-End |
| `lifeforce-web-v4-recommendation.html` | **Full rec** | **Collapses the Status/Progress tab split** into one adaptive dashboard (one-page anchors); **fused hero** = phase-climb + money + next touchpoint; **nurse brought to top level**; labs/programs/handouts become a secondary "My health" section; money+support footer | Tesler's (system carries complexity) · Serial-Position · Goal-Gradient (climb) · Peak-End · Aesthetic-minimalist |

**Recommendation:** ship **v3** as the near-term target — it materially improves clarity
and adds the year-loop model without an IA change, so it's safe for the Aug config window.
Bank **v4** as the North Star: it's the stronger experience, but **collapsing the two-tab
split is an IA decision** that needs D'Arcy + McGriff sign-off (and Ren's config buy-in) —
escalation, not a silent change. v2 is the fallback if timeline forces minimal scope.

## Responsive + type foundation — `lifeforce-base.css` (2026-07-24)

Ported the responsive/type engine from **`outputs/may26-v81-mhc-blocks/mhc-home.css`** into
a shared **`lifeforce-base.css`**, and rebuilt **v4** on it. Key correction: the "Medium+"
type tier now fires at **≥1200** (v81's "real desktop starts at 1200"), not ≥600 — so
phone/tablet/small-laptop stay on the calm **Compact** scale. Both scales are in use; we
were just switching to the large one ~600px too early.
- v4 hero headline **`display-3` → `heading-4`** (28px < 1200 → 32px ≥ 1200); hero collapses
  to one column ≤ 900; shell caps at 1280 (Large) / 1440 (Extra-large ≥1600).
- **v2, v3, v4 all link `lifeforce-base.css`** (shared type/shell/component engine) —
  migration complete 2026-07-24. **v1** keeps its inline layer (it carries the state
  toggles + JS) but its type tier was moved to ≥1200 to match. All four are flat-color
  (no gradients, D16) and resize on the same breakpoints.

## Decisions reflected (see `../../projects/feature-lifeforce/_decisions.md`)
D9 canonical system · D10 Flow B v2 base (2 tabs, enrollment folded into Status) ·
D11 phase viz = option 1a (segmented card).
