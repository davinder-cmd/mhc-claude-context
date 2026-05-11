# Pitch Talking Points — Home v1

**For:** Davinder · meeting with Jill and Darcy · 2026-05-11
**Companion to:** `nav-home-v4-listened.html` (the v1 prototype)
**Format:** First person, conversational. Speak it, don't read it.

---

## Opening — frame what I did

Thanks for the time. I want to walk you through where I've landed for a v1 of the home redesign. I'm not coming in with a finished spec — this is one version. I have a few more I'm working on. But this one is far enough along that I want to put it in front of both of you and get reactions.

The frame I used: John's offsite list is the anchor. Darcy's brief gives the interpretation layer. Jill's exploration provided most of the building blocks. My job, the way I read it, was to take all of that and land something that hits the personalization mark John asked for without overwhelming the page. I tried not to boil the ocean. There's a lot we *could* do here. This isn't that.

**One thing to set up front:** I optimized this version for **form and function**, not for visual treatment. What I worked on was *what's on the page, in what order, with what affordances, with what labels.* Type, color, photography, spacing polish, motion — all of that is downstream. If you push on a visual choice in this rendering, my honest answer is "I haven't optimized for that yet." Form and function first, then we tune the rest.

**Also worth flagging:** this prototype shows the **default state.** It does not yet reflect the zero states or component variations — empty interest content, no active programs, no active challenge, single-reward-type clients, broken tracker sync, no employer items, disconnected device, skeleton loading. Those all need to be designed before we ship. v1 is the populated case so we can agree on the shape of the populated case first.

---

## The three calls I made on form and function

Before I walk through the design, three calls I was holding in my head the whole time. These are structural decisions, not visual ones:

**One — the user has to feel we listened.** Onboarding already collected their interests. The old home didn't show that signal anywhere. The "Just For You" section wasn't actually for you — a generic mix labeled as personal. That's the trust break we have to close, and we close it through *labeling and structure,* not type or color.

**Two — the user has to be able to change their mind.** They selected interests at onboarding. They should be able to adjust without leaving home. The affordance has to sit *next to the content that responds to it* — that's an information-architecture call, not a styling call.

**Three — fewer things per section, in priority order.** This isn't about whitespace or density treatment. It's about *what's on the page* and *how many items each section carries.* One hero, one insight, three programs, one challenge, four reward tiles. Each section earns its slot by surfacing the highest-priority item of its kind and pointing to the rest. Count and order, not spacing.

Everything in this version traces back to one of those three.

---

## What's in v1 — mapped to John and Darcy

Top to bottom:

**Greeting.** Time-of-day plus first name. Two words, generous spacing. Nothing else competing.

**One hero, flexible content.** This is John's directive #3. One slot. The eyebrow tag above the title — `Based on your interests` in this rendering — is the source label. Same slot also carries `From your employer`, `Active challenge`, `From Acme` depending on what the priority engine surfaces. The hero is mixed-purpose, and the tag is how we make that obvious without making it look like a UI badge.

This matters for two reasons. One, sales doesn't lose the hero. They had four or five carousel slots before; now there's one, but the hero is still in their rotation. Two, the eyebrow makes it readable to the user — they can tell at a glance whether the thing on top is a recommendation, a benefits message, or a sales push.

**Based on your interest · From your employer.** Two paired sections immediately below the hero. Distinct titles. The left lane is the personalization payoff — "we used the interests you gave us at onboarding, here's what we surfaced." The footer makes that explicit — `See 7 more matched to your interests` and `Edit Interests` right there. Right lane is `From your employer`, with its own `See three more from Acme` link.

That right lane is how employers don't lose real estate. The carousel used to give them four or five slots. They still get a permanent, labeled section on every render — and `More from Acme` carries the long tail. That's a structural win for them, not a loss.

**This week.** Tracker — four metrics, weekly view, single row. This is the Darcy direction to reduce tracker footprint. Steps, sleep, calories, active minutes. Source line directly under the title says when it last synced and what device — `Synced 4 minutes ago · Source: Apple Health`. That sync state is the trust signal that the data is live and the device is connected. It's small, but it's the thing users complain about losing visibility on.

**Insight.** AI Insight band right under the tracker. One takeaway, one action, refresh button. Per Darcy, this stays — and it's our differentiator vs. Personify, where their AI explains without acting.

**Continue your programs.** This is the "easier access to ongoing programs" line in Darcy's brief — and it's one of the things John specifically asked for. Three DCP cards, progress bar, dollar-at-completion inline. Pick-up-where-you-left-off, made visible.

**Your challenge.** Single conditional card. Active team challenge with day count and team rank. Renders only when there's actually something to surface.

**Your rewards.** Four-up tiles at the bottom — gift card, points, raffle, store credit. I want to flag this one separately. (See below.)

**Bottom tab nav.** Five tabs on mobile. Frame, not content. The nav design is being addressed in another document, so I'm not litigating placement here.

---

## On the carousel removal — nobody loses real estate

This is the line I want to be ready with for both sales and the employer team. The carousel used to surface four or five items. v1 collapses that to one hero. On the surface, that looks like a loss. It isn't, and here's why:

- **Sales** still owns the hero rotation. The priority engine puts sales/announcement content in that slot when it's the highest-priority thing to show.
- **Employers** now have a permanent, labeled lane that renders every visit. They don't have to *win* the hero to be seen — `From your employer` is always there, with three+ items via `More from Acme`.
- **Interest content** has the same — permanent left lane with `See 7 more` to expand.

The net is: one slot for the highest-priority hero moment, plus two permanent sections that scale to whatever the client has loaded. The real-estate math is the same or better. The cognitive load is lower because the user sees one thing at a time instead of a swiping carousel.

---

## On rewards and challenges — flagging this one as open

Rewards is at the bottom of v1. That's a deliberate choice, but I don't think it's settled.

Two reasons it's worth a conversation:

**One — rewards is one of MHC's competitive moats.** Configurability across gift cards, points, raffles, store credit is something Personify can't do and Sharecare can't do. Most platforms only do points. The home should make that flexibility visible, not bury it.

**Two — Personify and Virgin Pulse promote points-as-progress to the top.** It works for them because they only have one currency. We have up to four reward types. A points-only chip at the top would misrepresent the economy. A four-type strip at the top is a lot of weight on a section that's, for many users, secondary information.

For v1 I left it as a four-up summary at the bottom — calm, comprehensive, doesn't crowd what's above it. But I'd want to discuss whether some clients should see rewards promoted higher when their reward economy is rich. That's a "weight scales with configuration" call we can defer past v1.

**Challenges** is conditional — single card, only renders when there's an active engagement. That's the right scope, and there's no real conversation needed there.

---

## On personalization — where I want to land the conversation

This is the part I want to put a fine point on, because I think it's the place where Jill and I might be looking at the same problem differently and I want to make sure we're aligned.

John's offsite item #6 says "simplified personalization that works — add filters to pages so the user can declare in session what they want to work on, and simultaneously shut down the current personalization engine."

I read the *intent* of that line as: give the user real control over what they see, and stop pretending the algorithm knows them better than they know themselves. I agree with that intent completely. The thing I'd push back on, gently, is the *mechanism* — a page-level filter.

Here's why I don't think the filter works as a home-page-level control. Two reasons:

**One — most of the home isn't personalized.** Tracker shows device data. Continue-your-programs shows whatever DCPs the user is enrolled in. Employer lane shows what the employer pushed. Challenge shows the active challenge. Rewards show the reward configuration. Even the hero is mixed-source — sometimes interest, sometimes employer, sometimes sales. The only sections that genuinely respond to an interest filter are the `Based on your interest` lane and, *sometimes*, the hero. So if I'm a user and I click a `Sleep` filter at the top of the page, almost nothing changes. That's a worse experience than no filter at all — the page promised a change it couldn't deliver. That's the Norman mapping principle — a control should map cleanly to what it changes.

**Two — grouping.** Gestalt's common region tells us that controls sit *within* the thing they affect, not above it. A page-level filter implies page-level scope. If the filter only really controls one lane, the right place for the filter is *inside that lane.* That's what `Edit Interests` is in v1 — it lives next to the lane it actually controls. Same intent as John's filter idea. Different scope. The user gets the control they want, in the place where the control will actually do something.

So my recommendation — and I want to put this as a recommendation, not a directive — is that the response to John's #6 looks like this:

| What John asked for | How v1 delivers it |
|---|---|
| User can declare in-session what they want to work on | `Edit Interests` adjacent to the interest lane — modal sheet, reuses onboarding UI |
| Simplified personalization | Source-labeled sections + source-tagged hero — the user can *see* what's personalized and what isn't |
| Shut down the current engine | Same — the algorithmic "Just For You" mix goes away. What's left is explicit provenance per section |

That gives John what he wanted at the level of *user outcome.* It just doesn't deliver it as a page-level filter, because a page-level filter would be a mechanism that doesn't fit the page.

I'd like to land this with the team rather than have it come up later. If Jill or anyone else has a strong reason the page-level filter is still the right shape, I want to hear it before we move forward.

---

## What this version is *not*

A few things I deliberately didn't put in v1, and I want to call them out so we don't think they were missed:

- **Not a visual pass.** Type sizes, color register, photography, spacing rhythm, motion — none of that has been optimized. This is form and function first.
- **Not all the states.** Zero states and component variations aren't here. The default-populated case is what I'm showing. Empty interest content, no active programs, no active challenge, broken tracker sync, single-reward-type clients, no employer items, disconnected device, skeleton loading — those all still need design before ship. v1 nails down the populated shape so we can agree on the spine first.
- **No filter chip at the top of the page.** Per above.
- **No `Just For You` mixed surface.** Replaced by the source-labeled lanes.
- **No carousel.** Per John's directive #3.
- **No left nav** in this rendering. That's being handled in another document.
- **No skeleton screens shown.** That's eng remediation, not visible design. Hooks are ready.
- **Rewards stays at weight 2 (bottom).** Open for discussion per above.

---

## Wrap — what I'd like to leave with

Three things, ideally:

**One — agreement that source labeling plus scoped Edit Interests is our answer to John's #6.** Not a page filter. Source tags on hero, lane-titled section, edit affordance next to the lane.

**Two — alignment that employers and sales aren't losing real estate.** Hero rotation plus permanent lane plus `More from Acme` = the same or more surface area, presented more calmly.

**Three — a parking lot for rewards placement.** I'm fine with it at the bottom for v1. But I want it on the list to revisit when we have client config data to look at.

If there are objections, I want them now. This is one version — there are others coming — and I'd rather know what's wrong with this one before I refine or branch.

---

## If pressed on specific points

Quick reminders for moments where I might wobble:

- *Why not a page-level filter?* Because most of the home doesn't respond to it. Filter affordances should match the scope of what they control — that's Norman's mapping. A whole-page filter that only changes one lane is a contract the page can't keep.
- *Why is the personalization signal in eyebrows and section titles?* Because the user needs to see, at a glance, *which* content is personalized and *what signal* drove it. The eyebrow on the hero says "this slot used your interests." The lane title says "this whole section is shaped by what you told us." That's the listening signal.
- *Why one hero?* John's call. The eyebrow tag preserves the carousel's source-distinction without preserving the swipe.
- *Why does Acme not lose real estate?* Permanent `From your employer` lane on every render, plus `More from Acme` for the long tail. They no longer rely on winning the hero to be seen.
- *Why is Continue Your Programs above Things I Care About?* John named "easier access to ongoing programs" specifically. CS named it. It's the second-highest-weighted module after the hero.
- *Why rewards at the bottom?* It's optional/client-configurable; not every client has it; for clients with multiple reward types a top-of-page strip would be heavy. Open to revisit when we have config data.
- *Why no `Just For You`?* It was a generic mix presented as personal. That's the trust break we're fixing. Source-labeled sections solve the same problem without lying about what's personalized.
- *What if Jill pushes the filter idea hard?* Two moves. One: validate the intent — *the user should be able to control what they see, agreed.* Two: redirect the mechanism — *the right place for that control is inside the section it actually controls, which is what Edit Interests does.* It's not "no filter," it's "filter scoped to where the filter can deliver."
