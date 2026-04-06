import React, { useState, useEffect, useRef } from "react";

// ══════════════════════════════════════════════════════════════════════
// THEME
// ══════════════════════════════════════════════════════════════════════
const colors = {
  warmWhite: "#FAF7F2",
  softCream: "#F5F0E8",
  deepCharcoal: "#2C2C2C",
  warmGray: "#6B6560",
  mutedSage: "#7A9E7E",
  softTeal: "#5A8F8F",
  gentleAmber: "#D4A574",
  paleLavender: "#B8A9C9",
  softCoral: "#E8A598",
  done: "#7A9E7E",
  active: "#5A8F8F",
  upcoming: "#D4CFC7",
  cardBorder: "#E8E4DD",
};

// ══════════════════════════════════════════════════════════════════════
// DATA — Depression S1M1 Content
// ══════════════════════════════════════════════════════════════════════
const SESSIONS = [
  { id: "s1", number: 1, title: "Understanding Depression", description: "Learn what contributes to depression and its symptoms." },
  { id: "s2", number: 2, title: "What is CBT?", description: "Learn what Cognitive Behavioral Therapy is and how it works." },
  { id: "s3", number: 3, title: "Mindfulness and Self-compassion", description: "Mindfulness and self-compassion to move through depression." },
  { id: "s4", number: 4, title: "Thoughts", description: "Learn to identify your negative automatic thoughts." },
  { id: "s5", number: 5, title: "Helpful Thoughts", description: "Challenge negative thoughts with more accurate ones." },
  { id: "s6", number: 6, title: "Emotions", description: "Identify your emotions to accept and manage them." },
  { id: "s7", number: 7, title: "Complex Emotions", description: "Accept and manage complex emotions." },
  { id: "s8", number: 8, title: "Behavior", description: "How changing behavior affects thoughts and emotions." },
  { id: "s9", number: 9, title: "Helpful Actions", description: "More actions to manage your depression." },
  { id: "s10", number: 10, title: "Moving Forward", description: "Make a plan to move forward and manage setbacks." },
];

const CONTENT_CARDS = [
  "At any given time, 18.5% of adults in the U.S. are experiencing symptoms of depression and 5.7% of the global population is experiencing clinical depression. Depression doesn't discriminate. A person of any age or circumstance can experience depression.",
  "While everyone feels down sometimes, depression is a more prolonged and intense state. It significantly impairs ability to function in everyday life.",
  "Symptoms can range from moderate to severe. You may feel sad, sluggish, hopeless or empty. You may have less interest in things you enjoy or struggle to do anything at all. Some people experience feelings of anger or irritability. Others report physical symptoms, such as chronic pain or headaches.",
  "These symptoms must not be a result of a medical condition or substance abuse. Depression may occur with other psychiatric disorders, such as generalized anxiety disorder and insomnia.",
  "To be diagnosed as depressed, an individual must have symptoms for more than 2 weeks and significant impairment in the functions of daily living. However, you do not need a clinical diagnosis to benefit from this program.",
];

const CRISIS_CARD_TEXT = "If you are experiencing thoughts of harming yourself or suicide, contact emergency services in your local area. In the U.S., call 911, call or text 988 to reach the 24-hour National Suicide Helpline or go to an emergency room.";

const CHECKIN_QUESTIONS = [
  {
    id: "q1",
    text: "Depression affects people differently. Which of these did you most relate to from what you just read?",
    options: [
      "Emotional symptoms (sadness, hopelessness, emptiness)",
      "Energy and motivation changes",
      "Physical symptoms (pain, headaches, sleep)",
      "I'm not sure yet — still taking it in",
    ],
  },
  {
    id: "q2",
    text: "How familiar were you with this information before today?",
    options: [
      "Most of it was new to me",
      "Some was new, some I knew",
      "I was already pretty familiar",
      "I'd rather not say",
    ],
  },
];

const COMPANION_PROMPT = "You just spent time learning about what depression actually is — that's a real step. Was there anything in there that felt different from what you expected?";

const BRANCHES = [
  { id: "a", triggers: ["yes","didn't know","surprised","didn't realize","interesting","statistics","how common","i thought","never knew","wow","really","new to me","eye opening"], response: "It's worth sitting with that. A lot of people carry assumptions about depression that don't match reality. You now know something different — that matters." },
  { id: "b", triggers: ["no","knew","already knew","nothing new","familiar","not really","knew that","heard before","aware"], response: "That makes sense — sometimes learning confirms what you already feel. The fact that you're here, going through this intentionally, says a lot." },
  { id: "c", triggers: ["i feel","i've been","that's me","i relate","i struggle","going through","hard","difficult","tough","my experience","i have depression","i am depressed","dealing with","hit home"], response: "Thank you for sharing that. This program is built for exactly where you are. You don't have to have it figured out — showing up is the part that counts." },
  { id: "d", triggers: ["ok","sure","yeah","idk","maybe","fine","cool","k","mhm","yep","nah","dunno","whatever","next"], response: "No need to say more than that. You showed up and finished the first module — that's the hardest one to start. Ready to see what's next?" },
  { id: "e", triggers: ["should i","do i have","am i depressed","what should i do","is it normal","diagnosis","medication","treatment","therapy","doctor","therapist"], response: "That's an important question, and it deserves a real answer from someone qualified. A doctor or mental health professional would be the right person to talk to about that. In the meantime, this program will give you practical tools you can start using right away." },
];

const FALLBACK = "Thanks for being here. You've taken the first step — and that's the one most people put off. Let's keep going when you're ready.";

const ESCALATION_KEYWORDS = ["kill myself","want to die","end my life","suicide","suicidal","self-harm","self harm","hurt myself","cutting myself","don't want to be alive","don't want to live","better off dead","no reason to live","can't go on","end it all","not worth living","wanna die","rather be dead"];

const ESCALATION_RESPONSE = {
  message: "It sounds like you might be going through something really difficult right now. You don't have to handle this alone.",
  resources: [
    { action: "Call or text 988", label: "Suicide & Crisis Lifeline · Available 24/7" },
    { action: "Call 911", label: "Emergency Services · Immediate help" },
  ],
  closing: "I'm glad you're here. When you're ready, your program will be right where you left it.",
};

// ══════════════════════════════════════════════════════════════════════
// UTILS
// ══════════════════════════════════════════════════════════════════════
function detectEscalation(input) {
  const n = input.toLowerCase().trim();
  return ESCALATION_KEYWORDS.some((kw) => n.includes(kw));
}

function matchBranch(input) {
  const n = input.toLowerCase().trim();
  let best = null, bestScore = 0;
  for (const b of BRANCHES) {
    let score = 0;
    for (const t of b.triggers) { if (n.includes(t)) score += t.length; }
    if (score > bestScore) { bestScore = score; best = b; }
  }
  return best ? best.response : FALLBACK;
}

// ══════════════════════════════════════════════════════════════════════
// PHONE FRAME WRAPPER
// ══════════════════════════════════════════════════════════════════════
function PhoneFrame({ children }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", background: "#E8E4DD", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", padding: 20 }}>
      <div style={{ width: 390, height: 844, background: colors.warmWhite, borderRadius: 40, overflow: "hidden", boxShadow: "0 25px 80px rgba(0,0,0,0.15)", position: "relative", display: "flex", flexDirection: "column" }}>
        {/* Status bar */}
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
        <div style={{ fontSize: 14, color: colors.warmGray, marginTop: 4 }}>Managing Depression · 10 sessions</div>
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: "0 24px 32px" }}>
        {SESSIONS.map((s, i) => {
          const state = sessionStates[s.id];
          const isDone = state === "done";
          const isActive = state === "active";
          return (
            <div key={s.id} style={{ position: "relative", marginBottom: 6 }}>
              {i < SESSIONS.length - 1 && (
                <div style={{ position: "absolute", left: 22, top: 46, bottom: -6, width: 2, background: isDone ? colors.done : isActive ? colors.active : colors.upcoming }} />
              )}
              <div
                onClick={isActive ? onStartModule : undefined}
                style={{
                  display: "flex", alignItems: "flex-start", padding: 16, borderRadius: 16, cursor: isActive ? "pointer" : "default",
                  background: isActive ? colors.softCream : "transparent",
                  border: isActive ? `1px solid ${colors.active}` : "1px solid transparent",
                  opacity: isDone ? 0.65 : isActive ? 1 : 0.45,
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{
                  width: 36, height: 36, borderRadius: 18, display: "flex", alignItems: "center", justifyContent: "center", marginRight: 16, flexShrink: 0,
                  background: isDone ? colors.done : isActive ? colors.active : colors.upcoming, color: isDone || isActive ? "#fff" : colors.warmGray,
                  fontSize: isDone ? 16 : 14, fontWeight: 600,
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
          <div style={{ fontSize: 12, color: colors.upcoming, marginTop: 4 }}>You'll see the finish line from here — that's intentional.</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════
// SCREEN: MODULE ENTRY
// ══════════════════════════════════════════════════════════════════════
function ModuleEntryScreen({ onBegin }) {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "0 24px" }}>
      <div style={{ flex: 0.12 }} />
      <div style={{ textAlign: "center" }}>
        <div style={{ display: "inline-block", background: colors.softCream, padding: "5px 16px", borderRadius: 20, fontSize: 13, fontWeight: 500, color: colors.warmGray }}>Session 1 of 10</div>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 80, height: 80, borderRadius: 40, background: colors.softCream, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, marginBottom: 24 }}>🌿</div>
        <div style={{ fontSize: 28, fontWeight: 700, color: colors.deepCharcoal, textAlign: "center", letterSpacing: -0.3 }}>What is Depression?</div>
        <div style={{ fontSize: 14, color: colors.warmGray, marginTop: 8 }}>Session 1 · ~5 min</div>
        <div style={{ fontSize: 16, color: colors.deepCharcoal, textAlign: "center", lineHeight: 1.6, marginTop: 24, padding: "0 16px" }}>
          Let's start by understanding what depression really is — and isn't. No tests, no pressure.
        </div>
      </div>
      <div style={{ paddingBottom: 36, textAlign: "center" }}>
        <button onClick={onBegin} style={{ width: "100%", padding: "16px 48px", background: colors.softTeal, color: "#fff", border: "none", borderRadius: 30, fontSize: 16, fontWeight: 600, cursor: "pointer" }}>
          Begin
        </button>
        <div style={{ fontSize: 12, color: colors.warmGray, marginTop: 10 }}>About 5 minutes · Go at your own pace</div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════
// SCREEN: CONTENT CARDS
// ══════════════════════════════════════════════════════════════════════
function ContentCardsScreen({ onComplete }) {
  const [idx, setIdx] = useState(0);
  const total = CONTENT_CARDS.length + 1;
  const isCrisis = idx === CONTENT_CARDS.length;

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
        {isCrisis ? (
          <div style={{ background: "#FFF8F0", border: `1px solid ${colors.softCoral}`, borderRadius: 20, padding: 24 }}>
            <div style={{ fontSize: 28, marginBottom: 12 }}>💛</div>
            <div style={{ fontSize: 18, fontWeight: 600, color: colors.deepCharcoal, marginBottom: 12 }}>Before we continue</div>
            <div style={{ fontSize: 16, lineHeight: 1.6, color: colors.deepCharcoal }}>{CRISIS_CARD_TEXT}</div>
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
        <button onClick={() => isCrisis ? onComplete() : setIdx(idx + 1)} style={{ background: colors.softTeal, color: "#fff", border: "none", borderRadius: 25, padding: "14px 32px", fontSize: 16, fontWeight: 600, cursor: "pointer" }}>
          {isCrisis ? "Continue" : "Next"}
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
        <span style={{ fontSize: 13, fontWeight: 500, color: colors.softTeal }}>Quick reflection</span>
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
                display: "flex", alignItems: "center", justifyContent: "center", marginRight: 14, flexShrink: 0,
              }}>
                {selected === i && <div style={{ width: 12, height: 12, borderRadius: 6, background: colors.active }} />}
              </div>
              <span style={{ fontSize: 15, color: colors.deepCharcoal, fontWeight: selected === i ? 500 : 400 }}>{opt}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ padding: "16px 24px 36px", textAlign: "center" }}>
        <div style={{ fontSize: 12, color: colors.warmGray, marginBottom: 10 }}>There are no wrong answers here.</div>
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
// SCREEN: COMPANION CHAT
// ══════════════════════════════════════════════════════════════════════
function CompanionChatScreen({ onComplete, onEscalation }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showTyping, setShowTyping] = useState(true);
  const [hasResponded, setHasResponded] = useState(false);
  const [isEscalated, setIsEscalated] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => {
      setShowTyping(false);
      setMessages([{ type: "companion", text: COMPANION_PROMPT }]);
    }, 1500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, showTyping]);

  const handleSend = () => {
    if (!input.trim() || hasResponded || isEscalated) return;
    const text = input.trim();
    const newMsgs = [...messages, { type: "user", text }];
    setMessages(newMsgs);
    setInput("");

    if (detectEscalation(text)) {
      setIsEscalated(true);
      setMessages([...newMsgs, { type: "escalation" }]);
      return;
    }

    setShowTyping(true);
    setTimeout(() => {
      const response = matchBranch(text);
      setShowTyping(false);
      setHasResponded(true);
      setMessages([...newMsgs, { type: "companion", text: response }]);
    }, 1200);
  };

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", padding: "12px 24px", borderBottom: `1px solid ${colors.cardBorder}` }}>
        <div style={{ width: 40, height: 40, borderRadius: 20, background: colors.softCream, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, marginRight: 12 }}>🌱</div>
        <div>
          <div style={{ fontSize: 17, fontWeight: 600, color: colors.deepCharcoal }}>Your Companion</div>
          <div style={{ fontSize: 11, color: colors.warmGray }}>Here to reflect with you, not advise</div>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: 24, display: "flex", flexDirection: "column", gap: 14 }}>
        {messages.map((m, i) => {
          if (m.type === "companion") return (
            <div key={i} style={{ alignSelf: "flex-start", background: colors.softCream, padding: "12px 16px", borderRadius: "18px 18px 18px 4px", maxWidth: "82%", fontSize: 15, lineHeight: 1.5, color: colors.deepCharcoal }}>{m.text}</div>
          );
          if (m.type === "user") return (
            <div key={i} style={{ alignSelf: "flex-end", background: colors.softTeal, color: "#fff", padding: "12px 16px", borderRadius: "18px 18px 4px 18px", maxWidth: "82%", fontSize: 15, lineHeight: 1.5 }}>{m.text}</div>
          );
          if (m.type === "escalation") return (
            <div key={i} style={{ background: "#FFF8F0", border: `1px solid ${colors.softCoral}`, borderRadius: 18, padding: 20 }}>
              <div style={{ fontSize: 15, lineHeight: 1.5, color: colors.deepCharcoal, marginBottom: 14 }}>{ESCALATION_RESPONSE.message}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 14 }}>
                {ESCALATION_RESPONSE.resources.map((r, j) => (
                  <div key={j} style={{ background: "#fff", borderRadius: 12, padding: 14 }}>
                    <div style={{ fontSize: 17, fontWeight: 600, color: colors.deepCharcoal }}>{r.action}</div>
                    <div style={{ fontSize: 13, color: colors.warmGray }}>{r.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: 15, color: colors.deepCharcoal, fontStyle: "italic" }}>{ESCALATION_RESPONSE.closing}</div>
            </div>
          );
          return null;
        })}
        {showTyping && (
          <div style={{ alignSelf: "flex-start", background: colors.softCream, padding: "14px 18px", borderRadius: "18px 18px 18px 4px" }}>
            <div style={{ display: "flex", gap: 5 }}>
              <div className="typing-dot" style={{ width: 8, height: 8, borderRadius: 4, background: colors.warmGray, animation: "pulse 1.2s infinite" }} />
              <div className="typing-dot" style={{ width: 8, height: 8, borderRadius: 4, background: colors.warmGray, animation: "pulse 1.2s infinite 0.2s" }} />
              <div className="typing-dot" style={{ width: 8, height: 8, borderRadius: 4, background: colors.warmGray, animation: "pulse 1.2s infinite 0.4s" }} />
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div style={{ padding: "10px 24px 28px", borderTop: `1px solid ${colors.cardBorder}` }}>
        {isEscalated ? (
          <button onClick={onEscalation} style={{ width: "100%", padding: 16, borderRadius: 30, background: colors.softCream, border: `1px solid ${colors.cardBorder}`, fontSize: 16, fontWeight: 600, color: colors.deepCharcoal, cursor: "pointer" }}>
            Continue when you're ready
          </button>
        ) : hasResponded ? (
          <button onClick={onComplete} style={{ width: "100%", padding: 16, borderRadius: 30, background: colors.softTeal, border: "none", color: "#fff", fontSize: 16, fontWeight: 600, cursor: "pointer" }}>
            Continue
          </button>
        ) : (
          <div style={{ display: "flex", gap: 10, alignItems: "flex-end" }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
              placeholder="Type your response..."
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
          AI companion · Not medical advice · Pre-approved responses only
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════
// SCREEN: COMPLETION MOMENT
// ══════════════════════════════════════════════════════════════════════
function CompletionMomentScreen({ onContinue }) {
  const [show, setShow] = useState(false);
  const [showKudo, setShowKudo] = useState(false);
  useEffect(() => {
    setTimeout(() => setShow(true), 400);
    setTimeout(() => setShowKudo(true), 1600);
  }, []);

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", background: colors.softCream }}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 32px", opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
        <div style={{ width: 100, height: 100, borderRadius: 50, background: `${colors.paleLavender}30`, border: `2px solid ${colors.paleLavender}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 44, marginBottom: 16 }}>
          🌿
        </div>
        <div style={{ fontSize: 22, fontWeight: 700, color: colors.deepCharcoal, marginBottom: 24, letterSpacing: 0.3 }}>Resilience Aware</div>
        <div style={{ fontSize: 16, lineHeight: 1.6, color: colors.deepCharcoal, textAlign: "center" }}>
          You just took the first step toward understanding depression — not as a label, but as something you can learn to work with. That takes courage.
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
// MAIN APP — State machine for the full module loop
// ══════════════════════════════════════════════════════════════════════
export default function App() {
  const [screen, setScreen] = useState("journeyMap");
  const [sessionStates, setSessionStates] = useState({
    s1: "active", s2: "upcoming", s3: "upcoming", s4: "upcoming", s5: "upcoming",
    s6: "upcoming", s7: "upcoming", s8: "upcoming", s9: "upcoming", s10: "upcoming",
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
      content = <CompanionChatScreen onComplete={() => setScreen("completion")} onEscalation={() => setScreen("journeyMap")} />;
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
      `}</style>
      <PhoneFrame>{content}</PhoneFrame>
    </>
  );
}
