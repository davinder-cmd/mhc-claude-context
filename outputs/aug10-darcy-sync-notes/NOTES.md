# LifeForce — sync notes for D'Arcy
_Prep · Aug 10 2026 · Davinder_

## 1 · Process & materials

- **Requirements source of truth:** `Truist LifeForce Dashboard Requirements.docx` — validated every screen against it.
- **References (not drivers):** D'Arcy's V3 (Figma + `.dc.html` flows) and the current production dashboard (EnrolledUser screenshots).
- **MHC foundations, applied verbatim:** Type System v3, Material-3 responsive grid (600/840/1200/1600), 4dp spacing tokens, semantic color system.
- **Mobbin** for outside-in pattern reference (appointment cards, invite-sent, tier/level/phase viz, "in-review/being-scheduled" states) — awareness, not anchor.
- **Built:** component variants + a **page-template anatomy** doc in the shared Figma; a **grid-aligned responsive HTML** prototype set (`aug09-lifeforce-grid`) for Ren/eng.
- **Tracked:** decisions in `_decisions.md`; open items in `OPEN-QUESTIONS.md`.

## 2 · Required / needed but not represented (original product *or* V3)

**A. Required by the doc, not built anywhere yet**
- **Per-pay-period (semi-monthly) credit** estimate tied to **phase** + "how to improve" — the doc asks in 3 places; earlier framing showed a *cumulative* dollar total instead.
- **Spouse/dependent HA reminder** for *registered-but-not-completed* — required (brief); no state existed. Built as a new keyed state + the full lifecycle (**Invite → Sent → Reminder → Completed**), incl. the missing **send-confirmation**.
- **Phase transparency** — member can't see *why* they're in a phase. Open data question: does Peak send the reasoning, or only the integer?

**B. In V3 but not backed by requirements / maybe not buildable — needs Ren + D'Arcy alignment**
- **"Add to calendar"** — config layer has no JS; `.ics` needs server-side or native handoff; small vs. large form may diverge. (Fallback already built: text-link, reminder line cut.)
- **"You'll get a reminder the day before"** — unverified push/email; who owns sending it? Fails invisibly.
- **In-app appointment card w/ date-time** — doc says the member gets an **emailed** confirmation; the card depends on **structured appointment data from Peak** (datetime, timezone, join link) — unconfirmed.
- **Modality:** the visit is **telehealth** (per the flows) → **no location/directions**. Earlier "in-person / get directions" framing is inaccurate and should come out.

**C. Representation gaps (generic → purpose-built)**
- Generic cards didn't distinguish **message types**; moved to purpose-built cards per state (appointment · invitation pending/done · being-scheduled · phase).
- **Phase** was generic dots — didn't communicate what a phase *means* or that it drives credit.

## 3 · Where we are

- **Message-type card system** emerging: each lifecycle state = a purpose-built card in two densities (full card + notification/banner). Built so far: appointment (5), invitation family + pending/done banners, being-scheduled (3).
- **Phase visualization:** 6 directions explored (segmented ladder, tier, gauge, medal, climbing bars, peak) + mini forms — **leaning segmented / phase-led**; decision still open.
- **Hierarchy model:** post-enrollment, **Phase is the persistent primary**; events (appointment / notice / alert) are a **secondary notification layer**; a true alert can temporarily escalate.
- **Templates documented:** 4 page templates with a shared anatomy — _app bar › title/tabs › primary/focal › secondary cards › support › nav_; only primary + secondary change per screen.
- **Eng-facing:** responsive HTML prototype grid-aligned to the MHC foundations, ready to hand to Ren.

**Needs a decision (D'Arcy / Ren / Peak):** appointment data + calendar/reminder feasibility · confirm telehealth · phase-reason data · credit denomination (per-pay-period vs annual) · labs cadence (annual vs biennial) · live date (1/1/26 → 1/1/27).
