# Bottom Navigation

**Confluence:** https://mobilehealthc.atlassian.net/wiki/spaces/MDS/pages/1344045485
**Status:** ✅ Documented

---

## Purpose

Primary navigation for iOS and Android native apps. Persistent, top-level access to the app's main destinations.

---

## When to Use

- Mobile (iOS / Android) only — this is the sole top-level navigation pattern on mobile
- When the app has 3–5 primary destinations of roughly equal importance

## When NOT to Use

- Desktop or tablet — use Navigation Panel instead
- Modal pages — Bottom Navigation does not appear on modal surfaces
- When fewer than 3 or more than 5 destinations exist — reconsider your IA

---

## Rules

- **3–5 items only.** Fewer than 3 lacks navigation utility; more than 5 reduces touch target size and adds cognitive load.
- **Icons + text labels always.** Icon-only navigation is not permitted — labels are required for clarity and accessibility.
- **Notification badges supported.** Use sparingly — over-badging causes badge blindness.

---

## Navigation Behavior

| Action | Result |
|--------|--------|
| Tap active tab from a child page | Returns to top of that section |
| Tap inactive tab | Navigates to top of that section's tree |
| Return to a previously visited tab | Restores most recent state where possible |
| Hide on scroll | Optional — acceptable on content-heavy screens |

---

## Accessibility

- Touch targets must meet 44×44dp minimum
- Active state must be clearly distinguishable from inactive — not by color alone
- Screen reader labels required on all tab items

---

## Common Mistakes

- Using Bottom Navigation on web/desktop (use Navigation Panel)
- Showing it on modal pages
- Exceeding 5 items
- Using icons without labels

## Escalate if

A navigation structure change is proposed, or a 6th top-level destination is requested.
