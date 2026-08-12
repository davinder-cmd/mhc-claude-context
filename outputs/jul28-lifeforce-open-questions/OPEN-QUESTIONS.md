# LifeForce (DEM-35) — Open Questions

Running log for the Shannan sync (Jul 29, 2026) and follow-ups with D'Arcy / Ren / McGriff.
Add to this as questions surface; mark answers inline with the date and who gave them.

**Jira:** https://mobilehealthc.atlassian.net/browse/DEM-35

---

## 0. The stated goals — as written in DEM-35

Quoted so every question below can be measured against them.

> **Request from Ryan Webster at McGriff:** Update the 'look and feel' of the LifeForce Dashboard
> to better match the rest of our standard product (Journeys, DCPs, etc.)
>
> **Our product intent:** leverage the existing 'New Health Program' design and/or the DCP design
> to 'reskin' this custom program.
>
> **Inspiration Figma:** Health Programs
>
> **Non-goal:** a 'total overhaul' or 're-conceptualization' of the program. Our primary goal is to
> update the look and feel. However, if we have recommendations that we feel would improve the UX,
> we can make them. Keep in mind — our timeline is short and we need to optimize for the Tech Lead
> to configure this new UX.

### ⚠️ 0.1 — The stated non-goal has already been crossed

The ticket rules out "re-conceptualization." **D'Arcy's V3 is a re-conceptualization** — it moves
LifeForce out of a standalone Peak-Health dashboard and into a unified two-tab experience inside
CarePlus, with a new IA and a new bottom nav. Logged as D2 in `_decisions.md`, and **McGriff has
already been shown it (Jul 17).**

So the question is not "should we stay inside the non-goal." It is: **the non-goal was crossed
before we started — is that now the accepted scope, or do we pull back to the ticket?** Everything
in §1 depends on this answer.

### ⚠️ 0.2 — Nobody has defined what "look and feel" means here

"Better match the rest of our standard product" is the entire brief, and it is not specific enough
to build or configure against. It could mean any of:

| Reading | What we'd deliver | Cost |
|---|---|---|
| **Visual skin only** | Same screens, same IA — restyled to MHC type, colour, components | Smallest. Closest to the ticket |
| **Component parity** | Rebuilt from Page Layout Elements / DCP components, so it *is* the same system rather than looking like it | Medium — what makes Ren's config clean |
| **Experience parity** | Behaves like Journeys/DCPs — same navigation model, same patterns. **This is D'Arcy's V3** | Largest. Exceeds the stated non-goal |

**Ask directly:** which of these did Ryan mean, and which has McGriff seen and formed an
expectation about? They have seen the third. If Shannan expects the first, we have a mismatch
between what the client is anticipating and what the ticket authorises.

**Also outstanding:** the **Inspiration Figma ("Health Programs")** link is still needed — it is
named in the ticket as the reference for what "matching our standard product" looks like, and we
have never seen it. Without it we are inferring the target.

## 1. Scope & timeline — for Shannan, at today's sync (Jul 29)

| # | Question | Why it matters | Answer |
|---|---|---|---|
| 1.1 | ⚠️ **Re-skin or redesign — and what does "look and feel" actually mean?** See §0.1 and §0.2. The ticket reads re-skin and rules out re-conceptualization; D'Arcy's V3 *is* a re-conceptualization, and McGriff saw it Jul 17. | **The blocking question.** Determines whether the large-form build follows V3's new IA or re-clothes the existing dashboard — and whether McGriff's expectation already exceeds what the ticket authorises. | |
| 1.1a | **Where is the "Health Programs" inspiration Figma?** Named in the ticket; we've never seen it. | It's the ticket's own definition of what "matching our standard product" looks like. Without it we're inferring the target. | |
| 1.2 | **Are we waiting on McGriff's feedback, or running forward?** D'Arcy's concept went to them Jul 17. | If feedback is pending, I build to V3 and adjust. If not, we commit now. | |
| 1.3 | **Live date — "1/1/26" is in the past.** Confirm 1/1/2027. | Design closes Jul 31, config Aug 1–31, QA early Sept. A 1/1/27 rollover is the only coherent read. | |
| 1.4 | **Scope vs. window.** All 7 lifecycle states × 2 form factors by Jul 31 is a stretch (D6). | Need a priority order and what can be fast-follow. | |
| 1.5 | **Large form (Web/Angular) doesn't exist.** D'Arcy built the 392px phone prototype only. | Biggest remaining gap and a ticket deliverable — it's the critical path either way. | |
| 1.6 | **Who rebuilds in Figma?** D'Arcy's work is `.dc.html` (Claude Design runtime), not Figma. Isabel? | Figma is the named deliverable. | |
| 1.7 | ⚠️ **How does the medical credit actually work — and who owns that answer?** See §2.2b below. | Raise tomorrow. The prototype McGriff saw on Jul 17 shows a framing that contradicts Truist's own requirements doc. If nobody can state the mechanic cleanly, that itself is the finding. | |
| 1.8 | ⚠️ **Exactly how is a member's phase assessed?** See §4b.1 below. | Raise tomorrow. Phase is the most prominent number in the product and it now drives the credit line in the banner — and **no source documents how it is calculated.** | |

## 2. Program mechanics — for D'Arcy (conflicts to resolve)

| # | Question | Conflict | Answer |
|---|---|---|---|
| 2.1 | **Labs cadence.** | D'Arcy: every 2 years. Truist benefits site: per appointment cycle. Currently designing to biennial. | |
| 2.2 | **What is the reward, exactly?** | Three framings in play: prototype "200 pts + monthly premium credit" · Truist site "medical credit per pay period" · D'Arcy "payroll dollars per nurse visit." | |
| 2.3 | **Does earning reset annually?** | D'Arcy unsure. Open. Directly determines whether a `$Y` annual target exists at all. | |
| 2.4 | **Phase scale + reveal.** Confirm 1–5, and whether the phase visualization is in reskin scope or stays as-is. | | |
| 2.5 | **Real values.** `$[X]` / `$[amount]` are placeholders throughout; need the calculator logic too. | Can't hand off with placeholders. Per D25 we now need **two** figures: the per-pay-period credit estimate and the annual Phase-5 upside (`CF.MaxLifeForceCredit − CF.LifeForceCredit`). | |
| 2.6 | **Is the per-pay-period credit estimate available to the app?** The requirements doc asks us to show "an estimate of your semi-monthly medical credit." | If Peak sends only a phase and not a dollar estimate, D25's strip can't be populated and we fall back to qualitative copy. | |

### 2.2b — ⚠️ The credit mechanic: three framings, two of them D'Arcy's

**Ask this one first.** It is not "is D'Arcy's design wrong" — her prototype and her own verbal
position disagree with each other, which reads as unresolved understanding of the program, not a
design error. The question is **how the money actually works, and who owns that answer.**

| Source | Framing | Status |
|---|---|---|
| **THE LIVE PRODUCT** (screenshot, 2026-07-28) | **No dollar figure on screen at all.** Phase number + a qualitative per-phase message (piggy-bank icon) + a **Calculate** link to premiums and semi-monthly credit amounts. | **Strongest evidence — this is what ships today** |
| **D'Arcy's 7/24 sync** | "Don't surface $ amounts in-app; breakdown lives in the PDF" | **Matches the live product** |
| **D'Arcy's V3 prototype** — `LifeForce V3.dc.html:585`, `:124` | **"$[X] of $[Y] earned · Medical credit toward your plan"** — cumulative annual accumulation | **The odd one out** — matches neither the live product nor her own sync note. **This is what McGriff saw on Jul 17** |
| **Truist requirements doc + public benefits site** | Medical credit **per pay period / semi-monthly**; begins the first paycheck of the month after the appointment | Agree on the *unit* — but see below |

**The live product does not satisfy its own requirements doc.** The doc's intro promises "Review
your current phase, **an estimate of your semi-monthly medical credit**, and how to
maintain/improve your status." The live screen shows the phase and the maintain/improve message
but **no estimate**. Either the requirement was never implemented, or the **Calculate link is
considered to satisfy it**. → **Ask.** This decides whether D25's `04c` strip (which shows
"$[X] per pay period") is correct or is re-introducing something the product deliberately avoids.

**Why it can't be left ambiguous:**
- The prototype framing **hides the rate and the cadence** — the two things a member needs to
  know to recognise the money when it arrives.
- **"$X of $Y" implies a fixed annual target.** If phase sets the rate and phase can change
  mid-year (including dropping to Phase 1 for a missed appointment), `$Y` is not fixed and any
  progress framing against it misleads — regardless of who authored it. Ties to 2.3.
- We are days from handing Ren a build. Getting this wrong ships a **dollar figure** to members.

**Sub-questions:** Is the credit per pay period, per nurse visit, or both (earned per visit, paid
per pay period)? Does a `$Y` annual maximum exist? Who is authoritative — Peak, Truist Benefits,
or McGriff?

**Design status:** `04c` (D25) implements the per-pay-period reading; `04` retains D'Arcy's
original. Both are preserved pending this answer. **A third option now exists and may be the
right one:** follow the live product — no dollar figure in-app, phase + per-phase message +
Calculate link. **Variant E on the `EXPLORE · Credit + Phase strip` board (D27) shows exactly
what that looks like**, so this can be decided against a real artefact rather than in the
abstract.

### 2.2c — Per-phase messaging was dropped from our build

The live product's per-phase message (*"Congratulations on reaching the top LifeForce Phase!…"*,
and the Phase 1–4 equivalents) is **the only element connecting phase to money**, and the
requirements doc names it explicitly: *"…and how to maintain/improve your status to realize a
full medical credit."*

**Audit of the Unified build:** the per-phase message appears on **none of screens 02–08**. It
survives only as generic copy on 01 Overview. D'Arcy's Faithful build **does** carry it (screen
05, beside the phase indicator) — we lost it in the Unified pass. **This is a content omission
against an explicit requirement, not a style choice.**

**Fix — DONE (D26, revised D28).** Phase messaging restored on screens 05–08 on the new page
**"V3 — Unified v2 (phase messaging)"**; a REF frame lists all five doc strings. Holds regardless
of how 2.2b resolves.

**New question from D28: are the doc's per-phase strings contractual or directional?** Variant A
compresses the Phase 2 string to about half its length (same meaning, better fit). If verbatim
wording is required, A grows by a line. **Also: Phase 5 has no upside sentence in the doc** — it
is a congratulation with no delta — so Phase 5 needs its own line, e.g. *"You're at the top
phase, earning the full credit."*

### 2.2e — Pre-visit states showed credit and phase that can't exist yet

Screens **03** (being scheduled) and **04** (scheduled) displayed **"$[X] of $[Y] earned"**, and
04 also displayed a **phase** — both *before* the first nurse visit. Credit begins "the first
paycheck of the month following the month of your appointment" (Truist site), and phase is
assigned *from* that visit's biometrics. **Corrected in v2 (D26).** Confirm the rule: nothing
financial and no phase before the first completed visit.

### 2.2d — Calculate link coverage

Present on 01 and 03–08. **Missing on 02** (enrolling), 09–11 (Progress tab), and 16 (Home).
**Added to 02 in v2 (D26)** — a member deciding whether to finish enrolling is exactly who wants
to know what it's worth. Left off the Progress tab, which is about biometrics. Confirm that's the
right call for Home.

### 2.3 — My Progress tab: the three sections, and the 14-item programs list

**The three-section split is a requirement, not D'Arcy's invention.** Doc Tab 2 specifies:

| Doc heading | Our label | Note |
|---|---|---|
| **My Recommendations** | "From your nurse" | Renamed |
| **My Recommended Programs** | "Recommended programs" | Renamed |
| **My Educational Handouts** | "Recommended educational handouts" | Renamed |

Also confirmed in writing: *"The following sections only show if a teammate has items to view."* →
**the disappear-when-empty rule is a documented requirement**, not just D'Arcy's 7/24 verbal note.
D19 and D23 rest on the doc.

**Why the live product shows only one section:** the enrolled test user has no nurse
recommendations and no handouts, so those two don't render. Verified against
`Current_Dashboard_Sreenshots/EnrolledUser`.

#### ⚠️ 2.3a — The nurse note and handout content in our deck is invented

Because both sections are empty for every test user, **D'Arcy authored sample content** — the nurse
note (*"Great work keeping up with your walks — your resting heart rate is trending down… aim for
around 7,000 steps…"*) and the handout titles (*"Understanding your cholesterol numbers"*). Neither
is real data and neither is in the requirements.

**Two risks:** (a) per D19 nurse notes arrive as **plain text and cannot be formatted** — D'Arcy's
sample is well-structured prose with a warm opening and three specific goals, which is what a good
note *could* be, not what the pipe delivers. Showing it to McGriff sets that expectation.
(b) We don't know what Peak actually sends for handouts — filenames, titles, or links.

#### ⚠️ 2.3b — Is "My Recommended Programs" personalised, or the full catalogue?

**This decides the design.** The live list runs to **~14 items** and includes **Progyny Fertility,
Pregnancy *and* Post-Partum for the same member**, plus counseling ×2, weight loss ×2, nutritional
counseling ×2, and fitness ×2. That is a benefits catalogue, not a nurse's recommendation — despite
the "My Recommended" label.

| If it's… | Then |
|---|---|
| **Nurse-personalised** | A real member has 2–4 items. Truncation solves a problem that doesn't exist — show all |
| **The full catalogue** | ~14 every time. A short list + "See all" on a separate browse page is right, and matches the DCP browse pattern |

**Blocking sub-question: is the list ranked?** The live order looks arbitrary. **Truncation implies
ranking** — showing "the first 3" of an unranked list means presenting three arbitrary programs as
*your* recommendations while hiding eleven. Worse than showing all.

**Recommendation for the Aug window: don't truncate — make the rows denser.** The list isn't long
because there are 14 items; it's long because **we turned them into cards** (D3: "link wall →
program cards"). A tighter row — title, one line, no icon tile, no card border — fits 14 in roughly
half the height. No truncation logic, no ranking call, no second page for Ren to configure. Add the
separate browse page as a follow-on *if* 2.3b confirms catalogue.

**For Ren (regardless):** can a Page Layout Element render "first N of a data-driven list"? These
are HTML/Mustache blocks with no JS. **If it can't, truncation isn't available and the question is
closed for us.**

**Also dropped by the card treatment:** phone numbers carried in the live list (e.g. Aetna
800-424-4047).

## 3. The MHC ↔ Peak Health boundary — for D'Arcy or Ren

This is the least-designed part of the product. Every question here can create a state we
haven't drawn.

| # | Question | Why it matters | Answer |
|---|---|---|---|
| 3.1 | **What happens when a user taps "Enroll"?** Is opt-in an MHC-side flag, or does it round-trip through Peak? | Peak exchange is file upload today (API in Q1). A round-trip means a "setting up your account" waiting state that doesn't exist. | |
| 3.2 | **Is eligibility checked at tap?** "Truist medically-enrolled teammates" is a real gate. | What does an ineligible user see? Undesigned. | |
| 3.3 | **When do the 200 points actually land?** The Overview CTA says "Enroll & earn 200 points"; the body copy on the same screen says points come from *finishing* the steps. | Contradictory on one screen. If a user taps expecting points and gets none, that's a broken promise on the first interaction. Ties to 2.2. | |
| 3.4 | **Steps 2–4 "submitted / awaiting Peak confirmation."** Steps only flip complete when Peak sends the file — how long, and what does the user see meanwhile? | Undesigned intermediate state (D19). | |
| 3.5 | **Dependent invite — is there a send confirmation?** Today there is none. | Known gap (D19). | |

## 4. Design calls — mine to make, but worth confirming

| # | Question | Position | Answer |
|---|---|---|---|
| 4.1 | **Does any post-enrollment state have 2+ simultaneous prompts?** (e.g. HA due *and* appointment prep) | Empty "Next steps" container **removed from 03–08** (D23) — the focal card owns the single next action, and on 06 the empty container contradicted it. If some state does carry two prompts at once, the container earns its place back for that state only. | |
| 4.2 | **"Enrollment" → "Getting started" rename** (D22). Terminology fix, not IA — but McGriff saw the old copy Jul 17. | Applied. Should be named to D'Arcy, not slipped in. | |
| 4.3 | **Type: SF Pro vs. D'Arcy's Raleway** (D12). Product type system is correct for handoff, but McGriff was shown Raleway. | Aligned to SF Pro. Confirm so McGriff isn't shown one and handed the other. | |
| 4.4 | **HTML for Ren.** The `.dc.html` files depend on the Claude Design React runtime — not directly configurable. Ren needs portable static HTML per state (Django or CodeMirror). | Plan to extract clean per-state HTML. Confirm target with Ren. | |

## 4b. LifeForce Phase — what it is, and what we're allowed to say

**What we know.** Phase 1–5 is a **health rating**, not a progress level — assigned from the nurse
visit's biometrics (weight, body composition, BP, cardiorespiratory fitness, resting heart rate)
plus health conditions. It controls (a) **how much medical credit** you earn and (b) **how often**
you must see the nurse. It can go **down**, including for non-health reasons (missed labs; no
reschedule within 60 days → Phase 1). Many members will never reach 5 (D'Arcy, 7/24).

**What no source defines** — checked D'Arcy's V3 source, the Review Deck, the Truist benefits
site, and `Truist LifeForce Dashboard Requirements.docx`. All four give per-phase *messaging*;
none gives the *criteria*.

| # | Question | Why it matters | Answer |
|---|---|---|---|
| 4b.1 | ⚠️ **Exactly how is a phase assessed?** — the headline question. See the breakdown directly below. | Completely undocumented in every source. We are showing members a number that sets their pay, and we cannot explain it. | |
| 4b.2 | **Are we permitted to explain it?** The algorithm may be Peak Health IP. | If we can't show the reasoning, the design must be honest about that rather than showing a bare unexplained number. | |
| 4b.3 | **Higher phase = more visits or fewer?** "Cadence set by phase" doesn't say which way. | Decides whether phase reads as a reward or an obligation — a fundamental framing choice. | |
| 4b.4 | **Should "reach Phase 5" framing survive?** Every source says some version of *"Save up to $X more per year if you improve your health and reach Phase 5."* | ⚠️ **If phase is set by biometrics and conditions, this tells a member with a chronic condition they're losing money by not being healthier.** Wrong message to the user who needs the program most. Needs a decision, not a copy tweak. | |

**Transparency gap (design, not a question):** the app shows "LifeForce Phase 2 of 5" with no
indication of what produced it or what would change it. A health rating with no reasoning fails
visibility of system status and is a predictable support-call driver. Resolution depends on 4b.2.

---

#### 4b.1 in detail — "Exactly how is a phase assessed?"

**Ask it in these six parts.** A one-line answer ("it's based on your health") is the answer we
already have, and it isn't enough to design or configure against.

| | Sub-question | Why we need it |
|---|---|---|
| a | **Which inputs feed it?** The nurse captures weight, body composition, BP, cardiorespiratory fitness (6-min sub-maximal bike test), resting heart rate. Are all six used? Anything else — lab values, the Health Assessment answers, claims data? | Determines what the My Progress biometrics table should actually show, and whether the table and the phase are the same data. |
| b | **What are the thresholds?** What moves someone from Phase 2 to Phase 3 — a composite score, all-measures-in-range, a points model? | Without bands we cannot write honest "how to improve" copy. |
| c | **How do health conditions factor in?** D'Arcy: conditions can cap you. Does a chronic condition set a ceiling, or just weight the score? | Decides whether "Reach Phase 5" is achievable for everyone — see 4b.4. This is the ethical crux. |
| d | **Who computes it, and when?** Peak Health, presumably — at the visit, or on a later batch once labs return? | Governs the timing of the reveal and whether an "awaiting phase" state is needed after the visit. |
| e | **Is the method disclosable to members?** Peak IP, or explainable? | If we can't show reasoning, the design must say so honestly instead of showing a bare number. |
| f | **Can a member see *why* they're in their phase?** Is per-member reasoning sent to us, or only the integer? | If only the integer arrives, no amount of design can close the transparency gap — that becomes a data-exchange requirement for the Q1 API work. |

**Fallback if the answer is "we can't say":** design an honest treatment — phase presented as
*assigned by your nurse from your visit measurements*, with the biometrics table as the nearest
available reasoning, and no "improve to reach Phase 5" claim we can't substantiate.

## 5. Capability claims in the design that may not be buildable — for Ren

The design promises things the config layer may not be able to deliver. Per the brief, screens
are assembled from **Page Layout Elements (HTML/Mustache, no JS)** by a CS Tech Lead — anything
beyond that is an engineering dependency and, by our own escalation rule, a flag.

| # | Claim | Where | Doubt | Answer |
|---|---|---|---|---|
| 5.1 | **"Add to calendar"** — filled navy **primary** button on the scheduled-appointment card. | D'Arcy V3 source (`LifeForce V3.dc.html:275`), also Flow B / Flow B v2; carried into Unified screen 04. | An `.ics` needs server-side generation per member or JS to build a blob — neither is a config-layer capability. Native app may need calendar permission / `.ics` handoff, so **small and large form may not be able to do the same thing.** It's the only primary CTA on that screen, so losing it is a redesign, not a copy edit. | |
| 5.2 | **Do we receive structured appointment data from Peak?** Datetime, timezone, telehealth join link. | Same card. | If the appointment arrives as a display string rather than structured fields, no calendar event can be generated regardless of 5.1. Ties to the file-upload → API move in Q1. | |
| 5.3 | **"You'll get a reminder the day before."** | Same card, body copy. | A push/email commitment. Do we send it, or Peak, or nobody? Unlike the button, a broken reminder is invisible until a member misses an appointment. | |
| 5.4 | **"Invite dependent" sends a system email — with no send confirmation.** | Screens 03–08 maximize-credit card. | Known gap (D19). Does the send actually fire, and can we show confirmation? | |
| 5.5 | **What does "Learn more here." point to?** *(Replaces "does the breakdown PDF exist" — see provenance below.)* | Requirements doc, phase strings 1–4. | The doc appends **"Learn more here."** to every Phase 1–4 message and doesn't say where it goes. **We dropped it.** If it's a PDF or benefits page, D19's "breakdown" was pointing at something real — and it belongs attached to the phase message, where the doc puts it. | |

**Fallback — BUILT (D24).** `04b · Status — Scheduled (calendar fallback)` sits immediately right
of 04 in the Unified section: calendar button demoted to a navy text link, reminder sentence cut.
**04 is untouched** and remains the design of record. If Ren confirms 5.1–5.3 are buildable, drop
04b; if not, 04b ships and 04 becomes the reference.

*Watch:* with no filled button in the focal card, "Invite dependent" becomes the most prominent
action on 04b. Acceptable, but it shifts priority from the appointment to the dependent nudge.

### 5.5 provenance — the "credit breakdown PDF" (verified 2026-07-28)

Searched for it directly. **It does not exist in any artefact:**

| Source | `breakdown` | `pdf` |
|---|---|---|
| D'Arcy's `.dc.html` files (V3, Flow B, Flow B v2, Enrollment, Phase Options) | 0 hits | 0 hits |
| D'Arcy's V3 Review Deck (the PowerPoint-equivalent shown to McGriff) | 0 hits | 0 hits |
| `Truist LifeForce Dashboard Requirements.docx` | 0 hits | 0 hits |
| The live product | absent — only the calculator link | absent |

D'Arcy's files contain **only** the calculator: "Calculate premiums & credit" (V3, Flow B v2) and
"Calculate your plan's medical premiums & semi-monthly credit" (Flow B).

**Single origin:** one line in the 7/24 verbal sync, recorded in D19 — *"Full premium/credit
breakdown lives in the PDF; do not surface dollar amounts in-app."*

**Correction to the record:** the **"Breakdown ›" label in the Figma build was ours**, invented
when interpreting that note. It is not inherited from D'Arcy and should not be treated as
reviewed content. *(Removed from 05–08 under D30; the calculator is now the only money link — D31.)*

**What is real and adjacent:** the requirements doc appends **"Learn more here."** to the Phase
1–4 messages (Phase 5 has none — consistent with it having no upside clause). Destination
unspecified. **Our phase message drops it.** That link — not a "breakdown" — is most likely what
D'Arcy meant, and the doc attaches it to the phase message rather than placing it separately.

### ✅ 5.5 likely RESOLVED — it's the LifeForce Enrollment Guide (verified 2026-07-29)

Requirements doc **lines 38–39**, for unenrolled teammates:

> *"For instructions on how to prepare for your appointment, review the LifeForce Enrollment
> Guide."* → `<button> LifeForce Enrollment Guide`

- **Present** in D'Arcy's earlier `LifeForce Enrollment.dc.html` and `Enrollment v2.dc.html` (both
  at lines 172 and 244).
- **Absent from her V3** — she dropped it between iterations.
- **Absent from our v2 deck** — verified, zero hits for "guide" across all 16 screens. We inherited
  the omission by building from V3.

**So the "PDF" is not a mystery artefact — it's a required button we're missing**, and it's the
likely destination for "Learn more here." too. **Action: add it back** to the unenrolled/Overview
surface. Confirm the destination with D'Arcy, but the button itself is non-negotiable — it's in the
requirements.

### 5.6 — What D'Arcy's V3 added beyond the requirements doc (verified 2026-07-29)

Net-new features. Each carries buildability risk, **and McGriff has seen all of them.**

| Added | In the doc? | Risk |
|---|---|---|
| **"Add to calendar"** (filled primary CTA) | No — no mention of a calendar anywhere | `.ics` needs server-side generation or JS; config layer has neither. Fallback built (`04b`) |
| **"You'll get a reminder the day before"** | No | Unconfirmed push/email promise; fails invisibly |
| **In-app appointment card with date/time** | No — doc says the member gets an **email** confirmation, never that the app displays it | Depends on receiving structured appointment data from Peak (§5.2) |
| **Appointment lifecycle states** (being scheduled / scheduled / visit done) | No | Each is a state Ren must configure |
| **"$[X] of $[Y] earned"** credit banner | No — doc asks for a **semi-monthly estimate** | §2.2b |
| **Unified two-tab in-app experience + 5-tab bottom nav** | No — doc describes a *dashboard*, Tab 1 / Tab 2 | The re-conceptualization itself (§0.1) |
| **Step detail pages** (a page per step) | No — doc has inline step text | Extra surfaces to configure |

**Corrections to earlier assumptions — these ARE requirements, not D'Arcy's:**
`Enroll & Earn 200 Points` (doc line 11) · `Invite Dependent` button (line 57) · "typically
scheduled within **20 business days**" (line 9). The 200-points conflict is therefore
**doc vs. D'Arcy's 7/24 sync note**, not her prototype inventing it.

**Also required and missing from our deck:** the SSO deep links for Step 2 (Program Acknowledgment)
and Step 3 (Lab Forms) — doc lines 25 and 30 — and the unenrolled headline *"Enroll today, earn up
to {{X}} annually."* (line 5).

---

## Log

- **2026-07-28** — Created. Seeded from `_decisions.md` open items, the scope email to Shannan,
  and two review findings: the Enroll CTA transition gap (3.1–3.3) and the empty Next-steps
  container on 03–08 (4.1).
- **2026-07-28** — Added §5 (capability claims). Confirmed "Add to calendar" originates in
  D'Arcy's V3 source, not my build. Scanned the rest of the set: remaining actions are links or
  phone numbers and are fine; only the dependent-invite email (5.4) joins it as unverified.
- **2026-07-28** — Added §4b (Phase). Searched all four sources for phase *criteria* and found
  none — every source supplies per-phase messaging only. 4b.4 is the one to raise early: the
  "reach Phase 5" framing may be actively wrong for condition-limited members.
- **2026-07-29** — Added **§2.3** (My Progress tab). The three-section split **is** a requirement —
  D'Arcy renamed the headings, didn't invent the structure — and the disappear-when-empty rule is in
  the doc, so D19/D23 are on firm ground. Two new flags: **2.3a** the nurse note and handout content
  in our deck is invented sample copy (and the note is formatted prose the pipe can't deliver), and
  **2.3b** the ~14-item programs list looks like a **catalogue, not a recommendation** — which
  decides whether to truncate. Recommendation recorded: denser rows over truncation, since
  truncation implies a ranking that doesn't exist.
- **2026-07-29** — Line-by-line pass of the requirements doc against the build. **§5.5 likely
  resolved** — the "PDF" is the required **LifeForce Enrollment Guide** button (doc 38–39), present
  in D'Arcy's earlier Enrollment files, dropped in her V3, missing from ours. Added **§5.6**
  cataloguing what V3 adds beyond the doc (calendar, reminder, appointment card + states, credit
  banner, two-tab IA, step detail pages). **Corrected three earlier assumptions:** "Enroll & Earn
  200 Points", "Invite Dependent" and "20 business days" are requirements, not D'Arcy's inventions.
  Also flagged missing SSO deep links (steps 2–3) and the unenrolled headline.
- **2026-07-29** — Added §0 with the ticket's stated goals verbatim + the Jira link. Two findings
  fall straight out of quoting them: **§0.1** the non-goal ("no re-conceptualization") was already
  crossed by D'Arcy's V3, which McGriff has seen — so it's a question of accepted scope, not
  compliance; and **§0.2** "look and feel" is undefined and splits three ways (visual skin /
  component parity / experience parity) with materially different cost. Also raised the missing
  "Health Programs" inspiration Figma as **1.1a**.
- **2026-07-28** — Broke 4b.1 into six sub-questions (inputs · thresholds · conditions · who and
  when · disclosable · per-member reasoning) and promoted it to the tomorrow list as **1.8**. A
  one-line "it's based on your health" is the answer we already have and can't design against.
- **2026-07-28** — D25: credit restated **per pay period** and tied to phase in one strip
  (`04c`), per three explicit requirements-doc lines we'd missed. Added 2.6 — the design now
  depends on receiving a dollar estimate from Peak, not just a phase number.
- **2026-07-28** — Added §2.2b + 1.7 (credit mechanic). Verified in source: **"$[X] of $[Y]
  earned" is D'Arcy's, not ours** (`LifeForce V3.dc.html:585`, `:124`) — correcting an earlier
  note. Her prototype and her 7/24 verbal position contradict each other, and both differ from
  Truist's requirements doc. **This is the one to raise first tomorrow.**
- **2026-07-28** — Live-product screenshot added to §2.2b and it reframes the question: **the
  shipped product shows no dollar figure at all** — phase + per-phase message + Calculate link.
  That matches D'Arcy's 7/24 sync and isolates her prototype as the outlier. Also added §2.2c
  (per-phase messaging missing from screens 02–08 of our build — a requirements omission) and
  §2.2d (Calculate link coverage gaps).
