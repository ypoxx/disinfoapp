import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Trophy, RotateCcw, Home } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ExerciseEngine, type ExerciseResult } from '@/components/exercise/ExerciseEngine';
import { microExercises } from '@/data/exercises';
import { useProgressStore } from '@/stores/progressStore';
import { shuffle as shuffleArray } from '@/utils/arrayUtils';
import type { MicroExercise } from '@/types';

function selectDailyExercises(pool: MicroExercise[], count: number = 5): MicroExercise[] {
  // Mix of exercise types for variety
  const byType = new Map<string, MicroExercise[]>();
  for (const ex of pool) {
    const list = byType.get(ex.type) || [];
    list.push(ex);
    byType.set(ex.type, list);
  }

  const selected: MicroExercise[] = [];
  const types = Array.from(byType.keys());

  // Pick one from each type first, then fill remaining randomly
  for (const type of shuffleArray(types)) {
    const exercises = byType.get(type)!;
    if (selected.length < count && exercises.length > 0) {
      const shuffled = shuffleArray(exercises);
      selected.push(shuffled[0]);
    }
  }

  // Fill remaining from random pool
  const remaining = pool.filter((ex) => !selected.includes(ex));
  const shuffledRemaining = shuffleArray(remaining);
  while (selected.length < count && shuffledRemaining.length > 0) {
    selected.push(shuffledRemaining.pop()!);
  }

  return shuffleArray(selected);
}

export function PracticePage() {
  const { t } = useTranslation();
  const addXP = useProgressStore((s) => s.addXP);
  const [exercises] = useState(() => selectDailyExercises(microExercises, 5));
  const [results, setResults] = useState<ExerciseResult[] | null>(null);

  const totalPoints = useMemo(() => {
    if (!results) return 0;
    return results.reduce((sum, r) => {
      const ex = exercises.find((e) => e.id === r.exerciseId);
      return sum + (r.correct ? (ex?.points ?? 0) : 0);
    }, 0);
  }, [results, exercises]);

  const correctCount = results?.filter((r) => r.correct).length ?? 0;

  const handleComplete = (res: ExerciseResult[]) => {
    setResults(res);
    const earned = res.reduce((sum, r) => {
      const ex = exercises.find((e) => e.id === r.exerciseId);
      return sum + (r.correct ? (ex?.points ?? 0) : 0);
    }, 0);
    if (earned > 0) {
      addXP(earned);
    }
  };

  const handleRetry = () => {
    setResults(null);
  };

  // Results screen
  if (results) {
    const percentage = Math.round((correctCount / exercises.length) * 100);
    const grade =
      percentage >= 90
        ? { text: 'Exzellent!', color: 'text-success' }
        : percentage >= 70
          ? { text: 'Sehr gut!', color: 'text-primary' }
          : percentage >= 50
            ? { text: 'Gut gemacht!', color: 'text-warning' }
            : { text: 'Weiter üben!', color: 'text-muted-foreground' };

    return (
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mx-auto max-w-md text-center"
        >
          <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <Trophy className="h-10 w-10 text-primary" />
          </div>

          <h1 className={`text-3xl font-bold ${grade.color}`}>{grade.text}</h1>

          <p className="mt-2 text-muted-foreground">
            {correctCount} von {exercises.length} richtig
          </p>

          {/* Score circle */}
          <div className="relative mx-auto mt-6 h-32 w-32">
            <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" className="text-muted/30" />
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                strokeLinecap="round"
                className="text-primary"
                initial={{ strokeDasharray: '0 283' }}
                animate={{ strokeDasharray: `${percentage * 2.83} 283` }}
                transition={{ duration: 1, ease: 'easeOut' }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold">{percentage}%</span>
            </div>
          </div>

          {/* XP earned */}
          <div className="mt-6 flex items-center justify-center gap-2 text-primary">
            <Zap className="h-5 w-5" />
            <span className="text-lg font-bold">+{totalPoints} XP</span>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col gap-3">
            <button
              onClick={handleRetry}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <RotateCcw className="h-4 w-4" />
              Neue Übungen
            </button>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-lg border px-6 py-3 font-medium transition-colors hover:bg-accent"
            >
              <Home className="h-4 w-4" />
              {t('nav.home')}
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  // Exercise screen
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Zap className="h-4 w-4" />
            Tägliche Übung
          </div>
          <h1 className="text-2xl font-bold">Micro-Training</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            5 kurze Übungen · ca. 3 Minuten
          </p>
        </div>

        <ExerciseEngine exercises={exercises} onComplete={handleComplete} />
      </motion.div>
    </div>
  );
}
