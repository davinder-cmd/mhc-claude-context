# EBB — Opt-in screen + Overview reward reference

The one-time opt-in (fires at Get Started on the first DCP) + adjusting the DCP Overview to reference the reward.

| Version | File | Date | Notes |
|---------|------|------|-------|
| optin + overview v1 | `optin-and-overview-reward.html` | 2026-07-09 | Overview reward: A chip under meta / B line under Get Started (lean). Opt-in: full-page + bottom-sheet (lean, less punitive; desktop=right panel). Value-forward headline + 3-step + consent checkbox + LEGAL PLACEHOLDER (TBD, configurable, annual re-consent). Earn-gate: "Not now" allowed (still do program, no reward) — dismissible-vs-wall = open gate_mode decision. |
| optin v2 (more visual) | `optin-v2-explorations.html` | 2026-07-09 | More weight + bigger bullets + hint of fun, per Davinder. 4 directions: **A Reward hero** (warm gradient, oversized gift, one big $100, amber-tinted reward bullet); **B The path** (reward = end of a journey, reuses DCP path node/line language — efficacy-safe, LEAN) + bottom-sheet variant; **C Collect up to 5** ($100→$500 ladder, goal-gradient — most reward-forward, closest to "too gamified"); **D Celebratory** (confetti/🎉, ties money to feeling of finishing). 46px icon-tile bullets throughout. No coins/odds — warmth not gambling. Earn-gate + legal placeholder preserved. |

| optin v3 (collect, lighter) | `optin-v3-collect-lighter.html` | 2026-07-09 | Davinder liked C (collect up to 5) but too much visual weight; B (path) out. 4 lighter takes, enumerated $100→$500 rungs dropped: **C-i Quiet stat** (warm chip + 5 tiny inline dots, lightest); **C-ii Segmented bar** (slim 5-segment bar, endpoints $100→$500 only — reuses EBB progress-bar shape, LEAN); **C-iii Pip row** (5 circles, first=gift); **C-iv One rung + folded** (rung 1 full, paths 2–5 folded into "+4 · $500"). Earn-gate + legal preserved; no coins/odds. **Built natively in Figma** ("EBB — DCP screens" section, below the opt-in cluster; frames 8478:25587 / 25627 / 25663 / 25701, label 8478:25738). |

| optin v4 (switch + more copy) | `optin-v4-switch-explainer.html` | 2026-07-09 | Fuller explanatory copy + consent control = **toggle switch** instead of checkbox. 5 layouts of the same content (what it is / your pace / how you get paid / your privacy): **V1 Guided explainer** (numbered steps + "good to know", LEAN); **V2 Info cards** (4 labeled topic cards); **V3 Narrative** (warm prose + pull-quote); **V4 Q&A** (FAQ framing, shown in switch-OFF state → CTA dims to "Turn on", "Start without rewards"); **V5 Reward-forward** (C-ii segmented bar on top + 3 reassurance points). Switch = explicit commit, required On to enable CTA; earn-gate + legal placeholder preserved. **V1/V3/V5 built natively in Figma** ("EBB — DCP screens" section, row below v3 collect; frames 8480:26217 / 26258 / 26278, label 8480:26322). V2/V4 HTML-only. |

| overview reward banner | `overview-reward-banner.html` | 2026-07-09 | Davinder: v1 Overview callout underwhelming, wants more presence / banner. 5 banner treatments, all below hero+meta so clinical leads: **1 Warm gradient full-width** (soft amber band, versatile default); **2 Reward + progress** (bordered card, "1 of 5 → $500" + segmented bar, LEAN — plants year goal, goal-gradient); **3 Bold amount navy** ($100 large, strongest but competes w/ Get Started); **4 Hero ribbon + strip** (ribbon on image + slim strip, most fun); **5 Accent bar + inline steps** ("Start → Finish all 8 → 🎁 $100", most explanatory). Restraint check: reward = ~10% accent, presence grown not share. Not yet in Figma. |

| path steps options | `optin-path-steps-options.html` | 2026-07-10 | Options for the empty circles in the "how it works" 3-step path block (Start → Finish → $100). Fixed "5 path"→"5 paths". 5: **A Numbered 1·2·3 (LEAN)** — step 3 amber; **B Icons** (▶/✓/🎁); **C Images** (illustration tiles, heaviest); **D Horizontal 1·2·3** (tight vertical space); **E Minimal inline** (number badges, hairline, lightest). Rec: A (sequence w/ zero interpretation cost, no art pipeline). Not yet in Figma. |

## Open
- Legal/consent copy (HIPAA authorization + ADA notice) — counsel.
- gate_mode: dismissible ("Not now") vs hard wall.

## Next
- Davinder confirms overview treatment + opt-in format → refine content when available → build in Figma.
