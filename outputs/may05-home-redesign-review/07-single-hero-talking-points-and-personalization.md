# Single-Hero — Talking Points + Personalization Philosophy

**Date:** 2026-05-06
**Purpose:** Stakeholder ammo for the single-hero V1 decision (sales pushback expected) + capture of the personalization principle Davinder named on May 6.
**Use this with:** John, sales leadership, client-services account managers, Innovations leads.

---

## What single-hero buys us

Use these in the order they're listed. Lead with user value, end with eng feasibility.

### 1. Editorial discipline forces clarity

A single slot makes us decide what matters most this session. The current 5-banner carousel is a content team avoiding a decision. When sales says "we need to highlight X and Y and Z," single-hero asks the right question back: which one matters most *for this user, right now*? That's a sharper product than the broadcast model.

### 2. Real attention data favors single-hero

Carousel dot 2–5 historically gets <5% of the engagement of dot 1 (this is in Jill's own KPI hypothesis, citing standard pattern data). Saying we have a 5-message hero is misleading internally — we effectively have a 1-message hero with 4 unread items.

### 3. Performance + 508 win clean

- One image to load, one heading to read, one CTA to size for tap target
- No carousel ARIA complexity, no carousel keyboard navigation requirements
- No JavaScript animation timing edge cases
- Faster first paint, faster time-to-interactive
- Maps directly to John's #4 (spinner threshold) and #5 (tracker perf) goals

### 4. Innovations can build it

No new Page Layout Element required. Single hero = HTML container + image + Button — existing primitives. Multi-card hero (today's "messy" state) requires JS toggle that Innovations can't ship under current Page Layout Element constraints.

### 5. Mobile and desktop share one design

Carousels behave inconsistently across form factors (peek-cards on mobile, dot-paginated on desktop, "left/right arrows below" on web today — all different, all mediocre). One hero card scales gracefully from 375 to 1600+ without forking the design.

### 6. Future state is better, not worse

V2 = dots-below + single-card-visible + swipe. That's a better carousel than what we have today. Sales gets multiplicity back when Innovations builds the new component, but in a clean form. Frame V1's single-hero as "the foundation for V2's better carousel," not "a constraint we're stuck with."

---

## What it costs (and how to handle each)

### Cost A · Sales loses the demo-friendly multi-message hero

Sales builds demos around the top of the page. Single hero means they pitch one message at a time during demos, not "look at all these things we surface."

**Handling:**
- Reframe the demo: "Here's the priority engine — watch how it surfaces a challenge for one user, an employer message for another, a DCP nudge for a third." That's a *more* compelling demo than 5 static cards.
- Build a sales-mode toggle (or fixture data) so demos can showcase the hero with whichever variant the salesperson wants in the moment.
- The lanes below still carry sales-relevant content (employer messages, recommended DCPs, challenges). Sales has 8–12 surfaces on the page total — the hero is one of them, not the only one.

### Cost B · Employers expect their message in the hero

Self-insured employers buy the platform and expect their message (open enrollment, wellness fair, benefits change) to land at the top of home.

**Handling — non-negotiable mitigations:**
- **Employer must-show flag.** Employers can mark a message as "guaranteed hero placement" for a date range. The priority engine honors this above algorithmic logic. Implemented as a TTL field on employer content.
- **Floor allocation.** Even when other content competes, employer messages get the hero at least 2 of every 7 visits. Avoids the case where a user with a hot challenge never sees employer comms.
- **Always-visible employer lane.** "From your employer" is its own labeled section regardless of hero allocation. Employer messages that don't win the hero this session still appear there.

This is the most important talking point with client-side stakeholders. Single hero does not equal "less employer surface area" — it equals "smarter hero allocation, plus a dedicated employer lane that's always present."

### Cost C · The "we want to highlight 3 things" instinct goes unsatisfied

Internal teams (sales, product marketing, leadership) often want the hero to do everything.

**Handling:**
- The hero is one slot. Three things still get to the top of the page — they just don't all fit in the hero. Tracker tiles, ongoing programs, and the labeled lanes give 8–12 above-fold or near-fold content surfaces depending on viewport.
- Discipline question: if every team wants their message in the hero, the hero ends up being about nothing. Forcing "the one most important thing for this user this session" prevents the page from becoming an internal message board.

### Cost D · Editorial decisions become political

If the hero is one slot, who decides what fills it? Today the carousel lets every team get a slot without a fight.

**Handling:**
- Codify the priority engine logic (next section). Make it deterministic, auditable, and tunable.
- Employer must-show flags + algorithmic priority + fallback rules = clear allocation rules. Teams can argue about the rules, not about each session's outcome.

---

## Logic to lock down before this becomes a spec

Open questions Davinder named — answers below as recommendations.

### How is the hero item decided?

**Priority engine** with deterministic ordering. Engine evaluates user state + active content and picks the highest-priority item. Recommended order:

| Tier | Source | Trigger condition |
|---|---|---|
| 1 | **Employer must-show message** | Flagged by client; within active date window |
| 2 | **Time-pressured user obligation** | Active challenge with imminent deadline; biometric screening due; HRA expiring |
| 3 | **DCP re-engagement** | User enrolled but inactive for 3+ days |
| 4 | **New employer message** (non-mandated) | Within first 7 days of publish |
| 5 | **Recommended DCP** based on interests | User not enrolled; matches declared interests |
| 6 | **Active challenge engagement** | User is in a challenge; not deadline-pressured |
| 7 | **New challenge invite** | User has a pending team invite |
| 8 | **Interest-relevant content** | Article, library, journey matching declared interests |
| 9 | **Sales / product marketing default** | Fallback when nothing else qualifies |

**The point isn't this exact list — it's having a list at all.** Today the carousel doesn't decide. Tomorrow the engine has to.

### Does the hero refresh between visits?

**Recommendation: per-session, not per-visit.** Hero is computed when the user opens the app and stays stable until they close and reopen. Mid-session refresh would feel jarring (Peak-End — the user's mental model of "what was on home" gets disrupted).

**Within a session:** hero stays put. **Across sessions:** hero recomputes against the current priority engine state.

**Caveat:** if the user takes the hero's CTA (e.g., logs steps, continues a session), the engine should re-evaluate on next visit and not show the same item again. Otherwise the hero feels like it's not paying attention.

### What's the order of importance?

Same as the priority engine table above. Two principles:

- **Time-bound > evergreen.** Things with deadlines or windows beat things without.
- **User-initiated > algorithmic recommendation.** A program the user enrolled in beats one we suggest.
- **Mandated > algorithmic.** Employer must-show flags override the engine.

### What about employer pushback?

Covered above (Cost B). The two mechanisms — **must-show flag + floor allocation + always-on employer lane** — are the answer. If we ship without these, the employer pushback will be valid.

---

## Filter-as-drill-down (alternative to picker, captured)

Davinder's note: instead of a picker that requires a selection, allow drill-down/filter inside the personalized section. "Things I can do today, filtered by topic" rather than "pick one thing to focus on."

### What this is

A filter mechanism *inside* the "Things I care about" section, not a page-level picker. Implementation options:

| Option | What it looks like | Cost |
|---|---|---|
| **In-section tab strip** | "All · Sleep · Stress · Move more" tab row above the items in this section | Low — wraps existing list with a tab control |
| **"See all" → filter screen** | Inline section shows top 3 items; "See all my interests content →" routes to a dedicated screen with full filter UI | Medium — new screen, but reuses content list |
| **Per-item tag tap** | Each item's interest tag ("Sleep") is tappable, filters the section to that tag | Lowest — uses tags already in v3 design |

**Recommendation: start with per-item tag tap.** It's already in v3 (the small "Sleep" / "Stress" / "Move more" tags on each item). Make those tags actually clickable; tapping filters the section. No new component, no new screen, no chrome.

### Why it's not the same as a picker

| Picker | Filter |
|---|---|
| Mandatory or persistent CTA | Optional, ignorable |
| Modal or page-reframing | Scopes one section only |
| "Tell us which one thing matters" | "Here's everything we picked for you; narrow if you want" |
| User input required | User input optional |
| Failure mode: "what if user skips?" | No failure mode — section works without filter |

### When to add it

Don't ship in V1. Ship the listening-explainer first (next section). If users tell us the personalized section feels overwhelming or hard to scan, *then* add filter-as-drill-down. Don't preemptively add complexity.

---

## The personalization philosophy: listen and call it out

Davinder's words, captured verbatim:

> "The most important thing we can do to personalize this page is to listen to what they told us in the onboarding selector and then make sure the page specifically calls out that we listened. I.e., this is the information. These are the things that you should do based upon the things you told us you are interested in. That needs to be very clear."

### The principle

**Personalization is not algorithmic guessing. Personalization is closing the loop on user-declared input.**

The user told us their wellbeing interests at onboarding. The home page's job is to demonstrate, visibly, that we acted on that. Not "here's stuff we think you'll like" — "you told us you wanted Sleep, Stress, and Move more; here's content for that."

This is a Recognition-Over-Recall play (Nielsen #6). The user shouldn't have to remember what they told us; the page should remind them. It's also a trust play — "we listened" is the strongest personalization signal we can send.

### How to operationalize it

Three places this should be visible on the home page:

**1. Section sub-header — make the listening explicit + offer in-place edit.**

Current v3 copy: *"Based on interests you picked at onboarding · Edit in profile"*

Recommended upgrade:

> **Things I care about**
> Your interests: **Sleep · Stress · Move more**.   *[Edit]*

The interests are *listed by name in the sub-header*. The user reads exactly which inputs the platform is acting on. That's the proof-of-listening. The **[Edit]** affordance opens an inline sheet/modal on home where the user can adjust their interests — no detour to profile, no page reframe.

The causal phrasing the user named — "Here's your interest, and because of that, here's what you're seeing" — is implicit in the layout: interests at the top of the section, content immediately below.

**Edit interaction (recommended):**

- Tap **[Edit]** → small modal/sheet opens with the full interests list, current selections checked
- User toggles selections (multi-select, no required count)
- Save closes the sheet; section refilters with new interests reflected in the sub-header
- Cancel closes without changes

This is **edit, not pick**. The user already has interests; we're letting them adjust. Different ergonomic from onboarding's pick-from-blank.

**2. Per-item interest tag (already in v3).**

Each content item in the section carries a small tag showing which interest pulled it. Already done — keep it. Optionally make it tappable for the filter-as-drill-down treatment above.

**3. Empty / day-zero state.**

If a user has no declared interests yet (rare but possible), the section becomes:

> **Things I care about**
> Tell us what you want to focus on and we'll fill this section with content for you.
> [Pick your interests]

This is the *only* place where a CTA prompts initial interest selection on home — and only when there's literally nothing to show. It's not a picker that re-asks; it's an empty-state nudge for users who somehow reach home without any interests on file.

### Why edit-on-home is not a picker

This is the distinction worth holding firm:

| Picker (rejected) | Edit-on-home (recommended) |
|---|---|
| Mandatory or modal interrupt | Voluntary affordance in a section sub-header |
| Required to access content | Section content shows regardless |
| "Pick one thing to focus on" | "Adjust the things you said you care about" |
| Page-reframing (whole home gates on selection) | Section-scoping (only refilters one section) |
| Onboarding-style pick-from-blank | Settings-style edit-existing-values |

**Edit is fine. Picker is not.** Davinder's earlier objection was to re-asking the user something they already answered. Letting them adjust answers they already gave is different — and useful.

### What this rules out

- No "we recommend" or "for you" framing. That's algorithmic-guess language. We're not guessing — they told us.
- No persistent filter chip in the chrome (separate from in-section editing).
- No explanation of "how we picked this for you." We don't need to. They told us. We listened. That's the entire transparency story.
- No required selection on home. Edit is always optional.

---

## Suggested v3 wireframe copy refinements (small, no rebuild)

Minor copy + affordance upgrades to the existing v3 file. Apply during the next polish pass; the edit-modal interaction is the only one that needs spec attention.

| Where | v3 current | v3 refined |
|---|---|---|
| "Things I care about" sub-header | "Based on interests you picked at onboarding · Edit in profile" | "Your interests: **Sleep · Stress · Move more**.   [Edit]" — interests listed by name; **[Edit]** opens an inline sheet/modal on home (not profile) |
| Edit interaction (new) | (not specified) | Tap **[Edit]** → modal sheet with interests list and toggles → Save refilters the section. Multi-select, no required count, cancellable. |
| "Things I care about" section header | "Things I care about" | Stays — already strong |
| Day-zero empty state for the section | (not designed) | "Tell us what you want to focus on and we'll fill this section with content for you. [Pick your interests]" |
| Hero source-tag (above title) | "Active challenge", "Open enrollment", etc. | Keep — it's already doing the editorial-label job |

The edit modal will reuse the existing interests-management UI (already built for onboarding/profile). No new component required — just a new entry point from home.

---

## Recommended next stakeholder conversations

Take this doc — or extracts from it — into these conversations:

| Audience | What to bring | Goal |
|---|---|---|
| **Sales lead** | Costs A + the "future state is better, not worse" framing | Get sales aligned that single-hero V1 is the bridge to a better carousel V2 |
| **Client services / employer-side PM** | Cost B + the must-show flag + floor allocation + always-on employer lane | Confirm the three mechanisms are sufficient to honor employer commitments |
| **Innovations / Eng lead** | "What single-hero buys us" §4 (no new Page Layout Element) + priority engine logic | Confirm engine is buildable from existing primitives |
| **John** | The whole doc, abridged | Sign off on single-hero V1 + commitment to dots-carousel V2 |

---

## Net summary

Single-hero V1 is the right call for technical and editorial reasons. It will produce stakeholder pushback — most legitimately from sales (demo flow) and employers (hero allocation). The pushback is handleable with three mechanisms (must-show flag, floor allocation, always-on employer lane) plus the V2 commitment.

The bigger personalization win isn't in the hero anyway — it's in making the page audibly "listen" by:

1. Showing the user's actual onboarding interests by name in the section that uses them
2. Letting them adjust those interests **on the home page** via a voluntary in-place edit affordance (not a picker, not a modal interrupt — an unobtrusive `[Edit]` link next to the listed interests)

That's the personalization story to lead with: *"Here are your interests. Because of that, here's what you're seeing. Adjust anytime."*

---

*Companion to `06-direction-update-may06.md`. No wireframe rebuild required; suggested copy refinements above for the next v3 polish pass.*
