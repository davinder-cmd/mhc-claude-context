# Home Redesign — Review, Concerns, Recommendations

**Date:** 2026-05-06
**For:** Davinder · meeting tomorrow with Jill and Darcy
**Status:** Walk-in document. Single reference.

---

## My goal

Review John's recommendations. Review Jill's designs. Offer my thoughts, feedback, and concerns. Provide recommendations — framed as **options for consideration**, not as a final spec. They may be taken, modified, or set aside; the point is to surface them clearly.

---

## What I'm reviewing

| Source | Document |
|---|---|
| **Offsite follow-up memo (April 2026)** | From John / leadership. UI/UX-relevant items 1, 2, 3, 4, 6. |
| **Darcy's "Home Page Focus" brief** | Takes the offsite items + adds interpretation + CS asks. The redesign brief. |
| **Jill's designs** | `outputs/MHC UI/` — exploration including focus picker, hero variants, ongoing programs, density studies |

---

## The two layers — being clear about what came from where

**John's items (offsite follow-up memo, UI/UX subset):**

| # | Initiative | Note |
|---|---|---|
| 1 | Logo in top / center of mobile and web | Direct, no alternative offered. |
| 2 | Eliminate side nav (or keep + clean up, or make dismissible) | **Davinder + Jill decide** based on current config; bring in Kian if eng required. |
| 3 | One hero image only — **or Claude's recommendation of "hero image + 3 things to do at top of screen"** | **Davinder + Jill decide.** This is on the table. |
| 4 | Eliminate spinners (or skeleton-load like Facebook) | **Davinder + Jill decide** based on current config. |
| 6 | Simplified personalization — **add in-session filters AND shut down the current personalization engine** | Both halves matter. The shutdown is a real ask. |

**Tactical / component-level remediation.** Items 1, 2, 4 don't drive the design conversation tonight. Items 3 and 6 do — they have alternatives on the table that we're being asked to choose between.

**Darcy's Home Page Focus brief** layers on the interpretation:

| Item | Source | My read |
|---|---|---|
| One hero on web + mobile | Darcy carrying offsite #3 forward | Note: offsite explicitly left "hero + 3 things" as alternative. Darcy's brief lands on single hero. We can question this. |
| Logo in top nav | Direct from offsite #1 | Handled by separate nav spec. |
| Simplified personalization | Darcy / CS | "Concept to test" — open. Adds filter framing from offsite #6. |
| Wellbeing interests as filter / focus | Darcy concept-to-test | Underspecified — easy to over-interpret as a mandatory chip. |
| Featured Client priority items | CS-named | Confirms employer messaging needs a real surface. |
| Easier access to ongoing programs | CS-named | New surface — not strongly present today. |
| **Tracker data** | Darcy direction (NEW) | Direction now: weekly view / fewer points / less real estate. Reduce footprint. Was kept-as-is in my prior synthesis. |
| **Tracker Insights** | Darcy — keep | Stays on home. |
| **DCP AI Coach** | Darcy — DEFERRED | No longer an open question. Out of V1. |
| Three shell scenarios | Darcy / cross-cutting | Mobile / w-leftnav / no-leftnav. |
| Use full browser page | Eng-named | Layout/CSS concern, not new component. |
| 508 a11y, fast page load | Cross-cutting | Non-negotiable. |

**My concerns and recommendations live primarily in Darcy's interpretation layer** — but tonight we also need to surface the two open decisions from the offsite (hero alternative, personalization shutdown).

---

## Jill's designs — my read

She produced strong building blocks and useful options, but several pieces drift outside what John asked for.

**Strong, worth keeping:**
- 50/50 hero (photo + copy panel) — the most accessible single-hero treatment she explored
- Three-shell architecture concept — same content tree, different application frame
- Source-labeled lanes — distinguishes user content from employer content
- Tracker sync states (fresh / recent / stale / broken) — handles real-world data messiness
- AI Insights state model — server-driven, simple to render
- Hero option exploration on no-left-nav layouts — gave us option B as the answer

**Where I have concerns** (next section).

---

## My concerns

Five things in the current direction give me pause. They're substantive, not stylistic.

### 1. The single-focus framing only applies to part of the page

The hero might say "Sleep," but the tracker, employer content, and ongoing programs don't change. The page implies more personalization than it actually delivers, and I think that gap is something users will feel even if they can't name it.

### 2. The focus chip asks more of the user than we need to

Onboarding already captured their interests. Asking them to pick again narrows it to one when they likely care about two or three. And if they skip, the home they see is weaker than the one we're designing — which means we'd effectively be designing two experiences.

### 3. Locking the hero to focus limits what the slot can do

The carousel — or whatever fills that top slot — is something sales relies on heavily in demos. It typically drives much of the pitch. If we lock it to interest content, we're taking that away. Employers also lose it for benefits messaging and time-bound priorities like open enrollment. That's a fair concern from both sides.

### 4. The personalization signal is weak

The strongest personalization we can do is *visibly demonstrate that we used what the user told us at onboarding*. The current direction buries that — it's implicit. Users who don't notice the chip won't know we listened.

### 5. Rewards is referenced but underweighted

Rewards shows up in Jill's canonical home as a points tile inside the Today strip (1,250 this month) and as a generic "Wellness rewards" secondary banner. That's a gesture, not a surface. Rewards is our strongest behavioral lever — gift cards at $100/DCP, plus points, currency, raffles. The lever deserves to show up where the value applies: inline on DCP cards, challenge CTAs, action items. A points tile alone doesn't carry the dollar story.

---

## My recommendations (as options)

Each is offered as a position to consider. I'll defend the rationale; the team can adopt, modify, or reject.

### Option A · Hero stays single, but flexible

**Recommend:** keep one hero slot but don't lock it to user focus. A priority engine fills it from a tiered list (employer must-show → time-pressured user obligation → DCP re-engagement → new employer message → recommended DCP → active challenge → new challenge invite → interest content → sales/marketing default). Per-session refresh, not mid-session.

**Why:** preserves John's "one hero" decision; addresses sales/employer concerns about losing the slot.

**Acceptable alternative:** if engineering can ship a clean dots-below carousel (single-card-visible, swipeable) sooner than expected, multi-card hero comes back in V2.

### Option B · Two clearly distinct sections, labeled by source

**Recommend:** "Things I care about" (user interests) and "From your employer" (Featured Client priority). Distinct visual treatments. No filter chip between them. This is the personalization story.

**Why:** addresses John's "simplified personalization" + "Featured Client priority items" goals together. Closes the gap from concern #1 — every part of the page now visibly responds to its source, not just the hero. And it changes the math on the hero allocation argument: employers have a permanent, labeled section regardless of who wins the hero in any given session. They're not relying on winning the hero to be seen.

**Acceptable alternative:** if employer content is sparse, the employer lane shrinks rather than disappearing — keeps the source distinction visible.

### Option C · Edit interests on home, never re-pick

**Recommend:** show user's interests by name in the section sub-header (e.g., *"Your interests: Sleep · Stress · Move more · [Edit]"*). [Edit] opens a modal sheet on home (reuses existing interests UI from onboarding/profile). Voluntary. Multi-select. No required count.

**Why:** delivers John's "wellbeing interests as filter" concept without re-asking. Makes the "we listened" signal visible (concern #4). Avoids the picker-skip-fallback design problem (concern #2).

**Acceptable alternative:** if there's strong evidence users want more granular per-session control, add per-item interest tag tap (which may navigate to a focus page rather than filter the section in place — see open question #7). Don't ship in V1.

### Option D · Reward references inline, not as a chip

**Recommend:** reference rewards on items where they apply ("$100 at completion" on DCPs, "+50 pts to attend" on events, "+5 pts" on micro-content). No persistent chip in the application frame. Plus: when a client has rewards configured, surface an optional aggregated rewards section that **scales to display 1–4 reward types** (direct rewards / points + levels / raffles / store credit).

**Why:** we have multiple reward types (gift cards, points, currency/store, raffles); a chip would oversimplify. Inline references work for any reward type. **Crucially: rewards configurability is one of MHC's competitive moats — we win deals over more polished competitors specifically because of this flexibility.** Most platforms only do points; we accommodate up to four reward types in one client setup. The home page should make that flexibility *visible*, not hide it. The multi-type display is a sales moment.

**Acceptable alternative:** queue a rewards-focused home as a future iteration (already named in canonical doc). Inline refs + the optional aggregated section are the V1 answer.

### Option E · Tracker section — reduce footprint, keep Insights

**Recommend:** keep Tracker Insights on home; reduce the tracker data footprint per Darcy's new direction. Specifically: shift to a weekly view (Steps · Sleep · Calories · Active Min for the week) instead of today's daily snapshot, and let it occupy less vertical real estate. Keep all four metrics but in a more compact row.

**Why:** Darcy's brief now explicitly directs reduction ("weekly view instead of today, and/or fewer data points, and/or less real estate"). Removing tracker data entirely is too aggressive — it's in production and members rely on it. Reducing footprint splits the difference.

**Acceptable alternative:** drop to 3 tiles instead of 4, or use a single-row "this week" summary card. Let Jill explore which feels right at each breakpoint.

### Option F · Three content widths: 375 / 912 / 1200

**Recommend:** design for these three. Not 1600 — that assumes nav-on-top, which isn't real for V1.

**Why:** matches today's reality. 1200 is the upper bound; 912 is current state with left nav present; 375 is mobile.

**Acceptable alternative:** when nav-on-top ships, content can stretch wider. Don't pre-design for it.

---

## Open questions for the meeting

These need decisions before any of this becomes a spec — not all of them are mine to make.

1. **Hero — single only, or "hero + 3 things to do"?** The offsite memo explicitly left this open for me + Jill to decide. Darcy's brief lands on single. My lean is single for V1 (Innovations limitations, editorial discipline) — but worth surfacing the alternative is on the table.
2. **Hero allocation rules.** Does an employer must-show flag exist today, or is that a new build? If new, what's the priority order between must-show and time-bound user obligations?
3. **Floor allocation for employers.** What's the minimum frequency they're guaranteed in the hero?
4. **Personalization engine shutdown.** Offsite #6 says to "shut down the current personalization engine" alongside adding in-session filters. What's the timing? What clients depend on the current engine? This needs a coordinated plan, not just a design.
5. **Tracker reduction — what shape?** Darcy's brief says weekly view / fewer points / less real estate. My recommendation is weekly view at compact 4-tile. Could be 3 tiles, could be a single summary card. Jill to explore.
6. **Edit-interests modal entry from home.** Does the existing interests UI accept being invoked as a modal sheet, or does it require a new entry point?
7. **Ongoing programs cap.** What if a user has more than 4? Need an "+N more" overflow.
8. **Is interest selection currently mandatory at onboarding?** Likely not. If users can land on home with no interests, define the default state of the personalized section — instinct is to shift the title to "Recommended" with algorithmic content until interests are filled in.
9. **Tapping an interest tag — filter in place or navigate to a focus page?** Different IA. Leaning toward a dedicated focus page, but worth deciding before spec.
10. **Will sales accept single-hero V1?** Need to validate the priority-engine framing with them.
11. **Will client services accept the hero allocation rules?** Especially the floor and must-show flag.

---

## Reference: companion files

This document is the summary. Detail lives in:

- `00-requirements-from-pd-innov.md` — canonical John goals
- `02-jill-artifacts-critique.md` — what works and doesn't in Jill's exploration
- `06-direction-update-may06.md` — picker push-back, hero flexibility, tracker metric set
- `07-single-hero-talking-points-and-personalization.md` — full hero allocation logic + edit-on-home rationale
- `home-wireframes-v4-content-widths-375-912-1200.html` — visual reference at 3 widths
