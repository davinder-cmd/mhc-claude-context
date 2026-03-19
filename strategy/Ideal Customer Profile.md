# Ideal Customer Profile

> This file defines who we are designing for. Every agent — from Research & Synthesis to Design Execution to Engineering Handoff — should use this as the north star for all user-facing decisions.

---

## Product Audience Summary

We build for working adults managing two or more chronic or co-occurring health conditions who face real barriers to traditional care — cost, wait times, scheduling, and geography. They access Mobile Health Consumer on their phones, often after hours, looking for support that fits their actual lives rather than a clinical system built for someone else's schedule.

---

## Primary User Persona

### The Overburdened Employee

- **Role / Title:** Working adult in a physically or cognitively demanding job — warehouse manager, nurse, truck driver, facilities director, remote knowledge worker
- **Age range:** 29–58
- **Technical comfort:** Medium — comfortable with smartphones and apps, not early adopters; needs low friction and clear onboarding
- **Primary device:** Mobile (primary); desktop occasional
- **Context of use:** Lunch breaks, evenings at home, early mornings before work, during mandatory rest breaks (e.g., truckers); rarely during business hours

**Goals:**
- Address 2–3 connected health conditions without juggling multiple specialists or taking time off work
- Make real, measurable progress (A1C, blood pressure, weight, pain levels) without spending hundreds of dollars per month
- Manage their health privately — without coworkers, managers, or even family knowing they're struggling
- Feel understood as a whole person, not a set of disconnected diagnoses

**Pain Points:**
- Traditional care is fragmented: three conditions means three providers, three waitlists, three copays — with no coordination between them
- Wait times of 6–10 weeks to see a specialist mean the moment of motivation passes before care begins
- High-deductible health plans (55% of employer plans) mean $1,500–$3,000 out-of-pocket before insurance helps with therapy or PT
- Taking 2–4 hours off work per appointment is logistically and professionally costly — especially for hourly or shift workers
- Rural users face compounding barriers: 17+ miles to the nearest hospital, often zero local mental health or specialist providers
- Mental health stigma at work is real — many users won't seek traditional therapy because of who might find out

**Behavioral Patterns:**
- Enters through the condition they're most comfortable admitting (e.g., diabetes management before depression)
- Discovers and enrolls in additional programs once trust is established — the "gateway condition" pattern
- Responds to progress that's visible and measurable (A1C numbers, pounds lost, pain scale)
- Motivated by tangible incentives — the $100/program gift card is a meaningful trigger for enrollment and completion
- Trusts the product when it acknowledges that conditions are connected, not siloed
- Word-of-mouth and peer endorsement (a coworker, a nurse colleague, an HR rep) is the most common discovery path

---

## Secondary User Persona

### The Benefits Decision-Maker

- **Role / Title:** HR Director, VP of Total Rewards, Benefits Manager, or Chief People Officer at a mid-to-large employer
- **Key difference from primary:** They are not managing their own health — they are evaluating whether a product delivers enough value to include in an employee benefits package and justify the cost to leadership

**Goals:**
- Reduce healthcare spend by keeping employees healthier and reducing high-cost utilization (ER visits, specialist referrals, hospitalizations)
- Offer benefits that employees actually use — utilization rates matter as much as outcomes
- Demonstrate ROI to CFOs and executive leadership with credible, quantifiable data
- Solve for the comorbidity problem — most chronic condition programs address one condition at a time, but their employees have two or three

**Pain Points:**
- Fragmented vendor landscape: separate vendors for diabetes, mental health, musculoskeletal — complex to administer, hard to measure holistically
- Low employee engagement with traditional wellness programs — they've been burned before
- Difficulty proving ROI to finance; need before/after outcome data and cost-avoidance estimates
- Compliance and privacy requirements (HIPAA) create hesitation around digital health adoption

---

## What Our Users Are NOT

Describing who we are not designing for prevents scope creep and helps agents make exclusion decisions with confidence.

- We are not designing for **acute care patients** — our users are managing chronic and ongoing conditions, not navigating emergencies or post-surgical recovery.
- We are not designing for **clinical providers** — physicians, nurses as clinicians, or care coordinators administering care at the system level. Rachel Martinez uses the product as a *patient*, not as a provider.
- We are not designing for **health-optimizing early adopters** — users who are already healthy and want peak performance tracking. Our users are managing real health burdens, often under financial and time stress.
- We are not designing for **desktop-first users** — our users access the product on mobile, often in constrained environments (a truck cab, a lunch break, a 3 AM insomnia spiral). Desktop polish is secondary to mobile experience quality.
- We do not optimize for **high health literacy** — our users range from a nurse who knows too much to a warehouse manager who avoids medical terminology. Plain language and intuitive UX are non-negotiable.

---

## Key User Insights

| Insight | Source | Implication for Design |
|---------|--------|------------------------|
| Adults with Type 2 diabetes are 2–3x more likely to have depression — but most seek care for diabetes first | CDC, American Diabetes Association | Design condition entry points that lead naturally to related programs; don't require users to self-identify mental health needs upfront |
| 50–80% of chronic pain patients experience significant sleep disturbances; poor sleep increases pain sensitivity 15–25% | Journal of Pain Research, Sleep Medicine Reviews | Surface program connections proactively — e.g., "Users managing back pain often find the Insomnia program helpful" |
| Average wait to see a psychiatrist: 48 days. Average wait for orthopedist: 24.5 days | NAMI, Merritt Hawkins 2024 | "Start today" messaging is a genuine differentiator — design onboarding to get users into content within minutes |
| 55% of employer-sponsored plans are HDHPs; average individual deductible $1,735 | KFF Employer Health Benefits Survey 2024 | Cost-zero framing is powerful — make "$0 to you" and the gift card incentive prominent in onboarding and marketing |
| 40% of workers report difficulty getting time off for medical appointments | Commonwealth Fund | Emphasize asynchronous, schedule-independent access — especially for shift workers, hourly employees, and rural users |
| Rural Americans travel an average of 17 miles to the nearest hospital; many rural counties have zero mental health providers | Rural Health Information Hub | Offline-capable content and low-bandwidth design are equity requirements, not edge cases |
| Word-of-mouth (coworker, nurse colleague, HR rep) is the most common discovery path across all five personas | Health Stories Research, 2025 | Design shareable moments and peer referral mechanics; arm HR and benefits teams with demo-ready talking points |
| Users enter through their "safest" condition and expand once trust is established | Health Stories Research, 2025 | Reduce friction for first program enrollment; design cross-program discovery as a natural next step, not an upsell |
| The $100 gift card per program motivates both enrollment and completion | Health Stories Research, 2025 | Make reward progress visible throughout the program experience, not just at completion |

---

## Accessibility Baseline

- **WCAG compliance target:** AA
- **Known accessibility needs in our user base:** Older users (45–60) with reduced contrast sensitivity; users on mid-range or low-end Android devices; users in low-bandwidth environments (rural, mobile data only); users with physical limitations (chronic pain, limited dexterity) who need larger touch targets
- **Non-negotiables:**
  - All touch targets minimum 44×44px
  - All body text minimum 16px at base size
  - Sufficient color contrast (4.5:1 minimum for normal text)
  - No reliance on color alone to convey state or meaning
  - Audio/video content must have captions or transcripts — many users consume content in environments where audio isn't possible (shared workspaces, truck cabs, break rooms)
  - Core program content must be functional on 3G connections
