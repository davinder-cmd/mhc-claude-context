# decisions — strategic decisions log

> Running log of strategic decisions for the color system program. Append-only — past decisions stay in the log even when superseded, so future-you can trace the reasoning.
>
> **Format per entry:**
>
> ```
> ### D{ID}. {decision title} — {STATUS}
>
> **Decision.** Single sentence stating what was decided.
> **Rationale.** Why. Cite references, screenshots, stakeholder input, prior decisions touched.
> **Implication.** What this means downstream — for the build, the palette, components, or future iterations.
> **Status.** draft / direction-locked / locked / superseded
> **Backing artifact.** Path to the build artifact, audit, or screen capture that supports this decision.
> ```

---

## Status legend

- **draft** — proposed, not yet ratified
- **direction-locked** — direction committed; verification gates pending
- **locked** — fully verified; downstream changes must reference, not reopen
- **superseded** — replaced by a successor decision (link to it)

---

## How to add an entry

1. Append under the current session date heading (use ISO `YYYY-MM-DD`)
2. Use the next available D-number across the whole log (don't reset per date)
3. Cross-link to the artifact that backs the decision (palette HTML, component HTML, screenshot, etc.)
4. Update the **Decisions** table in [`MAP.md`](MAP.md) to surface the entry
5. If the decision adds a new program-wide invariant, append to **Hard Constraints** in `MAP.md` too

---

## Log

*(no decisions yet — populated as the program progresses)*
