# DCP Program Detail — Iteration Log

The first surface of the **DCP suite** (per `outputs/jul13-dcp-suite-kit/HANDOFF.md`).
Re-skins the EBB topic-page IA onto the **v81 system** (navy brand + SF Pro +
`mhc-base.css`). Content/IA lifted, **not restarted**; palette/type/shape/shell/
responsive logic inherited from home v81.

**Loaded:** jul13-dcp-suite-kit (mhc-base.css · RESPONSIVE-RATIONALE · HANDOFF) ·
feature-dcp (_brief · _decisions) · feature-ebb (_brief) · ux-usability-experts ·
ux-laws-quick-reference · visual-design-experts.

**Source reconciliation:**
- Content/IA base — `outputs/jul02-ebb-topic-page/topic-page-v4-full.html` (the
  "spec-in-a-page" definitive assembly).
- Path/session-list component — `outputs/jul08-ebb-path-component/path-options-v1.html`.
- State matrix — `outputs/jul07-ebb-topic-states/` (11 states; v1 = in-progress).
- Locked rationale — `outputs/jul10-ebb-page-rationale/`, `jul10-ebb-approach/`.

---

## Files

| File | What it is |
|---|---|
| `dcp-program-detail-v2-depression.html` | **Current.** v1 + the **progress ring** primitive (`.pring`) replacing the linear bar; "at your own pace" framing. |
| `breakpoints-v2.html` | **Start here.** Three-breakpoint viewer for v2 (ring). |
| `dcp-program-detail-v1-depression.html` | Superseded (linear bar). Kept for history. |
| `breakpoints-v1.html` | Superseded viewer (bar) + full heuristics rationale + 60/30/10 + rejected alternatives + state matrix (still valid — rationale unchanged except the progress primitive). |

> Viewing note: open over `http://` (not `file://`) so the relative `mhc-base.css`
> link and the viewer iframes resolve. From `outputs/`: `python3 -m http.server`
> then open `/jul13-dcp-program-detail/breakpoints-v1.html`.

---

## Versions

| Version | Date | Notes |
|---|---|---|
| v2 | 2026-07-13 | **Current.** Progress switched from the linear bar to the shared **`.pring` ring** primitive (graphite fill; see feature-dcp `_decisions.md` — "ring everywhere"). Adopted "at your own pace" zero/pace framing. Reward held as graphite accent (rejected the amber/gold banner). Ring added to `mhc-base.css` as the suite primitive; legacy bar retained for home until it migrates. **Type-scale audit (Small Form vs Large Form):** confirmed both forms render to spec via computed-size measurement at 375 / 1440 — bump at ≥1200 per confirmed decision, so ~1040 stays Small Form; static labels hold, `title-1` flips Text→Display at 20pt. One fix — "See all 10 sessions" re-classed `title-3` → `label-1` (interactive control text = Label, per typography.md element-vs-class rule). **Hero alignment fix:** the Continue hero had drifted from the v81 home hero — corrected to mirror it exactly (title `heading-5`→**`heading-4`**, copy `paragraph-3`→**`paragraph-2`**, bespoke nested gaps → **uniform `display:contents` spacing** 16/24, media 180→**216** Compact / fills **locked 360** at Medium+, CTA `btn-m`). Now reads as the same hero pattern navigated-to from home. Verified in-browser (1440 / 1040 / 375) against the home hero, no console errors. **Two follow-up fixes:** (a) hero CTA is now S (40dp) on Compact, promoted to M (56dp) at Medium+ (was 56 everywhere) — mobile button height 40 per direction; (b) progress card restacked — ring now sits **above** the text (was ring-left/text-right), which also stops the "$100 when you complete" line clipping on mobile. **2-col breakpoint pulled 1200 → 840 (Expanded):** the progress card was sprawling as an empty full-width band across ~840–1199; now the path is the main column with progress + check-in as a 340px aside from Expanded up. (Reverses the earlier "no 2-col below 1200" call — confirmed against the rendered result; type scale still bumps at 1200, independent of layout.) Verified 860 / 1024 / 1440 / 375. **Progress card centered when full-width:** in single-column mode (<840) the ring + text now center (was left-aligned, read as empty); stays left-aligned in the ≥840 aside where centered multi-line text reads worse. |
| v1 | 2026-07-13 | First re-skin. In-progress state (Depression, Session 3 of 10). IA: top bar (home chrome) → page header (‹ back · title · Ask Anna) → **Continue hero** (one primary CTA, image+resume split at ≥600) → **progress + reward** ($100 stated once, calm graphite accent, linear bar) → **the path** (windowed done/current/locked + See all 10) → **How you're doing** (outcome check-in, plain language). Three densities: 375 stacked + bottom nav; ~1040 single reading column; ≥1200 two-column (path main / progress+check-in aside) + type bump. Verified in-browser at all three widths, no console errors. |

---

## v1 key calls (grounded in the filters)

1. **One primary action.** Continue hero is the single dominant, thumb-reachable CTA — nothing competes (Zeigarnik · Fitts's · Von Restorff · Doherty).
2. **$100 once, as an accent.** Reward stated exactly once, muted graphite with a small navy icon — never a payout meter (efficacy guardrail: pace, not speed; crowding-out; Nielsen #8).
3. **Show the path's shape, not all 10.** Windowed prior+current+next then "See all 10" (Miller's · Recognition #6 · Serial Position · Peak-End).
4. **Outcome ≠ progress.** "How you're doing" reflects whether it's *working*, in plain language, no clinical score — what makes this a care path, not a tracker (Nielsen #2).
5. **Sibling of home.** Same top bar, bottom nav on Compact, greeting-row header — arriving *from home* feels continuous (Consistency #4 · Jakob's Law).
6. **Real desktop at 1200.** Below 1200 renders Compact type + single column; only the top-nav target earns the 2-col density (mhc responsive rationale).

## Color weighting (60 / 30 / 10)
- **60%** warm beige ground + white surfaces
- **30%** graphite ink (text, hairlines)
- **10%** navy brand (Continue CTA, current-session dot, progress fill, links)
- Reward is deliberately **outside** the 10% accent budget — a muted graphite line, so money never dominates a clinical surface.

## Rejected alternatives
- **Two-button fork (Continue + Browse) in the hero** — splits one action into a decision (Hick's). Browse lives on the list surface.
- **Reward as headline / repeated $100 / countdown** — violates the efficacy guardrail; money is loud only on the Rewards page.
- **2-column layout at ~1040** — usable width in the legacy side-nav era is ~940–1040; a split there crowds. 2-col reserved for ≥1200.
- **Full 10-session list inline** — Miller's; windowed + "See all 10" keeps it scannable.
- **Phone-in-a-frame mock as the artifact** (EBB house style) — the kit ships a real responsive system; the live page proves from-home continuity + responsive logic a static mock can't.

## Deliberately NOT on this page
Full health metrics → the Tracker (one outcome insight is enough). "Learn more" /
resources → in-lesson + Anna. Test for anything proposed here: *"Does it help them
start the next session?"* (topic-page scope decision, feature-ebb `_decisions.md`).

---

## Next iterations (the 11-state matrix)
v1 is the canonical **in-progress** state. Still to re-skin from `jul07-ebb-topic-states`:
- **not-started / zero** — hero shows "Start the program" → routes into the enrollment spine (opt-in). *(Highest priority — it's the entry to detail → opt-in → success.)*
- **final-stretch** — 🏁 finish marker caps the path; earlier sessions collapse.
- **completed** · **next-session-locked** (pacing gate) · **reward-at-risk** ·
  **not-opted-in** (earn-gate) · **cap-reached** · **needs-support** (check-in → Anna/coach doorway) · **check-in-due** · **welcome-back**.

## Open questions (carried from EBB)
- Data on the topic/detail page — compact top strip vs. leave out (currently out).
- Progress zero-state softening.
- Consent **gate mode** — hard-gate vs. earn-gate (governs the not-started → opt-in handoff).
