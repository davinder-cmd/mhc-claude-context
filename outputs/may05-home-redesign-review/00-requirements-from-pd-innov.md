# Home Page Redesign — Authoritative Requirements

**Captured:** 2026-05-06 (refreshed)
**Status:** Authoritative. UI/UX-relevant items only. Supersedes all prior captures.

Two source documents make up the canonical brief. Below combines them and filters to UI/UX home-page items.

---

## Source 1 — Offsite follow-up, April 2026 (leadership / John)

**Objective:** Reduce escalations and improve performance and perception of the MH product.

**UI/UX-relevant items for the home redesign:**

| # | Initiative | Proposed approach | Owners | Target |
|---|---|---|---|---|
| 1 | **Logo in top/center of mobile and web** | As stated. | D'Arcy, Kian, Jill | Eng r2603 (June 30) |
| 2 | **Eliminate the side nav on web and mobile** | OR keep and clean up the side nav, AND/OR make dismissible. **Davinder + Jill** decide best approach based on current config; bring in Kian if best long-term solution requires Eng. | D'Arcy, Davinder, Kian, Jill | Eng r2603 |
| 3 | **One hero image only** | **OR Claude's recommendation of "Hero image + 3 things to do at top of screen."** Davinder + Jill decide best approach based on current config; bring in Kian if eng required. | D'Arcy, Kian, Jill | Eng r2603 |
| 4 | **Eliminate spinners during page load** | OR load page like Facebook (skeleton screens) to avoid users repeatedly hitting controls. Davinder + Jill decide based on current config. | D'Arcy, Kian, Jill | Eng r2603 (skeleton work in progress) |
| 6 | **Simplified personalization that works** | Add filters to pages so user can declare in session what they want to work on. **Simultaneously shut down the current personalization engine** that is weighing down the system. | D'Arcy, Kian, Jill | Eng r2603 |

**Items deferred or out of UI/UX home scope** (kept here for awareness, not for the home redesign):

- #5 Trackers — sync improvements (Al, performance / integrations track, not home design)
- #7 Text the expert / Avatar (Alex demo path)
- #8 AI for copy config / bulk copy (Kelly M, admin tooling)
- #9 Improve images on platform (D'Arcy, Davinder + Isabel)
- #10 Health Assessment font issues (D'Arcy, Jill — separate work)

---

## Source 2 — UX/UI Improvements · Home Page Focus brief (Darcy compilation)

**High-level goals (program-level, not for the meeting):**

- Iterate faster
- Generate HTML/CSS faster across the org
- Identify gaps that require eng building blocks faster
- Process trial: AI features (Claude Design, Claude Code, Cowork, Chrome plugin, Figma)

**Goals for this iteration of the home page:**

- One hero image on web and mobile *(JH — from offsite #3)*
- Logo in top nav on web and mobile *(JH — from offsite #1)*
- Simplified personalization *(CS)*
  - Concept to test: using "wellbeing interests" to filter / focus the home page to what the user wants to work on
- Ability to feature Client priority items *(CS)*
- Easier access to ongoing programs *(CS)*
- **Other current home page features:**
  - **Tracker Insights** — keep
  - **Tracker data** — *consider showing weekly view instead of "today," and/or showing fewer data points, and/or taking up less real estate on the home page*
- **Works in SDK & standalone apps for web and mobile** — including left nav and no left nav
- **Three scenarios:** left nav enabled on large form · no left nav on large form · small form factor
- **Eng need:** ability to use the full browser page
- **Accessibility** — meets 508
- **Performance** — optimize for fast page load

**Open questions — resolved:**

- *DCP AI coach discoverability on home page* — **deferred. No longer needed for this iteration.**

**Other considerations / future iterations of home (out of V1 scope):**

- Home page focused on "Today" — easy "pick up where you left off" + narrow focus on the next most important things to do
- Rewards-focused home screen
- DCP-focused home screen

**Future / next-enhancement candidates (out of V1 scope):**

- Rewards main page
- Other landing pages (Wellbeing, Care)
- DCPs
- Email / message templates
- Client custom pages

---

## What changed from the prior capture

For my own audit trail:

- John's items now sourced from the offsite follow-up memo (more specific phrasing, owners, dates)
- Item #3 (hero) explicitly leaves "single hero" vs "hero + 3 things to do at top" open — Davinder + Jill decide
- Item #4 (spinner) explicitly mentions Facebook-style skeleton loading as the alternative
- Item #6 (personalization) adds the instruction to shut down the existing personalization engine alongside adding in-session filters
- DCP AI Coach moved from open question to **deferred / out of scope**
- Tracker data direction shifted: leadership wants this reduced (weekly view / fewer points / less real estate) — was unspecified before
- Tracker Insights remains explicitly on home

---

## Decoded abbreviations

| Abbr | Means |
|---|---|
| **JH** | John H — exec sponsor (originated the offsite priorities) |
| **CS** | Client Services — represents employer-client needs |
| **r2603 / r2604** | Engineering release windows |
