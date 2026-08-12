# Email to Shannan — LifeForce scope (DEM-35)

**Subject:** LifeForce (DEM-35) — what does "look and feel" mean before Jul 31?

Longer-form version of the Slack note. Updated 2026-07-29 to lead with the "look and feel"
definition (see §0 of `outputs/jul28-lifeforce-open-questions/OPEN-QUESTIONS.md`).

---

Hi Shannan,

Before design closes Jul 31, I need one thing settled: **what "look and feel" means on this ticket.**

Jira: https://mobilehealthc.atlassian.net/browse/DEM-35

The ticket asks us to update the look and feel to better match our standard product, and explicitly rules out a "total overhaul or re-conceptualization." But D'Arcy's V3 concept *is* a re-conceptualization — it moves LifeForce out of the standalone Peak Health dashboard into a unified two-tab experience inside CarePlus, with new IA and a bottom nav. **McGriff was shown that concept on Jul 17.**

So the brief splits three ways, and the difference isn't cosmetic:

| Reading | What we deliver | Cost |
|---|---|---|
| **Visual skin only** | Same screens, same IA, restyled to our type, colour and components | Smallest — closest to the ticket |
| **Component parity** | Rebuilt from our Page Layout Elements / DCP components, so it *is* the same system rather than resembling it | Medium — this is what makes Ren's configuration clean |
| **Experience parity** | Behaves like Journeys and DCPs. **This is D'Arcy's V3** | Largest — past the stated non-goal |

**The risk is the mismatch.** McGriff has seen the third. If our plan is the first, the client's expectation is already running ahead of what the ticket authorises — and that surfaces in QA or in a review with Ryan, not quietly.

Two smaller asks:

- **Are we still waiting on McGriff's feedback, or running forward?** The concept went to them Jul 17.
- **Where is the "Health Programs" inspiration Figma?** It's named in the ticket as the reference for what matching our standard product looks like, and I've never seen it. Without it I'm inferring the target.

On timing: design closes Jul 31, Ren starts configuring Aug 1, and the large form (Web/Angular) doesn't exist in any direction yet — D'Arcy built the 392px phone prototype only. That's the critical path whichever reading we land on.

**My default if I don't hear otherwise:** I keep building the large form to D'Arcy's V3 and adjust when McGriff's feedback lands. Tell me if that's wrong.

Best,
Davinder

---

## Notes (not part of the email)

- **Name spelling unconfirmed** — "Shannon" vs. "Shannan". Verify before sending.
- **Deliberately omitted:** the live-date ambiguity ("1/1/26" → almost certainly 1/1/2027), the
  credit-mechanic conflict (§2.2b) and the phase-assessment gap (§4b.1). All three need
  discussion rather than an email reply, and including them would bury the one ask.
- Full question log: `outputs/jul28-lifeforce-open-questions/OPEN-QUESTIONS.md`.
