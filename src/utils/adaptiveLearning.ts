/**
 * Adaptive Learning Utilities
 *
 * Provides intelligent quiz generation, spaced repetition,
 * and personalized learning paths based on user performance.
 */

import { persuasionTechniques } from '@/data/persuasion';
import { techniqueQuizQuestions } from '@/data/quiz/techniqueQuiz';
import type { TechniqueQuestion, KnowledgeState, TechniqueMastery } from '@/types/persuasion';

export interface AdaptiveQuizConfig {
  questionCount: number;
  focusOnWeaknesses?: boolean;
  categories?: string[];
  difficultyRange?: ('beginner' | 'intermediate' | 'advanced')[];
  excludeTechniques?: string[];
}

/**
 * Generates an adaptive quiz based on user's knowledge state
 */
export function generateAdaptiveQuiz(
  knowledgeState: KnowledgeState,
  config: AdaptiveQuizConfig = { questionCount: 10 }
): TechniqueQuestion[] {
  const {
    questionCount,
    focusOnWeaknesses = true,
    categories,
    difficultyRange,
    excludeTechniques = [],
  } = config;

  // Get all available questions
  let availableQuestions = [...techniqueQuizQuestions];

  // Filter by categories if specified
  if (categories && categories.length > 0) {
    availableQuestions = availableQuestions.filter((q) =>
      q.relatedTechniques.some((techId) => {
        const tech = persuasionTechniques.find((t) => t.id === techId);
        return tech && categories.includes(tech.category);
      })
    );
  }

  // Filter by difficulty if specified
  if (difficultyRange && difficultyRange.length > 0) {
    availableQuestions = availableQuestions.filter((q) =>
      difficultyRange.includes(q.difficulty as 'beginner' | 'intermediate' | 'advanced')
    );
  }

  // Exclude techniques
  if (excludeTechniques.length > 0) {
    availableQuestions = availableQuestions.filter(
      (q) => !q.relatedTechniques.some((techId) => excludeTechniques.includes(techId))
    );
  }

  // If focusing on weaknesses, prioritize questions about weak techniques
  if (focusOnWeaknesses) {
    // Calculate priority scores for each question
    const questionsWithScores = availableQuestions.map((question) => {
      let score = 0;

      question.relatedTechniques.forEach((techId) => {
        const mastery = knowledgeState.techniques[techId];

        if (!mastery) {
          // Unseen technique - medium priority
          score += 50;
        } else {
          // Lower mastery = higher priority
          score += 100 - mastery.masteryLevel;

          // Recent mistakes increase priority
          const totalAttempts = mastery.encounterCount;
          if (totalAttempts > 0) {
            const accuracy = (mastery.correctIdentifications / totalAttempts) * 100;
            if (accuracy < 70) {
              score += 30; // Boost for low accuracy
            }
          }

          // Low encounter count increases priority (need more practice)
          if (mastery.encounterCount < 5) {
            score += 20;
          }
        }
      });

      // Average score across related techniques
      score = score / question.relatedTechniques.length;

      return { question, score };
    });

    // Sort by score (highest priority first) and add some randomness
    questionsWithScores.sort((a, b) => {
      // Add ±15% randomness to avoid always showing the same questions
      const randomA = a.score * (0.85 + Math.random() * 0.3);
      const randomB = b.score * (0.85 + Math.random() * 0.3);
      return randomB - randomA;
    });

    // Select top questions
    return questionsWithScores.slice(0, questionCount).map((item) => item.question);
  }

  // Random selection
  const shuffled = [...availableQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(questionCount, shuffled.length));
}

/**
 * Determines the next best action for the user
 */
export interface NextAction {
  type: 'quiz' | 'practice' | 'learn' | 'review' | 'celebrate';
  title: string;
  description: string;
  link: string;
  priority: 'critical' | 'high' | 'medium' | 'low';
  reason: string;
}

export function getNextBestAction(
  knowledgeState: KnowledgeState,
  hasActiveStreak: boolean,
  completedModules: number
): NextAction {
  const techniqueStats = Object.values(knowledgeState.techniques) as TechniqueMastery[];
  const totalTechniques = persuasionTechniques.length;
  const viewedTechniques = techniqueStats.length;

  // Calculate overall stats
  let totalMastery = 0;
  let totalAccuracy = 0;
  let weakTechniques = 0;

  techniqueStats.forEach((tech) => {
    totalMastery += tech.masteryLevel;
    const totalAttempts = tech.encounterCount;
    if (totalAttempts > 0) {
      const accuracy = (tech.correctIdentifications / totalAttempts) * 100;
      totalAccuracy += accuracy;
      if (accuracy < 60) weakTechniques++;
    }
  });

  const avgMastery = techniqueStats.length > 0 ? totalMastery / techniqueStats.length : 0;
  const avgAccuracy = techniqueStats.length > 0 ? totalAccuracy / techniqueStats.length : 0;

  // Decision tree for next best action

  // 1. Critical: Has weak techniques that need urgent attention
  if (weakTechniques > 3) {
    return {
      type: 'review',
      title: 'Schwachstellen beheben',
      description: `Du hast ${weakTechniques} Techniken mit niedriger Genauigkeit. Konzentriere dich zuerst darauf!`,
      link: '/dashboard',
      priority: 'critical',
      reason: 'Mehrere Techniken unter 60% Genauigkeit',
    };
  }

  // 2. High: Not enough exploration
  if (viewedTechniques < totalTechniques * 0.3) {
    return {
      type: 'learn',
      title: 'Entdecke mehr Techniken',
      description: `Du hast erst ${viewedTechniques} von ${totalTechniques} Techniken gesehen. Erkunde mehr im Discover Feed!`,
      link: '/discover',
      priority: 'high',
      reason: 'Unter 30% der Techniken gesehen',
    };
  }

  // 3. High: Low average accuracy
  if (avgAccuracy > 0 && avgAccuracy < 70) {
    return {
      type: 'practice',
      title: 'Übe im Simulator',
      description: `Deine Genauigkeit liegt bei ${Math.round(avgAccuracy)}%. Übe mehr im Simulator!`,
      link: '/simulator',
      priority: 'high',
      reason: 'Durchschnittliche Genauigkeit unter 70%',
    };
  }

  // 4. Medium: Need more mastery
  if (avgMastery < 50) {
    return {
      type: 'quiz',
      title: 'Wissens-Quiz starten',
      description: 'Verbessere dein Mastery-Level mit gezielten Quizzes!',
      link: '/quiz',
      priority: 'medium',
      reason: 'Durchschnittliches Mastery unter 50%',
    };
  }

  // 5. Medium: Need to complete modules
  if (completedModules < 3) {
    return {
      type: 'learn',
      title: 'Module abschließen',
      description: `Du hast ${completedModules} von 5 Modulen abgeschlossen. Lerne weiter!`,
      link: '/modules',
      priority: 'medium',
      reason: 'Weniger als 3 Module abgeschlossen',
    };
  }

  // 6. Low: Maintain streak
  if (!hasActiveStreak) {
    return {
      type: 'practice',
      title: 'Starte deine Lernreise',
      description: 'Beginne heute und baue eine tägliche Lerngewohnheit auf!',
      link: '/quiz',
      priority: 'low',
      reason: 'Keine aktive Streak',
    };
  }

  // 7. All good - celebrate and suggest exploration
  if (avgMastery >= 80 && avgAccuracy >= 85) {
    return {
      type: 'celebrate',
      title: 'Fantastische Arbeit! 🎉',
      description: 'Du bist ein Experte! Entdecke fortgeschrittene Techniken oder hilf anderen.',
      link: '/dashboard',
      priority: 'low',
      reason: 'Hervorragende Performance',
    };
  }

  // 8. Default: Keep practicing
  return {
    type: 'quiz',
    title: 'Weiter üben',
    description: 'Halte dein Wissen frisch mit regelmäßigen Quizzes!',
    link: '/quiz',
    priority: 'medium',
    reason: 'Regelmäßiges Üben empfohlen',
  };
}

/**
 * Calculates which techniques should be reviewed based on spaced repetition
 */
export interface SpacedRepetitionItem {
  techniqueId: string;
  techniqueName: string;
  lastPracticed: Date;
  daysSinceLastPractice: number;
  shouldReview: boolean;
  urgency: 'overdue' | 'due-today' | 'due-soon' | 'not-yet';
}

export function getSpacedRepetitionSchedule(
  knowledgeState: KnowledgeState
): SpacedRepetitionItem[] {
  const now = new Date();
  const items: SpacedRepetitionItem[] = [];

  (Object.entries(knowledgeState.techniques) as [string, TechniqueMastery][]).forEach(([techniqueId, mastery]) => {
    const technique = persuasionTechniques.find((t) => t.id === techniqueId);
    if (!technique) return;

    const lastPracticed = new Date(mastery.lastPracticed);
    const daysSince = Math.floor(
      (now.getTime() - lastPracticed.getTime()) / (1000 * 60 * 60 * 24)
    );

    // Calculate review interval based on mastery level
    // Higher mastery = longer interval
    let reviewInterval: number;
    if (mastery.masteryLevel >= 80) {
      reviewInterval = 14; // 2 weeks for mastered techniques
    } else if (mastery.masteryLevel >= 60) {
      reviewInterval = 7; // 1 week for good techniques
    } else if (mastery.masteryLevel >= 40) {
      reviewInterval = 3; // 3 days for medium techniques
    } else {
      reviewInterval = 1; // Daily for weak techniques
    }

    let urgency: SpacedRepetitionItem['urgency'];
    if (daysSince > reviewInterval + 2) {
      urgency = 'overdue';
    } else if (daysSince >= reviewInterval) {
      urgency = 'due-today';
    } else if (daysSince >= reviewInterval - 1) {
      urgency = 'due-soon';
    } else {
      urgency = 'not-yet';
    }

    items.push({
      techniqueId,
      techniqueName: technique.name.de,
      lastPracticed,
      daysSinceLastPractice: daysSince,
      shouldReview: urgency === 'overdue' || urgency === 'due-today',
      urgency,
    });
  });

  // Sort by urgency
  const urgencyOrder = { overdue: 0, 'due-today': 1, 'due-soon': 2, 'not-yet': 3 };
  items.sort((a, b) => urgencyOrder[a.urgency] - urgencyOrder[b.urgency]);

  return items;
}

/**
 * Gets recommended categories to focus on
 */
export interface CategoryRecommendation {
  category: string;
  categoryName: string;
  avgMastery: number;
  avgAccuracy: number;
  techniqueCount: number;
  weakTechniqueCount: number;
  priority: 'high' | 'medium' | 'low';
  recommendation: string;
}

export function getCategoryRecommendations(
  knowledgeState: KnowledgeState
): CategoryRecommendation[] {
  const categories = new Map<string, { mastery: number[]; accuracy: number[]; weak: number }>();

  // Collect stats per category
  (Object.entries(knowledgeState.techniques) as [string, TechniqueMastery][]).forEach(([techniqueId, mastery]) => {
    const technique = persuasionTechniques.find((t) => t.id === techniqueId);
    if (!technique) return;

    if (!categories.has(technique.category)) {
      categories.set(technique.category, { mastery: [], accuracy: [], weak: 0 });
    }

    const cat = categories.get(technique.category)!;
    cat.mastery.push(mastery.masteryLevel);

    const totalAttempts = mastery.encounterCount;
    if (totalAttempts > 0) {
      const accuracy = (mastery.correctIdentifications / totalAttempts) * 100;
      cat.accuracy.push(accuracy);
      if (accuracy < 60) cat.weak++;
    }
  });

  // Build recommendations
  const recommendations: CategoryRecommendation[] = [];

  const categoryNames: Record<string, string> = {
    cognitive_bias: 'Kognitive Verzerrungen',
    social_dynamics: 'Soziale Dynamiken',
    emotional_manipulation: 'Emotionale Manipulation',
    logical_fallacy: 'Logische Fehlschlüsse',
    nlp: 'NLP-Techniken',
    digital_influence: 'Digitale Einflussnahme',
  };

  categories.forEach((stats, category) => {
    const avgMastery = stats.mastery.reduce((a, b) => a + b, 0) / stats.mastery.length;
    const avgAccuracy =
      stats.accuracy.length > 0
        ? stats.accuracy.reduce((a, b) => a + b, 0) / stats.accuracy.length
        : 0;

    let priority: 'high' | 'medium' | 'low';
    let recommendation: string;

    if (stats.weak >= 2 || avgAccuracy < 60) {
      priority = 'high';
      recommendation = 'Dringend: Mehrere Schwachstellen in dieser Kategorie!';
    } else if (avgMastery < 50) {
      priority = 'high';
      recommendation = 'Fokussiere dich auf diese Kategorie für schnelle Verbesserung.';
    } else if (avgMastery < 70) {
      priority = 'medium';
      recommendation = 'Regelmäßiges Üben empfohlen.';
    } else {
      priority = 'low';
      recommendation = 'Gut! Halte dein Niveau mit gelegentlichen Reviews.';
    }

    recommendations.push({
      category,
      categoryName: categoryNames[category] || category,
      avgMastery: Math.round(avgMastery),
      avgAccuracy: Math.round(avgAccuracy),
      techniqueCount: stats.mastery.length,
      weakTechniqueCount: stats.weak,
      priority,
      recommendation,
    });
  });

  // Sort by priority
  const priorityOrder = { high: 0, medium: 1, low: 2 };
  recommendations.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

  return recommendations;
}
