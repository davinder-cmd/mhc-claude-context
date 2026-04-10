# Claude Operating Instructions — Davinder Rehal

You are working with Davinder, a product leader at Mobile Health Consumer.

## Read these files at the start of every session

- `about-me.md` — who Davinder is
- `working-preferences.md` — how to communicate and behave (non-negotiable)
- `strategy/Product Service Information.md` — what the product is
- `strategy/Ideal Customer Profile.md` — who the customer is

## Folder structure

- `strategy/` — brand voice guides, ICP, product service information
- `competitive/` — market research, battlecards, competitor profiles; master summary at `competitive-analysis.md`
- `research/` — user research and insights
- `specs/` — PRDs and feature briefs
- `launches/` — GTM plans and release notes
- `outputs/` — save ALL deliverables here
- `projects/` — feature-specific work (see below)
- `design/` — design system documentation (index at `design/_index.md`)
- `reference/` — principles and external references for ongoing work

## Projects folder

Each feature lives in `projects/feature-[name]/`. Read the feature's `_brief.md` before any work on that feature.

**Top-level features:**

| Folder | Feature |
|--------|---------|
| `feature-rewards/` | Rewards & incentives |
| `feature-journeys/` | Member journeys / onboarding flows |
| `feature-healthy-habits/` | Healthy Habits (activity, steps, habits) |
| `feature-dcp/` | Digital Care Paths (clinical programs) |
| `feature-challenges/` | Challenges (social engagement, competitions) |
| `feature-health-data/` | Health Data (data layer: wearables, biometrics, HRA) |
| `feature-biometrics/` | Biometrics (clinical screenings data) |
| `feature-conditions/` | Conditions (health risk + DCP entry point) |

**Sub-features (read parent brief first, then sub-feature brief):**

| Folder | Sub-feature |
|--------|-------------|
| `feature-dcp/depression/` | Depression DCP |
| `feature-dcp/anxiety/` | Anxiety DCP |
| `feature-dcp/back-pain/` | Back Pain DCP (MSK) |
| `feature-dcp/diabetes/` | Diabetes Prevention + Management DCPs |
| `feature-challenges/peer/` | Peer Challenges (team/individual competitions) |
| `feature-challenges/destination/` | Destination Challenges (company-wide, thematic) |
| `feature-health-data/digital-advisor/` | Digital Advisor (A.I. Health Coach) |

**Iteration sub-folders:** Dated work items live inside the feature folder, e.g. `feature-rewards/2026-03_page-redesign/`. Each has its own `_ask.md` with the specific request. Small one-off updates go in `feature-rewards/quick-updates/`.

## Design system work

When working on design system tasks, also read:

- `reference/design-system-principles.md` — 10 principles to validate decisions against
- `reference/design-system-people-to-follow.md` — external experts and systems to reference
- `design/_index.md` — current component inventory and status

**Architecture:**
- Figma = visual source of truth (what it looks like)
- Notion = behavioral source of truth (when to use, rules)
- Local MD = routing layer + Claude context

## Non-negotiables

- Always confirm you've read the relevant context files before starting work
- Save all outputs and deliverables to the `outputs/` folder
- Follow all instructions in `working-preferences.md` — no exceptions
- Present a brief plan before executing anything significant
- If the task is ambiguous, ask one clarifying question — not five
