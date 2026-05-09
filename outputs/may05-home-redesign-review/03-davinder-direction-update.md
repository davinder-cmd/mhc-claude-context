# Davinder's Direction Update — Post-Critique

**Date:** 2026-05-05 (later same day)
**Context:** Davinder reviewed `02-jill-artifacts-critique.md` and added framing that supersedes parts of it. This file captures the deltas. Treat 03 as authoritative where it conflicts with 02.

---

## The central UX defect Jill's exploration has

**The composition lies.** Focus pill at top of page + focus-themed hero sets a contract: "the rest of this page is about sleep." Today strip then shows steps and heart rate. For-You shows whatever. Each module is fine in isolation; the page-level reading is broken.

This is a Law of Common Region / Nielsen #2 problem (match between system and real world). Visual proximity implies grouping. If only ~30% of the home is actually focus-filtered, the page can't visually announce itself as a focus page.

**Implication:** the focus pill should not visually anchor the entire home. It should label *only the section that's actually filtered by focus*. Move the source-of-truth labeling to the section level, not the page level.

---

## Three content lanes, each labeled by source

The home's primary structural decision. Each lane has an explicit, distinct role and an explicit source-of-truth label:

| Lane | What lives here | Source label | Notes |
|---|---|---|---|
| **Hero / spotlight** | Whatever is most important right now — a team challenge, an employer message, a focus-relevant content piece, or something else | Whatever's in the slot decides its own label ("Team challenge", "From your employer", "Based on your sleep focus") | Replaces Jill's focus-only hero. Matches Granola's priority engine: challenge → employer → focus-fallback |
| **From your employer** | Employer messaging, benefits prompts, client-driven nudges | "From your employer" | **New affordance, not a relocation.** MHC doesn't surface this distinctly today — that's part of why personalization feels muddled. Don't bury it under generic "For You" |
| **Based on your interests** | Content tied to the 3 focus areas the user picked at onboarding | "Based on your interests" | The user picked 3 in onboarding (per Granola). This lane shows content for those 3, not just one. Each item can carry its own focus tag if the focus is non-obvious |

**The personalization story is now legible:** the user can read why anything is showing without inferring it from layout proximity.

---

## Carousel — corrected position

I framed the carousel as "kill it" in 02. That was too reflexive. The actual problem in current MHC is two-pronged:

1. **Peek-card presentation** (mobile shows half of the next card on the side) — looks messy and is the right thing to remove.
2. **No JS toggle on web** — Innovations can't ship interactive carousels under current Page Layout Element constraints, so multi-card heroes go static or semi-broken.

A **dots-below carousel** with 2–4 priority items, each given a clean full-width slot per page, is a legitimate hero pattern and may be the right answer for the spotlight lane — because the priority engine often has more than one thing worth surfacing in a given session (challenge AND employer message AND focus content).

**Action:** when wireframing, design both:
- Single-committed hero (Jill's direction)
- Dots-below carousel with 3 priority slots (Davinder's direction)

Pressure-test which one the priority engine actually wants based on how often it has multiple competing high-priority items. If it's "almost always one wins clearly," go single. If it's "two or three usually deserve airtime," go dots-carousel.

---

## Copy decisions, locked

| Element | Use this exact phrase | Don't use |
|---|---|---|
| Employer lane label | "From your employer" | "For You", "Just for you", "Personalized" |
| Interests lane label | "Based on your interests" | "Recommended", "Picked for you", "Just for you" |
| Hero label (when source = employer) | "From your employer" | (same) |
| Hero label (when source = focus) | "Based on your [focus name]" or just "[Focus name]" | Generic "For You" |

These come from the Granola alignment. They're already decided — no need to re-litigate them.

---

## What carries forward from Jill's work

Don't throw it all out. These specific pieces survive the reframe:

| Jill's artifact | Why it still applies |
|---|---|
| Hero option B (50/50 split, photo left + copy panel right) | Solves the text-on-image accessibility problem. Use this for the spotlight lane regardless of single-hero vs. dots-carousel decision. |
| Today strip — sync states (fresh / recent / stale / broken) | Independent of the lane structure. Ship as-is. |
| AI Insights — 4 server-driven states | Independent. Ship as-is. |
| Three-shell architecture (mobile / web w/ left nav / web w/o left nav) | Independent. Ship as-is. |
| Focus pill — "stronger pill" treatment | The control still exists; it just labels a section, not the page. Still relevant. |

## What gets dropped or de-prioritized

| Item | Reason |
|---|---|
| Page-level focus pill that anchors the whole home | Causes the "page lies about its scope" problem. Move pill to the interests-section header instead. |
| "More from Umbrella" strip | Folded into the "From your employer" lane, which is bigger and explicitly labeled. |
| "For your [focus] focus" strip | Folded into the "Based on your interests" lane. |
| No-focus state branch (already flagged in 02) | Still recommend deletion if picker is mandatory. |
| Chat Advisor (already flagged in 02) | Still defer. |
| Three-banners desktop recommendation from Design Review.html | Superseded by Davinder's spotlight-lane direction. |

---

## Honest accessibility / usability call-outs

Davinder flagged these explicitly. Worth surfacing in any handoff to engineering or stakeholders:

1. **Text-overlay-on-image is unreadable in several Jill variants.** Solved by hero option B but not by all heroes. Don't ship the others.
2. **Inconsistent visual treatment across artifacts** — same component renders differently across HTML files. Cleanup is needed before any of this becomes a spec.
3. **Davinder will redo wireframes in a cleaner format** before any production work begins. Treat Jill's exploration as input/inspiration only — not as a spec.

---

## Status

Davinder is taking the wireframe pass next. This file + 01 + 02 give him the working assumptions. No further synthesis needed from me until he produces wireframes and asks for review.
