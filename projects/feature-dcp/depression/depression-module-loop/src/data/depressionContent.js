/**
 * Depression Module Content — Session 1, Module 1
 * Source: DTx Managing Depression - Final Content as of JAN 2023
 * Tier: 3 (Clinical-Adjacent)
 */

export const SESSIONS = [
  {
    id: 's1',
    number: 1,
    title: 'Understanding Depression',
    description: 'Learn what contributes to depression and its symptoms.',
    moduleCount: 7,
  },
  {
    id: 's2',
    number: 2,
    title: 'What is CBT?',
    description: 'Learn what Cognitive Behavioral Therapy is and how it works.',
    moduleCount: 5,
  },
  {
    id: 's3',
    number: 3,
    title: 'Mindfulness and Self-compassion',
    description: 'Learn how mindfulness and self-compassion can help you move through your depression.',
    moduleCount: 6,
  },
  {
    id: 's4',
    number: 4,
    title: 'Thoughts',
    description: 'Learn to identify your negative automatic thoughts.',
    moduleCount: 5,
  },
  {
    id: 's5',
    number: 5,
    title: 'Helpful Thoughts',
    description: 'Learn to challenge your negative thoughts and consider more accurate and helpful thoughts.',
    moduleCount: 5,
  },
  {
    id: 's6',
    number: 6,
    title: 'Emotions',
    description: 'Learn how identifying your emotions can help you accept and manage them.',
    moduleCount: 5,
  },
  {
    id: 's7',
    number: 7,
    title: 'Complex Emotions',
    description: 'Learn how to accept and manage complex emotions.',
    moduleCount: 5,
  },
  {
    id: 's8',
    number: 8,
    title: 'Behavior',
    description: 'Learn how changing your behavior can affect your thoughts and emotions.',
    moduleCount: 7,
  },
  {
    id: 's9',
    number: 9,
    title: 'Helpful Actions',
    description: 'Learn more actions you can take to manage your depression.',
    moduleCount: 6,
  },
  {
    id: 's10',
    number: 10,
    title: 'Moving Forward',
    description: 'Make a plan to move forward and manage setbacks.',
    moduleCount: 5,
  },
];

export const S1M1 = {
  id: 's1m1',
  sessionId: 's1',
  tier: 3,
  type: 'education',
  hasAudio: true,
  title: 'What is Depression?',
  estimatedMinutes: 5,

  entryCard: {
    title: 'What is Depression?',
    subtitle: 'Session 1 · ~5 min',
    framingSentence:
      "Let's start by understanding what depression really is — and isn't. No tests, no pressure.",
  },

  contentCards: [
    {
      id: 'c1',
      body: 'At any given time, 18.5% of adults in the U.S. are experiencing symptoms of depression and 5.7% of the global population is experiencing clinical depression. Depression doesn\'t discriminate. A person of any age or circumstance can experience depression.',
    },
    {
      id: 'c2',
      body: 'While everyone feels down sometimes, depression is a more prolonged and intense state. It significantly impairs ability to function in everyday life.',
    },
    {
      id: 'c3',
      body: 'Symptoms can range from moderate to severe. You may feel sad, sluggish, hopeless or empty. You may have less interest in things you enjoy or struggle to do anything at all. Some people experience feelings of anger or irritability. Others report physical symptoms, such as chronic pain or headaches.',
    },
    {
      id: 'c4',
      body: 'These symptoms must not be a result of a medical condition or substance abuse. Depression may occur with other psychiatric disorders, such as generalized anxiety disorder and insomnia.',
    },
    {
      id: 'c5',
      body: 'To be diagnosed as depressed, an individual must have symptoms for more than 2 weeks and significant impairment in the functions of daily living. However, you do not need a clinical diagnosis to benefit from this program.',
    },
  ],

  crisisCallout: {
    body: 'If you are experiencing thoughts of harming yourself or suicide, contact emergency services in your local area. In the U.S., call 911, call or text 988 to reach the 24-hour National Suicide Helpline or go to an emergency room.',
  },
};
