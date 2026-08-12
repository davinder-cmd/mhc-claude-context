# LifeForce Dashboard — Reskin Brief (DEM-35)

> Client-specific work: McGriff / Truist. Read before any work on LifeForce.
> Created 2026-07-23. Jira: https://mobilehealthc.atlassian.net/browse/DEM-35

## The problem

Truist's LifeForce is a **custom program** wired to Peak Health (nurse visits, lab
work, medical-credit incentives). Its in-app dashboard uses default/Bootstrap
styling — flat blue buttons, plain pill "tabs," a gray results table, an unstyled
link wall. It reads as a bolted-on third-party module, not part of MHC. Ryan
Webster (McGriff) asked us to bring its look and feel in line with our standard
product (Journeys, DCPs).

**Why it matters commercially:** McGriff pays **~$20K** to implement, plus an ongoing
per-member revenue increase (**~$0.18 PMPM**). D'Arcy built a directional PDF concept
that deliberately uses the New Health Program UX as a **forcing function to surface
missing requirements** — the concept is a gap-finder, not just a mockup.

## What this is — and isn't

- **Is:** a reskin. Re-clothe existing content in the MHC visual system so it feels
  native. Content stays 1:1.
- **Is not:** a re-conceptualization or rebuild of the program. Timeline is short and
  the whole thing must be reconfigurable by a CS Tech Lead, not re-engineered.
- **Allowed:** targeted UX fixes that improve clarity without changing scope (see
  `_decisions.md`).

## States to design (this is a program lifecycle, not two screens)

The reskin spans the member's full lifecycle. Ordered by member journey:

| # | State | What it is |
|---|---|---|
| 1 | **Unenrolled / enrollment flow** | 4-step sequence. **Step 1 is always pre-completed** (having an account). Steps have in-progress + completed variants. |
| 2 | **Step detail pages** | A drill-down page for **each** enrollment step (instructions, external hand-offs). |
| 3 | **Post-enrollment zero state** | Enrollment done, but Progress tab is **locked until enrollment completes** / first visit lands. |
| 4 | **Post-first-visit state** | After the nurse visit — **LifeForce Phase revealed** for the first time. |
| 5 | **Recurring annual state** | Steady-state: **annual** health assessment, **biennial** labs (D'Arcy 7/24; conflicts with Truist site — flagged). No re-register/re-acknowledge on renewal. |
| 6 | **Progress tab (populated)** | Nurse notes (plain text), recommended programs, educational handouts. **Empty program/handout sections DISAPPEAR entirely** (not empty-state cards). Labs show "not yet available". |
| 7 | **Dependent nudge banners** | Cross-cutting: invite a dependent, spouse health-assessment reminder. |

Everything the current dashboard shows (points, biometrics table, phase, credit link,
recommended-programs list) still lives inside these states — see the current-state
screenshots. The two "Points" and "Enrolled dual-tab" screens are subsets of the above.

## Content posture — McGriff over-communicates

McGriff tends to over-communicate and will want a lot of content on-screen. We advise
and guide toward restraint, **but expect pushback on big cuts.** Working stance: don't
fight volume head-on — absorb it with structure. The **step detail pages are the
pressure-release valve**: they let the dashboard stay clean while the detail lives one
tap deeper. Push content *down*, not *out.*

## The controlling constraint — how it gets built

MHC screens are assembled from **Page Layout Elements** (HTML/Mustache blocks,
Buttons, Tabs, List) and configured by CS Tech Leads, not developers. The reskin
must map to existing elements; new element types = engineering dependency = flag.
Our component kit's authoring model (CKEditor HTML blocks + one CodeMirror
stylesheet, no JS, no `<form>`, stretched-link, tokens) mirrors this exactly — so
kit-style HTML is both the demo and the config artifact.

## Deliverables (per DEM-35)

1. Figma: **small form** (iOS/Android) + **large form** (Web/Angular), all states. Primary.
2. **HTML** — stretch, but genuinely useful: **Ren (Tech Lead) configures this, not
   Innovations.** D'Arcy recommends going **straight to Django**, or possibly the new
   **CodeMirror** setup depending on timing — either way HTML is the artifact Ren works
   from, so kit-style HTML earns its place.

## Timeline

| Phase | Dates |
|---|---|
| Design | Jul 21 – Jul 31, 2026 |
| Config by TL | Aug 1 – Aug 31, 2026 |
| QA | Late Aug / early Sept 2026 |
| Live to end users | "1/1/26" per ticket — **flagged as ambiguous; almost certainly 1/1/2027** (rollover). Confirm. |

Follow-on (separate project, Q1): Peak data exchange moves from file upload to API.

## Reference inputs

- Current-state screenshots: `~/Downloads/Current_Dashboard_Sreenshots.zip`
  (EnrolledUser/, UnenrolledUser/).
- **D'Arcy's V3 working files — RECEIVED (2026-07-23):** `projects/feature-lifeforce/
  LifeForce enrollment flow/`. Contains the full mobile prototype (`LifeForce V3.dc.html`,
  `Flow B`, `Flow B v2`, `Enrollment`, `Enrollment v2`), the phase-option variants, the
  **review deck** shown to McGriff, the **`_ds/` MHC design system** (`colors_and_type.css`,
  Raleway + `#0f497f`), and **`exports/` — 16 rendered PNG screens** covering every state.
- **Canonical anchor (D9):** the `_ds/mobile-health-design-system` package above — Raleway +
  `#0f497f` navy. Supersedes the v81 DCP kit. Still open: requirements doc + real $ values.

## Stakeholders

| Person | Role | Cares about |
|---|---|---|
| Ryan Webster | McGriff (client-side) | Look-and-feel parity; tends to over-communicate, wants lots of content |
| D'Arcy | (internal) | Owns the concept already shown to McGriff; continuity; recommends Django/CodeMirror build path |
| Ren | Tech Lead (config) | Configures the build (not Innovations) — HTML handoff is for Ren |

## D'Arcy sync — latest internal direction (2026-07-24) — SUPERSEDES ON CONFLICT

D'Arcy owns the build; where this disagrees with the public Truist site below, **this wins for
what we design**. Public-site facts we can't reconcile are flagged for D'Arcy to confirm.

**Phase.** Tied to **biometric results + health conditions** — not a task ladder. Users may
**never reach Phase 5**, so the UI must **not over-emphasize progression**. The small dots
(top-right) are the intentional, subtle treatment. → De-emphasize the climb everywhere (this
walks back the goal-gradient framing in the v2/v3/v4 large-form explorations).

**Enrollment (4 steps).** register (in-app) · acknowledge (Peak portal) · lab work (out-of-app,
Peak Health) · Health Assessment (in-app). **Steps 2–4 only flip to complete when Peak sends a
confirmation file** — so there's an intermediate "submitted / awaiting confirmation" state.
**First appointment can't be scheduled until all steps are complete.**

**Rewards / "points".** The points are **dollar incentives paid directly into payroll**, earned
**per nurse visit — NOT per enrollment step**. Full premium/credit breakdown lives in the **PDF**;
**do not surface dollar amounts in-app.** → Kills "Enroll & earn 200 points" and any "$X of $Y
earned" hero (see D19). *(Note: this reframes the reward vs. both the prototype copy and the
Truist-site "medical-credit-per-pay-period" language — reconcile.)*

**Post-enrollment hierarchy — key principle.** Once enrollment is done, the **notification /
banner area (appointment · dependent · HA-due · nurse action) is the single most important
element on the page and must clearly stand out.** It, not a credit/$ hero, is the anchor.

**Completed steps.** No reason to keep them prominent → reduce to a **compact checklist** (small
checkmarks), not full cards. **Completed** step detail = a **summary of what was done**;
**incomplete** step detail = a **primary CTA**.

**Dependent.** Invite card click sends a **system email** to the dependent — **no send-confirmation
shown today** (gap). Card may disappear after sending; multi-send unconfirmed. Reminder banner
(dependent registered, HA not done) has **no button** — primary user prompts them directly.

**Progress tab.** Zero state if enrollment incomplete (redirect back to the enrollment tab is
fine — **no extra button**). Nurse notes arrive as **plain text from the file** — may be wrapped
in a container but **cannot be formatted** (no bullets/headers). **Recommended-programs and
educational-handouts sections DISAPPEAR entirely when empty** (agreed correct — so the "empty
state" placeholders we built are wrong). Lab results/goals show **blanks + a "not yet available"
message** until data arrives.

**Annual renewal.** **Health Assessment every year** to keep eligibility; **lab work every two
years.** On renewal: **no re-register / re-acknowledge** — just redo the assessment (and labs every
other year). **Earning may reset each year (D'Arcy not fully confident — OPEN).** **All program
rules should be explained on the intro/About page.**

**⚠ Unresolved conflict — labs cadence:** D'Arcy (above) says **labs every 2 years**; the Truist
public site (below, D14) says labs recur **per appointment cycle** and called biennial "likely
wrong." **Design to D'Arcy's biennial; flag for confirmation.**

## Authoritative process — Truist benefits site (verified 2026-07-24)

Source: benefits.truist.com/well-being/lifeforce/lifeforce-participation. This is the
**source of truth for the program mechanics** — it corrects several assumptions.

**Participation steps (in order):** 1) Set up CarePlus account · 2) Program
acknowledgment · 3) Lab work · 4) **Annual** Health Assessment · 5) **Attend the Peak
Health nurse appointment** · 6) **Prepare for next appointments (cadence set by phase).**
→ The nurse appointment is **step 5, part of the flow** — not a post-enrollment milestone.
The whole program orbits the appointment. (New hires: contact Peak within 31 days.)

**Reward = medical credit, per pay period (semi-monthly), NOT annual.** Begins "the first
paycheck of the month following the month of your appointment." A **LifeForce benefits
calculator** shows credit per pay period. → Our "$X of $Y earned this year" hero is a
simplification that can mislead.

**Phase can go DOWN.** Miss labs (must be done **≥5 business days before your
appointment**) → appointment cancelled → **dropped to Phase 1.** Miss/cancel an
appointment without rescheduling **within 60 days** → **Phase 1.** Cadence of future
appointments is set **by phase**; you're notified ~1 month before. → Phase is not a pure
upward climb; there's a **compliance / protect-your-standing** dimension with hard
deadlines.

**Health Assessment cadence:** initial, then **yearly by the last day of the month of
your first appointment of the year** (appt Feb 16 → HA due Feb 28). Hard, computed deadline.

**Labs:** teammates only (not spouse); tied to each appointment cycle. → "biennial labs"
was **unconfirmed and likely wrong** — labs recur per appointment cycle, not every 2 yrs.

**Spouse/DP:** if covered under a Truist medical plan, must complete the **Health
Assessment** (no labs) to earn the **full** credit. → Our "maximize credit" surface is correct.

**Nurse assessment captures:** weight, body composition, BP, cardiorespiratory fitness
(6-min sub-maximal bike test), resting heart rate → maps to our biometrics table.
