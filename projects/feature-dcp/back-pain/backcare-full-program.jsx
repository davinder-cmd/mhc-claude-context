import React, { useState, useEffect, useRef } from 'react';

// Color Palette
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
  cardBorder: "#E8E4DD"
};

// Session content structure
const sessionContent = {
  1: {
    title: "Getting Started",
    badge: "Body Mechanic",
    companion: "What's one thing from that you'd like to try applying this week?",
    companionResponses: {
      "sitting": "Smart choice! Sitting changes can have an immediate impact on how you feel throughout the day.",
      "posture": "Great focus area. Once you build the awareness, better posture starts to feel natural.",
      "exercises": "Excellent — movement is one of the best things you can do for your back.",
      "prevention": "Love this mindset. Prevention is so much easier than managing pain after it starts.",
      "default": "That's a great insight. Let's build on that in the coming sessions."
    },
    cards: [
      "619 million people worldwide experience lower back pain at some point in their lives.",
      "Pain often happens when tissues between your spinal bones are overstretched or tense.",
      "Incorrect posture while sitting, standing, bending, or lifting is a common cause of this stress.",
      "The exercises you'll learn can reduce or even eliminate your discomfort over time."
    ]
  },
  2: {
    title: "Sitting Posture",
    badge: "Posture Pro",
    companion: "You just learned a sitting technique. Where do you think you'd most benefit from using it?",
    companionResponses: {
      "work": "Work is where so many of us spend hours in the same position. Bringing this technique there could be transformative.",
      "home": "Home is the perfect place to practice and build the habit in a comfortable environment.",
      "car": "Car rides can be rough on the back. Using this technique there is a smart move.",
      "everywhere": "Consistency is key. Using it everywhere you sit will build it into your muscle memory.",
      "default": "Wherever you choose, just practice it regularly and you'll notice the difference."
    },
    cards: [
      "When you sit slouched, your ligaments stretch too much, creating pain and fatigue.",
      "A lumbar cushion supports your natural lower back curve and reduces strain.",
      "Take movement breaks every hour — even 2 minutes of standing makes a difference.",
      "Sitting technique: Extend upward as if pulled by a string, then relax slightly. That's the sweet spot."
    ]
  },
  3: {
    title: "Standing and Lifting",
    badge: "Safe Mover",
    companion: "Between standing and lifting, which one feels more relevant to your daily routine?",
    companionResponses: {
      "standing": "Standing for long periods is exhausting. Proper technique will help you build endurance.",
      "lifting": "Lifting the right way is a game-changer. It protects your back for years to come.",
      "both": "Both are important. You're building a complete toolkit here.",
      "neither": "That's okay. These principles still apply to how you move through your day.",
      "default": "Either way, you're building awareness that will serve you well."
    },
    cards: [
      "Prolonged standing causes leg muscles to fatigue, making your spine work harder and arch exaggerated.",
      "When lifting: bend at your knees and hips, not your back. Keep the object close to your body.",
      "Always maintain your natural arch while lifting and avoid twisting motions.",
      "The key is using your strongest muscles — your legs and hips — not your vulnerable back."
    ]
  },
  4: {
    title: "Backward Bending",
    badge: "Flexibility Builder",
    companion: "You've learned several backward bending exercises now. Which one felt most doable for you?",
    companionResponses: {
      "elbows": "Great starting point. Building from elbows is how you progress safely.",
      "straight": "Excellent progress. You're building real flexibility and strength.",
      "standing": "Standing backward bends are powerful. Nice work building up to those.",
      "all": "Amazing. You're exploring the full range of what's possible.",
      "default": "Whichever feels best is the right choice. Progress is about consistency, not intensity."
    },
    cards: [
      "Backward bending relieves stress from all those hours of forward-bending (sitting, working, looking down).",
      "These exercises work by reducing discomfort, not by strengthening — that comes later.",
      "You know they're helping when: pain moves to the middle of your back, intensity decreases, or range of motion improves.",
      "Try: lying backward bend → press up to elbows → press up to straight arms → standing backward bend."
    ]
  },
  5: {
    title: "Forward Bending",
    badge: "Balance Seeker",
    companion: "Forward and backward bending work as a pair. When during your day might you fit both in?",
    companionResponses: {
      "morning": "Starting your day with this balance sets a great tone for everything that follows.",
      "evening": "Evening is perfect for releasing the day's tension and preparing for rest.",
      "breaks": "Fitness breaks throughout the day keep you loose and energized.",
      "both": "Pairing them morning and evening is ideal for maintaining balance.",
      "default": "Whenever you choose, the important thing is doing them as a pair."
    },
    cards: [
      "Forward bending stretches the tendons and muscles in your lower back, complementing backward bends.",
      "These work best as pairs — backward bending followed by forward bending keeps your back balanced.",
      "Stop immediately if pain increases or travels down your leg. That's your signal to adjust.",
      "Lying forward bend → Standing forward bend. Simple, but powerful when done consistently."
    ]
  },
  6: {
    title: "Supporting Stretches",
    badge: "Full Body Thinker",
    companion: "You now have three new stretches. Which muscle group do you think needs the most attention?",
    companionResponses: {
      "hamstrings": "Smart observation. Tight hamstrings are incredibly common and directly affect back pain.",
      "quads": "Quad tightness often goes unnoticed but really impacts your posture and back stability.",
      "calves": "Many people don't realize how much calf tightness affects the whole chain.",
      "all": "Exactly. These three work together to support your entire back system.",
      "default": "Stretching all three groups will give you the most relief and prevention."
    },
    cards: [
      "Your hamstrings, quadriceps, and calves all directly support your lower back's health.",
      "Sitting shortens your hamstrings throughout the day, creating cumulative stress on your lower back.",
      "Stretching these muscles makes them both stronger and more flexible — a powerful combination.",
      "Three stretches: hamstring stretch, quadricep stretch, calf stretch. Each takes 30 seconds."
    ]
  },
  7: {
    title: "Strengthening Exercises",
    badge: "Core Guardian",
    companion: "You've built up a serious exercise toolkit now. What does a realistic weekly routine look like for you?",
    companionResponses: {
      "daily": "Daily movement is the gold standard. Your back will thank you.",
      "weekly": "3-4 times per week is realistic for most people and highly effective.",
      "minimal": "Even 2 times per week makes a real difference when you're consistent.",
      "varied": "Mixing up which exercises you do keeps it interesting and works different areas.",
      "default": "Whatever frequency you'll actually stick with is the right one. Start there and build."
    },
    cards: [
      "Strengthening exercises maintain your reduced pain level and prevent future discomfort from returning.",
      "Chair squats build leg strength for lifting. Crunches strengthen your abdominal wall.",
      "Superman holds build lower back and core endurance. Bridges strengthen your back, core, glutes, and hamstrings.",
      "These four exercises create a balanced strengthening foundation for long-term back health."
    ]
  },
  8: {
    title: "Maintaining Back Health",
    badge: "Back Health Champion",
    companion: "You've completed the entire program. What's the one thing you'll keep doing?",
    companionResponses: {
      "posture": "Posture awareness is the foundation. Keep building on it.",
      "exercises": "Regular exercise is your best insurance against future pain.",
      "stretching": "Flexibility maintenance will keep you moving freely for years.",
      "backward_bend": "That instinct to offset sitting with backward bending is golden.",
      "everything": "That commitment to the full practice is what creates lasting change.",
      "default": "Whatever you choose, that consistency is what transforms temporary relief into lasting change."
    },
    cards: [
      "Keep practicing the postures. Your sitting and standing technique should become automatic.",
      "Backward bend after extended sitting. Forward bend when your range of motion decreases.",
      "Continue exercises regularly — even 2-3 times per week maintains what you've built.",
      "For acute pain episodes: lie face down and allow your back to relax. The pain will pass."
    ]
  }
};

// Pre-assessment questions
const discomfortQuestions = [
  "Get out of bed",
  "Sit in a chair for several hours",
  "Walk a few blocks",
  "Bend over to clean a bathtub",
  "Carry two bags of groceries"
];

const difficultyOptions = [
  { label: "Not difficult at all", value: 0 },
  { label: "Minimally difficult", value: 1 },
  { label: "Somewhat difficult", value: 2 },
  { label: "Fairly difficult", value: 3 },
  { label: "Very difficult", value: 4 },
  { label: "Unable to do", value: 5 }
];

const goalOptions = [
  "Reduce pain",
  "Prevent future pain",
  "Increase range of motion",
  "Perform activity without discomfort",
  "Other"
];

// Utility function for animations
const styles = `
  @keyframes typingPulse {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 1; }
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(20px); }
    to { opacity: 1; transform: translateX(0); }
  }

  @keyframes checkmarkPulse {
    0% { transform: scale(0.5); opacity: 0; }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); opacity: 1; }
  }

  .typing-indicator {
    display: flex;
    gap: 4px;
  }

  .typing-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${colors.softTeal};
    animation: typingPulse 1.4s infinite;
  }

  .typing-dot:nth-child(2) { animation-delay: 0.2s; }
  .typing-dot:nth-child(3) { animation-delay: 0.4s; }

  .fade-in {
    animation: fadeIn 0.6s ease-out;
  }

  .slide-in {
    animation: slideInRight 0.5s ease-out;
  }

  .checkmark-pulse {
    animation: checkmarkPulse 0.6s ease-out;
  }
`;

// Phone Frame Component
const PhoneFrame = ({ children }) => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: colors.warmGray,
    padding: '20px'
  }}>
    <div style={{
      width: 390,
      height: 844,
      borderRadius: 40,
      overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
      backgroundColor: colors.warmWhite,
      display: 'flex',
      flexDirection: 'column'
    }}>
      {children}
    </div>
  </div>
);

// Progress Bar Component
const ProgressBar = ({ current, total }) => (
  <div style={{
    width: '100%',
    height: 4,
    backgroundColor: colors.softCream,
    overflow: 'hidden'
  }}>
    <div style={{
      height: '100%',
      width: `${(current / total) * 100}%`,
      backgroundColor: colors.softTeal,
      transition: 'width 0.3s ease'
    }} />
  </div>
);

// Companion Component
const Companion = ({ message, isLoading = false }) => (
  <div style={{
    display: 'flex',
    gap: 12,
    marginBottom: 16,
    animation: 'slideInRight 0.5s ease-out'
  }}>
    <div style={{
      width: 36,
      height: 36,
      borderRadius: '50%',
      backgroundColor: colors.softTeal,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: colors.warmWhite,
      fontSize: 20,
      flexShrink: 0
    }}>
      🤖
    </div>
    <div style={{
      flex: 1,
      backgroundColor: colors.softCream,
      borderRadius: 16,
      padding: '12px 16px',
      borderLeft: `4px solid ${colors.softTeal}`
    }}>
      {isLoading ? (
        <div className="typing-indicator">
          <div className="typing-dot" />
          <div className="typing-dot" />
          <div className="typing-dot" />
        </div>
      ) : (
        <p style={{
          margin: 0,
          fontSize: 14,
          lineHeight: 1.5,
          color: colors.deepCharcoal
        }}>
          {message}
        </p>
      )}
    </div>
  </div>
);

// Badge Component
const Badge = ({ badgeName }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: '12px 20px',
    backgroundColor: colors.softCream,
    borderRadius: 20,
    marginBottom: 16,
    alignSelf: 'center',
    animation: 'fadeIn 0.6s ease-out'
  }}>
    <span style={{ fontSize: 20 }}>⭐</span>
    <span style={{
      fontSize: 14,
      fontWeight: 600,
      color: colors.deepCharcoal
    }}>
      {badgeName}
    </span>
  </div>
);

// Journey Map Component
const JourneyMap = ({ completedSessions, currentSession }) => {
  const sessions = [
    { num: 1, title: 'Getting Started' },
    { num: 2, title: 'Sitting Posture' },
    { num: 3, title: 'Standing & Lifting' },
    { num: 4, title: 'Backward Bending' },
    { num: 5, title: 'Forward Bending' },
    { num: 6, title: 'Supporting Stretches' },
    { num: 7, title: 'Strengthening' },
    { num: 8, title: 'Maintaining Health' }
  ];

  return (
    <div style={{
      padding: '16px',
      backgroundColor: colors.softCream,
      borderRadius: 12,
      marginBottom: 16
    }}>
      <h3 style={{
        margin: '0 0 12px 0',
        fontSize: 14,
        fontWeight: 600,
        color: colors.deepCharcoal
      }}>
        Your Journey
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {sessions.map((session) => {
          let isDone = completedSessions.includes(session.num);
          let isActive = currentSession === session.num;
          let isUpcoming = session.num > currentSession;

          let bgColor = isDone ? colors.done : (isActive ? colors.active : colors.upcoming);
          let textColor = isDone || isActive ? colors.warmWhite : colors.warmGray;
          let borderColor = isDone || isActive ? 'transparent' : colors.cardBorder;

          return (
            <div key={session.num} style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '8px 12px',
              backgroundColor: isDone || isActive ? bgColor : 'transparent',
              border: `1px solid ${borderColor}`,
              borderRadius: 8,
              transition: 'all 0.3s ease'
            }}>
              <div style={{
                width: 24,
                height: 24,
                borderRadius: '50%',
                backgroundColor: bgColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: textColor,
                fontSize: 12,
                fontWeight: 600
              }}>
                {isDone ? '✓' : session.num}
              </div>
              <span style={{
                fontSize: 12,
                fontWeight: isActive ? 600 : 400,
                color: textColor
              }}>
                Session {session.num}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Main App Component
export default function BackCareProgram() {
  const [screen, setScreen] = useState('homeScreen');
  const [painLevel, setPainLevel] = useState(5);
  const [selectedGoals, setSelectedGoals] = useState([]);
  const [discomfortStep, setDiscomfortStep] = useState(0);
  const [preAssessmentResponses, setPreAssessmentResponses] = useState({});
  const [postAssessmentResponses, setPostAssessmentResponses] = useState({});
  const [currentSession, setCurrentSession] = useState(1);
  const [completedSessions, setCompletedSessions] = useState([]);
  const [sessionStep, setSessionStep] = useState('entryCard');
  const [contentCardIndex, setContentCardIndex] = useState(0);
  const [companionResp, setCompanionResp] = useState(null);
  const [showCompletionMoment, setShowCompletionMoment] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [showMilestoneKudo, setShowMilestoneKudo] = useState(false);
  const [weeklyReadinessDone, setWeeklyReadinessDone] = useState(false);
  const [weeklyEmoji, setWeeklyEmoji] = useState(null);

  const handleSelectGoal = (goal) => {
    setSelectedGoals(prev =>
      prev.includes(goal) ? prev.filter(g => g !== goal) : [...prev, goal]
    );
  };

  const handleDiscomfortAnswer = (value) => {
    setPreAssessmentResponses(prev => ({
      ...prev,
      [discomfortQuestions[discomfortStep]]: value
    }));

    if (discomfortStep < discomfortQuestions.length - 1) {
      setDiscomfortStep(discomfortStep + 1);
    } else {
      setScreen('pathReveal');
    }
  };

  const handlePostAssessmentAnswer = (value) => {
    setPostAssessmentResponses(prev => ({
      ...prev,
      [discomfortQuestions[discomfortStep]]: value
    }));

    if (discomfortStep < discomfortQuestions.length - 1) {
      setDiscomfortStep(discomfortStep + 1);
    } else {
      setScreen('celebration');
    }
  };

  const startSession = (sessionNum) => {
    setCurrentSession(sessionNum);
    setSessionStep('entryCard');
    setContentCardIndex(0);
    setCompanionResp(null);
    setShowCompletionMoment(false);
    setUserInput('');
  };

  const handleCompanionSubmit = () => {
    if (!userInput.trim()) return;

    const responses = sessionContent[currentSession].companionResponses;
    let response = responses.default;

    const lowerInput = userInput.toLowerCase();
    for (const key in responses) {
      if (key !== 'default' && lowerInput.includes(key)) {
        response = responses[key];
        break;
      }
    }

    setCompanionResp(response);
    setUserInput('');
  };

  const completeSession = () => {
    const isNewCompletion = !completedSessions.includes(currentSession);

    if (isNewCompletion) {
      setCompletedSessions(prev => [...prev, currentSession]);

      // Check for milestones
      if (currentSession === 1) {
        setShowMilestoneKudo("You started. That matters more than people think.");
      } else if (currentSession === 3) {
        setShowMilestoneKudo("A lot of people stop before here. You didn't.");
      } else if (currentSession === 4) {
        setShowMilestoneKudo("You're at the halfway point. Think back to Session 1 — you've come a long way from just learning what causes back pain.");
      } else if (currentSession === 8) {
        setShowMilestoneKudo("You've completed the entire program. What you built here — the exercises, the awareness, the habits — those are yours to keep.");
      }
    }

    setSessionStep('completion');
    setShowCompletionMoment(true);

    // Show weekly readiness pulse after session 3
    if (currentSession === 3 && !weeklyReadinessDone) {
      setTimeout(() => {
        if (!weeklyReadinessDone) {
          setScreen('weeklyReadiness');
        }
      }, 3000);
    }
  };

  const renderCompletionMessage = () => {
    const messages = {
      1: "You've taken the first step to understanding your back. That awareness is powerful.",
      2: "Sitting posture practice starts now. Notice how you feel in the next few days.",
      3: "You're building a serious foundation. Standing and lifting safely will protect you for years.",
      4: "Backward bending opens up possibilities. Keep practicing and notice what changes.",
      5: "Balance is key. Forward and backward bending work together to keep you flexible.",
      6: "Supporting stretches might seem simple, but they're foundational to lasting relief.",
      7: "You've got a full exercise toolkit now. Consistency is what transforms possibility into reality.",
      8: "You've completed the full program. This is just the beginning of your journey toward lasting back health."
    };
    return messages[currentSession] || "Great work!";
  };

  // HOME SCREEN
  if (screen === 'homeScreen') {
    return (
      <PhoneFrame>
        <style>{styles}</style>
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '40px 24px',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: 60,
            marginBottom: 20
          }}>
            🌿
          </div>
          <h1 style={{
            fontSize: 28,
            fontWeight: 700,
            color: colors.deepCharcoal,
            margin: '0 0 12px 0'
          }}>
            Lower Back Care
          </h1>
          <p style={{
            fontSize: 16,
            color: colors.warmGray,
            margin: '0 0 40px 0',
            lineHeight: 1.5
          }}>
            An 8-session program designed to reduce pain and build lasting habits.
          </p>
          <button onClick={() => setScreen('goalSetting')} style={{
            width: '100%',
            padding: '16px',
            backgroundColor: colors.softTeal,
            color: colors.warmWhite,
            border: 'none',
            borderRadius: 12,
            fontSize: 16,
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }} onMouseEnter={(e) => e.target.style.backgroundColor = colors.active}
             onMouseLeave={(e) => e.target.style.backgroundColor = colors.softTeal}>
            Start Assessment
          </button>
        </div>
      </PhoneFrame>
    );
  }

  // GOAL SETTING
  if (screen === 'goalSetting') {
    const goalProgress = 1;
    const goalTotal = 2;

    return (
      <PhoneFrame>
        <style>{styles}</style>
        <ProgressBar current={goalProgress} total={goalTotal} />
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          padding: '24px',
          overflowY: 'auto'
        }}>
          <h2 style={{
            fontSize: 22,
            fontWeight: 600,
            color: colors.deepCharcoal,
            margin: '0 0 20px 0'
          }}>
            Tell us about your pain
          </h2>

          <p style={{
            fontSize: 16,
            color: colors.warmGray,
            margin: '0 0 20px 0'
          }}>
            On a scale of 0 (no pain) to 10 (severe pain), where are you today?
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 24,
            gap: 6
          }}>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
              <button
                key={num}
                onClick={() => setPainLevel(num)}
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  border: `2px solid ${painLevel === num ? colors.softTeal : colors.cardBorder}`,
                  backgroundColor: painLevel === num ? colors.softTeal : 'transparent',
                  color: painLevel === num ? colors.warmWhite : colors.warmGray,
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                {num}
              </button>
            ))}
          </div>

          <p style={{
            fontSize: 14,
            color: colors.warmGray,
            marginBottom: 24,
            textAlign: 'center'
          }}>
            {painLevel <= 3 && "Mild discomfort"}
            {painLevel > 3 && painLevel <= 6 && "Moderate pain"}
            {painLevel > 6 && "Significant pain"}
          </p>

          <h3 style={{
            fontSize: 16,
            fontWeight: 600,
            color: colors.deepCharcoal,
            margin: '24px 0 16px 0'
          }}>
            What are your goals?
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
            {goalOptions.map(goal => (
              <label key={goal} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '12px',
                backgroundColor: selectedGoals.includes(goal) ? colors.softCream : 'transparent',
                borderRadius: 8,
                cursor: 'pointer',
                border: `1px solid ${selectedGoals.includes(goal) ? colors.softTeal : colors.cardBorder}`,
                transition: 'all 0.2s'
              }}>
                <input
                  type="checkbox"
                  checked={selectedGoals.includes(goal)}
                  onChange={() => handleSelectGoal(goal)}
                  style={{ cursor: 'pointer' }}
                />
                <span style={{ fontSize: 14, color: colors.deepCharcoal }}>
                  {goal}
                </span>
              </label>
            ))}
          </div>

          <button
            onClick={() => setScreen('preAssessment')}
            disabled={selectedGoals.length === 0}
            style={{
              width: '100%',
              padding: '16px',
              backgroundColor: selectedGoals.length === 0 ? colors.upcoming : colors.softTeal,
              color: colors.warmWhite,
              border: 'none',
              borderRadius: 12,
              fontSize: 16,
              fontWeight: 600,
              cursor: selectedGoals.length === 0 ? 'default' : 'pointer',
              transition: 'background-color 0.3s',
              opacity: selectedGoals.length === 0 ? 0.6 : 1
            }}
          >
            Continue
          </button>
        </div>
      </PhoneFrame>
    );
  }

  // PRE-ASSESSMENT
  if (screen === 'preAssessment') {
    const progress = discomfortStep + 1;
    const total = discomfortQuestions.length;

    return (
      <PhoneFrame>
        <style>{styles}</style>
        <ProgressBar current={progress} total={total} />
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          padding: '24px',
          overflowY: 'auto'
        }}>
          <h2 style={{
            fontSize: 22,
            fontWeight: 600,
            color: colors.deepCharcoal,
            margin: '0 0 24px 0'
          }}>
            How difficult is it to...
          </h2>

          <p style={{
            fontSize: 16,
            fontWeight: 600,
            color: colors.softTeal,
            margin: '0 0 20px 0'
          }}>
            {discomfortQuestions[discomfortStep]}?
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
            {difficultyOptions.map(option => (
              <button
                key={option.value}
                onClick={() => handleDiscomfortAnswer(option.value)}
                style={{
                  padding: '12px 16px',
                  backgroundColor: colors.softCream,
                  border: `1px solid ${colors.cardBorder}`,
                  borderRadius: 8,
                  fontSize: 14,
                  color: colors.deepCharcoal,
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = colors.active;
                  e.target.style.color = colors.warmWhite;
                  e.target.style.borderColor = colors.active;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = colors.softCream;
                  e.target.style.color = colors.deepCharcoal;
                  e.target.style.borderColor = colors.cardBorder;
                }}
              >
                {option.label}
              </button>
            ))}
          </div>

          <p style={{
            fontSize: 12,
            color: colors.warmGray,
            textAlign: 'center'
          }}>
            Question {progress} of {total}
          </p>
        </div>
      </PhoneFrame>
    );
  }

  // PATH REVEAL
  if (screen === 'pathReveal') {
    return (
      <PhoneFrame>
        <style>{styles}</style>
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          padding: '40px 24px',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: 48,
            marginBottom: 20,
            animation: 'fadeIn 0.6s ease-out'
          }}>
            📍
          </div>
          <h2 style={{
            fontSize: 24,
            fontWeight: 600,
            color: colors.deepCharcoal,
            margin: '0 0 16px 0'
          }}>
            Here's your path
          </h2>
          <p style={{
            fontSize: 14,
            color: colors.warmGray,
            margin: '0 0 32px 0',
            lineHeight: 1.6
          }}>
            Based on your answers, we've designed an 8-session journey tailored to your needs.
          </p>

          <JourneyMap completedSessions={[]} currentSession={1} />

          <button
            onClick={() => {
              setScreen('programScreen');
              startSession(1);
            }}
            style={{
              width: '100%',
              padding: '16px',
              backgroundColor: colors.softTeal,
              color: colors.warmWhite,
              border: 'none',
              borderRadius: 12,
              fontSize: 16,
              fontWeight: 600,
              cursor: 'pointer',
              marginTop: 'auto'
            }}
          >
            Let's Begin
          </button>
        </div>
      </PhoneFrame>
    );
  }

  // WEEKLY READINESS
  if (screen === 'weeklyReadiness') {
    return (
      <PhoneFrame>
        <style>{styles}</style>
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          padding: '40px 24px',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: 22,
            fontWeight: 600,
            color: colors.deepCharcoal,
            margin: '0 0 24px 0'
          }}>
            How are you feeling this week?
          </h2>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 16,
            marginBottom: 40,
            flexWrap: 'wrap'
          }}>
            {['😟', '😐', '🙂', '😊', '🤩'].map((emoji, idx) => (
              <button
                key={emoji}
                onClick={() => {
                  setWeeklyEmoji(emoji);
                  setWeeklyReadinessDone(true);
                  setScreen('programScreen');
                }}
                style={{
                  fontSize: 48,
                  backgroundColor: weeklyEmoji === emoji ? colors.softCream : 'transparent',
                  border: `2px solid ${weeklyEmoji === emoji ? colors.softTeal : 'transparent'}`,
                  borderRadius: 12,
                  padding: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                {emoji}
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              setWeeklyReadinessDone(true);
              setScreen('programScreen');
            }}
            style={{
              padding: '12px 24px',
              backgroundColor: colors.softCream,
              border: `1px solid ${colors.cardBorder}`,
              borderRadius: 8,
              fontSize: 14,
              color: colors.deepCharcoal,
              cursor: 'pointer'
            }}
          >
            Skip for now
          </button>
        </div>
      </PhoneFrame>
    );
  }

  // PROGRAM SCREEN (Sessions)
  if (screen === 'programScreen') {
    // ENTRY CARD
    if (sessionStep === 'entryCard') {
      return (
        <PhoneFrame>
          <style>{styles}</style>
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            padding: '24px',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: 52, marginBottom: 20 }}>
              {currentSession === 1 && '🚀'}
              {currentSession === 2 && '🪑'}
              {currentSession === 3 && '⛹️'}
              {currentSession === 4 && '🔄'}
              {currentSession === 5 && '🤸'}
              {currentSession === 6 && '🧘'}
              {currentSession === 7 && '💪'}
              {currentSession === 8 && '🏆'}
            </div>
            <h2 style={{
              fontSize: 26,
              fontWeight: 600,
              color: colors.deepCharcoal,
              margin: '0 0 12px 0'
            }}>
              Session {currentSession}
            </h2>
            <p style={{
              fontSize: 18,
              color: colors.softTeal,
              margin: '0 0 32px 0',
              fontWeight: 500
            }}>
              {sessionContent[currentSession].title}
            </p>
            <button
              onClick={() => setSessionStep('content')}
              style={{
                padding: '14px 32px',
                backgroundColor: colors.softTeal,
                color: colors.warmWhite,
                border: 'none',
                borderRadius: 12,
                fontSize: 16,
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Start
            </button>
          </div>
        </PhoneFrame>
      );
    }

    // CONTENT CARDS
    if (sessionStep === 'content') {
      const cards = sessionContent[currentSession].cards;
      const isLastCard = contentCardIndex === cards.length - 1;

      return (
        <PhoneFrame>
          <style>{styles}</style>
          <ProgressBar current={contentCardIndex + 1} total={cards.length} />
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            padding: '24px',
            overflowY: 'auto'
          }}>
            <h3 style={{
              fontSize: 16,
              fontWeight: 600,
              color: colors.softTeal,
              margin: '0 0 16px 0'
            }}>
              Session {currentSession}: {sessionContent[currentSession].title}
            </h3>

            <div style={{
              backgroundColor: colors.softCream,
              borderRadius: 12,
              padding: '20px',
              marginBottom: 24,
              border: `1px solid ${colors.cardBorder}`,
              animation: 'fadeIn 0.5s ease-out'
            }}>
              <p style={{
                fontSize: 16,
                lineHeight: 1.6,
                color: colors.deepCharcoal,
                margin: 0
              }}>
                {cards[contentCardIndex]}
              </p>
            </div>

            <div style={{
              display: 'flex',
              gap: 8,
              justifyContent: 'center',
              marginBottom: 24
            }}>
              {cards.map((_, idx) => (
                <div
                  key={idx}
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: idx <= contentCardIndex ? colors.softTeal : colors.upcoming,
                    transition: 'all 0.3s'
                  }}
                />
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              <button
                onClick={() => setContentCardIndex(Math.max(0, contentCardIndex - 1))}
                disabled={contentCardIndex === 0}
                style={{
                  flex: 1,
                  padding: '12px',
                  backgroundColor: contentCardIndex === 0 ? colors.upcoming : colors.softCream,
                  border: `1px solid ${colors.cardBorder}`,
                  borderRadius: 8,
                  fontSize: 14,
                  color: contentCardIndex === 0 ? colors.warmGray : colors.deepCharcoal,
                  cursor: contentCardIndex === 0 ? 'default' : 'pointer',
                  opacity: contentCardIndex === 0 ? 0.5 : 1
                }}
              >
                ← Back
              </button>
              <button
                onClick={() => {
                  if (isLastCard) {
                    setSessionStep('checkIn');
                  } else {
                    setContentCardIndex(contentCardIndex + 1);
                  }
                }}
                style={{
                  flex: 1,
                  padding: '12px',
                  backgroundColor: colors.softTeal,
                  color: colors.warmWhite,
                  border: 'none',
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {isLastCard ? 'Continue →' : 'Next →'}
              </button>
            </div>
          </div>
        </PhoneFrame>
      );
    }

    // CHECK-IN
    if (sessionStep === 'checkIn') {
      return (
        <PhoneFrame>
          <style>{styles}</style>
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            padding: '24px',
            overflowY: 'auto'
          }}>
            <h2 style={{
              fontSize: 22,
              fontWeight: 600,
              color: colors.deepCharcoal,
              margin: '0 0 24px 0'
            }}>
              Quick check-in
            </h2>

            <div style={{
              backgroundColor: colors.softCream,
              borderRadius: 12,
              padding: '16px',
              marginBottom: 24,
              border: `1px solid ${colors.cardBorder}`
            }}>
              <p style={{
                fontSize: 16,
                fontWeight: 500,
                color: colors.deepCharcoal,
                margin: 0,
                lineHeight: 1.5
              }}>
                {sessionContent[currentSession].companion}
              </p>
            </div>

            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              marginBottom: 24
            }}>
              <Companion message={sessionContent[currentSession].companion} />
            </div>

            <div style={{
              display: 'flex',
              gap: 8
            }}>
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleCompanionSubmit()}
                placeholder="Type your response..."
                style={{
                  flex: 1,
                  padding: '12px 16px',
                  border: `1px solid ${colors.cardBorder}`,
                  borderRadius: 8,
                  fontSize: 14,
                  fontFamily: 'system-ui, -apple-system, sans-serif'
                }}
              />
              <button
                onClick={handleCompanionSubmit}
                disabled={!userInput.trim()}
                style={{
                  padding: '12px 16px',
                  backgroundColor: userInput.trim() ? colors.softTeal : colors.upcoming,
                  color: colors.warmWhite,
                  border: 'none',
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: userInput.trim() ? 'pointer' : 'default',
                  opacity: userInput.trim() ? 1 : 0.5
                }}
              >
                Send
              </button>
            </div>
          </div>
        </PhoneFrame>
      );
    }

    // COMPANION RESPONSE
    if (sessionStep === 'companion' && companionResp) {
      return (
        <PhoneFrame>
          <style>{styles}</style>
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            padding: '24px',
            justifyContent: 'center'
          }}>
            <Companion message={companionResp} />

            <button
              onClick={() => {
                setSessionStep('completion');
                setShowCompletionMoment(true);
              }}
              style={{
                width: '100%',
                padding: '14px',
                backgroundColor: colors.softTeal,
                color: colors.warmWhite,
                border: 'none',
                borderRadius: 8,
                fontSize: 16,
                fontWeight: 600,
                cursor: 'pointer',
                marginTop: 24
              }}
            >
              Continue
            </button>
          </div>
        </PhoneFrame>
      );
    }

    // COMPLETION MOMENT
    if (sessionStep === 'completion' && showCompletionMoment) {
      if (showMilestoneKudo) {
        return (
          <PhoneFrame>
            <style>{styles}</style>
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              padding: '40px 24px',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: 60,
                marginBottom: 20,
                animation: 'checkmarkPulse 0.6s ease-out'
              }}>
                ⭐
              </div>
              <h2 style={{
                fontSize: 20,
                fontWeight: 600,
                color: colors.deepCharcoal,
                margin: '0 0 16px 0',
                animation: 'fadeIn 0.8s ease-out'
              }}>
                {showMilestoneKudo}
              </h2>
              <button
                onClick={() => {
                  setShowMilestoneKudo(false);
                  completeSession();
                  setTimeout(() => setScreen('programScreen'), 500);
                }}
                style={{
                  padding: '12px 24px',
                  backgroundColor: colors.softTeal,
                  color: colors.warmWhite,
                  border: 'none',
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: 'pointer',
                  marginTop: 24
                }}
              >
                I know, right?
              </button>
            </div>
          </PhoneFrame>
        );
      }

      return (
        <PhoneFrame>
          <style>{styles}</style>
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            padding: '40px 24px',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <Badge badgeName={sessionContent[currentSession].badge} />

            <h2 style={{
              fontSize: 22,
              fontWeight: 600,
              color: colors.deepCharcoal,
              margin: '0 0 16px 0',
              animation: 'fadeIn 0.6s ease-out'
            }}>
              You've completed this session
            </h2>

            <p style={{
              fontSize: 16,
              color: colors.warmGray,
              margin: '0 0 32px 0',
              lineHeight: 1.6,
              animation: 'fadeIn 0.8s ease-out 0.2s both'
            }}>
              {renderCompletionMessage()}
            </p>

            <button
              onClick={() => {
                completeSession();
                setScreen('sessionMenu');
                setSessionStep('entryCard');
              }}
              style={{
                width: '100%',
                padding: '14px',
                backgroundColor: colors.softTeal,
                color: colors.warmWhite,
                border: 'none',
                borderRadius: 8,
                fontSize: 16,
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Next Session
            </button>
          </div>
        </PhoneFrame>
      );
    }
  }

  // SESSION MENU
  if (screen === 'sessionMenu') {
    const isPostAssessmentReady = completedSessions.length === 8;

    return (
      <PhoneFrame>
        <style>{styles}</style>
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          padding: '24px',
          overflowY: 'auto'
        }}>
          <h1 style={{
            fontSize: 28,
            fontWeight: 700,
            color: colors.deepCharcoal,
            margin: '0 0 8px 0'
          }}>
            Lower Back Care
          </h1>
          <p style={{
            fontSize: 14,
            color: colors.warmGray,
            margin: '0 0 24px 0'
          }}>
            {completedSessions.length} of 8 sessions completed
          </p>

          <JourneyMap completedSessions={completedSessions} currentSession={completedSessions.length + 1} />

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            marginBottom: 24
          }}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map(sessionNum => {
              const isCompleted = completedSessions.includes(sessionNum);
              const isCurrent = sessionNum === completedSessions.length + 1;

              return (
                <button
                  key={sessionNum}
                  onClick={() => {
                    setScreen('programScreen');
                    startSession(sessionNum);
                  }}
                  style={{
                    padding: '16px',
                    backgroundColor: isCompleted ? colors.done : (isCurrent ? colors.active : colors.upcoming),
                    color: isCompleted || isCurrent ? colors.warmWhite : colors.warmGray,
                    border: 'none',
                    borderRadius: 8,
                    fontSize: 14,
                    fontWeight: isCompleted || isCurrent ? 600 : 400,
                    cursor: (isCompleted || isCurrent) ? 'pointer' : 'default',
                    opacity: (isCompleted || isCurrent) ? 1 : 0.6,
                    textAlign: 'left',
                    transition: 'all 0.2s'
                  }}
                  disabled={!isCompleted && !isCurrent}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ fontSize: 20 }}>
                      {isCompleted ? '✓' : isCurrent ? '▶' : '○'}
                    </span>
                    <div>
                      <div style={{ fontWeight: 600 }}>Session {sessionNum}</div>
                      <div style={{ fontSize: 12, opacity: 0.8 }}>
                        {sessionContent[sessionNum].title}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {isPostAssessmentReady && (
            <button
              onClick={() => {
                setScreen('postAssessment');
                setDiscomfortStep(0);
                setPostAssessmentResponses({});
              }}
              style={{
                width: '100%',
                padding: '16px',
                backgroundColor: colors.gentleAmber,
                color: colors.warmWhite,
                border: 'none',
                borderRadius: 12,
                fontSize: 16,
                fontWeight: 600,
                cursor: 'pointer',
                marginTop: 'auto'
              }}
            >
              Take Final Assessment
            </button>
          )}
        </div>
      </PhoneFrame>
    );
  }

  // POST-ASSESSMENT
  if (screen === 'postAssessment') {
    const progress = discomfortStep + 1;
    const total = discomfortQuestions.length;

    return (
      <PhoneFrame>
        <style>{styles}</style>
        <ProgressBar current={progress} total={total} />
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          padding: '24px',
          overflowY: 'auto'
        }}>
          <h2 style={{
            fontSize: 22,
            fontWeight: 600,
            color: colors.deepCharcoal,
            margin: '0 0 24px 0'
          }}>
            Final Assessment
          </h2>

          <p style={{
            fontSize: 14,
            color: colors.warmGray,
            margin: '0 0 24px 0'
          }}>
            Let's see how things have changed since your first session.
          </p>

          <h3 style={{
            fontSize: 16,
            fontWeight: 600,
            color: colors.softTeal,
            margin: '0 0 20px 0'
          }}>
            How difficult is it to...
          </h3>

          <p style={{
            fontSize: 16,
            fontWeight: 600,
            color: colors.deepCharcoal,
            margin: '0 0 20px 0'
          }}>
            {discomfortQuestions[discomfortStep]}?
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
            {difficultyOptions.map(option => (
              <button
                key={option.value}
                onClick={() => handlePostAssessmentAnswer(option.value)}
                style={{
                  padding: '12px 16px',
                  backgroundColor: colors.softCream,
                  border: `1px solid ${colors.cardBorder}`,
                  borderRadius: 8,
                  fontSize: 14,
                  color: colors.deepCharcoal,
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = colors.active;
                  e.target.style.color = colors.warmWhite;
                  e.target.style.borderColor = colors.active;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = colors.softCream;
                  e.target.style.color = colors.deepCharcoal;
                  e.target.style.borderColor = colors.cardBorder;
                }}
              >
                {option.label}
              </button>
            ))}
          </div>

          <p style={{
            fontSize: 12,
            color: colors.warmGray,
            textAlign: 'center'
          }}>
            Question {progress} of {total}
          </p>
        </div>
      </PhoneFrame>
    );
  }

  // CELEBRATION
  if (screen === 'celebration') {
    return (
      <PhoneFrame>
        <style>{styles}</style>
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          padding: '40px 24px',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          overflowY: 'auto'
        }}>
          <div style={{
            fontSize: 60,
            marginBottom: 20,
            animation: 'checkmarkPulse 0.6s ease-out'
          }}>
            🎉
          </div>

          <h1 style={{
            fontSize: 26,
            fontWeight: 700,
            color: colors.deepCharcoal,
            margin: '0 0 16px 0'
          }}>
            You've done it!
          </h1>

          <p style={{
            fontSize: 16,
            color: colors.warmGray,
            margin: '0 0 32px 0',
            lineHeight: 1.6
          }}>
            You've completed the entire 8-session program. Notice the progress from where you started.
          </p>

          <div style={{
            width: '100%',
            backgroundColor: colors.softCream,
            borderRadius: 12,
            padding: '20px',
            marginBottom: 32,
            border: `1px solid ${colors.cardBorder}`
          }}>
            <h3 style={{
              fontSize: 14,
              fontWeight: 600,
              color: colors.deepCharcoal,
              margin: '0 0 16px 0'
            }}>
              Your Progress
            </h3>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 0'
              }}>
                <span style={{ fontSize: 14, color: colors.warmGray }}>Sessions completed</span>
                <span style={{ fontSize: 16, fontWeight: 700, color: colors.done }}>8 / 8</span>
              </div>
              <div style={{
                width: '100%',
                height: 8,
                backgroundColor: colors.upcoming,
                borderRadius: 4,
                overflow: 'hidden'
              }}>
                <div style={{
                  height: '100%',
                  width: '100%',
                  backgroundColor: colors.done
                }} />
              </div>
            </div>
          </div>

          <div style={{
            backgroundColor: colors.softCream,
            borderRadius: 12,
            padding: '16px',
            marginBottom: 32,
            border: `1px solid ${colors.cardBorder}`
          }}>
            <p style={{
              fontSize: 14,
              fontStyle: 'italic',
              color: colors.warmGray,
              margin: 0,
              lineHeight: 1.6
            }}>
              "You've come a long way since Session 1. What you built here — the exercises, the awareness, the habits — those are yours to keep."
            </p>
          </div>

          <button
            onClick={() => setScreen('sessionMenu')}
            style={{
              width: '100%',
              padding: '14px',
              backgroundColor: colors.softTeal,
              color: colors.warmWhite,
              border: 'none',
              borderRadius: 8,
              fontSize: 16,
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Back to Program
          </button>
        </div>
      </PhoneFrame>
    );
  }

  return null;
}
