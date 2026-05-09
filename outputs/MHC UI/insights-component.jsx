// insights-component.jsx — AI Insights with 4 display states.
//
// State logic (server-driven; client just renders):
//   'ready'        — enough fresh data, no insight generated yet today.   Shows: prompt + "Get insight" button
//   'refreshable'  — insight exists, but new data could change it.        Shows: insight text + "Refresh" button
//   'read-only'    — insight exists, no new data since.                   Shows: insight text only
//   'hidden'       — not enough data.                                     Renders nothing.
//
// SYSTEM CONSTRAINT: Action buttons (Get insight, Refresh, etc.) cannot live
// inside an HTML block. They must be their own element, rendered outside the
// bordered card. Navigation buttons (links to other pages) CAN live inside.
// So the layout is: [bordered card with insight content]  →  [standalone action button below].

function InsightsBlock({ state = 'ready', text, freshSince = '2h ago', density = 'regular', desktop = false, onAction }) {
  if (state === 'hidden') return null;

  const compact = density === 'compact';
  const padX = desktop ? 22 : 18;
  const padY = desktop ? 20 : compact ? 16 : 18;

  // Header is shared across all visible states (lives inside the card)
  const Header = (
    <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom: 10 }}>
      <div style={{ display:'flex', alignItems:'center', gap: 8 }}>
        <div style={{
          width: 26, height: 26, borderRadius: '50%',
          background: `linear-gradient(135deg, ${MHC.aqua} 0%, ${MHC.blue} 100%)`,
          display:'grid', placeItems:'center', flexShrink: 0,
        }}>
          <MHCIcon name="sparkles" size={14} color="#fff" stroke={2.4}/>
        </div>
        <div>
          <div style={{ fontFamily: MHC_font, fontWeight: 700, fontSize: desktop ? 16 : 15, color: MHC.charcoal, lineHeight: 1.1 }}>
            Your Insight
          </div>
          {state === 'refreshable' && (
            <div style={{ fontFamily: MHC_font, fontSize: 11, color: MHC.slate, marginTop: 2 }}>
              New data available · last generated {freshSince}
            </div>
          )}
          {state === 'read-only' && (
            <div style={{ fontFamily: MHC_font, fontSize: 11, color: MHC.slate, marginTop: 2 }}>
              Generated {freshSince}
            </div>
          )}
        </div>
      </div>
      {state !== 'ready' && (
        <div style={{ fontFamily: MHC_font, fontSize: 11, color: MHC.slate, fontWeight: 600,
          padding: '3px 8px', borderRadius: 999, background: MHC.cloud, letterSpacing: 0.2 }}>AI</div>
      )}
    </div>
  );

  // STATE 1 — READY: prompt inside card, "Get insight" action button OUTSIDE card.
  if (state === 'ready') {
    return (
      <div>
        <div style={{
          background: '#fff', border: `1px solid ${MHC.divider}`, borderRadius: 14,
          padding: `${padY}px ${padX}px`,
        }}>
          {Header}
          <div style={{
            fontFamily: MHC_font, fontSize: desktop ? 14 : 13.5, color: MHC.charcoal, lineHeight: 1.5,
          }}>
            You've logged a full day of data. Ready for a personalized take on it?
          </div>
        </div>
        {/* Action button — standalone element outside the card */}
        <div style={{ marginTop: 10, display:'flex', justifyContent: desktop ? 'flex-start' : 'stretch' }}>
          <PillBtn size={desktop ? 'sm' : 'md'} onClick={onAction} style={desktop ? undefined : { width:'100%', justifyContent:'center' }}>
            <MHCIcon name="sparkles" size={13} color="#fff" stroke={2.4}/>
            <span style={{ marginLeft: 4 }}>Get insight</span>
          </PillBtn>
        </div>
      </div>
    );
  }

  // STATE 2 — REFRESHABLE: insight inside card, "Refresh" action button OUTSIDE card.
  if (state === 'refreshable') {
    return (
      <div>
        <div style={{
          background: 'linear-gradient(180deg, #f3f9fb 0%, #ffffff 100%)',
          border: `1px solid #cfe6ec`,
          borderRadius: 14,
          padding: `${padY}px ${padX}px`,
        }}>
          {Header}
          <div style={{
            fontFamily: MHC_font, fontSize: desktop ? 14 : 13.5, color: MHC.charcoal, lineHeight: 1.5,
          }}>
            {text || 'Davinder, you logged 5,635 steps today — solid base to build from. A relaxed 10-minute after-dinner walk would add ~1,200 steps and cap your day.'}
          </div>
        </div>
        {/* Action button — standalone element outside the card */}
        <div style={{ marginTop: 10, display:'flex', alignItems:'center', gap: 10, flexWrap:'wrap' }}>
          <PillBtn size="sm" variant="outline" onClick={onAction}>
            <MHCIcon name="sparkles" size={12} color={MHC.blue} stroke={2.4}/>
            <span style={{ marginLeft: 4 }}>Refresh insight</span>
          </PillBtn>
          <span style={{ fontFamily: MHC_font, fontSize: 11.5, color: MHC.slate }}>
            Sleep + steps changed since {freshSince}
          </span>
        </div>
      </div>
    );
  }

  // STATE 3 — READ-ONLY: just the card. No action button.
  return (
    <div style={{
      background: '#fff',
      border: `1px solid ${MHC.divider}`,
      borderRadius: 14,
      padding: `${padY}px ${padX}px`,
    }}>
      {Header}
      <div style={{
        fontFamily: MHC_font, fontSize: desktop ? 14 : 13.5, color: MHC.charcoal, lineHeight: 1.5,
      }}>
        {text || 'Davinder, you logged 5,635 steps today — solid base to build from. A relaxed 10-minute after-dinner walk would add ~1,200 steps and cap your day.'}
      </div>
    </div>
  );
}

Object.assign(window, { InsightsBlock });
