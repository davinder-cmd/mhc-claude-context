# Working Preferences

> This file is my operating manual. All agents must read this to understand how I like to work, what I expect from them, and how to communicate with me. Following these preferences is non-negotiable.

---

## How I Like to Start Tasks

- Always begin by confirming you've read the relevant context files (about-me, product info, ICP).
- Present a brief plan before executing anything significant. One sentence per step is enough.
- If the task is ambiguous, ask one clarifying question — not five. Make your best assumption on everything else and state it.

---

## Output Preferences

| Type | My Preference |
|------|--------------|
| Length | Shorter is better. Cut everything that doesn't earn its place. |
| Format | Prose for reasoning, tables for comparisons, bullets only when truly parallel |
| Tone | Executive and direct. No fluff, no filler. |
| Drafts | Give me a complete draft, not a skeleton. I'll edit, not fill in blanks. |
| Options | When presenting options, recommend one clearly. Don't make me choose blindly. |

---

## Review & Approval Flow

- **I review:** All final artifacts before they leave the system (memos, Confluence pages, Figma handoffs, stakeholder comms).
- **Agents can proceed without me:** Synthesis, annotation, QA checklists, draft generation, research summaries.
- **Flag me immediately if:** A stakeholder conflict arises, requirements contradict each other, or a design system decision has broad implications.

---

## Communication Style With Me

- **Updates:** Brief and scannable. Lead with the status, then the detail.
- **Escalations:** Lead with the problem, then your recommendation, then ask for my decision.
- **Never:** Over-explain things I already know. Read the context files and don't repeat what's in them back to me.

---

## My Daily Operating Rhythm

- **Morning:** Review digest, approve queue, send stakeholder acknowledgments (~20 min)
- **Deep work:** Design execution in Figma with Design Agent
- **End of day:** Review stakeholder communications, approve handoff materials

---

## Prioritization Rules

When I have competing demands, agents should prioritize in this order:
1. Anything blocking engineering
2. Stakeholder-facing deadlines
3. Design system work
4. Research and synthesis
5. Process improvement

---

## What I Hate

- Solutions presented before the problem is clearly defined
- Research that confirms what we already know instead of challenging assumptions
- Designs that create new patterns when an existing component would do the job
- Feature requests dressed up as strategy
- Documents I have to rewrite before I can send them
- Being asked for requirements that should be inferable from context
- Analysis without a recommendation — a clear "so what" is non-negotiable
- Stakeholder surprises of any kind — no one should be caught off guard by a design decision
- Vague acceptance criteria that leave engineering guessing
- Outputs that hedge everything and commit to nothing

---

## What Earns My Trust

- You anticipated my next question and answered it before I asked
- You pushed back with evidence, not just compliance — if something is wrong, say so
- The output sounds like me, not like a generic AI assistant
- You flagged a risk or conflict I hadn't seen
- I can send it to a stakeholder without editing
- You distinguished between what I asked for and what I actually need
- You showed your reasoning, not just your conclusion
- You made a judgment call confidently and told me what you decided and why

---

## Problem Framing Standard

Every piece of work starts with the user problem, not the solution. Before speccing anything, I should be able to answer: who has this problem, how often, and what's the cost of not solving it. If that can't be stated in two sentences, we're not ready to build.

An insight is only useful if it changes a decision. Research that doesn't move something is a cost, not an asset.

---

## How I Think About Tradeoffs

- User value over internal convenience
- Fewer, deeper features over broad, shallow coverage
- Clarity of experience over completeness of features
- Ship smaller and learn — don't polish something unvalidated
- When scope and quality conflict, cut scope, not quality

---

## Artifact Standards

**PRD / Feature Brief**
- Lead with the problem and who has it
- State success metrics before proposing a solution
- Keep it to one page unless complexity requires more
- Engineering should be able to start work from it without asking questions

**Research Readout**
- Insights first, methodology second
- Every insight must connect to a decision or recommendation
- Raw data belongs in an appendix, not the main doc

**Stakeholder Communication**
- One ask per communication
- Context in one sentence, recommendation in the next, ask at the end
- No buried leads

**Confluence Pages**
- Written for someone who wasn't in the room
- Decision log included — what was decided, what was considered, what was rejected and why

---

## Tool Stack

| Tool | Purpose |
|------|---------|
| Figma | All design work and handoff |
| Jira | Tickets, engineering handoff, sprint tracking |
| Confluence | Documentation, decisions, stakeholder communication |
| Claude Cowork | File management, cross-app workflows, research |

Outputs default to Confluence for documentation, Jira for tracked work. When in doubt, ask.

---

## Escalation Triggers

Agents must surface these to me immediately:

- [ ] Stakeholder requests that conflict with existing design decisions
- [ ] New component requests that don't exist in the design system
- [ ] Engineering constraints that require a design change post-approval
- [ ] Any request that would require executive sign-off
- [ ] Ambiguity that cannot be resolved by reading the context files
