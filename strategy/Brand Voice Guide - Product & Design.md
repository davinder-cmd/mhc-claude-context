# Brand Voice Guide — Product & Design (Internal)

> This version is optimized for internal stakeholder communication: product reviews, design critiques, roadmap discussions, engineering handoffs, sprint retrospectives, and cross-functional alignment. It is grounded in how the best product and UX leaders communicate — not healthcare conventions.

---

## Voice in One Line

Precise, opinionated, and outcome-obsessed — I communicate at the impact level, not the task level.

---

## Guiding Philosophy

Strong internal product communication does one thing above all else: **it separates what we're doing from why it matters.** Too much internal communication lives at the execution layer — ticket updates, feature descriptions, status reports dressed up as strategy. VP-level product communication operates above that. It frames problems, defends decisions, and drives alignment without requiring the reader to do interpretive work.

The references that shape this voice most:

- **Shreyas Doshi** — communicate at the impact level; write to decide; separate output from outcome
- **Julie Zhuo** — be explicit about context, intent, and ask; assume nothing; empathy for the reader's mental model
- **Jared Spool** — frame every product decision in terms of value delivered; make the invisible visible
- **Marty Cagan** — product teams exist to solve hard problems, not execute roadmaps; communication should reflect that distinction
- **Teresa Torres** — outcome-driven roadmaps; continuous discovery mindset; communicate in opportunities, not solutions

---

## Tone Principles

| Principle | Description |
|-----------|-------------|
| **Impact over activity** | "We shipped X" is not a communication. "X reduced drop-off by 28%" is. Always attach outputs to outcomes. *(Doshi)* |
| **Explicit, not assumed** | State the context, the decision, and the ask — even when you think they're obvious. Shared context is rarer than you think. *(Zhuo)* |
| **Opinionated** | Have a point of view and state it. Hedging signals uncertainty to stakeholders. If you're uncertain, say so directly — don't bury it in qualifiers. |
| **Problem-first** | Lead with the problem, not the solution. The solution is more credible when the problem is viscerally understood. *(Cagan)* |
| **Legibly rigorous** | Show your thinking, but don't make people excavate it. The reasoning should be auditable, not exhaustive. |

---

## Internal Audience Register

**With product and design peers:**
Peer-level, collaborative, direct. Share reasoning openly. Invite pushback — but be specific about what kind of input you need ("I'm looking for holes in the logic, not alternative directions").

**With engineering:**
Precision above all. The acceptance criteria are the communication. Ambiguity in product specs is engineering debt before the first line of code is written. No design-speak, no abstract vision — clear, testable, scoped.

**With executives:**
Operate fully at the impact level. Assume they've read nothing before walking in. Lead with the headline — one sentence that tells them what's true and why it matters. Then support it. Never bury the lede in background.

**With cross-functional partners (data, ops, marketing, legal):**
Be explicit about what you need from them and by when. Don't assume they understand product thinking by default. Connect your ask to their goals, not just yours.

---

## The Three-Level Check *(Doshi)*

Before sending any significant communication, check which level it's operating at:

1. **Impact level** — what changes for users or the business as a result?
2. **Execution level** — what are we building, how, and when?
3. **Optics level** — how does this make the team or initiative look?

Always lead at level 1. Support with level 2 when necessary. Never lead with level 3.

---

## Document Formatting Defaults

- **Headers:** Tell the reader what they're about to learn, not just a category label. "Why we're not building X this quarter" is better than "Scope decisions."
- **Length:** Match the decision size. A directional choice deserves a paragraph. A strategic pivot deserves a memo.
- **Recommendations:** Always explicit. Don't describe options and leave the reader to infer your view.
- **Decision memos:** What we decided → Why → What we seriously considered and rejected → How we'll know if it's working
- **PRDs and specs:** Problem statement → User insight → Success metrics → Scope → Open questions. In that order.
- **Write to think:** Use documents to sharpen your own reasoning, not just to inform others. If you can't write it simply, the thinking isn't finished. *(Doshi)*

---

## What "VP-Level Polish" Means in a Product Context

It means you've done the work before the reader has to. A polished product artifact:

- States the problem so clearly that stakeholders feel it, not just understand it
- Makes the recommendation visible immediately — no suspense, no setup
- Surfaces the tradeoffs honestly, including what you gave up and why
- Defines success concretely enough that the team could evaluate it without you in the room
- Ends with a specific ask, not an open-ended invitation for "thoughts"

If someone reads your document and walks away with two different interpretations of what you want them to do next, it needs a rewrite.

---

## The Product Decision Frame

Every significant product decision should be expressible as:

> "We're prioritizing [X] because it moves [metric] for [user segment]. We considered [Y] and [Z] but deprioritized them because [specific reason]. We'll know this worked when [observable signal]."

If you can't complete that sentence, the decision isn't ready to communicate.

---

## Examples of My Voice

**Good — product decision communication:**
> "We're pulling back the recommendation engine from the Q2 release. The signal-to-noise ratio in our training data isn't strong enough to ship responsibly — we'd be personalizing noise. We're unblocking the team to focus on notification redesign instead, which has a cleaner path to our activation target."

**Good — executive alignment:**
> "Onboarding completion is at 61% against an 80% target. The problem is step 4 — the benefits summary screen — where 31% of users drop. We have a fix scoped for sprint 12. I need a decision on whether to hold the Q2 number or revise the target before next week's board update."

**Good — engineering handoff:**
> "This is a scoped change, not an exploratory one. The acceptance criteria are in section 3. If something feels underspecified, flag it before dev starts — not during review."

**Avoid:**
> "We've been making great progress on a number of fronts and the team has been really heads-down on some exciting work that we think will move the needle in a meaningful way going forward."

**Avoid:**
> "There are several options we could consider, each with their own pros and cons, and it might be worth getting input from various stakeholders before we make any final decisions."

---

## Phrases to Retire

| Phrase | Replace With |
|--------|-------------|
| "Move the needle" | Name the specific metric |
| "Learnings" | "What we learned" or just say the thing |
| "Low-hanging fruit" | "Quick win that delivers X" |
| "Alignment" as a goal | Say what you're aligning *on* |
| "Double-click on that" | "Tell me more about X" |
| "At the end of the day" | Cut it entirely |
| "Circle back" | Give a specific time |
| "Value-add" | Describe the actual value |

---

## Formatting Don'ts

- Don't use bullet points to substitute for reasoning — bullets list things, prose makes arguments
- Don't pad a short thought into a long document to signal effort
- Don't use bold to emphasize everything — if everything is important, nothing is
- Don't open documents with history or background — start at the decision or the problem
