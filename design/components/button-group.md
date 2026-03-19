# Button Group

**Confluence:** https://mobilehealthc.atlassian.net/wiki/spaces/MDS/pages/1344045513
**Status:** ✅ Documented

---

## Purpose

Groups related buttons when multiple actions share a context — stepping through linear flows (Back / Next / Skip / Cancel), confirming/canceling a decision, or offering related options without equal weight.

---

## When to Use

- Progressive flows: Back + Next, Skip + Continue
- Confirmation dialogs: Cancel + Confirm
- Any screen with 2–3 contextually related actions

## When NOT to Use

- Unrelated actions that don't belong together
- More than 3 buttons — reconsider the interaction, not just the grouping

---

## Alignment Rules

| Alignment | When to use |
|-----------|-------------|
| Left | Following a block of text |
| Center | Empty states |
| Right | Toasts, inline banners, progressive forms, single-button dialogs |
| Full-span | Modal dialogs, modal panels, modal pages |

---

## Button Order

Order follows reading direction and hierarchy:

- **Left-aligned or center:** Most critical action on the left
- **Right-aligned or full-span:** Most critical action on the right (or bottom when stacked)
- Top-level action is always Primary or Negative — all others are secondary

---

## Rules

- Max 2 button styles per group
- Icons only on the top-level (primary) action within the group
- Overflow: buttons stack vertically, most critical action at the bottom
- Never mix 3 levels of emphasis in a single group

---

## Common Mistakes

- Giving equal visual weight to all buttons — one action should always lead
- Placing the primary action on the left in a right-aligned group
- Using more than 2 button styles in one group

## Escalate if

A group layout is needed that doesn't fit any of these alignment rules.
