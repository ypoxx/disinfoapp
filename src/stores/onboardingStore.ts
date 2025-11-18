import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface OnboardingState {
  // State
  hasCompletedOnboarding: boolean;
  hasSeenWelcome: boolean;
  visitedPages: Set<string>;
  completedSteps: Set<string>;
  currentStep: number | null;
  showTour: boolean;

  // Actions
  completeOnboarding: () => void;
  markWelcomeSeen: () => void;
  markPageVisited: (page: string) => void;
  markStepCompleted: (step: string) => void;
  startTour: () => void;
  endTour: () => void;
  setCurrentStep: (step: number | null) => void;
  resetOnboarding: () => void;
  hasVisitedPage: (page: string) => boolean;
}

export const useOnboardingStore = create<OnboardingState>()(
  persist(
    (set, get) => ({
      // Initial state
      hasCompletedOnboarding: false,
      hasSeenWelcome: false,
      visitedPages: new Set<string>(),
      completedSteps: new Set<string>(),
      currentStep: null,
      showTour: false,

      // Complete full onboarding
      completeOnboarding: () => {
        set({
          hasCompletedOnboarding: true,
          hasSeenWelcome: true,
          showTour: false,
          currentStep: null,
        });
      },

      // Mark welcome screen as seen
      markWelcomeSeen: () => {
        set({ hasSeenWelcome: true });
      },

      // Mark a page as visited
      markPageVisited: (page: string) => {
        set((state) => {
          const newVisited = new Set(state.visitedPages);
          newVisited.add(page);
          return { visitedPages: newVisited };
        });
      },

      // Mark an onboarding step as completed
      markStepCompleted: (step: string) => {
        set((state) => {
          const newCompleted = new Set(state.completedSteps);
          newCompleted.add(step);
          return { completedSteps: newCompleted };
        });
      },

      // Start the interactive tour
      startTour: () => {
        set({ showTour: true, currentStep: 0 });
      },

      // End the tour
      endTour: () => {
        set({ showTour: false, currentStep: null });
      },

      // Set current tour step
      setCurrentStep: (step: number | null) => {
        set({ currentStep: step });
      },

      // Reset onboarding (for testing)
      resetOnboarding: () => {
        set({
          hasCompletedOnboarding: false,
          hasSeenWelcome: false,
          visitedPages: new Set(),
          completedSteps: new Set(),
          currentStep: null,
          showTour: false,
        });
      },

      // Check if page has been visited
      hasVisitedPage: (page: string) => {
        return get().visitedPages.has(page);
      },
    }),
    {
      name: 'onboarding-storage',
      // Custom serialization for Set
      partialize: (state) => ({
        hasCompletedOnboarding: state.hasCompletedOnboarding,
        hasSeenWelcome: state.hasSeenWelcome,
        visitedPages: Array.from(state.visitedPages),
        completedSteps: Array.from(state.completedSteps),
        currentStep: state.currentStep,
        showTour: state.showTour,
      }),
      // Custom deserialization
      merge: (persisted: any, current) => ({
        ...current,
        ...(persisted as any),
        visitedPages: new Set((persisted as any).visitedPages || []),
        completedSteps: new Set((persisted as any).completedSteps || []),
      }),
    }
  )
);
