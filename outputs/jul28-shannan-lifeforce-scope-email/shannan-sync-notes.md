# Shannan sync — my notes (DEM-35)

**Jul 29, 2026 · ~30 min · not for sending — this is my talking track.**
Full record: `outputs/jul28-lifeforce-open-questions/OPEN-QUESTIONS.md` · Jira:
https://mobilehealthc.atlassian.net/browse/DEM-35

**What I need out of this:** a scope decision I can build against for the last two days of the
design window, and a priority order if it won't all fit.

---

## 📋 Shareable agenda — paste into the invite / meeting notes

**LifeForce (DEM-35) — scope check before design closes Jul 31**

- **What "look and feel" covers on this ticket** — visual skin, component parity, or full
  experience parity. The three have very different scope, and the concept McGriff saw on Jul 17
  sits at the far end.
- **Whether we're waiting on McGriff's feedback** or committing to the current direction.
- **Priority order for the large form (Web/Angular)** — it doesn't exist yet, and all states across
  both form factors won't fit by Jul 31.
- **Figma production ownership** — D'Arcy's work is HTML, not Figma; Figma is the deliverable.
- **Two hand-offs I need:** the "Health Programs" inspiration Figma, and the real dollar values
  (everything is placeholders today).
- **Features in D'Arcy's concept that the requirements doc doesn't ask for** — add-to-calendar, an
  appointment reminder, the in-app appointment card, and the two-tab experience itself. Some may not
  be buildable in the config layer; McGriff has already seen all of them.
- **Heads-up only:** a few open program-mechanic questions — how the medical credit works and how a
  member's phase is assessed — that will need D'Arcy and Ren. Plus one required item we're missing:
  the **LifeForce Enrollment Guide** button.

---

## 1. The blocker — what does "look and feel" actually mean?

*Open with this. Everything else is downstream.*

**How I'll frame it:** the ticket asks us to update the look and feel to match our standard
product, and rules out "a total overhaul or re-conceptualization." D'Arcy's V3 *is* a
re-conceptualization — it moves LifeForce out of the standalone Peak dashboard into a unified
two-tab experience inside CarePlus, new IA, bottom nav. **And McGriff was shown it on Jul 17.**

So the non-goal was crossed before I picked this up. I'm not asking whether we *should* — I'm
asking whether that's now the accepted scope.

**Three readings, materially different cost:**

| | Reading | What we deliver |
|---|---|---|
| 1 | **Visual skin** | Same screens, same IA, restyled to our type/colour/components |
| 2 | **Component parity** | Rebuilt from Page Layout Elements / DCP components — it *is* the same system, not just resembling it. This is what makes Ren's config clean |
| 3 | **Experience parity** | Behaves like Journeys/DCPs. **This is D'Arcy's V3** — past the stated non-goal |

**The point to land:** McGriff has seen #3. If our plan is #1, the client's expectation is already
ahead of what the ticket authorises, and that surfaces in a review with Ryan or in QA — not quietly.

**My recommendation:** we're effectively at #3 already and it's the better product. Confirm it as
scope, and if that's not acceptable, tell me now so I can pull the large form back to #2. Going to
#1 at this point means telling McGriff the concept they've seen isn't what ships.

**Answer:**

---

## 2. Are we waiting on McGriff's feedback, or running forward?

Concept went to them Jul 17 — twelve days. If feedback is coming, I keep building to V3 and adjust.
If it isn't, we commit now and stop treating it as provisional.

**My recommendation:** assume no feedback and commit. Twelve days of silence on a concept isn't a
review in progress.

**Answer:**

---

## 3. Priority order — all 7 states × 2 form factors won't fit by Jul 31

Design window closes in two days. The lifecycle is 7 states (enrollment, per-step details,
post-enrollment zero, post-first-visit, recurring annual, Progress populated + empty, dependent
banners), each needed in small **and** large form.

**My recommendation:** small form is done and holds. Prioritise the **enrollment spine + the
Status states + Progress tab** in large form; treat recurring-annual and the per-step detail pages
as fast-follow into the config window. I need her to accept that split rather than discover it.

**Answer:**

---

## 4. Who rebuilds it in Figma?

Figma is the named deliverable. D'Arcy's work is `.dc.html` (Claude Design runtime), not Figma.
I've built 16 screens natively in Figma already — but the large form is still open, and Isabel is
the obvious candidate if it's going to her.

**My recommendation:** I keep the small form; Isabel takes large-form production once I've set the
structure. Confirm she has the bandwidth.

**Answer:**

---

## 5. Two things I need handed over

- **The "Health Programs" inspiration Figma.** Named in the ticket as the reference for "matching
  our standard product." I have never seen it — right now I'm inferring the target.
- **Real values.** `$[X]`, `$[amount]` and the credit/premium figures are placeholders throughout.
  Can't hand anything to Ren with placeholders in it.

**Answer:**

---

## 6. Live date

Ticket says **1/1/26**, which is in the past. Design Jul, config Aug, QA Sept → it has to mean
**1/1/2027** with the rollover. Just need it confirmed, not discussed.

**Answer:**

---

## What D'Arcy's V3 added that the requirements doc doesn't ask for

*Checked line by line against `Truist LifeForce Dashboard Requirements.docx`. These are net-new —
they carry buildability risk, and McGriff has seen them.*

| Added | Risk |
|---|---|
| **"Add to calendar"** — filled primary button on the appointment card | Needs an `.ics`. No JS in the config layer → likely an engineering dependency. It's the only primary CTA on that screen, so losing it is a redesign. Fallback built (`04b`) |
| **"You'll get a reminder the day before"** | A push/email promise nobody has confirmed we send. Invisible when broken — until a member misses an appointment |
| **In-app appointment card with date and time** ("Scheduled · Thu, Jun 12 · 10:30 AM ET") | The doc only says the member receives an **email** confirmation. It never says the app displays the appointment. **Do we even receive the date from Peak?** |
| **Appointment lifecycle states** — being scheduled / scheduled / visit done | Not in the doc at all. Each is a state Ren has to configure |
| **"$[X] of $[Y] earned" credit banner** | The doc asks for "an estimate of your **semi-monthly** medical credit" — not a cumulative annual total |
| **Unified two-tab in-app experience + 5-tab bottom nav** | The doc describes a *dashboard* with Tab 1 / Tab 2. This is the re-conceptualization — the biggest addition of all |
| **Step detail pages** (a page per enrollment step) | The doc has inline step text, not drill-down pages |

**Worth saying plainly:** three things I'd assumed were D'Arcy's turn out to be **requirements** —
"Enroll & Earn 200 Points", the "Invite Dependent" button, and "typically scheduled within 20
business days". Those aren't up for debate.

### ⚠️ And one required thing that got dropped

**`<button> LifeForce Enrollment Guide`** — requirements doc line 38–39, for unenrolled teammates:
*"For instructions on how to prepare for your appointment, review the LifeForce Enrollment Guide."*

It's in D'Arcy's **earlier** Enrollment / Enrollment v2 files. It is **not in her V3**, and it's not
in our deck — she dropped it between iterations and we built from V3.

**This is almost certainly the "PDF" she referred to on 7/24**, and it's also the likely destination
for the "Learn more here." link the doc appends to the phase messages. So it isn't a mystery
artefact — it's a required button we're missing. Needs adding back.

---

## Flag, don't try to solve today

Raise these so nobody is surprised later. They need D'Arcy, Ren, or the client — not Shannan.

| | Issue | Why she should hear it now |
|---|---|---|
| **Credit mechanic** | Three conflicting framings, two of them D'Arcy's. Her prototype shows "$X of $Y earned"; her 7/24 notes say don't show dollar amounts; Truist's requirements doc says per pay period; the live product shows no figure at all. | **The prototype McGriff saw contains a dollar framing Truist's own doc contradicts.** Don't ask for client sign-off until this is settled. |
| **How phase is assessed** | Phase sets a member's pay and appointment cadence. **No source documents how it's calculated** — not the requirements doc, not the Truist site, not D'Arcy's files. | We are showing members a number we cannot explain. Six sub-questions in §4b.1. |
| **"Reach Phase 5"** | If phase is set by biometrics and health conditions, this copy tells a member with a chronic condition they're losing money by not being healthier. | Not a copy tweak — may need Truist. The one with real reputational exposure. |
| **Add to calendar** | Primary CTA on the scheduled-appointment card. Needs an `.ics` — no JS in the config layer, so likely an engineering dependency. Fallback already built (`04b`). | Could cost Ren time in the Aug window. |

---

## What I'm doing regardless of the answers

- Large form to D'Arcy's V3, adjusting if scope pulls back
- v2 deck already carries: "Getting started" rename, corrected pre-visit states, restored per-phase
  messaging, money-forward credit strip, single calculator link
- Fallbacks built and preserved for the calendar button and the no-dollar-amounts variant, so
  either answer is a swap rather than a rebuild

## If I get nothing else, I need two answers

1. **Is #3 the scope?**
2. **Do you accept the large-form priority split?**

Everything else I can carry.
