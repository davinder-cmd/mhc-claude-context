import React, { useState, useEffect, useRef } from "react";

// ══════════════════════════════════════════════════════════════════════
// THEME — Back Care (Tier 1): Warmer, more playful than Tier 3
// ══════════════════════════════════════════════════════════════════════
const colors = {
  warmWhite: "#FAF7F2",
  softCream: "#F5F0E8",
  deepCharcoal: "#2C2C2C",
  warmGray: "#6B6560",
  softTeal: "#5A8F8F",
  mutedSage: "#7A9E7E",
  gentleAmber: "#D4A574",
  paleLavender: "#B8A9C9",
  earthGreen: "#6B8F71",
  done: "#7A9E7E",
  active: "#5A8F8F",
  upcoming: "#D4CFC7",
  cardBorder: "#E8E4DD",
};

// ══════════════════════════════════════════════════════════════════════
// DATA — Lower Back Care S1M1 Content (from DTx raw content)
// ══════════════════════════════════════════════════════════════════════
const SESSIONS = [
  { id: "s1", number: 1, title: "Getting Started", description: "Learn contributing factors for lower back pain, assess your pain and set goals." },
  { id: "s2", number: 2, title: "Sitting Posture", description: "Practice the best sitting posture to reduce and prevent pain." },
  { id: "s3", number: 3, title: "Standing and Lifting", description: "Learn standing posture and lifting techniques that reduce lower back pain." },
  { id: "s4", number: 4, title: "Backward Bending", description: "Learn to reduce lower back discomfort with backward bending exercises." },
  { id: "s5", number: 5, title: "Forward Bending", description: "Practice forward bending exercises to improve your range of motion." },
  { id: "s6", number: 6, title: "Supporting Stretches", description: "Stretch key muscle groups to support your lower back." },
  { id: "s7", number: 7, title: "Strengthening Exercises", description: "Build strength to protect your lower back long-term." },
  { id: "s8", number: 8, title: "Maintaining Back Health", description: "Reassess your goals, track progress, and plan for moving forward." },
];

const CONTENT_CARDS = [
  "You are not alone. Back pain is very common. According to the World Health Organization, 619 million people — about 1 in 13 people — experienced lower back pain in 2020. Cases are expected to increase to 843 million by 2050.",
  "This program can help most people with lower back pain and stiffness, especially if this is your first time experiencing it, or if you have occasional or recurring pain.",
  "This program may be particularly helpful if: there are times when your pain lessens or goes away, your movement is limited in certain directions, or your stiffness feels worse in the morning but improves after moving.",
  "Most back pain occurs in the lower back. Between the bones in your spine, there are soft tissues made of cartilage and ligaments. Pain and stiffness happen when these tissues are overstretched or forced out of place.",
  "A common and easily corrected cause of lower back pain is incorrect posture while standing, sitting, bending and lifting. The good news: the exercises in this program can reduce and even eliminate your back discomfort.",
];

const HEALTHCARE_CARD = "Consult with your healthcare provider before beginning this program, especially if your pain is intense and constant, you can't lie flat on your stomach or stand upright, your symptoms worsen, or you have numbness, tingling or weakness in your legs.";

const CHECKIN_QUESTIONS = [
  {
    id: "q1",
    text: "Which of these sounds most like your back pain experience?",
    options: [
      "Pain that comes and goes",
      "Stiffness mostly in the morning",
      "Constant low-level discomfort",
      "Sharp pain with certain movements",
    ],
  },
  {
    id: "q2",
    text: "What are you most hoping to get from this program?",
    options: [
      "Reduce my current pain",
      "Prevent future pain",
      "Increase my range of motion",
      "Get back to an activity I enjoy",
    ],
  },
];

// ── Tier 1 Companion: Exploratory, Socratic, playful ──────────────
const COMPANION_PROMPT = "You just learned a lot about what's actually going on in your lower back. What's one thing from that you'd like to try applying this week?";

const BRANCHES = [
  {
    id: "a",
    triggers: ["posture", "sitting", "sit", "desk", "chair", "computer", "office", "slouch", "slouching"],
    response: "Posture is a great place to start — especially if you spend time at a desk. Even small shifts in how you sit can make a real difference over a few days. We'll get into specific sitting techniques in Session 2.",
  },
  {
    id: "b",
    triggers: ["lift", "lifting", "bend", "bending", "pick up", "carry", "heavy"],
    response: "Good instinct — lifting technique is one of the highest-impact changes you can make. We'll cover the exact mechanics in Session 3. For now, just notice how you're bending when you pick things up.",
  },
  {
    id: "c",
    triggers: ["stretch", "exercise", "move", "movement", "walking", "walk", "active", "morning", "stiff", "stiffness"],
    response: "Moving more intentionally is one of the best things you can do for your back. This program will build you a set of specific stretches and exercises — and you'll feel the difference faster than you might expect.",
  },
  {
    id: "d",
    triggers: ["pain", "hurt", "ache", "sore", "discomfort", "reduce", "fix", "help", "relief"],
    response: "That's exactly what this program is designed for. The approach is evidence-based — most people see real improvement. The next few sessions will give you concrete techniques you can use the same day.",
  },
  {
    id: "e",
    triggers: ["not sure", "don't know", "idk", "dunno", "maybe", "hmm", "everything"],
    response: "Totally fair — you just got a lot of information. The beauty of this program is you'll build skills one at a time. By Session 3, you'll already have posture, sitting, standing, and lifting techniques in your toolkit.",
  },
  {
    id: "f",
    triggers: ["ok", "sure", "yeah", "yep", "cool", "fine", "k", "next", "nah"],
    response: "No pressure to have it figured out yet. You showed up — that's the first step. The next session will give you something concrete to practice right away.",
  },
];

const FALLBACK = "That's a great start. As you move through the program, you'll build a whole toolkit of techniques. The next session focuses on sitting posture — something you can practice today.";

// ── Tier 1: No escalation trigger needed, but we keep a light safety net
// for anyone mentioning severe symptoms the program doesn't cover ──
const SAFETY_TRIGGERS = ["numbness", "tingling", "weakness in", "can't stand", "can't walk", "severe", "emergency", "intense pain"];
const SAFETY_RESPONSE = "That sounds like it might be beyond what this program covers on its own. It would be a good idea to check in with your healthcare provider about those symptoms before continuing with the exercises. They can help you figure out the best path forward.";

// ══════════════════════════════════════════════════════════════════════
// UTILS
// ══════════════════════════════════════════════════════════════════════
function detectSafety(input) {
  const n = input.toLowerCase().trim();
  return SAFETY_TRIGGERS.some((kw) => n.includes(kw));
}

function matchBranch(input) {
  const n = input.toLowerCase().trim();
  if (detectSafety(input)) return { response: SAFETY_RESPONSE, isSafety: true };
  let best = null, bestScore = 0;
  for (const b of BRANCHES) {
    let score = 0;
    for (const t of b.triggers) { if (n.includes(t)) score += t.length; }
    if (score > bestScore) { bestScore = score; best = b; }
  }
  return { response: best ? best.response : FALLBACK, isSafety: false };
}

// ══════════════════════════════════════════════════════════════════════
// PHONE FRAME
// ══════════════════════════════════════════════════════════════════════
function PhoneFrame({ children }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", background: "#E8E4DD", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", padding: 20 }}>
      <div style={{ width: 390, height: 844, background: colors.warmWhite, borderRadius: 40, overflow: "hidden", boxShadow: "0 25px 80px rgba(0,0,0,0.15)", position: "relative", display: "flex", flexDirection: "column" }}>
        <div style={{ height: 54, display: "flex", alignItems: "flex-end", justifyContent: "center", paddingBottom: 8, background: colors.warmWhite }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: colors.deepCharcoal }}>9:41</span>
        </div>
        {children}
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════
// SCREEN: JOURNEY MAP
// ══════════════════════════════════════════════════════════════════════
function JourneyMapScreen({ onStartModule, sessionStates }) {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <div style={{ padding: "16px 24px 12px" }}>
        <div style={{ fontSize: 28, fontWeight: 700, color: colors.deepCharcoal, letterSpacing: -0.3 }}>Your Journey</div>
        <div style={{ fontSize: 14, color: colors.warmGray, marginTop: 4 }}>Lower Back Care · 8 sessions</div>
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: "0 24px 32px" }}>
        {SESSIONS.map((s, i) => {
          const state = sessionStates[s.id];
          const isDone = state === "done";
          const isActive = state === "active";
          return (
            <div key={s.id} style={{ position: "relative", marginBottom: 6 }}>
              {i < SESSIONS.length - 1 && (
                <div style={{ position: "absolute", left: 22, top: 46, bottom: -6, width: 2, background: isDone ? colors.done : isActive ? colors.active : colors.upcoming, transition: "background 0.5s" }} />
              )}
              <div
                onClick={isActive ? onStartModule : undefined}
                style={{
                  display: "flex", alignItems: "flex-start", padding: 16, borderRadius: 16, cursor: isActive ? "pointer" : "default",
                  background: isActive ? colors.softCream : "transparent",
                  border: isActive ? `1px solid ${colors.active}` : "1px solid transparent",
                  opacity: isDone ? 0.65 : isActive ? 1 : 0.45,
                  transition: "all 0.4s ease",
                }}
              >
                <div style={{
                  width: 36, height: 36, borderRadius: 18, display: "flex", alignItems: "center", justifyContent: "center", marginRight: 16, flexShrink: 0,
                  background: isDone ? colors.done : isActive ? colors.active : colors.upcoming, color: isDone || isActive ? "#fff" : colors.warmGray,
                  fontSize: isDone ? 16 : 14, fontWeight: 600, transition: "all 0.4s",
                }}>
                  {isDone ? "✓" : s.number}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 17, fontWeight: 600, color: isDone ? colors.warmGray : colors.deepCharcoal }}>{s.title}</div>
                  <div style={{ fontSize: 13, color: isDone ? colors.upcoming : colors.warmGray, marginTop: 2, lineHeight: 1.4 }}>{s.description}</div>
                  {isActive && (
                    <div style={{ marginTop: 8, display: "inline-block", background: colors.active, color: "#fff", fontSize: 12, fontWeight: 500, padding: "5px 12px", borderRadius: 20 }}>
                      Ready to start
                    </div>
                  )}
                  {isDone && <div style={{ fontSize: 12, color: colors.done, marginTop: 4 }}>Completed</div>}
                </div>
              </div>
            </div>
          );
        })}
        <div style={{ textAlign: "center", padding: "28px 0", marginTop: 12, borderTop: `2px dashed ${colors.cardBorder}` }}>
          <div style={{ fontSize: 17, fontWeight: 600, color: colors.upcoming }}>Program Complete</div>
          <div style={{ fontSize: 12, color: colors.upcoming, marginTop: 4 }}>Your back health toolkit — all in one place.</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════
// SCREEN: MODULE ENTRY — Tier 1 can be warmer and lighter
// ══════════════════════════════════════════════════════════════════════
function ModuleEntryScreen({ onBegin }) {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "0 24px" }}>
      <div style={{ flex: 0.1 }} />
      <div style={{ textAlign: "center" }}>
        <div style={{ display: "inline-block", background: colors.softCream, padding: "5px 16px", borderRadius: 20, fontSize: 13, fontWeight: 500, color: colors.warmGray }}>Session 1 of 8</div>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 80, height: 80, borderRadius: 40, background: "#E8F0E8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, marginBottom: 24 }}>🦴</div>
        <div style={{ fontSize: 28, fontWeight: 700, color: colors.deepCharcoal, textAlign: "center", letterSpacing: -0.3 }}>Getting Started</div>
        <div style={{ fontSize: 14, color: colors.warmGray, marginTop: 8 }}>Session 1 · ~5 min</div>
        <div style={{ fontSize: 16, color: colors.deepCharcoal, textAlign: "center", lineHeight: 1.6, marginTop: 24, padding: "0 12px" }}>
          Let's start with what's actually going on in your lower back — and what you can do about it. Simple stuff, real results.
        </div>
      </div>
      <div style={{ paddingBottom: 36, textAlign: "center" }}>
        <button onClick={onBegin} style={{ width: "100%", padding: "16px 48px", background: colors.softTeal, color: "#fff", border: "none", borderRadius: 30, fontSize: 16, fontWeight: 600, cursor: "pointer", transition: "transform 0.15s", }} onMouseDown={e => e.currentTarget.style.transform = "scale(0.97)"} onMouseUp={e => e.currentTarget.style.transform = "scale(1)"}>
          Let's go
        </button>
        <div style={{ fontSize: 12, color: colors.warmGray, marginTop: 10 }}>About 5 minutes · No equipment needed</div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════
// SCREEN: CONTENT CARDS
// ══════════════════════════════════════════════════════════════════════
function ContentCardsScreen({ onComplete }) {
  const [idx, setIdx] = useState(0);
  const total = CONTENT_CARDS.length + 1; // +1 for healthcare provider card
  const isHealthcare = idx === CONTENT_CARDS.length;

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 24px" }}>
        <div style={{ display: "flex", gap: 5 }}>
          {Array.from({ length: total }).map((_, i) => (
            <div key={i} style={{ width: i === idx ? 24 : 8, height: 8, borderRadius: 4, background: i === idx ? colors.active : i < idx ? colors.done : colors.upcoming, transition: "all 0.3s" }} />
          ))}
        </div>
        <span style={{ fontSize: 12, color: colors.warmGray }}>{idx + 1} of {total}</span>
      </div>
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 24px" }}>
        {isHealthcare ? (
          <div style={{ background: "#F0F7F3", border: `1px solid ${colors.earthGreen}50`, borderRadius: 20, padding: 24 }}>
            <div style={{ fontSize: 28, marginBottom: 12 }}>🩺</div>
            <div style={{ fontSize: 18, fontWeight: 600, color: colors.deepCharcoal, marginBottom: 12 }}>Talk to your healthcare provider</div>
            <div style={{ fontSize: 15, lineHeight: 1.6, color: colors.deepCharcoal }}>{HEALTHCARE_CARD}</div>
          </div>
        ) : (
          <div style={{ background: colors.softCream, borderRadius: 20, padding: 28 }}>
            <div style={{ fontSize: 16, lineHeight: 1.55, color: colors.deepCharcoal }}>{CONTENT_CARDS[idx]}</div>
          </div>
        )}
      </div>
      <div style={{ display: "flex", alignItems: "center", padding: "16px 24px 36px" }}>
        {idx > 0 && (
          <button onClick={() => setIdx(idx - 1)} style={{ background: "none", border: "none", fontSize: 16, fontWeight: 600, color: colors.warmGray, cursor: "pointer", padding: "14px 24px" }}>Back</button>
        )}
        <div style={{ flex: 1 }} />
        <button onClick={() => isHealthcare ? onComplete() : setIdx(idx + 1)} style={{ background: colors.softTeal, color: "#fff", border: "none", borderRadius: 25, padding: "14px 32px", fontSize: 16, fontWeight: 600, cursor: "pointer" }}>
          {isHealthcare ? "Continue" : "Next"}
        </button>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════
// SCREEN: MICRO CHECK-IN
// ══════════════════════════════════════════════════════════════════════
function MicroCheckinScreen({ onComplete }) {
  const [qIdx, setQIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const q = CHECKIN_QUESTIONS[qIdx];

  const handleContinue = () => {
    if (qIdx < CHECKIN_QUESTIONS.length - 1) {
      setQIdx(qIdx + 1);
      setSelected(null);
    } else {
      onComplete();
    }
  };

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 24px" }}>
        <span style={{ fontSize: 13, fontWeight: 500, color: colors.softTeal }}>Quick check-in</span>
        <span style={{ fontSize: 12, color: colors.warmGray }}>{qIdx + 1} of {CHECKIN_QUESTIONS.length}</span>
      </div>
      <div style={{ flex: 1, padding: "24px 24px 0" }}>
        <div style={{ fontSize: 22, fontWeight: 600, color: colors.deepCharcoal, lineHeight: 1.4, marginBottom: 28 }}>{q.text}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {q.options.map((opt, i) => (
            <div
              key={i}
              onClick={() => setSelected(i)}
              style={{
                display: "flex", alignItems: "center", padding: 18, borderRadius: 14, cursor: "pointer", transition: "all 0.2s",
                background: selected === i ? "#F0F7F7" : colors.softCream,
                border: selected === i ? `1.5px solid ${colors.active}` : "1.5px solid transparent",
              }}
            >
              <div style={{
                width: 22, height: 22, borderRadius: 11, border: `2px solid ${selected === i ? colors.active : colors.upcoming}`,
                display: "flex", alignItems: "center", justifyContent: "center", marginRight: 14, flexShrink: 0, transition: "all 0.2s",
              }}>
                {selected === i && <div style={{ width: 12, height: 12, borderRadius: 6, background: colors.active }} />}
              </div>
              <span style={{ fontSize: 15, color: colors.deepCharcoal, fontWeight: selected === i ? 500 : 400 }}>{opt}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ padding: "16px 24px 36px", textAlign: "center" }}>
        <div style={{ fontSize: 12, color: colors.warmGray, marginBottom: 10 }}>This just helps us personalize your journey.</div>
        <button
          onClick={handleContinue}
          disabled={selected === null}
          style={{
            width: "100%", padding: 16, borderRadius: 30, border: "none", fontSize: 16, fontWeight: 600, cursor: selected !== null ? "pointer" : "default",
            background: selected !== null ? colors.softTeal : colors.upcoming,
            color: selected !== null ? "#fff" : colors.warmGray,
            transition: "all 0.2s",
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════
// SCREEN: COMPANION CHAT — Tier 1: Exploratory, Socratic, warmer tone
// ══════════════════════════════════════════════════════════════════════
function CompanionChatScreen({ onComplete }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showTyping, setShowTyping] = useState(true);
  const [hasResponded, setHasResponded] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => {
      setShowTyping(false);
      setMessages([{ type: "companion", text: COMPANION_PROMPT }]);
    }, 1400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, showTyping]);

  const handleSend = () => {
    if (!input.trim() || hasResponded) return;
    const text = input.trim();
    const newMsgs = [...messages, { type: "user", text }];
    setMessages(newMsgs);
    setInput("");

    setShowTyping(true);
    setTimeout(() => {
      const { response, isSafety } = matchBranch(text);
      setShowTyping(false);
      setHasResponded(true);
      setMessages([...newMsgs, { type: isSafety ? "safety" : "companion", text: response }]);
    }, 1100);
  };

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "center", padding: "12px 24px", borderBottom: `1px solid ${colors.cardBorder}` }}>
        <div style={{ width: 40, height: 40, borderRadius: 20, background: "#E8F0E8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, marginRight: 12 }}>💪</div>
        <div>
          <div style={{ fontSize: 17, fontWeight: 600, color: colors.deepCharcoal }}>Your Companion</div>
          <div style={{ fontSize: 11, color: colors.warmGray }}>Here to help you reflect and plan</div>
        </div>
      </div>

      <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: 24, display: "flex", flexDirection: "column", gap: 14 }}>
        {messages.map((m, i) => {
          if (m.type === "companion") return (
            <div key={i} style={{ alignSelf: "flex-start", background: colors.softCream, padding: "12px 16px", borderRadius: "18px 18px 18px 4px", maxWidth: "82%", fontSize: 15, lineHeight: 1.5, color: colors.deepCharcoal }}>{m.text}</div>
          );
          if (m.type === "safety") return (
            <div key={i} style={{ alignSelf: "flex-start", background: "#F0F7F3", border: `1px solid ${colors.earthGreen}40`, padding: "12px 16px", borderRadius: "18px 18px 18px 4px", maxWidth: "85%", fontSize: 15, lineHeight: 1.5, color: colors.deepCharcoal }}>{m.text}</div>
          );
          if (m.type === "user") return (
            <div key={i} style={{ alignSelf: "flex-end", background: colors.softTeal, color: "#fff", padding: "12px 16px", borderRadius: "18px 18px 4px 18px", maxWidth: "82%", fontSize: 15, lineHeight: 1.5 }}>{m.text}</div>
          );
          return null;
        })}
        {showTyping && (
          <div style={{ alignSelf: "flex-start", background: colors.softCream, padding: "14px 18px", borderRadius: "18px 18px 18px 4px" }}>
            <div style={{ display: "flex", gap: 5 }}>
              {[0, 0.2, 0.4].map((delay, i) => (
                <div key={i} style={{ width: 8, height: 8, borderRadius: 4, background: colors.warmGray, animation: `pulse 1.2s infinite ${delay}s` }} />
              ))}
            </div>
          </div>
        )}
      </div>

      <div style={{ padding: "10px 24px 28px", borderTop: `1px solid ${colors.cardBorder}` }}>
        {hasResponded ? (
          <button onClick={onComplete} style={{ width: "100%", padding: 16, borderRadius: 30, background: colors.softTeal, border: "none", color: "#fff", fontSize: 16, fontWeight: 600, cursor: "pointer" }}>
            Continue
          </button>
        ) : (
          <div style={{ display: "flex", gap: 10, alignItems: "flex-end" }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
              placeholder="What would you like to try?"
              disabled={showTyping}
              style={{ flex: 1, padding: "12px 18px", borderRadius: 22, border: `1px solid ${colors.upcoming}`, fontSize: 15, outline: "none", fontFamily: "inherit", color: colors.deepCharcoal, background: "#fff" }}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || showTyping}
              style={{ width: 44, height: 44, borderRadius: 22, border: "none", background: input.trim() ? colors.softTeal : colors.upcoming, color: "#fff", fontSize: 20, fontWeight: 700, cursor: input.trim() ? "pointer" : "default", flexShrink: 0 }}
            >
              →
            </button>
          </div>
        )}
        <div style={{ fontSize: 11, color: colors.warmGray, textAlign: "center", marginTop: 8 }}>
          AI companion · Not medical advice
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════
// SCREEN: COMPLETION MOMENT — Tier 1: Can be more playful/celebratory
// ══════════════════════════════════════════════════════════════════════
function CompletionMomentScreen({ onContinue }) {
  const [show, setShow] = useState(false);
  const [showKudo, setShowKudo] = useState(false);
  useEffect(() => {
    setTimeout(() => setShow(true), 400);
    setTimeout(() => setShowKudo(true), 1500);
  }, []);

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", background: `linear-gradient(180deg, ${colors.softCream} 0%, ${colors.warmWhite} 100%)` }}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 32px", opacity: show ? 1 : 0, transform: show ? "scale(1)" : "scale(0.95)", transition: "all 0.8s ease" }}>
        <div style={{ width: 100, height: 100, borderRadius: 50, background: "#E8F0E8", border: `2px solid ${colors.earthGreen}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 44, marginBottom: 16 }}>
          🦴
        </div>
        <div style={{ fontSize: 22, fontWeight: 700, color: colors.deepCharcoal, marginBottom: 24, letterSpacing: 0.3 }}>Body Mechanic</div>
        <div style={{ fontSize: 16, lineHeight: 1.6, color: colors.deepCharcoal, textAlign: "center" }}>
          You just learned three techniques for understanding lower back pain — what causes it, how posture affects it, and when to seek help. That's a solid foundation.
        </div>
        <div style={{ marginTop: 32, opacity: showKudo ? 1 : 0, transition: "opacity 0.6s ease", textAlign: "center" }}>
          <div style={{ width: 40, height: 2, background: colors.gentleAmber, margin: "0 auto 16px" }} />
          <div style={{ fontSize: 16, color: colors.warmGray, fontStyle: "italic" }}>
            You started. That matters more than people think.
          </div>
        </div>
      </div>
      <div style={{ padding: "0 24px 36px" }}>
        <button onClick={onContinue} style={{ width: "100%", padding: 16, borderRadius: 30, background: colors.gentleAmber, border: "none", color: "#fff", fontSize: 16, fontWeight: 600, cursor: "pointer" }}>
          See your journey
        </button>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════
// MAIN APP
// ══════════════════════════════════════════════════════════════════════
export default function App() {
  const [screen, setScreen] = useState("journeyMap");
  const [sessionStates, setSessionStates] = useState({
    s1: "active", s2: "upcoming", s3: "upcoming", s4: "upcoming",
    s5: "upcoming", s6: "upcoming", s7: "upcoming", s8: "upcoming",
  });

  const completeModule = () => {
    setSessionStates((prev) => ({ ...prev, s1: "done", s2: "active" }));
    setScreen("journeyMap");
  };

  let content;
  switch (screen) {
    case "journeyMap":
      content = <JourneyMapScreen sessionStates={sessionStates} onStartModule={() => setScreen("entry")} />;
      break;
    case "entry":
      content = <ModuleEntryScreen onBegin={() => setScreen("content")} />;
      break;
    case "content":
      content = <ContentCardsScreen onComplete={() => setScreen("checkin")} />;
      break;
    case "checkin":
      content = <MicroCheckinScreen onComplete={() => setScreen("companion")} />;
      break;
    case "companion":
      content = <CompanionChatScreen onComplete={() => setScreen("completion")} />;
      break;
    case "completion":
      content = <CompletionMomentScreen onContinue={completeModule} />;
      break;
    default:
      content = null;
  }

  return (
    <>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        input::placeholder { color: ${colors.warmGray}; }
        button:active { transform: scale(0.97); }
      `}</style>
      <PhoneFrame>{content}</PhoneFrame>
    </>
  );
}
