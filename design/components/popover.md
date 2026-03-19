# Popover

**Confluence:** https://mobilehealthc.atlassian.net/wiki/spaces/MDS/pages/1344045658
**Status:** 🔶 Partial

---

## Purpose

A transient floating container for contextual content — menus, options, additional actions, or supplementary information. Appears above the interface layer, anchored to its trigger.

---

## When to Use

- Contextual actions tied to a specific element (e.g., overflow menu on a card)
- Supplementary content that doesn't warrant a full tray or modal
- Short-lived information that disappears once the user acts or dismisses

## When NOT to Use

- Content that is large or complex — use a Tray on small screens instead
- Critical decisions requiring confirmation — use a Dialog
- Navigation — use Bottom Navigation or Navigation Panel

---

## Dismissal

Popovers dismiss on any of:
- Tap/click outside the popover
- Tap the trigger element again
- Select an action inside the popover

---

## Tip (Directional Indicator)

Use a tip (directional arrow) when the trigger element doesn't have a clear visual down state. The tip connects the popover visually to its origin point.

---

## Visual

Appears with stroke and drop shadow to distinguish it from the page surface.

---

## Common Mistakes

- Using a Popover for large amounts of content — switch to a Tray
- Not providing a clear dismiss path — always ensure tapping outside closes it
- Anchoring a Popover without a clear visual connection to its trigger

## Escalate if

Content volume or interaction complexity suggests a different overlay pattern is needed.
