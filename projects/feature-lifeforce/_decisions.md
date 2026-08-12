# LifeForce Reskin — Decision Log (DEM-35)

Kept for defensibility: what we decided, what we considered, what we rejected and why.

---

### D1 — Visual anchor ~~= DCP suite kit~~ → SUPERSEDED by D9 (2026-07-23)
**Originally decided:** anchor on `outputs/jul13-dcp-suite-kit/` (v81 navy `#1B355C` +
SF Pro). **Made before D'Arcy's V3 files were in hand.** Now superseded — see D9. The
canonical system is the **`mobile-health-design-system`** package D'Arcy's V3 already
uses, not our v81 DCP kit.

### D2 — ~~Reskin, not redesign~~ → REFRAMED (2026-07-23)
The ticket framed this as a reskin, but **D'Arcy's V3 is a re-conceptualization** — and
McGriff has already seen it (Jul 17). LifeForce moves from a standalone Peak-Health
dashboard into a **unified, in-app, two-tab experience** inside CarePlus (bottom nav:
Home · Digital Care · Wellbeing · Benefits · Rewards). We are not re-clothing the old
dashboard; we are producing D'Arcy's V3. Content is still largely 1:1 (same steps, labs,
phases, programs), but the IA is new and better. This is now the accepted direction.

### D3 — Three UX fixes allowed inside the reskin
The ticket permits UX improvements that don't expand scope. We are taking three:
1. **4 "tabs" → a proper vertical numbered checklist.** The current step strip is a
   sequential enrollment task list wearing tab clothing — it violates match-to-real-world
   and confuses tabs (parallel) with steps (sequential). Render as list rows with
   status (done / current / to-do). **Do not build a new Stepper atom** — `A_Stepper`
   is a stub in the design system; a rows-based checklist stays within shipped
   components. (Escalation rule: no new components.)
2. **Fold the separate "Points" screen into the dashboard.** Two entry points for one
   program is fragmentation. *(Amended 2026-08-06: the original rationale placed the
   200-pt incentive in the enroll hero. **D19 superseded that** — points are
   per-nurse-visit payroll dollars, not an enrollment reward, and no amounts appear
   in-app. The fold stands; the reward content lives in the credit + phase strip per
   D25/D32. Verified: "200 points" appears 0 times in the final set.)*
3. **"Recommended Programs" link wall → program/pair cards.** Same content, rendered
   from the kit's card grid — the single biggest visible upgrade.
**Rejected:** reordering steps, changing the Peak Health integration, or altering the
medical-credit/phase logic — all out of scope.

### D4 — HTML is the primary handoff, not a stretch goal
**Decided:** Treat the HTML deliverable as primary. The kit's authoring model
(CKEditor HTML blocks + one CodeMirror stylesheet, no JS, no `<form>`) is the exact
format a CS Tech Lead configures in, so kit-style HTML is the config artifact. Figma
is the review/spec layer on top.

**Amended 2026-08-06 (Davinder):** parked, not cancelled. **Figma is the deliverable to nail down
first**; HTML is addressed 2026-08-07. Reframed in status — HTML is **Davinder's own objective**
for the build path rather than a committed DEM-35 deliverable, so it should not be presented to
stakeholders as a promise in this round. **Hard constraint when it resumes: the JS comes out.**
D'Arcy's `.dc.html` files depend on the Claude Design React runtime (`support.js`); Ren needs
portable static HTML per state with no JS, matching the CKEditor + CodeMirror authoring model.

### D5 — Biometrics results rendered as list rows, not an HTML table
**Decided:** The Progress/Goals measurement table renders as design-system list rows
(measurement · result · goal), not a `<table>`.
**Why:** stays native to the List Page Layout Element and reflows on small form; a
fixed table breaks at 375px.

### D6 — Scope is a lifecycle, not two screens (revised 2026-07-23)
**Decided:** The reskin covers 7 lifecycle states (enrollment flow, per-step detail
pages, post-enrollment zero state, post-first-visit phase reveal, recurring annual
state, populated + empty Progress tab, dependent nudge banners). See `_brief.md`.
**Implication:** This is materially larger than the original 4-screen read. The Jul 31
design window likely can't cover all 7 at full fidelity across two form factors —
prioritize the enrollment spine + Progress tab first; treat recurring-annual and some
step detail pages as fast-follow if the window tightens. Flag to Davinder before commit.

### D7 — Content strategy: push down, not out
**Decided:** McGriff over-communicates and will resist cuts. Rather than fight volume,
absorb it with structure — the **per-step detail pages are the pressure-release valve**
so the dashboard stays clean while detail lives one tap deeper.
**Why:** Preserves readability (a Davinder non-negotiable) without a losing battle over
content McGriff is paying to include.

### D8 — Build path: HTML for Ren, likely Django or CodeMirror
**Note (from D'Arcy):** Ren (Tech Lead) configures this, not Innovations. D'Arcy leans
toward going straight to Django, or the new CodeMirror setup depending on timing.
**Implication:** validates D4 — HTML is the real handoff. Kit-style HTML (semantic
blocks + one stylesheet, no JS) ports cleanly to either Django templates or CodeMirror.

### D9 — Canonical system: `mobile-health-design-system` (D'Arcy's V3)
**Decided (2026-07-23):** Anchor on the design system D'Arcy's V3 already targets —
`_ds/mobile-health-design-system-…/colors_and_type.css`:
- **Type:** Raleway (brand) + Helvetica system.
- **Palette:** brand navy `#0f497f`, aqua `#04a0b7`, spring green `#52a045`, lava orange
  `#f15922`, night sky `#062a42`; neutrals cloud `#e6ebec` / silver `#c6cccd` / slate
  `#6e7a7d` / charcoal `#373d3f`; divider `#dfe4e5`.
**Not** our v81 DCP kit (`#1B355C` + SF Pro). D'Arcy's "v2 / Health Programs style"
experiments (`#1D63D6` + cream) were explored and set aside; **V3 is the reviewed
direction**. Files: `projects/feature-lifeforce/LifeForce enrollment flow/`.

### D10 — Base prototype: Flow B v2 architecture (2 tabs)
**Decided:** Build from **`LifeForce Flow B v2`** — two tabs (**Status** + **My
Progress**), with the enrollment-steps record folded into Status (not a third tab), and
the lighter light-card phase treatment. Flow B (3 tabs) and the earlier navy phase-hero
are prior iterations. `LifeForce V3.dc.html` is the fullest state model (enrolled +
unenrolled + recurring in one) — use it as the state reference.

### D11 — Phase visualization: pick one of 1a / 1b / 1c
`LifeForce Phase Options.dc.html` offers three: **1a** light card w/ segmented bar
(closest to current), **1b** minimal inline, **1c** numbered step dots. **Davinder to
pick** before large-form build. Recommendation: 1a — reads as progress, matches the
segmented bar already used in the hero/home card.

### D12 — Type = MHC Type System v3 (SF Pro), not D'Arcy's Raleway
**Decided (2026-07-23, Davinder):** the large form is aligned to
`design/foundation/typography.md` — the 25 atomic classes, **SF Pro** display/text, rem
sizing, no inline font overrides. This **replaces the Raleway** used in D'Arcy's V3
prototype.
**Why it matters / flag:** there are effectively **two systems in play** — D'Arcy's V3
rode the *sales/demo* `mobile-health-design-system` package (**Raleway** + `#0f497f`),
while `design/foundation` is the *product* type system (**SF Pro**). Aligning to the
product type scale is correct for an engineering/innovations handoff (they import that
CSS as source of truth) and for consistency with the rest of the app — but it means the
web build no longer matches D'Arcy's demo font. **Confirm with D'Arcy** so McGriff isn't
shown Raleway then handed SF Pro. Palette was left on the `_ds` navy/aqua/green/lava
(Davinder scoped this task to the *type* scale); `design/foundation/colors.md` can be
layered next if we want full product-DS alignment.

### D13 — Three branched large-form explorations (v2/v3/v4)
**Decided (2026-07-23):** branched the large form into three escalating directions, each
grounded in an intent review (drive enrollment completion + year-long re-engagement;
user = money- and nurse-motivated; spine = incentive · next action · nurse · Peak).
Files in `outputs/jul23-lifeforce-largeform/` (see INDEX for the full comparison).
- **v2 (tweak):** merge credit+phase into one hero; grid/spacing tokens; goal-gradient copy.
- **v3 (middle):** summary band + one "Do next" + "Your LifeForce year" loop timeline. **No IA change.**
- **v4 (full rec):** collapse the Status/Progress tab split into one adaptive dashboard;
  fused phase-climb hero; nurse surfaced top-level; labs/programs → secondary "My health."
**Recommendation:** ship **v3** for the Aug window (clarity win, no IA risk); hold **v4**
as North Star. **v4 collapses the two-tab split — an IA change requiring D'Arcy + McGriff
+ Ren sign-off** (per design-system escalation rules), not a silent change.

### D14 — Authoritative process corrects the content model (2026-07-24)
The Truist benefits site (see `_brief.md` "Authoritative process") confirms the **approach**
(dashboard, phases, nurse-centric, dependent credit, biometrics) but corrects the content
model and adds a requirement none of v1–v4 or D'Arcy's V3 handle:
1. **Reward is per-pay-period (semi-monthly), not annual** — "$X of $Y this year" hero
   should reflect per-paycheck credit + the calculator.
2. **Enrollment is ~5 steps; the first nurse appointment is step 5** (the hinge), not a
   post-enrollment milestone. Step 6 = prepare for next appointment (cadence by phase).
3. **NEW — phase demotion / deadlines.** Labs **≥5 business days before appointment** or
   you're **dropped to Phase 1**; reschedule **within 60 days** or Phase 1; HA due yearly
   by end of appointment-anniversary month. → need a **"deadlines / keep your standing"**
   surface (loss-aversion), which the pure goal-gradient "climb" designs lack. This is the
   single most important behavioral gap the doc reveals.
4. **"Biennial labs" was wrong** — labs recur per appointment cycle.
**Impact:** doesn't invalidate v2/v3/v4 — sharpens them. Fold a deadline/at-risk pattern
into the recommended version; fix reward + cadence copy; represent the appointment as the
enrollment hinge.

### D15 — Responsive/type engine = v81 logic, shared base (2026-07-24)
**Decided:** adopt the `may26-v81-mhc-blocks/mhc-home.css` responsive+type logic as a shared
`outputs/jul23-lifeforce-largeform/lifeforce-base.css`. The **"Medium+" type tier fires at
≥1200**, not ≥600 (v81's "real desktop starts at 1200") — phone/tablet stay on the Compact
scale. Fixes the oversized-banner-at-intermediate-widths issue Davinder flagged: the branches
were bumping type ~600px too early. Shell caps 1280/1440; v4 hero headline dropped
`display-3`→`heading-4` and collapses to one column ≤900. **Open:** migrate v2/v3 onto the
shared base so all three ride one engine.

### D16 — Flat color, no gradients (2026-07-24)
**Decided (Davinder):** the Figma/live LifeForce uses a **flat solid** color treatment
(solid navy buttons/hero, solid tinted panels). Flattened the 45°/50° navy→teal gradients
I'd added to the heroes/summary band and the v4 climb bars → solid `--navy` / solid aqua
across v1–v4. **Supersedes** the earlier "45° gradient to teal" styling; consistency with
the product's flat treatment wins.

### D17 — All 16 V3 states rebuilt natively in Figma (2026-07-24)
**Decided (Davinder):** offered image-board vs. native rebuild; chose **native**. Rebuilt
D'Arcy's V3 (bundled `LifeForce V3 (1).html`) as **16 fully editable Figma frames** (text,
cards, icons, table, phase segments — no flattened images) on page **"V3 — All States
(Claude)"** in file `lifeforce`, 4×4 grid. Why native: Davinder wants to manipulate/move
between Claude and Figma. Figma blocks localhost image loads, so an image board was ruled
out anyway. Type = SF Pro/Inter, flat navy (D16), Compact-tier sizes at 392px.
- **States (journey order):** 01 Home · 02 Overview(unenrolled) · 03–06 Step details
  (CarePlus / Acknowledgment / Lab work / Health Assessment) · 07 Enrolling · 08 Being
  scheduled · 09 Scheduled · 10 Visit done(phase revealed) · 11 HA due · 12 Dependent
  remind · 13 Dependent done · 14 MP Locked · 15 MP Populated · 16 MP Empty.
- **Flag — these native states bake in the program-accuracy copy from the recommendations
  track** (per-pay-period credit, "keep your standing" HA-due nudge, phase hidden until
  first visit, phase can advance 1→5). If the reskin must stay copy-neutral to D'Arcy's
  original, revert those strings; otherwise they double as a working demo of the Bucket A/B
  recommendations. Awaiting Davinder's call alongside `RECOMMENDATIONS.md`.

### D18 — Faithful rebuild from V3 source, superseding the drifted native page (2026-07-25)
**Decided (Davinder):** D17's native page was rebuilt from memory and **drifted** from D'Arcy's
actual V3 ("not everything got translated"). Re-read the exact source
(`LifeForce enrollment flow/LifeForce V3.dc.html`, 724 lines + `colors_and_type.css` + the
Review Deck) and rebuilt all 16 screens faithfully on a **new page "V3 — Faithful (from
source)"**. Kept the D17 page for comparison. The remote `claude_design` MCP is not connected
and image import is walled off (localhost blocked; base64 exports are 100–575 KB ≈ 140k tokens
each — impractical), so a faithful **native** rebuild from source was the only viable path.
- **Corrections vs. D17 drift:** Overview is the **"About LifeForce" marketing page** (Truist's
  premier well-being program; How it works / Who it's for / Earning potential; pill "Earn up to
  $[Y]/yr"), not a checklist. CTA = **"Enroll & earn 200 points"** (the points-reward framing I'd
  missed; dropped my invented "keep your standing"). Appt scheduling = **"~20 business days"** (was
  2). Status phase indicator = **5 dots** (current filled navy), not a segmented bar. Each Status
  state is **one long comprehensive scroll** (credit banner → phase → appointment → maximize-credit
  → Next steps → Completed steps → Support → About → Calculate), not a short card. My Progress =
  **12-row biometrics table** (all "—") + amber "labs not received" + **4 real programs** (Virta,
  Premise Health, Truist Virtual Fitness, Lyra) + 3 handouts. Added the **5-tab bottom nav**
  (Home · Digital Care · Wellbeing · Benefits · Rewards), previously omitted.
- **16 screens** map to V3 states: 01 Overview · 02 Enrolling · 03 Being-scheduled · 04 Scheduled ·
  05 Visit-done · 06 HA-due · 07 Dependent-remind · 08 Dependent-done · 09 Progress-locked ·
  10 Progress-populated · 11 Progress-empty · 12–15 Step details · 16 Home.
- **Type still SF Pro/Inter (D12), flat navy (D16)** — D'Arcy's Raleway remains superseded by
  Davinder's MHC Type System v3 decision; that's intentional, not drift.

### D19 — D'Arcy sync (2026-07-24) reframes the product; corrections pending (2026-07-25)
**Absorbed, not yet applied to the designs** (Davinder wants callouts before we touch screens).
Full notes captured in `_brief.md` → "D'Arcy sync". Two structural shifts + a conflict:

**Structural shifts.** (a) **Phase is a health-state, not a ladder** — tied to biometrics/conditions,
users may never hit Phase 5; do **not** over-emphasize progression (subtle dots only). This walks
back the goal-gradient/"LifeForce year"/climb framing in the v2/v3/v4 large-form explorations (D13).
(b) **Post-enrollment, the notification/action area is the page's hero** (appointment · dependent ·
HA-due · nurse action) — **not** a credit/$ banner.

**What's now WRONG in the faithful V3 build ("V3 — Faithful" page):**
| Current build | Correct per D'Arcy 7/24 |
|---|---|
| Overview CTA "**Enroll & earn 200 points**" | Points are per-**nurse-visit** payroll dollars, **not** an enrollment reward — reword; don't tie points to enrollment |
| Credit banner "**$[X] of $[Y] earned**" as Status hero | **Don't surface $ amounts in-app** (breakdown = PDF); demote/remove the $ hero, promote the notification/action |
| Completed steps as **full cards** | **Compact checklist** (small checkmarks) |
| Progress-empty shows **empty-state placeholder cards** (programs/handouts) | Those sections **disappear entirely** when empty (lab table stays w/ "not yet available") |
| Home LifeForce card uses a **progress-bar (segments)** | De-emphasize progression — subtle dots, consistent with Status |
| Progress-locked has an "**Enroll in LifeForce**" button | No extra button needed — redirect to enrollment tab is fine |

**Not-yet-designed states surfaced:** enrollment steps 2–4 **"submitted / awaiting Peak
confirmation"** intermediate (steps complete only on Peak file); **first appt can't schedule until
all steps complete**; dependent-invite **"email sent" confirmation** (missing today); **intro/About
page must explain all program rules** (annual HA, biennial labs, phase logic, earning reset).

**⚠ Conflicts to resolve (default to D'Arcy for the build, confirm):**
1. **Labs cadence** — D'Arcy: every 2 yrs; Truist site (D14): per appointment cycle. Using biennial.
2. **Reward mechanic** — three framings: prototype "200 pts + monthly premium credit" · Truist site
   "medical credit per pay period" · D'Arcy "payroll dollars per nurse visit." Design-safe resolution:
   **surface no amounts in-app**; describe earning qualitatively; point to the PDF.
3. **Earning resets annually** — D'Arcy unsure. OPEN.

### D20 — Enrolled Status page: focal-card hierarchy (2026-07-25)
**Decided (Davinder):** post-enrollment the Status page was too busy — points banner + phase
container + appointment container + dependent + next steps + 4 completed-step cards, nothing
winning. New hierarchy (Davinder picked "merge into one focal card" over re-weight / status-first):
1. **Tabs** (unchanged). 2. **Slim earning strip** — recessive, **no dollar amounts** (D19),
"Earning medical credit as you go · See breakdown ›" → PDF. 3. **ONE focal card** (elevated, navy
1.5px border, soft shadow) = the **status / primary next action** as the largest element, primary
CTA inside it, and the **phase folded in as a subtle dot row** at the card's foot (progression
de-emphasized per D19). The focal swaps by state: being-scheduled / scheduled / active-visit-done /
**HA-due deadline** (amber, the notification becomes the focal). 4. **Maximize-credit / dependent**
(invite · remind · a green "credit maximized" confirmation when done). 5. **Next steps.**
6. **Completed enrollment → compact checklist** (small green ticks, "Complete · 4/4 ›"), not cards.
- Built as **02R–08R** on the "V3 — Faithful (from source)" page, below the faithful grid, labeled
  "Revised — Option A". Faithful originals kept above for comparison.
- Applies the D19 corrections (no $ hero, compact completed, subtle phase). Still TODO on these
  revised frames: reflect "empty program/handout sections vanish" on Progress-empty (11), Home-card
  segments → subtle, program-rules on the intro page, and the not-yet-designed states (Peak
  confirmation pending, dependent "email sent"). Large-form still needs the same hierarchy pass.

### D21 — Unified set on SF Pro + MHC Type System v3 (2026-07-25)
**Decided (Davinder):** unify the whole set on the real type system. Confirmed **SF Pro Display +
SF Pro Text are available to Figma** on this machine, so built with the actual fonts (not the Inter
proxy) mapped to the **25-class v3 scale** (`design/foundation/typography.md`) at the Compact tier —
exact sizes / line-heights / tracking per class; headings/titles = SF Pro Display Medium (the system
is deliberately "lighter, quieter"; focal dominance comes from size + card elevation, not weight).
**Spacing** per `design/foundation/spacing.md`: **every padding, gap, and spacer snapped to the
documented token scale (4/8/12/16/24/32…)** — a normalization pass fixed 496 paddings + 158 gaps + 84
spacers, 0 off-scale values remaining (killed the earlier 10/14/20/22 etc.; section gaps 20→24, within
16, tight groups 8/12). 16dp body margin (Compact), 4dp-grid line-heights. *(12dp = $spacing-03 is kept
where it's chip-to-label/dense-row; if strict 8-only is wanted, push 12→16.)* **Reward now shown but minimized** (Davinder's call — reversing the
earlier "no amounts in-app": "$[X] of $[Y] earned" sits in a slim navy earning strip, Title-2, clearly
under the focal card).
- **All 16 screens** rebuilt in a **new section "V3 — Unified (SF Pro · MHC v3)"** on the "V3 — Faithful"
  page, to the right; the faithful + Option-A/type-proof sections are kept untouched for comparison.
- Carries the D20 focal-card Status hierarchy (02–08) and the settled D19 corrections: **Home card =
  subtle dots** (not a progress bar); **Progress-empty (11) = program/handout sections vanish**
  entirely (only labs "not yet available" + nurse zero-state remain); Progress-locked has **no button**
  (redirect hint instead).
- **Element → class map:** header→Title 1 · section→Heading 6 · focal headline / card title→Heading 6 /
  Title 1 · Overview H1→Heading 3 · "Hi Davinder"/step title→Heading 4 · status & kickers→Eyebrow ·
  body→Paragraph 2/3 · reward + card values→Title 2 · buttons→Label 0 · tabs→Label 1 · nav→Label 3 ·
  table headers→Eyebrow · meta→Caption.
- **Note:** the engine's `globalThis.LF` is wiped whenever the Desktop Bridge plugin restarts — the
  full engine (core + tc + component builders) must be re-established each session before building.
- **Still open (unchanged):** intro-page program rules; the not-yet-designed states (Peak-confirmation
  pending, dependent "email sent"); large-form pass; and the two conflicts (labs cadence, reward mechanic).

### D22 — "Enrollment" renamed to "Getting started" in the 4-step sequence (2026-07-28)
**Decided (Davinder):** the word *enroll* was doing two jobs and colliding on-screen.
**Sense 1** = opting into LifeForce (the About-page CTA) — that's what puts a member on the
Status tab. **Sense 2** = the 4-step Peak Health qualification sequence (CarePlus account ·
acknowledgment · labs · Health Assessment) that must finish before a first nurse visit can be
booked. Screen 02 told an already-enrolled member to "Finish enrolling," and the word appeared
twice on one screen (focal kicker + completed checklist) with the same 1-of-4 count, reading as
two trackers for one thing. Compounding it: step 1 is **always pre-completed**, so a first-time
member landed on a meter already at 25% for something they never did.

**Applied (Unified section, `V3 — Unified (SF Pro · MHC v3)`):**

| Node | Before | After |
|---|---|---|
| 02 focal kicker | ENROLLMENT · 1 OF 4 DONE | GETTING STARTED |
| 02 focal headline | Finish enrolling to activate LifeForce | 3 steps until Peak Health books your first visit |
| 02 focal body | Complete these steps, then Peak Health books your first nurse visit. | Step 1 is already done — you have a CarePlus account. |
| Checklist label, 02–08 | ENROLLMENT | GETTING STARTED |
| 09 Progress-locked | Enroll in LifeForce to unlock your progress — … after you enroll and meet your nurse. | Your lab results, goals, and nurse guidance appear here after your first nurse visit. Finish getting started on the Status tab to book it. |

**Why the headline counts down, not up:** the member's goal isn't an abstract "enrolled" state,
it's reaching the nurse visit — that's when medical credit starts (D14). Counting *down to the
visit* also sidesteps the pre-completed-step-1 problem. The right-side checklist count stays
"1 of 4 complete" / "Complete · 4/4" — the label change alone resolves the collision.

**Kicker shortened** to "GETTING STARTED" (dropped "· 3 STEPS LEFT") — it wrapped to two lines
at Compact width and the headline already carries the count.

**Not changed, deliberately:**
- **Step detail screens 12–15** — they read "Step 1/2/3/4", never "enrollment". No collision.
- **01 Overview "Enroll & earn 200 points"** and **16 Home "You're enrolled in LifeForce"** —
  correct sense-1 usage. The Overview CTA is separately unresolved under D19 (points are
  per-nurse-visit payroll dollars, not an enrollment reward); left for that decision.
- **Faithful + Option-A sections** — comparison references, untouched.

**Flag:** this changes copy D'Arcy's V3 established and McGriff saw on Jul 17. Raise with
D'Arcy on return; it's a terminology fix, not an IA change, so it shouldn't need McGriff
re-review — but it should be named, not slipped in.

### D23 — Empty "Next steps" container disappears (2026-07-28)
**Decided (Davinder):** the "Next steps" section on Status screens **03–08** held nothing but a
zero-state card reading *"You're all caught up — we'll let you know when something's due."* A
section announcing its own emptiness — the same pattern D19 already rejected for the Progress
tab. The rule now applies to Status too: **empty means gone, not an empty state.**

**Why it was actively wrong, not just redundant:**
- Per D20 the **focal card already owns the single next action** and swaps by state, so
  "Next steps" was a second, weaker "what's next" surface competing with it.
- On **06 · HA due** the two **contradicted each other** — an amber focal card saying the Health
  Assessment is due, sitting directly above a container saying the member is all caught up.

**Applied:** removed the heading, the zero-state card, and their spacers from **03, 04, 05, 06,
07, 08** (24 nodes; −210px per screen). The preceding 24dp spacer is retained as the single gap
into the "Getting started" checklist. **Screen 02 keeps the container** — there it holds the
three real pending step cards.

**Open (tracked as 4.1 in `outputs/jul28-lifeforce-open-questions/`):** if a post-enrollment
state ever carries **2+ simultaneous prompts** (e.g. HA due *and* appointment prep), "Next steps"
earns its place back for that state. If not, it is a 02-only container permanently.

### D24 — Calendar fallback built as a variant, original preserved (2026-07-28)
**Decided (Davinder):** "Add to calendar" (a filled navy **primary** button on the scheduled-
appointment card) originates in D'Arcy's V3 source (`LifeForce V3.dc.html:275`), not our build —
but it may not be buildable in the config layer (no JS; `.ics` needs server-side generation or a
native handoff; structured appointment data from Peak unconfirmed). Same card also promises
"You'll get a reminder the day before," an unverified push/email commitment. Tracked as §5.1–5.3
in `outputs/jul28-lifeforce-open-questions/`.

**Built a fallback rather than waiting on Ren**, so the Aug config window can't stall on it:
- **`04b · Status — Scheduled (calendar fallback)`** — new frame in the Unified section, placed
  immediately right of 04 (x 3860, y 160) for side-by-side review. Section widened to 2216.
- **Changes, variant only:** calendar button → navy **text link** (fill removed, padding zeroed,
  left-aligned); reminder sentence cut from the body copy. Screen 1355 → 1311px.
- **`04` is untouched** — it remains the design of record pending Ren's answer.

**Consequence to watch:** with the filled button gone, the focal card has **no primary action**,
so "Invite dependent" in the maximize-credit card becomes the most prominent button on the
screen. Defensible — a booked appointment asks nothing of the member — but it moves visual
priority from the appointment to the dependent nudge. If that's wrong, demote "Invite dependent"
rather than promote something back into the focal card.

### D25 — Credit stated per pay period and tied to phase (2026-07-28)
**Decided (Davinder):** the earning strip showed **"$[X] of $[Y] earned · Medical credit toward
your plan."** **Both strings are D'Arcy's, verbatim from `LifeForce V3.dc.html` (lines 585 and
124) — inherited, not introduced by us.** *(Corrects an earlier claim in this entry that we
authored it; it changes who owns the answer.)*

The framing is not incoherent — if credit accrues per pay period, a cumulative "earned so far
this year" view is a legitimate view of the same money. The problems are that it (a) answers a
different question than the client asked, (b) hides both the **rate** and **when the money
lands**, and (c) implies a **fixed** annual target `$Y` when phase sets the rate and phase can
change mid-year, including dropping to 1 for a missed appointment.

**`Truist LifeForce Dashboard Requirements.docx` asks for per-pay-period in three places:**
- *"Review your current phase, **an estimate of your semi-monthly medical credit**, and how to
  maintain/improve your status…"* — phase + credit + improvement bundled in **one sentence**.
- *"you may earn up to $<…> **per pay period**. When your medically enrolled Spouse or Domestic
  Partner participates… up to $<total per pay period savings for EE and SP>."*
- *"Calculate your plan's medical premiums and **semi-monthly credit amounts**."*

**Built `04c · Status — Scheduled (credit + phase tied)`** — Unified section, right of 04b
(x 4292, y 160). **04 and 04b untouched.** Strip restructured from a single horizontal row into
three full-width rows:
| Row | Content |
|---|---|
| 1 | **"$[X] per pay period"** + "Breakdown ›" |
| 2 | "Medical credit at Phase 2 of 5" + the 5-dot phase indicator |
| 3 | "Reach Phase 5 to earn up to $[amount] more per year." |

- **Standalone phase row removed from the focal card** (plus its divider/spacers) — phase now
  lives with the credit it determines. Focal card is purely the appointment; 1355 → 1330px.
- **Decorative star icon dropped** so all three rows share one left edge.

**Mixed units are inherited, not introduced.** The doc states credit **per pay period** but the
phase upside **per year**. Resolution: keep both, label both explicitly. Two dollar figures in
different denominations with nothing marking the difference is how a member expects the annual
number in their paycheck.

**Note:** 04c is cloned from 04, so it **retains the calendar button and reminder copy** — the
two variants are deliberately independent so each change can be judged alone. If both hold, a
combined frame is needed.

### D26 — v2 deck: per-phase messaging restored + pre-visit states corrected (2026-07-28)
**Decided (Davinder):** built as a **new page — "V3 — Unified v2 (phase messaging)"** — so the
Unified section is preserved unchanged.

**Trigger:** the live-product screenshot. The shipped Enrollment tab shows **no dollar figure** —
phase number, a per-phase qualitative message (piggy-bank icon), and a **Calculate** link to
premiums and semi-monthly credit amounts. Two gaps surfaced against our build:
1. **The per-phase message was missing from screens 02–08 entirely** (survived only as generic
   copy on 01). It is the sole element connecting phase to money, and the requirements doc names
   it: *"…how to maintain/improve your status to realize a full medical credit."* A content
   omission against an explicit requirement.
2. **Calculate link** was absent from 02.

**Applied in v2:**
| Screen | Change |
|---|---|
| 02 Enrolling | Calculate row added (a member deciding whether to finish wants to know what it's worth) |
| 03 Being scheduled | Strip → "Medical credit starts after your first visit / Your phase and credit appear once your nurse visit is complete." **"Breakdown ›" removed** — nothing to break down yet |
| 04 Scheduled | Same as 03, **plus phase indicator removed** |
| 05–08 | Strip = 3 rows: "$[X] per pay period" + Breakdown · "Medical credit at Phase 2 of 5" + dots · **per-phase message** (doc wording). Standalone phase row removed from focal card |
| REF frame | All five per-phase strings verbatim from the requirements doc |

**Beyond the stated ask — pre-visit state correction.** 03 and 04 displayed **"$[X] of $[Y]
earned"**, and 04 also displayed a **phase**, before the first nurse visit. Neither can exist
then: credit begins "the first paycheck of the month following the month of your appointment"
(Truist site), and phase is assigned *from* the visit's biometrics. 03 already hid phase while 04
showed it — that inconsistency identified 04 as the error. Fixed rather than carried forward.

**Also:** `04b`/`04c` dropped from v2 (exploratory variants against the old structure; v2 absorbs
04c's approach as standard). Both remain on the Unified page. Decorative star removed from all
Status strips for a single left edge.

**Reversibility if 2.2b resolves toward the live product** (no amounts in-app): rows 1–2 lose the
dollar figure and the Breakdown link — **two text edits per screen, not a restructure.** The
per-phase message and pre-visit corrections hold under every outcome.

### D27 — Credit + Phase strip: five variants for review (2026-07-28)
**Problem (Davinder):** the D26 strip "doesn't look particularly clean or easy to understand,"
and **the relationship between the elements isn't legible.** Correct diagnosis — it listed four
facts (rate · phase · upside · breakdown link) in a flat box and stated none of the connections
between them. The member has to infer that phase *determines* rate.

**Built `EXPLORE · Credit + Phase strip — 5 variants`** on the v2 page (x 4292, y 160), beside the
phase-strings REF frame. Same four facts, five information structures:

| | Direction | Mechanism |
|---|---|---|
| **A** | Says the relationship out loud | One sentence — "You're at Phase 2 of 5, earning $[X] per pay period." Grammar carries causality. No dots, no split |
| **B** | Two facts side by side | Rate and phase equal weight, divided by a rule; relationship = adjacency |
| **C** | Phase leads, money follows | Phase is the subject, credit its consequence — **matches the live product's hierarchy** |
| **D** | Money hero, one caption | Amount + a single line carrying phase and upside |
| **E** | No amounts in-app | Phase + message + calculator link. **Zero dollar figures** — what ships today and what D'Arcy's 7/24 sync asked for |

**Recommendation: A**, with **E** as its counterpart if 2.2b resolves toward the live product.
A directly fixes the named problem — causality stated rather than inferred — and has the fewest
parts of any amount-showing option. **C is the serious alternative**: it orders things the way
the shipped product does, and product parity is the ticket's whole purpose.

**Rejected: B** — a column split plus a divider plus a message line is more structure for no
comprehension gain. **D** looks cleanest but leans on a "·" to carry the relationship, which is
the failure mode we're fixing.

**Note:** E doubles as the design proof for §2.2b — it shows what the strip becomes with no
dollar figures, so that decision can be made against a real artefact rather than in the abstract.

### D28 — Variant A adopted for the credit + phase strip (2026-07-28)
**Decided (Davinder):** of the five D27 variants — **A is strongest, C a close second, E the
safest.** A applied across the v2 deck (screens **05–08**); C and E remain on the EXPLORE board.

**A as built:**
1. `You're at **Phase 2 of 5**, earning **$[X] per pay period**.` — 16/22 SF Pro Display, ink with
   navy on the two key values. Grammar carries the causality that the D26 strip left to inference.
2. `At Phase 5 that rises by up to $[amount] a year.` — 12/16 slate.
3. `See the breakdown ›`

**03/04 keep the pre-visit treatment** (D26) — no phase, no amounts before the first visit.

**Three consequences to resolve:**
1. **A's line 2 is not the requirements doc's wording.** Doc Phase 2: *"You are making progress.
   Save up to $[amount] more per year if you improve your health and reach LifeForce Phase 5."*
   A compresses it to roughly half. **If verbatim is required, A grows by a line** and its
   advantage over C narrows. → Ask whether the doc strings are contractual or directional.
2. **Phase 5 needs its own line 2.** The doc's Phase 5 string is a congratulation with *no*
   delta — there is nowhere higher. Phases 1–4 share one pattern; 5 needs e.g. *"You're at the
   top phase, earning the full credit."*
3. **A drops the 5-dot indicator.** D18/D19 established the dots as the intentional de-emphasized
   phase treatment; A states the phase in words instead. Judged an improvement — "Phase 2 of 5"
   in a sentence is more legible than dots a member must decode — but it **supersedes D18/D19 on
   this point.** C retains the dots if that's preferred.

**Reversibility unchanged:** if §2.2b resolves toward no-amounts, A swaps to **E** — the strip is
replaced wholesale rather than edited, but only on four screens.

### D29 — Variant F adopted: C's structure + A's sentence — SUPERSEDES D28 (2026-07-28)
**Decided (Davinder):** A read clearly but **scanned badly** — three left-aligned lines of near
equal weight in a flat box, with the dollar figure buried mid-sentence and nothing for the eye to
land on. A member glancing at a dashboard is scanning, not reading.

**Diagnosis:** A's real contribution was **the sentence**; C's was **the structure**. F takes both.

**F as built (screens 05–08 + on the EXPLORE board):**
1. Eyebrow `LIFEFORCE PHASE` + 5-dot indicator, right-aligned
2. **`Phase 2 of 5`** — 20/26 SF Pro Display, ink. The scannable anchor.
3. `That earns you **$[X] per pay period**. Reach Phase 5 to earn up to $[amount] more a year.`
   — 12/16 slate, with the amount darkened to ink so it stays findable without becoming the headline
4. `See the breakdown ›`

**Why F over A — alignment with the original content:**
- **Order matches the requirements doc** — *"Review your current phase, an estimate of your
  semi-monthly medical credit, and how to maintain/improve your status."* Phase → credit →
  improvement. A inverted this and buried phase mid-clause.
- **Matches the live product's hierarchy** — a standalone phase tile with the message beneath.
  Product parity is the ticket's purpose.
- **Holds the verbatim doc strings.** They are written *to* a phase ("Congratulations on reaching
  LifeForce Phase 4!"); F gives them a phase headline to sit under, so if verbatim proves
  contractual (§2.2c) F absorbs it by swapping one line. A had to compress them.
- **Dots retained → D18/D19 no longer superseded.** D28's departure is withdrawn.

**Still open:** Phase 5 needs its own line 3 — the doc has no upside clause at the top phase, so
"Reach Phase 5…" must become e.g. *"You're at the top phase, earning the full credit."*

**Reversibility unchanged:** if §2.2b resolves toward no-amounts, F collapses to **E** — F already
has E's structure, so it becomes a copy edit rather than a rebuild.

### D30 — One money link, inside the strip (G1) (2026-07-28)
**Problem:** screens 05–08 carried **two money links** — "See the breakdown ›" inside the strip
(→ PDF, per D19) and "Calculate premiums & credit" as a bottom nav row (→ the LifeForce
calculator). Both are about how much a member earns; nothing in either label said which was which.

**Four options built** on `EXPLORE · Money-link placement` (v2 page, x 4292, y 1620):
| | Option | Result |
|---|---|---|
| **G1** | One link, **inside the strip** | **ADOPTED** |
| G2 | One link below the strip — the live product's literal placement | Rejected: a full-width 14px navy sentence outranks the "Phase 2 of 5" headline above it. The link outshouts the content it explains — part of why the live screen reads as unstructured |
| G3 | Keep both, labelled by destination | Only if the PDF is genuinely required — unconfirmed; the live product has no such link, so it may be D'Arcy's addition rather than a real program artefact |
| G4 | No strip link; bottom nav row only | Cleaner strip, but distance: the calculator reads as a footer utility rather than the answer to the question the strip just raised |

**Applied to 05–08:** strip link → `Calculate premiums & credit ›`; duplicate bottom nav row
removed (−64px per screen). **01–04 keep the bottom row** — none has a strip link to carry it.

**The placement is downstream of §2.2b, not independent of it.** With amounts shown, the strip
answers "how much am I earning" and the calculator is a *considered, exploratory* action ("what
would Phase 5 be worth"), which is why G4 was arguable. **If §2.2b resolves toward no amounts
in-app, the calculator becomes the only place that answer exists** — it must then sit adjacent to
the content, which is what G1 already does. G1 is therefore correct under both outcomes; G4 is
correct under only one.

**Resolved (2026-07-28) — the breakdown PDF has no source.** Searched directly: `breakdown` and
`pdf` return **0 hits** across all of D'Arcy's `.dc.html` files, her V3 Review Deck, and the
requirements doc; the live product has only the calculator. Her files contain the calculator link
only. **Single origin = one line in the 7/24 verbal sync (D19).** The **"Breakdown ›" label was
ours**, invented interpreting that note — not inherited, not reviewed content. G3 is therefore
moot and G1 stands.

**What is real instead:** the requirements doc appends **"Learn more here."** to the Phase 1–4
messages (none on Phase 5). Destination unspecified, and **our phase message drops it.** That is
most likely what D'Arcy meant, and the doc attaches it to the phase message — not as a separate
link elsewhere. → tracked as §5.5.

### D31 — Money-forward strip (M1) + calculator returns to the bottom — SUPERSEDES D29/D30 (2026-07-28)
**Decided (Davinder):** anticipating that the client may want the money to lead, the strip's
emphasis is **inverted** — amount headlines, phase supports. Chosen from three money-forward
versions built on `EXPLORE · Money-forward emphasis` (v2 page, x 4292, y 3240): **M1 adopted**;
M2 (phase as a chip) and M3 (two-column, money dominant) held.

**M1 as built (05–08):**
1. **`$[X] per pay period`** — 26/32 SF Pro Display, navy. The headline.
2. `Set by your LifeForce phase — you're at 2 of 5` + the 5-dot indicator, right-aligned.
   **The relationship is preserved in words** — the demotion doesn't cost the causality.
3. `Reach Phase 5 to earn up to $[amount] more a year.`
4. **No link inside the strip.**

**Calculator moved back out (reverses D30/G1 → effectively G4).** `Calculate premiums & credit`
is now a bottom nav row **above** `About LifeForce`, in the same row treatment. Davinder's call
on the distance objection: *"I think it's okay for the distance."* The strip states the amount,
so the calculator is a considered, exploratory action and belongs with the other page-level
destinations. **Consequence:** the strip carries no interactive element at all — which is what
makes it read as clean.

**Consistency pass:** 02–04 reordered so `Calculate` sits above `About LifeForce` everywhere;
otherwise the same two rows appeared in opposite orders depending on state. 01 (Overview) keeps
its own layout, where the calculator already sits higher on the page.

**Phase prominence — resolved by inversion.** D29's concern that F made phase more prominent than
D'Arcy's "secondary, de-emphasized" intent is now moot: phase is a supporting line with quiet
dots, closer to both her intent and the live product than any version since D25.

**Strategy note recorded for the client conversation:** phase-forward tells a member *this is what
you can change*; money-forward tells them *this is what you're getting*. If the goal is engagement,
phase-forward is the stronger frame; if it's perceived value, money-forward wins. Worth asking
which they're optimising for rather than which they prefer visually.

**Note:** the D30 §5.5 finding stands — there is no breakdown PDF, so the calculator is the only
money destination and the label needs no disambiguation.

### D32 — Reverted to F everywhere — SUPERSEDES D31 (2026-07-29)
**Decided (Davinder):** after comparing the phase-placement options, reverted screens **05–08** to
the **F strip** (as built in `OPT1`). This undoes both halves of D31.

**F restored:**
1. Eyebrow `LIFEFORCE PHASE` + 5-dot indicator, right-aligned
2. **`Phase 2 of 5`** — 20/26 SF Pro Display, ink. Phase headlines the strip
3. `That earns you **$[X] per pay period**. Reach Phase 5 to earn up to $[amount] more a year.`
   — amount darkened to ink within the sentence
4. **`Calculate premiums & credit ›` back inside the strip**

**Bottom Calculate nav row removed from 05–08** — the link lives in the strip again (the D30/G1
arrangement). **02–04 keep their bottom Calculate row**, since none of them has a strip link;
Calculate stays above About LifeForce there.

**What this means:** M1's money-forward inversion is set aside, and the **phase-forward** framing
stands. Consistent with Davinder's earlier read that A/F "says the relationship out loud" and with
D'Arcy's ordering — phase first, credit as its consequence. M1/M2/M3 remain on the
`EXPLORE · Money-forward emphasis` board if the client asks for the money to lead.

**Still open from D29, unchanged:** Phase 5 needs its own third line (the doc has no upside clause
at the top phase), and whether the doc's per-phase strings are contractual or directional (§2.2c).

### D33 — Enrollment "Getting started" adopts Structure A2 (2026-07-31)
**Decided (Davinder):** the enrollment ("Getting started") Status screen adopts **Structure A2** —
a **recommended focal card placed *inside* the "Next steps" section**, followed by a **"THEN · IN
ANY ORDER"** subhead and the remaining steps as a plain list; then "Completed", Peak Health support,
About, Calculate, bottom nav (the product's full chrome).

**How we got here.** Two product-structure variants were compared (both on the real product chrome
from `02 · Status — Enrolling`, node 2411:9027):
- **A — recommended focal card:** a muted band + a prominent "Recommended" card (rationale + Start
  button) *above* the "Next steps" heading, other steps as a quiet list.
- **B — equal list:** a bigger band with a helper line, all steps equal weight, nothing promoted.

**Analysis (through Nielsen + UX laws).** A emphasizes the next **action**; B emphasizes **status/
context**. For enrollment — a first-time, completion-critical gate — guidance wins: reducing "where
do I start" friction drives completion (**Hick's** collapses the decision, **Tesler's** absorbs it,
**Von Restorff** makes the pick pop, **Zeigarnik** keeps the open task salient). B is honest to the
any-order truth and calmer but **flat/undirected** (Von Restorff violated; higher decision load).
A's flaw: it floated the recommended step *above* the "Next steps" heading, so it read as separate
from the list and created a "1 focal + 2 listed = 3?" double-count.

**A2 fixes A's flaw while keeping its guidance:**
- Recommended card now sits **under "Next steps"** → no split, no double-count.
- **"THEN · IN ANY ORDER"** subhead makes the recommendation a *suggestion*, not a required
  sequence — restores B's honesty about any-order on top of A's directiveness.
- Keeps the bold focal card + full-width **Start** (the guidance that made A worth doing).

**Rejected:**
- **A1** (recommended as an emphasized first *row* in a unified card) — the 3-column squeeze
  (icon · text · Start pill) forces the eyebrow/title to wrap; cramming the recommendation into a
  row dilutes the very prominence that justifies recommending. Compact, but self-defeating.
- **Original A** — the split/double-count above the heading.
- **B** — flat/undirected for a completion-critical first-run; better as the *returning/steady*
  model, which post-enrollment already handles via the status-forward hero.

**Also folded in (improvements over D'Arcy's ref):** real Peak Health number **1-888-385-4583**
(ref's 252-237-5090 was a placeholder); proper step icons (not empty squares); fixed the ref's
duplicated "Program Acknowledgment"; and the **actionable-vs-inert rule** on the Completed section —
only Program Acknowledgment (**View**) and Health Assessment (**Update**) carry a link; CarePlus and
lab work are inert "Completed" records (they have no revisit action, so no false affordance).

**Scope:** this is the **phone enrollment ("Getting started") state** structure only. Post-enrollment
(scheduling → scheduled → active → renewal) uses the **status-forward hero** treatment (status leads,
enrollment demoted to a footer) — the hierarchy deliberately inverts at the enrollment→active hinge.
Built as the canonical progression (3/2/1 left) on page **"Enrollment · A2 (locked)"**; the A/B and
A-refined comparison pages are kept for reference.

**Flag:** changes the enrollment structure McGriff saw in D'Arcy's V3 (Jul 17). Terminology/structure
refinement, not an IA change (still Status tab, still Next steps/Completed) — name it to D'Arcy on
return, shouldn't need McGriff re-review.

---

### D34 — Enrollment top zone: quiet progress *header* + payoff-anchored *card* (2026-08-05)
**Decided (Davinder):** on the enrollment ("Getting started") Status screen, split the top-of-screen
work between two elements with distinct jobs, and reframe the copy:
- **Progress header** — a **separate, low-emphasis zone** that owns *aggregate progress + the finish
  line*. Canonical treatment = a **contained progress chip** (~62px): a **`Mub` warm-neutral container**
  with a flag icon, eyebrow **"Getting set up"**, **"1 of 4 done"**, a thin progress bar, and one
  finish-line line: **"Then Peak Health books your first visit."** Kept **separate** from the action
  card — folding it into the card was rejected (couples progress to a card whose role changes at
  handoff). Rejected the chrome-less strip and the loose ~139px block; Davinder chose *contained but
  compact*.
  - **Eyebrow = "Getting set up," not "Enrollment."** Plain-language / member's-mental-model
    (Nielsen match-to-real-world) + active tense that pairs with the live progress bar. "Enrollment"
    is the internal/admin term. (Flip only if "Enrollment" is already the word the member sees in the
    opt-in flow — then match for consistency.)
  - **Finish-line line = "Then …," not "Next …."** "Next" collided with the card's "DO THIS NEXT"
    (two nexts, two referents). "Then" reads as *after the 4 steps*, completes the chip's whole
    sentiment ("getting set up → then your visit"), and relieves an unspoken anxiety — the member
    doesn't have to schedule; **Peak Health books it**. Its job is **orientation/expectation-setting**,
    not motivation (motivation/payoff lives on the card). Rejected "Finish all 4 to book your first
    visit" (frames the visit as a *prize to earn* — but the visit is a gate, not the reward).
- **Action card (focal)** — owns *the next action + why it's worth it*. Copy carries the **payoff**
  ("…the first of the steps that **unlock your credit**. About 3 min.") and **drops the step-count**.

**Why (grounded in the motivation model — page "Journey · what members care about").** Enrollment
sits at the bottom of the **motivation valley**: the member is spending effort while the payoff (the
credit, the nurse, the plan) is still abstract. So (a) the screen must **import the payoff** onto the
thing they tap → payoff lives on the card; (b) the member's in-head question is *"how far am I / am I
nearly done"* → a **progress cue** answers it → that's the header's job. Splitting the two removes the
redundancy where header and card both narrated "steps → visit," and stops them **disagreeing in tone**
(header counts *forward* "1 of 4 done"; the old card counted *backward* "2 more steps until…").
Framing flipped from **remaining-effort** ("3 steps *until*…") to **momentum** ("1 of 4 *done*") —
goal-gradient. Nielsen: visibility of system status (the bar); match-to-mental-model (answers the
valley question).

**Rejected:**
- **Green-filled banner header** (D'Arcy ref / first revision) — (1) the fill keeps it reading as a
  *banner* that competes with the focal card for the eye; (2) **green means *done*/positive**, so using
  it mid-setup (1 of 4) over-signals success. **Green is reserved for the 100% handoff state only.**
- **Neutral-but-loose block (~139px)** — de-coloring without tightening isn't real de-emphasis; it's a
  pale rectangle that still shoves the card down. Quiet must be *structural* (compact), not a repaint.
- **Folding progress into the card** (single unified object) — most minimal, but **couples** progress
  to the card, so at the handoff/visit-booked states (where the card becomes a waiting/hero card) the
  progress must be surgically moved. Separate header stays disposable; card stays permanent.

**Header lifecycle (page "Enroll · header lifecycle").** The progress header exists **only during the
4-step window**: owns progress (A: 1/4 → B: 3/4), **flips to a 100% green handoff** when all steps are
done (C: label→green, bar full, sub-line → "Peak Health will reach out to book your first visit," card
loses its button and becomes a *waiting* card), then **retires entirely** once a first visit exists
(D onward) — a **status hero** (booked visit / phase) takes the top; "Getting started · 4 of 4
complete" demotes to a footnote. Header never lingers as dead chrome.

**Working screens.** Locked composition built across the three window sizes (Compact 375 / Expanded
1040 / Extra-large 1440) on page **"Enroll · working screen (L-register)"** — L-register = white +
`Mub` warm-neutral surfaces, **Ocean 1500 `#103459`** as the only accent, Grey ink, one shadow on the
focal card. **Polish still open:** cap the desktop **main column max-width (~640)** so the Start button
and body copy don't sprawl at 1040/1440.

**Caveat (content, needs sign-off):** the card's **"unlock your credit"** line is the one reward-related
phrase — keep it as the *only* place the credit is mentioned on this screen, and get D'Arcy/client
sign-off on wording (per-pay-period credit, no $ amounts in-app — see open questions).

---

### D35 — Phase card (post-first-visit): reflects health, no $ in-app, no climb (2026-08-05)
**Decided (Davinder):** the LifeForce Phase display (Status tab, once active) is a **calm status
reflection**, not a reward hero or a progress ladder. Spec:
- Eyebrow **"LifeForce phase"** + **position dots** (current phase highlighted as a "you are here"
  marker — NOT a bar filling toward 5) + **"Phase 2 of 5."**
- "This reflects where your health is today. Your phase can change over time as you work with your
  nurse." — honest that it moves, no threatening language.
- "Your phase sets your medical credit each pay period." + link **"See your amount in the
  calculator."** — the credit is described qualitatively; the **number is never on-screen**.
- Two variants built (A full / B compact); **A recommended.** Applied to **clones** of states 06/07
  on page **"Status · 06–07 phase card (v2)"** — originals left intact.

**Why (grounded in `_brief.md`, "Authoritative process — Truist site," verified 2026-07-24):**
- **No dollar amounts in-app** — brief: "the points are dollar incentives paid directly into
  payroll… do not surface dollar amounts in-app." The number lives in the LifeForce benefits
  calculator / PDF.
- **Don't over-emphasize progression** — brief: "users may never reach Phase 5, so the UI must not
  over-emphasize progression." So position-marker dots, no "reach Phase 5" CTA. (This is the opposite
  of the enrollment chip, where the 4-step bar *should* fill — a finite task vs. an open-ended health
  status.)
- **Phase can go down** (biometrics at next assessment + hard compliance deadlines: miss labs / miss
  appointment >60 days → Phase 1). The card acknowledges movement calmly; the **urgency lives in the
  notification banner** ("Book by Aug 30 to keep your phase"), which the brief names as the single
  most important post-enrollment element — not a credit hero.
- **Delivery = per pay period (semi-monthly), not annual**; earned by attending nurse visits, amount
  set by phase.

**Rejected:** the peach **"$[X] per pay period · Reach Phase 5 to earn up to $[amount] more a year"**
banner (states 06/07) — breaks the no-$ rule AND the no-climb rule, and the peach fill is off the
standardized `Mub` warm-neutral.

**Follow-ups flagged (not yet fixed):**
- ~~The **"Maximize your credit"** dependent card still shows "$[amount] more per pay period"~~
  **RESOLVED 2026-08-05:** reworded to "…it can increase your medical credit each pay period" (no $),
  across all 4 live states that carry the card + both v2 clones. States are now $-free in-app.
- Reconcile **per-visit vs per-pay-period** framing and confirm whether **earning resets annually**
  (D'Arcy "not fully confident — OPEN").

---

### D36 — Post-enrollment page hierarchy: action/message primary, phase secondary (2026-08-05)
**Decided (Davinder):** on every post-enrollment Status page, the order is **primary (what needs
attention) → phase (secondary status) → enrollment (footnote)**. The phase is never the lead just
for being the phase.
- **Primary = whatever needs attention now**, and its *loudness scales with urgency*:
  - **Overdue / phase-at-risk** → **ember alert** (negative semantic), loudest. (State 11)
  - **Deadline due soon** → **amber notice** (Orange). (State 08)
  - **Milestone** (first visit done) → **navy focal** card. (State 06)
  - **Steady, nothing pending** → **calm status** (hairline card, link not button). (State 07 — see flag)
- **Phase = secondary status**, demoted *below* the primary, quiet **Mub 100** status zone,
  position-marker dots, no $ (per D35).
- **Completed enrollment = footnote** (collapsed "Complete · 4/4").

**Why (brief):** "Once enrollment is done, the notification/banner area (appointment · dependent ·
HA-due · nurse action) is the single most important element on the page and must clearly stand out —
it, not a credit/$ hero, is the anchor." Plus: don't over-emphasize the phase (users may never move
it). The skeleton also echoes enrollment (status chip on top, action card below → status card,
primary card) for a consistent mental model across the journey.

**Applied (live):** reordered **06, 07, 08, 11** so the primary card sits above the phase card, and
set the phase-card background to **Mub 100** on all four. Demonstration board: page **"Post-enroll ·
hierarchy across 3 states."**

**Flags / not yet done:**
- **07 (steady)** still uses the loud navy-bordered active card; per the rule it should be the *calm*
  treatment (hairline + link) since nothing is pending. Softening needs an instance-level restyle
  (shared `focal/active` component with 06, which should stay loud) — deferred, not blocking.
- Remaining edge states (**05, 09, 10, 12**) not yet swept — apply the same reorder.

---

### D37 — Lab-order-form CTA is a Peak Health hand-off, not an in-app download (2026-08-06)
**Decided:** the "Complete lab work" action (enrollment step 3 / state 02, and the labs-due deadline
state 08) is a **hand-off to the Peak Health portal**, not an in-app file download. Copy set to
match D'Arcy's V2 flow: body = *"Sign in to Peak Health to download your lab order form, then take it
to any Quest or LabCorp…"*, button = **"Get your lab order form"** (names the outcome; the body names
the mechanism). Source: `LifeForce Enrollment v2.dc.html` — *"You'll be signed in securely to the
Peak Health portal to download your lab order form. Bring it to any Quest or LabCorp location, or to
your provider."*

**Rejected:** the bare **"Download lab order form"** label (implies an in-app download; misleads about
where the file actually comes from).

**Open spec for D'Arcy / Peak Health / eng (verify before handoff):**
- Does the sign-in **deep-link straight to the lab-order-form download**, or just land the member on
  the **Peak Health portal home** (leaving them to hunt for it)? If portal-home, the label over-promises
  and should become "Go to Peak Health to get your form."
- Is it true **SSO from CarePlus** or a manual login? ("signed in securely" implies SSO — unconfirmed.)
- Not verified against the **legacy product** (those uploads are images) — confirm the current product
  offered this if it matters.

---

### D38 — The step list must separate one-time steps from recurring ones (2026-08-06)

**Decided (Davinder):** the four-step list is modelled as a one-time sequence that completes
permanently. The documented program says only half of it works that way.

**The documentation.** Truist benefits site (`_brief.md` → "Authoritative process") defines six
participation steps: 1) CarePlus account · 2) Program acknowledgment · 3) Lab work · 4) Annual
Health Assessment · 5) Nurse appointment · 6) **Prepare for next appointments — cadence set by
phase.** Step 6 is the recurring cycle. D'Arcy confirms the renewal path: **no re-register, no
re-acknowledge — just redo the assessment (and labs every other year).**

So steps **1–2 complete once and stay complete**; steps **3–4 recur**; step 5 recurs at a
phase-set cadence. **Renewal re-enters at step 3, not step 1.**

**The defect this produces.** Every post-enrollment screen shows `Complete · 4/4` with ✓ Health
Assessment and ✓ Complete lab work. Neither is ever permanently complete. On screen 11 the same
screen carries "Health Assessment is overdue" above "✓ Health Assessment" — a member is told a
task is simultaneously done and overdue. That is not a copy slip; it is the data model asserting
something the program contradicts.

**Applied:** screen 11 banner now reads "Your **annual** Health Assessment is overdue", matching
the phrasing screen 09 already used. The word "annual" appears **once** across all 17 screens.

**Still to do — the structural fix.** Split the list into two groups:

| Group | Steps | Behaviour |
|---|---|---|
| Getting started | CarePlus account · Program acknowledgment | Completes once, stays complete |
| Your yearly requirements | Lab work · Health Assessment | Shows next-due date, never "done" permanently |

**Rejected — keep one list and fix the copy only.** Tempting because it is cheap, but the
contradiction returns every renewal cycle. The list would still claim four permanent completions
while two of them expire.

**Depends on:** D19 conflict #1 (labs cadence — D'Arcy biennial vs Truist per-appointment) is
still open. The grouping holds either way; only the due-date arithmetic changes.

**Status.** direction-locked. Copy fix applied; grouping not yet built.

### D39 — Segmented control during Getting started: escalate, don't remove silently (2026-08-06)

**Decided (Davinder):** two separate calls, deliberately separated because they carry different
levels of risk.

**(a) In scope now — delete the button on Progress-locked.** D19 already decided this: *"No extra
button needed — redirect to enrollment tab is fine."* It has not been implemented; the screen
still carries "Go to Status". Remove it.

**(b) Escalated, not decided — hiding the control during Getting started.** The evidence is
strong, but this is an IA change and D13 governs those: *"v4 collapses the two-tab split — an IA
change requiring D'Arcy + McGriff + Ren sign-off, not a silent change."* v3 shipped for the August
window precisely because it carries no IA risk.

**The evidence, for that conversation:**

| Measurement | Consequence |
|---|---|
| The control appears on **all 12** status screens | Half the feature's navigation is permanently visible |
| Progress unlocks only after the nurse visit (screen 06) | It is inert for screens **01–05** — all of Getting started and scheduling |
| `Progress · locked` offers exactly one action: "Go to Status" | The tab's only affordance undoes the tap that reached it |
| Screens 06, 07 and 12 carry a **"Go to My Progress" button** | Once it works, a second path to it already exists |

**Dead when it doesn't work, redundant when it does.**

**The counter-argument, which is fair.** A visible locked tab advertises what is coming and gives
the member a reason to finish. That intent is right. It does not require a navigation slot —
the same promise can sit on the Status screen, where the member already is, at the moment it
motivates. `Progress · locked`'s own copy is the content.

**Rejected — remove the control unilaterally.** It is within our technical reach and outside our
authority. D13 named the sign-off path; using it is the point.

**Status.** (a) direction-locked — remove the button (D19, already agreed).
(b) **SUPERSEDED by D46 (2026-08-06).** This entry originally closed as "the control stays";
provenance work later that day reversed it. Retained for the audit trail. Original text: *Not pursuing removal.* The two-tab
structure is the accepted direction under D2 and McGriff has seen it; reopening the IA for a
five-screen inefficiency is not worth the sign-off cost or the client churn in the August
window. The evidence above is retained for the v4 conversation if the tab split is ever
revisited on its own merits — it is not a reason to revisit it now.

### D40 — Six V3 screens were never carried into the Figma set (2026-08-06, CORRECTED)

> **Corrected 2026-08-06.** The first version of this entry said these states "have never been
> designed." **That is wrong.** They exist in D'Arcy's V3 — `projects/feature-lifeforce/LifeForce
> enrollment flow/exports/`, the 16 rendered screens McGriff saw on Jul 17. They were verified
> absent from the *Figma* set and I wrongly concluded they were absent from the *project*. The gap
> is **carry-forward, not design**. That materially changes the ask: the work exists.

**Decided (Davinder):** the Figma `final` set is missing six screens that D'Arcy's V3 already has.

| V3 export | In Figma? |
|---|---|
| `01-overview-unenrolled` — the **About LifeForce / opt-in page** | **No** |
| `12-step1-careplus` · `13-step2-acknowledgment` · `14-step3-labwork` · `15-step4-health-assessment` | **No** — Figma has one generic `Enrollment — detail`, not four |
| `16-home` — the Home-card entry point | **No** |

Conversely the Figma set **extends** V3 on deadline coverage: V3 has only `06-status-ha-due`, while
Figma adds labs-due, missed-visit and overdue-at-risk. So the two sets are complementary, not
one-way — Figma went deeper on the recurring cycle and dropped the front door and the step details.

**Still genuinely undesigned** (absent from *both* sets):
- **"Submitted / awaiting Peak confirmation"** for steps 2–4 — the interval where the member has
  done the thing and the app still shows it undone. Nothing anywhere covers it.
- **"Can't schedule until all steps complete."**
- **Dependent invite "email sent" confirmation** (D'Arcy already logged this as a known gap).

**Blocking issue on the About page before it can be carried over.** `01-overview-unenrolled`
predates D19 and D14 and carries three things they overturned:
1. **"Enroll & earn 200 points"** as the primary CTA, and again in the Earning-potential body —
   D19: points are per-nurse-visit payroll dollars, not an enrollment reward.
2. **"Earn up to $[Y]/yr"** chip and **"up to $[Y] a year"** — D19: no $ amounts in-app.
3. **"monthly medical credit"** ×3 — D14: credit is **semi-monthly / per pay period**, not monthly.

**Real question this raises, for Davinder:** D19 says "no $ amounts in-app," but D19 *also* says
"all program rules should be explained on the intro/About page." Those collide. The About page is
pre-enrollment explanation, not the ongoing dashboard — arguably the one screen where an earning
figure belongs. **Does the no-$ rule apply to About?** Not decided here.

**Priority order and why.**

1. **Carry the About page across** — highest leverage and the work is already done, subject to the
   three corrections above. It is also where D38's recurring-vs-one-time distinction should first
   be taught.
2. ~~**Carry the four step detail pages across.**~~ **SUPERSEDED by D47** — the four completed-state
   pages are consolidated into one `Enrollment — detail` screen. The *incomplete* case is still open;
   see D47.
3. **Design the awaiting-confirmation state** — genuinely new, and the only gap that actively
   misinforms the member.
4. **Can't-schedule-yet** — a one-line clarification inside Getting started.
5. **Email-sent confirmation** — smallest; already a known gap.

**Method note for the file:** I assessed the Figma set without opening `exports/`, and reported
absent-from-Figma as absent-from-project. D'Arcy's V3 is the version McGriff saw and the thing
D18 says we rebuild faithfully — it should be read before any coverage claim.

**Status.** draft — needs scoping against the Aug 1–31 config window before commitment.

### D41 — Brand `slate` retired as a text colour (2026-08-06)

**Decided (Davinder):** `#6E7A7D` is withdrawn for text. Replaced with **Grey 1100 `#5F5F5F`**.

**Why.** Measured against its actual backdrops, not white-by-default: **4.43:1 on white** and
**3.92:1 on the pale-blue biometric tiles**. Both under the WCAG AA floor of 4.5:1. It appeared on
55 text nodes across the set. Grey 1100 measures 6.39:1 and 5.65:1 on the same two surfaces.

MHC Brand Guidelines v1.2 designates slate as *"Body text on light, muted UI"* — so this is a
**brand-level defect, not a LifeForce one**. Also swapped `#57882E` → Green 1200 `#3D7A3E`
(4.23:1 → 5.18:1), 9 nodes. Result across the set: **64 failing text nodes → 0.**

**Corroborated independently.** The 5 Aug brand↔palette merge recommended retiring slate on
unrelated grounds — ΔE 5.67 from its nearest palette stop, and a cool cast that fights the warming
direction (`outputs/aug05-mh-brand-palette-merge/`). Two separate lines of evidence, same call.

**Rejected — keep slate and lighten the backdrop.** Would fix the tiles and not the 42 nodes on
plain white, and it treats a brand-wide defect as a per-screen one.

**Escalation.** This has implications beyond LifeForce and should go to whoever owns brand.

**Status.** direction-locked for LifeForce; escalate for the brand palette.

### D42 — Four missing states designed (2026-08-06)

**Decided (Davinder):** the four states identified in D40 as genuinely undesigned are now built.
Page **`V6 — new states (2026-08-06)`** in `lifeforce (share)`, on clones — originals untouched.
No new components; every screen reuses shipped instances, so it stays configurable by Ren.

| Screen | State | How it reads |
|---|---|---|
| **A** · Getting started — lab work submitted | The interval where the member has done a step and Peak hasn't confirmed | Focal becomes `SUBMITTED · AWAITING CONFIRMATION` / "Lab work submitted" / "Peak Health confirms lab results in about 3 business days. Nothing is needed from you until then." The step moves out of **Next steps** into a **SUBMITTED · AWAITING PEAK HEALTH** group. Primary CTA hidden — there is no action while waiting |
| **B** · Progress — awaiting first results | Progress unlocked, no data yet | Per D19: the Recommended-programs section and both see-all links **disappear entirely**; the four Data Cards show **"—" + "Not yet available"**. Support card stays. Date slot hidden rather than showing a lone dash |
| **C** · Getting started — scheduling gate | The rule that the first visit can't be booked early | One sentence in the focal body: "Peak Health can only book your first visit after all four steps are complete." |
| **D** · Dependent invitation sent | The missing send-confirmation | Card becomes `INVITATION SENT` / "We emailed your invitation on Jan 12… we'll update this once they do." **Button removed** — per D19 the reminder state carries no button |

**Two judgment calls worth recording.**

**Pending is not success.** Screen A's submitted row inherited the completed-row component, which
carries a **green check**. A green tick beside "Submitted · confirming" tells the member the step is
done when the whole point of the state is that it isn't. Recoloured the chip to **Grey 700
`#898989`**, white glyph. Green is reserved for confirmed.

**State the gate once.** The scheduling rule was first written into both the progress header and the
focal body. It clipped in the header slot and read as nagging. It now appears once, in the focal
body, where the member is already reading about the current step.

**Known limitation.** Screen A repurposes the single-row Completed group, so the CarePlus completed
row isn't shown alongside the submitted one. Showing both needs either a third list group or a
detached instance — deliberately not done, to avoid breaking the component link before Ren configures.

**Not built:** large form (Web/Angular) — paused pending the HTML, per the 2026-08-06 disposition.

**Merged into the flow (2026-08-06).** The board on `final` now runs **20 screens**, up from 17.
Pre-change state archived to page `Archive — final before new states (2026-08-06)`.

| Position | Screen | Type |
|---|---|---|
| after 02 | `Status · 02b Lab work submitted` | **new state** |
| after 07 | `Status · Dependent invitation sent` | **new state** |
| after `Progress · locked` | `Progress · awaiting first results` | **new state** |

Board and title row are both horizontal auto-layout at 200 spacing, so the three title chips were
inserted at matching indices and everything re-aligned without manual positioning.

**The "scheduling gate" turned out to be the wrong fix.** Checking the copy before writing it: screen
01 already says *"Then 2 more steps until Peak Health books your first visit"* — but **02 and 03 drop
the visit entirely** ("Then 1 more step to go", "…a few questions about your health and history").
So the member loses sight of what they are working toward at exactly the point they are closest to it.
That is a **D22 inconsistency**, not a missing warning: the countdown-to-visit framing D22 established
only ever landed on screen 01. Adding a legalistic "we can't book until all four are done" sentence
would have been redundant on 01 and beside the point on 02–03.

**Applied instead:** restored the countdown on both.
- 02 → "…so start this early. **Then 1 more step until Peak Health books your first visit.**"
- 03 → "…about your health and history. **It's the last step before Peak Health books your first visit.**"

All three getting-started screens now name the visit. No separate scheduling-gate screen was needed.

**Still owed, and deliberately not built as screens:**
- **Steps 2 and 4 need the same "submitted" treatment** as step 3. The right build is a **variant of
  the step row**, not three near-identical screens.
- **The invite card needs a proper "sent" variant.** It appears on 04–07; screens 08–12 already carry
  a third state ("your dependent completed their Health Assessment"). Invite → sent → completed is a
  three-state component, and only two of the three exist.

**Status.** draft — for review.

### D43 — Dependent card consolidated into one three-state component (2026-08-06)

**Decided (Davinder):** the dependent nudge was **two unrelated components doing three jobs**, with
the middle one missing:

| Was | Instances |
|---|---|
| `Card/Maximize-credit` — the invite state | 11 |
| `Card/Dependent-done` — the completed state | 11 |
| *(nothing)* — the sent state | — |

Combined into **`Card/Dependent`** with a single `State` property: **Invite · Sent · Completed**.
All 22 existing instances survived the merge and re-bound to the correct variant (11 Invite,
11 Completed); verified by instance count before and after. The new `Status · Dependent invitation
sent` screen now points at `State=Sent` rather than carrying a manual override.

**Sent carries no button** — per D19, the reminder state has no action; the member has already done
the thing and is waiting on someone else.

**Fixed at source while in there:** the Invite master read *"you could earn up to **$[amount]** more
per pay period"* — a dollar figure, which **D19 forbids in-app**. Board instances had been overriding
it, so the violation was invisible on screen but would have been inherited by every new instance.
Master copy now reads "it can increase your medical credit each pay period." **No `$` remains anywhere
in the set** — verified.

### D44 — The step "submitted" state is an override pattern, not a variant (2026-08-06)

**Decided (Davinder):** deliberately **not** building a variant for it, having looked at the structure.

The step rows are plain `FRAME`s inside the `List` component set, and `List`'s only property is
**row count** (`Property 1 = 1 / 2 / 3 / 4`). Adding a state axis would mean either:

- **a second property on `List`** → 4 counts × 3 states = **12 variants** for one nudge, or
- **a new row component** → prohibited by D3's escalation rule (*"no new components"*, `A_Stepper`
  is a stub and was rejected for the same reason).

Neither is worth it. The state is fully expressible as instance overrides, which is what
`Status · 02b Lab work submitted` already does:

**Recipe — a step awaiting Peak confirmation**
1. Group label → `SUBMITTED · AWAITING PEAK HEALTH`
2. Row meta → `Submitted {date} · confirming`
3. Status chip → **Grey 700 `#898989`**, white glyph — *not* the green success chip
4. Remove the step from **Next steps** so it does not appear twice
5. Hide the focal primary CTA — there is no action while waiting

**Rule this establishes:** green means *confirmed by Peak*, never *sent to Peak*. Steps 2 and 4 use
the same recipe when they need it; no new screens required.

### D45 — Step list split into one-time and recurring groups (2026-08-06) — D38 BUILT

**Decided (Davinder):** the D38 structural fix is now in the flow. The single `ENROLLMENT ·
Complete · 4/4` card is replaced by **two groups** on all 10 post-enrollment screens:

| Group | Steps | Header | Marker |
|---|---|---|---|
| **GETTING STARTED** | CarePlus account · Program Acknowledgment | `Complete · 2/2` (green) | Green ticks — genuinely, permanently done |
| **YOUR YEARLY REQUIREMENTS** | Lab work · Health Assessment | `Next due Jun 30` (neutral) | **Empty circles — no tick** |

**The tick is the point.** A tick means done. Labs and the Health Assessment are never done — they
come round again — so they get an empty circle and a due date instead. The old card gave all four
steps the same green tick, which is what made screen 11 claim the Health Assessment was
simultaneously complete and overdue.

**Screen 11 now reads coherently** for the first time: banner "Your annual Health Assessment is
overdue" → `YOUR YEARLY REQUIREMENTS · Overdue · Jun 30` in Ember 1300 `#B12907` (6.58:1 on white).
The word "annual" also reached this file — the earlier fix had been applied to `lifeforce`
(`etUEI…`) and never carried over when the work consolidated into `lifeforce (share)`.

**Verified:** `Complete · 4/4` no longer appears anywhere in the flow.

**Built with existing components** — the recurring group is a second instance of the same enrolment
card with rows hidden and retexted. No new component, so D3's escalation rule holds and Ren
configures it the same way as the original.

**Copy note.** Per-row dates ("Lab work · with next visit", "Health Assessment · Jun 30") were tried
and dropped: the row text node is 122–125px wide, so anything past ~20 characters wraps to two lines
and the group loses its scannability. The header carries the date instead.

**Open:** the labs row says "Lab work" with no cadence, because the cadence is still unresolved
(D19 conflict #1 — D'Arcy biennial vs Truist per-appointment-cycle). Once settled, the row can carry
its own timing.

**Also cleared:** the `V6 — new states` working page was deleted. Three of its four frames are live
in the flow; the fourth (`C · Getting started — scheduling gate`) was the approach abandoned when the
real fix turned out to be restoring the countdown copy on screens 02 and 03.

**Status.** draft — for review.

### D46 — Segmented control renders only when My Progress has content — SUPERSEDES D39(b) (2026-08-06)

**Decided (Davinder):** the `Status | My Progress` segmented control **does not appear until the
first nurse visit unlocks My Progress**. Before that, Status is the whole screen. The
`Progress · locked` screen is retired.

Scope is the **segmented control inside the feature only**. The app-level bottom nav (Home ·
Digital Care · Wellbeing · Benefits · Rewards) is untouched.

**Why this reverses D39(b).** That closure rested on two premises, and tracing the provenance broke
both:

1. *"The two-tab split is inherited, so members keep a structure they know."* **Only partly true.**
   The production dashboard shows **no tabs at all when unenrolled**; they appear once a member opts
   in. So the locked-progress-tab-for-unenrolled state has **no production precedent** — production
   already hides it.
2. *"It's a documented requirement."* **It isn't.** The Truist benefits site — the authoritative
   source for program mechanics — says nothing about tabs or a progress surface. The requirement
   traces to exactly one place: **D'Arcy's V3** (`09-progress-unenrolled.png`, plus his sync note).
   And his own wording is *"Zero state if enrollment incomplete (**redirect back to the enrollment
   tab is fine** — no extra button)"* — which is not a defence of a locked screen. Redirect is the
   weaker claim, and he made it himself.

**Where this sits against the three known positions:**

| | Unenrolled | Enrolling (01–05) | Post-first-visit (06+) |
|---|---|---|---|
| Production today | no control | control shows | control shows |
| D'Arcy V3 | control + locked screen | control + locked screen | control shows |
| **D46 (this)** | **no control** | **no control** | control appears |

Unenrolled matches production outright. Screens 01–05 go further than production — deliberately.
Across those five states the control is inert: My Progress holds nothing until the nurse visit, and
its only affordance was a button returning the member to where they started.

**Rejected — keep the locked screen as an advertisement.** The argument that a visible locked tab
motivates completion is fair, but it does not need a navigation slot. The promise copy — *"Your lab
results, goals, and nurse guidance appear here after your first nurse visit"* — moves to the Status
screen, where the member already is and where it can actually motivate.

**Rejected — redirect instead of hide.** D'Arcy's own middle option. Cleaner than a locked screen,
but it still spends a nav slot to teach the member that the slot is empty. If the answer to a tap is
always "go back", the control should not be there.

**Not the v4 collapse.** D13 gates *collapsing the two-tab split* behind D'Arcy + McGriff + Ren. This
is not that — the split survives intact for enrolled members past their first visit. It is
conditional rendering of the control, a strictly smaller change.

**Flag, per D22 precedent.** This originates in D'Arcy's concept and McGriff saw that concept on
Jul 17. It is a navigation change, not a terminology one, so **raise it with D'Arcy on his return —
named, not slipped in.** Davinder's call stands; the notification is continuity, not permission.

**Downstream — applied 2026-08-06:**

| Change | State |
|---|---|
| Control hidden on **01, 02, 02b, 03, 04, 05** | done — verified pre-visit screens show none, 06 onward show it |
| `Progress · locked` retired from the flow | done — screen and title chip removed; flow is **19 screens**, 19 titles, 0 misaligned |
| "Your progress is locked" copy gone | done — verified absent from every visible node |
| Promise relocated to Status | done — on **04** ("After the visit, your lab results, goals and nurse guidance appear in My Progress") and **05** ("Afterwards your results, goals and nurse guidance appear in My Progress") |

**Placement note.** The promise went to 04 and 05 rather than 01–03. On the getting-started screens
the member has tasks and the focal card is already carrying a countdown; on 04–05 they are waiting
with nothing to do, which is exactly when "here is what is coming" earns its place. It also sits
adjacent to the visit that unlocks it.

**Still outside this file:** the deck slide *"Locked zero state"* (MY PROGRESS · UNENROLLED) needs
removing. It was already two decisions stale before D46 — it still carries the "Enroll in LifeForce"
button D19 deleted and the pre-D22 copy. Not editable from here.

**Status.** decided, built.

### D47 — Four completed step-detail pages consolidated into one (2026-08-06)

**Decided (Davinder):** D'Arcy's V3 ends with four separate step-detail screens
(`12-step1-careplus`, `13-step2-acknowledgment`, `14-step3-labwork`,
`15-step4-health-assessment`). We ship **one** screen — `Status · Enrollment — detail`
(`2577:3801`) — carrying all four as cards, each with its own action links.

| Step | Links on the consolidated page |
|---|---|
| Set up your CarePlus account | Manage account in CarePlus |
| Program Acknowledgment | View signed acknowledgment · Download PDF |
| Complete lab work | Download lab order form · View results in Peak Health portal |
| Health Assessment | Update Health Assessment · View your results |

**Why one page.** Once enrolment is complete, four separate screens each say "you did this" and
nothing more. D19 already specified that a **completed** step detail is *"a summary of what was
done"* — four summaries is three screens of ceremony. Consolidating keeps D7's *push down, not out*
(the detail is still one tap deeper) while collapsing four destinations into one, which also means
**one Page Layout configuration for Ren instead of four**.

The per-step links are what make it work: "re-download the assessment", "view results in the Peak
portal", "manage account in CarePlus" are the actual reasons a member returns here, and they are
reachable without a screen each.

**Supersedes:**
- `_brief.md` state #2 — *"A drill-down page for **each** enrollment step"*.
- D40 recommendation 2, which said carry all four V3 pages across.

---

**Two things this leaves open — both need a call.**

**1. The incomplete case is not covered.** D19 distinguishes them: *"Completed step detail = a summary
of what was done; **incomplete** step detail = a **primary CTA**."* This page is the all-complete
state. During Getting started the **Next steps** rows still point somewhere, and that destination
needs a per-step CTA, which one consolidated summary cannot provide. Options:
   - build the incomplete step detail per step (closest to V3 and to D19), or
   - send the Next-steps row **straight to the external tool** (Peak portal, CarePlus, in-app HA) and
     have no in-app step page during enrolment at all.
The second is fewer screens and matches what the steps actually are — hand-offs. Not decided.

**2. The page still uses the pre-D45 model.** Its subhead reads *"All four are complete — Jan 15"*
with four permanent ticks. **D45 established that only two steps complete permanently** — labs and
the Health Assessment recur. Next year "Health Assessment · Completed Jan 12" will be wrong on this
screen. Needs reconciling with the Getting started / Your yearly requirements split.

**Config note for Ren.** The frames carry **no prototype wiring** — 0 links from the Next-steps rows,
0 links into `Enrollment — detail`. Expected for a static handoff, but the navigation intent has to be
written down somewhere for configuration, since it cannot be read off the file.

**Status.** decided — consolidation. Two follow-ups open above.

### D48 — Focal state chip: Mustard 300 lozenge for RECOMMENDED (2026-08-06)

**Decided (Davinder):** the focal card's state chip becomes a **filled lozenge in Mustard 300
`#FFE7BF` with Mustard 1600 `#87440A` text** for the RECOMMENDED state. Applied to screens 01, 02
and 03. Icon dropped from the chip so it reads as a compact label rather than a full-width pill.

**The problem it solves.** The chip already carries state across the set, but only in text colour,
and **RECOMMENDED was navy — identical to ACTIVE, SCHEDULED and SUBMITTED.** The one state that asks
the member to do something looked the same as the three that don't.

**The ladder this establishes:**

| State | Treatment | Value |
|---|---|---|
| Active · Scheduled · Submitted · Being scheduled | navy text, no fill | `#16314D` |
| **Recommended** | **Mustard 300 lozenge + Mustard 1600 text** | `#FFE7BF` / `#87440A` |
| Due | orange text | `#B43C00` |
| Action needed · Overdue | ember text | `#CA3B27` |

Calm states stay quiet, the one actionable state gets a fill, urgency escalates through hue.

**Why Mustard, not Orange.** Orange was the first attempt and it collides: `#B43C00` is *literally*
the DUE colour on screens 08–09, so "your next step" and "you're late" read as one signal.
**Mango/Mustard is ΔE 38.8 from DUE and 40.9 from OVERDUE.** The tint level does its own work too —
a pale wash reads as a label, a saturated amber reads as caution.

**Why 300 and not the proposed 350.**

| | Mustard 300 | Mustard 350 |
|---|---|---|
| Text contrast | **6.09:1** | 5.76:1 |
| Visible on the white card | ΔE 15.65 | ΔE 19.02 |
| Exists in the palette | **yes** | no — needs a new tier |

300 wins on contrast *and* removes the dependency: the tag ships without waiting on a design-system
change. The 3.86 ΔE of extra presence 350 would give is immaterial at 11px with dark text inside.

**Brand basis.** Mango `#F3B31E` is a brand tertiary and maps to Yellow 1000 `#F1B500` at ΔE 1.92 —
brand-grade. Mustard 300 is the light end of the same warm family.

**Rejected — pale teal `#A1D2D8` / `#195188`.** Passes at 4.94:1 and is brand-adjacent to sky-blue,
but it puts a fifth blue on a screen where navy already carries brand, action, link and eyebrow.
Accent discipline already scores 3/10; this made it worse.

**Rejected — white on saturated orange/amber.** The original explorations measured **2.64:1**
(`#E4893F`) and **1.92:1** (`#E7B347`). Both are hard AA failures. The component is named
*"Lozenge - **Light**"* — a light lozenge is a pale fill with dark text, and these were using the
solid pattern with the light name.

**Also fixed on the exploration frames:** headline `25/Semibold → 25/Medium` (Heading 5) and
sub-header `14/Semibold → 14/Medium` (Title 3). Both Semibold versions were **illegal pairs** — real
size, real weight, no class pairing them. *(Hazard noted: setting `fontName` on an instance text node
reset the sibling `textCase` override and flipped sentence case back to caps; restored.)*

**Not yet applied:** the same lozenge treatment on the other RECOMMENDED-equivalent focal variants
(`Property 1=4anner`, `Property 1=5`), and the background move from `#F7F5F4` to **Mub 50 `#FAF7F0`**
— same card separation, and it is the value production already ships.

**Status.** decided, applied to 01–03.

## Open questions / escalations

- [x] **Three open items dispositioned (2026-08-06, Davinder):**
  **(a) Large form (Web/Angular) — PAUSED.** Held until the HTML output lands 2026-08-07; the HTML
  work will inform how the large form is built. Still a named DEM-35 deliverable — needs its own
  window, and it is currently the largest outstanding gap against the ticket.
  **(b) Labs cadence (D19 conflict #1) — OWNED BY D'ARCY ↔ TRUIST.** Not a design blocker: D38's
  one-time / recurring grouping holds under either cadence, and only the due-date arithmetic
  changes. Continue designing to biennial per the existing default.
  **(c) "$ on the About page" (D40) — DEFERRED TO D'ARCY on his return.** D19 says both "no $
  amounts in-app" and "About must explain all program rules"; About is pre-enrollment explanation
  rather than the running dashboard, so the rule may not apply there. D'Arcy owns the reward
  framing, so he owns this. **Blocks carrying `01-overview-unenrolled` across** — that screen
  currently shows "Earn up to $[Y]/yr" and "Enroll & earn 200 points".

- [ ] **Progress · populated — missing results route + misplaced link (2026-08-06):** the four
  Data Cards have no path to `Progress · full results`, so the 12-measure screen is unreachable.
  The link sitting directly under the results grid reads **"See all recommendations & handouts"** —
  right position, wrong destination — and the same link repeats at the bottom after the programs
  list. **Fix:** change the first to **"See all results"** → `Progress · full results`; keep the
  second where it is. Closes the missing route and the duplicate-link finding together.
  *(D5 left as written — intent is correct; this is a build gap, not a decision change.)*
- [ ] **Summary biometrics are mostly out of range and read as neutral (2026-08-06):** of the four
  measures chosen for `Progress · populated`, **three are out of range** — BP 128/82 vs <120/80,
  BMI 27.4 vs 18.5–24.9, LDL 118 vs <100. Only Resting HR passes. The colour-is-sole-carrier
  blocker is therefore the *default* state of the primary Progress screen, not an edge case on a
  secondary one. Raises the priority of marking range state.

- [ ] **Decisions ahead of the artifact (noted 2026-08-06):** four previously-agreed changes have
  not landed in the `lifeforce (share)` → `final` set. **D19:** completed steps still render as full
  cards (not the agreed compact checklist); `Progress · locked` still carries the "Go to Status"
  button D19 said to remove; empty programs/handouts sections need checking. **D22:** the checklist
  label still reads **ENROLLMENT on 9 screens** — the rename to "Getting started" only reached the
  Progress-locked copy. Verified by text search of every visible node. Worth a process conversation
  separate from the design one: decisions are being made faster than they are being applied.

- [ ] **Live date "1/1/26"** is in the past vs. today (2026-07-23) and the Aug config
  window. Confirm it means **1/1/2027**.
- [ ] **Scope vs. timeline:** all 7 states at full fidelity ×2 form factors by Jul 31 is
  a stretch — confirm priority order / what can be fast-follow (see D6).
- [ ] Assets incoming from D'Arcy (requirements doc, PDF concept, Claude WIP, test users
  in Jira) — ingest before locking content. New Health Program Figma link still needed.
- [ ] Confirm the **LifeForce Phase** scale (1–5?) and whether the phase reveal /
  visualization is in reskin scope or stays as-is text.
- [x] Recurring cadence — **resolved by the benefits site (D14):** HA annual (deadline =
  end of appointment-anniversary month); labs per appointment cycle (not biennial);
  appointment cadence set by phase. Still need exact **$ amounts** + the calculator logic.
- [ ] **Large form (Web/Angular) does not exist yet** — D'Arcy built the phone (392px)
  prototype only. This is the biggest remaining design gap and a ticket deliverable.
- [ ] **Figma production path.** Deliverable is Figma; D'Arcy's work is `.dc.html`
  (Claude Design runtime), not Figma. Decide who rebuilds it in Figma (Isabel?) and
  whether small-form Figma is a rebuild from the prototype/exports.
- [ ] **HTML for Ren.** The `.dc.html` files depend on the Claude Design React runtime
  (`support.js`) — not directly configurable. Ren needs portable static HTML per state
  (Django/CodeMirror). Plan to extract clean per-state HTML from the prototype.
- [ ] Real values: `$[X]` / `$[Y]` / `$[amount]` and phase/credit copy are placeholders
  throughout — fill from requirements before any handoff.
- [x] **Warm-tint consistency (phase card — resolved 2026-08-05):** the phase card fill moved from
  amber cream `#FFF6E1` → **Mub 100 `#F3F2EF`** on live 06 + the v2 clones. Color-theory basis: the
  problem was **chroma, not hue** — amber's higher chroma spiked the warm surface out of the 30
  (surface) band into the 10 (accent) band, competing with the navy action card. Mub 100 keeps the
  warmth but at surface-level chroma, so it recedes below the navy focal card. (Mub 50 was rejected as
  effectively indistinguishable from white — no "status zone" left.) **Still open:** the "Progress ·
  locked" lock icon still uses a peach tint — apply the same reasoning.
- [ ] **Handoff SLA:** "Status · 04 Schedule" says the first-visit confirmation comes "within
  **20** business days" — confirm that's the real Peak Health SLA (long enough to double-check).
- [x] **Enrollment flow consistency (fixed 2026-08-05):** progress chip was frozen at "1 of 4 done"
  on states 02/03 → now advances 1→2→3 with the bar filling (goal-gradient); card copy on 01–03
  normalized to describe the step only (step-count + "books your first visit" removed, per D34).
- [x] **Review kit run 2 — accessibility fixes applied (2026-08-06):** ran all four instruments
  against `Frame 806` (17 status screens, file `lifeforce` / `etUEI9DD8XQBCbJgOJyAy6`, the URL
  supplied). Conformance came back **byte-identical to the 13:33 calibration run** — 21 signatures,
  50 fills, 229/695 unbound, 763 off-grid — so none of run 1's remediation has landed. Fixes were
  applied to a **duplicate** on a new page `V4 — review-2 fixes`; the originals are untouched.
  Three things changed, all verified after the fact:
  **(a) Copy contradiction, frame 11.** Banner read "Health Assessment is overdue" while the
  Enrollment card on the same screen showed "Complete · 4/4 ✓ Health Assessment". Frame 09 already
  phrases it correctly — "Your **annual** Health Assessment is due by Jun 30". Frame 11 now matches.
  One word; it was telling members a task was simultaneously done and overdue.
  **(b) Brand `slate` retired as a text colour — 55 nodes.** `#6E7A7D` measures **4.43:1 on white**
  and 3.92:1 on the pale-blue biometric tiles, both under WCAG AA. Brand Guidelines v1.2 designates
  slate as *"Body text on light"*, so this is a brand-level defect, not a screen one. Replaced with
  **Grey 1100 `#5F5F5F`** (6.39:1 white / 5.65:1 tile). Independently corroborates the 5 Aug ΔE work,
  which recommended retiring slate for hue reasons (ΔE 5.67, cool cast fighting the warming direction).
  Also swapped `#57882E` → **Green 1200 `#3D7A3E`** (4.23:1 → 5.18:1), 9 nodes.
  **Result: 64 failing text nodes → 0.**
  **(c) Buttons — 17 of 28 raised to 48dp.** The library already ships a compliant `lg` button at
  48dp; these screens were sitting on `sm`/`md` variants at 32dp. Promoted to `lg`. Frames grew
  16–40dp and reflowed with no clipping.
  **Not fixed, and why:**
  - **11 buttons stay at 40dp.** They are already on `lg` but their height is locked by the *remote*
    library component — resize, `layoutSizingVertical`, and padding all silently no-op. Needs the
    library fixed upstream, or a component swap. Cannot be done from this file.
  - **Tab control stays at 28–32dp.** `iOS Tabs` / `Control iOS` are remote iOS platform components;
    32pt is Apple's own segmented-control height. This is a genuine floor-vs-platform conflict, and
    `accessibility.md` says escalate rather than ship an undocumented exception. **Needs a decision:
    documented waiver, or replace the control.** I reverted an initial 32→44 resize because it
    stretched the wrapper without enlarging the actual touch target — cosmetic, not a fix.
  - **Biometric range marking not done** — that is design, not a mechanical fix. Needs a decision on
    the mark (word / icon / both). Note the sharper finding: four tiles (Fitness Score, % Body Fat,
    Weight, Waist) have **values but no goal**, so they can never express range state at all.
  **File ambiguity to resolve:** a second file `lifeforce (FINAL)` (`k4JZ2k5VfnH9FgC809zTzL`, 7 pages)
  holds the same `Frame 806`, and `conformance-audit.js`'s example ids (`2567:*`) come from *that*
  file — so run 1 was measured there. Fixes are currently only in `lifeforce`. **Confirm which file
  is canonical before this goes further.**
- [ ] **White page constraint — `V5` variant built (2026-08-06):** if the LifeForce page background
  must stay `#FFFFFF`, the warm-page treatment (`V4`) is replaced by **Depth 1 elevation** on cards.
  Measured cost is **one point** of art direction (35/80 → 34/80): tonal structure drops 8 → 6 because
  depth substitutes for tone, but partner survivability rises 7 → 8 since a shadow is hue-independent.
  Everything else is identical, because the two changes carrying most of the gain — collapsing the
  completed enrollment card (164→56dp) and de-carding the utility blocks — don't depend on page colour.
  **`V5` is not a compromise; take it if white is fixed.**
  **Needs sign-off:** `object-styles.md` names Depth 1 ("subtle elevation — cards, surface separation")
  but defines no value, and production CSS has no `box-shadow` anywhere. Proposed:
  `0 1px 2px rgba(0,0,0,0.05), 0 2px 6px rgba(0,0,0,0.06)` — two layers, low opacity, deliberately
  neutral rather than navy-tinted so it doesn't shift under partner themes. This is a design-system
  value, not a LifeForce one.
  **Worth checking:** production home ships `--bg: #FAF7F0`, so "must be white" may be a LifeForce
  shell constraint rather than an MHC-wide rule.

## D38 — Page title reflects the journey phase, not the product (2026-08-07)

The content-area H1 said "LifeForce" on every state. That answers "what product" three times and
never answers "where am I." Replaced with a **kicker + phase-title** stack: a small, quiet
`LIFEFORCE` kicker (grey `#5F5F5F`, 12px, +6% tracking — the constant identity anchor, and it also
covers the desktop no-top-bar-title / banner-blindness gap) over a 24px graphite H1 that names the
**journey phase**.

Three phases (member journey, *not* LifeForce Phase 1–5):
1. **Getting set up** — enrollment (states 01, 02, 02b, 03, enrollment-detail)
2. **Your first visit** — enrolled, waiting for / scheduling the first nurse visit (04, 05)
3. **You're active** — first visit done, phase revealed, steady-state maintenance (06, 07, 08–11, dependent, 12)

**Rules:** title holds steady across sub-states within a phase (marks the *chapter*, not the page, so
it doesn't flicker); with a persistent `LIFEFORCE` kicker the P3 title can't be "Your LifeForce"
(LifeForce twice) → "You're active". Built via a `titleblock` auto-layout wrapper (gap 2) at index 0
of each state's `content` column. **Applied to the share file small-form only; desktop/large-form in
the main `lifeforce` file still owed.**

**Rejected:** dropping "LifeForce" entirely (loses identity + banner-blindness anchor); changing the
title every card (flicker). **Consequence to exploit:** the phase title now duplicates some card
labels (P1 page "Getting set up" vs the progress-card "GETTING SET UP" header; P3 "You're active" vs
"You're active in LifeForce") — the title earns its keep by letting those cards shed the redundant label.

## D39 — Button emphasis = action priority; two tiers + a link (2026-08-07)

Filled-vs-outlined was inconsistent (an alert with an outlined CTA; a passive pending card with a
filled one). Locked rule: **emphasis maps to how much we need the action, and one filled button max
per screen** (Von Restorff — the standout only reads if it's alone).

- **Filled navy** (`#195188`, white text) — *the* required/time-sensitive action: enrollment steps,
  scheduling, and **every** deadline/alert fix.
- **Outlined navy** (navy text + 1.5px navy stroke, white bg) — secondary / optional / calm:
  add-to-calendar, invite-dependent, go-to-progress in steady state.
- **Text link** (navy, no container, arrow) — tertiary/inline (e.g. "See your amount in the calculator →").
- **No button** when there is nothing to do (the 02b pending card).

**Fixes applied (share file):** 10 Rebook → filled (was outlined; it's an alert); 02b → button
removed; redundant navy stroke stripped off filled buttons so filled/outlined are cleanly separate.

**Rejected — gray-background + blue-text (M3 tonal):** gray reads as *disabled* (a learned signal we'd
be fighting on secondary actions), and it adds a third fill style with no job the outline isn't
already doing. Tonal earns its place on busy surfaces with many competing secondaries — not these calm,
one-action cards. Both current styles clear contrast (~8:1), so there's no a11y reason to add it.

## D40 — Enrollment progress bar is green, not navy (2026-08-07)

The "X of 4 done" progress bar was navy `#195188` — the same fill as the primary CTA on the same
screen, so two navies competed. Moved to **green: fill Green 900 `#52A353` (the brand-matched
checkmark green), track Green 100 `#EFF8EF`** (same family → reads as one green bar partly filled).

Three reasons: (1) green is already the "done/completed" color (the checkmarks), and the *filled*
portion literally = completed steps, so one-meaning-per-color holds; (2) it **frees navy to mean "the
action"** (Von Restorff); (3) goal-gradient — a green "you're earning" bar motivates completion and
ties to the subtext "Then you start earning your credit." Applied to the 4 live-flow bars; 7
off-canvas scratch header variants left as-is. Only the bar carries green — the progress card frame
stays neutral.

## D41 — Eyebrow is now a lozenge/chip, not colored text (2026-08-07, Davinder)

Once the phase page-title (D38) landed, plain colored-text eyebrows got lost and read as redundant
against the H1. Davinder rebuilt the eyebrow component as a **lozenge** (family-tint background +
family-ink text, keyed per semantic: ocean / turquoise / mustard / coral / neutral). Verified
consistent across all five variants incl. the coral (alert) and neutral (pending) ones flagged as
missing earlier. The chip form gives the eyebrow its own visual footprint so it no longer competes
with the page title — and it keeps the one-meaning-per-color mapping (D-color-spec) intact.

## D49 — Active state: 06 + 07 collapsed into one calm state (2026-08-08)

"06 Active — visit done" (milestone) and "07 Active — steady" were the **same active page** differing
only by a headline — one state, not two. Collapsed to a single **Status · Active**.

- **Removed the loud focal "ACTIVE / You're active in LifeForce / Go to My Progress" card** — it was
  triple-redundant with the page title ("You're active") and the My Progress **tab** (which makes a
  "Go to My Progress" button pointless). The state now **leads with the Phase card** (standing / what
  sets the credit), calm.
- **Milestone dropped.** Activation is already signaled by Phase appearing + My Progress unlocking with
  the nurse's first note/results — the current product has no celebration card either, so this is
  reskin-faithful.
- **06 frame deleted; 07 renamed "Status · Active."** Journey now runs **05 Scheduled → Active**.

**Resolves the D36 "07 too loud" flag** — there's no loud twin left to be calmer than.
**Rejected:** keeping two near-identical active screens (state over-proliferation). **If** a warm
first-visit beat is wanted later, add it as a **transient one-time banner, not a second frame.**

*(Numbering note: the four 2026-08-07 entries above are mislabeled D38–D41 — they collide with the
08-06 D38–D48 block and should be renumbered D49–D52, making this one D53. Left as-is for now to avoid
churn; flagged for a cleanup pass.)*

## D50 — Records page: one-time vs recurring split + two versions for the past-cycle-data question (2026-08-08)

**Structure (done).** The records page ("Your LifeForce records") now splits its four items by
behaviour, not just by a date sub-line:
- **SETUP** (CarePlus account · Program Acknowledgment) — one-time, done permanently. "Completed [date]"
  + **archival** actions only (Manage / View / Download PDF). No redo. History = a single completion.
- **YEARLY REQUIREMENTS** (Lab work · Health Assessment) — recurring. Next-due + **active** redo
  actions (Update / Get order form). History accrues year over year.

This mirrors the D45 dashboard-checklist split and makes the once-vs-recurring difference structural.
Marker kept as ✓ on both (the grouping + "Next due" already signal recurring; a cycle glyph added noise
for no gain).

**OPEN QUESTION → stakeholders (Peak / McGriff).** Does the data exchange return **past-cycle history**
for the recurring items, or only the **latest panel**? This decides the recurring section and cannot be
settled internally — a history view that's always empty (if Peak only sends the latest) is worse than
none.

**Three versions built as the decision artifact** — "Records · history vs latest (for review)" on the
`final` page:
- **Option A — past-cycle history:** grouped (Setup / Yearly); recurring items read "Next due X · N on
  file" + "View past results" (a browsable, accruing timeline of every lab / assessment).
- **Option B — latest panel only:** grouped; recurring items read "Last done [date] · Next due X" +
  "View results" (current panel only).
- **Option C — chronological log (simplest):** **no group headers, no due-dates.** A flat, date-ordered
  list of everything done ("Completed [date]"), each card carrying its links/downloads. Treats the page
  as a pure history of actions; anything *due* is left to the banner. Shortest, least complex.

A and B share the SETUP (one-time) group unchanged — history only applies to recurring items. C removes
the once-vs-recurring split entirely in favour of a single time-ordered list.

**Decision needed:** confirm data availability, then pick. **A** if past-cycle data exists and we want it
surfaced; **B** if only the latest panel is available; **C** if we want maximum simplicity (log-only,
due-info stays in the banner). If A, build the full inline dated history list. **Rejected:** guessing
before confirming the data model.

## D51 — Spouse/dependent HA-reminder state built (2026-08-08)

The dependent lifecycle was missing its 4th state. D43 shipped only **Invite · Sent · Completed**; the
brief (line 134) also requires a **reminder** for a dependent who has **registered but not completed
the Health Assessment.** Built as "Status · Dependent — HA reminder":

- Eyebrow **HEALTH ASSESSMENT PENDING**; body "We haven't received your Spouse or Domestic Partner's
  Health Assessment yet. Remind them to complete it to maximize your medical credit."
- **Keyed on "HA not received," NOT "registered."** The reminder deliberately does *not* assert the
  dependent registered — we may not receive registration status (brief 132–134 flag dependent tracking
  as gappy, so the member can't be assumed to know registration happened). It keys on the same signal
  the Completed state already relies on (HA received / not received), so the trigger needs no new data.
- **No button** — brief line 134: the primary member prompts them directly. This **overrides D'Arcy's
  "Send a reminder" button** (there is no in-app re-send to a registered dependent today).
- Lifecycle is now **Invite → Sent → Reminder → Completed.**
- Built **calm** (no loud active card; leads with Phase) per D49.

**Open follow-ups:** (a) the `Card/Dependent` component still needs a formal **State=Reminder** variant
— this state is currently an instance-level text override, so Ren can't yet configure it; (b) the other
dependent states ("invitation sent", "done") still carry the **pre-collapse loud active card** and
should get the same calm treatment for consistency with D49; (c) **confirm whether the data exchange
surfaces dependent *registration* status** (distinct from HA-received) — if it does, the copy can
tighten back to "registered but not done."

## D52 — 02b "lab work submitted": focus the next action, not the wait (2026-08-08) — SUPERSEDES D42-A's focal

D42-A made the 02b focal the **passive** "Lab work submitted · awaiting confirmation" notification and
hid the CTA ("no action while waiting"). That premise was wrong: there **is** a next action — the in-app
**Health Assessment** — and the screen already listed it as a tappable "Next steps" row while the focal
claimed "nothing is needed from you." It also duplicated lab-submitted (loud focal **and** the SUBMITTED
group below).

**Reworked:**
- **Focal = "DO THIS NEXT · Health Assessment"** (the available action) + Start.
- **Lab-submitted demoted** to the "SUBMITTED · AWAITING PEAK HEALTH" group only, relabeled "Lab work ·
  Submitted, pending confirmation."
- Removed the redundant submitted focal and the now-empty "Next steps" section. Screen is shorter.

**Rationale:** D36 (action is the hero; a "nothing needed" notification shouldn't own the focal when a
real next step exists) + goal-gradient (keep the member moving).
**Assumes** the HA is doable while labs process — the screen already treated it as tappable. **Open:** if
the program requires strict lab-confirm-before-HA sequencing, revert to a passive focal — confirm the
sequencing with D'Arcy.

## D53 — Status refactor review + tone tiering for focal cards (2026-08-10)

Reviewed Davinder's refactor of the status set (a second row beside the original on the `final` page)
through the review kit — conformance not run, accessibility partial, UX heuristics + laws, art
direction. **Same 18-screen flow** as the original.

**Verdict: a real gain.** The refactor set out to warm up a "semantically solid but cold" set and raise
the prominence of easy-to-act notifications. It does both:
- **Overlooked notifications fixed.** The old *"Invitation sent"* / *maximize-credit* were flat,
  action-less text blocks (Norman **signifier** + **Von Restorff** miss). Now iconed cards with a real
  CTA (*Resend email* / *Invite dependent*) — the biggest UX win.
- **Phase now communicates.** Generic dots → **segmented ladder** (✓1 · **2** · 3-4-5); art-direction
  *meaning-carried-visually* ~4→8.
- Art direction overall ~**43/80 → ~57/90** equiv (warmer, more graded). Engagement/polish up.

**Decision — tone tiering for status focals (tier by imminence of consequence):**

| Tier | Colour | Treatment | Screens |
|---|---|---|---|
| Positive / neutral | ocean / green | image header, warm | enroll, active, scheduled… |
| **Notice / due-soon** | **mustard** | **KEEP image + warmth**; signal via mustard eyebrow/copy | **08 labs due, 09 annual HA** |
| **Alert / at-risk** | **coral** | **stroked container, NO image, urgent** | **10 missed visit, 11 overdue** |

- **Test:** *"Is the consequence happening now, or is this a heads-up with runway?"* Now → alert
  (stroked, no image). Runway → notice (warm, image kept).
- **Escalation ladder:** the same task changes tier as it ages — *Annual HA due* (mustard, warm) → if
  ignored → *HA overdue / phase at risk* (coral, stroked). Treatment intensifies with the stakes.

**Applied:** reverted the **10** and **11** focals to the original coral-stroked cards (removed the
`Image Card · coral` variant, kept the refactor's phase ladder + iconed cards below). **08 and 09 keep
the image.**

**Rejected alternative:** stripping imagery from *all* deadline states — rejected because a routine
renewal (annual HA) shouldn't be alarmed; over-alerting erodes the alert's meaning (Von Restorff /
cry-wolf). A new-year HA is a warm nudge, not an emergency.

**Open follow-ups:**
- (a) Notice image band is the *same calm blue* as positive focals — notice currently differs only by
  the mustard eyebrow. Optional: tint the notice band **mustard-50** so notice ≠ positive at a glance.
- (b) Imagery is a **decorative dotted placeholder** (art-dir *imagery* ~4) and is applied to *every*
  focal, which re-flattens emphasis. Commit to real, on-brand **3:2** imagery used **selectively** (true
  hero only), or the warmth undercuts the hierarchy it's meant to add.
- (c) Confirm the image band is **theme-tokened** (partner reskin) — a fixed decorative asset breaks on
  the first reskin.
- (d) Carryover sev-3 (not introduced by the refactor): phase→credit consequence is still only reachable
  via the *"See your amount in the calculator"* link.
- (e) **Conformance bridge audit not yet run** on the refactored components — run before handoff to Ren.
