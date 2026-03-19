# Badge

**Confluence:** https://mobilehealthc.atlassian.net/wiki/spaces/DF/pages/108069054
**Figma:** https://www.figma.com/file/QGp66GqX7B1LDkjD82bvwC/Design-System-Master?node-id=52842%3A23868
**Status:** ✅ Documented

---

## Purpose

A small numeric visual indicator for counts, tallies, and scores. Draws attention to new or updated information.

---

## When to Use

- Showing a notification count or unread count
- Highlighting numeric metadata on a label or component
- Calling attention to items that need action

## When NOT to Use

- Non-numeric status — use a Tag instead
- Categorical labels — use a Tag instead

---

## Variants

| Variant | Use |
|---------|-----|
| Default | Standard count display |
| Primary | Draw attention to new or updated information |
| Primary Inverted | High contrast against dark backgrounds |
| Important | Highest-urgency notification; use sparingly |

---

## Options

- **Badge with number** — standard numeric display
- **Badge with max count** — caps at a max value (default 99); appends "+" when exceeded
- Sizes: 16dp and 24dp height

---

## Behavior

- If label text is too long, wraps to a second line
- If no room for second line, truncates with tooltip on hover
- Default max value: 99 (e.g., "99+")

---

## Rules

- Use sparingly on Bottom Navigation — over-badging causes badge blindness
- Never use badge for non-numeric information

## Escalate if

A badge-like pattern is needed for non-numeric or status information — use Tag or a different element.
