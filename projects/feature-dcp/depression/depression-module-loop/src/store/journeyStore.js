/**
 * Journey Store (Zustand)
 * Manages session progress, module state, and companion state.
 */

import { create } from 'zustand';

export const useJourneyStore = create((set, get) => ({
  // ── Session progress ───────────────────────────────────────────────
  // Map of sessionId → 'done' | 'active' | 'upcoming'
  sessionStates: {
    s1: 'active',
    s2: 'upcoming',
    s3: 'upcoming',
    s4: 'upcoming',
    s5: 'upcoming',
    s6: 'upcoming',
    s7: 'upcoming',
    s8: 'upcoming',
    s9: 'upcoming',
    s10: 'upcoming',
  },

  // ── Current module progress ────────────────────────────────────────
  currentModule: {
    id: 's1m1',
    sessionId: 's1',
    step: 'entry', // 'entry' | 'content' | 'checkin' | 'companion' | 'completion'
    contentCardIndex: 0,
    checkinAnswers: {},
  },

  // ── Companion state (per brief Section 8.3) ────────────────────────
  companionState: {
    moduleHistory: [],        // array of {moduleId, userResponse, companionResponse}
    currentTier: 3,           // Depression = Tier 3
    currentModuleContext: {},
    escalationTriggered: false,
  },

  // ── Actions ────────────────────────────────────────────────────────

  advanceStep: () => {
    const stepOrder = ['entry', 'content', 'checkin', 'companion', 'completion'];
    const { currentModule } = get();
    const currentIndex = stepOrder.indexOf(currentModule.step);
    if (currentIndex < stepOrder.length - 1) {
      set({
        currentModule: {
          ...currentModule,
          step: stepOrder[currentIndex + 1],
        },
      });
    }
  },

  advanceContentCard: () => {
    const { currentModule } = get();
    set({
      currentModule: {
        ...currentModule,
        contentCardIndex: currentModule.contentCardIndex + 1,
      },
    });
  },

  setCheckinAnswer: (questionId, answerId) => {
    const { currentModule } = get();
    set({
      currentModule: {
        ...currentModule,
        checkinAnswers: {
          ...currentModule.checkinAnswers,
          [questionId]: answerId,
        },
      },
    });
  },

  recordCompanionInteraction: (userResponse, companionResponse) => {
    const { companionState, currentModule } = get();
    set({
      companionState: {
        ...companionState,
        moduleHistory: [
          ...companionState.moduleHistory,
          {
            moduleId: currentModule.id,
            userResponse,
            companionResponse,
          },
        ],
      },
    });
  },

  triggerEscalation: () => {
    const { companionState } = get();
    set({
      companionState: {
        ...companionState,
        escalationTriggered: true,
      },
    });
  },

  completeModule: () => {
    const { currentModule, sessionStates } = get();
    // For S1M1, mark S1 as done and S2 as active
    // (In production, this would check if all modules in session are done)
    set({
      sessionStates: {
        ...sessionStates,
        [currentModule.sessionId]: 'done',
        s2: 'active', // hardcoded for prototype — next session becomes active
      },
      currentModule: {
        ...currentModule,
        step: 'complete',
      },
    });
  },
}));
