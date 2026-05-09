/* global React, ReactDOM, DesignCanvas, DCSection, DCArtboard,
   Home_Recommended, Home_InsightExpanded, Home_TrackerDetail */

function VariantHeader({ eyebrow, title, summary }) {
  return (
    <div className="variant-header">
      <p className="variant-eyebrow">{eyebrow}</p>
      <h2 className="variant-title">{title}</h2>
      <p className="variant-summary">{summary}</p>
    </div>
  );
}

function App() {
  return (
    <DesignCanvas>
      <DCSection
        id="responsive"
        title="Responsive — phone & desktop side by side"
        subtitle="Same content and hierarchy. Continue and For You move from stacked (mobile) to two-column (desktop)."
      >
        <DCArtboard id="phone-responsive" label="Mobile (380px)" width={420} height={1820}>
          <Home_Recommended />
        </DCArtboard>
        <DCArtboard id="desktop-responsive" label="Desktop (1200px)" width={1240} height={1500}>
          <HomeDesktop />
        </DCArtboard>
      </DCSection>

      <DCSection
        id="recommendation"
        title="Option 1 + 4 — disclosure on home, deep-link to detail"
        subtitle="No nav changes. Five-tab IA stays exactly as it is. Tracker collapses to a chip in the greeting that opens a detail page under Wellbeing. Insight collapses to a one-line teaser that expands inline."
      >
        <DCArtboard id="home" label="1 · Home — recommended state" width={420} height={1820}>
          <VariantHeader
            eyebrow="Default state"
            title="Home"
            summary="Tracker chip lives in the greeting (top-right of the typical bottom of greeting block). One tap → tracker detail page. Insight is a single-line teaser at the bottom of the page."
          />
          <Home_Recommended />
        </DCArtboard>

        <DCArtboard id="home-insight-expanded" label="2 · Home — insight expanded inline" width={420} height={1900}>
          <VariantHeader
            eyebrow="Inline expansion"
            title="Insight expanded"
            summary="Tap the insight teaser → it expands inline (no page change). Refresh button + meta become visible. Tap again to collapse."
          />
          <Home_InsightExpanded />
        </DCArtboard>

        <DCArtboard id="tracker-detail" label="3 · Tracker detail (under Wellbeing)" width={420} height={1500}>
          <VariantHeader
            eyebrow="Deep-link target"
            title="/wellbeing/tracker"
            summary="Where the tracker chip lands. Lives under the existing Wellbeing tab — no new top-level destination. Full weekly stats, habits, and current insight all here."
          />
          <Home_TrackerDetail />
        </DCArtboard>
      </DCSection>

      <DCSection
        id="ia-impact"
        title="What this means for your existing surfaces"
        subtitle="A quick map of what changes, what doesn't, and where the deep-link lives."
      >
        <DCArtboard id="impact" label="IA impact map" width={1080} height={680}>
          <div style={{
            background: '#fff', borderRadius: 16, padding: '28px 32px', border: '1px solid #e1e6ea',
            fontFamily: 'Raleway, system-ui, sans-serif', color: '#1f2a36',
          }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 18px' }}>What this option changes</h2>

            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, lineHeight: 1.45 }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #1f2a36' }}>
                  <th style={{ textAlign: 'left', padding: '10px 8px', fontWeight: 700, width: '22%' }}>Surface</th>
                  <th style={{ textAlign: 'left', padding: '10px 8px', fontWeight: 700, width: '14%' }}>Change?</th>
                  <th style={{ textAlign: 'left', padding: '10px 8px', fontWeight: 700 }}>Detail</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e1e6ea' }}>
                  <td style={{ padding: '12px 8px', fontWeight: 700 }}>Bottom nav</td>
                  <td style={{ padding: '12px 8px', color: '#2e7d4f', fontWeight: 700 }}>None</td>
                  <td style={{ padding: '12px 8px', color: '#4a5560' }}>Home / Benefits / Wellbeing / Rewards / Challenges all stay exactly as they are.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e1e6ea' }}>
                  <td style={{ padding: '12px 8px', fontWeight: 700 }}>Home page</td>
                  <td style={{ padding: '12px 8px', color: '#c97c1d', fontWeight: 700 }}>Visual only</td>
                  <td style={{ padding: '12px 8px', color: '#4a5560' }}>Tracker tiles → tracker chip in greeting. Insight card → collapsible teaser. Section count drops from ~8 to ~6.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e1e6ea' }}>
                  <td style={{ padding: '12px 8px', fontWeight: 700 }}>Wellbeing tab</td>
                  <td style={{ padding: '12px 8px', color: '#c97c1d', fontWeight: 700 }}>+1 page</td>
                  <td style={{ padding: '12px 8px', color: '#4a5560' }}>New <code>/wellbeing/tracker</code> page. Reuses your existing tracker components, just framed as a detail page. Existing Wellbeing landing untouched.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e1e6ea' }}>
                  <td style={{ padding: '12px 8px', fontWeight: 700 }}>Benefits / Rewards / Challenges</td>
                  <td style={{ padding: '12px 8px', color: '#2e7d4f', fontWeight: 700 }}>None</td>
                  <td style={{ padding: '12px 8px', color: '#4a5560' }}>Untouched. No content moves between tabs.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e1e6ea' }}>
                  <td style={{ padding: '12px 8px', fontWeight: 700 }}>Insights</td>
                  <td style={{ padding: '12px 8px', color: '#c97c1d', fontWeight: 700 }}>Visual only</td>
                  <td style={{ padding: '12px 8px', color: '#4a5560' }}>Same backend, same states (ready / refreshable / read-only / hidden). Just a smaller default footprint.</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px 8px', fontWeight: 700 }}>"More from Acme Health"</td>
                  <td style={{ padding: '12px 8px', color: '#b3261e', fontWeight: 700 }}>Removed</td>
                  <td style={{ padding: '12px 8px', color: '#4a5560' }}>Doesn't earn its place on home for engaged users. If links are still needed, profile drawer or footer is the natural home.</td>
                </tr>
              </tbody>
            </table>

            <p style={{ margin: '20px 0 0', fontSize: 12, color: '#6e7a7d', lineHeight: 1.5 }}>
              <b style={{ color: '#1f2a36' }}>Eng scope:</b> one new route under Wellbeing, two new home components (tracker chip, insight teaser), removal/repositioning of three existing blocks. No nav refactor, no menu page changes, no IA debate.
            </p>
          </div>
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

const root = ReactDOM.createRoot(document.getElementById('canvas-root'));
root.render(<App />);
