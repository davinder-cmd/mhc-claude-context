# UX Heuristics

**Instrument.** Nielsen's 10, Norman's principles, and Krug's tests — as checks, with a severity scale so findings can be ranked and triaged.

Biography, sources, and the wider expert roster live in [reference/experts/ux-usability-experts.md](../experts/ux-usability-experts.md). This file is the part that can fail a design.

**Output:** a list of findings, each with a severity 0–4. Not a score, and never averaged with the art direction score.

---

## Severity scale (Nielsen)

Use his scale, not an invented one. It exists so that "twelve findings" doesn't read the same as "one catastrophe."

| Severity | Meaning | Action |
|---|---|---|
| **4** | Usability catastrophe — must fix before release | Blocks ship |
| **3** | Major problem — high priority | Blocks ship unless waived with rationale |
| **2** | Minor problem — low priority | Fix in normal course |
| **1** | Cosmetic — fix if time permits | Backlog |
| **0** | Not a usability problem | Drop it from the report |

Severity is a function of **frequency × impact × persistence**. A rare, recoverable annoyance is a 1 even if it irritates you. A silent failure that every member hits on first run is a 4 even if the fix is one line.

---

## Nielsen's 10 — with MHC-specific checks

| # | Heuristic | Generic check | What it means on MHC surfaces |
|---|---|---|---|
| 1 | **Visibility of system status** | Does the member know what's happening? | Phase, enrollment progress, and due/overdue state must be visible without navigating. Points and rewards must show what was earned and why. |
| 2 | **Match system and real world** | Familiar language and concepts? | No internal vocabulary — "DCP," "HRA," "eligibility file" are ours, not theirs. Clinical terms need plain-language pairing. |
| 3 | **User control and freedom** | Can they undo, exit, go back? | Every assessment and enrollment step is exitable without losing progress. Nothing enrolls a member in anything irreversibly without confirmation. |
| 4 | **Consistency and standards** | Works like similar products? | Same block pattern means the same thing on every surface. A card that navigates on Home cannot be inert on a topic page. |
| 5 | **Error prevention** | Prevents mistakes before they happen? | Biometric and assessment inputs constrained to plausible ranges. Destructive or hard-to-reverse actions confirmed. |
| 6 | **Recognition over recall** | Can they see options rather than remember them? | Don't hide browse. Don't require a member to remember what phase they were in, what they completed, or what a number means. |
| 7 | **Flexibility and efficiency** | Shortcuts for experienced members? | A returning member should reach the next action in one tap. Continue-cards exist for this reason. |
| 8 | **Aesthetic and minimalist design** | Is everything necessary? | Cut items per section before tightening spacing. One message per card. Kill tails that restate the headline. |
| 9 | **Help members recognise and recover from errors** | Helpful, specific messages? | Errors say what to do next, not what went wrong. Missed visits and lapsed phases must offer the recovery path inline. |
| 10 | **Help and documentation** | Available when needed? | Contextual, at the point of confusion — not a separate help destination. |

---

## Norman's principles

Five questions, asked of any control or affordance:

- **Affordance** — what actions does this suggest is possible?
- **Signifier** — what cue actually tells the member that? (A card that is tappable but shows no signifier fails here even though the affordance exists.)
- **Mapping** — does the relationship between control and outcome make sense without explanation?
- **Feedback** — does the system confirm what happened, immediately?
- **Conceptual model** — can a member build an accurate mental model of how this works? For MHC: can they explain, in their own words, how phase relates to medical credit?

The last one is the most frequently failed and the least frequently tested.

---

## Krug's three tests

Cheap, fast, and they catch different things.

| Test | Method | Passes when |
|---|---|---|
| **Trunk test** | Drop someone mid-flow with no context | They can say where they are, what this is, and what they can do next |
| **Billboard test** | Show the screen for 3 seconds, then hide it | They can state the screen's point |
| **Squint test** | Blur until type is illegible | The hierarchy still reads |

The squint test straddles this instrument and [art-direction.md](art-direction.md). If it fails because the *rank* is wrong, it's a UX finding. If it fails because nothing is emphasised at all, it's art direction dimension 1.

---

## Walter's emotional hierarchy

1. Functional — does it work?
2. Reliable — does it work consistently?
3. Usable — is it easy?
4. Pleasurable — is it enjoyable?

**Do not pursue 4 before 1–3 are solid.** Relevant to engagement and rewards work, where delight is often proposed as a fix for a usability problem.

---

## Report format

```
UX  2 × sev-3, 4 × sev-2, 6 × sev-1

sev-3  H1 Visibility of status — phase is shown but its consequence
       (medical credit) is only reachable via a calculator link
sev-3  H9 Error recovery — missed-visit state names the failure,
       offers no rebooking path inline
sev-2  H2 Real-world match — "Program Acknowledgment" is internal vocabulary
...
```

Findings only. Severity 0 items are dropped, not listed as passes — a list of things that aren't problems is noise.

---

## Revision Log

| Date | Change |
|---|---|
| 2026-08-06 | Extracted from `ux-usability-experts.md` as an instrument; added Nielsen severity scale and MHC-specific checks per heuristic. |
