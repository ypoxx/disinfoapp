import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, BookOpen, RotateCcw } from 'lucide-react';
import { Button } from '@/design/components/button';
import { Card } from '@/design/components/card';
import { ProgressBar } from '@/design/components/progress-bar';
import { QuizOption } from '@/design/components/quiz-option';
import { t as tContent } from '@content/types';
import type { Session, SessionItem, ItemResult } from '@/engine/types';
import { calculateSessionSummary } from '@/engine/scoring';
import { useKnowledgeStore } from '@/stores/knowledge-store';
import { useProgressStore } from '@/stores/progress-store';
import { SessionSummaryView } from './session-summary';

interface SessionRunnerProps {
  session: Session;
  onComplete: () => void;
}

export function SessionRunner({ session, onComplete }: SessionRunnerProps) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState<ItemResult[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [itemStartTime, setItemStartTime] = useState(Date.now());

  const { recordEncounter } = useKnowledgeStore();
  const { addXP, checkStreak, completeSession } = useProgressStore();

  const currentItem = session.items[currentIndex];
  const progress = ((currentIndex) / session.items.length) * 100;

  const handleAnswer = useCallback((optionIndex: number) => {
    if (showFeedback || !currentItem) return;

    setSelectedAnswer(optionIndex);
    setShowFeedback(true);

    const timeSpent = Math.round((Date.now() - itemStartTime) / 1000);
    let correct = false;
    let techniqueId: string | undefined;

    if (currentItem.type === 'exercise') {
      correct = currentItem.exercise.correctAnswers.includes(optionIndex);
      techniqueId = currentItem.exercise.relatedTechniques[0];
    }

    if (techniqueId) {
      recordEncounter(techniqueId, correct);
    }

    setResults(prev => [...prev, {
      itemIndex: currentIndex,
      correct,
      timeSpent,
      techniqueId,
    }]);
  }, [showFeedback, currentItem, currentIndex, itemStartTime, recordEncounter]);

  const handleNext = useCallback(() => {
    if (currentIndex + 1 >= session.items.length) {
      // Session complete
      const summary = calculateSessionSummary(session.id, results);
      addXP(summary.xpEarned);
      checkStreak();
      completeSession();
      setIsComplete(true);
    } else {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setItemStartTime(Date.now());
    }
  }, [currentIndex, session, results, addXP, checkStreak, completeSession]);

  const handleClose = () => navigate('/');

  if (isComplete) {
    const summary = calculateSessionSummary(session.id, results);
    return <SessionSummaryView summary={summary} onClose={onComplete} />;
  }

  return (
    <div className="fixed inset-0 bg-[var(--color-bg)] z-50 flex flex-col">
      {/* Top bar */}
      <div className="flex items-center gap-3 px-4 py-3 safe-area-top">
        <button onClick={handleClose} className="p-1 text-[var(--color-text-muted)]">
          <X size={20} />
        </button>
        <ProgressBar value={progress} className="flex-1" />
        <span className="text-xs text-[var(--color-text-muted)] tabular-nums">
          {currentIndex + 1}/{session.items.length}
        </span>
      </div>

      {/* Content area */}
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="space-y-4"
          >
            {currentItem && renderItem(currentItem, lang, t, selectedAnswer, showFeedback, handleAnswer)}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom action — show immediately for learn/review, after feedback for exercises */}
      {(currentItem?.type !== 'exercise' || showFeedback) && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="px-4 pb-6 safe-area-bottom"
        >
          <Button size="lg" onClick={handleNext} className="w-full">
            {currentIndex + 1 >= session.items.length ? t('practice.viewResults') : t('common.next')}
            <ArrowRight size={18} />
          </Button>
        </motion.div>
      )}
    </div>
  );
}

function renderItem(
  item: SessionItem,
  lang: string,
  t: (key: string) => string,
  selectedAnswer: number | null,
  showFeedback: boolean,
  onSelect: (idx: number) => void
) {
  switch (item.type) {
    case 'learn':
      return (
        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-2 text-[var(--color-accent)]">
            <BookOpen size={18} />
            <span className="text-xs font-medium uppercase tracking-wider">{t('practice.newTechnique')}</span>
          </div>
          <h2 className="text-xl font-bold">{tContent(item.technique.name, lang)}</h2>
          <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
            {tContent(item.technique.description, lang)}
          </p>
          {item.technique.examples.length > 0 && (
            <Card padding="sm">
              <p className="text-xs font-medium text-[var(--color-text-muted)] mb-2">{t('practice.example')}</p>
              <p className="text-sm italic">{item.technique.examples[0]}</p>
            </Card>
          )}
        </div>
      );

    case 'review':
      return (
        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-2 text-[var(--color-warning-500)]">
            <RotateCcw size={18} />
            <span className="text-xs font-medium uppercase tracking-wider">{t('practice.reviewLabel')}</span>
          </div>
          <h2 className="text-xl font-bold">{tContent(item.technique.name, lang)}</h2>
          <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
            {tContent(item.technique.description, lang)}
          </p>
        </div>
      );

    case 'exercise': {
      const ex = item.exercise;
      return (
        <div className="space-y-4 pt-4">
          <p className="text-base font-medium">{tContent(ex.question, lang)}</p>
          {ex.scenario && (
            <Card padding="sm" className="bg-[var(--color-bg-muted)] border-none">
              <p className="text-sm">{tContent(ex.scenario, lang)}</p>
            </Card>
          )}
          <div className="space-y-2">
            {ex.options.map((opt, i) => {
              let state: 'default' | 'selected' | 'correct' | 'incorrect' = 'default';
              if (showFeedback) {
                if (ex.correctAnswers.includes(i)) state = 'correct';
                else if (i === selectedAnswer) state = 'incorrect';
              } else if (i === selectedAnswer) {
                state = 'selected';
              }

              return (
                <QuizOption
                  key={i}
                  index={i}
                  label={tContent(opt, lang)}
                  state={state}
                  onClick={() => onSelect(i)}
                  disabled={showFeedback}
                />
              );
            })}
          </div>
          {showFeedback && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card padding="sm" className="border-[var(--color-accent)] bg-[var(--color-accent-subtle)]">
                <p className="text-sm">{tContent(ex.explanation, lang)}</p>
              </Card>
            </motion.div>
          )}
        </div>
      );
    }
  }
}
