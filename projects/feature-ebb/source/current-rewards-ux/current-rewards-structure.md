# Current Rewards Experience — Structure (as of July 2026)

> Davinder's walkthrough of the live rewards UX. Drop the Figma frame exports (PNGs) in this folder alongside this doc.
> Figma file: **Rewards-Redesign** — `ajSQMl0kZdxSPj7U5R7Zwf` (access requires Figma connector auth; frames not yet pulled).

## Navigation

- **Rewards is the last item** in the tab bar / bottom navigation (bottom of the app).

## Page hierarchy

1. **Rewards top-level page** — balances + relevant info.
2. → drills into a **Reward Detail page** (per reward type).
3. → each action within a reward has a **Rewardable Action Detail page** showing the action and/or its progress.

## Progress model

- An action's progress can be **binary** (done / not done), or a **progression** (multi-step toward a threshold).

## Recent change (performance update)

The top-level page was recently trimmed for performance. **Removed:**
- The **History** section (was below quick links)
- The **My Rewards** section (was below quick links)
- The **status bar at the very top** (white text on blue)

**What the top-level page shows now (only these):**
- **Balances**
- **Ways to Earn**
- **Browse**

## Davinder's direction for changes

- Open to **visual changes** for something more thought-out — not necessarily tied to the recent perf update.
- Likely **move away from the carousel**, but **keep the basic structure** intact.

## BASELINE FOR DESIGN = the live, trimmed top-level page

Confirmed with Davinder: design against the **live trimmed** page — **Balances · Ways to Earn · Browse** only.
The Figma frames below still show the *fuller* version (blue status header, History, My Rewards);
treat those three removed elements as **not present** in our baseline.

## Figma frames — annotated (reviewed via live plugin, July 1 2026)

Figma file `ajSQMl0kZdxSPj7U5R7Zwf` (Rewards Redesign). Export PNGs into this folder if pixel copies are wanted.

**09 — Top Level → Balances** (`672-33900`)
Balances list, each row links to that reward-type's detail: Premium Discount, Store Credit, Points, Raffle Entries.
Plus Ways to Earn (carousel) and Browse (icon row). *[Fuller version also shows blue status header / My Rewards / History — removed in live.]*

**12 — Reward-Type Details · Direct Rewards Variants** (`672-33665`) ← **most relevant to EBB**
One layout reused across 5 direct-reward types: **Gift Card, Premium Discount, HSA Payment, Payroll Payment, Charity**.
Structure: large $ balance ("$700 earned / out of $1,200") · Earn·History·My-Rewards tabs · Ongoing (progress ring) · Earn-more list.
Naming is configurable. **EBB's gift-card incentive is a Direct Reward type — it slots in here.**

**10 — Reward-Type Details · Layout Variants** (`672-33792`)
Two config options for how the balance renders ("earned" vs "earned / out of / available").

**17 — Navigating to Rewardable Action Details** (`672-33194`)
The drill path: Top-level → Ways to Earn → Reward-Type Details → **Action Detail** (with/without progress bar, "I did it" CTA).

**18 — Custom Programs / Grouped Actions ("Complete all")** (`672-32988`) ← **the daisy-chain primitive**
Sequential multi-step reward: Action 1→2→3→4 in **Start / locked / ✓** states, each unlocking the next,
ending in confetti "You earned $100." Three states shown: No progress / Some progress / Completed.
This is a Duolingo-style lock→unlock path already built in MHC components.

**21 — Reward Caps / Time limit** (`672-32920`) ← **the EBB cap primitive**
"Earn up to **5× this year**" (also day/month/quarter, "for each 5k up to $50," "up to 10x") with a "$X earned / $100" progress bar.
**"Up to 5× / year" × $100 = the EBB $500 / 5-program annual cap** — the pattern already exists, incl. graceful ceiling.

**25 — Gated Reward** (`672-32635`) ← **maps to EBB opt-in / consent gate**
The unlock flow: locked "Welcome to Mobile Health Rewards" (blurred/greyed reward center) → prompt to complete a
gating action ("Take Assessment" / Health Risk Assessment, single- or multi-action) → "Rewards are unlocked" celebration
→ "Start Earning" → reward center goes live with balances. Directly models EBB's **must opt-in before earning** requirement.

**20 — Custom Programs / Grouped action · completion MECHANICS** (`672-32950`) ← **the daisy-chain decision, already spec'd**
Same grouped-reward shell, four earning mechanics. These ARE the queue models:
- **Complete all actions** — all unlocked, any order → *"all unlocked"* model
- **Program in order** — sequential ✓ / Start / locked → *"one at a time"* daisy-chain
- **Fractional Completion** — "Complete 2 of 4," any subset → *"windowed"* model
- **Combo** — subgroups ("Complete 1 of 2" + "Complete all") → mixed
Note on frame: "Earning is contingent on varying mechanics: complete all / some of all / all in order / subgroups."

**19 — Rewardable Action Progress** (`672-32988`)
Three progress states of a grouped reward: No progress (Action 1 Start, rest locked) / Some progress / Completed (✓ + confetti "You earned $100").

## THE ACTUAL LIVE / TRIMMED PAGE (`31634-24960`, file `aYcvw2gk…` "dcp for claude")

The real production top-level, confirmed:
- **Balances** — a single blue card stacking currencies (e.g. Points 15,000 · Raffle Entries 12). *[Not the linked-list from the fuller Figma.]*
- **Ways to earn** — peek-card carousel (e.g. "5,000 Points · Get a flu shot · Start"). ← the carousel Davinder wants to move away from.
- **Browse** — icon row: Marketplace · Raffles · Earn · History.
- No status header, no History/My Rewards sections.

**EBB implication:** the EBB $ balance/progress needs a home in that blue Balances card (or a promoted EBB block above it), and the "Ways to earn" carousel is the element up for redesign.

## Key takeaway

The primitives EBB needs — a **Direct Reward type**, a **sequential lock/unlock "Complete all" path**, and an
**annual "up to N×" cap with progress** — already exist in this system. EBB work is largely **compose + elevate**, not build-from-scratch.
