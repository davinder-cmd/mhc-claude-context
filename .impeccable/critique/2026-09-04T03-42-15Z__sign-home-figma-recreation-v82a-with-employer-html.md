---
target: home page design (v82a with employer)
total_score: 17
max_score: 40
na_heuristics: 
p0_count: 2
p1_count: 2
target_identity: "file:/Users/davinderrehal/@claude/outputs/may26-pair-row-redesign/home-figma-recreation-v82a-with-employer.html"
target_fingerprint: "sha256:aca1aa4a86f4682159b85ba30ec414e35c294720abfa417f4c406d99ef841f8d"
target_path: /Users/davinderrehal/@claude/outputs/may26-pair-row-redesign/home-figma-recreation-v82a-with-employer.html
timestamp: 2026-09-04T03-42-15Z
slug: sign-home-figma-recreation-v82a-with-employer-html
---
Method: dual-agent (A: isolated design-review subagent · B: isolated detector/browser-evidence subagent)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Good sync-freshness + progress bars, but the tracker row misreports status (see P0 below) |
| 2 | Match System / Real World | 2 | Human copy elsewhere, but "DCP" ships as raw internal jargon, unexplained |
| 3 | User Control and Freedom | 2 | Mobile hero is a single full-card tap straight into program enrollment, no preview step |
| 4 | Consistency and Standards | 3 | Disciplined token system, but tap-affordance signaling is inconsistent card to card |
| 5 | Error Prevention | 1 | No confirmation before enrollment; no preview before commit |
| 6 | Recognition Rather Than Recall | 3 | Session counts, reward progress, challenge rank all shown in place |
| 7 | Flexibility and Efficiency | 1 | No shortcuts, no reordering/pinning, no power-user path on a repeat-use hub |
| 8 | Aesthetic and Minimalist Design | 3 | Calm, restrained; dented by the repeated identical stat lines and the data bug |
| 9 | Error Recovery | 0 | No error, empty, sync-failure, or broken-image state designed anywhere |
| 10 | Help and Documentation | 0 | No glossary/tooltip for "DCP," no help affordance on a surface serving clinical programs |
| **Total** | | **17/40** | **Poor** |

Most real interfaces land 20-32/40. This one is held down almost entirely by the missing safety net (heuristics 9 and 10 both score 0) rather than the visual layer, which is comparatively strong.

## Design Specificity Verdict

**Design review (Assessment A):** The architecture and content threading are genuinely MHC-specific — the hero ("Sleep better in 4 weeks"), the "Wind down before bed" interest card, and the Insight banner all reinforce one behavior thread, which is a content-strategy decision, not a template stamp. Dollar-denominated reward mechanics, employer-pairing, and Apple Health sync grounding are authentic to MHC's model. But the "This week" tracker row betrays generic-template origin: four tiles that all read an identical "78% of weekly goal," populated with data that wasn't actually written for this product (see the P0 below).

**Deterministic scan (Assessment B):** The CLI detector (`detect.mjs`) ran in a degraded mode in this environment — its HTML-parser dependencies (htmlparser2, css-select, css-tree, domutils) weren't available, so it fell back to regex matching and returned an empty finding set. That `[]` is explicitly self-flagged by the tool as an undercount, not a clean bill of health — don't read it as "no issues." The browser-injected version of the same detector (running against the live-rendered page rather than static regex) did work fully and returned 11 concrete findings, reported below.

**Visual overlays:** Browser injection succeeded — a genuine DOM-mutation script tag, confirmed present, not a read-only fetch. It logged 11 anti-pattern findings via console (grouped: 1 text-overflow, 4 low-contrast, 5 text-occlusion, 1 cream-palette). No user-visible overlay persists now; the local server used for the check was stopped before this report. One likely false positive: `cream-palette` (warm beige page background) reads as a flat rule-hit rather than a real defect — MHC's own reference palette treats warm background tones as an accepted brand choice, so long as text/ink stays neutral (which it does here); this finding shouldn't be actioned.

## Overall Impression

The system layer (type scale, spacing tokens, card radii, reward mechanics, content threading) is more disciplined and more authentically MHC than most first-pass comps. But three things undercut it hard enough to pull the score into Poor territory: a tracker section whose data is internally nonsensical, a mobile program carousel that hides the one program the hero just recommended, and a complete absence of error/help states on a surface that carries real clinical program enrollment. The single biggest opportunity: fix the trust-breaking data bug and the hidden-first-card carousel before anything else — both are one-line CSS/data fixes, and both sit directly in the path of the page's core job (get a member into a program with confidence in what they're seeing).

## What's Working

1. **Token discipline.** A documented type scale with real rationale, a Material-3-style button scale, and consistent corner radii across every card type — reads as a maintained system, not a one-off comp.
2. **Cross-module narrative threading.** Hero, interest card, and Insight banner all reinforce the same behavior (sleep) with escalating specificity — most competitor dashboards don't attempt this.
3. **Concrete, dollar-specific incentive copy** ("$100 reward at completion," "$25 to next $25 card") instead of abstract gamification points — fits an audience motivated by real financial stakes.

## Priority Issues

**[P0] Tracker data is internally inconsistent.**
- **Why it matters:** The "This week" section's entire job is proving the platform accurately reads real health data. Steps shows "6h 43m" (a duration copied from the Sleep tile) and Active Min shows "52,470" (a magnitude that fits steps, not minutes); all four tiles share an identical "78% of weekly goal." Anyone glancing at their own Fitbit/Apple Health app catches this instantly, and for an audience already skeptical of wellness programs, one visibly wrong number undermines trust in every other number on the page — including reward eligibility math.
- **Fix:** Assign distinct, plausible values and goal percentages per metric (e.g., Steps 8,432 · 84%; Active Min 187 min · 62%).
- **Suggested command:** `/impeccable harden`

**[P0] Mobile programs carousel doesn't open on card 1.**
- **Why it matters:** Verified via layout measurement on fresh load: card 1 ("Better Sleep," directly tied to the hero recommendation above it) renders effectively off-screen (`left:0, width:2px`) while card 2 ("Manage Stress") is the visible leading card. This hides the one program the page just recommended, and breaks the basic expectation that a horizontal list starts at item one — a distracted mobile user (this platform's dominant real-world context) will likely never discover it.
- **Fix:** Add `scroll-padding-left` matching the card gutter (or reset `scrollLeft = 0` on load) so the snap point on first paint is card 1.
- **Suggested command:** `/impeccable harden`

**[P1] Mobile hero has no visible call-to-action.**
- **Why it matters:** Below 600px, `.hero__actions` is hidden and replaced by an invisible full-card stretched-link (confirmed by the detector: the link overflows its box by ~9999px and 100% text-occludes five elements underneath it — the eyebrow, headline, body copy, and two reward/program labels). Every other module on the page (Edit pill, chevrons, Details button) carries a visible action cue; the highest-priority recommendation on the page is the only one that looks purely informational to a sighted user not relying on the screen-reader-only label.
- **Fix:** Keep the full-card tap target, but surface a small visible label or chevron ("Start the program →") at the card's bottom edge so the link doesn't rely on invisible text to signal interactivity.
- **Suggested command:** `/impeccable clarify`

**[P1] "DCP" ships as unexplained internal jargon.**
- **Why it matters:** "DCP · Sleep," "DCP · Stress," "DCP · Diabetes" tags appear with zero glossary, tooltip, or plain-language fallback. This directly contradicts an ICP that includes people with varying health literacy managing real clinical conditions — an acronym meaningful to internal product/clinical teams is exposed raw to members deciding whether to join a mental-health or chronic-disease program.
- **Fix:** Replace with plain language ("Care Program · Sleep") or drop the qualifier and let the card title carry the meaning.
- **Suggested command:** `/impeccable clarify`

**[P2] Reward/progress microcopy fails WCAG AA contrast.**
- **Why it matters:** Both assessments independently measured the same value: `#9a9ea6` on white = 2.7:1 (need 4.5:1 for 14px text). This color is applied to `reward__sub` — the exact copy that tells a member how close they are to a payout ("$25 to next $25 card," "750 to Gold tier") — and to the rec-card chevron affordance. The lowest-contrast color in the palette is on the highest-motivation copy on the page.
- **Fix:** Promote that text to the mid-neutral ink token used elsewhere in the system (passes AA at 5.98-6.4:1).
- **Suggested command:** `/impeccable harden`

## Persona Red Flags

**Jordan (confused first-timer)**, figuring out what the app wants from her first: the hero eyebrow "BASED ON YOUR INTERESTS" and the pair-card header "Based on your interests" — identical text, two different mechanisms — sit ~150px apart and read as duplicated content on first scan. "DCP · Sleep" has no explanation anywhere on the page. And "6h 43m" under STEPS is the first data point she'll cross-check against her own phone — and it's wrong.

**Sam (accessibility-dependent, low-vision/keyboard)**, reviewing today's data and navigating to a program: the reward-progress text and rec-card chevron both measure 2.7:1 contrast, failing AA on exactly the copy that answers "how close am I to my reward." The mobile hero's only interactive element is a stretched-link with visually hidden text — a screen reader gets the label, but magnification or voice-control users find no visible button at all. Heading hierarchy also skips a level (h1 → h2 hero title → h3 sections with no h2 wrapping the pair section), which can confuse screen-reader users navigating by heading rank.

**Casey (distracted mobile user)**, glancing one-handed between meetings: the confirmed carousel bug means her most relevant program is functionally invisible without an intentional backward swipe. The mobile hero consumes roughly half the first viewport before the next section starts and carries no visible button, so a quick skim reads it as a photo, not an action. Bottom-nav labels sit at the smallest text size on the page, on the one persistent element she's most likely to glance at.

## Minor Observations

- Section-header action verbs are inconsistent ("All data," "All programs," but "Reward Details" rather than "All rewards").
- The two "Based on your interests" pair cards carry uneven metadata — one shows a time estimate, the other doesn't.
- All four tracker tiles use the same "trending up" arrow regardless of whether "up" is actually goal-aligned for that metric.
- All 6 images on the page (hero + 5 thumbnails) have empty `alt=""` attributes — content images, not decorative, so screen-reader users get nothing for any of them.
- The demo employer logo ("ACME," bold red-bordered wordmark) sits directly beside the navy/beige system — worth stress-testing against real employer brand colors once white-labeled, since red is also likely reserved for error states.

## Questions to Consider

1. If "This week" exists to build trust in the platform's data accuracy — a prerequisite for someone to trust it with a real clinical program enrollment — what QA step would catch a step count rendering as a time value before this reaches stakeholder review?
2. A "ready to redeem" gift card and a purely informational calorie stat carry identical visual weight on this page. Should the layout surface what's actionable today above what's merely informational, rather than a fixed section order?
3. Given the ICP explicitly includes people with varying health literacy managing real conditions, is burying "DCP" in an unexplained tag a decision anyone actually made, or inherited terminology that's never been questioned at the member-facing layer?
