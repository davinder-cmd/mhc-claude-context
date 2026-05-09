# Home Wireframes v1 — Companion Notes

**Date:** 2026-05-05
**File:** `home-wireframes-v1-three-lane-spine.html`
**Iteration:** 1 of (TBD)

## What this is

Responsive wireframes at three breakpoints (mobile 375 / desktop 912 Phase 1 / desktop 1440 Phase 2) implementing the May 5 spine: ten modules, two source-labeled lanes, persistent rewards visibility, and DCP progress with clinical metric. Open the HTML in a browser; everything else here is the prose explanation.

## What it pushes past Personify

Six vectors, summarized in the wireframe's own §05 table. The two highest-leverage ones:

1. **Dollar-equivalent rewards framing.** Personify shows "5,200 / 10,000 points." We show "$75 earned · $25 to next gift card." Same data, drastically different psychological pull because our $100/DCP economy is 4–10× more valuable than their points. The header chip + slim-row pairing makes the dollar number visible without taking spine real estate.
2. **DCP Progress card with inline clinical metric.** Personify can't do this — their "Programs" are content. Ours are clinical interventions. "Sleep Better DCP · session 3 of 8 · pain down 22% · earns $100 at completion" is proof of value and a reward prompt in the same module. This single card carries more behavioral weight than any other element on the page.

The other four — source-labeled lanes, AI Insights with action, Benefits in employer lane, per-action point/dollar values inline — are smaller but compound.

## What was held to attainable scope

Three deliberate constraints to keep this implementable:

| Constraint | What it cost | What it bought |
|---|---|---|
| **Single committed hero in Phase 1, dots-carousel only in Phase 2** | Phase 1 can only spotlight one priority slot at a time | Phase 1 ships without engineering having to build a new JS-driven Page Layout Element. Carousel done right (dots-below) is queued for Phase 2 when nav rebuild is happening anyway. |
| **One new engineering component for Track A (the rewards header chip)** | Eng has to build a persistent cross-page widget | Rewards stay visible everywhere, not just on home. The chip is small but used on every page — high reuse, justifies the build. |
| **No Chat Advisor, no Trophy Case, no daily quiz cards, no no-focus state** | Less surface area | Everything that *is* on home earns its place. Five fewer modules to debate; ship sooner. |

## What's flagged for engineering vs. attainable today

Two engineering asks, scoped:

1. **Track A (now):** Rewards header chip — persistent cross-page component. Innovations can place it on every page once eng builds it. ETA: low (it's a small element). Worth the cost.
2. **Track B (later):** Dots-carousel hero — new Page Layout Element. Tied to the Phase 2 top-nav rebuild, not Phase 1. ETA: medium. Don't try to ship in Phase 1.

Everything else assembles from existing Page Layout Elements: HTML containers with Mustache, Lists, Buttons, User Inputs. The wireframe's §06 table maps every module.

## Why the three breakpoints were chosen

- **375 px mobile:** lower bound where most engagement happens; intentionally close to current to honor "minor changes only" constraint.
- **912 px desktop (Phase 1):** today's actual content area width with collapsed left rail. Proves the spine works inside the constraint we already have, no shell rebuild required.
- **1440 px desktop (Phase 2):** content area width once top nav lands. Lets us pre-design how content reflows when the chrome change ships, so we're not redesigning twice.

Skipping breakpoints between 912 and 1440 deliberately — the layout transitions are fluid (2-up becomes 3-up, lane breathing room expands), but the structural changes happen at the chrome boundary, not inside it.

## Decisions still open before this becomes a spec

Six items listed in the wireframe's annotation index. The two that need answers first:

1. **Engineering buy-in on the rewards header chip.** If they push back, fall back to placing the rewards slim row as the first module on every primary tab. Heavier lift, same UX outcome.
2. **Lane tagging workflow.** The two-lane model needs content tagged at publish time as either employer-sourced or focus/interests-sourced. Confirm Innovations + Client Services can do this without new tooling. If not, the lanes have to be filled from separate content pools rather than a single tagged stream.

## What I'd want to see in v2

If this gets a second pass, three things to add:

- **Empty / loading / error states** for each module. Today strip has sync-state design from Jill's exploration; the rest don't.
- **The Phase 1 → Phase 2 transition state** — what does the page look like *during* the nav rebuild? A few weeks where some users are on collapsed-rail and others on top-nav. Wireframe the bridge.
- **Mobile state where user has no DCP enrolled / no employer content / no focus content yet.** Not the same as no-focus-state (picker is mandatory), but the home should still hold up before the user has earned their first reward or enrolled in a program. Day-0 user.

---

*Iteration log — see `INDEX.md`.*
