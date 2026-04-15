# Claude Operating Instructions — Davinder Rehal

You are working with Davinder, a product leader at Mobile Health Consumer.

## Read these files at the start of every session

- `about-me.md` — who Davinder is
- `working-preferences.md` — how to communicate and behave (non-negotiable)
- `strategy/Product Service Information.md` — what the product is
- `strategy/Ideal Customer Profile.md` — who the customer is

## When to load context

Load additional context based on the task at hand:

| Task Type | Load These Files |
|-----------|------------------|
| **Feature work** | `projects/feature-[name]/_brief.md`, `_decisions.md` |
| **Design system** | `design/_index.md`, `reference/design-system-*.md` |
| **UX review / usability** | `reference/ux-usability-experts.md`, `reference/ux-laws-quick-reference.md` |
| **Visual design review** | `reference/visual-design-experts.md` |
| **Product strategy** | `reference/product-design-experts.md`, `competitive/competitive-analysis.md` |
| **Competitive positioning** | `competitive/battlecards/*`, `competitive/profiles/*` |

## Folder structure

| Folder | Purpose | When to Reference |
|--------|---------|-------------------|
| `strategy/` | Brand voice, ICP, product info | Every session (core context) |
| `projects/` | Feature briefs, decisions | When working on a specific feature |
| `design/` | Design system docs (foundation, atoms, components) | Design system tasks |
| `reference/` | Experts, principles, UX laws | Evaluating or reviewing work |
| `competitive/` | Battlecards, profiles, analysis | Positioning, strategy, differentiation |
| `outputs/` | All deliverables saved here | Writing deliverables |
| `archive/` | Cold storage (old explorations) | Rarely — historical reference only |

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

## Reference library

The `reference/` folder contains expert guides and principles for different domains:

| File | Domain | Use For |
|------|--------|---------|
| `design-system-principles.md` | Design systems | Validating component decisions |
| `design-system-people-to-follow.md` | Design systems | External experts and systems to study |
| `ux-usability-experts.md` | UX | Nielsen heuristics, usability evaluation |
| `ux-laws-quick-reference.md` | UX | Cognitive/behavioral laws (Fitts, Hick, etc.) |
| `visual-design-experts.md` | Visual | Typography, color, layout principles |
| `product-design-experts.md` | Product | Strategy, discovery, execution frameworks |
| `davinder-product-workflow.md` | Workflow | Davinder's tools and automation stack |

## Design system architecture

- **Figma** = visual source of truth (what it looks like)
- **Notion** = behavioral source of truth (when to use, rules)
- **Local MD** = routing layer + Claude context
- **Index** = `design/_index.md` for component inventory

## Pre-flight: Design & UX work

**Before starting any design review, UX assessment, redesign, or flow critique**, read and confirm you have loaded:

| Context | File | What You Get |
|---------|------|--------------|
| Component inventory | `design/_index.md` | What exists in the system |
| UX heuristics | `reference/ux-usability-experts.md` | Nielsen's 10, Norman's principles |
| Cognitive laws | `reference/ux-laws-quick-reference.md` | Fitts, Hick, Gestalt, Peak-End |
| Visual principles | `reference/visual-design-experts.md` | Typography, hierarchy, Rams' 10 |
| Feature context | `projects/feature-[name]/_brief.md` | If feature-specific |

**State which files you loaded** at the start of your response before presenting analysis. Example:

> "Loaded: `ux-usability-experts.md`, `ux-laws-quick-reference.md`, `feature-rewards/_brief.md`"

This ensures reviews are grounded in principles, not just opinion.

## Non-negotiables

- Always confirm you've read the relevant context files before starting work
- Save all outputs and deliverables to the `outputs/` folder
- Follow all instructions in `working-preferences.md` — no exceptions
- Present a brief plan before executing anything significant
- If the task is ambiguous, ask one clarifying question — not five
- Do not reference `archive/` unless explicitly asked for historical context

## Templates

Use these templates as starting points for common deliverables. Located in `outputs/templates/`:

| Template | Use For |
|----------|---------|
| `PRD-template.md` | Feature specs, product requirements |
| `stakeholder-memo-template.md` | Recommendations, decisions, asks to stakeholders |
| `design-spec-template.md` | Engineering handoff, component specs |

Start from the template, fill in the content, save the final version to `outputs/` with a descriptive filename.
