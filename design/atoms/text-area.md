# Text Area

**Confluence:** https://mobilehealthc.atlassian.net/wiki/spaces/DF/pages/108101874
**Figma:** https://www.figma.com/file/QGp66GqX7B1LDkjD82bvwC/Design-System-Master?node-id=53245%3A40456
**Status:** ✅ Documented

---

## Purpose

A multi-line text input for longer free-form text entry. Used in forms and dialogs where users need to write more than a single line.

---

## When to Use

- Open-ended responses, comments, descriptions, or notes
- Any form field requiring more than a single line of input

## When NOT to Use

- Short, single-line inputs (name, email, search) — use Text Field

---

## Anatomy

1. Label — always required; positioned above the input (default) or to the side
2. Placeholder text — hints at expected input; disappears on entry
3. Required asterisk — paired with hint text explaining the asterisk
4. Input area — where text is entered
5. Helper text — context, formatting hints, or requirements below the field
6. Error text — replaces helper text when validation fails

---

## Options

| Option | Notes |
|--------|-------|
| Label position | Top (default, recommended) or side (use sparingly when vertical space is limited) |
| Help text | Only show if genuinely useful. Describes requirements, hints, or formatting. |
| Error text | Replaces help text on validation failure. Communicates what went wrong. |
| Placeholder | Use sparingly. Never use as a substitute for a label. Disappears on entry — instructions placed here are lost. |
| Disabled | Field exists but is unavailable. Communicates it may become available later. |

---

## Required vs Optional

- Required: use "(required)" label or asterisk + hint text explaining it
- Optional: use "(optional)" appended to label, or no indication if the form is mostly optional
- Never skip the label — a field without a label is inaccessible

---

## Behavior

- Labels wrap when too long
- Help text wraps when too long
- Required asterisk is an icon with specific spacing — not part of the label text itself

---

## Content Rules

- Every field must have a label
- Sentence case for labels and placeholders
- Keep labels short and clear
- Use help text for requirements; never bury instructions in placeholder text

## Common Mistakes

- Using placeholder text instead of a label (inaccessible and the text disappears)
- Omitting help text for fields with complex requirements
- Using Text Area for short single-line inputs (use Text Field)
