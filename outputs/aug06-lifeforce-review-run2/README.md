# Review Kit — Run 2, LifeForce status set

**Artifact:** Figma `lifeforce` → page **Final** → `Frame 806` (node `2512-28730`) → 17 hi-fi frames, 375dp Compact
**Instruments:** all four — hi-fi Figma frames, nothing gated out
**Loaded:** `reference/review/_kit.md`, `conformance.md` + `conformance-audit.js`, `accessibility.md`, `ux-heuristics.md`, `ux-laws.md`, `art-direction.md`, `outputs/aug06-lifeforce-review-calibration/README.md`
**Date:** 2026-08-06

Second run against the same 17 screens. Purpose: find what changed, and close the two checks the calibration run explicitly deferred.

---

## Four verdicts

```
CONFORMANCE    FAIL — 17 of 17. Byte-identical to run 1. No remediation has landed.
ACCESSIBILITY  FAIL — 4 blockers (1 carried, 3 NEW)
UX             2 × sev-3 (1 NEW), 3 × sev-2, 2 × sev-1
ART DIRECTION  23/80 — unchanged, and still uninterpretable until conformance clears
```

---

## Conformance — nothing moved

Every metric matches run 1 exactly:

| Measure | Run 1 | Run 2 |
|---|---|---|
| Type signatures (set) | 21 | **21** |
| Distinct fills (set) | 50 | **50** |
| Font families | 3 | **3** — `SF Pro` still present, 58 uses |
| Unbound text nodes | 229 / 695 | **229 / 695** |
| Off-grid spacing values | 763 | **763** |
| Illegal size/weight pairs | 256 | **256** — `11/Regular` ×153, `14/Semibold` ×72, `20/Semibold` ×17, `16/Semibold` ×13, `25/Semibold` ×1 |
| Off-scale sizes | 13, 13.5, 15, 15.5 | **same** |

Identical numbers on 17 frames is not coincidence — these are the same objects, so the remediation list from run 1 is still entirely outstanding. Everything below should be read with that in mind.

---

## Accessibility — 4 blockers

### 1. CARRIED · Colour is the sole carrier of range state

Unchanged on `Progress · full results`. Three of eight measured values are out of range and nothing says so:

| Tile | Value | Goal | State |
|---|---|---|---|
| Blood Pressure | 128/82 | <120/80 | **out** |
| BMI | 27.4 | 18.5–24.9 | **out** |
| LDL Cholesterol | 118 | <100 | **out** |
| Total Cholesterol | 196 | <200 | in |
| Triglycerides | 140 | <150 | in |
| Fasting Glucose | 98 | <100 | in |
| Resting HR | 64 | <70 | in |
| HDL Cholesterol | 51 | >40 | in |

Every tile renders identically. The member does the comparison.

**Correction to run 1.** The calibration recorded "four unmeasured tiles (`—`)". That reading is wrong. Fitness Score 42, % Body Fat 28, Weight 184 and Waist 38 all carry values — it is the **goal** that is absent. That is a different and worse problem: those four can never show range state at all, because no threshold exists for them. Four of twelve tiles are structurally incapable of the thing the screen is for.

### 2. NEW · 64 text nodes below the contrast floor

Run 1 deferred this — "contrast of text on the tinted alert surfaces needs measuring against the actual tint rather than white." Measured now against each node's real backdrop, not white.

| Foreground | Backdrop | Ratio | Required | Nodes |
|---|---|---|---|---|
| `#6e7a7d` | `#eaf2fa` pale blue | **3.92:1** | 4.5 | 12 |
| `#57882e` | `#ffffff` | **4.23:1** | 4.5 | 9 |
| `#6e7a7d` | `#ffffff` | **4.43:1** | 4.5 | 42 |

**The headline is `#6e7a7d`.** That is brand **`slate`**, which MHC Brand Guidelines v1.2 designates as *"Body text on light, muted UI."* It is **4.43:1 on plain white** — below WCAG AA. The brand's own body-text colour has never met the floor, and it is doing that job on 42 nodes across this set.

This is a brand-level defect, not a screen-level one. It also converges with the ΔE work from 5 Aug, which recommended retiring slate for a different reason (ΔE 5.67 from its nearest palette stop, and a cool cast that fights the warming direction). Two independent lines of evidence, same conclusion.

### 3. NEW · The goal line is the least legible text on the results screen

The `#6e7a7d` on `#eaf2fa` failure at 3.92:1 is specifically the **"Goal <120/80"** line on every biometric tile.

So the exact text a member must read to perform the in-range comparison — the comparison blocker 1 forces them to do manually — is the lowest-contrast text on the screen. The two defects compound: the product withholds the state *and* makes the raw material for deriving it hard to read.

### 4. NEW · Target sizes below 44dp

Run 1 deferred this too. Floor is 44 × 44dp, 48 preferred in scrolling lists.

| Control | Instances | Heights | Verdict |
|---|---|---|---|
| Tab control (`Status / My Progress`) | 42 | 28dp ×28, 32dp ×14 | **FAIL** |
| Button · Primary | 3 (all prototype-linked) | 40dp | **FAIL** |
| Button · Outlined | 26 (13 prototype-linked) | 32dp ×17, 40dp ×8, 44dp ×1 | **FAIL** — 25 of 26 |
| Chevron list rows | 2 | 48dp | PASS |

The chevrons themselves are 20 × 20 and the nav icons 24 × 24, but their parent rows are 48dp, so the affordance is compliant. Checked and cleared rather than reported.

The tab control is the worst of these: 28dp, and it is the primary view switcher for the whole feature.

---

## UX

| Sev | Heuristic | Finding |
|---|---|---|
| **3 · NEW** | H4 Consistency / H5 Error prevention | **Frame 11 contradicts itself, and frame 09 shows the fix.** Frame 11's banner reads *"Health Assessment is overdue"* while the Enrollment card on the same screen shows "Complete · 4/4" including **✓ Health Assessment**. Frame 09 states the same situation correctly: *"Your **annual** Health Assessment is due by Jun 30."* One word — "annual" — separates the recurring assessment from the enrollment one. Frame 11 drops it and the screen tells the member the HA is both done and overdue. |
| 3 | H1 Visibility of status | Phase is shown ("Phase 2 of 5") but its consequence — medical credit — is only reachable via a calculator link. Rank without meaning. |
| 2 | H8 Minimalist design | `Progress · populated` renders "See all recommendations & handouts" twice on one screen. |
| 2 | H2 Real-world match | "Program Acknowledgment" is internal vocabulary in a member-facing checklist. |
| 2 | H9 Error recovery | Frame 10 is named "missed visit (rebook)" but the rebooking path is not inline. |
| 1 | Von Restorff | 15 type signatures competing; isolation effect unavailable. |
| 1 | Jakob's Law | Tab control styled as a segmented control above a scrolling page reads as a filter, not a view switch. |

The new sev-3 is the one worth acting on first — it is a correctness bug that a member will notice and distrust, and it costs a label change, not a redesign.

---

## Art direction — 23/80, unchanged

Re-verified against the frames rather than copied forward. Composition is unchanged, so the scores stand: emphasis rank 3, tonal structure 2, success/failure symmetry 2, graded density 3, accent discipline 3, type as hierarchy 2, meaning carried visually 2, partner survivability 6. Imagery and motion `—`.

Frame 11 (overdue) remains the strongest composition in the set — filled navy button, tinted alert surface, outlined accent card — while frame 07 (steady) is the emptiest. Success/failure asymmetry confirmed visually, not assumed.

Per the kit's order of operations this number is still **uninterpretable**: you cannot grade composition through 21 type signatures and 50 fills. It is recorded for continuity, not for decisions.

---

## What to do, in order

1. **Fix the frame 11 contradiction — one word.** Change "Health Assessment is overdue" to "Your **annual** Health Assessment is overdue", matching the phrasing frame 09 already uses. Cheapest fix on the list and the highest member-visible cost if left; a screen that says a task is both complete and overdue reads as a broken product, not a design nuance.
2. **Retire `slate` `#6e7a7d` as a text colour.** It fails AA at 4.43:1 on white and 3.92:1 on the pale-blue tile. Replace with Grey 1100 `#5F5F5F` (6.39:1) — which the 5 Aug merge already recommended on separate grounds.
3. **Raise the tab control to 44dp** and the Primary/Outlined buttons to 44dp minimum.
4. **Mark range state on the biometric tiles** with a word or icon, and decide what the four goal-less tiles should do — they currently cannot express the screen's core idea.
5. **Then** the run-1 conformance list, which has not been started.

Items 1–4 are all cheap and all independent of the conformance work. None of them require the re-spacing or the token cleanup to land first.

---

## Fixes applied — 2026-08-06

Applied to a **duplicate**, page `V4 — review-2 fixes` in `lifeforce`. Originals untouched.

| Fix | Scope | Result |
|---|---|---|
| Frame 11 copy → "Your **annual** Health Assessment is overdue" | 1 node | Contradiction gone |
| `slate #6E7A7D` → `Grey 1100 #5F5F5F` | 55 text nodes | 4.43 → 6.39:1 |
| `#57882E` → `Green 1200 #3D7A3E` | 9 text nodes | 4.23 → 5.18:1 |
| Buttons promoted `sm`/`md` → `lg` | 17 of 28 | 32dp → 48dp |

**Contrast: 64 failing nodes → 0.** Verified by re-measuring all 695 text nodes against their actual backdrops. Frames grew 16–40dp and reflowed with no clipping.

### Not fixed, and why

**11 buttons remain at 40dp.** Already on the `lg` variant, but their height is locked by the *remote* library component — `resize()`, `layoutSizingVertical`, and padding overrides all silently no-op. Fixing this means fixing the library, or swapping the component. Not possible from this file.

**Tab control remains 28–32dp.** `iOS Tabs` and `Control iOS` are remote iOS platform components, and 32pt is Apple's own segmented-control height. A real floor-vs-platform conflict. `accessibility.md` is explicit: escalate rather than ship an undocumented exception. **This needs a decision — documented waiver, or replace the control.** I reverted an initial 32→44 resize because it stretched the wrapper without enlarging the actual touch target.

**Biometric range marking not done.** That is a design decision (word? icon? both?), not a mechanical fix — and the sharper problem is that four tiles have values but no goal, so they cannot express range state at any treatment.

### File ambiguity — resolve before going further

A second file, **`lifeforce (FINAL)`** (`k4JZ2k5VfnH9FgC809zTzL`, 7 pages), holds the same `Frame 806`. The example ids in `conformance-audit.js` (`2567:*`) come from that file, so **run 1 was measured there**. These fixes are only in `lifeforce` (`etUEI…`), the URL supplied today. Confirm which file is canonical.

---

## Presentational pass — 2026-08-06, same `V4` duplicate

Three changes, applied after the accessibility pass.

**Recessed surface tone.** Page → `Mub 50 #FAF7F0`, chrome matched to it, cards stay white, and the 1dp `#d6d6d5` outline was **removed from 79 cards**. Grouping now comes from tone instead of outlines, which is what run 1 named as the highest-leverage fix.

**Utility de-carded.** 39 blocks inside `card/support` lost their white fill and border — Peak Health Support and About LifeForce now sit directly on the page instead of getting the same container treatment as the primary action. Row-shaped blocks (≤60dp) kept a `Mub 300 #E2E0DA` hairline so taps stay separable.

**Completed enrollment collapsed.** On the 9 screens where enrollment is done, the four-step checklist is hidden and the card drops **164dp → 56dp**, leaving `ENROLLMENT — Complete · 4/4 ›`. The three enrolling screens keep their checklist; verified, not assumed.

Net effect on screen height: **8 of 12 status screens are 68–92dp shorter**, no clipping anywhere.

### Regression I caused and fixed

Promoting the button variants wiped four text overrides — "Invite dependent" became "Label". Caught it in the screenshot, restored all four by diffing against the original board, then ran a full text diff across all 17 screens to confirm nothing else drifted. Only the intentional copy change differs.

### Art direction re-score — 23/80 → 35/80

Self-assessed, so read it with that in mind.

| # | Dimension | Was | Now | Why |
|---|---|---|---|---|
| 1 | Emphasis rank | 3 | **5** | Cards separate from the page; hero reads first. Still competes with the phase card |
| 2 | Tonal structure | 2 | **8** | Three tones with assigned roles — page / raised / utility. Grouping survives with colour removed |
| 3 | Success/failure symmetry | 2 | 2 | Untouched. Frame 11 still has the filled button, frame 07 the outlined one |
| 4 | Graded density | 3 | **6** | 56dp enrollment against 122–228dp cards. Density now tracks rank |
| 5 | Accent discipline | 3 | 3 | Untouched. Five blues remain |
| 6 | Type as hierarchy | 2 | 2 | Untouched. Needs the conformance work |
| 7 | Meaning carried visually | 2 | 2 | Untouched. Biometric range state still unmarked |
| 10 | Partner survivability | 6 | **7** | Hierarchy now carried by tone, not by the navy |

The four dimensions that didn't move are the honest measure of what presentation alone cannot fix: type hierarchy needs the conformance remediation, accent discipline needs a stated rule, and 3 and 7 need product decisions.

---

## White-page variant — page `V5 — white page (constraint)`

Built after the constraint surfaced that the page background may have to stay `#FFFFFF`.

**What changes:** page and chrome back to white; the 86 white cards get **Depth 1 elevation** instead of the warm page doing the separating. Utility blocks keep their no-container treatment — which works *better* on white, since nothing competes with them tonally.

**Depth 1 has no defined value in the system.** `object-styles.md` specifies the level and its job — *"subtle elevation — cards, surface separation"* — but no measurement, and production CSS contains no `box-shadow` at all. Proposed value, needs ratifying:

```
Depth 1 = 0 1px 2px rgba(0,0,0,0.05), 0 2px 6px rgba(0,0,0,0.06)
```

Two layers, low opacity, neutral. Deliberately not tinted with the brand navy — a hue-tinted shadow shifts under partner themes.

### Warm page vs white page

| Dimension | Warm (`V4`) | White (`V5`) |
|---|---|---|
| Emphasis rank | 5 | 5 |
| Tonal structure | **8** | 6 |
| Success/failure symmetry | 2 | 2 |
| Graded density | 6 | 6 |
| Accent discipline | 3 | 3 |
| Type as hierarchy | 2 | 2 |
| Meaning carried visually | 2 | 2 |
| Partner survivability | 7 | **8** |
| **Total** | **35/80** | **34/80** |

**The constraint costs one point.** Almost the entire improvement came from the enrollment collapse (graded density) and the utility de-carding (emphasis rank) — neither depends on page colour. Only tonal structure genuinely suffers, 8 → 6, because depth replaces tone. Partner survivability actually improves: a shadow is hue-independent in a way a warm tint is not.

Recommendation: if white is fixed, take `V5` without hesitation. It is not a compromise version.

Open question worth confirming: production home ships `--bg: #FAF7F0`, so the white requirement may be specific to the LifeForce shell rather than MHC-wide. Worth checking before treating it as permanent.

---

## Instrument notes

The two deferred checks were worth building. Measuring contrast against the **actual backdrop** rather than white found 64 failing nodes and a brand-level defect that four separate reviews of this file had missed — the calibration run included. Recommend folding both into `conformance-audit.js` so they run by default rather than as a follow-up.

The target-size check needs the parent-affordance rule to avoid false positives: raw icons are almost always under 44dp and almost always fine. Walking up to the nearest ≥28dp, ≥200dp-wide ancestor cleared the chevrons correctly.

---

## Revision Log

| Date | Change |
|---|---|
| 2026-08-06 | Run 2. Conformance unchanged. Three new accessibility blockers, one new sev-3 UX finding, one correction to run 1's reading of the goal-less tiles. |
