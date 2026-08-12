# Content surfacing framework
*June 3, 2026 · Davinder*
*How any item is classified and delivered across the app's surfaces — home, hubs, the notification inbox, detail pages, push/email, partner SDK. Channel-agnostic; the home page is one application of it, not the scope.*

## The reframe
Two traps cause the muddle across our surfaces:
1. **We organize by data source** (recommendations, employer messaging, keep going (in progress), habits/goal tracking) when we should organize by **what the thing is** and **the member's job**.
2. **"Notifications" is treated as a content type** when it's a **delivery channel** — a time-ordered log. That's why recs and employer messages also show there: *any* item can be delivered as a notification. Its organized home is elsewhere.

## Scope: surfaces are channels
This is not a home-page spec — it's the content model the **whole app** shares. The places content appears — home, a hub, the notification inbox/bell, a detail page, push, email, an embedded partner-SDK surface — are all **channels**. Content is defined **once** (by class) and each surface simply renders it. Define the rules at the content level and every surface inherits them.

---

## The generalized model: Classes × Channels
Stop naming the boxes after features. Define every item by two axes, let behavior derive from them, and treat delivery as a separate layer.

- **Axis 1 — Job:** *Do* or *Know.*
- **Axis 2 — Origin:** who put it there — *System / Member / Sponsor / Event.* **Origin drives control.**

These produce a small set of **content classes**. Today's features are just instances:

| Generic class | = today's feature | Job | Origin | Control | Cadence |
|---|---|---|---|---|---|
| **Suggestion** | Recommendations | Do | System | Personalize (see more/less) | until accepted |
| **In progress** | Keep going | Do | Member | Manage / leave | resumes until done |
| **Goal** | Habits, steps, challenges | Do | Member | Edit / pause | recurring, **tracked** |
| **Broadcast** | Employer messaging | Know | Sponsor | Mark read — **no hide** | time-bound |
| **Event** | Reward earned, reminder, sync | Know | System / auto | Mark read / clear | transient |

(*Habits = the Goal class — a committed, recurring, measured thing; steps and challenges are the same class.*)

**Delivery is orthogonal.** Home, hub, push, email, SMS, the notification bell, a detail page, a partner SDK surface are **channels**. Any class can ride any channel, but its rules (control, dismissibility, voice) are defined **once at the class level** and stay constant wherever it appears. A Suggestion behaves like a Suggestion on home, in a hub, or in a push — you never re-decide per channel.

### Other conceptual models to layer in (all channel-agnostic)
1. **Lifecycle / state** — one state machine for everything: *suggested → accepted → in progress → done / expired.* Every channel reads the same state.
2. **Priority** — when a surface has limited slots (a hero, one card), a ranking function decides what wins *across* classes (urgency > commitment > freshness). (Generalizes the rewards "which one to highlight" question.)
3. **Routing & dedup** — which channel(s) a class uses; never notify + show + email the same item redundantly; frequency caps.
4. **Freshness / decay** — how long an item holds a curated slot before it ages into the time-log only.
5. **Voice / identity** — who's "speaking" (system, coach, employer, teammate) → drives tone, trust, dismissibility. The hero eyebrow already encodes this.
6. **Governance** — contractual (employer) or clinical content can't be suppressed — a hard constraint on the control model.
7. **Media / presentation** — icon vs photo is an attribute carried on the *item*, set once and inherited by every channel — not a per-surface choice. See below.

**Payoff:** a new feature (e.g., "kudos from a teammate") needs no new mental model — classify it (Know · Event · Member-origin) and its placement, control, and channels fall out automatically. The same is true for a new *surface* — it just renders the existing classes.

---

## Worked example: the home page + its hubs
The home is one application of the framework. On it, the classes resolve into two hubs, by the question the member is asking:

| Member's question | Hub | Mode |
|---|---|---|
| *"What should I do?"* | **For You** (action hub) | Forward-looking, curated |
| *"What's new?"* | **Inbox** (notifications) | Backward-looking, time-ordered |

**For You (DO) — one page, two tabs**
- **Today** — *committed* (In progress + Goals): Healthy Habits today-list + Keep going + due/expiring. Goal tracking lives here.
- **Recommended** — *Suggestions*, not started: ranked 6–7. Accepting one promotes it into Today.

**Inbox (KNOW) — one page, filters**
- **All** (time-ordered) · **From your employer** (Broadcasts) · **Alerts** (Events).
- Suggestions and Broadcasts also appear here as timestamped events — this is the log, not their home.

### The seam inside "do": suggested → committed
```
Recommended → (accept) → Today → (in progress) → Keep going → Done
 Suggestion              Goal/In progress         In progress
```
- **Recommended ≠ Today** because Suggestion ≠ committed — two tabs of one hub.
- **Keep going is a section of Today**, not its own destination.
- **Employer (Broadcast) is mostly Know** → lives in the Inbox; actionable ones spawn a Today/Recommended item.

### One page with filters, or multiple?
**Two filterable hubs.** Not one mega-list (Do vs Know are different modes). Not five pages (too fragmented — Hick's law). Each hub = tabs/filters, buildable with existing **Tabs + Filtered List** elements.

---

## Where control lives
**Control follows personalization** — give see-more/see-less where the *system* chose it; withhold it where the *member* committed or the *sponsor* mandated. (This is just the Origin axis applied.)

| Class / surface | Origin | Control offered | Verb |
|---|---|---|---|
| **Suggestion** (Recommended) | System | Dismiss · Snooze · Not interested · See less + edit interests | **Personalize** |
| **In progress / Goal** (Today, Keep going) | Member | Pause/leave, edit or remove a goal | **Manage my plan** |
| **Broadcast** (Employer) | Sponsor | Mark as read — **no hide** | **Acknowledge** |
| **Event** (Inbox/Notifications) | System/auto | Mark read / clear; per-category notify toggles | **Tune delivery** |

**Rule for the team:** *Control follows the "Based on your interests" label.* Wherever that label appears — the hero when it's a recommendation, and the recommendations card — attach see-more/see-less. Where it doesn't (employer, committed, alerts), don't.

Two levels of control, both on Suggestions:
- **Per-item, reactive** — Not interested / Snooze / See less (feedback to the engine).
- **Global, proactive** — Edit interests / focus areas (the "Edit" affordance). Declaring interests = ask for *more*; "not interested" = ask for *less*.

**Don't conflate delivery with relevance.** "Stop notifying me about challenges" is a notification setting (delivery), not a relevance signal — keep them separate so muting a notification doesn't hide the content everywhere. **Broadcasts can't be hidden** (the employer paid for the channel); offer "mark as read" + an optional "Why am I seeing this?" tap, never "not interested."

---

## Media: icon vs photo
Treat media exactly like control and voice — **a property of the content item, defined once and inherited by every channel.** A recommendation that shows a photo on home shows a photo in the Recommended tab, in a push thumbnail, and in the expanded "More" list. You never re-decide per surface, so drill-down inherits automatically: if a list used photos, **More** uses photos; if it used icons, More uses icons. That seam disappears the moment treatment lives on the item, not the list.

**What keys it:** not the class label and not designer mood — *does this thing have a real-world referent with authored imagery?*

| Treatment | When | Examples |
|---|---|---|
| **Photo** | The item represents a *thing in the world* with its own image | Suggestions (recipe, article, program), Goals/Challenges (a destination), teammate kudos |
| **Icon** | The item is a *system signal, state, or transaction* — nothing to photograph | Events (reward earned, device synced, reminder), most alerts |

This trends with the axes (**Know · Event · System** → icons; **Do** items and Broadcasts → photos) but the real test is "is there a picture of this?", not the class.

**The one rule that prevents the muddle:** within a single list, pick one — **never mix icon rows and photo rows in the same section.** A list reads as one object; ragged media is what looks unfinished. Decide per section by its dominant content:
- A **photo list** stays a photo list. Items lacking an image get a fallback (generated tile, category color, default photo) — they do *not* drop to an icon and break the rhythm.
- An **icon list** stays an icon list.

So: mixing is fine *across* the app, forbidden *within* a list, and drill-down inherits for free.

---

## Principles
1. **Define behavior on the class, not the channel** — classes are stable; channels (and surfaces) are interchangeable.
2. **Organize by job (Do vs Know), not by source.**
3. **Origin drives control** — System → personalize; Member → manage; Sponsor → acknowledge; Event → tune delivery.
4. **Notifications is a channel, not a category** — duplication across surfaces is expected and correct.
5. **Suggested vs committed** is the seam inside "do"; accepting a Suggestion promotes it.
6. **A new surface just renders existing classes** — no new mental model required.
7. **Media is an item attribute, inherited by every channel** — photo for things with authored imagery, icon for system signals; one treatment per list; drill-down inherits.
