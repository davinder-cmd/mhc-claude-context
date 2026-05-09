// ab-screens.jsx — Current vs. Focused home screens for the A/B comparison

// ─────────────────────────────────────────────────────────────
// Shared pieces
// ─────────────────────────────────────────────────────────────

function FocusPill({ focus = 'Sleep', onChange, variant = 'strong' }) {
  // variant 'strong' = the upgraded option ① pill: filled light-blue, brand border, explicit "Edit" label.
  // variant 'legacy' = the original quiet badge (kept for the Baseline comparison artboard).
  if (variant === 'legacy') {
    return (
      <div onClick={onChange} style={{
        display:'inline-flex', alignItems:'center', gap:8,
        background:'#fff', border:`1px solid ${MHC.divider}`, borderRadius: 999,
        padding:'6px 10px 6px 12px', fontFamily: MHC_font, fontSize: 12, color: MHC.charcoal, fontWeight: 600,
        boxShadow: '0 1px 2px rgba(0,0,0,0.04)', cursor:'pointer',
      }}>
        <span style={{ width:6, height:6, borderRadius:'50%', background: MHC.orange }}/>
        Focus: <span style={{ color: MHC.blue }}>{focus}</span>
        <span style={{ opacity:0.5, fontSize: 11, fontWeight: 500 }}>change</span>
      </div>
    );
  }
  return (
    <div onClick={onChange} style={{
      display:'inline-flex', alignItems:'center', gap: 8,
      background: '#eaf2fa',
      border: `1.5px solid ${MHC.blue}`, borderRadius: 999,
      padding:'7px 12px 7px 14px',
      fontFamily: MHC_font, fontSize: 12.5, fontWeight: 700, color: MHC.blue,
      boxShadow:'0 1px 3px rgba(15,73,127,0.12)', cursor:'pointer',
    }}>
      <span style={{ width: 7, height: 7, borderRadius:'50%', background: MHC.orange }}/>
      <span style={{ color: MHC.slate, fontWeight: 600 }}>Focus:</span>
      <span>{focus}</span>
      <span style={{ width: 1, height: 12, background:'rgba(15,73,127,0.25)', margin:'0 1px' }}/>
      <span style={{ fontSize: 11.5 }}>Edit</span>
    </div>
  );
}

function TodayStrip({ linked = true, density = 'regular' }) {
  const compact = density === 'compact';
  if (!linked) {
    return (
      <div style={{
        background: '#eaf2fa', borderRadius: 14, padding: compact ? '14px 16px' : '18px 18px',
        display:'flex', alignItems:'center', gap: 14, cursor:'pointer',
      }}>
        <div style={{ width: 44, height: 44, borderRadius: '50%', background: MHC.blue, display: 'grid', placeItems: 'center', flexShrink: 0 }}>
          <MHCIcon name="activity" size={22} color="#fff"/>
        </div>
        <div style={{ flex:1 }}>
          <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 15, color: MHC.charcoal }}>Link a tracker to see your day</div>
          <div style={{ fontFamily: MHC_font, fontSize: 12.5, color: MHC.slate, marginTop: 2 }}>Apple Health, Fitbit, Garmin & more</div>
        </div>
        <MHCIcon name="arrow-right" size={18} color={MHC.blue}/>
      </div>
    );
  }
  const stats = [
    { label:'Steps', value:'8,572', goal:'of 10k', icon:'footsteps', color: MHC.blue },
    { label:'Sleep', value:'7h 16m', goal:'goal 8h', icon:'bed', color: MHC.aqua },
    { label:'Heart', value:'68', goal:'resting', icon:'heart', color: MHC.orange },
  ];
  return (
    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap: 8 }}>
      {stats.map((s,i) => (
        <div key={i} style={{
          background: '#fff', border: `1px solid ${MHC.divider}`, borderRadius: 14,
          padding: compact ? '10px 10px' : '12px 12px', textAlign:'left',
        }}>
          <div style={{ display:'flex', alignItems:'center', gap: 6, marginBottom: 4 }}>
            <MHCIcon name={s.icon} size={13} color={s.color}/>
            <div style={{ fontFamily: MHC_font, fontSize: 11, fontWeight: 600, color: MHC.slate, textTransform:'uppercase', letterSpacing: 0.5 }}>{s.label}</div>
          </div>
          <div style={{ fontFamily: MHC_font, fontSize: 18, fontWeight: 700, color: MHC.charcoal, lineHeight: 1.1 }}>{s.value}</div>
          <div style={{ fontFamily: MHC_font, fontSize: 11, color: MHC.slate, marginTop: 2 }}>{s.goal}</div>
        </div>
      ))}
    </div>
  );
}

function DesktopTodayStrip({ linked = true }) {
  if (!linked) {
    return (
      <div style={{
        background: '#eaf2fa', borderRadius: 16, padding: '20px 24px',
        display:'flex', alignItems:'center', gap: 18, cursor:'pointer',
      }}>
        <div style={{ width: 52, height: 52, borderRadius: '50%', background: MHC.blue, display: 'grid', placeItems: 'center', flexShrink: 0 }}>
          <MHCIcon name="activity" size={26} color="#fff"/>
        </div>
        <div style={{ flex:1 }}>
          <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 18, color: MHC.charcoal }}>Link a tracker to see your day</div>
          <div style={{ fontFamily: MHC_font, fontSize: 13, color: MHC.slate, marginTop: 2 }}>Apple Health, Fitbit, Garmin and more — 30 seconds to connect.</div>
        </div>
        <PillBtn>Link tracker</PillBtn>
      </div>
    );
  }
  const stats = [
    { label:'Steps today', value:'8,572', sub:'of 10,000', icon:'footsteps', color: MHC.blue },
    { label:'Sleep last night', value:'7h 16m', sub:'goal 8h', icon:'bed', color: MHC.aqua },
    { label:'Resting heart rate', value:'68 bpm', sub:'7-day avg', icon:'heart', color: MHC.orange },
    { label:'Active minutes', value:'42', sub:'goal 30', icon:'flame', color: MHC.green },
  ];
  return (
    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', gap: 12 }}>
      {stats.map((s,i) => (
        <div key={i} style={{
          background: '#fff', border: `1px solid ${MHC.divider}`, borderRadius: 14,
          padding: '14px 16px',
        }}>
          <div style={{ display:'flex', alignItems:'center', gap: 8, marginBottom: 6 }}>
            <div style={{ width:22, height:22, borderRadius:'50%', background: `${s.color}22`, display:'grid', placeItems:'center' }}>
              <MHCIcon name={s.icon} size={12} color={s.color}/>
            </div>
            <div style={{ fontFamily: MHC_font, fontSize: 11.5, fontWeight: 600, color: MHC.slate, textTransform:'uppercase', letterSpacing: 0.6 }}>{s.label}</div>
          </div>
          <div style={{ fontFamily: MHC_font, fontSize: 24, fontWeight: 700, color: MHC.charcoal, lineHeight: 1.05 }}>{s.value}</div>
          <div style={{ fontFamily: MHC_font, fontSize: 12, color: MHC.slate, marginTop: 4 }}>{s.sub}</div>
        </div>
      ))}
    </div>
  );
}

function ForYouCard({ title, subtitle, image, tag, onClick }) {
  return (
    <div onClick={onClick} style={{
      display:'flex', alignItems:'stretch', gap: 0,
      background:'#fff', border: `1px solid ${MHC.divider}`, borderRadius: 14, overflow:'hidden', cursor:'pointer',
    }}>
      <div style={{ width: 96, flexShrink:0, background: `url(${image}) center/cover`, minHeight: 96 }}/>
      <div style={{ padding:'12px 14px', flex:1, display:'flex', flexDirection:'column', justifyContent:'center' }}>
        {tag && <div style={{ fontFamily: MHC_font, fontSize: 10.5, fontWeight: 700, color: MHC.orange, textTransform:'uppercase', letterSpacing: 0.6, marginBottom: 2 }}>{tag}</div>}
        <div style={{ fontFamily: MHC_font, fontSize: 15, fontWeight: 700, color: MHC.charcoal, lineHeight: 1.25 }}>{title}</div>
        <div style={{ fontFamily: MHC_font, fontSize: 12.5, color: MHC.slate, marginTop: 2 }}>{subtitle}</div>
      </div>
      <div style={{ display:'grid', placeItems:'center', padding:'0 14px' }}>
        <MHCIcon name="arrow-right" size={16} color={MHC.blue}/>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// MOBILE — CURRENT (today's behavior)
// ─────────────────────────────────────────────────────────────
function M_Current({ density = 'regular' }) {
  const compact = density === 'compact';
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [bellOpen, setBellOpen] = React.useState(false);
  return (
    <div style={{ width: 390, background:'#fff', fontFamily: MHC_font, display:'flex', flexDirection:'column', minHeight: 844, position:'relative', overflow:'hidden' }}>
      <MobileTopBar/>
      <SearchModal open={searchOpen} onClose={()=>setSearchOpen(false)}/>
      <NotificationsPanel open={bellOpen} onClose={()=>setBellOpen(false)}/>
      <div style={{ flex:1, padding: compact ? '14px 16px 90px' : '18px 20px 90px', display:'flex', flexDirection:'column', gap: compact ? 14 : 18 }}>
        <MobileGreeting name="Davinder" onSearch={()=>setSearchOpen(true)} onBell={()=>setBellOpen(true)}/>

        {/* Carousel — mimics the 5-up carousel, showing pagination dots */}
        <div>
          <div style={{ display:'flex', gap: 10, overflow:'hidden' }}>
            <div style={{ flex:'0 0 92%', borderRadius: 14, overflow:'hidden', position:'relative', height: 200 }}>
              <div style={{ width:'100%', height:'100%', background:`url(assets/stretch-woman.jpg) center/cover` }}/>
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.55))' }}/>
              <div style={{ position:'absolute', left: 14, bottom: 12, color:'#fff' }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 0.6, textTransform:'uppercase', opacity:0.85 }}>Featured</div>
                <div style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.15 }}>Wellbeing Champion</div>
                <div style={{ fontSize: 12.5, opacity: 0.9, marginTop: 2 }}>Access Your Training</div>
              </div>
            </div>
            <div style={{ flex:'0 0 8%', borderRadius: 14, background: `url(assets/yoga-laptop.png) center/cover`, opacity: 0.6 }}/>
          </div>
          <div style={{ display:'flex', gap: 6, justifyContent:'center', marginTop: 10 }}>
            {[0,1,2,3,4].map(i => (
              <span key={i} style={{ width: i===0 ? 18 : 6, height: 6, borderRadius: 3, background: i===0 ? MHC.blue : MHC.divider, transition:'all .2s' }}/>
            ))}
          </div>
        </div>

        {/* Action items — 3 full-width rows */}
        <div>
          <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 16, color: MHC.charcoal, marginBottom: 10 }}>Recommended for You</div>
          <div style={{ display:'grid', gap: 10 }}>
            <ActionRow compact title="Wellbeing Champion" subtitle="Access Your Training" image="assets/stretch-woman.jpg" color="#e8d5f2"/>
            <ActionRow compact title="Join BurnAlong" subtitle="Access Your Training" image="assets/yoga-laptop.png" color="#d5edf4"/>
            <ActionRow compact title="Start a new daily habit" subtitle="Access Your Training" image="assets/portrait-man-smiling.png" color="#ffe3d9"/>
          </div>
        </div>

        {/* Health block — BELOW THE FOLD marker */}
        <div style={{ position:'relative', paddingTop: 18 }}>
          <div style={{
            position:'absolute', left:-20, right:-20, top: 0,
            borderTop: `2px dashed ${MHC.orange}`, opacity: 0.7,
          }}/>
          <div style={{
            position:'absolute', left:-20, top: -10,
            background: MHC.orange, color:'#fff', fontSize: 10, fontWeight: 700, letterSpacing: 0.5,
            padding:'3px 8px', borderRadius: 999, textTransform:'uppercase',
          }}>Fold</div>
          <MobileHealthBlock density={density}/>
        </div>
      </div>
      <BottomNav active="Home"/>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// MOBILE — FOCUSED (proposed)
// ─────────────────────────────────────────────────────────────
function M_Focused({ density = 'regular', focus = 'Sleep', linked = true, insightsState = 'refreshable' }) {
  const compact = density === 'compact';
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [bellOpen, setBellOpen] = React.useState(false);

  // Focus-filtered action items
  const focusItems = {
    'Sleep': [
      { title: 'Treat Insomnia', subtitle: '8-week program · Big Health', image: 'assets/portrait-woman-laughing.png', tag:'Digital therapeutic' },
      { title: 'Wind-down routine', subtitle: '4 short practices · 5 min each', image: 'assets/yoga-laptop.png', tag:'Habit' },
    ],
    'Move more': [
      { title: 'BurnAlong classes', subtitle: 'Live & on-demand workouts', image: 'assets/yoga-laptop.png', tag:'Fitness' },
      { title: 'Daily step goal', subtitle: 'Earn 50 pts per day', image: 'assets/stretch-woman.jpg', tag:'Habit' },
    ],
    'Manage stress': [
      { title: 'Managing Stress', subtitle: '6-week program', image: 'assets/portrait-man-smiling.png', tag:'Digital therapeutic' },
      { title: 'Breathing breaks', subtitle: '2 min · anytime', image: 'assets/marble-aqua.jpg', tag:'Habit' },
    ],
  }[focus] || [];

  return (
    <div style={{ width: 390, background:'#fff', fontFamily: MHC_font, display:'flex', flexDirection:'column', minHeight: 844, position:'relative', overflow:'hidden' }}>
      <MobileTopBar/>
      <SearchModal open={searchOpen} onClose={()=>setSearchOpen(false)}/>
      <NotificationsPanel open={bellOpen} onClose={()=>setBellOpen(false)}/>
      <div style={{ flex:1, padding: compact ? '14px 16px 90px' : '18px 20px 90px', display:'flex', flexDirection:'column', gap: compact ? 14 : 18 }}>
        {/* Greeting + focus pill */}
        <div>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
            <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 24, color: MHC.charcoal }}>Good morning, Davinder</div>
            <UtilityChips onSearch={()=>setSearchOpen(true)} onBell={()=>setBellOpen(true)} size={34} iconSize={16}/>
          </div>
          <div style={{ marginTop: 8 }}>
            <FocusPill focus={focus}/>
          </div>
        </div>

        {/* ONE hero */}
        <div style={{ borderRadius: 16, overflow:'hidden', position:'relative', height: 200 }}>
          <div style={{ width:'100%', height:'100%', background:`url(assets/portrait-woman-laughing.png) center/cover` }}/>
          <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,0.6))' }}/>
          <div style={{ position:'absolute', left: 16, bottom: 14, right: 16, color:'#fff' }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 0.6, textTransform:'uppercase', color: '#ffd6c2' }}>Your 8-week program</div>
            <div style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.15 }}>Managing Insomnia</div>
            <div style={{ fontSize: 12.5, opacity: 0.92, marginTop: 2 }}>Week 2 of 8 · continue tonight</div>
          </div>
        </div>

        {/* Today strip — ABOVE the fold */}
        <div>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: 8 }}>
            <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 15, color: MHC.charcoal }}>Today</div>
            <div style={{ fontFamily: MHC_font, fontSize: 12, color: MHC.blue, fontWeight: 600 }}>View all</div>
          </div>
          <TodayStrip linked={linked} density={density}/>
        </div>

        {/* Insights — sits right after Today, only visible when state != hidden */}
        <InsightsBlock state={linked ? insightsState : 'hidden'} density={density}/>

        {/* Focus-filtered items — only 2 */}
        <div>
          <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 15, color: MHC.charcoal, marginBottom: 8 }}>
            For your {focus.toLowerCase()} focus
          </div>
          <div style={{ display:'grid', gap: 10 }}>
            {focusItems.map((it,i) => <ForYouCard key={i} {...it}/>)}
          </div>
        </div>
      </div>
      <BottomNav active="Home"/>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// DESKTOP — CURRENT
// ─────────────────────────────────────────────────────────────
function D_Current({ density = 'regular' }) {
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [bellOpen, setBellOpen] = React.useState(false);
  return (
    <div style={{ width: 1280, background:'#fafbfc', fontFamily: MHC_font, display:'flex', minHeight: 900, position:'relative', overflow:'hidden' }}>
      <DesktopSidebar active="Home"/>
      <div style={{ flex:1, display:'flex', flexDirection:'column' }}>
        <DesktopTopBar/>
        <SearchModal open={searchOpen} onClose={()=>setSearchOpen(false)}/>
        <NotificationsPanel open={bellOpen} onClose={()=>setBellOpen(false)}/>
        <div style={{ padding: '28px 40px 40px', display:'flex', flexDirection:'column', gap: 22 }}>
          <div style={{ display:'flex', justifyContent:'flex-end' }}>
            <UtilityChips onSearch={()=>setSearchOpen(true)} onBell={()=>setBellOpen(true)} size={36} iconSize={16}/>
          </div>
          <WelcomeBanner name="Davinder"/>

          {/* Hero carousel row — 5 banners with pagination */}
          <div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr 1fr', gap: 16 }}>
              {[0,1,2,3,4].map(i => (
                <div key={i} style={{
                  borderRadius: 14, overflow:'hidden', position:'relative', height: 190,
                  opacity: i < 3 ? 1 : 0.45,
                }}>
                  <div style={{ width:'100%', height:'100%', background:`url(${['assets/stretch-woman.jpg','assets/yoga-laptop.png','assets/portrait-man-smiling.png','assets/portrait-older-man.jpg','assets/runner-sunset.png'][i]}) center/cover` }}/>
                  <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.55))' }}/>
                  <div style={{ position:'absolute', left: 12, bottom: 10, color:'#fff' }}>
                    <div style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.15 }}>{['Wellbeing Champion','BurnAlong','Daily Habit','A1C Check','Runner Club'][i]}</div>
                    <div style={{ fontSize: 11.5, opacity: 0.9 }}>Learn More</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display:'flex', justifyContent:'center', gap: 6, marginTop: 12 }}>
              {[0,1,2].map(i => (
                <span key={i} style={{ width: i===0 ? 20 : 8, height: 8, borderRadius: 4, background: i===0 ? MHC.blue : MHC.divider }}/>
              ))}
            </div>
          </div>

          {/* 3 action items */}
          <div>
            <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 20, color: MHC.charcoal, marginBottom: 14 }}>Recommended for You</div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap: 16 }}>
              {SAMPLE.actions.map((a,i) => (
                <div key={i} style={{ background:'#fff', border:`1px solid ${MHC.divider}`, borderRadius: 14, padding: 18, display:'flex', gap: 14 }}>
                  <div style={{ width: 72, height: 72, borderRadius: 12, background:`url(${a.image}) center/cover`, flexShrink: 0 }}/>
                  <div>
                    <div style={{ fontWeight: 700, color: MHC.charcoal, fontSize: 15 }}>{a.title}</div>
                    <div style={{ color: MHC.slate, fontSize: 12.5, marginTop: 2 }}>{a.subtitle}</div>
                    <div style={{ color: MHC.blue, fontSize: 12, fontWeight: 600, marginTop: 8 }}>Get Started →</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fold marker */}
          <div style={{ position:'relative', paddingTop: 22, marginTop: 6 }}>
            <div style={{
              position:'absolute', left: -40, right: -40, top: 0,
              borderTop: `2px dashed ${MHC.orange}`, opacity: 0.7,
            }}/>
            <div style={{
              position:'absolute', left: -40, top: -12,
              background: MHC.orange, color:'#fff', fontSize: 11, fontWeight: 700, letterSpacing: 0.5,
              padding:'4px 10px', borderRadius: 999, textTransform:'uppercase',
            }}>Fold — 1366×768</div>
            <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 20, color: MHC.charcoal, marginBottom: 14 }}>Latest Health Data</div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap: 12 }}>
              <HealthRow label="Steps" value="8,572" icon="footsteps" color={MHC.blue}/>
              <HealthRow label="Sleep" value="7" unit="h 16m" icon="bed" color={MHC.aqua} sparkVariant="ticks"/>
              <HealthRow label="Calories Burned" value="1,945" icon="flame" color={MHC.orange}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// DESKTOP — FOCUSED (proposed)
// ─────────────────────────────────────────────────────────────
function D_Focused({ density = 'regular', focus = 'Sleep', linked = true, insightsState = 'refreshable' }) {
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [bellOpen, setBellOpen] = React.useState(false);
  const focusItems = {
    'Sleep': [
      { title: 'Treat Insomnia', subtitle: '8-week program · Big Health', image: 'assets/portrait-woman-laughing.png', tag:'Digital therapeutic' },
      { title: 'Wind-down routine', subtitle: '4 short practices · 5 min each', image: 'assets/yoga-laptop.png', tag:'Habit' },
      { title: 'Sleep hygiene basics', subtitle: 'Read · 6 min', image: 'assets/marble-aqua.jpg', tag:'Article' },
    ],
  }[focus] || [];

  return (
    <div style={{ width: 1280, background:'#fafbfc', fontFamily: MHC_font, display:'flex', minHeight: 900, position:'relative', overflow:'hidden' }}>
      <DesktopSidebar active="Home"/>
      <div style={{ flex:1, display:'flex', flexDirection:'column' }}>
        <DesktopTopBar/>
        <SearchModal open={searchOpen} onClose={()=>setSearchOpen(false)}/>
        <NotificationsPanel open={bellOpen} onClose={()=>setBellOpen(false)}/>
        <div style={{ padding: '28px 40px 40px', display:'flex', flexDirection:'column', gap: 22 }}>

          {/* Greeting + focus pill (replaces welcome banner) */}
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
            <div>
              <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 28, color: MHC.charcoal }}>Good morning, Davinder</div>
              <div style={{ fontFamily: MHC_font, fontSize: 14, color: MHC.slate, marginTop: 4 }}>Here's what's waiting for you today.</div>
            </div>
            <div style={{ display:'flex', alignItems:'center', gap: 16 }}>
              <FocusPill focus={focus}/>
              <UtilityChips onSearch={()=>setSearchOpen(true)} onBell={()=>setBellOpen(true)} size={36} iconSize={16}/>
            </div>
          </div>

          {/* ONE full-width hero */}
          <div style={{ borderRadius: 18, overflow:'hidden', position:'relative', height: 340 }}>
            <div style={{ width:'100%', height:'100%', background:`url(assets/portrait-woman-laughing.png) center/cover` }}/>
            <div style={{ position:'absolute', inset:0, background:'linear-gradient(90deg, rgba(15,73,127,0.88) 0%, rgba(15,73,127,0.55) 50%, rgba(15,73,127,0) 85%)' }}/>
            <div style={{ position:'absolute', left: 36, bottom: 36, right: '40%', color:'#fff' }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 0.8, textTransform:'uppercase', color: '#f8a88a' }}>Your 8-week program · week 2</div>
              <div style={{ fontSize: 38, fontWeight: 700, lineHeight: 1.1, marginTop: 8 }}>Managing Insomnia</div>
              <div style={{ fontSize: 15, opacity: 0.95, marginTop: 8, lineHeight: 1.5 }}>Tonight's session is ready — 12 minutes of wind-down for the week ahead.</div>
              <div style={{ marginTop: 18 }}>
                <PillBtn variant="primary" size="lg" style={{ background:'#fff', color: MHC.blue }}>Continue tonight</PillBtn>
              </div>
            </div>
          </div>

          {/* Secondary row — OPTIONAL, only if client has extra banners */}
          <div>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom: 12 }}>
              <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 15, color: MHC.slate, textTransform:'uppercase', letterSpacing: 0.8 }}>More from Umbrella</div>
              <div style={{ fontFamily: MHC_font, fontSize: 12, color: MHC.slate }}>Shown only when the client has secondary content · max 4</div>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', gap: 14 }}>
              {['Wellbeing Champion','BurnAlong','New Habit','A1C Check'].map((t,i) => (
                <div key={i} style={{
                  borderRadius: 12, overflow:'hidden', position:'relative', height: 120, cursor:'pointer',
                  border:`1px solid ${MHC.divider}`,
                }}>
                  <div style={{ width:'100%', height:'100%', background:`url(${['assets/stretch-woman.jpg','assets/yoga-laptop.png','assets/portrait-man-smiling.png','assets/portrait-older-man.jpg'][i]}) center/cover` }}/>
                  <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,0.6))' }}/>
                  <div style={{ position:'absolute', left: 12, bottom: 10, color:'#fff', fontWeight: 700, fontSize: 14 }}>{t}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Today strip — ABOVE the fold */}
          <div>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom: 12 }}>
              <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 20, color: MHC.charcoal }}>Today</div>
              <div style={{ fontFamily: MHC_font, fontSize: 13, color: MHC.blue, fontWeight: 600 }}>View all activity →</div>
            </div>
            <DesktopTodayStrip linked={linked}/>
          </div>

          {/* Insights — sits between Today and For-you. Hidden when not enough data. */}
          <InsightsBlock state={linked ? insightsState : 'hidden'} density={density} desktop={true}/>

          {/* Focused for-you */}
          <div>
            <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 20, color: MHC.charcoal, marginBottom: 12 }}>
              For your <span style={{ color: MHC.blue }}>{focus.toLowerCase()}</span> focus
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap: 16 }}>
              {focusItems.map((it,i) => (
                <div key={i} style={{ background:'#fff', border:`1px solid ${MHC.divider}`, borderRadius: 14, overflow:'hidden', cursor:'pointer' }}>
                  <div style={{ height: 140, background:`url(${it.image}) center/cover` }}/>
                  <div style={{ padding: 16 }}>
                    <div style={{ fontFamily: MHC_font, fontSize: 11, fontWeight: 700, color: MHC.orange, textTransform:'uppercase', letterSpacing: 0.6 }}>{it.tag}</div>
                    <div style={{ fontFamily: MHC_font, fontSize: 16, fontWeight: 700, color: MHC.charcoal, marginTop: 4 }}>{it.title}</div>
                    <div style={{ fontFamily: MHC_font, fontSize: 13, color: MHC.slate, marginTop: 4 }}>{it.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// FOCUS PICKER — one-time onboarding
// ─────────────────────────────────────────────────────────────
function M_FocusPicker() {
  const goals = [
    { label:'Sleep better', icon:'moon', bg:'#e8d5f2', fg:'#6e5dc6', selected: true },
    { label:'Move more', icon:'footsteps', bg:'#d5edf4', fg: MHC.aqua, selected: true },
    { label:'Manage stress', icon:'activity', bg:'#ffe3d9', fg: MHC.orange, selected: false },
    { label:'Eat better', icon:'droplet', bg:'#d8ecd5', fg: MHC.green, selected: false },
    { label:'Quit smoking', icon:'flame', bg:'#ffe0cc', fg: MHC.orange, selected: false },
    { label:'Something else', icon:'bell', bg:'#e6ebec', fg: MHC.slate, selected: false },
  ];
  return (
    <div style={{ width: 390, background:'#fff', fontFamily: MHC_font, display:'flex', flexDirection:'column', minHeight: 844 }}>
      <MobileTopBar/>
      <div style={{ flex:1, padding: '24px 24px 40px', display:'flex', flexDirection:'column', gap: 22 }}>
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: MHC.orange, letterSpacing: 0.8, textTransform:'uppercase' }}>Step 1 of 1</div>
          <div style={{ fontSize: 28, fontWeight: 700, color: MHC.charcoal, lineHeight: 1.15, marginTop: 6 }}>What are you working on right now?</div>
          <div style={{ fontSize: 14, color: MHC.slate, marginTop: 10, lineHeight: 1.5 }}>Pick one or two. We'll tune your home page around what matters to you. You can change this any time.</div>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 10 }}>
          {goals.map((g,i) => (
            <div key={i} style={{
              border: g.selected ? `2px solid ${MHC.blue}` : `1px solid ${MHC.divider}`,
              background: g.selected ? '#eaf2fa' : '#fff',
              borderRadius: 14, padding: '14px 14px 16px',
              display:'flex', flexDirection:'column', gap: 10,
              cursor:'pointer', minHeight: 104,
              position:'relative',
            }}>
              {g.selected && (
                <div style={{ position:'absolute', top: 10, right: 10, width: 20, height: 20, borderRadius:'50%', background: MHC.blue, display:'grid', placeItems:'center' }}>
                  <MHCIcon name="check" size={12} color="#fff"/>
                </div>
              )}
              <IconChip icon={<MHCIcon name={g.icon} size={18} color={g.fg}/>} bg={g.bg}/>
              <div style={{ fontFamily: MHC_font, fontSize: 14, fontWeight: 700, color: MHC.charcoal }}>{g.label}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 'auto', display:'flex', flexDirection:'column', gap: 10 }}>
          <PillBtn size="lg" style={{ width:'100%' }}>Continue</PillBtn>
          <div style={{ textAlign:'center', fontSize: 13, color: MHC.slate }}>Skip for now</div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// DESKTOP TOP-NAV SHELL  (no left sidebar)
// Two flavors:
//   • shell = "topnav"  → MHC-hosted future state: full top nav, logo, primary tabs, account
//   • shell = "sdk"     → Embedded inside partner chrome: thin host bar above, our content sits flush below
// ─────────────────────────────────────────────────────────────
function DesktopTopNav({ active = 'Home' }) {
  const nav = ['Home', 'Digital Care', 'Wellbeing', 'Benefits', 'Rewards'];
  return (
    <header style={{
      height: 64, borderBottom: `1px solid ${MHC.divider}`, background:'#fff',
      display:'flex', alignItems:'center', padding:'0 40px', gap: 32,
    }}>
      <img src="assets/logo-primary-blue.png" style={{ height: 26 }}/>
      <nav style={{ display:'flex', gap: 4, flex: 1 }}>
        {nav.map(n => (
          <div key={n} style={{
            padding:'8px 14px', borderRadius: 8,
            fontFamily: MHC_font, fontSize: 14, fontWeight: n === active ? 700 : 500,
            color: n === active ? MHC.blue : MHC.charcoal,
            background: n === active ? '#eaf2fa' : 'transparent',
            cursor:'pointer',
          }}>{n}</div>
        ))}
      </nav>
      <div style={{ display:'flex', alignItems:'center', gap: 8, cursor:'pointer' }}>
        <div style={{ width: 32, height: 32, borderRadius:'50%', background: MHC.aqua, color:'#fff', fontFamily: MHC_font, fontWeight: 700, fontSize: 13, display:'grid', placeItems:'center' }}>D</div>
        <div style={{ fontFamily: MHC_font, fontSize: 13, color: MHC.charcoal, fontWeight: 600 }}>Davinder</div>
        <span style={{ color: MHC.slate, fontSize: 10 }}>▾</span>
      </div>
    </header>
  );
}

function PartnerHostBar() {
  return (
    <div style={{
      height: 56, background:'#1a1a2e', color:'#fff',
      display:'flex', alignItems:'center', padding:'0 32px', gap: 24,
      fontFamily: MHC_font, borderBottom:'3px solid #ff6b35',
    }}>
      <div style={{ display:'flex', alignItems:'center', gap: 10 }}>
        <div style={{ width: 28, height: 28, borderRadius: 6, background:'#ff6b35', display:'grid', placeItems:'center', fontWeight:700, fontSize: 14 }}>U</div>
        <div style={{ fontWeight: 700, fontSize: 15 }}>UmbrellaHealth Portal</div>
      </div>
      <div style={{ display:'flex', gap: 18, fontSize: 13, opacity: 0.85 }}>
        <span>Coverage</span><span>Claims</span><span>Find Care</span>
        <span style={{ color:'#ff6b35', fontWeight: 700 }}>Wellness</span>
        <span>Account</span>
      </div>
      <div style={{ marginLeft:'auto', fontSize: 12, opacity: 0.75 }}>Hosted by partner — MHC SDK below</div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// NO-FOCUS STATE — when user skipped the picker
// Replaces the FocusPill with a "Pick your focus" CTA, and the
// personal hero with an onboarding hero showing example focus chips.
// ─────────────────────────────────────────────────────────────

function PickFocusPill({ size = 'regular' }) {
  const compact = size === 'compact';
  return (
    <div style={{
      display:'inline-flex', alignItems:'center', gap: 10,
      padding: compact ? '7px 12px 7px 10px' : '9px 14px 9px 12px',
      background:'#fff',
      border: `1.5px dashed ${MHC.blue}`,
      borderRadius: 999,
      fontFamily: MHC_font,
      cursor:'pointer',
    }}>
      <div style={{
        width: compact ? 22 : 24, height: compact ? 22 : 24, borderRadius:'50%',
        background: MHC.blue, color:'#fff',
        display:'grid', placeItems:'center', fontWeight: 700,
        fontSize: compact ? 14 : 16, lineHeight: 1,
      }}>+</div>
      <div style={{ display:'flex', flexDirection:'column', lineHeight: 1.15 }}>
        <span style={{ fontSize: compact ? 10 : 11, fontWeight: 700, color: MHC.slate, textTransform:'uppercase', letterSpacing: 0.5 }}>No focus yet</span>
        <span style={{ fontSize: compact ? 13 : 14, fontWeight: 700, color: MHC.blue }}>Pick what to work on</span>
      </div>
    </div>
  );
}

// Onboarding hero — shown when there's no focus chosen
function NoFocusHero({ desktop = false }) {
  const chips = [
    { label:'Sleep better', bg:'#e8d5f2', fg:'#6e5dc6' },
    { label:'Move more', bg:'#d5edf4', fg: MHC.aqua },
    { label:'Manage stress', bg:'#ffe3d9', fg: MHC.orange },
    { label:'Eat better', bg:'#d8ecd5', fg: MHC.green },
  ];
  if (desktop) {
    return (
      <div style={{
        borderRadius: 18, overflow:'hidden', position:'relative',
        background:`linear-gradient(135deg, ${MHC.blue} 0%, #2e6bb0 60%, #4a8ec9 100%)`,
        color:'#fff', padding: '36px 40px',
        display:'grid', gridTemplateColumns:'1.2fr 1fr', gap: 36, alignItems:'center',
      }}>
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 0.8, textTransform:'uppercase', color:'#ffd6c2' }}>Make this yours</div>
          <div style={{ fontSize: 34, fontWeight: 700, lineHeight: 1.12, marginTop: 10 }}>Tell us what matters most.</div>
          <div style={{ fontSize: 15, opacity: 0.92, marginTop: 12, lineHeight: 1.5, maxWidth: 540 }}>
            Pick one focus and we'll prioritize the right program, daily practices, and check-ins for it. You can change or remove your focus anytime.
          </div>
          <div style={{ marginTop: 22, display:'flex', gap: 12, alignItems:'center' }}>
            <PillBtn variant="primary" size="lg" style={{ background:'#fff', color: MHC.blue }}>Pick your focus</PillBtn>
            <span style={{ fontSize: 13, opacity: 0.85 }}>Takes ~30 seconds</span>
          </div>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 12 }}>
          {chips.map((c,i) => (
            <div key={i} style={{
              background:'rgba(255,255,255,0.12)',
              border:'1px solid rgba(255,255,255,0.25)',
              borderRadius: 14, padding:'14px 16px',
              display:'flex', alignItems:'center', gap: 12, cursor:'pointer',
            }}>
              <div style={{ width: 36, height: 36, borderRadius:'50%', background: c.bg, color: c.fg, display:'grid', placeItems:'center', fontWeight: 700 }}>★</div>
              <div style={{ fontWeight: 700, fontSize: 15 }}>{c.label}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  // Mobile
  return (
    <div style={{
      borderRadius: 16, overflow:'hidden', position:'relative',
      background:`linear-gradient(135deg, ${MHC.blue} 0%, #2e6bb0 100%)`,
      color:'#fff', padding: '20px 18px',
    }}>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 0.6, textTransform:'uppercase', color:'#ffd6c2' }}>Make this yours</div>
      <div style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.15, marginTop: 6 }}>Tell us what matters most.</div>
      <div style={{ fontSize: 13, opacity: 0.92, marginTop: 6, lineHeight: 1.45 }}>
        Pick one focus and we'll prioritize the right program and daily practices for it.
      </div>
      <div style={{ marginTop: 14, display:'grid', gridTemplateColumns:'1fr 1fr', gap: 8 }}>
        {chips.map((c,i) => (
          <div key={i} style={{
            background:'rgba(255,255,255,0.14)',
            border:'1px solid rgba(255,255,255,0.28)',
            borderRadius: 999, padding:'8px 12px',
            display:'flex', alignItems:'center', gap: 8, fontSize: 13, fontWeight: 700,
          }}>
            <span style={{ width: 18, height: 18, borderRadius:'50%', background: c.bg, color: c.fg, display:'grid', placeItems:'center', fontSize: 10 }}>★</span>
            {c.label}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 14 }}>
        <PillBtn variant="primary" size="md" style={{ background:'#fff', color: MHC.blue, width:'100%' }}>Pick your focus</PillBtn>
      </div>
    </div>
  );
}

// Soft persistent prompt above the rail — gentle reminder, not nag
function NoFocusPersistentNudge({ desktop = false }) {
  return (
    <div style={{
      display:'flex', alignItems:'center', gap: 12,
      padding: desktop ? '12px 16px' : '10px 14px',
      background:'#f5f9fc',
      border: `1px dashed ${MHC.blue}`,
      borderRadius: 12,
      fontFamily: MHC_font,
    }}>
      <div style={{ width: 28, height: 28, borderRadius:'50%', background:'#fff', border:`1.5px solid ${MHC.blue}`, color: MHC.blue, display:'grid', placeItems:'center', fontWeight: 700, fontSize: 16 }}>+</div>
      <div style={{ flex: 1, fontSize: desktop ? 14 : 13, color: MHC.charcoal, lineHeight: 1.35 }}>
        <strong>Get a more personal home.</strong> Pick a focus and we'll tailor what shows up here.
      </div>
      <div style={{ fontSize: desktop ? 13 : 12, color: MHC.blue, fontWeight: 700, whiteSpace:'nowrap' }}>Pick a focus →</div>
    </div>
  );
}

// MOBILE — no focus chosen
function M_NoFocus({ density = 'regular', linked = true, insightsState = 'refreshable' }) {
  const compact = density === 'compact';
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [bellOpen, setBellOpen] = React.useState(false);

  // Generic, broad recommendations (not focus-filtered)
  const popular = [
    { title: 'Wellbeing Library', subtitle: '60+ programs · explore by topic', image: 'assets/marble-aqua.jpg', tag:'Library' },
    { title: 'Find a daily habit', subtitle: '5-min practices · earn points', image: 'assets/yoga-laptop.png', tag:'Habit' },
  ];

  return (
    <div style={{ width: 390, background:'#fff', fontFamily: MHC_font, display:'flex', flexDirection:'column', minHeight: 844, position:'relative', overflow:'hidden' }}>
      <MobileTopBar/>
      <SearchModal open={searchOpen} onClose={()=>setSearchOpen(false)}/>
      <NotificationsPanel open={bellOpen} onClose={()=>setBellOpen(false)}/>
      <div style={{ flex:1, padding: compact ? '14px 16px 90px' : '18px 20px 90px', display:'flex', flexDirection:'column', gap: compact ? 14 : 18 }}>
        {/* Greeting + pick-focus CTA (replaces FocusPill) */}
        <div>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
            <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 24, color: MHC.charcoal }}>Good morning, Davinder</div>
            <UtilityChips onSearch={()=>setSearchOpen(true)} onBell={()=>setBellOpen(true)} size={34} iconSize={16}/>
          </div>
          <div style={{ marginTop: 8 }}>
            <PickFocusPill size="compact"/>
          </div>
        </div>

        {/* Onboarding hero — replaces personal program hero */}
        <NoFocusHero/>

        {/* Today strip — works without focus */}
        <div>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: 8 }}>
            <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 15, color: MHC.charcoal }}>Today</div>
            <div style={{ fontFamily: MHC_font, fontSize: 12, color: MHC.blue, fontWeight: 600 }}>View all</div>
          </div>
          <TodayStrip linked={linked} density={density}/>
        </div>

        {/* Insights — works without focus */}
        <InsightsBlock state={linked ? insightsState : 'hidden'} density={density}/>

        {/* Persistent nudge — only AFTER the value-bearing modules */}
        <NoFocusPersistentNudge/>

        {/* Popular this week — generic, not focus-filtered */}
        <div>
          <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 15, color: MHC.charcoal, marginBottom: 8 }}>
            Popular this week
          </div>
          <div style={{ display:'grid', gap: 10 }}>
            {popular.map((it,i) => <ForYouCard key={i} {...it}/>)}
          </div>
        </div>
      </div>
      <BottomNav active="Home"/>
    </div>
  );
}

// DESKTOP — no focus chosen (left-nav variant)
function D_NoFocus({ density = 'regular', linked = true, insightsState = 'refreshable' }) {
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [bellOpen, setBellOpen] = React.useState(false);
  const popular = [
    { title: 'Wellbeing Library', subtitle: '60+ programs across sleep, stress, movement, nutrition', image: 'assets/marble-aqua.jpg', tag:'Library' },
    { title: 'Find a daily habit', subtitle: '5-min practices · earn points', image: 'assets/yoga-laptop.png', tag:'Habit' },
    { title: 'Health screenings', subtitle: 'Annual checkups & lab work', image: 'assets/stretch-woman.jpg', tag:'Care' },
  ];

  return (
    <div style={{ width: 1280, background:'#fafbfc', fontFamily: MHC_font, display:'flex', minHeight: 900, position:'relative', overflow:'hidden' }}>
      <DesktopSidebar active="Home"/>
      <div style={{ flex:1, display:'flex', flexDirection:'column' }}>
        <DesktopTopBar/>
        <SearchModal open={searchOpen} onClose={()=>setSearchOpen(false)}/>
        <NotificationsPanel open={bellOpen} onClose={()=>setBellOpen(false)}/>
        <div style={{ padding: '28px 40px 40px', display:'flex', flexDirection:'column', gap: 22 }}>
          {/* Greeting + Pick-focus CTA */}
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
            <div>
              <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 28, color: MHC.charcoal }}>Good morning, Davinder</div>
              <div style={{ fontFamily: MHC_font, fontSize: 14, color: MHC.slate, marginTop: 4 }}>Here's what's available today.</div>
            </div>
            <div style={{ display:'flex', alignItems:'center', gap: 16 }}>
              <PickFocusPill/>
              <UtilityChips onSearch={()=>setSearchOpen(true)} onBell={()=>setBellOpen(true)} size={36} iconSize={16}/>
            </div>
          </div>

          {/* Onboarding hero */}
          <NoFocusHero desktop={true}/>

          {/* Today strip */}
          <div>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom: 12 }}>
              <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 20, color: MHC.charcoal }}>Today</div>
              <div style={{ fontFamily: MHC_font, fontSize: 13, color: MHC.blue, fontWeight: 600 }}>View all activity →</div>
            </div>
            <DesktopTodayStrip linked={linked}/>
          </div>

          {/* Insights */}
          <InsightsBlock state={linked ? insightsState : 'hidden'} density={density} desktop={true}/>

          {/* Persistent nudge */}
          <NoFocusPersistentNudge desktop={true}/>

          {/* Popular this week */}
          <div>
            <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 20, color: MHC.charcoal, marginBottom: 12 }}>
              Popular this week
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap: 16 }}>
              {popular.map((it,i) => (
                <div key={i} style={{ background:'#fff', border:`1px solid ${MHC.divider}`, borderRadius: 14, overflow:'hidden', cursor:'pointer' }}>
                  <div style={{ height: 140, background:`url(${it.image}) center/cover` }}/>
                  <div style={{ padding: 16 }}>
                    <div style={{ fontFamily: MHC_font, fontSize: 11, fontWeight: 700, color: MHC.orange, textTransform:'uppercase', letterSpacing: 0.6 }}>{it.tag}</div>
                    <div style={{ fontFamily: MHC_font, fontSize: 16, fontWeight: 700, color: MHC.charcoal, marginTop: 4 }}>{it.title}</div>
                    <div style={{ fontFamily: MHC_font, fontSize: 13, color: MHC.slate, marginTop: 4 }}>{it.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function D_Focused_NoNav({ density = 'regular', focus = 'Sleep', linked = true, insightsState = 'refreshable', shell = 'topnav' }) {
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [bellOpen, setBellOpen] = React.useState(false);
  const focusItems = {
    'Sleep': [
      { title: 'Treat Insomnia', subtitle: '8-week program · Big Health', image: 'assets/portrait-woman-laughing.png', tag:'Digital therapeutic' },
      { title: 'Wind-down routine', subtitle: '4 short practices · 5 min each', image: 'assets/yoga-laptop.png', tag:'Habit' },
      { title: 'Sleep hygiene basics', subtitle: 'Read · 6 min', image: 'assets/marble-aqua.jpg', tag:'Article' },
    ],
    'Move more': [
      { title: 'Walk 7,500 a day', subtitle: '4-week challenge', image: 'assets/runner-sunset.png', tag:'Challenge' },
      { title: 'Beginner strength', subtitle: '3 sessions/week · 20 min', image: 'assets/stretch-woman.jpg', tag:'Program' },
      { title: 'BurnAlong: pick a class', subtitle: 'Live & on-demand', image: 'assets/yoga-laptop.png', tag:'Library' },
    ],
    'Manage stress': [
      { title: 'Calm: 7-day reset', subtitle: 'Daily 10-min meditation', image: 'assets/marble-aqua.jpg', tag:'Program' },
      { title: 'Breathwork basics', subtitle: '3 short practices', image: 'assets/portrait-woman-laughing.png', tag:'Habit' },
      { title: 'Stress at work: read', subtitle: 'Article · 5 min', image: 'assets/portrait-man-smiling.png', tag:'Article' },
    ],
  }[focus] || [];

  // Content width — tighter when SDK so it visually reads as a hosted module
  const contentMaxWidth = shell === 'sdk' ? 1200 : 1280;

  return (
    <div style={{ width: 1280, background: shell === 'sdk' ? '#f4f5f7' : '#fafbfc', fontFamily: MHC_font, display:'flex', flexDirection:'column', minHeight: 900, position:'relative', overflow:'hidden' }}>
      {shell === 'sdk' ? <PartnerHostBar/> : <DesktopTopNav active="Home"/>}
      <SearchModal open={searchOpen} onClose={()=>setSearchOpen(false)}/>
      <NotificationsPanel open={bellOpen} onClose={()=>setBellOpen(false)}/>
      <div style={{ flex:1, padding: shell === 'sdk' ? '24px 40px 40px' : '28px 40px 40px', display:'flex', flexDirection:'column', gap: 22, maxWidth: contentMaxWidth, width:'100%', boxSizing:'border-box', alignSelf:'center' }}>

        {/* SDK badge — visual hint that this is the embeddable module */}
        {shell === 'sdk' && (
          <div style={{ display:'flex', alignItems:'center', gap: 10, fontFamily: MHC_font, fontSize: 11, color: MHC.slate, letterSpacing: 0.6, textTransform:'uppercase', fontWeight: 700 }}>
            <span style={{ width: 8, height: 8, borderRadius:'50%', background: MHC.blue }}/>
            Powered by MobileHealth · Wellness module
          </div>
        )}

        {/* Greeting + focus pill */}
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <div>
            <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 28, color: MHC.charcoal }}>Good morning, Davinder</div>
            <div style={{ fontFamily: MHC_font, fontSize: 14, color: MHC.slate, marginTop: 4 }}>Here's what's waiting for you today.</div>
          </div>
          <div style={{ display:'flex', alignItems:'center', gap: 16 }}>
            <FocusPill focus={focus}/>
            <UtilityChips onSearch={()=>setSearchOpen(true)} onBell={()=>setBellOpen(true)} size={36} iconSize={16}/>
          </div>
        </div>

        {/* ONE hero — 50/50 SPLIT layout (selected option B for wide / no-left-nav). 
            Photo on left half, solid brand panel with copy on right. Subject's head
            stays in frame at any width; copy lives on a controlled background. */}
        <div style={{
          borderRadius: 18, overflow:'hidden', position:'relative', height: shell === 'sdk' ? 300 : 340,
          display:'grid', gridTemplateColumns:'1.1fr 1fr', background: MHC.blue,
        }}>
          <div style={{ background:`url(assets/portrait-woman-laughing.png) center 22%/cover` }}/>
          <div style={{ padding: '36px 44px', color:'#fff', display:'flex', flexDirection:'column', justifyContent:'center' }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 0.8, textTransform:'uppercase', color: '#f8a88a' }}>Your 8-week program · week 2</div>
            <div style={{ fontSize: 36, fontWeight: 700, lineHeight: 1.1, marginTop: 10 }}>Managing Insomnia</div>
            <div style={{ fontSize: 15, opacity: 0.95, marginTop: 10, lineHeight: 1.5, maxWidth: 380 }}>Tonight's session is ready — 12 minutes of wind-down for the week ahead.</div>
            <div style={{ marginTop: 22 }}>
              <PillBtn variant="primary" size="lg" style={{ background:'#fff', color: MHC.blue }}>Continue tonight</PillBtn>
            </div>
          </div>
        </div>

        {/* Today strip */}
        <div>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom: 12 }}>
            <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 20, color: MHC.charcoal }}>Today</div>
            <div style={{ fontFamily: MHC_font, fontSize: 13, color: MHC.blue, fontWeight: 600 }}>View all activity →</div>
          </div>
          <DesktopTodayStrip linked={linked}/>
        </div>

        {/* Insights */}
        <InsightsBlock state={linked ? insightsState : 'hidden'} density={density} desktop={true}/>

        {/* Focused for-you */}
        <div>
          <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 20, color: MHC.charcoal, marginBottom: 12 }}>
            For your <span style={{ color: MHC.blue }}>{focus.toLowerCase()}</span> focus
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap: 16 }}>
            {focusItems.map((it,i) => (
              <div key={i} style={{ background:'#fff', border:`1px solid ${MHC.divider}`, borderRadius: 14, overflow:'hidden', cursor:'pointer' }}>
                <div style={{ height: 140, background:`url(${it.image}) center/cover` }}/>
                <div style={{ padding: 16 }}>
                  <div style={{ fontFamily: MHC_font, fontSize: 11, fontWeight: 700, color: MHC.orange, textTransform:'uppercase', letterSpacing: 0.6 }}>{it.tag}</div>
                  <div style={{ fontFamily: MHC_font, fontSize: 16, fontWeight: 700, color: MHC.charcoal, marginTop: 4 }}>{it.title}</div>
                  <div style={{ fontFamily: MHC_font, fontSize: 13, color: MHC.slate, marginTop: 4 }}>{it.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// HERO TREATMENT OPTIONS — for the no-left-nav (wide) layout
// Five strategies for keeping the hero readable when the page widens out:
// ─────────────────────────────────────────────────────────────
function HeroOption({ variant = 'cap', label, width = 1200 }) {
  const img = 'assets/portrait-woman-laughing.png';
  const eyebrow = "Your 8-week program · week 2";
  const title = "Managing Insomnia";
  const body = "Tonight's session is ready — 12 minutes of wind-down for the week ahead.";

  // ── Variant A: Capped width, centered ──
  if (variant === 'cap') {
    return (
      <div style={{ width, background:'#fafbfc', padding: '20px 40px', boxSizing:'border-box' }}>
        <div style={{ maxWidth: 1100, margin:'0 auto' }}>
          <div style={{ borderRadius: 18, overflow:'hidden', position:'relative', height: 340 }}>
            <div style={{ width:'100%', height:'100%', background:`url(${img}) center 30%/cover` }}/>
            <div style={{ position:'absolute', inset:0, background:'linear-gradient(90deg, rgba(15,73,127,0.88) 0%, rgba(15,73,127,0.55) 50%, rgba(15,73,127,0) 85%)' }}/>
            <div style={{ position:'absolute', left: 36, bottom: 36, right: '40%', color:'#fff', fontFamily: MHC_font }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 0.8, textTransform:'uppercase', color: '#f8a88a' }}>{eyebrow}</div>
              <div style={{ fontSize: 36, fontWeight: 700, lineHeight: 1.1, marginTop: 8 }}>{title}</div>
              <div style={{ fontSize: 15, opacity: 0.95, marginTop: 8, lineHeight: 1.5 }}>{body}</div>
              <div style={{ marginTop: 18 }}>
                <PillBtn size="lg" style={{ background:'#fff', color: MHC.blue }}>Continue tonight</PillBtn>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Variant B: Split layout (image left half, content right half) ──
  if (variant === 'split') {
    return (
      <div style={{ width, background:'#fafbfc', padding: '20px 40px', boxSizing:'border-box' }}>
        <div style={{
          borderRadius: 18, overflow:'hidden', position:'relative', height: 340,
          display:'grid', gridTemplateColumns:'1.1fr 1fr', background:'#0f497f',
        }}>
          <div style={{ background:`url(${img}) center 22%/cover` }}/>
          <div style={{ padding: '40px 48px', color:'#fff', display:'flex', flexDirection:'column', justifyContent:'center', fontFamily: MHC_font }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 0.8, textTransform:'uppercase', color: '#f8a88a' }}>{eyebrow}</div>
            <div style={{ fontSize: 36, fontWeight: 700, lineHeight: 1.1, marginTop: 10 }}>{title}</div>
            <div style={{ fontSize: 15, opacity: 0.95, marginTop: 10, lineHeight: 1.5, maxWidth: 380 }}>{body}</div>
            <div style={{ marginTop: 22 }}>
              <PillBtn size="lg" style={{ background:'#fff', color: MHC.blue }}>Continue tonight</PillBtn>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Variant C: Aspect-ratio locked (height grows with width to preserve image) ──
  if (variant === 'aspect') {
    return (
      <div style={{ width, background:'#fafbfc', padding: '20px 40px', boxSizing:'border-box' }}>
        <div style={{ borderRadius: 18, overflow:'hidden', position:'relative', aspectRatio: '21 / 7' }}>
          <div style={{ width:'100%', height:'100%', background:`url(${img}) center 28%/cover` }}/>
          <div style={{ position:'absolute', inset:0, background:'linear-gradient(90deg, rgba(15,73,127,0.86) 0%, rgba(15,73,127,0.4) 55%, rgba(15,73,127,0) 88%)' }}/>
          <div style={{ position:'absolute', left: 40, bottom: 36, right: '50%', color:'#fff', fontFamily: MHC_font }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 0.8, textTransform:'uppercase', color: '#f8a88a' }}>{eyebrow}</div>
            <div style={{ fontSize: 38, fontWeight: 700, lineHeight: 1.1, marginTop: 8 }}>{title}</div>
            <div style={{ fontSize: 15, opacity: 0.95, marginTop: 8, lineHeight: 1.5 }}>{body}</div>
            <div style={{ marginTop: 18 }}>
              <PillBtn size="lg" style={{ background:'#fff', color: MHC.blue }}>Continue tonight</PillBtn>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Variant D: Card-style (bordered surface, photo as inset on right) ──
  if (variant === 'card') {
    return (
      <div style={{ width, background:'#fafbfc', padding: '20px 40px', boxSizing:'border-box' }}>
        <div style={{
          borderRadius: 18, padding: 24, background:'#fff', border:`1px solid ${MHC.divider}`,
          display:'grid', gridTemplateColumns:'1fr 360px', gap: 28, alignItems:'center', minHeight: 280,
        }}>
          <div style={{ fontFamily: MHC_font, padding:'8px 0' }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 0.8, textTransform:'uppercase', color: MHC.orange }}>{eyebrow}</div>
            <div style={{ fontSize: 32, fontWeight: 700, lineHeight: 1.1, color: MHC.charcoal, marginTop: 8 }}>{title}</div>
            <div style={{ fontSize: 15, color: MHC.slate, marginTop: 10, lineHeight: 1.5, maxWidth: 480 }}>{body}</div>
            <div style={{ marginTop: 20, display:'flex', gap: 10, alignItems:'center' }}>
              <PillBtn size="lg">Continue tonight</PillBtn>
              <span style={{ fontSize: 13, color: MHC.slate }}>12 min</span>
            </div>
          </div>
          <div style={{ borderRadius: 12, overflow:'hidden', height: 240, background:`url(${img}) center 20%/cover` }}/>
        </div>
      </div>
    );
  }

  // ── Variant E: Editorial (photo as a wide banner with content below, no overlay) ──
  if (variant === 'editorial') {
    return (
      <div style={{ width, background:'#fafbfc', padding: '20px 40px', boxSizing:'border-box' }}>
        <div style={{ maxWidth: 1100, margin:'0 auto' }}>
          <div style={{ borderRadius: 18, overflow:'hidden', background:'#fff', border:`1px solid ${MHC.divider}` }}>
            <div style={{ height: 220, background:`url(${img}) center 25%/cover` }}/>
            <div style={{ padding: '24px 32px 28px', fontFamily: MHC_font }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 0.8, textTransform:'uppercase', color: MHC.orange }}>{eyebrow}</div>
              <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginTop: 6, gap: 24 }}>
                <div>
                  <div style={{ fontSize: 30, fontWeight: 700, lineHeight: 1.1, color: MHC.charcoal }}>{title}</div>
                  <div style={{ fontSize: 14.5, color: MHC.slate, marginTop: 8, lineHeight: 1.5, maxWidth: 560 }}>{body}</div>
                </div>
                <PillBtn size="lg">Continue tonight</PillBtn>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

Object.assign(window, { HeroOption });

// ─────────────────────────────────────────────────────────────
// FOCUS CONTROL OPTIONS — variants for making "your focus" discoverable
// Shown in context: greeting → control → hero hint → section label echo
// ─────────────────────────────────────────────────────────────
function FocusControlOption({ variant = 'pill-strong', focus = 'Sleep' }) {
  const Greeting = (
    <div>
      <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 28, color: MHC.charcoal }}>Good morning, Davinder</div>
      <div style={{ fontFamily: MHC_font, fontSize: 14, color: MHC.slate, marginTop: 4 }}>Here's what's waiting for you today.</div>
    </div>
  );

  const SectionEcho = (
    <div style={{ marginTop: 'auto', paddingTop: 24, borderTop: `1px dashed ${MHC.divider}` }}>
      <div style={{ fontFamily: MHC_font, fontSize: 11, color: MHC.slate, letterSpacing: 0.6, textTransform:'uppercase', fontWeight: 700, marginBottom: 6 }}>↓ Echoed below the fold</div>
      <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 20, color: MHC.charcoal }}>
        For your <span style={{ color: MHC.blue }}>{focus.toLowerCase()}</span> focus
      </div>
    </div>
  );

  // VARIANT 1 — Stronger pill (filled, bolder, "Edit" affordance — opens modal selector or navigates to focus settings page)
  if (variant === 'pill-strong') {
    return (
      <div style={{ background:'#fafbfc', padding: 28, height:'100%', boxSizing:'border-box', display:'flex', flexDirection:'column', fontFamily: MHC_font }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap: 24 }}>
          {Greeting}
          <button style={{
            display:'inline-flex', alignItems:'center', gap: 10,
            background: '#eaf2fa',
            border: `1.5px solid ${MHC.blue}`,
            borderRadius: 999,
            padding: '10px 14px 10px 16px',
            fontFamily: MHC_font, fontSize: 13.5, fontWeight: 700, color: MHC.blue,
            cursor:'pointer', boxShadow:'0 1px 3px rgba(15,73,127,0.12)',
          }}>
            <span style={{ width: 8, height: 8, borderRadius:'50%', background: MHC.orange }}/>
            <span style={{ color: MHC.slate, fontWeight: 600 }}>Focus:</span>
            <span>{focus}</span>
            <span style={{ width: 1, height: 14, background: MHC.divider, margin:'0 2px' }}/>
            <span style={{ fontWeight: 700, fontSize: 12.5 }}>Edit</span>
          </button>
        </div>
        {SectionEcho}
      </div>
    );
  }

  // VARIANT 2 (REMOVED — used to be pill + helper. System has no dismiss, so a permanent helper feels heavy.)
  // Keep slot for backward compat if referenced elsewhere; render nothing.
  if (variant === 'pill-helper') return null;

  // VARIANT 3 — Full-width banner row above hero
  if (variant === 'banner') {
    return (
      <div style={{ background:'#fafbfc', padding: 28, height:'100%', boxSizing:'border-box', display:'flex', flexDirection:'column', fontFamily: MHC_font, gap: 18 }}>
        {Greeting}
        <div style={{
          background: '#eaf2fa',
          border: `1px solid #c7dcef`,
          borderRadius: 12,
          padding: '14px 18px',
          display:'flex', alignItems:'center', justifyContent:'space-between', gap: 16,
        }}>
          <div style={{ display:'flex', alignItems:'center', gap: 12 }}>
            <div style={{
              width: 32, height: 32, borderRadius:'50%', background: MHC.blue,
              display:'grid', placeItems:'center', flexShrink: 0,
            }}>
              <MHCIcon name="target" size={16} color="#fff" stroke={2.4}/>
            </div>
            <div>
              <div style={{ fontSize: 14, color: MHC.charcoal }}>
                Showing content for your <b style={{ color: MHC.blue }}>{focus}</b> focus
              </div>
              <div style={{ fontSize: 12, color: MHC.slate, marginTop: 2 }}>Change your focus areas anytime — we'll re-personalize.</div>
            </div>
          </div>
          <button style={{
            background:'#fff', border:`1.5px solid ${MHC.blue}`, color: MHC.blue,
            borderRadius: 999, padding:'8px 14px',
            fontFamily: MHC_font, fontSize: 13, fontWeight: 700, cursor:'pointer',
            display:'inline-flex', alignItems:'center', gap: 6,
          }}>
            Change focus
            <MHCIcon name="arrow-right" size={14} color={MHC.blue} stroke={2.4}/>
          </button>
        </div>
        {SectionEcho}
      </div>
    );
  }

  // VARIANT 4 — Inline editable section label (focus picker triggered from the heading)
  if (variant === 'inline-heading') {
    return (
      <div style={{ background:'#fafbfc', padding: 28, height:'100%', boxSizing:'border-box', display:'flex', flexDirection:'column', fontFamily: MHC_font, gap: 18 }}>
        <div>
          {Greeting}
          <div style={{
            display:'inline-flex', alignItems:'center', gap: 6,
            fontFamily: MHC_font, fontSize: 13, color: MHC.slate, marginTop: 14,
          }}>
            Showing content for
            <button style={{
              display:'inline-flex', alignItems:'center', gap: 4,
              background:'transparent', border:'none', padding:'2px 6px',
              fontFamily: MHC_font, fontSize: 13, fontWeight: 700, color: MHC.blue,
              borderBottom: `2px dotted ${MHC.blue}`,
              cursor:'pointer',
            }}>
              your {focus.toLowerCase()} focus
              <MHCIcon name="arrow-right" size={13} color={MHC.blue} stroke={2.4}/>
            </button>
          </div>
        </div>
        <div style={{
          padding: 14, background:'#fff', border:`1px solid ${MHC.divider}`, borderRadius: 12,
          fontFamily: MHC_font, fontSize: 12.5, color: MHC.slate, lineHeight: 1.5,
        }}>
          <b style={{ color: MHC.charcoal }}>The trick:</b> the section heading "For your {focus.toLowerCase()} focus" further down the page <i>is</i> the control. The descriptor under the greeting introduces it. Click anywhere on "your {focus.toLowerCase()} focus" to change it.
        </div>
        {SectionEcho}
      </div>
    );
  }

  return null;
}

Object.assign(window, { FocusControlOption });

Object.assign(window, {
  M_Current, M_Focused, D_Current, D_Focused, D_Focused_NoNav, M_FocusPicker,
  M_NoFocus, D_NoFocus, PickFocusPill, NoFocusHero, NoFocusPersistentNudge,
  FocusPill, TodayStrip, DesktopTodayStrip, ForYouCard,
  DesktopTopNav, PartnerHostBar,
});
