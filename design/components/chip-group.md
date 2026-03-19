# Chip Group

**Confluence:** https://mobilehealthc.atlassian.net/wiki/spaces/MDS/pages/1344045541
**Status:** ✅ Documented

---

## Purpose

Lays out a collection of chips for selection or action. Compact, touch-friendly alternative to traditional form controls.

---

## Modes

### Single Choice
One selection at a time. Selecting a chip auto-deselects others. One chip selected by default.

**Use instead of:** Radio button, Dropdown, Switch, Segment Control
**Common contexts:** Data entry, wizards, filtering, toggling a view

### Multiple Choice
Any number of chips selectable. No default selection required.

**Use instead of:** Checkboxes, Switches
**Common contexts:** Filtering content, narrowing search results, multi-select preferences

### Action
Triggers a contextual action on tap. Appears after primary content or persistently at bottom of screen.

**Use instead of:** Buttons (when the action is contextual, not persistent)
**Common contexts:** Quick actions below a card, scrollable action trays

---

## Placement & Layout

**Default:** Left to right, wraps to next line on overflow.

**Horizontal scroll:** Preferred on mobile when many options exist. Chips extend beyond viewport width and scroll. Best for small form factor.

**Stacked list:** Chips wrap to new rows. If more than 2 rows form, switch to horizontal scroll.

**RTL:** Layout mirrors for right-to-left languages.

---

## Configuration

Key spacing properties: 16dp default padding on all sides. Chip spacing customizable via tokens.

---

## Common Mistakes

- Using Single Choice when no option should be pre-selected (use Multiple Choice instead)
- Using Action chips as a persistent nav element (use Bottom Navigation instead)
- Stacking more than 2 rows without offering horizontal scroll

## Escalate if

A chip behavior or layout is needed that doesn't fit Single Choice, Multiple Choice, or Action modes.
