# Button

**Confluence:** https://mobilehealthc.atlassian.net/wiki/spaces/DF/pages/107938719
**Figma:** https://www.figma.com/file/QGp66GqX7B1LDkjD82bvwC/Design-System-Master?node-id=52807%3A23823
**Status:** ✅ Documented

---

## Purpose

Triggers an action or navigates to another page. The primary mechanism for user-initiated events in the product.

---

## Variants

| Variant | Emphasis | Rule |
|---------|----------|------|
| Primary | High | **One per page max.** The single dominant CTA. Not every screen needs one. |
| Standard | Medium | Use when multiple actions share equal importance, or a Primary would feel too heavy. |
| Tinted | Low | Always paired with another button. Never standalone. |
| Stroked | Low | Same as Tinted — always paired. |
| Negative | High | Destructive or irreversible actions only. Use sparingly. |
| Reverse Contrast | Contextual | On colored backgrounds only. Renders in static white or black regardless of theme. |
| Text | Tertiary | Within a button group only. Never standalone. |
| Icon | Contextual | Only when icons add clarity — never decorative. |

---

## Sizes

| Size | Height | When to use |
|------|--------|-------------|
| Jumbo | 48dp | Sparingly — high-emphasis standalone CTAs only |
| Large | 40dp | Default for modals and full pages |
| Medium | 36dp | Small dialogs, button groups, feature cards |
| Small | 32dp | Tables, lists, preview cards |

---

## States

Default → Hover (web only) → Focus → Active → Disabled → Loading/Processing

- **Disabled:** Non-interactive. Do not use as a default state — only when an action is genuinely unavailable.
- **Loading:** Pair with disabled state to prevent duplicate taps. Shows system is working.
- **Focus:** Always visible — required for keyboard and accessibility. Never suppress.

---

## Anatomy

1. Label
2. Container
3. Icon (optional)
4. Loader (optional)

---

## Content Rules

- Start with a verb: "Agree" not "Yes", "Sign Up" not "Submit", "Continue" not "Next Step"
- Sentence case always — never ALL CAPS
- Width auto-adjusts to label; padding 8–16dp per side
- Full-width option: extends to container width (common in mobile modals)
- If text overflows, it wraps — do not truncate

---

## Behavior

- Keyboard navigable — Space or Enter triggers action
- Focus stays on button after activation unless button opens/closes a container, in which case focus moves to the opened target or back to the caller

---

## Common Mistakes

- Using Primary for multiple actions on the same screen
- Using Text button standalone (must be in a group)
- Adding icons for decoration
- Using Disabled as a default state to block incomplete forms — use validation instead

## Escalate if

A new variant is needed that doesn't exist here.
