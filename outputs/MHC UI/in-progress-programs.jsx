// in-progress-programs.jsx — surfaces ongoing programs alongside declared focus.
// Designed to coexist with the Focused home; never overwhelms.

// ─────────────────────────────────────────────────────────────
// SAMPLE DATA — three in-progress programs
// In real life, the server returns 0..N. Client truncates.
// ─────────────────────────────────────────────────────────────
const IN_PROGRESS = [
  {
    id: 'insomnia',
    title: 'Managing Insomnia',
    provider: 'Big Health',
    weekIn: 2, weekTotal: 8,
    nextLabel: 'Tonight · 12 min',
    nextDetail: 'Wind-down session ready',
    image: 'assets/portrait-woman-laughing.png',
    tag: 'Digital therapeutic',
    focusMatch: 'Sleep',          // matches user's declared focus
    color: '#6e5dc6',
  },
  {
    id: 'a1c',
    title: 'Diabetes Prevention',
    provider: 'Solera',
    weekIn: 5, weekTotal: 16,
    nextLabel: 'Wed · 20 min',
    nextDetail: 'Lesson 5 — meal planning',
    image: 'assets/portrait-older-man.jpg',
    tag: 'Care program',
    focusMatch: 'Manage stress',  // also a stress-relevant program (chronic-condition self-management)
    color: MHCpx().aqua || '#04a0b7',
  },
  {
    id: 'burnalong',
    title: 'BurnAlong: Movement',
    provider: 'BurnAlong',
    weekIn: 3, weekTotal: 6,
    nextLabel: 'Today · 30 min',
    nextDetail: 'Strength class queued',
    image: 'assets/yoga-laptop.png',
    tag: 'Fitness',
    focusMatch: 'Move more',
    color: '#f15922',
  },
  {
    id: 'meditation',
    title: 'Headspace: Daily Calm',
    provider: 'Headspace',
    weekIn: 1, weekTotal: 4,
    nextLabel: 'Today · 8 min',
    nextDetail: 'Day 4 — noticing thoughts',
    image: 'assets/marble-aqua.jpg',
    tag: 'Mindfulness',
    focusMatch: 'Manage stress',
    color: '#04a0b7',
  },
];

function MHCpx() { return (typeof MHC !== 'undefined') ? MHC : {}; }

// ─────────────────────────────────────────────────────────────
// Atom: Program progress dots — 8 dots, completed weeks filled
// ─────────────────────────────────────────────────────────────
function ProgressDots({ done, total, color = MHC.blue }) {
  // Cap visible dots at 8 so layout stays calm regardless of program length
  const visible = Math.min(total, 8);
  const ratio = done / total;
  const filled = Math.round(ratio * visible);
  return (
    <div style={{ display:'flex', gap: 4, alignItems:'center' }}>
      {Array.from({ length: visible }).map((_, i) => (
        <div key={i} style={{
          width: 6, height: 6, borderRadius: '50%',
          background: i < filled ? color : MHC.divider,
        }}/>
      ))}
      <span style={{ fontFamily: MHC_font, fontSize: 11, color: MHC.slate, marginLeft: 6, fontWeight: 600 }}>
        {done}/{total}
      </span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Atom: ProgramRow — compact row used in lists
// ─────────────────────────────────────────────────────────────
function ProgramRow({ program, mode = 'compact', focus }) {
  const matched = program.focusMatch === focus;
  return (
    <div style={{
      display:'flex', alignItems:'stretch', gap: 0,
      background: '#fff', border: `1px solid ${MHC.divider}`, borderRadius: 12,
      overflow:'hidden', cursor:'pointer',
    }}>
      <div style={{ width: 72, flexShrink: 0, background: `url(${program.image}) center/cover` }}/>
      <div style={{ flex: 1, padding: '12px 14px', display:'flex', flexDirection:'column', gap: 6, minWidth: 0 }}>
        <div style={{ display:'flex', alignItems:'center', gap: 6 }}>
          {matched && (
            <span style={{
              fontFamily: MHC_font, fontSize: 9.5, fontWeight: 700,
              color: MHC.blue, background:'#eaf2fa',
              padding:'2px 6px', borderRadius: 4, letterSpacing: 0.4, textTransform:'uppercase',
            }}>On focus</span>
          )}
          <span style={{
            fontFamily: MHC_font, fontSize: 10.5, fontWeight: 700,
            color: MHC.slate, textTransform:'uppercase', letterSpacing: 0.5,
          }}>{program.tag}</span>
        </div>
        <div style={{
          fontFamily: MHC_font, fontSize: 14.5, fontWeight: 700, color: MHC.charcoal,
          lineHeight: 1.2, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis',
        }}>{program.title}</div>
        <ProgressDots done={program.weekIn} total={program.weekTotal} color={program.color}/>
        <div style={{ fontFamily: MHC_font, fontSize: 12, color: MHC.charcoal, marginTop: 2 }}>
          <span style={{ color: MHC.blue, fontWeight: 700 }}>{program.nextLabel}</span>
          <span style={{ color: MHC.slate }}> · {program.nextDetail}</span>
        </div>
      </div>
      <div style={{ display:'grid', placeItems:'center', padding:'0 14px' }}>
        <MHCIcon name="chevron-right" size={16} color={MHC.slate}/>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// OPTION A — Single "Continue" hero with a small "+N more" footer
// User's focus-matched program becomes the hero. Other 1–2 programs
// surface as a single line under it. Maximum visual restraint.
// ─────────────────────────────────────────────────────────────
function OptA_Hero({ focus = 'Sleep' }) {
  const matched = IN_PROGRESS.find(p => p.focusMatch === focus) || IN_PROGRESS[0];
  const others = IN_PROGRESS.filter(p => p.id !== matched.id);
  return (
    <div style={{ display:'flex', flexDirection:'column', gap: 10 }}>
      <div style={{ borderRadius: 16, overflow:'hidden', position:'relative', height: 200 }}>
        <div style={{ width:'100%', height:'100%', background:`url(${matched.image}) center/cover` }}/>
        <div style={{ position:'absolute', inset: 0, background:'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.62))' }}/>
        <div style={{ position:'absolute', left: 16, bottom: 14, right: 16, color:'#fff' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 0.6, textTransform:'uppercase', color:'#ffd6c2' }}>
            Continue · week {matched.weekIn} of {matched.weekTotal}
          </div>
          <div style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.15, marginTop: 4 }}>{matched.title}</div>
          <div style={{ fontSize: 12.5, opacity: 0.92, marginTop: 2 }}>{matched.nextLabel} · {matched.nextDetail}</div>
        </div>
      </div>
      {others.length > 0 && (
        <div style={{
          display:'flex', alignItems:'center', justifyContent:'space-between', gap: 10,
          padding: '10px 14px', borderRadius: 12,
          background:'#fff', border:`1px solid ${MHC.divider}`,
        }}>
          <div style={{ display:'flex', alignItems:'center', gap: 8, minWidth: 0 }}>
            <div style={{ display:'flex' }}>
              {others.slice(0, 2).map((p, i) => (
                <div key={p.id} style={{
                  width: 26, height: 26, borderRadius:'50%',
                  background:`url(${p.image}) center/cover`,
                  border:'2px solid #fff', marginLeft: i === 0 ? 0 : -8,
                }}/>
              ))}
            </div>
            <div style={{ fontFamily: MHC_font, fontSize: 12.5, color: MHC.charcoal, lineHeight: 1.3, minWidth: 0 }}>
              <b>{others.length} other program{others.length > 1 ? 's' : ''} in progress</b>
              <span style={{ color: MHC.slate }}> · {others[0].title.split(':')[0]}{others.length > 1 ? `, ${others[1].title.split(':')[0]}` : ''}</span>
            </div>
          </div>
          <div style={{ fontFamily: MHC_font, fontSize: 12.5, color: MHC.blue, fontWeight: 700, whiteSpace:'nowrap' }}>
            See all
          </div>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// OPTION B — Dedicated "Pick up where you left off" rail
// Hero stays focus-driven (or generic). A tight rail of program cards
// sits immediately under the hero. Max 3 cards. No carousel.
// ─────────────────────────────────────────────────────────────
function OptB_Rail({ focus = 'Sleep' }) {
  // Sort: focus-matched first, then by next-up freshness (assumed order in data)
  const sorted = [...IN_PROGRESS].sort((a, b) => (b.focusMatch === focus ? 1 : 0) - (a.focusMatch === focus ? 1 : 0));
  const visible = sorted.slice(0, 3);
  const overflow = sorted.length - visible.length;
  return (
    <div>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom: 10 }}>
        <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 15, color: MHC.charcoal }}>Pick up where you left off</div>
        <div style={{ fontFamily: MHC_font, fontSize: 12, color: MHC.blue, fontWeight: 600 }}>
          {overflow > 0 ? `See all (${IN_PROGRESS.length})` : 'See all'}
        </div>
      </div>
      <div style={{ display:'grid', gap: 10 }}>
        {visible.map(p => <ProgramRow key={p.id} program={p} focus={focus}/>)}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// OPTION C — Hero + ribbon of mini-cards beneath
// Single hero (focus-matched program). Three thumbnail mini-cards
// in a tight row beneath, each showing title + progress dots only.
// ─────────────────────────────────────────────────────────────
function OptC_HeroPlusRibbon({ focus = 'Sleep' }) {
  const matched = IN_PROGRESS.find(p => p.focusMatch === focus) || IN_PROGRESS[0];
  const others = IN_PROGRESS.filter(p => p.id !== matched.id).slice(0, 2);
  return (
    <div style={{ display:'flex', flexDirection:'column', gap: 10 }}>
      <div style={{ borderRadius: 16, overflow:'hidden', position:'relative', height: 200 }}>
        <div style={{ width:'100%', height:'100%', background:`url(${matched.image}) center/cover` }}/>
        <div style={{ position:'absolute', inset: 0, background:'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.62))' }}/>
        <div style={{ position:'absolute', left: 16, bottom: 14, right: 16, color:'#fff' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 0.6, textTransform:'uppercase', color:'#ffd6c2' }}>
            Continue · week {matched.weekIn} of {matched.weekTotal}
          </div>
          <div style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.15, marginTop: 4 }}>{matched.title}</div>
          <div style={{ fontSize: 12.5, opacity: 0.92, marginTop: 2 }}>{matched.nextLabel} · {matched.nextDetail}</div>
        </div>
      </div>
      <div style={{ display:'grid', gridTemplateColumns: `repeat(${others.length + 1}, 1fr)`, gap: 8 }}>
        {others.map(p => (
          <div key={p.id} style={{
            display:'flex', flexDirection:'column', gap: 6,
            padding: 10, background:'#fff',
            border:`1px solid ${MHC.divider}`, borderRadius: 12, cursor:'pointer',
          }}>
            <div style={{
              height: 50, borderRadius: 8,
              background:`url(${p.image}) center/cover`,
            }}/>
            <div style={{
              fontFamily: MHC_font, fontSize: 12, fontWeight: 700, color: MHC.charcoal,
              lineHeight: 1.2, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis',
            }}>{p.title}</div>
            <ProgressDots done={p.weekIn} total={p.weekTotal} color={p.color}/>
          </div>
        ))}
        <div style={{
          display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap: 4,
          padding: 10, background:'#fafbfc',
          border:`1px dashed ${MHC.divider}`, borderRadius: 12, cursor:'pointer',
        }}>
          <MHCIcon name="arrow-right" size={18} color={MHC.blue}/>
          <div style={{ fontFamily: MHC_font, fontSize: 11, fontWeight: 700, color: MHC.blue, textAlign:'center', lineHeight: 1.25 }}>
            See all<br/>programs
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// OPTION D — Folded "Today's plan" stack
// Treats programs like calendar items. One primary "next up" callout,
// secondary items appear as a stacked list with time-of-day cues.
// Programs are presented as a *plan*, not a *menu*.
// ─────────────────────────────────────────────────────────────
function OptD_TodayPlan({ focus = 'Sleep' }) {
  // Re-shape into a chronological plan, deduping so the same program never appears twice.
  // The focus-matched program is the primary "Tonight" slot; secondaries fill from the rest.
  const primary = IN_PROGRESS.find(p => p.focusMatch === focus) || IN_PROGRESS[0];
  const secondaries = IN_PROGRESS.filter(p => p.id !== primary.id).slice(0, 2);
  const timeLabels = ['Today', 'Wed'];
  const plan = [
    { time: 'Tonight', program: primary, primary: true },
    ...secondaries.map((program, i) => ({ time: timeLabels[i] || 'Later', program, primary: false })),
  ].sort((a, b) => (b.primary ? 1 : 0) - (a.primary ? 1 : 0));
  return (
    <div>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom: 10 }}>
        <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 15, color: MHC.charcoal }}>Your plan this week</div>
        <div style={{ fontFamily: MHC_font, fontSize: 12, color: MHC.blue, fontWeight: 600 }}>See all</div>
      </div>
      <div style={{ display:'grid', gap: 8 }}>
        {plan.map((item, i) => {
          const p = item.program;
          if (!p) return null;
          return (
            <div key={p.id} style={{
              display:'flex', alignItems:'stretch', gap: 0, cursor:'pointer',
              background: item.primary ? '#eaf2fa' : '#fff',
              border: `1px solid ${item.primary ? '#c7dcef' : MHC.divider}`,
              borderRadius: 12, overflow:'hidden',
            }}>
              <div style={{
                width: 64, flexShrink: 0,
                background: item.primary ? MHC.blue : '#f6f4ef',
                color: item.primary ? '#fff' : MHC.charcoal,
                display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding: 8,
              }}>
                <div style={{ fontFamily: MHC_font, fontSize: 10.5, fontWeight: 700, letterSpacing: 0.5, textTransform:'uppercase', opacity: item.primary ? 0.85 : 0.65 }}>
                  {item.time === 'Today' ? 'Today' : item.time === 'Tonight' ? 'Tonight' : item.time}
                </div>
                <div style={{ fontFamily: MHC_font, fontSize: 13, fontWeight: 700, marginTop: 2 }}>
                  {p.nextLabel.split(' · ')[1] || ''}
                </div>
              </div>
              <div style={{ flex:1, padding: '12px 14px', display:'flex', flexDirection:'column', gap: 4, minWidth: 0 }}>
                <div style={{
                  fontFamily: MHC_font, fontSize: 14, fontWeight: 700,
                  color: item.primary ? MHC.blueDark : MHC.charcoal,
                  whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis',
                }}>{p.title}</div>
                <div style={{ fontFamily: MHC_font, fontSize: 12, color: MHC.slate }}>
                  {p.nextDetail} · week {p.weekIn} of {p.weekTotal}
                </div>
                {item.primary && (
                  <div style={{ marginTop: 6 }}>
                    <button style={{
                      background: MHC.blue, color:'#fff',
                      border:0, borderRadius: 999,
                      padding:'6px 14px', fontFamily: MHC_font, fontWeight: 700, fontSize: 12, cursor:'pointer',
                    }}>Continue →</button>
                  </div>
                )}
              </div>
              <div style={{ display:'grid', placeItems:'center', padding:'0 12px' }}>
                <MHCIcon name="chevron-right" size={16} color={MHC.slate}/>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// FRAME COMPONENT — wraps an option inside a phone-shape preview
// with the standard greeting + focus pill above so options read in context.
// ─────────────────────────────────────────────────────────────
function ProgramOptionFrame({ children, focus = 'Sleep', label }) {
  return (
    <div style={{
      width: 390, fontFamily: MHC_font, background:'#fff',
      display:'flex', flexDirection:'column', minHeight: 560,
    }}>
      <MobileTopBar/>
      <div style={{ padding:'16px 18px 18px', display:'flex', flexDirection:'column', gap: 16 }}>
        <div>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
            <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 22, color: MHC.charcoal }}>Good morning, Davinder</div>
            <UtilityChips size={32} iconSize={15}/>
          </div>
          <div style={{ marginTop: 8 }}>
            <FocusPill focus={focus}/>
          </div>
        </div>
        {children}
        {/* short hint of what comes next */}
        <div style={{
          fontFamily: MHC_font, fontSize: 11.5, color: MHC.slate,
          padding: '8px 0 0', borderTop:`1px dashed ${MHC.divider}`, marginTop: 4,
          letterSpacing: 0.4, textTransform:'uppercase', fontWeight: 700,
        }}>↓ Today strip · Insights · For your {focus.toLowerCase()} focus</div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// DESKTOP VARIANTS — Option B rail and Option A hero + footer rendered at desktop scale
// (only the two we'd actually ship are shown desktop-wide)
// ─────────────────────────────────────────────────────────────

// Desktop: Option B — dedicated rail (3 wide)
function OptB_Rail_Desktop({ focus = 'Sleep' }) {
  const sorted = [...IN_PROGRESS].sort((a, b) => (b.focusMatch === focus ? 1 : 0) - (a.focusMatch === focus ? 1 : 0));
  return (
    <div>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom: 14 }}>
        <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 20, color: MHC.charcoal }}>Pick up where you left off</div>
        <div style={{ fontFamily: MHC_font, fontSize: 13, color: MHC.blue, fontWeight: 600 }}>See all programs →</div>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap: 16 }}>
        {sorted.slice(0, 3).map(p => {
          const matched = p.focusMatch === focus;
          return (
            <div key={p.id} style={{
              background:'#fff', border:`1px solid ${MHC.divider}`, borderRadius: 14, overflow:'hidden', cursor:'pointer',
              display:'flex', flexDirection:'column',
            }}>
              <div style={{
                height: 120, background:`url(${p.image}) center/cover`, position:'relative',
              }}>
                {matched && (
                  <div style={{
                    position:'absolute', top: 10, left: 10,
                    background: MHC.blue, color:'#fff',
                    fontFamily: MHC_font, fontSize: 10, fontWeight: 700,
                    padding:'3px 8px', borderRadius: 999, letterSpacing: 0.5, textTransform:'uppercase',
                  }}>On focus</div>
                )}
              </div>
              <div style={{ padding: 16, display:'flex', flexDirection:'column', gap: 8 }}>
                <div style={{ fontFamily: MHC_font, fontSize: 11, fontWeight: 700, color: MHC.slate, textTransform:'uppercase', letterSpacing: 0.5 }}>
                  {p.tag} · {p.provider}
                </div>
                <div style={{ fontFamily: MHC_font, fontSize: 17, fontWeight: 700, color: MHC.charcoal, lineHeight: 1.2 }}>{p.title}</div>
                <ProgressDots done={p.weekIn} total={p.weekTotal} color={p.color}/>
                <div style={{
                  marginTop: 4, padding:'10px 12px',
                  background:'#fafbfc', borderRadius: 10,
                  display:'flex', alignItems:'center', justifyContent:'space-between', gap: 10,
                }}>
                  <div>
                    <div style={{ fontFamily: MHC_font, fontSize: 11, color: MHC.slate, fontWeight: 600 }}>Up next</div>
                    <div style={{ fontFamily: MHC_font, fontSize: 13, color: MHC.charcoal, fontWeight: 700, marginTop: 2 }}>{p.nextLabel}</div>
                    <div style={{ fontFamily: MHC_font, fontSize: 12, color: MHC.slate }}>{p.nextDetail}</div>
                  </div>
                  <button style={{
                    background: MHC.blue, color:'#fff', border:0, borderRadius: 999,
                    padding:'8px 14px', fontFamily: MHC_font, fontWeight: 700, fontSize: 12.5, cursor:'pointer', whiteSpace:'nowrap',
                  }}>Continue</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// FULL-PAGE INTEGRATIONS — Option B slotted into the Focused home
// Mobile and desktop. Hero pitches a focus-aligned habit/article when a
// focus-matched program is already in the rail (avoid double-feature).
// ─────────────────────────────────────────────────────────────

// Per-focus hero pitches when a focus-matched program is already in the rail.
// Each is a habit/article/practice — explicitly NOT another program.
const FOCUS_HERO_NONPROGRAM = {
  'Sleep': {
    eyebrow: "Tonight's wind-down",
    title: "10-minute breath practice",
    body: "An audio-guided breath exercise to settle the nervous system before bed. Pairs well with your insomnia program.",
    cta: "Start the practice",
    image: "assets/marble-aqua.jpg",
    tag: "Habit",
  },
  'Move more': {
    eyebrow: "Today's micro-goal",
    title: "Hit 7,500 steps before 8pm",
    body: "Two short walks beats one long one. We'll send a gentle reminder if you're behind by 4pm.",
    cta: "Track today",
    image: "assets/runner-sunset.png",
    tag: "Habit",
  },
  'Manage stress': {
    eyebrow: "5-minute reset",
    title: "Box breathing, twice today",
    body: "Used by Navy SEALs and ER nurses. Two short rounds — once mid-morning, once before the afternoon dip.",
    cta: "Try the reset",
    image: "assets/marble-aqua.jpg",
    tag: "Habit",
  },
};

// MOBILE — Option B integrated into Focused home
function M_Focused_WithPrograms({ focus = 'Sleep', linked = true, insightsState = 'refreshable' }) {
  const sorted = [...IN_PROGRESS].sort((a, b) => (b.focusMatch === focus ? 1 : 0) - (a.focusMatch === focus ? 1 : 0));
  const visiblePrograms = sorted.slice(0, 3);
  const focusMatchInRail = visiblePrograms.some(p => p.focusMatch === focus);

  // Hero strategy: if focus-matched program is already in the rail, pitch a habit instead.
  // Otherwise pitch the focus-matched program (today's behavior).
  const focusedProgram = sorted.find(p => p.focusMatch === focus);
  const useHabitHero = focusMatchInRail && focusedProgram;

  // Focus-filtered for-you cards (one less since hero is a habit)
  const focusItems = {
    'Sleep': [
      { title: 'Wind-down playlist', subtitle: '40 min · ambient', image: 'assets/yoga-laptop.png', tag:'Audio' },
      { title: 'Sleep hygiene basics', subtitle: 'Read · 6 min', image: 'assets/marble-aqua.jpg', tag:'Article' },
    ],
    'Move more': [
      { title: 'Beginner strength', subtitle: '3 sessions/week · 20 min', image: 'assets/stretch-woman.jpg', tag:'Program' },
      { title: 'Walking meeting tips', subtitle: 'Read · 4 min', image: 'assets/portrait-man-smiling.png', tag:'Article' },
    ],
    'Manage stress': [
      { title: 'Breathwork basics', subtitle: '3 short practices', image: 'assets/portrait-woman-laughing.png', tag:'Habit' },
      { title: 'Stress at work: read', subtitle: 'Article · 5 min', image: 'assets/portrait-man-smiling.png', tag:'Article' },
    ],
  }[focus] || [];

  const hero = useHabitHero ? FOCUS_HERO_NONPROGRAM[focus] : null;

  return (
    <div style={{ width: 390, background:'#fff', fontFamily: MHC_font, display:'flex', flexDirection:'column', minHeight: 1700, position:'relative', overflow:'hidden' }}>
      <MobileTopBar/>
      <div style={{ flex:1, padding: '18px 20px 90px', display:'flex', flexDirection:'column', gap: 18 }}>

        {/* Greeting + focus pill */}
        <div>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
            <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 24, color: MHC.charcoal }}>Good morning, Davinder</div>
            <UtilityChips size={34} iconSize={16}/>
          </div>
          <div style={{ marginTop: 8 }}>
            <FocusPill focus={focus}/>
          </div>
        </div>

        {/* Hero — habit (because focus-matched program is in the rail) */}
        {hero ? (
          <div style={{ borderRadius: 16, overflow:'hidden', position:'relative', height: 200 }}>
            <div style={{ width:'100%', height:'100%', background:`url(${hero.image}) center/cover` }}/>
            <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(0,0,0,0.7))' }}/>
            <div style={{ position:'absolute', left: 16, bottom: 14, right: 16, color:'#fff' }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 0.6, textTransform:'uppercase', color:'#ffd6c2' }}>{hero.eyebrow}</div>
              <div style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.15, marginTop: 4 }}>{hero.title}</div>
              <div style={{ fontSize: 12.5, opacity: 0.92, marginTop: 4, lineHeight: 1.45 }}>{hero.body}</div>
            </div>
          </div>
        ) : (
          // fallback: focus program hero (when no focus-matched program is in flight)
          <div style={{ borderRadius: 16, overflow:'hidden', position:'relative', height: 200 }}>
            <div style={{ width:'100%', height:'100%', background:`url(assets/portrait-woman-laughing.png) center/cover` }}/>
            <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,0.6))' }}/>
            <div style={{ position:'absolute', left: 16, bottom: 14, right: 16, color:'#fff' }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 0.6, textTransform:'uppercase', color: '#ffd6c2' }}>Recommended for you</div>
              <div style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.15 }}>Start a {focus.toLowerCase()} program</div>
              <div style={{ fontSize: 12.5, opacity: 0.92, marginTop: 2 }}>3 options · 8 weeks each</div>
            </div>
          </div>
        )}

        {/* Pick up where you left off — Option B rail */}
        <OptB_Rail focus={focus}/>

        {/* Today strip */}
        <div>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: 8 }}>
            <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 15, color: MHC.charcoal }}>Today</div>
            <div style={{ fontFamily: MHC_font, fontSize: 12, color: MHC.blue, fontWeight: 600 }}>View all</div>
          </div>
          <TodayStrip linked={linked}/>
        </div>

        {/* Insights */}
        <InsightsBlock state={linked ? insightsState : 'hidden'}/>

        {/* Focus-filtered for-you */}
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

// DESKTOP — Option B integrated into Focused home (left-nav variant)
function D_Focused_WithPrograms({ focus = 'Sleep', linked = true, insightsState = 'refreshable' }) {
  const sorted = [...IN_PROGRESS].sort((a, b) => (b.focusMatch === focus ? 1 : 0) - (a.focusMatch === focus ? 1 : 0));
  const visiblePrograms = sorted.slice(0, 3);
  const focusMatchInRail = visiblePrograms.some(p => p.focusMatch === focus);
  const focusedProgram = sorted.find(p => p.focusMatch === focus);
  const useHabitHero = focusMatchInRail && focusedProgram;
  const hero = useHabitHero ? FOCUS_HERO_NONPROGRAM[focus] : null;

  const focusItems = {
    'Sleep': [
      { title: 'Wind-down playlist', subtitle: '40 min · ambient · audio', image: 'assets/yoga-laptop.png', tag:'Audio' },
      { title: 'Sleep hygiene basics', subtitle: 'Read · 6 min', image: 'assets/marble-aqua.jpg', tag:'Article' },
      { title: 'Caffeine cutoff: when to stop', subtitle: 'Read · 4 min', image: 'assets/portrait-man-smiling.png', tag:'Article' },
    ],
    'Move more': [
      { title: 'Beginner strength', subtitle: '3 sessions/week · 20 min', image: 'assets/stretch-woman.jpg', tag:'Program' },
      { title: 'Walking meetings: a guide', subtitle: 'Read · 4 min', image: 'assets/portrait-man-smiling.png', tag:'Article' },
      { title: 'Stretches for desk workers', subtitle: '5 min · video', image: 'assets/yoga-laptop.png', tag:'Practice' },
    ],
    'Manage stress': [
      { title: 'Breathwork basics', subtitle: '3 short practices', image: 'assets/portrait-woman-laughing.png', tag:'Habit' },
      { title: 'Stress at work: read', subtitle: 'Article · 5 min', image: 'assets/portrait-man-smiling.png', tag:'Article' },
      { title: '5-minute body scan', subtitle: 'Audio · 5 min', image: 'assets/marble-aqua.jpg', tag:'Audio' },
    ],
  }[focus] || [];

  return (
    <div style={{ width: 1280, background:'#fafbfc', fontFamily: MHC_font, display:'flex', minHeight: 1900, position:'relative', overflow:'hidden' }}>
      <DesktopSidebar active="Home"/>
      <div style={{ flex:1, display:'flex', flexDirection:'column' }}>
        <DesktopTopBar/>
        <div style={{ padding: '28px 40px 40px', display:'flex', flexDirection:'column', gap: 26 }}>

          {/* Greeting + focus pill */}
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
            <div>
              <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 28, color: MHC.charcoal }}>Good morning, Davinder</div>
              <div style={{ fontFamily: MHC_font, fontSize: 14, color: MHC.slate, marginTop: 4 }}>Here's what's waiting for you today.</div>
            </div>
            <div style={{ display:'flex', alignItems:'center', gap: 16 }}>
              <FocusPill focus={focus}/>
              <UtilityChips size={36} iconSize={16}/>
            </div>
          </div>

          {/* Hero — habit (because focus-matched program is in the rail) */}
          {hero ? (
            <div style={{ borderRadius: 18, overflow:'hidden', position:'relative', height: 320 }}>
              <div style={{ width:'100%', height:'100%', background:`url(${hero.image}) center/cover` }}/>
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(90deg, rgba(15,73,127,0.88) 0%, rgba(15,73,127,0.55) 50%, rgba(15,73,127,0) 85%)' }}/>
              <div style={{ position:'absolute', left: 36, bottom: 36, right: '40%', color:'#fff' }}>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 0.8, textTransform:'uppercase', color: '#f8a88a' }}>{hero.eyebrow}</div>
                <div style={{ fontSize: 36, fontWeight: 700, lineHeight: 1.1, marginTop: 8 }}>{hero.title}</div>
                <div style={{ fontSize: 15, opacity: 0.95, marginTop: 8, lineHeight: 1.5 }}>{hero.body}</div>
                <div style={{ marginTop: 18 }}>
                  <PillBtn variant="primary" size="lg" style={{ background:'#fff', color: MHC.blue }}>{hero.cta}</PillBtn>
                </div>
              </div>
            </div>
          ) : (
            <div style={{ borderRadius: 18, overflow:'hidden', position:'relative', height: 320, background: MHC.blue, color:'#fff', padding:'40px', display:'flex', flexDirection:'column', justifyContent:'center' }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 0.8, textTransform:'uppercase', color: '#f8a88a' }}>Recommended for you</div>
              <div style={{ fontSize: 36, fontWeight: 700, lineHeight: 1.1, marginTop: 8 }}>Start a {focus.toLowerCase()} program</div>
              <div style={{ fontSize: 15, opacity: 0.95, marginTop: 8, maxWidth: 540 }}>3 options · 8 weeks each. Most users see results by week 3.</div>
              <div style={{ marginTop: 18 }}><PillBtn size="lg" style={{ background:'#fff', color: MHC.blue }}>Browse programs</PillBtn></div>
            </div>
          )}

          {/* Pick up where you left off — Option B rail (desktop) */}
          <OptB_Rail_Desktop focus={focus}/>

          {/* Today strip */}
          <div>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom: 12 }}>
              <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: 20, color: MHC.charcoal }}>Today</div>
              <div style={{ fontFamily: MHC_font, fontSize: 13, color: MHC.blue, fontWeight: 600 }}>View all activity →</div>
            </div>
            <DesktopTodayStrip linked={linked}/>
          </div>

          {/* Insights */}
          <InsightsBlock state={linked ? insightsState : 'hidden'} desktop={true}/>

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

Object.assign(window, {
  ProgressDots, ProgramRow, IN_PROGRESS,
  OptA_Hero, OptB_Rail, OptC_HeroPlusRibbon, OptD_TodayPlan,
  ProgramOptionFrame, OptB_Rail_Desktop,
  M_Focused_WithPrograms, D_Focused_WithPrograms,
});
