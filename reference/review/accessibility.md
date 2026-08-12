# Accessibility

**Instrument.** A floor, not a score. Any blocker means the review cannot return a "ship" recommendation, regardless of how the other three instruments read.

**Output:** PASS / FAIL plus the list of blockers.

Target: **WCAG 2.2 AA.** Where Apple HIG and Material 3 disagree, the stricter value wins.

---

## Why this is its own file

Until now the WCAG floors lived in four places — `design-system-principles.md` §5, [colors.md](../../design/foundation/colors.md), [object-styles.md](../../design/foundation/object-styles.md), and inside three expert biographies. Scattered floors get applied inconsistently because nobody can walk them as a list.

It matters more here than at most companies. The [ICP](../../strategy/Ideal%20Customer%20Profile.md) explicitly includes members consuming content in truck cabs, on factory floors, and in shared workspaces — environments where audio is impossible, screens are glare-washed, and hands are gloved. This population is also older and lower-income on average than a consumer app's, which means larger system font sizes are common, not exceptional.

---

## Blockers — any one of these fails the review

### Contrast

| Content | Minimum | Notes |
|---|---|---|
| Body text | **4.5:1** | Against its actual background, including on tinted surfaces |
| Large text (≥24px, or ≥19px at 600+) | **3:1** | |
| Icons, borders, dividers carrying meaning | **3:1** | Decorative dividers exempt |
| Focus ring against both adjacent surfaces | **3:1** | Both the component and the page behind it |
| Disabled state | exempt | But must not be the *only* signal of unavailability |

Pick colour by measured contrast band, never by step number. Two steps that look adjacent in the palette can differ by more than a full band. Reference: `outputs/aug04-mh-color-reference/` — and note **Grey 1500 and Ocean 1000 are broken steps**; do not use them.

### Colour is never the sole carrier

Every state that colour communicates must also be carried by text, icon, or position. In practice this means:

- In-range vs out-of-range values need a word or a mark, not just a hue
- Positive / negative / notice / informative always pair with an icon or a label
- Earned vs locked, complete vs pending, due vs overdue — same rule
- Charts and metric tiles: a red number is not a label

This is the single most frequently violated rule in MHC work, and it usually surfaces on results and progress screens.

### Focus

- Keyboard focus is always visible. **2dp ring, never suppressed** — no `outline: none` without an equivalent replacement.
- Focus order follows visual order.
- Nothing traps focus except a modal, which must return it on close.

### Targets

- **44 × 44dp minimum**, 48dp preferred. Where Apple says 44 and Material says 48, use 48 for anything in a scrolling list.
- Adjacent targets separated so an imprecise tap cannot hit the wrong one. Gloved and older hands are in the ICP.
- The whole visible affordance is tappable, not just its label.

### Text and zoom

- All sizing in **rem**; root left at the browser default. No px font sizes.
- Layout survives **200% text zoom** without clipping or horizontal scroll.
- iOS Dynamic Type respected via the class mapping in [typography.md](../../design/foundation/typography.md).
- No text baked into images.

### Forms

- Labels are **persistent** — placeholder-as-label is a blocker, not a style choice.
- Errors identified in text, adjacent to the field, and describe the fix rather than the failure.
- Required fields marked in text, not by colour or asterisk alone.
- Input purpose declared so autofill works (`autocomplete`).

### Audio and video

- Captions on all video. Transcripts on all audio. Non-negotiable, ICP-driven.
- Nothing autoplays with sound.
- No content conveyed by audio alone.

### Motion

- `prefers-reduced-motion` honoured — reduced means near-instant, not merely slower.
- Nothing flashes more than three times per second.
- No motion required to understand a state change.

### Structure

- One `h1` per screen; heading levels descend without skipping.
- Landmarks present; the primary content region reachable directly.
- Icon-only controls carry accessible names.
- Dynamic content changes announced (live regions) — particularly progress, phase, and status updates.

---

## Applies partially

On a screenshot or PDF, only contrast, colour-not-alone, target sizing, and structure-by-inspection can be assessed. Say so rather than reporting a clean pass — an unmeasured floor is not a passed floor.

---

## Escalate if

A required design decision cannot meet a floor. Escalate rather than shipping the exception; a documented waiver is a decision, an undocumented one is a defect.

---

## Revision Log

| Date | Change |
|---|---|
| 2026-08-06 | Initial instrument — consolidated floors previously scattered across four files, plus ICP-driven captions and target sizing. |
