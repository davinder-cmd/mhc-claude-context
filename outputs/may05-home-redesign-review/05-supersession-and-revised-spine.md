# Supersession + Revised Spine

**Date:** 2026-05-06
**Trigger:** Canonical req doc captured as `00-requirements-from-pd-innov.md`
**Effect:** Materially tightens scope. Some assumptions in 01–04 and the v1 wireframes are now wrong.

---

## What changes

| Was in our spine | Status under the canonical reqs |
|---|---|
| **Persistent rewards header chip** + **rewards slim-row module** | **Out of iteration 1.** "Rewards focused home screen" is listed under "future iterations" and "Rewards main page" is in "future enhancements." Don't carry rewards into the iteration-1 home spine. |
| **DCP Progress card with inline clinical metric** | **Out of iteration 1.** "DCP focused home screen" is a future iteration. DCPs are listed under "future enhancements." |
| **Dots-below carousel hero (Phase 2)** | **Out, full stop.** JH explicitly: "One hero image on web and mobile." No carousel in iteration 1 or Phase 2. The carousel debate is closed. |
| **Focus picker (1–3, mandatory, no skip)** as a new onboarding step | **Reframed.** The doc says "concept to test: using the **wellbeing interests** to filter/focus the home page." Wellbeing interests is existing data, not a new picker. We're not adding an onboarding step — we're surfacing what's already there as a filter mechanism on home. |
| **"Today" strip as default core module** | **Open question.** Doc lists "Tracker Insights" and "Tracker data" under open questions — placement / inclusion not decided for iteration 1. Treat as conditional, not core. |
| **AI Insights as default core module** | **Open question.** Same line as Tracker Insights — open. |
| **Three lanes: Hero / From your employer / Based on your interests** | **Mostly survives, with renames.** "From your employer" maps to CS goal #5 ("Ability to feature **Client priority items**"). "Based on your interests" maps to CS goal #3+#4 (simplified personalization filtered by wellbeing interests). Hero stays. |

| Was missing or underweighted | Status under the canonical reqs |
|---|---|
| **"Ongoing programs" as its own module** | **In, prominent.** CS goal #6: "Easier access to ongoing programs." This is a continuity surface — pick up your in-progress DCPs / journeys / challenges — and CS specifically asked for it. Should be high in the stack, near top, above the personalized lane. |
| **508 accessibility as a hard target** | **In, non-negotiable.** Means real treatment of contrast, focus order, alt text, keyboard navigation, semantic structure. Affects hero (no overlay text on imagery — Jill's option B remains correct), forms, and any interest-filter affordance. |
| **Performance as a hard target** | **In, non-negotiable.** Maps to JH's #5 (tracker perf) but extends to the whole page. Defer non-critical calls; render skeleton tiles in <100 ms; no layout shift. |
| **Three explicit shell scenarios** | **In, must-design.** (a) left nav enabled on large form, (b) no left nav on large form (SDK or future top-nav), (c) small form factor. These are the three breakpoints the wireframes must cover. |
| **Full browser page** | **In.** Eng-named requirement. The home must be able to use the full viewport, not be capped at 1280 or 1440. v2 wireframes treat 1440 as the "big-but-not-max" demonstration; production needs to run wider. |

---

## Revised spine — iteration 1

Stripped of rewards, DCP-progress-card, and the dots-carousel; with ongoing programs and the wellbeing-interest filter promoted; with tracker/AI Insights flagged as conditional pending decision.

| Order | Module | Owner / Source | Status |
|---|---|---|---|
| 1 | **Top nav with logo center-top** | JH #1 + #2 | Required |
| 2 | **Greeting** | implicit | Required |
| 3 | **Single hero image** (one only — no carousel, no peek-cards) | JH | Required |
| 4 | **Featured Client priority items** ("From your employer") | CS goal #5 | Required |
| 5 | **Ongoing programs** ("Continue where you left off" — in-progress DCPs / journeys / challenges) | CS goal #6 | Required |
| 6 | **Wellbeing-interest-filtered content** (simplified personalization, existing wellbeing interests as filter) | CS goal #3 + concept #4 | Required (concept-to-test) |
| 7 | **Tracker data tiles** | open question | Conditional — design for inclusion, allow exclusion |
| 8 | **Tracker Insights** | open question | Conditional |
| 9 | **DCP AI Coach entry** | open question | Conditional |
| 10 | **Bottom nav (mobile) / nav handled in chrome (desktop)** | JH #2 | Required |

The two-lane idea from direction update 03 still holds, with new copy:

- **"From your employer"** lane → Featured Client priority items (CS-named in canonical doc as "Client priority items")
- **"Based on your interests"** lane → Wellbeing-interest-filtered content

The naming should reflect what the doc calls things — "Client priority" and "wellbeing interests" — so we don't accidentally fork vocabulary across artifacts.

---

## What each prior file got wrong (corrections)

| File | Now wrong about | Correction |
|---|---|---|
| `01-clean-assumptions-and-notes.md` | Treats rewards visibility as in-scope; says "biometrics not on home" as decided; assumes focus picker is mandatory new onboarding step | Rewards = future iteration. Wellbeing interests already exist as data — not a new picker. Tracker data is open question, not assumed in. |
| `02-jill-artifacts-critique.md` | Recommends three-banners-vs-single hero as something to "decide" | Decided: one hero. JH explicit. |
| `03-davinder-direction-update.md` | Carousel-with-dots-below recommended for Phase 2 | Removed. JH said one hero, web and mobile. |
| `04-personify-patterns-and-rewards-gap.md` | Recommends restoring rewards as a spine module via header chip + slim row | Holds for a *future* iteration (rewards-focused home is listed). Out of scope for iteration 1. The Personify analysis is still valid as input — just not for *this* ship. |
| `home-wireframes-v1-three-lane-spine.html` | Carries rewards persistent chip, rewards slim-row, DCP Progress card with clinical metric, and a Phase-2 dots-carousel hero | Replaced by `home-wireframes-v2-iteration-1-scope.html`. v1 is preserved as a record of the prior direction; v2 is the current spec. |

---

## What stays exactly as it was

- **Hero option B (50/50 split, photo left, copy panel right).** JH wants one hero; B is the most accessible single-hero treatment Jill produced. Keep. Solves text-on-image contrast directly.
- **Three-shell architecture** (mobile / web w/ left nav / web w/o left nav). The doc names this exactly — "left nav enabled on large form, no left nav on large form, small form factor." Same architecture, slightly different naming.
- **Source-labeled lanes principle.** Still right; rename to canonical-doc vocabulary ("Client priority" / "wellbeing interests").
- **Single committed hero, not carousel.** v1 already had this for Phase 1; just delete the Phase 2 alternative.
- **No focus pill at page level.** Still right — pill (or chip) appears only inline on the personalized lane label.
- **No Chat Advisor.** Still right — not in the canonical doc; defer.
- **No no-focus state.** Still right — the wellbeing interests are existing data; every user has interests, no fallback needed. (Confirm with CS that interests are populated for all members; if some are blank, define an "edit interests" CTA in that slot rather than a fallback page state.)

---

## Three open questions the doc raises that still need answers

1. **DCP AI Coach entry on home.** Doc says "recently drafted" feature. Does it ship in iteration 1 or queue with the DCP-focused home (future iteration)? If iteration 1, it's a 10th module; if future, the spine is 9.
2. **Tracker Insights + Tracker data.** Both flagged as open. My read: keep them in iteration 1 as conditional modules — they're already in production today, removing them would be a regression. But confirm.
3. **Wellbeing interests data state.** Are interests populated for all current members, or do some users have blank interests? If blank: how does the personalized lane look on day 0? Don't design a fallback page state; design a single "Edit your wellbeing interests" cell that occupies that lane until the user fills them in.

---

## Net effect on engineering ask

Track A (this iteration) needs **no new Page Layout Elements.** All seven required modules assemble from existing HTML containers, Lists, Buttons, User Inputs.

The carousel new-element ask is gone (one hero, no carousel).
The persistent rewards chip new-element ask is gone (rewards is future).

The remaining cross-cutting eng ask is **full-browser page support** (the eng-named requirement) — that's a layout/CSS concern, not a new component.

That's a meaningful win. We can ship without queuing a new building block.

---

*Companion: revised wireframes saved as `home-wireframes-v2-iteration-1-scope.html`.*
