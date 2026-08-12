# EBB — DCP Topic Page · Iteration Log

The drive-to-completion surface: make the next session obvious, show closing distance to the finish (and the $100), keep the path visible. Feeds the completion screen. Implements D1/D2/D4.

| Version | File | Date | Notes |
|---------|------|------|-------|
| v1 | `topic-page-v1.html` | 2026-07-02 | First pass + UX pass (Nielsen + Laws of UX). Structure: app bar (‹ / title / ? Anna) → Continue card (resume next session) → progress + reward ($100 stated once) → the path (chunked session list, "See all 10") → mood-this-week insight → bottom nav. Annotation rail cites the heuristic/law per zone. 5 explicit recommendations. |
| v2 | `topic-page-v2.html` | 2026-07-02 | Data block swapped: "mood this week" → **"How you're doing"** — assessment-based progress check-in (PHQ-9 bands "moderate → mild" + score; reflects, doesn't ask to log). Universal label, condition-specific metric, slightly clinical. Flips to a one-tap prompt when a check-in is due. Rest of page unchanged from v1. |
| v4 (full) | `topic-page-v4-full.html` | 2026-07-02 | **DEFINITIVE assembly.** Full page + a complete note per section: app bar (+ Anna) · Continue card · progress+reward ($100 once) · the path (with first/middle/last behavior) · "How you're doing" (event-driven outcome check-in, improving state shown) · bottom nav · a "deliberately NOT here" card (data/resources → tracker/lesson/Anna). Tags: UX (teal) / DCP-expert (amber) / decision (grey). Spec-in-a-page. |
| v3 | `topic-page-v3.html` | 2026-07-02 | **Current.** Pulled back the clinical framing in "How you're doing." Removed PHQ-9 name, numeric scores, moderate/mild bands from the member view; kept the label + assessment-based concept, restated plainly ("you've been feeling better since you started" + "↗ trending up" tag). Assessment still powers it behind the scenes. Nielsen #2 (match the real world). Rest of page unchanged. |
| check-in states v2 | `checkin-states-v2.html` | 2026-07-02 | **Current.** Reframed per the charter: outcome check-in = measurement-based care, **event-driven** (rhythm strip: baseline → rests → checkpoint → result → rests). Four states: **Resting** (quiet between), **Check-in due** (2-min capture prompt — the data event), **Improving**, **Needs support** (doorway to Anna/coach, never a score). Charter locked in `_decisions.md`. Open: confirm event-driven vs always-on. |
| check-in states v1 | `checkin-states-v1.html` | 2026-07-02 | The "How you're doing" block in its three honest states: **Improving** (earned — "feeling better" ↗), **Too early** (<2 data points — no claim, points to next check-in), **Needs support** (flat/declining — supportive, surfaces Anna/coach, never "keep it going"). Plus the **safety/crisis-routing** hand-off above the states, and the 3 clinical sign-off dependencies (thresholds, per-state copy, escalation trigger). Derived from baseline-vs-latest assessment against a clinical threshold. |
| path v1 | `path-edge-states-v1.html` | 2026-07-02 | The path component in First / Middle / Last states (Davinder asked for first & last). One windowing rule: always current + immediate context + collapse long completed runs into "Sessions 1–N complete" + "See all." First = clear Start + 2 locked previews. Last = collapsed summary + Session 9 + final Session 10 + a **finish marker** (🏁 → earn $100) that ends the path at the payout. Refines middle to show only the immediately-prior session. UX basis: Serial Position, Goal-Gradient (strengthen reward cue only at end), Peak-End, Miller's. |

## Stakeholder memo
- `topic-page-scope-memo.md` (2026-07-02) — one-pager defending the loop-focused topic page; frames data/resources as *placement* (tracker / lesson / Anna), not rejection. For the stakeholder(s) pushing to add data + resource links. Recipient line is a placeholder pending confirmation.

## UX pass — key calls (v1)
1. $100 appears once on this screen (crowding-out / Nielsen #8).
2. Chunk the path — never all 10 sessions (Miller's).
3. Continue = optimistic/instant (Doherty).
4. Topic-level data only when relevant (Cognitive Load / Tesler's).
5. One high-emphasis action always (Von Restorff).

## Open for reaction
- Is the mood/data block right on the topic page, or does it belong on the tracker?
- Reward restraint — is "$100 when you complete" the right single placement, or too subtle / too money-forward?
- Continue card vs. path list — any redundancy between the hero and the current-session row?
