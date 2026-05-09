/* global React, ReactDOM, DesignCanvas, DCSection, DCArtboard,
   Variant_Baseline, Variant_Tight, Variant_Layered, Variant_StateAware */

const { useState } = React;

function VariantHeader({ eyebrow, title, summary, tally }) {
  return (
    <div className="variant-header">
      <p className="variant-eyebrow">{eyebrow}</p>
      <h2 className="variant-title">{title}</h2>
      <p className="variant-summary">{summary}</p>
      {tally && (
        <div className="variant-tally">
          {tally.map((t, i) => (
            <span key={i}><b>{t.value}</b> {t.label}</span>
          ))}
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <DesignCanvas>
      <DCSection id="recap" title="The problem" subtitle="The current home has 7–8 stacked sections. Even for engaged users, that's a lot of cognitive surface to scan before taking the next action.">
        <DCArtboard id="baseline" label="Current — for reference" width={420} height={1900}>
          <VariantHeader
            eyebrow="Baseline · today's home"
            title="Everything stacked"
            summary="Greeting + Hero + Invites + In-progress (3) + Habits + This week + Insights + For you + More. Eight blocks before the user has done anything."
            tally={[
              { value: '~8', label: 'sections' },
              { value: '~14', label: 'screen-heights to scroll' },
              { value: '4', label: 'CTAs above fold' },
            ]}
          />
          <Variant_Baseline />
        </DCArtboard>
      </DCSection>

      <DCSection id="variants" title="Three approaches" subtitle="Each removes weight differently. Compare them side-by-side.">

        <DCArtboard id="tight" label="A — Tight Home" width={420} height={1500}>
          <VariantHeader
            eyebrow="Variant A"
            title="Tight Home"
            summary="Hero + Invites + In-progress + Recommendations only. Tracker, Habits and Insights move to a dedicated Tracker tab. Most aggressive cut — but also clearest sense of 'what matters now.'"
            tally={[
              { value: '5', label: 'sections' },
              { value: '−3', label: 'blocks vs. baseline' },
              { value: 'Tab', label: 'home + tracker split' },
            ]}
          />
          <Variant_Tight />
        </DCArtboard>

        <DCArtboard id="layered" label="B — Layered Home" width={420} height={1700}>
          <VariantHeader
            eyebrow="Variant B"
            title="Layered Home"
            summary="Same blocks, but tracker collapses to a 1-line summary stat row, and insights collapse to a single-sentence teaser. Progressive disclosure: details available, just one tap away."
            tally={[
              { value: '7', label: 'sections (compact)' },
              { value: '−40%', label: 'vertical real estate' },
              { value: 'Inline', label: 'no tab change' },
            ]}
          />
          <Variant_Layered />
        </DCArtboard>

        <DCArtboard id="state-aware" label="C — State-aware (active user)" width={420} height={1500}>
          <VariantHeader
            eyebrow="Variant C"
            title="State-aware Home"
            summary="For users with an active program, lead with the literal next action ('Wind-down session, 12 min') instead of a hero card. Trim aggressively. New users get a different stack — this is the engaged-user variant."
            tally={[
              { value: '6', label: 'sections' },
              { value: 'Action', label: 'over hero' },
              { value: '1 tap', label: 'to resume' },
            ]}
          />
          <Variant_StateAware />
        </DCArtboard>

      </DCSection>

      <DCSection id="notes" title="What to take from each" subtitle="These compose. The 'right' answer is probably a blend — pick your priorities and we'll iterate.">
        <DCArtboard id="recommendations" label="Recommendation matrix" width={1080} height={680}>
          <div style={{
            background: '#fff', borderRadius: 16, padding: '28px 32px', border: '1px solid #e1e6ea',
            fontFamily: 'Raleway, system-ui, sans-serif', color: '#1f2a36',
          }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 18px' }}>Standard design recommendations applied here</h2>

            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.45 }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #1f2a36' }}>
                  <th style={{ textAlign: 'left', padding: '10px 8px', fontWeight: 700, width: '24%' }}>Principle</th>
                  <th style={{ textAlign: 'left', padding: '10px 8px', fontWeight: 700 }}>What it says</th>
                  <th style={{ textAlign: 'left', padding: '10px 8px', fontWeight: 700, width: '28%' }}>Applies in this design as…</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e1e6ea' }}>
                  <td style={{ padding: '12px 8px', fontWeight: 700 }}>One primary job</td>
                  <td style={{ padding: '12px 8px', color: '#4a5560' }}>The home should answer "what should I do now?" first. Other questions are secondary.</td>
                  <td style={{ padding: '12px 8px' }}><b>Variant C</b> — leads with literal next action.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e1e6ea' }}>
                  <td style={{ padding: '12px 8px', fontWeight: 700 }}>Progressive disclosure</td>
                  <td style={{ padding: '12px 8px', color: '#4a5560' }}>Show the summary; let users drill in for detail. Don't put the whole tracker on the home.</td>
                  <td style={{ padding: '12px 8px' }}><b>Variant B</b> — collapsed tracker + insight teaser.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e1e6ea' }}>
                  <td style={{ padding: '12px 8px', fontWeight: 700 }}>Information architecture</td>
                  <td style={{ padding: '12px 8px', color: '#4a5560' }}>Sections that don't share a job belong on different surfaces. Tracker ≠ Programs ≠ Library.</td>
                  <td style={{ padding: '12px 8px' }}><b>Variant A</b> — tracker becomes its own tab.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e1e6ea' }}>
                  <td style={{ padding: '12px 8px', fontWeight: 700 }}>Density per item</td>
                  <td style={{ padding: '12px 8px', color: '#4a5560' }}>One hero, one or two full sections, the rest as compact rows or single entry points.</td>
                  <td style={{ padding: '12px 8px' }}>All variants — only Hero + Recs stay full-bleed.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e1e6ea' }}>
                  <td style={{ padding: '12px 8px', fontWeight: 700 }}>Audit overlap</td>
                  <td style={{ padding: '12px 8px', color: '#4a5560' }}>"In-progress rail" and "Healthy Habits" both surface ongoing things. Consider if they're redundant.</td>
                  <td style={{ padding: '12px 8px' }}>Habits removed from home in A & C — pinned to Tracker.</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px 8px', fontWeight: 700 }}>State, not accumulation</td>
                  <td style={{ padding: '12px 8px', color: '#4a5560' }}>An engaged user doesn't need "More from Acme." A new user doesn't need a tracker. Vary by state.</td>
                  <td style={{ padding: '12px 8px' }}><b>Variant C</b> — engaged variant only; new users get a different stack.</td>
                </tr>
              </tbody>
            </table>

            <p style={{ margin: '20px 0 0', fontSize: 12, color: '#6e7a7d', lineHeight: 1.5 }}>
              <b style={{ color: '#1f2a36' }}>My recommendation:</b> start with B (Layered) — it doesn't require navigation changes and gives the biggest immediate win on cognitive load. If A/B testing tells you engaged users still bounce past the tracker summary, you've earned the data to justify A's tab split.
            </p>
          </div>
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

const root = ReactDOM.createRoot(document.getElementById('canvas-root'));
root.render(<App />);
