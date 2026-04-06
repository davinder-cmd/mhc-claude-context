/**
 * Branch Matcher — Bounded Response Selection
 *
 * Given user input, selects the best matching response branch
 * from the pre-approved set. No AI generation involved.
 *
 * Selection priority:
 * 1. Escalation (checked separately before this runs)
 * 2. First branch with a trigger keyword match
 * 3. Fallback response if no branch matches
 */

import { S1M1_BRANCHES, S1M1_FALLBACK_RESPONSE } from '../data/companionResponses';

export function matchBranch(userInput) {
  if (!userInput || typeof userInput !== 'string') {
    return {
      branchId: 'fallback',
      response: S1M1_FALLBACK_RESPONSE,
    };
  }

  const normalized = userInput.toLowerCase().trim();

  // Score each branch by number of trigger matches (most specific wins)
  let bestBranch = null;
  let bestScore = 0;

  for (const branch of S1M1_BRANCHES) {
    let score = 0;
    for (const trigger of branch.triggers) {
      if (normalized.includes(trigger.toLowerCase())) {
        score += trigger.length; // Longer matches score higher (more specific)
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestBranch = branch;
    }
  }

  if (bestBranch) {
    return {
      branchId: bestBranch.id,
      response: bestBranch.response,
    };
  }

  return {
    branchId: 'fallback',
    response: S1M1_FALLBACK_RESPONSE,
  };
}
