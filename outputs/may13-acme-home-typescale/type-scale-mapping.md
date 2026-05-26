# Type Scale v2 — ACME Home Mapping

Per-element type role assignment for the ACME Home Page redesign (Figma node `4450:6364`). Use this as the engineering handoff reference for typography on the home page.

**Scale:** 12-role reference scale (v2). One scale across breakpoints. Platform-native font stack (SF Pro on Apple, Roboto/system sans elsewhere).

---

## Scale definition

| Role | Size / LH | Weight | Tracking | Job |
|---|---|---|---|---|
| Display | 36 / 44 | 700 | -2% | Rare hero / marketing only |
| Headline 1 | 28 / 36 | 700 | -1% | Page title, hero title |
| Headline 2 | 24 / 32 | 600 | -0.5% | Numeric prominence, greeting on desktop |
| Headline 3 | 20 / 28 | 600 | 0 | All section heads |
| Title 1 | 18 / 24 | 600 | 0 | Card titles, dialog headers |
| Title 2 | 16 / 22 | 600 | 0 | List-row titles (reserve) |
| Body 1 | 16 / 24 | 400 | 0 | UI and prose running text |
| Body 2 | 14 / 20 | 400 | 0 | Dense UI text (reserve) |
| Label 1 | 14 / 20 | 500 | +1% | Buttons, links, chips |
| Label 2 | 12 / 16 | 500 | +6% | Eyebrows (UPPERCASE) |
| Caption | 12 / 16 | 400 | 0 | Sublines, metadata |
| Footnote | 11 / 14 | 400 | +1.5% | Fine print |

---

## Per-element mapping

### Greeting

| Element | Role | Note |
|---|---|---|
| "Afternoon Davinder" | **Headline 1** on mobile, **Headline 2** on desktop | Demote on desktop so hero owns the focal point |
| Mail / search icon buttons | (no text) | 40dp touch target |

### Hero card

| Element | Role |
|---|---|
| "BASED ON YOUR INTERESTS" eyebrow | Label 2 (uppercase) |
| "Sleep better in 4 weeks" | Headline 1 |
| Hero description (2 lines) | Body 1 |
| "Sleep DCP · $100 reward at completion" meta | Caption |
| "Start the program" button | Label 1 |

### Lanes (Based on interest / From employer)

| Element | Role |
|---|---|
| Section heads | Headline 3 |
| Card eyebrow ("ARTICLE · SLEEP", "WELLBEING") | Label 2 |
| Card title ("How to wind down before bed", "Complete your health assessment") | Title 1 |
| Card subline ("3 min read", "Earn $300") | Caption |
| Footer links ("See N more...", "Edit interests") | Label 1 |

### This week (tracker)

| Element | Role |
|---|---|
| "This week" section head | Headline 3 |
| "Synced 4 minutes ago · Source: Apple Health" | Caption |
| "View all data" link | Label 1 |
| Metric labels (STEPS, SLEEP, CALORIES, ACTIVE MIN) | Label 2 |
| Metric values ("6h 43m", "645", "52,470") | Headline 2 |
| "78% of weekly goal" subline | Caption |

### Insight band

| Element | Role |
|---|---|
| "● INSIGHT" eyebrow | Label 2 |
| Insight body | Body 1 (with `<strong>` at 600 weight for "38 minutes less") |
| Insight subline | Caption |
| "Refresh" button | Label 1 |

### Continue your programs

| Element | Role |
|---|---|
| Section head | Headline 3 |
| "Most engaged · 3 active in total" | Caption |
| "View all programs" link | Label 1 |
| Card eyebrow ("● DCP · SLEEP") | Label 2 (moss dot prefix) |
| Card title ("Better Sleep") | Title 1 |
| "Session 3 of 8" progress text | Caption |
| "$100" reward value | Label 1 |

### Your challenge

| Element | Role |
|---|---|
| Section head | Headline 3 |
| "TEAM CHALLENGE" eyebrow | Label 2 |
| "Spring Steps Challenge" title | Title 1 |
| "Day 22 of 30 · Currently 4th of 8 teammates" | Caption |
| "Details" button | Label 1 |

### Your rewards

| Element | Role |
|---|---|
| Section head | Headline 3 |
| "Reward details" link | Label 1 |
| Reward eyebrow ("● GIFT CARD", "● POINTS · SILVER", etc.) | Label 2 (ACME-red dot prefix) |
| Reward value ("$75", "1,250", "12", "$25") | Headline 2 |
| Reward subline ("Amazon · ready to redeem") | Caption |
| Reward fine print ("$25 to next $25 card") | Footnote |

---

## Roles used / reserve

**Used on this page (9 of 12):**
Headline 1, Headline 2, Headline 3, Title 1, Body 1, Label 1, Label 2, Caption, Footnote.

**Reserve (3 of 12):**
- **Display (36)** — marketing/hero pages, not for in-app screens
- **Title 2 (16)** — denser list rows, settings groups
- **Body 2 (14)** — table cells, side-panel dense copy

If any reserve role goes unused for 3+ months across all products, audit for removal.

---

## Legacy → v2 cross-reference

So engineering can find the v2 mapping from current legacy roles:

| Current (legacy) | v2 role | Notes |
|---|---|---|
| Display 1/2/3 (58/51/45) | Display (36) | Collapse to one |
| Heading 1 (40) | Display (36) | Treat as hero |
| Heading 2 (36) | Display (36) or Headline 1 (28) | Depends on context — hero or page head |
| Heading 3 (32) | Headline 1 (28) | Downshift one step |
| Heading 4 (28) | Headline 1 (28) | Direct map |
| Heading 5 (25) | Headline 2 (24) | -1px |
| Heading 6 (20) | Headline 3 (20) | Direct map |
| Body 1 (18) | Title 1 (18) or Body 1 (16) | Depends — heading-y or prose |
| Body 2 (16) | Body 1 (16) | Direct map |
| Body 3 (14) | Body 2 (14) | Direct map |
| Paragraph 1/2/3 | Body 1 (16) | Collapse — handle prose LH at component level |
| (button uses Body 2/3) | Label 1 (14) | New role — stop borrowing Body |
| Caption (12) | Caption (12) | Direct map |
| Small (11) | Footnote (11) | Rename only |

---

## Implementation notes

- **Font stack:** `-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", Roboto, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif`. SF Pro on Apple platforms (the OS supplies the optical break at 19/20pt). Roboto on Android. System sans on Windows.
- **Tracking values** in the table above are CSS `letter-spacing` em values. SF Pro will apply Apple's optical tracking automatically; the values are calibrated for Roboto and other fallbacks.
- **Line-height** is specified as a unitless multiplier in the role classes (e.g., `line-height: 1.5` on Body 1 = 24px line on a 16px size).
- **Apply via CSS class.** Each role has a `.type-{role}` class in the prototype. Engineering should expose these as design-token classes / mixins, not as four-property overrides per component.
