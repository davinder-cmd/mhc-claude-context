# Logo slot — desktop vs mobile alignment (correction)

Corrects the earlier desktop-top-bar logo-sizing diagram (a native Figma frame; not in local HTML). Davinder flagged: the square-mark example showed the mark **centered** in the 240px slot, implying it floats mid-bar. Wrong — **desktop is left-aligned** (short marks flush-left; 240px is a ceiling, not a centering frame). **Mobile is the centered one.** Desktop and mobile should be separated.

| Version | File | Date | Notes |
|---------|------|------|-------|
| v1 | `logo-slot-desktop-vs-mobile.html` | 2026-07-09 | Split into two specs. **Desktop (anchor: left)** — square 48×48 flush-left with empty bar to the right; wordmark fills to 240px left-aligned. **Mobile (anchor: center)** — proposed 56/12/32/~200. |
| v2 | `logo-slot-desktop-vs-mobile.html` (updated) | 2026-07-09 | Davinder correction #2: desktop is a **max-width, hug-to-content** model, NOT a fixed 240px box. Container snaps to logo width (square → ~48px), **nav links sit right after it, snug (with padding)**; 240px is only the cap for wide wordmarks (which scale down to fit). Removed the "reserved/empty ceiling" framing; added nav links + padding + model-note to both desktop rows. Wordmark now fits fully inside the cap (no overflow). Mobile unchanged (centered). |

| v3 | `logo-slot-desktop-vs-mobile.html` (updated) | 2026-07-09 | Davinder correction #3: mobile must show **both iOS and Android** (like the original), matching a supplied reference. Replaced the single generic mobile bar with two platform panels — **iOS Navigation bar** (44pt / 8pt inset / 28pt max-h / 160pt max-w) and **Android Top app bar / Material 3 small** (64dp / 16dp / 32dp / 160dp), both mark-centered. Added a 3-up spec summary (Desktop · iOS · Android). |

## Open
- Confirm real **mobile bar height / max-height** (proposed 56/32) → lock numbers.
- Push both corrected diagrams to Figma (Bridge was disconnected at build time).

## Origin
- Related to `outputs/jul06-nav-logo-slot/nav-logo-slot.html` (the bounding-box + neutral-plate spec). This file is specifically the **alignment** correction.
