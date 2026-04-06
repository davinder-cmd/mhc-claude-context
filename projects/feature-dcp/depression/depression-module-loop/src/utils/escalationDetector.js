/**
 * Escalation Detector — Tier 3 Safety Layer
 *
 * Checks user input against the escalation keyword set.
 * Returns true if crisis language is detected.
 *
 * NOTE: This is a prototype-grade detector using keyword matching.
 * Production should use a more sophisticated NLP-based approach
 * reviewed by clinical stakeholders.
 */

import {
  ESCALATION_KEYWORDS_HIGH,
  ESCALATION_KEYWORDS_CONTEXT,
} from '../data/companionResponses';

export function detectEscalation(userInput) {
  if (!userInput || typeof userInput !== 'string') return false;

  const normalized = userInput.toLowerCase().trim();

  // Check high-confidence keywords first (any match = escalation)
  for (const keyword of ESCALATION_KEYWORDS_HIGH) {
    if (normalized.includes(keyword)) {
      return true;
    }
  }

  // Check context-dependent keywords (keyword + modifier required)
  for (const { keyword, modifiers } of ESCALATION_KEYWORDS_CONTEXT) {
    if (normalized.includes(keyword)) {
      for (const modifier of modifiers) {
        if (normalized.includes(modifier)) {
          return true;
        }
      }
    }
  }

  return false;
}
