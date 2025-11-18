import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, CheckCircle, X, TrendingUp, Award, RefreshCw, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, Button } from '@/components/shared/UIComponents';
import { getRandomQuestions } from '@/data/quiz/techniqueQuiz';
import { TechniqueTagList } from '@/components/techniques/TechniqueTag';
import { useKnowledgeStore } from '@/stores/knowledgeStore';
import { useProgressStore } from '@/stores/progressStore';
import { useAchievementStore } from '@/stores/achievementStore';
import { shuffle } from '@/utils/arrayUtils';
import type { TechniqueQuestion } from '@/types/persuasion';

export function TechniqueQuizPage() {
  const [questions, setQuestions] = useState<TechniqueQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Set<string>>(new Set());
  const [showExplanation, setShowExplanation] = useState(false);
  const [results, setResults] = useState<{ [questionId: string]: boolean }>({});
  const [completed, setCompleted] = useState(false);

  const { markTechniqueIdentified } = useKnowledgeStore();
  const { addXP } = useProgressStore();
  const { updateProgress } = useAchievementStore();

  // Initialize quiz with 10 random questions
  useEffect(() => {
    setQuestions(getRandomQuestions(10));
  }, []);

  // Shuffle options for each question
  const shuffledQuestions = useMemo(() => {
    return questions.map((question) => ({
      ...question,
      options: shuffle(question.options),
    }));
  }, [questions]);

  if (questions.length === 0) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  const isAnswered = results[currentQuestion.id] !== undefined;

  const handleSelectAnswer = (answerId: string) => {
    if (isAnswered) return;

    const newSelected = new Set(selectedAnswers);

    // For single-choice questions
    if (currentQuestion.type === 'identification') {
      newSelected.clear();
      newSelected.add(answerId);
    } else {
      // For multi-choice/matching questions
      if (newSelected.has(answerId)) {
        newSelected.delete(answerId);
      } else {
        newSelected.add(answerId);
      }
    }

    setSelectedAnswers(newSelected);
  };

  const handleSubmitAnswer = () => {
    const selectedArray = Array.from(selectedAnswers);
    const correctAnswers = currentQuestion.correctAnswers;

    // Check if answer is correct
    const isCorrect =
      selectedArray.length === correctAnswers.length &&
      selectedArray.every((a) => correctAnswers.includes(a));

    setResults((prev) => ({
      ...prev,
      [currentQuestion.id]: isCorrect,
    }));

    // Track in knowledge store
    currentQuestion.relatedTechniques.forEach((techniqueId) => {
      markTechniqueIdentified(techniqueId, isCorrect);
    });

    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswers(new Set());
      setShowExplanation(false);
    } else {
      // Calculate final score
      const score = Object.values(results).filter((r) => r).length;
      const percentage = Math.round((score / questions.length) * 100);

      // Award XP
      const xpEarned = Math.round((percentage / 100) * 200);
      addXP(xpEarned);

      // Update achievements
      if (percentage === 100) {
        updateProgress('perfectionist', 1);
      }

      setCompleted(true);
    }
  };

  const handleRestart = () => {
    setQuestions(getRandomQuestions(10));
    setCurrentQuestionIndex(0);
    setSelectedAnswers(new Set());
    setShowExplanation(false);
    setResults({});
    setCompleted(false);
  };

  if (completed) {
    const score = Object.values(results).filter((r) => r).length;
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <div className="container mx-auto max-w-3xl px-4 py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <Card className="p-8">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-primary/10 p-6">
                {percentage >= 80 ? (
                  <Award className="h-16 w-16 text-primary" />
                ) : (
                  <Brain className="h-16 w-16 text-primary" />
                )}
              </div>
            </div>

            <h2 className="mb-4 text-3xl font-bold">Quiz abgeschlossen!</h2>
            <div className="mb-4 text-6xl font-bold text-primary">{percentage}%</div>

            <p className="mb-2 text-lg">
              Du hast {score} von {questions.length} Fragen richtig beantwortet.
            </p>

            <p className="mb-8 text-muted-foreground">
              {percentage >= 90
                ? '🏆 Fantastisch! Du bist ein Experte im Erkennen von Manipulationstechniken!'
                : percentage >= 70
                ? '🎉 Sehr gut! Du hast ein solides Verständnis der Techniken.'
                : percentage >= 50
                ? '👍 Gut gemacht! Mit mehr Übung wirst du noch besser.'
                : '💪 Nicht aufgeben! Wiederhole das Quiz und lerne die Techniken im Explorer.'}
            </p>

            <div className="mb-8 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/10">
              <div className="mb-2 flex items-center justify-center gap-2 text-blue-900 dark:text-blue-100">
                <TrendingUp className="h-5 w-5" />
                <span className="font-semibold">Du hast {Math.round((percentage / 100) * 200)} XP verdient!</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Dein Fortschritt bei allen verwendeten Techniken wurde aktualisiert.
              </p>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" onClick={handleRestart} className="flex-1 gap-2">
                <RefreshCw className="h-5 w-5" />
                Nochmal spielen
              </Button>
              <Link to="/" className="flex-1">
                <Button className="w-full gap-2">
                  <Home className="h-5 w-5" />
                  Zur Startseite
                </Button>
              </Link>
            </div>
          </Card>
        </motion.div>
      </div>
    );
  }

  const correctCount = Object.values(results).filter((r) => r).length;

  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="mb-2 text-3xl font-bold">Technik-Identifikations-Quiz</h1>
        <p className="text-muted-foreground">
          Teste dein Wissen über Persuasions- und Manipulationstechniken
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span>
            Frage {currentQuestionIndex + 1} von {questions.length}
          </span>
          <span className="text-primary">
            {correctCount} richtig
          </span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-secondary">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <Card className="mb-6 p-6">
            {/* Question Type Badge */}
            <div className="mb-4 flex items-center gap-2">
              <div
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  currentQuestion.type === 'identification'
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                    : 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
                }`}
              >
                {currentQuestion.type === 'identification' ? 'Identifikation' : 'Multiple Choice'}
              </div>
              <div
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  currentQuestion.difficulty === 'beginner'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30'
                    : currentQuestion.difficulty === 'intermediate'
                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30'
                    : 'bg-red-100 text-red-800 dark:bg-red-900/30'
                }`}
              >
                {currentQuestion.difficulty === 'beginner'
                  ? 'Einfach'
                  : currentQuestion.difficulty === 'intermediate'
                  ? 'Mittel'
                  : 'Schwer'}
              </div>
            </div>

            {/* Question */}
            <h3 className="mb-3 text-xl font-bold">{currentQuestion.question.de}</h3>

            {/* Scenario */}
            <div className="mb-6 rounded-lg bg-muted/50 p-4 italic">
              <p className="text-sm">{currentQuestion.scenario?.de}</p>
            </div>

            {/* Multi-choice hint */}
            {currentQuestion.type === 'matching' && !isAnswered && (
              <div className="mb-4 rounded-lg bg-blue-50 p-3 text-sm text-blue-900 dark:bg-blue-900/10 dark:text-blue-100">
                💡 Tipp: Du kannst mehrere Antworten auswählen!
              </div>
            )}

            {/* Answer Options */}
            <div className="mb-6 space-y-3">
              {currentQuestion.options.map((option) => {
                const isSelected = selectedAnswers.has(option.id);
                const isCorrectOption = currentQuestion.correctAnswers.includes(option.id);
                const showCorrectness = isAnswered;

                return (
                  <button
                    key={option.id}
                    onClick={() => handleSelectAnswer(option.id)}
                    disabled={isAnswered}
                    className={`w-full rounded-lg border-2 p-4 text-left transition-all ${
                      isAnswered
                        ? isCorrectOption
                          ? 'border-green-500 bg-green-50 dark:bg-green-900/10'
                          : isSelected && !isCorrectOption
                          ? 'border-red-500 bg-red-50 dark:bg-red-900/10'
                          : 'border-muted bg-muted/30'
                        : isSelected
                        ? 'border-primary bg-primary/10'
                        : 'border-muted hover:border-primary/50 hover:bg-muted/50'
                    } ${isAnswered ? 'cursor-default' : 'cursor-pointer'}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{option.text.de}</span>
                      {showCorrectness && isCorrectOption && (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      )}
                      {showCorrectness && isSelected && !isCorrectOption && (
                        <X className="h-5 w-5 text-red-600" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Submit Button */}
            {!isAnswered && (
              <Button
                onClick={handleSubmitAnswer}
                disabled={selectedAnswers.size === 0}
                className="w-full"
              >
                Antwort überprüfen
              </Button>
            )}

            {/* Explanation */}
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-6"
              >
                {/* Result Badge */}
                <div
                  className={`mb-4 rounded-lg p-4 ${
                    results[currentQuestion.id]
                      ? 'bg-green-50 dark:bg-green-900/10'
                      : 'bg-red-50 dark:bg-red-900/10'
                  }`}
                >
                  <div className="mb-2 flex items-center gap-2">
                    {results[currentQuestion.id] ? (
                      <>
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="font-semibold text-green-900 dark:text-green-100">
                          Richtig!
                        </span>
                      </>
                    ) : (
                      <>
                        <X className="h-5 w-5 text-red-600" />
                        <span className="font-semibold text-red-900 dark:text-red-100">
                          Falsch!
                        </span>
                      </>
                    )}
                  </div>
                  <p className="text-sm">{currentQuestion.explanation.de}</p>
                </div>

                {/* Related Techniques */}
                <div className="mb-4 rounded-lg bg-muted/50 p-4">
                  <div className="mb-2 text-sm font-semibold text-muted-foreground">
                    Verwandte Techniken:
                  </div>
                  <TechniqueTagList
                    techniqueIds={currentQuestion.relatedTechniques}
                    showLinks={true}
                  />
                </div>

                {/* Next Button */}
                <Button onClick={handleNextQuestion} className="w-full">
                  {currentQuestionIndex < questions.length - 1
                    ? 'Nächste Frage'
                    : 'Ergebnis anzeigen'}
                </Button>
              </motion.div>
            )}
          </Card>
        </motion.div>
      </AnimatePresence>

      {/* Tips Card */}
      {!isAnswered && (
        <Card className="p-4">
          <div className="flex items-start gap-3">
            <Brain className="mt-0.5 h-5 w-5 text-primary" />
            <div className="flex-1">
              <h4 className="mb-1 font-semibold">Tipp</h4>
              <p className="text-sm text-muted-foreground">
                Lies das Szenario sorgfältig und achte auf typische Muster der verschiedenen
                Techniken. Im Zweifel: Welche Emotion oder Reaktion soll erzeugt werden?
              </p>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
