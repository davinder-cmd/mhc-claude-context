# Claude Operating Instructions — Davinder Rehal

You are working with Davinder, a product leader at Mobile Health Consumer.

## Read these files at the start of every session

- `about-me.md` — who Davinder is
- `working-preferences.md` — how to communicate and behave (non-negotiable)
- `strategy/Product Service Information.md` — what the product is
- `strategy/Ideal Customer Profile.md` — who the customer is
- `design/IA/_index.md` — information architecture index (content classes, surfacing, where control lives); load the linked docs when the task touches IA, navigation, taxonomy, or surfacing

## When to load context

Load additional context based on the task at hand:

| Task Type | Load These Files |
|-----------|------------------|
| **Feature work** | `projects/feature-[name]/_brief.md`, `_decisions.md` |
| **DCP / clinical program work** (`feature-dcp` + sub-features) | `projects/feature-dcp/_brief.md`, `_decisions.md`, **+ `reference/experts/dtx-dcp-experts.md`** (secondary layer — consult after UX experts, never supersedes them) |
| **Design system** | `design/_index.md`, `reference/process/design-system-principles.md`, `reference/experts/design-system-people-to-follow.md` |
| **IA / navigation / taxonomy / surfacing** | `design/IA/_index.md` + the relevant docs it links |
| **Any design / UX / visual review** | `reference/review/_kit.md` + the instruments it lists |
| **Deeper argument or precedent needed** | `reference/experts/ux-usability-experts.md`, `reference/experts/visual-design-experts.md` (libraries — on demand, not every review) |
| **Product strategy** | `reference/experts/product-design-experts.md`, `competitive/competitive-analysis.md` |
| **Competitive positioning** | `competitive/battlecards/*`, `competitive/profiles/*` |
| **Color / palette / token work** | `reference/experts/color-systems-experts.md` |
| **User research / usability testing** | `reference/process/user-research-methods.md` (+ Tier 3 for any DCP/clinical-population recruiting) |
| **UX writing / microcopy / error states** (member-facing, in-product copy) | `reference/experts/content-design-experts.md` (defers to `strategy/Brand Voice Guide - Member-Facing.md` as final authority) |
| **External / partner / clinical stakeholder communication** (executive & board readouts, health-system & payer partners, clinical audiences) | `strategy/Brand Voice Guide - Stakeholder & Partner.md` |
| **Brand / identity work** | `reference/experts/brand-agency-studios.md` |
| **Starting a new feature, redesign, or brand effort** | `reference/process/design-thinking-process.md` (the operating loop) before diving into execution |

## Folder structure

| Folder | Purpose | When to Reference |
|--------|---------|-------------------|
| `strategy/` | Brand voice, ICP, product info | Every session (core context) |
| `projects/` | Feature briefs, decisions | When working on a specific feature |
| `design/` | Design system docs (foundation, atoms, components) | Design system tasks |
| `design/IA/` | Information architecture — app-wide content/surfacing frameworks | IA, navigation, taxonomy, surfacing tasks |
| `reference/` | Experts, principles, UX laws | Evaluating or reviewing work |
| `competitive/` | Battlecards, profiles, analysis | Positioning, strategy, differentiation |
| `outputs/` | All deliverables saved here | Writing deliverables |
| `templates/` | Starting-point templates (PRDs, specs, memos, prompts) | Before drafting a new deliverable |
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
| `feature-ebb/` | Engagement-Based Billing (EBB) |
| `feature-lifeforce/` | LifeForce Dashboard reskin (client-specific: McGriff/Truist) |

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

The `reference/` folder splits into three kinds of file, and the distinction is load-bearing:

**`reference/review/` — instruments.** Short, scoreable, always-on. Every file can *fail* a design. Loaded on every design review via [reference/review/_kit.md](reference/review/_kit.md).

| File | Output | Use For |
|------|--------|---------|
| `review/_kit.md` | — | Index, scoring contract, applicability gate. **Start here.** |
| `review/conformance.md` + `conformance-audit.js` | PASS / FAIL | Are all values legal? Measured via the Figma bridge, never eyeballed |
| `review/accessibility.md` | PASS / FAIL | WCAG 2.2 AA floors, ICP-driven requirements |
| `review/ux-heuristics.md` | Severity 0–4 | Nielsen's 10, Norman, Krug — MHC-specific checks |
| `review/ux-laws.md` | Severity 0–4 | Cognitive/behavioral laws (Fitts, Hick, Gestalt, Peak-End) |
| `review/art-direction.md` | Score /100 | Composition — emphasis, tone, density, accent, partner survivability |

**`reference/experts/` — precedent rosters.** Who to think like. Consulted on demand for an argument or precedent — never loaded just to run a review.

| File | Domain | Use For |
|------|--------|---------|
| `experts/ux-usability-experts.md` | UX | The expert roster behind the heuristics instrument |
| `experts/visual-design-experts.md` | Visual | Typography, color, layout principles; Vignelli, Albers, Rams |
| `experts/product-design-experts.md` | Product | Strategy, discovery, execution frameworks |
| `experts/engagement-behavior-experts.md` | Engagement / behavior | Habit loops, gamification, behavior change, learning/mastery (EBB, rewards, habits) |
| `experts/dtx-dcp-experts.md` | DTx / clinical delivery | **Secondary cross-reference** for DCP work (feature-dcp) — DTx delivery + evidence standards. Consult AFTER UX experts; never supersedes them. |
| `experts/color-systems-experts.md` | Color | Perceptual color science, systematic palette construction, accessible/clinical color |
| `experts/content-design-experts.md` | UX writing | Microcopy, error states, voice/tone craft — defers to MHC's own brand voice guides as final authority |
| `experts/brand-agency-studios.md` | Brand | 5 agencies/studios for product-and-brand fusion — process, strategy, identity craft, taste, living systems |
| `experts/design-system-people-to-follow.md` | Design systems | External experts and systems to study |

**`reference/process/` — how to run the work.** Methodology, not precedent — the operating loop and playbooks, distinct from who-to-think-like.

| File | Domain | Use For |
|------|--------|---------|
| `process/design-thinking-process.md` | Process | The operating loop (Discover/Define/Develop/Deliver) for a new feature, redesign, or brand effort |
| `process/user-research-methods.md` | Research | Solo-practice research methods, session craft, clinical-population research conduct |
| `process/design-system-principles.md` | Design systems | Validating component decisions |

**Not in `reference/` — moved out because they aren't precedent or process:**

| File | Why elsewhere |
|------|----------------|
| `reference/innovations/html-fragment-authoring-guide.md` | A hard technical spec (Angular shadow-DOM constraints), not precedent to argue from — lives with its sibling `mhc-blocks-authoring-guide.md` |
| `design/patterns/landing-page-patterns.md` | House UI patterns — MHC's own system, not external precedent, so it lives in `design/` |
| `davinder-product-workflow.md` (repo root) | Personal tools/workflow doc — same tier as `about-me.md` / `working-preferences.md`, not reference material |

## Design system architecture

- **Figma** = visual source of truth (what it looks like)
- **Notion** = behavioral source of truth (when to use, rules)
- **Local MD** = routing layer + Claude context
- **Index** = `design/_index.md` for component inventory

## Pre-flight: Design & UX work

**Before starting any design review, UX assessment, redesign, or flow critique**, read and confirm you have loaded:

| Context | File | What You Get |
|---------|------|--------------|
| **Review kit** | `reference/review/_kit.md` | The four instruments, the scoring contract, the applicability gate |
| Component inventory | `design/_index.md` | What exists in the system |
| Feature context | `projects/feature-[name]/_brief.md` | If feature-specific |

The kit index tells you which instruments apply to the artifact in front of you and how to report them. Do **not** load the expert libraries to run a routine review — they are for when you need a precedent or an argument.

**Four rules from the kit that are non-negotiable:**

1. **Never average the instruments.** Conformance, accessibility, UX, and art direction are reported side by side as four independent verdicts. An average hides which half is broken.
2. **Run conformance first.** An art direction score measured through token noise is uninterpretable.
3. **Respect the applicability gate.** A wireframe marked down for having no visual language is a broken review, not a finding.
4. **Always name one highest-leverage fix.** Scores without a "so what" are analysis, not a recommendation.

**State which files you loaded** at the start of your response before presenting analysis. Example:

> "Loaded: `reference/review/_kit.md` (conformance, accessibility, ux-heuristics, art-direction), `design/_index.md`, `feature-rewards/_brief.md`"

This ensures reviews are grounded in principles, not just opinion.

## Starting a new design session

Five recurring session types, each with a different opening move, load set, and process weight (see `reference/process/design-thinking-process.md` for the scaling table this is built on).

| Session type | Opening move | Loads | Process weight | Closes with |
|---|---|---|---|---|
| **Update an existing design** | Just describe the update — the trigger table auto-loads | `design/_index.md`, feature `_brief.md`, `reference/review/_kit.md` | "Component or pattern update" row — light discover, 2 directions minimum | Full review kit. If it's a live HTML output, layer `/design-review` (browser QA) on top |
| **Complete redesign from the ground up** | Say explicitly it's a full redesign, not a tweak — changes the weight Claude applies | + `reference/process/design-thinking-process.md`, `reference/experts/product-design-experts.md` (discovery) | "New feature" row — full Discover→Define→Develop→Deliver loop | Full review kit + close the loop with a real user if possible. Consider `/plan-design-review` to gate the plan before build; `/office-hours` first if scope/ambition is genuinely unclear |
| **Rebrand (product brand, piggyback not replace)** | State the constraint up front — "extends the existing bundling, doesn't replace it" — so it's captured before any direction is generated | `reference/experts/brand-agency-studios.md`, `reference/experts/content-design-experts.md`, `reference/experts/color-systems-experts.md` (if palette flexes), MHC's own brand voice guides in `strategy/`, `strategy/Product Service Information.md` (the bundling constraint) | "Brand or identity effort" row — full Discover+Define, directions informed by different studio angles (see the 5-studio comparison table) | Full review kit + Pentagram-level craft scrutiny. Keep a `_decisions.md` per [[feedback_decision_log_defensibility]] — that log *is* the defensibility the ask is asking for. April Dunford's positioning framework (`reference/experts/product-design-experts.md`) is the right tool for the "piggyback, not replace" argument specifically |
| **User research project** | State the decision the research needs to inform, before picking a method | `reference/process/user-research-methods.md` (+ Tier 3 if DCP/clinical population) | N/A — this doc has its own one-week solo playbook | Write the decision down, save findings to `outputs/`; use `templates/stakeholder-memo-template.md` if reporting up |
| **Accessibility audit** | Name the artifact — Figma frame, HTML page, or flow | `reference/review/_kit.md` → `accessibility.md` specifically; `reference/experts/color-systems-experts.md` Tier 3 if color-only-encoded meaning surfaces | N/A — this is an instrument run, not a design-thinking loop | PASS/FAIL + blocker list, `accessibility.md`'s own format. On a live HTML page, `/qa-only` or `/design-review` (browser-based) catches things the manual instrument won't |

**On the `/design-review`, `/qa-only`, `/plan-design-review`, `/office-hours` skills above:** these are general Claude Code skills, not MHC-specific — they're genuinely useful for a *live, running* HTML page (browser-based QA, iterative fix-and-verify) but assume a git-committed app more than a Figma-first exploration. Reach for them when the artifact in front of you is a real running page; otherwise the reference-file-driven process above is the primary path.

## Non-negotiables

- Always confirm you've read the relevant context files before starting work
- Save all outputs and deliverables to the `outputs/` folder
- Follow all instructions in `working-preferences.md` — no exceptions
- Present a brief plan before executing anything significant
- If the task is ambiguous, ask one clarifying question — not five
- Do not reference `archive/` unless explicitly asked for historical context

## Templates

Use these templates as starting points for common deliverables. Located in `templates/`:

| Template | Use For |
|----------|---------|
| `PRD-template.md` | Feature specs, product requirements |
| `stakeholder-memo-template.md` | Recommendations, decisions, asks to stakeholders |
| `design-spec-template.md` | Engineering handoff, component specs |
| `design-expert-council.md` | Multi-perspective design review via a 20-expert panel prompt |

Start from the template, fill in the content, save the final version to `outputs/` with a descriptive filename.
