# Review Kit — Calibration Run

**Artifact:** Figma `lifeforce` → page "art directgion" → 17 hi-fi frames (375dp Compact)
**Instruments:** all four — hi-fi Figma frame, so nothing is gated out
**Loaded:** `reference/review/_kit.md`, `conformance.md` + `conformance-audit.js`, `accessibility.md`, `ux-heuristics.md`, `ux-laws.md`, `art-direction.md`, `design/foundation/{typography,colors,spacing,object-styles}.md`, `design/_index.md`
**Date:** 2026-08-06

This is the kit's first run. Purpose was to calibrate the instruments, not to fix LifeForce.

---

## Four verdicts, reported side by side

```
CONFORMANCE    FAIL — 17 of 17 frames. 21 type signatures and 50 fills across the set;
               229 of 695 text nodes (33%) unbound; 3 font families; 4 off-scale sizes
ACCESSIBILITY  FAIL — 1 blocker: out-of-range biometric values carried by position only
UX             1 × sev-3, 3 × sev-2, 2 × sev-1
ART DIRECTION  23/80 — weakest: tonal structure (2), success/failure symmetry (2),
               type as hierarchy (2), meaning carried visually (2)
```

Not averaged. Two are floors, one is a severity list, one is a gradient.

---

## Conformance — the measured set

Ceilings are per screen: ≤6 type signatures, ≤8 fills, 2 families, 0 unbound, 0 off-scale.

| Frame | Sigs | Fills | Fams | Unbound | Off-scale | Illegal pairs | Invis. dupes | Radius | Off-grid |
|---|---|---|---|---|---|---|---|---|---|
| 01 Enroll — 3 left | 15 | 20 | 3 | 11/36 | 13, 15 | 4 | 1 | 19 | 44 |
| 02 Enroll — 2 left | 15 | 21 | 3 | 11/36 | 13, 15 | 4 | 1 | 19 | 44 |
| 03 Enroll — 1 left | 14 | 20 | 3 | 11/35 | 13, 15 | 3 | 1 | 19 | 40 |
| 04 Schedule | 14 | 18 | 3 | 9/33 | 13, 15 | 3 | 2 | 16 | 22 |
| 05 Scheduled | 15 | 17 | 3 | 10/35 | 13, 15 | 3 | 2 | 17 | 22 |
| 06 Active — visit done | 15 | 20 | 3 | 9/37 | 13, 15 | 4 | 2 | 17 | 27 |
| 07 Active — steady | 15 | 20 | 3 | 9/37 | 13, 15 | 4 | 2 | 17 | 27 |
| 08 Labs due | 15 | 21 | 3 | 10/35 | 13, 15 | 4 | 2 | 16 | 23 |
| 09 HA due | 15 | 20 | 3 | 10/35 | 13, 15 | 4 | 2 | 16 | 23 |
| 10 Missed visit | 15 | 21 | 3 | 10/35 | 13, 15 | 4 | 2 | 16 | 23 |
| 11 Overdue | 15 | 21 | 3 | 10/35 | 13, 15 | 4 | 2 | 16 | 23 |
| 12 Dependent — done | 15 | 20 | 3 | 9/35 | 13, 15 | 4 | 2 | 16 | 27 |
| Enrollment — detail | 10 | 12 | 3 | 6/39 | 15 | 4 | 1 | 15 | 75 |
| Progress · locked | 10 | 15 | 2 | 8/18 | 13, 15 | 2 | 1 | 16 | 24 |
| Progress · populated | 15 | 23 | 3 | 12/53 | 13, 15 | 3 | 1 | 20 | 50 |
| Progress · populated (2) | 8 | 13 | 2 | **77/84** | 15, 15.5, 13.5 | 2 | 1 | 15 | **221** |
| Progress · full results | 9 | 12 | 2 | 7/77 | 15 | 2 | 0 | 15 | 48 |

**Set totals:** 21 type signatures · 50 fills · 763 off-grid spacing values · 229/695 unbound text nodes (33%)

### Font families — three, not two

| Family | Uses | Status |
|---|---|---|
| SF Pro Text | 532 | `--f-text` ✅ |
| SF Pro Display | 105 | `--f-display` ✅ |
| **SF Pro** | **58** | **Not a token.** No such family in the spec |

### Illegal size/weight pairs

Size and weight are not independent axes — each of the 25 classes fixes both. These land on two legal axes but no actual class:

| Pair | Uses | Nearest real class |
|---|---|---|
| `11/Regular` | **153** | Label 3 or Eyebrow — both 500 Medium |
| `14/Semibold` | **72** | Title 3 (14/Medium) or Body 3 (14/Regular) |
| `20/Semibold` | 17 | Heading 6 (20/Medium) |
| `16/Semibold` | 13 | Title 2 (16/Medium) |
| `25/Semibold` | 1 | Heading 5 (25/Medium) |

Semibold exists in the scale for exactly one class — `Small`, at 11px. It is being used 103 times at four other sizes.

### Off-scale sizes

13, 13.5, 15, 15.5. There is no 13px or 15px class; the fractional pair are almost certainly the result of a scaled frame.

### Invisible duplicate fills — CIEDE2000, ΔE < 2.0

Nobody can see these differences; every renderer preserves them.

| Pair | ΔE2000 | Read |
|---|---|---|
| `#f8f8f9` ~ `#f3f3f3` | **1.17** | Two off-whites, same job |
| `#eaf2fa` ~ `#eaf0f5` | **1.46** | Two pale blues, same job |
| `#ffffff` ~ `#f8f8f9` | **1.49** | White vs. not-quite-white |
| `#fff6f0` ~ `#fff6f3` | **1.54** | Two warm alert tints |
| `#393c3c` ~ `#373d3f` | **1.81** | Two graphite inks |
| `#fff6f0` ~ `#f6f0eb` | **1.87** | Two warm surfaces |

A further **44 pairs** sit between ΔE 2.0 and 4.9 — under one MH palette step apart, so distinct-but-probably-unintentional. Six ink greys (`#000000`, `#1c1b1f`, `#0f172a`, `#393c3c`, `#545454`, `#717171`) and five blues (`#16314d`, `#103b49`, `#195188`, `#1c5c9a`, `#3b85cc`) are in play across the set.

Similarity computed in CIEDE2000 throughout. Never by hex, RGB, or HSL.

---

## Accessibility — 1 blocker

**BLOCKER · colour is the sole carrier of range state.** On `Progress · full results` and `Progress · populated`, every biometric tile renders identically whether the value is in range or out. Blood Pressure 128/82 against "Goal <120/80" and LDL 118 against "Goal <100" are both out of range and nothing on the screen says so — the member must read two numbers and do the comparison themselves. The four unmeasured tiles (`—`) also carry the same visual weight as real results.

This is a floor failure, not a preference. Fixing it with colour alone would *also* fail — the state needs a word or a mark, per `accessibility.md`.

Not assessable in this pass: contrast of text on the tinted alert surfaces needs measuring against the actual tint rather than white; target sizes need checking on the tab control and the chevron rows.

---

## UX — heuristics and laws

| Sev | Heuristic / law | Finding |
|---|---|---|
| **3** | H1 Visibility of status | Phase is shown ("Phase 2 of 5") but its consequence — medical credit — is only reachable through a calculator link. The member sees their rank without its meaning. |
| **2** | H8 Minimalist design | `Progress · populated` renders **"See all recommendations & handouts" twice** on one screen, once mid-page and once at the bottom. |
| **2** | H2 Real-world match | "Program Acknowledgment" is internal vocabulary in a member-facing checklist. |
| **2** | H9 Error recovery | Frame 10 is named "missed visit (rebook)" but the rebooking path is not inline — the recovery action the state exists for is absent from it. |
| **1** | Von Restorff | With 15 type signatures competing, the isolation effect is unavailable — nothing can stand out because everything already differs. |
| **1** | Jakob's Law | Tab control ("Status / My Progress") is styled as a segmented control but sits above a scrolling page, so it reads as a filter rather than a view switch. |

Severity 0 items dropped rather than listed as passes.

---

## Art direction — 23/80

| # | Dimension | Score | Why |
|---|---|---|---|
| 1 | Emphasis rank | **3** | Hero banner, then a flat stack. Rank after the banner is carried by position alone |
| 2 | Tonal structure | **2** | White on white with 1dp borders. Tone enters the page only via alert tints and three decorative icon tiles |
| 3 | Success/failure symmetry | **2** | Frame 11 (overdue) is the strongest composition in the set; frames 07 and 12 are the emptiest |
| 4 | Graded density | **3** | Uniform card padding regardless of rank. The support phone number occupies the same real estate as the primary action |
| 5 | Accent discipline | **3** | Five blues, two reds, and three icon-tile tints with no stated rule. Navy carries brand, action, link, eyebrow, and active-nav simultaneously |
| 6 | Type as hierarchy | **2** | 15 signatures on one screen; the two most-used treatments (`11/Regular` ×153, `14/Semibold` ×72) aren't classes at all |
| 7 | Meaning carried visually | **2** | Out-of-range values, and real-vs-placeholder data, are both invisible |
| 8 | Imagery direction | **—** | No photography in the set |
| 9 | Motion posture | **—** | Static frames |
| 10 | Partner survivability | **6** | Structure is type + border, so a hue swap wouldn't collapse the hierarchy — it would flatten it further. Survives without benefiting |

**Highest-leverage fix:** introduce **one recessed surface tone** and assign it to secondary and utility blocks (support, About, completed checklists). It repairs dimensions 1, 2, and 4 in a single move — grouping stops depending on 1dp outlines, the primary block gains rank without growing, and density grading becomes possible. It is also hue-agnostic, so it survives the partner theme.

Second: mark range state on the biometric tiles. That closes the accessibility blocker and dimension 7 together.

---

## What the run taught us about the instruments

**A real bug, found and fixed on first use.** The initial script counted `strokeWeight` on every node with a numeric value, including icon vector internals with no visible stroke. It reported 43–49 off-token borders per frame. Gating on visible strokes and container node types dropped that to **0–1 per frame** — the truth. A ~5× false-positive rate would have discredited the instrument permanently, so `conformance-audit.js` now filters on `strokes.some(visible)` and `SHAPED` node types.

**A real gap, closed.** The first version treated size and weight as independent axes, so `14/Semibold` passed both checks and got flagged as nothing. Replacing the two flat arrays with a legal `(weight → sizes)` class table surfaced **256 illegal pairs** across the set — the single largest category of type drift, and completely invisible to the first version.

**Radius needs one judgment call.** 15–20 off-token radii per frame are real, but they're dominated by `100` used for circular avatars and icon chips where `999` (`--r-full`) is the token. Mechanically a violation; practically identical in render. Recommend keeping it as a FAIL — 100 and 999 both render as a circle *today*, at these sizes, which is precisely the kind of accident that breaks when a component is resized.

**Off-grid spacing is the noisiest signal.** 763 values across 17 frames, concentrated in `Progress · populated (2)` (221 of them, alongside 77/84 unbound text). That frame looks like it was scaled or pasted from another source rather than built — worth checking its provenance before reading anything else about it.

---

## Recommended order of work

1. **Conformance, mechanically** — delete the bare `SF Pro` family (58 uses); remap `11/Regular`→`11/Medium`, `14/Semibold`→`14/Medium`, `20/Semibold`→`20/Medium`, `16/Semibold`→`16/Medium`; remap 13/15 to the nearest class; collapse the six invisible duplicate pairs; `100`→`999`. Then bind all 229 loose text nodes.
2. **Investigate `Progress · populated (2)`** before fixing it — 92% unbound and 221 off-grid values suggests imported, not authored.
3. **Re-run the audit.** Expect the art direction score to be *interpretable* for the first time, not necessarily higher.
4. **Then** the recessed surface tone, and the range marking on biometrics.
5. **Then** write `design/foundation/visual-language.md` — with two real flows behind it instead of none.

---

## Revision Log

| Date | Change |
|---|---|
| 2026-08-06 | First calibration run. Two instrument defects found and fixed mid-run (visible-stroke gating, size/weight pair table). |
