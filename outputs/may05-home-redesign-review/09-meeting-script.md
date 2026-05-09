# Meeting Script — Home Redesign Review

**For:** Davinder · meeting with Jill and Darcy · 2026-05-07
**Companion to:** `08-design-outline-and-meeting-prep.md` (full reference)
**Format:** First person, conversational. Speak it, don't read it.

---

## Opening — frame what I'm doing

Thanks for the time. I want to walk through how I'm reading the home redesign work — John's list, Jill's exploration, and where I've landed. I'm not coming in with a finished spec. I'm coming in with a review. I have some concerns and some recommendations, but I'm framing them as options for us to discuss. Take what's useful, push back on what isn't.

Let me start with John's goals, then move to Jill's work, then the concerns, then the options.

---

## What I'm anchoring to — and being clear about the layers

There are two layers to what we're working from, and I want to be clear about which is which.

**John's items, from the offsite memo — the UI/UX subset:**

- Logo top center on web and mobile
- Eliminate the side nav, or clean it up, or make it dismissible — Jill and I are tasked with picking the right approach
- One hero image only — *or* the alternative on the table, "hero plus three things to do at top of screen" — Jill and I are tasked with picking
- Eliminate spinners or use Facebook-style skeleton loading — same, our call
- Simplified personalization — add in-session filters, AND simultaneously shut down the current personalization engine that's weighing the system down

Items one through four are mostly component-level remediation. Items three and six are the ones that drive the design conversation tonight — they have alternatives on the table.

**Darcy's "Home Page Focus" brief** layers on the interpretation:

- Carries the offsite items forward and lands on single hero
- Adds Featured Client priority items
- Adds easier access to ongoing programs
- Calls out Tracker Insights stays on home
- New direction on Tracker data: weekly view instead of today, or fewer points, or less real estate — leadership wants this reduced
- DCP AI Coach is now explicitly deferred — it's no longer an open question
- Three shell scenarios, full browser page, 508, fast page load — cross-cutting

Most of what I want to discuss tonight lives in Darcy's layer plus the two open offsite decisions. John's items 1, 2, and 4 don't really need our attention right now — we deliver them, move on. Item 3 (hero alternative) and item 6 (personalization shutdown) are different. Those are real choices.

---

## Jill's exploration — what's working

Jill produced a lot of strong building blocks. Five things I'd carry forward:

The 50/50 hero — photo on the left, copy panel on the right. That's the most accessible hero treatment she explored. No overlay text on imagery, which solves the 508 contrast issue cleanly.

The three-shell architecture — same content tree, different application frame. We design once, render in mobile / left-nav / no-left-nav. That's the right structural call.

The source-labeled lanes — distinguishing user content from employer content. We don't surface that distinction well today.

The tracker sync states — fresh, recent, stale, broken. She handled the messy real-world cases.

The AI Insights state model — server-driven, simple to render. Good plumbing.

That's the foundation I want to keep.

---

## My concerns — five things that give me pause

Now the harder part. Five concerns. I'll keep each tight.

**One — the single-focus framing only applies to part of the page.** The hero might say "Sleep," but the tracker, employer content, and ongoing programs don't change. The page implies more personalization than it actually delivers, and I think that gap is something users will feel even if they can't name it.

**Two — the focus chip asks more of the user than we need to.** Onboarding already captured their interests. Asking them to pick again narrows it to one when they likely care about two or three. And if they skip, the home they see is weaker than the one we're designing — which means we'd effectively be designing two experiences.

**Three — locking the hero to focus limits what the slot can do.** The carousel — or whatever fills that top slot — is something sales relies on heavily in demos. It usually drives much of the pitch and lets them walk prospects through several things at once. If we lock it to interest content, we're taking that away. Employers also lose it for benefits messaging. That's a fair concern from both sides.

**Four — the personalization signal is weak.** The strongest personalization we can do is *visibly demonstrate that we used what the user told us at onboarding*. The current direction buries that. Users who don't notice the chip won't know we listened.

**Five — rewards is referenced but underweighted.** It shows up as a points tile in the Today strip and as a "Wellness rewards" secondary banner. That's a gesture, not a surface. Rewards is our strongest behavioral lever — gift cards at $100 per DCP, plus points and other types. The lever should show up where the value applies, inline on DCP cards, challenge CTAs, and action items. A points tile alone doesn't carry the dollar story.

---

## My recommendations — six options to discuss

These are my recommendations, framed as options. Some are worth more than others. Push back on anything.

**Option A — keep the single hero, but make it flexible.** One slot, but the content varies. A priority engine fills it from a tiered list — employer must-show messages first, then time-pressured user obligations, then DCP re-engagement, then recommended programs, then content. Per-session refresh, not mid-session. This preserves John's "one hero" decision and addresses sales and employer concerns at the same time.

**Option B — two clearly distinct sections, labeled by source.** "Things I care about" and "From your employer." Distinct visual treatments. No filter chip between them. *This is the personalization story.* It addresses John's "simplified personalization" and "Featured Client priority items" goals together. It also closes the gap from concern one — every part of the page now visibly responds to its source, not just the hero. And here's the thing that I think changes the hero allocation argument: even with a single hero, employers have a permanent, labeled section that's always there. So if the hero this session goes to a challenge or to interest content, the employer's message still has a dedicated home. They're not relying on winning the hero to be seen.

**Option C — let users edit interests on home, never re-pick.** Show their interests by name in the section sub-header — *"Your interests: Sleep, Stress, Move more · Edit."* Tap Edit, modal sheet on home, reuse the existing interests UI. Voluntary. Multi-select. Cancellable. This delivers John's "wellbeing interests as filter" concept without re-asking. Edit, not pick.

**Option D — reference rewards inline, plus an optional aggregated section that flexes to client setup.** Inline references on items: "$100 at completion" on DCP cards, "+50 pts to attend" on events, "+5 pts" on micro-content. No persistent chip in the application frame — we have multiple reward types and a chip would oversimplify. Plus, when a client has rewards configured, surface a small section that scales to show 1 to 4 reward types — direct rewards, points and levels, raffles, store credit. *This is important strategically:* rewards configurability is one of our competitive moats. We often win deals over more polished competitors precisely because we accommodate up to four reward types per client. Most platforms only do points. The home should make that flexibility visible, not hide it.

**Option E — keep Tracker Insights, reduce tracker data footprint.** Darcy's brief now directs reduction — weekly view instead of today, fewer points, or less real estate. My take: keep all four metrics but shift to a weekly view in a more compact row. Steps, sleep, calories, active minutes for the week, in less vertical space. Insights stays on home as-is. We don't remove tracker data — that's a regression — but we make it earn its space differently.

**Option F — design for three content widths: 375, 912, 1200.** That's mobile, current desktop with left nav, and the upper bound. Not 1600 — that assumes nav-on-top, which isn't real for V1. When nav-on-top eventually ships, we can stretch wider. Don't pre-design for it.

---

## Open questions I want us to answer

A few things I can't decide alone. I want answers, or at least direction, on these:

The hero alternative. The offsite memo explicitly left "single hero" versus "hero plus three things to do" open for me and Jill to decide. Darcy's brief lands on single. My lean is single for V1 because of Innovations limitations and editorial discipline — but I want to surface that the alternative is officially on the table, in case anyone wants to argue for it.

Hero allocation rules. Does an employer must-show flag exist today, or is that a new build? If new, what's the priority between must-show and time-bound user obligations like a challenge deadline?

Floor allocation. What's the minimum frequency employers are guaranteed in the hero?

The personalization engine shutdown. Offsite item six explicitly says to shut down the current personalization engine while we add in-session filters. That's a coordinated plan, not just a design change. What clients depend on the current engine? What's the timing? Worth flagging that this is a real piece of work.

Tracker reduction shape. Weekly view, fewer points, less real estate — Darcy's brief is directional. I want Jill to explore whether weekly-at-four-tiles works, or we go to three tiles, or a single summary card. I have a preference but not a strong one.

The edit-interests modal. Can we invoke the existing interests UI as a modal sheet from home, or does that require a new entry point?

Ongoing programs overflow. What happens when a user has more than four programs? We need a plus-N-more pattern.

Is interest selection currently mandatory at onboarding? I don't think it is. If it's optional, a real share of users will land on home with no interests, and the personalized section needs a default state. My instinct is the section title shifts to "Recommended" with algorithmic content until they fill in interests.

When a user has interests and taps one — say Sleep — does that filter the section in place, or navigate to a dedicated focus page? Different IA implications. I'm leaning focus page.

And the big one — sales and client services need to weigh in on single-hero V1 with the priority-engine framing. I don't want to lock this without their voice.

---

## Wrap — what I'd like to leave with

Three things, ideally:

One — alignment that single hero is V1, with the priority engine logic in concept. Even if we don't lock the tiers tonight, we agree the slot is flexible and engine-driven, not focus-locked.

Two — a decision on the focus chip. My recommendation is to drop it in favor of the section header and edit affordance. If we keep it, I want to understand why.

Three — a path on the open questions. Who owns each, by when. I don't need answers tonight. I need to know how we're going to get them.

One thing I want to land on the way out: the design as a whole is more generous to employers than it might look at first read. They have a permanent labeled section that's always present, regardless of who wins the hero in any given session. So the hero allocation conversation isn't winner-take-all. That changes the math.

Anything I missed? I want to hear where I'm wrong.

---

## If pressed on specific points

Quick reminders to myself for moments where I might wobble:

- *Why not a focus chip?* Because it's a contract the page can't keep, and it re-asks what onboarding already collected. The right signal is showing the actual interests by name.
- *Why a flexible hero?* Because sales and employers have legitimate uses for the slot that aren't user-interest content. Locking it means losing those uses.
- *What about employer pushback on hero allocation?* Three things: must-show flag for guaranteed placement, floor allocation across visits, and the dedicated "From your employer" section that's always there regardless of hero allocation. They're not relying on winning the hero to be seen.
- *Why edit, not pick?* If the user has interests from onboarding, letting them adjust is different from forcing them to choose. Edit ≠ pick. (Empty-interest users go through a "Recommended" default — see open questions.)
- *Why no rewards chip?* Multiple reward types. A points-only chip would misrepresent the economy. Inline refs scale to any type — and when a client has rewards configured, an optional aggregated section flexes to show 1 to 4 types.
- *Why does the rewards setup matter?* Configurability is a competitive moat. We win deals over more polished competitors because we accommodate up to four reward types per client setup. The home should make that flexibility visible.
- *Why 1200 max?* Today's reality. 1600 was Jill's assumption based on nav-on-top, which isn't V1.
