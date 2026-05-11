# Pitch Talking Points — Home v1 (short)

**For:** Davinder · meeting with Jill and Darcy · 2026-05-11
**Companion to:** `nav-home-v4-listened.html`
**Format:** Conversational. Speak it like you'd say it.

---

## Set up

Thanks for the time. Quick walk-through of one version of the home — I have others in flight, this one's far enough along to put in front of you.

Two things up front so we don't trip on them:

- I optimized for **form and function** here, not visuals. What's on the page, what order it's in, what affordances it has, what it's labeled. Type, color, photography, polish — downstream.
- This is the **default populated state.** Zero states and variations aren't here yet — empty content, broken sync, no programs, single-reward clients, all of that. We need to design those too, but I wanted to lock the shape of the populated case first.

---

## What I went for

Three structural calls:

1. **The user should feel we listened.** Onboarding already captured their interests. The old home didn't show that signal anywhere — "Just For You" was a generic mix labeled as personal. That's the trust break.
2. **The user should be able to change their mind, in place.** Edit next to the section that responds to it. Not at the top of the page.
3. **Fewer things per section, in priority order.** One hero, one insight, three programs, one challenge, four reward tiles. Count and order — not whitespace.

---

## The walk-through, fast

- **Hero** — one slot, mixed-purpose. Eyebrow tag tells you the source — `Based on your interests`, `From your employer`, `From Acme`, `Active challenge`. Same slot, different tag.
- **Based on your interest** / **From your employer** — two paired sections under the hero. Each is labeled. Each has its own "see more" and the interest one has `Edit Interests` right there.
- **This week** — tracker, weekly, 4 metrics, one row. Sync line under the title so the user knows the device is connected.
- **Insight** — one AI takeaway, one action, refresh button.
- **Continue your programs** — three DCPs, progress, dollar value inline.
- **Your challenge** — single card, conditional.
- **Your rewards** — four tiles at the bottom. Open conversation, see below.
- **Bottom nav** — frame, handled in another doc.

---

## Nobody loses real estate

This is the line for sales and the employer team. The carousel had 4–5 slots. Now there's one hero. Looks like a loss, isn't:

- Sales still rotates through the hero via the priority engine.
- Employers get a *permanent* labeled section every render, plus `More from Acme` for the long tail.
- Interest content gets the same — permanent left lane, `See 7 more`.

One slot for the highest-priority moment + two permanent sections that scale. Same surface area, calmer presentation, one thing at a time.

---

## Personalization — the part I want us to land on

John's offsite #6 says: add filters so the user can declare in-session what they want to work on, and shut down the existing engine.

I want to land the **intent** — give the user real control, stop pretending the algorithm knows them better than they do. Totally agree.

I'd push back on the **mechanism** — a page-level filter. Two reasons:

1. **Most of the page doesn't respond to it.** Tracker, programs, employer, challenge, rewards aren't interest-driven. Only one lane and sometimes the hero. So a `Sleep` filter at the top changes almost nothing. That's Norman's mapping — a control should map to what it actually changes. Otherwise the page promises a change it can't deliver.
2. **Grouping.** Controls live inside the thing they control. If the control only affects one lane, it belongs *inside that lane.* That's what `Edit Interests` is.

So my read: source labels on the hero + section-titled lanes + Edit Interests next to the interest lane = John's intent, scoped to where it can actually deliver. Not "no filter" — filter scoped to where the filter works.

If anyone has a strong reason to keep the page-level filter, I want to hear it now, not after.

---

## Rewards — flagging it

Rewards is at the bottom in v1. That's a call, not a settled answer.

Two reasons it's worth a real conversation:

- It's one of our **competitive moats** — multi-type configurability. Most platforms only do points. The home should make that flexibility visible.
- But Personify and Virgin Pulse promote points to the top because they only have one currency. We have up to four types. A top-of-page strip is a lot of weight for what's, for many users, secondary.

For v1: four-up summary, bottom of page. Worth revisiting when we have client config data.

---

## What I'd like to walk out with

Three things:

1. **Agreement on the personalization answer** — source labels + scoped Edit Interests, not page-level filter.
2. **Alignment that sales and employers aren't losing real estate** — hero rotation + permanent lane + more-from-Acme.
3. **Parking the rewards placement** — fine at bottom for v1, on the list to revisit.

This is one version. There are others coming. I'd rather know what's wrong with this one before I refine or branch.

---

## If pressed

- *Why not a page-level filter?* Most of the page doesn't respond to interests. A filter that only changes one section is a contract the page can't keep.
- *Why is the personalization in eyebrows and titles?* So the user can see, at a glance, *which* content is personalized and what signal drove it.
- *Why one hero?* John's call. Eyebrow tag preserves the carousel's source-distinction without the swipe.
- *Why is Acme okay?* Permanent lane every render. They don't have to win the hero to be seen.
- *Why is Continue Programs above the interest lane?* John named easier access to ongoing programs. CS named it. Second-highest weight after the hero.
- *Why no `Just For You`?* It lied about being personal. Source-labeled sections fix that without lying.
- *If Jill pushes the filter hard?* Validate the intent (yes, real user control), redirect the mechanism (scope it to where it works).
- *On visuals?* I haven't optimized for visuals yet. Form and function first.
- *On the missing states?* This is the populated case. Empty/broken/single-config states are next.
