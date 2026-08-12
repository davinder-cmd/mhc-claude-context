# LifeForce — Status Tab · Framework Overview

*One page so anyone can look at these designs and understand the **model** behind them — not screen by screen, but the framework the screens follow.*

---

## What LifeForce is

A nurse-coached well-being program (delivered with Peak Health) that earns members a **medical-premium credit**. Members enroll, complete a short set of qualification steps, meet a nurse, and stay engaged through **phases** tied to their biometrics. The app is where a member sees **where they stand** and **what to do next**.

## The app has two tabs

- **Status** — where you stand + what to do next. *(These designs cover the Status tab.)*
- **My Progress** — results, goals, and nurse guidance. **Unlocks after the first nurse visit.**

## How to read any single Status screen — top to bottom

| | |
|---|---|
| **Status band / message** | Where you are — steps remaining (enrolling) or phase + credit (active) |
| **Focal card** | The *one* thing to do now |
| **Supporting cards** | Deadlines · dependent · completed-steps summary |
| **Support · About · Calculate** | Always-available help and program info |
| **Bottom nav** | App-wide navigation |

---

## The framework — five ideas

**1. The hierarchy inverts at the first-visit hinge.** *(the core concept)*
- *While enrolling* → the **steps lead**. A recommended next step + the remaining to-dos. There is no phase or credit yet — those don't exist until the first visit.
- *Once active* → the **status leads**. Phase, credit, and next action become the hero; the finished enrollment shrinks to a single line.
- Same system — the **emphasis flips** at the moment a member goes from *getting set up* to *in the program*.

**2. Guided, but honest about order.** During enrollment we recommend one step to start ("Do this next") while making clear the rest can be done **in any order**. It removes "where do I begin?" without pretending there's a required sequence.

**3. A "keep your standing" layer.** The program has real deadlines with real consequences — labs ≥ 5 business days before a visit, reschedule within 60 days, an annual health assessment; miss them and you drop a phase. These surface as a distinct tier so a member always knows what's at stake and when:
- **Amber = due soon** (plenty of time, act to keep your standing)
- **Red = at risk / overdue** (about to lose a phase / credit)

**4. Lean on the surface, complete one tap deeper.** The Status screen stays uncluttered. Completed steps collapse to a **summary**; the full detail — every step plus its tools and links — lives on **one drill-down page**. No accordions, no per-row link soup: one card, one page.

**5. State-adaptive, not many designs.** There is **one** framework; the screen adapts to where the member is. What looks like ~13 screens is really one system in different states.

## The lifecycle at a glance

```
Enrolling (3 → 2 → 1 left)  →  All done · being scheduled  →  First visit scheduled
        │                                                              │
   steps lead                                            ┌─── first visit = the hinge ───┐
                                                         ▼                               ▼
                                              Active · phase + credit  ──►  ongoing: renewal · deadlines · at-risk
                                                   status leads                    (My Progress unlocks)
```

---

## Where the detail lives *(for the record)*

- **Decisions + rationale** (why each call was made, what we rejected) → `projects/feature-lifeforce/_decisions.md`
- **Provenance** (what's from the live product vs. D'Arcy's design vs. the requirements doc vs. our extrapolation) → `outputs/aug03-lifeforce-state-provenance/PROVENANCE.md`
- **Working HTML build** → `outputs/aug04-lifeforce-status-html/status.html`

## Still open — for this review

- A few **at-risk / intermediate states** (awaiting-Peak-confirmation, labs-due, missed/overdue, dependent-invited) are **our extrapolation of documented rules**, not client-drawn screens — flagged for validation in the provenance map.
- **Placeholders**: dollar amounts, some dates, and the Peak Health phone number pending confirmation.
- **Small in-progress**: the single "drill to detail" line on the completed-steps card; a final copy pass against the requirements doc's exact wording.

---

*Companion to the Figma board "Status flow — all states." This overview explains the framework; the board shows it.*
