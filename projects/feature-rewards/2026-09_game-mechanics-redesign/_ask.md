# Ask — Rewards Game-Mechanics Redesign

> Read `feature-rewards/_brief.md` first. This iteration adds game mechanics as the primary design lens — see the 2026-09-04 entry in `feature-rewards/_decisions.md` for why that's a departure from how `engagement-behavior-experts.md` is normally applied at MHC.

## The Ask

Redesign the rewards experience — explicitly the **incentive modal / overlay that sits on top of the core product** — using real game mechanics to make it feel fun. Not a secondary polish pass: mechanics are the driving lens for this iteration.

## Scope

- **In scope:** the incentive modal/overlay surface and the rewards experience it represents (gift cards, points, currency/store, raffles, fulfillments — see `_brief.md`'s Current State)
- **Out of scope:** existing product bundling and reward configuration model — this is about how the experience *feels*, not restructuring what members can earn or how clients configure it

## Primary References

- `reference/experts/engagement-behavior-experts.md` — Fogg (B=MAP), Eyal (Hook Model), Chou (Octalysis white-hat/black-hat), von Ahn/Duolingo product decisions, Kapp — read as primary for this iteration, per the decision log
- `reference/process/design-thinking-process.md` — run at "New feature" weight (full Discover→Deliver loop); Develop phase should generate 2–3 genuinely different mechanic directions, not one direction with three skins
- `reference/review/_kit.md` — close with the full instrument set before calling any direction done

## Constraints Carried Over from `_brief.md`

- Reward rules/amounts/triggers are **client-configurable** — don't design mechanics that assume fixed values
- Fulfillment is **async** (nightly Celery jobs) — mechanics that imply instant gratification (e.g., an immediate reveal animation) need a design answer for the gap between action and actual fulfillment
- Changes here don't require Client Services coordination unless they touch reward *structure* — this iteration is experience-layer, not structure

## Open Questions

- Which reward type(s) does the incentive modal actually front — is this one modal across gift cards/points/currency/raffles, or type-specific?
- Any existing Figma frames for the current incentive modal to redesign from, or is this greenfield within the existing rewards UI?

## Status

Kickoff — Discover phase not yet started.
