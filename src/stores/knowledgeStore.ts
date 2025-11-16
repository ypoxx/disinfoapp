import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { TechniqueMastery, KnowledgeState } from '@/types/persuasion';
import { persuasionTechniques, counterMeasures } from '@/data/persuasion';
import { useAchievementStore } from './achievementStore';

interface KnowledgeStoreState extends KnowledgeState {
  // Actions
  markTechniqueViewed: (techniqueId: string) => void;
  markTechniqueIdentified: (techniqueId: string, correct: boolean) => void;
  markCounterMeasureViewed: (counterMeasureId: string) => void;
  getTechniqueMastery: (techniqueId: string) => TechniqueMastery | undefined;
  getViewedTechniquesCount: () => number;
  getViewedCounterMeasuresCount: () => number;
  getMasteredTechniquesCount: () => number;
  getTechniquesByCategory: (category: string) => TechniqueMastery[];
  updateStudyTime: (seconds: number) => void;
  analyzeWeaknesses: () => void;
}

export const useKnowledgeStore = create<KnowledgeStoreState>()(
  persist(
    (set, get) => ({
      // Initial state
      techniques: {},
      counterMeasures: {},
      totalStudyTime: 0,
      strengths: [],
      weaknesses: [],
      lastUpdated: new Date(),

      // Mark a technique as viewed (opened in detail view or explorer)
      markTechniqueViewed: (techniqueId: string) => {
        set((state) => {
          const existing = state.techniques[techniqueId];
          const now = new Date();

          const updated: TechniqueMastery = existing
            ? {
                ...existing,
                encounterCount: existing.encounterCount + 1,
                lastPracticed: now,
              }
            : {
                techniqueId,
                masteryLevel: 5, // Initial 5% for just viewing
                encounterCount: 1,
                correctIdentifications: 0,
                lastPracticed: now,
                weaknesses: [],
              };

          const newTechniques = {
            ...state.techniques,
            [techniqueId]: updated,
          };

          // Update achievements
          const viewedCount = Object.keys(newTechniques).length;
          const achievementStore = useAchievementStore.getState();

          achievementStore.updateProgress('technique-explorer', viewedCount >= 1 ? 1 : 0);
          achievementStore.updateProgress('technique-hunter', viewedCount);
          achievementStore.updateProgress('technique-master', viewedCount);

          return {
            techniques: newTechniques,
            lastUpdated: now,
          };
        });

        // Analyze strengths/weaknesses after update
        setTimeout(() => get().analyzeWeaknesses(), 100);
      },

      // Mark a technique as identified in simulator/quiz
      markTechniqueIdentified: (techniqueId: string, correct: boolean) => {
        set((state) => {
          const existing = state.techniques[techniqueId] || {
            techniqueId,
            masteryLevel: 0,
            encounterCount: 0,
            correctIdentifications: 0,
            lastPracticed: new Date(),
            weaknesses: [],
          };

          const now = new Date();
          const newCorrectCount = existing.correctIdentifications + (correct ? 1 : 0);
          const newEncounterCount = existing.encounterCount + 1;

          // Calculate mastery level (0-100)
          // Based on: correct identification rate + recency + encounter count
          const identificationRate = newCorrectCount / newEncounterCount;
          const recencyBonus = 5; // Bonus for recent practice
          const encounterBonus = Math.min(newEncounterCount * 5, 20); // Up to 20% for multiple encounters

          let masteryLevel = Math.round(
            identificationRate * 60 + recencyBonus + encounterBonus
          );
          masteryLevel = Math.min(Math.max(masteryLevel, 0), 100);

          // Determine weaknesses
          const weaknesses: string[] = [];
          if (identificationRate < 0.7) {
            weaknesses.push('Niedrige Erkennungsrate');
          }
          if (newEncounterCount < 3) {
            weaknesses.push('Wenig Übung');
          }

          const updated: TechniqueMastery = {
            techniqueId,
            masteryLevel,
            encounterCount: newEncounterCount,
            correctIdentifications: newCorrectCount,
            lastPracticed: now,
            weaknesses,
          };

          const newTechniques = {
            ...state.techniques,
            [techniqueId]: updated,
          };

          // Update category-specific achievements
          const technique = persuasionTechniques.find((t) => t.id === techniqueId);
          if (technique) {
            const categoryTechniques = persuasionTechniques.filter(
              (t) => t.category === technique.category
            );
            const masteredInCategory = categoryTechniques.filter(
              (t) => newTechniques[t.id]?.masteryLevel >= 70
            ).length;

            const achievementStore = useAchievementStore.getState();
            if (technique.category === 'cognitive_bias') {
              achievementStore.updateProgress('cognitive-warrior', masteredInCategory);
            } else if (technique.category === 'social_dynamics') {
              achievementStore.updateProgress('social-guardian', masteredInCategory);
            } else if (technique.category === 'logical_fallacy') {
              achievementStore.updateProgress('logic-defender', masteredInCategory);
            } else if (technique.category === 'digital_technique') {
              achievementStore.updateProgress('digital-detective', masteredInCategory);
            }

            // Pattern recognizer & manipulation detector
            const identifiedTechniques = Object.values(newTechniques).filter(
              (t) => t.correctIdentifications > 0
            ).length;
            achievementStore.updateProgress('pattern-recognizer', identifiedTechniques);
            achievementStore.updateProgress('manipulation-detector', identifiedTechniques);
          }

          return {
            techniques: newTechniques,
            lastUpdated: now,
          };
        });

        // Analyze strengths/weaknesses after update
        setTimeout(() => get().analyzeWeaknesses(), 100);
      },

      // Mark a counter-measure as viewed
      markCounterMeasureViewed: (counterMeasureId: string) => {
        set((state) => {
          const existing = state.counterMeasures[counterMeasureId] || 0;
          const newValue = Math.min(existing + 10, 100); // +10% familiarity per view

          const newCounterMeasures = {
            ...state.counterMeasures,
            [counterMeasureId]: newValue,
          };

          // Update achievement
          const viewedCount = Object.keys(newCounterMeasures).length;
          const achievementStore = useAchievementStore.getState();
          achievementStore.updateProgress('counter-master', viewedCount);

          return {
            counterMeasures: newCounterMeasures,
            lastUpdated: new Date(),
          };
        });
      },

      // Get mastery for a specific technique
      getTechniqueMastery: (techniqueId: string) => {
        return get().techniques[techniqueId];
      },

      // Get count of viewed techniques
      getViewedTechniquesCount: () => {
        return Object.keys(get().techniques).length;
      },

      // Get count of viewed counter-measures
      getViewedCounterMeasuresCount: () => {
        return Object.keys(get().counterMeasures).length;
      },

      // Get count of mastered techniques (mastery >= 70%)
      getMasteredTechniquesCount: () => {
        return Object.values(get().techniques).filter((t) => t.masteryLevel >= 70).length;
      },

      // Get techniques by category
      getTechniquesByCategory: (category: string) => {
        const categoryTechniqueIds = persuasionTechniques
          .filter((t) => t.category === category)
          .map((t) => t.id);

        return categoryTechniqueIds
          .map((id) => get().techniques[id])
          .filter((t): t is TechniqueMastery => t !== undefined);
      },

      // Update total study time
      updateStudyTime: (seconds: number) => {
        set((state) => ({
          totalStudyTime: state.totalStudyTime + seconds,
          lastUpdated: new Date(),
        }));
      },

      // Analyze and update strengths/weaknesses
      analyzeWeaknesses: () => {
        const { techniques } = get();
        const masteryValues = Object.entries(techniques);

        // Sort by mastery level
        const sorted = [...masteryValues].sort(
          (a, b) => b[1].masteryLevel - a[1].masteryLevel
        );

        // Top 5 are strengths, bottom 5 are weaknesses (if mastery < 50)
        const strengths = sorted
          .slice(0, 5)
          .filter(([_, t]) => t.masteryLevel >= 50)
          .map(([id]) => id);

        const weaknesses = sorted
          .slice(-5)
          .filter(([_, t]) => t.masteryLevel < 50)
          .map(([id]) => id)
          .reverse();

        set({ strengths, weaknesses, lastUpdated: new Date() });
      },
    }),
    {
      name: 'knowledge-store',
    }
  )
);
