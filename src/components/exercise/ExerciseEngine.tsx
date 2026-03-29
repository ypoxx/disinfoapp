import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  XCircle,
  Clock,
  ArrowRight,
  Zap,
  AlertTriangle,
  MessageSquare,
  Search,
  Target,
} from 'lucide-react';
import type { MicroExercise, ExerciseType } from '@/types';

interface ExerciseEngineProps {
  exercises: MicroExercise[];
  onComplete: (results: ExerciseResult[]) => void;
}

export interface ExerciseResult {
  exerciseId: string;
  correct: boolean;
  selectedAnswers: number[];
  timeSpent: number;
}

const typeLabels: Record<ExerciseType, { label: string; icon: typeof Zap }> = {
  'quick-check': { label: 'Schnell-Check', icon: Zap },
  'technique-match': { label: 'Technik erkennen', icon: Target },
  'response-choice': { label: 'Reaktion wählen', icon: MessageSquare },
  'fill-blank': { label: 'Richtigstellung', icon: Search },
  'spot-the-flag': { label: 'Red Flags finden', icon: AlertTriangle },
};

export function ExerciseEngine({ exercises, onComplete }: ExerciseEngineProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [results, setResults] = useState<ExerciseResult[]>([]);
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);
  const [exerciseStartTime, setExerciseStartTime] = useState(Date.now());

  const exercise = exercises[currentIndex];
  const isMultiSelect = exercise?.type === 'spot-the-flag';
  const hasTimeLimit = exercise?.timeLimit != null;
  const { label: typeLabel, icon: TypeIcon } = typeLabels[exercise?.type ?? 'quick-check'];

  // Timer for quick-check exercises
  useEffect(() => {
    if (!exercise || !hasTimeLimit) return;
    setTimeRemaining(exercise.timeLimit!);

    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev === null || prev <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentIndex, exercise, hasTimeLimit]);

  // Auto-submit when timer runs out
  useEffect(() => {
    if (timeRemaining === 0 && !showFeedback) {
      handleSubmit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeRemaining]);

  // Reset state when moving to next exercise
  useEffect(() => {
    setSelectedAnswers([]);
    setShowFeedback(false);
    setIsCorrect(false);
    setExerciseStartTime(Date.now());
  }, [currentIndex]);

  const handleOptionClick = useCallback(
    (index: number) => {
      if (showFeedback) return;

      if (isMultiSelect) {
        setSelectedAnswers((prev) =>
          prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
      } else {
        setSelectedAnswers([index]);
      }
    },
    [showFeedback, isMultiSelect]
  );

  const handleSubmit = useCallback(() => {
    if (showFeedback || (!selectedAnswers.length && timeRemaining !== 0)) return;

    const correct =
      exercise.correctAnswers.length === selectedAnswers.length &&
      exercise.correctAnswers.every((a) => selectedAnswers.includes(a));

    setIsCorrect(correct);
    setShowFeedback(true);

    const result: ExerciseResult = {
      exerciseId: exercise.id,
      correct,
      selectedAnswers,
      timeSpent: (Date.now() - exerciseStartTime) / 1000,
    };
    setResults((prev) => [...prev, result]);
  }, [showFeedback, selectedAnswers, exercise, exerciseStartTime, timeRemaining]);

  const handleNext = useCallback(() => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      onComplete([...results]);
    }
  }, [currentIndex, exercises.length, onComplete, results]);

  // Auto-submit for single-select (non-multi) after selection
  useEffect(() => {
    if (!isMultiSelect && selectedAnswers.length === 1 && !showFeedback) {
      const timer = setTimeout(handleSubmit, 300);
      return () => clearTimeout(timer);
    }
  }, [selectedAnswers, isMultiSelect, showFeedback, handleSubmit]);

  if (!exercise) return null;

  const progress = ((currentIndex + 1) / exercises.length) * 100;

  return (
    <div className="mx-auto max-w-2xl">
      {/* Progress bar */}
      <div className="mb-6 flex items-center gap-3">
        <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <span className="text-xs font-medium text-muted-foreground tabular-nums">
          {currentIndex + 1}/{exercises.length}
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={exercise.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Exercise type badge + timer */}
          <div className="mb-4 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <TypeIcon className="h-3.5 w-3.5" />
              {typeLabel}
            </span>

            {hasTimeLimit && timeRemaining !== null && (
              <span
                className={`inline-flex items-center gap-1 text-sm font-mono font-semibold ${
                  timeRemaining <= 3 ? 'text-destructive animate-pulse' : 'text-muted-foreground'
                }`}
              >
                <Clock className="h-4 w-4" />
                {timeRemaining}s
              </span>
            )}
          </div>

          {/* Question */}
          <h2 className="text-lg font-bold leading-snug mb-4">{exercise.question.de}</h2>

          {/* Scenario (if present) */}
          {exercise.scenario && (
            <div className="mb-6 rounded-lg border bg-muted/50 p-4 text-sm leading-relaxed">
              {exercise.scenario.de}
            </div>
          )}

          {/* Multi-select hint */}
          {isMultiSelect && !showFeedback && (
            <p className="mb-3 text-xs text-muted-foreground">
              Mehrere Antworten möglich. Wähle alle zutreffenden aus.
            </p>
          )}

          {/* Options */}
          <div className="space-y-2">
            {exercise.options.map((option, index) => {
              const isSelected = selectedAnswers.includes(index);
              const isCorrectAnswer = exercise.correctAnswers.includes(index);

              let optionClass = 'border bg-card hover:bg-accent/50 cursor-pointer';
              if (showFeedback) {
                if (isCorrectAnswer) {
                  optionClass = 'border-success bg-success/10';
                } else if (isSelected && !isCorrectAnswer) {
                  optionClass = 'border-destructive bg-destructive/10';
                } else {
                  optionClass = 'border bg-card opacity-50';
                }
              } else if (isSelected) {
                optionClass = 'border-primary bg-primary/10 ring-2 ring-primary/30';
              }

              return (
                <button
                  key={index}
                  onClick={() => handleOptionClick(index)}
                  disabled={showFeedback}
                  className={`w-full rounded-lg p-3.5 text-left text-sm transition-all ${optionClass} flex items-center gap-3`}
                >
                  {showFeedback && isCorrectAnswer && (
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-success" />
                  )}
                  {showFeedback && isSelected && !isCorrectAnswer && (
                    <XCircle className="h-5 w-5 shrink-0 text-destructive" />
                  )}
                  {!showFeedback && (
                    <div
                      className={`h-5 w-5 shrink-0 rounded-full border-2 flex items-center justify-center transition-colors ${
                        isSelected ? 'border-primary bg-primary' : 'border-muted-foreground/40'
                      }`}
                    >
                      {isSelected && <div className="h-2 w-2 rounded-full bg-white" />}
                    </div>
                  )}
                  <span>{option.de}</span>
                </button>
              );
            })}
          </div>

          {/* Submit button for multi-select */}
          {isMultiSelect && !showFeedback && selectedAnswers.length > 0 && (
            <button
              onClick={handleSubmit}
              className="mt-4 w-full rounded-lg bg-primary py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Antwort prüfen ({selectedAnswers.length} ausgewählt)
            </button>
          )}

          {/* Feedback */}
          <AnimatePresence>
            {showFeedback && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 rounded-lg p-4 ${
                  isCorrect ? 'bg-success/10 border border-success/30' : 'bg-destructive/10 border border-destructive/30'
                }`}
              >
                <div className="flex items-start gap-2">
                  {isCorrect ? (
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-success mt-0.5" />
                  ) : (
                    <XCircle className="h-5 w-5 shrink-0 text-destructive mt-0.5" />
                  )}
                  <div>
                    <p className={`text-sm font-semibold ${isCorrect ? 'text-success' : 'text-destructive'}`}>
                      {isCorrect ? 'Richtig!' : 'Nicht ganz richtig'}
                      {isCorrect && ` +${exercise.points} XP`}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {exercise.explanation.de}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleNext}
                  className="mt-4 w-full rounded-lg bg-primary py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 flex items-center justify-center gap-2"
                >
                  {currentIndex < exercises.length - 1 ? (
                    <>
                      Weiter <ArrowRight className="h-4 w-4" />
                    </>
                  ) : (
                    'Ergebnis anzeigen'
                  )}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
