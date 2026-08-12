# "Based on Your Interests" × Notifications — Discussion Outline for Darcy

_Home Page redesign v2 · June 4, 2026_
_[Figma frame](https://www.figma.com/design/6nJg9r55Y3NSgqZetujnPI/Home-Page-redesign-v2?node-id=6788-7111)_

---

## The model (corrected)

**"Based on Your Interests"** is a homepage section holding two message types:

| Type | What it is | Source |
|------|-----------|--------|
| **Based on your interests** | System-inferred relevance — resume a path, related content | Behavioral / personalization |
| **From your employer** | Sponsor-pushed messaging — programs, benefits, announcements | Employer-curated |

Both are *messaging*. **Notifications are also messaging.** That overlap is the problem to solve.

---

## 1. Why this section exists (the premise to pressure-test)

- It replaces the **carousel hero**, which carried **up to 5 messages**.
- Its only job is to preserve that messaging channel on the homepage.
- Therefore it is justified **only if it does that job well**. If it can't, it has no reason to exist.

---

## 2. The distinction that resolves the overlap

The line is **not** "personalized vs. employer." It's **standing relevance vs. event.**

- **Based on Your Interests = a state.** "You have an unfinished insomnia path." "Your employer offers X." True until the situation changes — not tied to a moment.
- **Notifications = an event.** "You earned 50 points." "Result is ready." "Challenge starts tomorrow." Tied to a moment; cleared once seen.

**Test for any card:**
- *"What happened?"* → Notification
- *"What's relevant to me right now?"* → Based on Your Interests

---

## 3. Dismissibility (falls straight out of #2)

| Surface | Dismiss behavior | Why |
|---------|-----------------|-----|
| **Notifications** | Dismissible / clearable | They're events; clearing is the natural end state |
| **Based on your interests** | Not deletable — **"See less"** at most, or not dismissible at all | The underlying state persists, so a delete just reappears and feels broken. "See less" is a preference signal; cleanest option is to let it self-resolve when the path is finished or abandoned |
| **From your employer** | **Not user-dismissible** | The employer is paying to be seen — they control lifecycle (expiry/priority), not the user. "See less" on frequency at most, never delete |

**Net:** Notifications clear; Based on Your Interests doesn't — it ages out on its own or via "See less." Keeping *delete* out of Based on Your Interests is also exactly what makes it read as **different** from notifications.

> Note on current state: notifications today **delete** on dismiss (destructive, no recovery). A **"See less" popover** was designed as the softer alternative. Decide where each behavior applies.

---

## 4. Length

- The carousel carried **up to 5**.
- The replacement should be **shorter, not equal** — cap at **~2–3**, prioritized (employer-critical + top interest match).
- A long messaging list *is* the cumbersome "30-line recommendations" UI we want gone.

---

## 5. The V1 decision

The clean model above is what makes "Based on Your Interests" **defensible** — but it still has to earn its place over simply letting notifications carry this.

- **A — Build it well.** Short, prioritized list with the dismissibility rules above. Only if we can execute.
- **B — Minimal version + test.** Ship the simplest viable form and validate before investing.
- **C — Don't ship for V1.** Let notifications carry messaging; no drill-down.

**POV:** The existing cumbersome recommendations UI has zero value and should not ship in any form. Whatever we do, **test it** before committing.

---

## Open questions for Darcy

1. Do interest-based and employer messages live in **one combined list** or **two labeled groups**?
2. Is **"See less"** in scope for V1, or do we defer dismissibility entirely?
3. What's the **priority rule** when employer messages + interest messages compete for the ~2–3 slots?
4. Build it well (A), minimal + test (B), or cut for V1 (C)?
