# Checkbox

**Figma Page:** `A_Checkbox` — https://www.figma.com/file/QGp66GqX7B1LDkjD82bvwC/Design-Building-Blocks
**Notion:** https://www.notion.so/Checkbox-33e69fed90318147886ed9ac3c0a058c
**Status:** ✅ Ready

---

## Purpose

Collects multiple selections from users in a list. Each checkbox is independent — selecting one does not affect others.

---

## When to Use

- Multiple items can be selected simultaneously
- Forms requiring multi-select input
- Terms and conditions agreement
- Filtering content (where multiple filters can apply)
- Parent/child bulk selection (parent selects all children)

## When NOT to Use

- Mutually exclusive choices (only one can be selected) — use Radio Button
- Single on/off toggle — use a Switch
- When you want compact selection in limited space — use Chip Group (Multiple Choice) or Dropdown

---

## States

| State | Description |
|-------|-------------|
| Unselected | Default |
| Selected | User has checked the box |
| Indeterminate | Some (not all) children selected in parent/child relationship |
| Disabled | Not interactive in current context |
| Focus | Keyboard navigation — adds blue ring |

---

## Anatomy

1. Checkbox input (the control)
2. Checkbox label (text)

---

## Content Rules

- Labels should be short and descriptive
- Start all labels with a capital letter
- No punctuation after labels
- 3 words or fewer recommended
- Labels wrap — never truncate
- Labels appear to the right of the checkbox

**Group labels (when used):**
- Use sentence case
- Only add a group label if it adds genuine context
- Not needed if the group is already within a labelled parent section

---

## Behavior

- Text overflow: label wraps to the next line — never truncates
- Keyboard: navigable via keyboard; focus state adds blue ring
- RTL: layout mirrors; checkmark moves to right side

---

## Placement

Forms, modals, side panels, or anywhere multi-select input is required.

## Common Mistakes

- Using Checkbox for mutually exclusive choices (use Radio Button)
- Truncating long labels (always wrap)
- Using as a single on/off control (use Switch)
