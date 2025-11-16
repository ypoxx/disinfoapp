import { TechniqueMastery, KnowledgeState, PersuasionTechnique, TechniqueCategory } from '@/types/persuasion';
import { persuasionTechniques } from '@/data/persuasion';

export interface CategoryStats {
  category: TechniqueCategory;
  averageMastery: number;
  totalTechniques: number;
  masteredTechniques: number; // mastery >= 70
  practiceCount: number;
  accuracy: number;
}

export interface LearningTimelineEvent {
  date: Date;
  techniqueId: string;
  techniqueName: string;
  eventType: 'first_encounter' | 'mastery_gained' | 'practice';
  masteryLevel: number;
}

export interface WeaknessAnalysis {
  techniqueId: string;
  techniqueName: string;
  masteryLevel: number;
  encounterCount: number;
  accuracy: number;
  category: TechniqueCategory;
  priority: 'high' | 'medium' | 'low';
  recommendations: string[];
}

export interface DashboardStats {
  totalTechniques: number;
  viewedTechniques: number;
  masteredTechniques: number; // >= 70% mastery
  averageMastery: number;
  totalPracticeCount: number;
  overallAccuracy: number;
  strongestCategory: CategoryStats | null;
  weakestCategory: CategoryStats | null;
  recentActivity: LearningTimelineEvent[];
  weaknesses: WeaknessAnalysis[];
}

/**
 * Calculate statistics for each technique category
 */
export function calculateCategoryStats(knowledgeState: KnowledgeState): CategoryStats[] {
  const categories = new Map<TechniqueCategory, CategoryStats>();

  // Initialize categories
  const allCategories: TechniqueCategory[] = [
    'cognitive_bias',
    'social_dynamics',
    'logical_fallacy',
    'emotional_manipulation',
    'nlp',
    'digital_influence',
  ];

  allCategories.forEach((category) => {
    categories.set(category, {
      category,
      averageMastery: 0,
      totalTechniques: 0,
      masteredTechniques: 0,
      practiceCount: 0,
      accuracy: 0,
    });
  });

  // Aggregate data by category
  persuasionTechniques.forEach((technique) => {
    const stats = categories.get(technique.category)!;
    stats.totalTechniques++;

    const mastery = knowledgeState.techniqueMastery.get(technique.id);
    if (mastery) {
      stats.practiceCount += mastery.encounterCount;
      stats.averageMastery += mastery.masteryLevel;
      if (mastery.masteryLevel >= 70) {
        stats.masteredTechniques++;
      }
      if (mastery.encounterCount > 0) {
        stats.accuracy += mastery.correctIdentifications / mastery.encounterCount;
      }
    }
  });

  // Calculate averages
  categories.forEach((stats) => {
    const techniqueCount = stats.totalTechniques;
    if (techniqueCount > 0) {
      stats.averageMastery = Math.round(stats.averageMastery / techniqueCount);
      stats.accuracy = Math.round((stats.accuracy / techniqueCount) * 100);
    }
  });

  return Array.from(categories.values());
}

/**
 * Build a timeline of learning events
 */
export function buildLearningTimeline(knowledgeState: KnowledgeState): LearningTimelineEvent[] {
  const events: LearningTimelineEvent[] = [];

  knowledgeState.techniqueMastery.forEach((mastery, techniqueId) => {
    const technique = persuasionTechniques.find((t) => t.id === techniqueId);
    if (!technique) return;

    // First encounter event
    if (mastery.encounterCount > 0) {
      events.push({
        date: mastery.lastPracticed,
        techniqueId,
        techniqueName: technique.name.de,
        eventType: 'practice',
        masteryLevel: mastery.masteryLevel,
      });
    }

    // Mastery gained event (if mastery >= 70)
    if (mastery.masteryLevel >= 70) {
      events.push({
        date: mastery.lastPracticed,
        techniqueId,
        techniqueName: technique.name.de,
        eventType: 'mastery_gained',
        masteryLevel: mastery.masteryLevel,
      });
    }
  });

  // Sort by date, most recent first
  events.sort((a, b) => b.date.getTime() - a.date.getTime());

  return events.slice(0, 20); // Return last 20 events
}

/**
 * Analyze weaknesses and generate recommendations
 */
export function analyzeWeaknesses(knowledgeState: KnowledgeState): WeaknessAnalysis[] {
  const weaknesses: WeaknessAnalysis[] = [];

  knowledgeState.techniqueMastery.forEach((mastery, techniqueId) => {
    const technique = persuasionTechniques.find((t) => t.id === techniqueId);
    if (!technique) return;

    // Only include techniques with at least 2 encounters
    if (mastery.encounterCount < 2) return;

    const accuracy = mastery.encounterCount > 0
      ? (mastery.correctIdentifications / mastery.encounterCount) * 100
      : 0;

    // Consider it a weakness if mastery < 50 or accuracy < 60%
    if (mastery.masteryLevel < 50 || accuracy < 60) {
      const recommendations: string[] = [];

      // Generate contextual recommendations
      if (accuracy < 40) {
        recommendations.push('Überprüfe die Beispiele im Technik-Explorer');
        recommendations.push('Wiederhole die grundlegende Definition');
      } else if (accuracy < 60) {
        recommendations.push('Übe mit dem Simulator, um mehr Beispiele zu sehen');
      }

      if (mastery.encounterCount < 5) {
        recommendations.push('Mehr Übung benötigt - nimm am Quiz teil');
      }

      if (technique.difficulty === 'advanced' && mastery.masteryLevel < 50) {
        recommendations.push('Diese Technik ist fortgeschritten - nimm dir Zeit zum Lernen');
      }

      // Priority based on combination of low mastery and high encounter count
      let priority: 'high' | 'medium' | 'low' = 'low';
      if (mastery.masteryLevel < 30 && mastery.encounterCount >= 5) {
        priority = 'high';
      } else if (mastery.masteryLevel < 50 && mastery.encounterCount >= 3) {
        priority = 'medium';
      }

      weaknesses.push({
        techniqueId,
        techniqueName: technique.name.de,
        masteryLevel: mastery.masteryLevel,
        encounterCount: mastery.encounterCount,
        accuracy: Math.round(accuracy),
        category: technique.category,
        priority,
        recommendations,
      });
    }
  });

  // Sort by priority (high -> medium -> low) then by mastery level (low -> high)
  const priorityOrder = { high: 0, medium: 1, low: 2 };
  weaknesses.sort((a, b) => {
    const priorityDiff = priorityOrder[a.priority] - priorityOrder[b.priority];
    if (priorityDiff !== 0) return priorityDiff;
    return a.masteryLevel - b.masteryLevel;
  });

  return weaknesses;
}

/**
 * Calculate comprehensive dashboard statistics
 */
export function calculateDashboardStats(knowledgeState: KnowledgeState): DashboardStats {
  const categoryStats = calculateCategoryStats(knowledgeState);
  const timeline = buildLearningTimeline(knowledgeState);
  const weaknesses = analyzeWeaknesses(knowledgeState);

  let totalMastery = 0;
  let totalPracticeCount = 0;
  let totalCorrect = 0;
  let totalEncounters = 0;
  let viewedCount = 0;
  let masteredCount = 0;

  knowledgeState.techniqueMastery.forEach((mastery) => {
    totalMastery += mastery.masteryLevel;
    totalPracticeCount += mastery.encounterCount;
    totalCorrect += mastery.correctIdentifications;
    totalEncounters += mastery.encounterCount;
    viewedCount++;

    if (mastery.masteryLevel >= 70) {
      masteredCount++;
    }
  });

  const averageMastery = viewedCount > 0 ? Math.round(totalMastery / viewedCount) : 0;
  const overallAccuracy = totalEncounters > 0 ? Math.round((totalCorrect / totalEncounters) * 100) : 0;

  // Find strongest and weakest categories
  let strongestCategory: CategoryStats | null = null;
  let weakestCategory: CategoryStats | null = null;

  categoryStats.forEach((stats) => {
    if (stats.practiceCount === 0) return; // Skip categories with no practice

    if (!strongestCategory || stats.averageMastery > strongestCategory.averageMastery) {
      strongestCategory = stats;
    }
    if (!weakestCategory || stats.averageMastery < weakestCategory.averageMastery) {
      weakestCategory = stats;
    }
  });

  return {
    totalTechniques: persuasionTechniques.length,
    viewedTechniques: viewedCount,
    masteredTechniques: masteredCount,
    averageMastery,
    totalPracticeCount,
    overallAccuracy,
    strongestCategory,
    weakestCategory,
    recentActivity: timeline,
    weaknesses,
  };
}

/**
 * Get mastery level color based on percentage
 */
export function getMasteryColor(masteryLevel: number): string {
  if (masteryLevel >= 80) return '#10b981'; // green
  if (masteryLevel >= 60) return '#3b82f6'; // blue
  if (masteryLevel >= 40) return '#f59e0b'; // orange
  if (masteryLevel >= 20) return '#ef4444'; // red
  return '#6b7280'; // gray
}

/**
 * Get mastery level label
 */
export function getMasteryLabel(masteryLevel: number): string {
  if (masteryLevel >= 80) return 'Experte';
  if (masteryLevel >= 60) return 'Fortgeschritten';
  if (masteryLevel >= 40) return 'Mittel';
  if (masteryLevel >= 20) return 'Anfänger';
  return 'Ungeübt';
}

/**
 * Format category name for display
 */
export function formatCategoryName(category: TechniqueCategory): string {
  const names: Record<TechniqueCategory, string> = {
    cognitive_bias: 'Kognitive Verzerrungen',
    social_dynamics: 'Soziale Dynamik',
    logical_fallacy: 'Logische Fehlschlüsse',
    emotional_manipulation: 'Emotionale Manipulation',
    nlp: 'NLP-Techniken',
    digital_influence: 'Digitale Beeinflussung',
  };
  return names[category] || category;
}
