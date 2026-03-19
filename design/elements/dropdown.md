# Dropdown

**Confluence:** https://mobilehealthc.atlassian.net/wiki/spaces/DF/pages/108134598
**Figma:** https://www.figma.com/file/QGp66GqX7B1LDkjD82bvwC/Design-System-Master?node-id=53245%3A33448
**Status:** 🔶 Partial

---

## Purpose

Displays a list of actions or options triggered by a control. Used for navigation or command menus where an action is initiated based on the selection.

---

## When to Use

- 5–15 options to choose from
- Navigation or command menus
- When showing all options simultaneously would take too much space

## When NOT to Use

- Fewer than 5 options — use Radio Buttons, Chip Group, or a visible list instead
- More than 15 options — consider search or a different pattern
- Multi-select — use Checkboxes or Chip Group (Multiple Choice)

---

## Anatomy

1. Control (button with icon or text label)
2. Trigger (text label if applicable)
3. Menu (container for options and action items)

---

## Behavior

- Menu width grows to fit the longest item, up to a maximum width
- Items exceeding max width are truncated
- Menu dismisses on selection or click outside

---

## Note

Full documentation in progress. Check Confluence for latest configuration details.

## Common Mistakes

- Using a Dropdown for fewer than 5 options (use Chip Group or Radio Buttons instead)
- Using for multi-select (use Checkboxes instead)
