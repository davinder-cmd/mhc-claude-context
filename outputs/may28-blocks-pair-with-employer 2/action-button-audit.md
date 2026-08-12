# Action-button audit — v81 → MHC blocks

v81 contains 17 `<button>` elements. The MHC blocks guide forbids `<button>` for any mutating action (§3.2) and only permits `<button>` for purely presentational uses. Each is reclassified below.

**Three buckets:**

- **Nav** — re-expressed as `<a href>` (drill-down to another page). Click is a navigation; nothing mutates server-side on the click itself.
- **Host action** — block exposes state flags; host injects the action button after the block. Block does NOT emit a button.
- **Stretched-link card** — the affordance is the whole card; the button disappears and is replaced by a card-level anchor as the last child of the container.

---

## The 17 buttons

| # | v81 line | Element | Original context | Reclassified to | Notes |
|---|---------:|---------|------------------|------------------|-------|
| 1 | 698 | `<button class="icon-btn">` Open menu | Top bar | **Host chrome — out of scope** | Top bar is not an MHC block. Host shell renders this (likely a hamburger that toggles a side menu; that toggle is platform behavior, not block behavior). |
| 2 | 715 | `<button class="icon-btn icon-btn--filled">` Messages | Greeting actions | **Nav — `<a href="{{formula.messages_href}}">`** | Drill-down to inbox. See `block-1-greeting-hero.html`. |
| 3 | 718 | `<button class="icon-btn icon-btn--filled">` Search | Greeting actions | **Nav — `<a href="{{formula.search_href}}">`** | Drill-down to search page. See `block-1-greeting-hero.html`. |
| 4 | 749 | `<button class="btn btn-m btn-filled">Start the program</button>` | Hero primary CTA | **Host action — MHC action on a User Input block** *(or stretched-link card on Compact)* | If "Start" creates a program enrollment record server-side, it is mutating → MHC action. The block exposes `formula.copy_hero_ctaLabel` and `formula.hero_href` for the host to attach the action. On Compact, the stretched-link covers the whole hero so the explicit button is not needed below 600px. |
| 5 | 768 | `<button type="button" class="btn btn-text">See 7 more …</button>` | Interest pair footer | **Nav — `<a href="{{formula.pair_interest_seeMore_href}}">`** | Drill-down to interests list. See `block-2-pair.html`. |
| 6 | 769 | `<button type="button" class="btn btn-text">Edit Interests</button>` | Interest pair footer | **Nav — `<a href="{{formula.pair_interest_edit_href}}">`** | Drill-down to interest-picker settings. See `block-2-pair.html`. |
| 7 | 785 | `<button type="button" class="btn btn-text">See 3 more …</button>` | Employer pair footer | **Nav — `<a href="{{formula.pair_employer_seeMore_href}}">`** | Drill-down to employer content list. See `block-2-pair.html`. |
| 8 | 802 | `<button type="button" class="btn btn-text">All data</button>` | This week section head | **Nav — `<a href="{{formula.thisweek_allData_href}}">`** | Drill-down to all-data page. See `block-3-thisweek.html`. |
| 9 | 873 | `<button class="btn btn-outlined">Refresh Insight</button>` | Insights action area | **Host action — `formula.insightsState_refreshable` flag** | Canonical example from guide §3.3. Block exposes state; host attaches the button. Refresh is a mutating action (calls the insights server, may consume a cooldown allotment). See `block-4-insights.html`. |
| 10 | 881 | `<button type="button" class="btn btn-text">All programs</button>` | Programs section head | **Nav — `<a href="{{formula.programs_all_href}}">`** | Drill-down. See `block-5-programs.html`. |
| 11 | 949 | `<button class="btn btn-outlined">Details</button>` | Challenge banner | **Stretched-link card** | The challenge banner becomes a `<a class="challenge__link">` covering the whole banner; the explicit "Details" button disappears. The card is the affordance. See `block-6-challenge.html`. **OPEN QUESTION:** if the challenge needs cheer / log-checkin actions alongside Details, the block becomes a User Input block and "Details" stays nav. |
| 12 | 957 | `<button type="button" class="btn btn-text">Reward Details</button>` | Rewards section head | **Nav — `<a href="{{formula.rewards_details_href}}">`** | Drill-down to rewards page. See `block-7-rewards.html`. |
| 13 | 993 | `<button class="bn-item active">Home</button>` | Bottom nav | **Host chrome — out of scope** | Bottom nav is not an MHC block. Host shell renders nav items as `<a href>` to each tab's URL. |
| 14 | 997 | `<button class="bn-item">Digital Care</button>` | Bottom nav | **Host chrome — out of scope** | Same as 13. |
| 15 | 1001 | `<button class="bn-item">Wellbeing</button>` | Bottom nav | **Host chrome — out of scope** | Same as 13. |
| 16 | 1005 | `<button class="bn-item">Benefits</button>` | Bottom nav | **Host chrome — out of scope** | Same as 13. |
| 17 | 1009 | `<button class="bn-item">Rewards</button>` | Bottom nav | **Host chrome — out of scope** | Same as 13. |

---

## Tally

| Bucket | Count |
|--------|------:|
| Nav (`<a href>`) | 7 |
| Host action (MHC action on User Input block, or host-injected action button) | 2 |
| Stretched-link card (whole card becomes the affordance) | 1 |
| Host chrome (top bar / bottom nav — not MHC blocks at all) | 7 |
| **Total** | **17** |

Net: zero `<button>` elements remain in the seven MHC block files.

---

## Open decisions for the platform team

These need a confirmed answer before any of the blocks above go to production:

1. **Hero "Start the program" — host action or stretched-link only?** On Compact, the stretched-link is sufficient. On Medium+, the host needs to inject the visible button. Confirm the host can attach a Medium+-only action button on the hero block. If not, hero CTA on Medium+ becomes a separate User Input block sibling.

2. **Insights — state-flag-driven, confirmed?** This is the canonical example in the guide so this should be a yes; calling out the dependency on a platform "action button slot per content block."

3. **Programs — "Resume" is nav or mutation?** If clicking the program card just deep-links to the program detail page, the current stretched-link is correct. If clicking creates a new session record server-side, each program row becomes a User Input block with a "Resume" MHC action and the stretched-link is removed.

4. **Rewards — "Redeem" is nav or mutation?** Same question as Programs. The current cards are nav-only. If reward redemption fires the moment a card is tapped, each card splits into a User Input block.

5. **Challenge — does "Cheer team" or "Log check-in" also live on this surface?** If yes, the block becomes a User Input block (with the cheer/check-in as the MHC action) and Details stays nav. The current `block-6-challenge.html` is the "nav only" version.

6. **Tracker tiles — clickable to detail page or not?** v81 had no click affordance; I added a stretched-link to each tile's detail page. Confirm the platform exposes per-tracker `_href` tokens (Apple Health detail, sleep detail, etc.). If not, drop the tracker stretched-links and the tile becomes static.

7. **Tracker zero state ("+ Link steps") — nav or MHC action?** The current block sketches it as a nav (`<a href="…link page">`). If linking a tracker happens via an MHC action (no separate page, click triggers permission prompt directly), the zero-state tile becomes a User Input block. The visual stays identical.

8. **Material Symbols font — loaded by the host?** The host page must include the Google Fonts `<link>` to `Material+Symbols+Outlined`. The blocks emit `<span class="material-symbols-outlined">…</span>` but do not load the font themselves. Confirm this dependency is acceptable; if not, switch icons to inline SVG (more verbose markup, no external font request).
