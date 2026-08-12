# LifeForce Reskin — Build Plan (DEM-35)

Scope, content→component mapping, and sequence. Context: `projects/feature-lifeforce/`.
Anchor system: `outputs/jul13-dcp-suite-kit/mhc-base.css` + `outputs/jul17-block-pattern-extraction/mhc-home.css`.

## State matrix — what we design

Full lifecycle (per D'Arcy's expanded requirements). Each = large form (Web) + small
form (375). **P1 = enrollment spine + Progress tab; P2 = lifecycle + detail pages.**

| # | State | Pri | Notes |
|---|---|---|---|
| 1 | **Unenrolled — enroll hero + 4-step checklist** | P1 | Step 1 pre-completed; 200-pt incentive folded into hero |
| 2 | Step states (current / completed) | P1 | Per-step in-progress + done variants |
| 3 | **Per-step detail pages** (×4) | P2 | Drill-down per step; the content pressure-release valve |
| 4 | Post-enrollment **zero state** | P1 | Progress tab locked until enrollment/first visit |
| 5 | **Post-first-visit** — Phase revealed | P2 | LifeForce Phase surfaces for the first time |
| 6 | **Progress tab (populated)** | P1 | Nurse recs + programs + educational handouts + empty states |
| 7 | **Recurring annual state** | P2 | Annual health assessment, biennial labs |
| 8 | **Dependent nudge banners** | P2 | Invite dependent · spouse HRA reminder (cross-cutting component) |

Two tabs (Enrollment · Progress/Goals) use the native **Tabs** Page Layout Element.

> **Timeline reality:** 8 states ×2 form factors ×3 breakpoints ≠ a 4-screen reskin.
> Build P1 first (a complete, demoable spine), then P2. Confirm priority with Davinder.

## Content → kit component mapping

| LifeForce content (today) | Reskinned as | Kit source |
|---|---|---|
| Intro value prop + "Enroll & Earn 200 Points" + separate Points screen | **Hero** with incentive baked in | `component-hero.html` |
| 4-step enrollment "tabs" | **Vertical numbered checklist** (rows w/ done/current/to-do status) | `component-rows.html` + status chip from `component-atoms.html` |
| Step body (instructions + Peak Health / Take Assessment button) | Row body + text-link button | `.pair-card__row`, `.btn.btn-text` |
| Enrollment Guide / Peak Health Portal / contact | Text-link buttons + a contact rows block | `component-atoms.html`, `component-rows.html` |
| "LifeForce Phase: 5" + congrats banner | **Insight banner** (status + celebratory copy) | `component-insight.html` |
| Premium/credit calculator link | Text link | `.btn.btn-text` |
| Biometrics results-vs-goal table | **List rows** (measurement · result · goal) | `component-rows.html` / List element |
| "My Recommended Programs" link wall | **Program/pair card grid** | `component-program.html` / `component-pair.html` in `.programs`/`.pair` |

**Gaps to flag (no new components):**
- No Stepper atom shipped → checklist uses rows, not a new Stepper.
- No table block → biometrics use rows (reflows on small form).
- Media shells need `background-size:cover` for real Peak/program imagery (per kit GAPS).

## Deliverable sequence (Jul 23 → Jul 31)

1. **Unenrolled flow first** (hero + checklist + step states) — it's the spine McGriff's
   V3 concept centers on and surfaces the shared checklist component.
2. **Enrolled Enrollment tab** — reuses the checklist in all-complete state + adds
   Phase insight banner.
3. **Enrolled Progress/Goals tab** — results rows + recommended-programs cards.
4. Each screen: three breakpoint views (1440 / ~1040 / 375), 60/30/10 color-weighting,
   saved as `*-v{N}-{slug}.html` with an INDEX.md log (per working conventions).
5. **HTML handoff pack** for the TL: kit-style blocks + the one stylesheet.
6. **Figma** assembly of approved screens for small + large form.

## Before build — needed / confirm

- Requirements.docx (authoritative content) · D'Arcy V3 + enrollment PDF (parity) ·
  New Health Program Figma (target).
- Confirm live date (1/1/2027?) and Phase scale.

Gate: Davinder approves this plan + the three UX fixes (`_decisions.md` D3) before
screen build.
