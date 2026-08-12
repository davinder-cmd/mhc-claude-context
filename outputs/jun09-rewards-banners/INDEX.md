# Single-reward banners — ideation v1

**Date:** 2026-06-09
**Folder:** `outputs/jun09-rewards-banners/`
**Replaces:** the small-card "Your rewards" row from `outputs/may23-figma-recreation/` / v82

---

## The new requirement

The rewards section is moving **above** the data section ("This week") and sitting immediately below the interest / employer pair row. Position in the home stack:

```
top bar
greeting
hero
pair row (interest + optional employer)
─── rewards row ─── ← NEW POSITION
this week
insight
keep going
challenge
```

It's also moving from **a row of 3-4 small cards** showing every reward type the user has to **a single banner** showing **one reward type** at a time. The decision of which one to show is a config decision (per-employer, per-user, or a precedence rule) — not part of this delivery.

The banner must:
- Fill the row at any width from **1440 down to 360** without looking empty
- Communicate the value, the progress (where applicable), and the next action — all at once
- Work for **four different reward types**, each of which has a different sense of "progress"

---

## The four reward types and how progress works for each

| Type | What it is | Progress model |
|------|------------|----------------|
| **Direct rewards** | Take action → get money/credit/gift card/HSA credit/reimbursement. 1 action (HRA) or many actions (3–10). | **Two-tone:** either action count (3 of 10 done) or dollars earned (\$75 of \$250). Sometimes neither (single action). |
| **Raffles** | Earn entries; entries get drawn for a prize. Usually uncapped, sometimes capped. | **Either** entries-as-a-count (no progress) **or** entries-to-cap (progress bar). |
| **Points & levels** | Earn points, climb tiers. | Native progress model — bar to next tier, or a tier dot ladder showing the whole journey. |
| **Store credit** | Earn credit, spend in the internal store. | **Awkward** — no native progress shape. Options: anchor to a featured store item, treat a quarterly cap as progress, or skip progress entirely. |

The single-action edge case for Direct rewards (HRA / HSA assessment) is real and deserves its own variant — a progress bar with 1 step is silly.

---

## What's in this file

`rewards-banners-ideation-v1.html` — twelve variants, four types × three angles each. Each variant rendered at both **desktop width (~700px+)** and **mobile width (360px)** side-by-side via container queries. Same banner, different container size, same final rendered state.

| Type | Variant | Lead idea | When it fits |
|------|---------|-----------|--------------|
| **Direct (1)** | A · Single action | Big \$ + clear CTA, no progress | HRA, HSA assessment, anything one-shot |
| | B · Multi-action · stepped dots | 10 dots, 3 filled = the journey | Actions are discrete and equal-weight |
| | C · Multi-action · linear \$ progress | Bar showing \$ earned vs. cap | Actions vary in value; what matters is the \$ |
| **Raffle (2)** | A · Open-ended entries | Big entry count + draw date | Most common — no cap |
| | B · Prize-first | Lead with what you could win | When prizes are aspirational and the entries feel like means to an end |
| | C · Capped entries · progress to max | Bar to entry cap | When a cap exists — adds urgency to "max out" |
| **Points (3)** | A · Linear to next tier | Tier + bar to next | Simplest — "you are here, next milestone" |
| | B · Tier dot ladder | All 4 tiers in one row, current marked | Shows the whole arc; aspirational |
| | C · Big balance focal | Huge balance number, tier secondary | When the balance itself is the story |
| **Store (4)** | A · Balance + featured item | Anchor abstract credit to a thing | Best when the store has real, photographable items |
| | B · Quarterly cap progress | Bar to quarterly cap | If the client configures a cap |
| | C · Simple balance | Big \$ + shop CTA, no progress | Calmest option; no cap, no anchor — just go shop |

---

## How to view

```bash
cd outputs/jun09-rewards-banners
python3 -m http.server 8765
# open http://localhost:8765/rewards-banners-ideation-v1.html
```

Each variant has two frames side-by-side: a wide one (which flexes with the page width — drag the browser around) and a fixed 360px one. The 360 frame is the mobile spec. Both frames render the same HTML — only the container width differs.

You can also resize the whole page narrow (< 600px effective container width) to see the wide frame collapse to the same vertical layout as the 360 frame. They converge — that's the point.

---

## Design decisions

**Container queries, not media queries.** Each banner adapts to *its container width*, not the viewport. This matters because:
- The same banner needs to render correctly at 1440px (full-width on desktop) AND at 360px (mobile) AND if the platform ever puts it inside a narrower column.
- It lets the ideation page itself show wide + narrow side-by-side without the wide frame collapsing.

**One layout, two breakpoints.**
- ≥ 600px container: horizontal three-zone layout (lead / body / trail)
- < 600px container: vertical stack, CTA goes full-width
- < 400px container: tighter padding, slightly smaller number sizes

**Why three variants per type, not five.** Three is enough to cover the meaningful axis (progress vs. no progress, balance vs. milestone, etc.) without overwhelming the review. Once you pick a direction per type, we can iterate within it — explore copy, color, hierarchy details — without redesigning the structural choice.

**Color coding.** Each type carries a different disc color (Direct = green, Raffle = olive, Points = navy, Store = orange). Subtle. The intent is type recognition at a glance for users on multiple plans; if it reads as too noisy we can drop it and let the chip text carry the type identity.

**No "X% complete" labels.** Progress is communicated by the bar / dot count itself plus a sentence like "3 of 10 done · \$75 earned so far." Percentages are abstract; counts are concrete.

---

## What to do with this

1. Open the ideation page in a browser.
2. For each of the four types, decide which variant feels right — or what's missing.
3. We can then either:
   - Pick a winner per type and convert into shadow-DOM fragments (the [[jun08-home-fragments]] architecture)
   - Iterate further on a specific variant (different copy, different color treatment, different visual emphasis)
   - Combine ideas across variants (e.g., "Direct C's bar with Direct B's dots underneath")

---

## Compatibility with the shadow-DOM fragment architecture

The ideation file is a regular HTML page (so it can be opened with `python3 -m http.server` and reviewed without the harness), but every banner is designed to **drop cleanly into a fragment**:

- All colors / sizes use CSS custom properties (currently on `:root`; trivial to move to `:host`)
- No SVG anywhere — all icons are Font Awesome glyphs
- No JavaScript
- No layout depends on `body` / `html` selectors
- Class names are prefixed (`bn-*`, `bn__*`) so they won't collide with the rest of the home page when integrated

Once you pick winners, porting them to fragments is mechanical: wrap in `:host`, swap the Font Awesome CDN reference for `@font-face`, and inline into the existing `fragment-home-*.html` files in place of the current rewards section.

---

## Open questions

1. **Which reward type does the user see when they have multiple?** Config decision, but it shapes what the banner has to handle. If users only ever see one, no problem. If users might see *which* one varies per visit (e.g., "show the one closest to a milestone"), the banner might benefit from a tiny "Why this?" affordance.
2. **Is the rewards row always present, or sometimes absent?** If a user has no rewards configured at all, does the row disappear or show a zero-state?
3. **Does the banner ever stack with another banner?** If two reward types are both shown, the side-by-side layout from earlier becomes relevant again. The current ideation assumes one banner per page.
4. **Photography for Store variant A's featured item.** Currently a CSS gradient placeholder. Real product imagery would significantly change the visual weight.
