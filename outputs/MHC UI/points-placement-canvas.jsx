/* Points placement comparison — 4 options
   Renders the same header → today → insights → foryou stack with a points
   module slotted into different positions, on a phone-sized frame, so the
   options can be compared side-by-side. */

const PointsCanvasFont = "'Raleway', sans-serif";
const PC_blue = '#0f497f';
const PC_blueLight = '#eaf2fa';
const PC_orange = '#f15922';
const PC_charcoal = '#373d3f';
const PC_slate = '#6e7a7d';
const PC_divider = '#e6ebec';
const PC_bg = '#f6f4ef';

/* ─── Mini stand-ins for the rest of the home page ─── */

function PC_Header() {
  return (
    <div style={{ padding: '20px 20px 0' }}>
      <div style={{ fontFamily: PointsCanvasFont, fontWeight: 700, fontSize: 22, color: PC_charcoal, lineHeight: 1.15 }}>Good morning, Davinder</div>
      <div style={{ fontFamily: PointsCanvasFont, fontSize: 13, color: PC_slate, marginTop: 4 }}>Here's what's waiting for you today.</div>
    </div>
  );
}

function PC_Hero() {
  return (
    <div style={{ margin: '14px 20px 0', borderRadius: 14, background: PC_blue, color: '#fff', padding: '18px 18px 16px', fontFamily: PointsCanvasFont, position: 'relative', overflow: 'hidden' }}>
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1.4, textTransform: 'uppercase', color: PC_orange }}>For your sleep focus</div>
      <div style={{ fontSize: 17, fontWeight: 700, marginTop: 6, lineHeight: 1.25 }}>Build a calmer wind-down</div>
      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.85)', marginTop: 6, lineHeight: 1.45 }}>5-day program. 6 minutes a day.</div>
      <div style={{ marginTop: 12, display: 'inline-block', background: '#fff', color: PC_blue, fontWeight: 700, fontSize: 12, padding: '7px 14px', borderRadius: 999 }}>Start program</div>
    </div>
  );
}

function PC_TodayStrip({ tiles = ['Steps', 'Sleep', 'Mindful', 'Points'], showSeeAll = true, seeAllLabel = 'See all' }) {
  const tileFor = (label) => {
    const meta = {
      Steps:    { v: '7,842', u: 'steps',       icon: '👣' },
      Sleep:    { v: '7h 12m', u: 'last night',  icon: '🌙' },
      Mindful:  { v: '12',     u: 'mindful min', icon: '🧘' },
      Active:   { v: '38',     u: 'active min',  icon: '🏃' },
      Points:   { v: '1,250',  u: 'this month',  icon: '⭐' },
    }[label];
    return (
      <div key={label} style={{ background: '#fff', border: `1px solid ${PC_divider}`, borderRadius: 12, padding: 10, fontFamily: PointsCanvasFont }}>
        <div style={{ fontSize: 14, marginBottom: 4 }}>{meta.icon}</div>
        <div style={{ fontSize: 14, fontWeight: 700, color: PC_charcoal, lineHeight: 1.15 }}>{meta.v}</div>
        <div style={{ fontSize: 10.5, color: PC_slate, marginTop: 2 }}>{meta.u}</div>
        <div style={{ fontSize: 10.5, color: PC_charcoal, marginTop: 2, fontWeight: 600 }}>{label}</div>
      </div>
    );
  };
  return (
    <div style={{ padding: '18px 20px 0' }}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom: 8 }}>
        <div style={{ fontFamily: PointsCanvasFont, fontSize: 14, fontWeight: 700, color: PC_charcoal }}>Today</div>
        {showSeeAll && <div style={{ fontFamily: PointsCanvasFont, fontSize: 12, color: PC_blue, fontWeight: 600 }}>{seeAllLabel} ›</div>}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${tiles.length}, 1fr)`, gap: 8 }}>
        {tiles.map(tileFor)}
      </div>
    </div>
  );
}

function PC_Insights() {
  return (
    <div style={{ padding: '18px 20px 0' }}>
      <div style={{ background: '#fff', border: `1px solid ${PC_divider}`, borderRadius: 12, padding: 14, fontFamily: PointsCanvasFont }}>
        <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: 1.2, textTransform: 'uppercase', color: PC_orange, marginBottom: 4 }}>Insight for you</div>
        <div style={{ fontSize: 13.5, fontWeight: 700, color: PC_charcoal, lineHeight: 1.3 }}>Your sleep is most consistent on weeknights</div>
        <div style={{ fontSize: 11.5, color: PC_slate, marginTop: 4, lineHeight: 1.4 }}>You averaged 7h 18m Mon–Thu vs. 6h 02m Fri–Sat.</div>
      </div>
    </div>
  );
}

function PC_ForYou() {
  return (
    <div style={{ padding: '18px 20px 20px' }}>
      <div style={{ fontFamily: PointsCanvasFont, fontSize: 14, fontWeight: 700, color: PC_charcoal, marginBottom: 8 }}>For your sleep focus</div>
      <div style={{ background: '#fff', border: `1px solid ${PC_divider}`, borderRadius: 12, padding: 12, fontFamily: PointsCanvasFont }}>
        <div style={{ fontSize: 12.5, fontWeight: 700, color: PC_charcoal }}>Wind-down routine</div>
        <div style={{ fontSize: 11, color: PC_slate, marginTop: 2 }}>5 days · 6 min/day</div>
      </div>
    </div>
  );
}

/* ─── Points modules — visual treatments ─── */

function PointsModule_Hero() {
  return (
    <div style={{ margin: '14px 20px 0', borderRadius: 14, background: PC_blue, color: '#fff', padding: '16px 16px 14px', fontFamily: PointsCanvasFont, position: 'relative', overflow: 'hidden' }}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <div style={{ display:'flex', alignItems:'center', gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(255,255,255,0.18)', display: 'grid', placeItems: 'center', fontSize: 16 }}>⭐</div>
          <div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', fontWeight: 600, letterSpacing: 0.6, textTransform: 'uppercase' }}>Your points</div>
            <div style={{ fontSize: 22, fontWeight: 700, lineHeight: 1, marginTop: 2 }}>1,250</div>
          </div>
        </div>
        <div style={{ fontSize: 11.5, color: '#fff', fontWeight: 700, background: 'rgba(255,255,255,0.18)', padding: '6px 12px', borderRadius: 999 }}>Redeem ›</div>
      </div>
      <div style={{ marginTop: 14 }}>
        <div style={{ height: 6, background: 'rgba(255,255,255,0.22)', borderRadius: 999, overflow: 'hidden' }}>
          <div style={{ width: '62%', height: '100%', background: PC_orange }}/>
        </div>
        <div style={{ display:'flex', justifyContent:'space-between', marginTop: 8, fontSize: 11.5 }}>
          <span style={{ color: 'rgba(255,255,255,0.85)' }}>+50 today</span>
          <span style={{ color: 'rgba(255,255,255,0.85)' }}>750 to Silver tier</span>
        </div>
      </div>
    </div>
  );
}

function PointsModule_Card() {
  /* Lighter, neutral card variant — sits in between Today and Insights without dominating */
  return (
    <div style={{ padding: '18px 20px 0' }}>
      <div style={{ background: '#fff', border: `1px solid ${PC_divider}`, borderRadius: 14, padding: 14, fontFamily: PointsCanvasFont, display:'flex', flexDirection:'column', gap: 12 }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <div style={{ display:'flex', alignItems:'center', gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: PC_blueLight, color: PC_blue, display: 'grid', placeItems: 'center', fontSize: 16 }}>⭐</div>
            <div>
              <div style={{ fontSize: 10.5, color: PC_slate, fontWeight: 600, letterSpacing: 0.6, textTransform: 'uppercase' }}>Your points</div>
              <div style={{ fontSize: 20, fontWeight: 700, color: PC_charcoal, lineHeight: 1.05, marginTop: 2 }}>1,250</div>
            </div>
          </div>
          <div style={{ fontSize: 12, color: PC_blue, fontWeight: 700 }}>Redeem ›</div>
        </div>
        <div>
          <div style={{ height: 6, background: PC_blueLight, borderRadius: 999, overflow: 'hidden' }}>
            <div style={{ width: '62%', height: '100%', background: PC_blue }}/>
          </div>
          <div style={{ display:'flex', justifyContent:'space-between', marginTop: 6, fontSize: 11, color: PC_slate }}>
            <span>+50 today</span>
            <span>750 to Silver tier</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PointsModule_HeaderChip() {
  /* Just shows where the chip lives — does not render the points module body. */
  return (
    <div style={{ padding: '14px 20px 0' }}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <div style={{ fontFamily: PointsCanvasFont, fontSize: 11, color: PC_slate }}>(persistent header chip — top right ↗)</div>
        <div style={{ display:'flex', alignItems:'center', gap: 6, background: PC_blueLight, color: PC_blue, fontFamily: PointsCanvasFont, fontWeight: 700, fontSize: 12, padding: '6px 10px', borderRadius: 999, border: `1px solid ${PC_blue}33` }}>
          <span style={{ fontSize: 12 }}>⭐</span>
          <span>1,250 pts</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Compressed points module variants — to recover vertical space ─── */

function PointsModule_Slim() {
  /* Single-row slim card — no progress bar, just balance + Redeem CTA. ~52px tall. */
  return (
    <div style={{ padding: '14px 20px 0' }}>
      <div style={{ background: '#fff', border: `1px solid ${PC_divider}`, borderRadius: 12, padding: '10px 14px', fontFamily: PointsCanvasFont, display:'flex', alignItems:'center', justifyContent:'space-between', gap: 10 }}>
        <div style={{ display:'flex', alignItems:'center', gap: 10 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: PC_blueLight, color: PC_blue, display: 'grid', placeItems: 'center', fontSize: 14 }}>⭐</div>
          <div style={{ display:'flex', alignItems:'baseline', gap: 6 }}>
            <span style={{ fontSize: 16, fontWeight: 700, color: PC_charcoal, lineHeight: 1 }}>1,250</span>
            <span style={{ fontSize: 11, color: PC_slate }}>points · 750 to Silver</span>
          </div>
        </div>
        <div style={{ fontSize: 12, color: PC_blue, fontWeight: 700 }}>Redeem ›</div>
      </div>
    </div>
  );
}

function PointsModule_Inline() {
  /* Anchored to the Today section header — replaces "See all" with a points pill that
     also acts as the hub link. Zero net vertical added. */
  return (
    <div style={{ padding: '18px 20px 0' }}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom: 8 }}>
        <div style={{ fontFamily: PointsCanvasFont, fontSize: 14, fontWeight: 700, color: PC_charcoal }}>Today</div>
        <div style={{ display:'flex', alignItems:'center', gap: 6, background: PC_blueLight, color: PC_blue, fontFamily: PointsCanvasFont, fontWeight: 700, fontSize: 11.5, padding: '4px 10px', borderRadius: 999, border: `1px solid ${PC_blue}33` }}>
          <span style={{ fontSize: 11 }}>⭐</span>
          <span>1,250 pts</span>
          <span style={{ opacity: 0.6 }}>›</span>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
        {['Steps','Sleep','Mindful','Active'].map(label => {
          const meta = {
            Steps:   { v: '7,842',  u: 'steps',       icon: '👣' },
            Sleep:   { v: '7h 12m', u: 'last night',  icon: '🌙' },
            Mindful: { v: '12',     u: 'mindful min', icon: '🧘' },
            Active:  { v: '38',     u: 'active min',  icon: '🏃' },
          }[label];
          return (
            <div key={label} style={{ background: '#fff', border: `1px solid ${PC_divider}`, borderRadius: 12, padding: 10, fontFamily: PointsCanvasFont }}>
              <div style={{ fontSize: 14, marginBottom: 4 }}>{meta.icon}</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: PC_charcoal, lineHeight: 1.15 }}>{meta.v}</div>
              <div style={{ fontSize: 10.5, color: PC_slate, marginTop: 2 }}>{meta.u}</div>
              <div style={{ fontSize: 10.5, color: PC_charcoal, marginTop: 2, fontWeight: 600 }}>{label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Phone frame ─── */

function PC_Phone({ children, height = 760 }) {
  return (
    <div style={{ width: 360, height, borderRadius: 36, overflow: 'hidden', background: '#fff', boxShadow: '0 24px 50px rgba(0,0,0,0.14), 0 0 0 1px rgba(0,0,0,0.08)', position: 'relative' }}>
      <div style={{ height: '100%', overflow: 'auto' }}>
        {children}
      </div>
    </div>
  );
}

/* Optional persistent header chip absolutely positioned (Option C/D) */
function PC_PersistentChip() {
  return (
    <div style={{ position: 'absolute', top: 22, right: 18, display:'flex', alignItems:'center', gap: 5, background: PC_blueLight, color: PC_blue, fontFamily: PointsCanvasFont, fontWeight: 700, fontSize: 11, padding: '5px 9px', borderRadius: 999, border: `1px solid ${PC_blue}33`, zIndex: 5 }}>
      <span style={{ fontSize: 11 }}>⭐</span>
      <span>1,250</span>
    </div>
  );
}

function PC_Phone_WithChip({ children, height = 760 }) {
  return (
    <div style={{ width: 360, height, borderRadius: 36, overflow: 'hidden', background: '#fff', boxShadow: '0 24px 50px rgba(0,0,0,0.14), 0 0 0 1px rgba(0,0,0,0.08)', position: 'relative' }}>
      <PC_PersistentChip/>
      <div style={{ height: '100%', overflow: 'auto' }}>
        {children}
      </div>
    </div>
  );
}

/* ─── The four screens ─── */

function PC_OptionA() {
  /* Hero strip ABOVE Today */
  return (
    <PC_Phone>
      <PC_Header/>
      <PointsModule_Hero/>
      <PC_TodayStrip tiles={['Steps', 'Sleep', 'Mindful', 'Active']}/>
      <PC_Hero/>
      <PC_Insights/>
      <PC_ForYou/>
    </PC_Phone>
  );
}

function PC_OptionB() {
  /* Card BETWEEN Today and Insights */
  return (
    <PC_Phone>
      <PC_Header/>
      <PC_Hero/>
      <PC_TodayStrip tiles={['Steps', 'Sleep', 'Mindful', 'Active']}/>
      <PointsModule_Card/>
      <PC_Insights/>
      <PC_ForYou/>
    </PC_Phone>
  );
}

function PC_OptionB_Slim() {
  return (
    <PC_Phone>
      <PC_Header/>
      <PC_Hero/>
      <PC_TodayStrip tiles={['Steps', 'Sleep', 'Mindful', 'Active']}/>
      <PointsModule_Slim/>
      <PC_Insights/>
      <PC_ForYou/>
    </PC_Phone>
  );
}

function PC_OptionB_Inline() {
  /* Inline pill replaces the Today "See all" — points becomes the row anchor.
     We still render Today inline (handled inside PointsModule_Inline) and skip the
     normal PC_TodayStrip render to avoid a duplicate. */
  return (
    <PC_Phone>
      <PC_Header/>
      <PC_Hero/>
      <PointsModule_Inline/>
      <PC_Insights/>
      <PC_ForYou/>
    </PC_Phone>
  );
}

function PC_OptionC() {
  /* Persistent header chip only — points NOT in the body */
  return (
    <PC_Phone_WithChip>
      <PC_Header/>
      <PC_Hero/>
      <PC_TodayStrip tiles={['Steps', 'Sleep', 'Mindful', 'Active']}/>
      <PC_Insights/>
      <PC_ForYou/>
    </PC_Phone_WithChip>
  );
}

function PC_OptionD() {
  /* Header chip + dedicated card below Today */
  return (
    <PC_Phone_WithChip>
      <PC_Header/>
      <PC_Hero/>
      <PC_TodayStrip tiles={['Steps', 'Sleep', 'Mindful', 'Active']}/>
      <PointsModule_Card/>
      <PC_Insights/>
      <PC_ForYou/>
    </PC_Phone_WithChip>
  );
}

/* Phone with fold-line overlays for several common iPhones */
function PC_PhoneWithFolds({ children, height = 800 }) {
  /* Visible content area (= viewport height - status bar/dynamic island - bottom safe).
     Approximate values based on Apple HIG usable content area in CSS px. */
  const folds = [
    { label: 'iPhone SE',           y: 480, color: '#c1292e' },
    { label: 'iPhone 13/14 mini',   y: 660, color: '#e89c2a' },
    { label: 'iPhone 14/15',        y: 690, color: '#52a045' },
    { label: 'iPhone 15 Pro Max',   y: 760, color: '#0f497f' },
  ];
  return (
    <div style={{ position: 'relative', width: 360, height }}>
      <div style={{ width: 360, height, borderRadius: 36, overflow: 'hidden', background: '#fff', boxShadow: '0 24px 50px rgba(0,0,0,0.14), 0 0 0 1px rgba(0,0,0,0.08)', position: 'relative' }}>
        <div style={{ height: '100%', overflow: 'auto' }}>
          {children}
        </div>
      </div>
      {/* Fold overlays */}
      {folds.filter(f => f.y < height).map(f => (
        <div key={f.label} style={{ position:'absolute', left: 0, right: 0, top: f.y, pointerEvents: 'none' }}>
          <div style={{ height: 0, borderTop: `1.5px dashed ${f.color}`, opacity: 0.85 }}/>
          <div style={{ position:'absolute', right: -8, top: -10, transform:'translateX(100%)', background: f.color, color:'#fff', fontFamily: PointsCanvasFont, fontSize: 10, fontWeight: 700, padding: '3px 7px', borderRadius: 4, whiteSpace: 'nowrap' }}>
            {f.label}
          </div>
        </div>
      ))}
    </div>
  );
}

function PC_OptionB_Folds({ children }) {
  return <PC_PhoneWithFolds height={820}>{children}</PC_PhoneWithFolds>;
}

/* ─── Page ─── */

const PC_Callout = ({ children, accent }) => (
  <div style={{
    background: '#fff',
    border: `1px solid ${PC_divider}`,
    borderRadius: 12,
    padding: '12px 14px',
    fontFamily: PointsCanvasFont,
    fontSize: 12.5,
    lineHeight: 1.5,
    color: PC_charcoal,
    borderLeft: accent ? `3px solid ${accent}` : `1px solid ${PC_divider}`,
  }}>{children}</div>
);

function PC_App() {
  return (
    <DesignCanvas>
      <DCSection id="intro" title="Points placement — 4 options compared" subtitle="Each phone shows the full home stack with a points treatment slotted into a different position. Read left-to-right and pick the one whose tradeoffs you can live with.">
        <DCArtboard id="rec" label="Decision framework" width={520} height={520}>
          <div style={{ padding: 20, height:'100%', boxSizing:'border-box', display:'flex', flexDirection:'column', gap: 12, fontFamily: PointsCanvasFont }}>
            <div style={{ background: PC_blue, color:'#fff', borderRadius: 12, padding: '16px 18px' }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.2, textTransform:'uppercase', color: PC_orange }}>Recommendation</div>
              <div style={{ fontSize: 19, fontWeight: 700, marginTop: 6, lineHeight: 1.25 }}>Option B — points card between Today and Insights.</div>
              <div style={{ fontSize: 12.5, marginTop: 8, color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>Today stays pure (trackers only → tracker hub). Points gets its own card with progress + dedicated CTA. Page rhythm becomes: body → engagement → meaning → action.</div>
            </div>
            <PC_Callout><b>If incentives become MORE strategic later:</b> upgrade to Option D (chip + card). Highest visibility without compromising Today.</PC_Callout>
            <PC_Callout><b>If you want maximum points celebration today:</b> Option A. But hero pushes biometrics down — users opening to "check sleep" will feel the friction.</PC_Callout>
            <PC_Callout><b>Avoid Option C alone:</b> chip is too small to celebrate points or show progress to next tier. Reads as a quick balance check, not a feature.</PC_Callout>
          </div>
        </DCArtboard>
      </DCSection>

      <DCSection id="options" title="Side-by-side" subtitle="All four options at the same scale. Today is pure trackers (4 tiles: Steps · Sleep · Mindful · Active) in every option — only the points treatment differs.">

        <DCArtboard id="opt-a" label="A · Hero strip above Today" width={400} height={800}>
          <div style={{ padding: 20, background: PC_bg, height:'100%', boxSizing:'border-box', display:'grid', placeItems:'center' }}>
            <PC_OptionA/>
          </div>
        </DCArtboard>
        <DCArtboard id="opt-a-notes" label="A · pros/cons" width={300} height={800}>
          <div style={{ padding: 16, height:'100%', boxSizing:'border-box', display:'flex', flexDirection:'column', gap: 10 }}>
            <PC_Callout accent={PC_orange}><b>Position.</b> Points hero strip directly under the greeting — first thing the user sees.</PC_Callout>
            <PC_Callout accent={'#52a045'}><b>Pros.</b> Maximum visibility for incentives. Sets the "this is a rewards app" tone. Progress bar to next tier celebrates engagement.</PC_Callout>
            <PC_Callout accent={'#c1292e'}><b>Cons.</b> Pushes biometrics below the points strip. A user opening the app to "check my sleep" hits points first — feels off if their primary mental model is health-tracking.</PC_Callout>
            <PC_Callout><b>Pick this when.</b> Points + rewards are the #1 strategic pillar of the product. Full stop.</PC_Callout>
          </div>
        </DCArtboard>

        <DCArtboard id="opt-b" label="B · Card between Today & Insights" width={400} height={800}>
          <div style={{ padding: 20, background: PC_bg, height:'100%', boxSizing:'border-box', display:'grid', placeItems:'center' }}>
            <PC_OptionB/>
          </div>
        </DCArtboard>
        <DCArtboard id="opt-b-notes" label="B · pros/cons" width={300} height={800}>
          <div style={{ padding: 16, height:'100%', boxSizing:'border-box', display:'flex', flexDirection:'column', gap: 10 }}>
            <PC_Callout accent={PC_orange}><b>Position.</b> Today first (biometrics), then a points card, then Insights, then For-you.</PC_Callout>
            <PC_Callout accent={'#52a045'}><b>Pros.</b> Today stays conceptually clean — "See all" goes to tracker hub, no ambiguity. Points still gets a full card with progress + Redeem CTA. Page reads as: body → engagement → meaning → action.</PC_Callout>
            <PC_Callout accent={'#c1292e'}><b>Cons.</b> Points slightly less prominent than Option A. If a user only scans the top, they'll miss it.</PC_Callout>
            <PC_Callout><b>Pick this when.</b> You want points to feel like a first-class citizen without overwriting the health-tracking lead. <b>Recommended.</b></PC_Callout>
          </div>
        </DCArtboard>

        <DCArtboard id="opt-c" label="C · Header chip only" width={400} height={800}>
          <div style={{ padding: 20, background: PC_bg, height:'100%', boxSizing:'border-box', display:'grid', placeItems:'center' }}>
            <PC_OptionC/>
          </div>
        </DCArtboard>
        <DCArtboard id="opt-c-notes" label="C · pros/cons" width={300} height={800}>
          <div style={{ padding: 16, height:'100%', boxSizing:'border-box', display:'flex', flexDirection:'column', gap: 10 }}>
            <PC_Callout accent={PC_orange}><b>Position.</b> Small persistent chip in the top-right of the page header — visible on every screen, not just home.</PC_Callout>
            <PC_Callout accent={'#52a045'}><b>Pros.</b> Always-on awareness. Zero footprint in the home content stack. Tappable → activity hub. Available on every page.</PC_Callout>
            <PC_Callout accent={'#c1292e'}><b>Cons.</b> Too small to celebrate points or show progress to next tier. No room for "750 to Silver tier" narrative. Reads as a quick balance check, not a feature.</PC_Callout>
            <PC_Callout><b>Pick this when.</b> Points are background utility — users know they exist but the home doesn't need to evangelize them.</PC_Callout>
          </div>
        </DCArtboard>

        <DCArtboard id="opt-d" label="D · Header chip + card" width={400} height={800}>
          <div style={{ padding: 20, background: PC_bg, height:'100%', boxSizing:'border-box', display:'grid', placeItems:'center' }}>
            <PC_OptionD/>
          </div>
        </DCArtboard>
        <DCArtboard id="opt-d-notes" label="D · pros/cons" width={300} height={800}>
          <div style={{ padding: 16, height:'100%', boxSizing:'border-box', display:'flex', flexDirection:'column', gap: 10 }}>
            <PC_Callout accent={PC_orange}><b>Position.</b> Header chip (always-on) + dedicated card on home (between Today and Insights).</PC_Callout>
            <PC_Callout accent={'#52a045'}><b>Pros.</b> Best of both worlds. Ambient awareness everywhere; rich celebration + CTAs on home. Highest total visibility without forcing points into Today's tile slots.</PC_Callout>
            <PC_Callout accent={'#c1292e'}><b>Cons.</b> Most surface to maintain — chip needs to live in the global header on every page, card needs its own component on home. Slight redundancy: chip and card both show "1,250".</PC_Callout>
            <PC_Callout><b>Pick this when.</b> Incentives are a top-2 strategic pillar AND you can invest in both surfaces. Strongest long-term.</PC_Callout>
          </div>
        </DCArtboard>

      </DCSection>

      <DCSection id="today" title="What 'Today' looks like in all options" subtitle="In every option above, Today is 4 tracker tiles only — Steps · Sleep · Mindful · Active minutes (or whatever the focus dictates). 'See all' has a single, clean destination: the tracker / health-data hub.">
        <DCArtboard id="today-anatomy" label="Today — pure trackers" width={420} height={280}>
          <div style={{ padding: 18, background: PC_bg, height:'100%', boxSizing:'border-box', display:'grid', placeItems:'center' }}>
            <div style={{ width: 360, background:'#fff', borderRadius: 16, padding: '4px 0 18px', boxShadow:'0 4px 14px rgba(0,0,0,0.06)' }}>
              <PC_TodayStrip tiles={['Steps', 'Sleep', 'Mindful', 'Active']}/>
            </div>
          </div>
        </DCArtboard>
        <DCArtboard id="today-notes" label="Why pure trackers" width={340} height={280}>
          <div style={{ padding: 16, height:'100%', boxSizing:'border-box', display:'flex', flexDirection:'column', gap: 10 }}>
            <PC_Callout><b>One destination for "See all".</b> Tracker / health-data hub. No ambiguity.</PC_Callout>
            <PC_Callout><b>Consistent mental model.</b> Every tile = "what's my body doing?" — a passive biometric signal. Points (engagement reward) breaks that frame.</PC_Callout>
            <PC_Callout><b>4th tile flexes by focus.</b> Sleep focus → Mindful. Move-more focus → Active min. Stress focus → Mindful. No focus → Active min as a sensible default.</PC_Callout>
          </div>
        </DCArtboard>
      </DCSection>

      <DCSection id="fold-check" title="Option B — fold check across phone sizes" subtitle="Same Option B layout in three densities. Dashed lines mark the visible content area (viewport minus status bar / bottom safe area) for four common iPhones. Anything above each line is what the user sees without scrolling.">

        <DCArtboard id="fold-current" label="B · current (full card with progress)" width={520} height={900}>
          <div style={{ padding: 24, background: PC_bg, height:'100%', boxSizing:'border-box', display:'grid', placeItems:'center' }}>
            <PC_OptionB_Folds>
              <PC_Header/>
              <PC_Hero/>
              <PC_TodayStrip tiles={['Steps', 'Sleep', 'Mindful', 'Active']}/>
              <PointsModule_Card/>
              <PC_Insights/>
              <PC_ForYou/>
            </PC_OptionB_Folds>
          </div>
        </DCArtboard>
        <DCArtboard id="fold-current-notes" label="Current — what's above the fold" width={300} height={900}>
          <div style={{ padding: 16, height:'100%', boxSizing:'border-box', display:'flex', flexDirection:'column', gap: 10 }}>
            <PC_Callout accent={'#c1292e'}><b>iPhone SE (480px).</b> Hero + Today only. Points & focus content require scroll.</PC_Callout>
            <PC_Callout accent={'#e89c2a'}><b>iPhone 13/14 mini (660px).</b> + Points card + start of Insights.</PC_Callout>
            <PC_Callout accent={'#52a045'}><b>iPhone 14/15 (690px).</b> + most of Insights. <b>For-you starts ~50px below the fold.</b></PC_Callout>
            <PC_Callout accent={PC_blue}><b>iPhone 15 Pro Max (760px).</b> + "For your sleep focus" heading visible.</PC_Callout>
            <PC_Callout><b>Verdict.</b> On the most common phones, the user sees a "peek" of focused content — heading or first card. Healthy scroll signal, but not above the fold.</PC_Callout>
          </div>
        </DCArtboard>

        <DCArtboard id="fold-slim" label="B-slim · single-row card (no progress)" width={520} height={900}>
          <div style={{ padding: 24, background: PC_bg, height:'100%', boxSizing:'border-box', display:'grid', placeItems:'center' }}>
            <PC_OptionB_Folds>
              <PC_Header/>
              <PC_Hero/>
              <PC_TodayStrip tiles={['Steps', 'Sleep', 'Mindful', 'Active']}/>
              <PointsModule_Slim/>
              <PC_Insights/>
              <PC_ForYou/>
            </PC_OptionB_Folds>
          </div>
        </DCArtboard>
        <DCArtboard id="fold-slim-notes" label="Slim — what's gained" width={300} height={900}>
          <div style={{ padding: 16, height:'100%', boxSizing:'border-box', display:'flex', flexDirection:'column', gap: 10 }}>
            <PC_Callout accent={PC_orange}><b>What changed.</b> Points card is one row: balance + "750 to Silver" + Redeem. No progress bar. Saves ~70px.</PC_Callout>
            <PC_Callout accent={'#52a045'}><b>iPhone 14/15.</b> "For your sleep focus" heading + first card visible above the fold.</PC_Callout>
            <PC_Callout accent={'#52a045'}><b>iPhone 13 mini.</b> Insights + first focus card heading visible.</PC_Callout>
            <PC_Callout accent={'#c1292e'}><b>Tradeoff.</b> Loses the progress bar — points feel less celebrated. Tap-target stays the same.</PC_Callout>
            <PC_Callout><b>Pick this when.</b> Focus content visibility matters more than incentive storytelling. <b>Recommended for Option B.</b></PC_Callout>
          </div>
        </DCArtboard>

        <DCArtboard id="fold-inline" label="B-inline · points pill anchors Today row" width={520} height={900}>
          <div style={{ padding: 24, background: PC_bg, height:'100%', boxSizing:'border-box', display:'grid', placeItems:'center' }}>
            <PC_OptionB_Folds>
              <PC_Header/>
              <PC_Hero/>
              <PointsModule_Inline/>
              <PC_Insights/>
              <PC_ForYou/>
            </PC_OptionB_Folds>
          </div>
        </DCArtboard>
        <DCArtboard id="fold-inline-notes" label="Inline — what's gained" width={300} height={900}>
          <div style={{ padding: 16, height:'100%', boxSizing:'border-box', display:'flex', flexDirection:'column', gap: 10 }}>
            <PC_Callout accent={PC_orange}><b>What changed.</b> Points becomes a pill in the Today section header — replaces "See all". Zero net vertical added (saves ~90px vs. current).</PC_Callout>
            <PC_Callout accent={'#52a045'}><b>iPhone 14/15.</b> "For your sleep focus" first card fully visible above the fold.</PC_Callout>
            <PC_Callout accent={'#52a045'}><b>iPhone 13 mini.</b> Focused content peek visible.</PC_Callout>
            <PC_Callout accent={'#c1292e'}><b>Tradeoff.</b> Loses "See all" → tracker hub link. The pill IS the link to the points/activity hub. If "See all" trackers needs its own destination, this conflicts. Also: points feel like a tracker label again, which we just argued against.</PC_Callout>
            <PC_Callout><b>Pick this when.</b> Vertical compression is the top priority and you're OK consolidating "See all trackers" into the Today section title (e.g. tap the "Today" heading itself).</PC_Callout>
          </div>
        </DCArtboard>

        <DCArtboard id="fold-rec" label="Recommendation" width={520} height={420}>
          <div style={{ padding: 22, height:'100%', boxSizing:'border-box', display:'flex', flexDirection:'column', gap: 12, fontFamily: PointsCanvasFont }}>
            <div style={{ background: PC_blue, color:'#fff', borderRadius: 12, padding: '16px 18px' }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.2, textTransform:'uppercase', color: PC_orange }}>Pick</div>
              <div style={{ fontSize: 19, fontWeight: 700, marginTop: 6, lineHeight: 1.25 }}>B-slim — single-row points card.</div>
              <div style={{ fontSize: 12.5, marginTop: 8, color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>Brings focused content into the visible area on iPhone 14/15 (~70% of users). Keeps points as a real, tappable surface with its own CTA. Today still has its clean "See all" → tracker hub.</div>
            </div>
            <PC_Callout><b>If users need progress storytelling:</b> show the progress bar on the dedicated points/rewards page (where there's room to do it justice), not on home. Home is for at-a-glance.</PC_Callout>
            <PC_Callout><b>Don't pick B-inline.</b> Vertical savings are real, but it muddies the "Today = trackers only" pattern we just committed to.</PC_Callout>
          </div>
        </DCArtboard>

      </DCSection>

    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<PC_App/>);
