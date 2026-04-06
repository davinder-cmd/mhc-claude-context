/**
 * Bounded Companion Response Set — S1M1: "What is Depression?"
 * Tier 3 (Clinical-Adjacent): Fully pre-approved responses, NO free generation.
 *
 * STATUS: DRAFT — Requires clinical/stakeholder review before production use.
 */

// ── Companion opening prompt ──────────────────────────────────────────
export const S1M1_COMPANION_PROMPT =
  "You just spent time learning about what depression actually is — that's a real step. Was there anything in there that felt different from what you expected?";

// ── Bounded response branches ─────────────────────────────────────────
// Selection logic uses keyword/intent matching on user input.
// Order matters: escalation is checked first, then branches in priority order.

export const S1M1_BRANCHES = [
  {
    id: 'branch_a',
    label: 'Something surprised them',
    triggers: [
      'yes', "didn't know", 'surprised', "didn't realize", 'interesting',
      'statistics', 'how common', 'I thought', 'never knew', 'wow',
      'really', 'new to me', 'eye opening', 'eye-opening',
    ],
    response:
      "It's worth sitting with that. A lot of people carry assumptions about depression that don't match reality. You now know something different — that matters.",
  },
  {
    id: 'branch_b',
    label: 'Nothing new / already knew',
    triggers: [
      'no', 'knew', 'already knew', 'nothing new', 'familiar', 'not really',
      'knew that', 'heard before', 'old news', 'aware', 'knew most',
    ],
    response:
      "That makes sense — sometimes learning confirms what you already feel. The fact that you're here, going through this intentionally, says a lot.",
  },
  {
    id: 'branch_c',
    label: 'Personal connection / emotional response',
    triggers: [
      'I feel', "I've been", "that's me", 'I relate', 'I struggle',
      'going through', 'hard', 'difficult', 'tough', 'my experience',
      'I have depression', 'I am depressed', 'dealing with', 'been there',
      'hit home', 'hits close',
    ],
    response:
      "Thank you for sharing that. This program is built for exactly where you are. You don't have to have it figured out — showing up is the part that counts.",
  },
  {
    id: 'branch_d',
    label: 'Short / ambiguous reply',
    triggers: [
      'ok', 'sure', 'yeah', 'idk', 'maybe', 'fine', 'cool', 'k',
      'mhm', 'yep', 'nah', 'dunno', 'whatever', 'next',
    ],
    response:
      "No need to say more than that. You showed up and finished the first module — that's the hardest one to start. Ready to see what's next?",
  },
  {
    id: 'branch_e',
    label: 'Asks clinical question / requests advice',
    triggers: [
      'should I', 'do I have', 'am I depressed', 'what should I do',
      'is it normal', 'diagnosis', 'medication', 'treatment', 'therapy',
      'doctor', 'therapist', 'prescribe', 'clinical',
    ],
    response:
      "That's an important question, and it deserves a real answer from someone qualified. A doctor or mental health professional would be the right person to talk to about that. In the meantime, this program will give you practical tools you can start using right away.",
  },
];

// ── Fallback response ─────────────────────────────────────────────────
// Used when no branch triggers match with sufficient confidence.
export const S1M1_FALLBACK_RESPONSE =
  "Thanks for being here. You've taken the first step — and that's the one most people put off. Let's keep going when you're ready.";

// ── Escalation response ──────────────────────────────────────────────
// Overrides ALL branches. Fires when crisis keywords detected.
export const ESCALATION_RESPONSE = {
  message:
    "It sounds like you might be going through something really difficult right now. You don't have to handle this alone.",
  resources: [
    {
      label: 'Suicide & Crisis Lifeline',
      action: 'Call or text 988',
      detail: 'Available 24/7',
    },
    {
      label: 'Emergency Services',
      action: 'Call 911',
      detail: 'For immediate emergency help',
    },
  ],
  closing: "I'm glad you're here. When you're ready, your program will be right where you left it.",
};

// ── Escalation keyword set ────────────────────────────────────────────
// High-confidence: any match triggers escalation.
// Should be reviewed and expanded by clinical stakeholders.
export const ESCALATION_KEYWORDS_HIGH = [
  'kill myself',
  'want to die',
  'end my life',
  'suicide',
  'suicidal',
  'self-harm',
  'self harm',
  'hurt myself',
  'cutting myself',
  "don't want to be alive",
  "don't want to live",
  'better off dead',
  'no reason to live',
  "can't go on",
  'end it all',
  'not worth living',
  'wanna die',
  'want to kill',
  'rather be dead',
];

// Context-dependent: needs surrounding negative context.
export const ESCALATION_KEYWORDS_CONTEXT = [
  { keyword: 'hopeless', modifiers: ['completely', 'totally', 'give up', 'no point'] },
  { keyword: "can't take it", modifiers: ['anymore', 'any more'] },
  { keyword: 'harm', modifiers: ['myself', 'self'] },
];

// ── Micro check-in questions ─────────────────────────────────────────
export const S1M1_CHECKIN_QUESTIONS = [
  {
    id: 'q1',
    text: "Depression affects people differently. Which of these did you most relate to from what you just read?",
    options: [
      { id: 'q1a', label: 'Emotional symptoms (sadness, hopelessness, emptiness)' },
      { id: 'q1b', label: 'Energy and motivation changes' },
      { id: 'q1c', label: 'Physical symptoms (pain, headaches, sleep)' },
      { id: 'q1d', label: "I'm not sure yet — still taking it in" },
    ],
  },
  {
    id: 'q2',
    text: 'How familiar were you with this information before today?',
    options: [
      { id: 'q2a', label: 'Most of it was new to me' },
      { id: 'q2b', label: 'Some was new, some I knew' },
      { id: 'q2c', label: 'I was already pretty familiar' },
      { id: 'q2d', label: "I'd rather not say" },
    ],
  },
];

// ── Completion moment ────────────────────────────────────────────────
export const S1M1_COMPLETION = {
  badgeName: 'Resilience Aware',
  message:
    "You just took the first step toward understanding depression — not as a label, but as something you can learn to work with. That takes courage.",
};

// ── Milestone kudo (first module) ────────────────────────────────────
export const FIRST_MODULE_KUDO =
  "You started. That matters more than people think.";
