import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { Button } from '@/design/components/button';
import { Card } from '@/design/components/card';
import { SegmentProgress } from '@/design/components/segment-progress';
import { QuizOption } from '@/design/components/quiz-option';
import { t as tContent, primaryTechniqueOf, type TechniqueCategory } from '@content/types';
import { techniques as allTechniques } from '@content/techniques';
import type { Session, SessionItem, ItemResult } from '@/engine/types';
import { calculateSessionSummary } from '@/engine/scoring';
import type { SessionOutcome } from '@/engine/spaced-repetition';
import { evaluateNewBadges } from '@/engine/badges';
import type { Badge } from '@content/types';
import { useKnowledgeStore } from '@/stores/knowledge-store';
import { useProgressStore } from '@/stores/progress-store';
import { SessionSummaryView, type MasteryDelta } from './session-summary';

interface SessionRunnerProps {
  session: Session;
  onComplete: () => void;
}

interface CompletionData {
  summary: ReturnType<typeof calculateSessionSummary>;
  newBadges: Badge[];
  deltas: MasteryDelta[];
  overallMastery: number;
}

function categoryOfItem(item: SessionItem): TechniqueCategory | null {
  if (item.type === 'learn' || item.type === 'review') return item.technique.category;
  const techId = primaryTechniqueOf(item.exercise);
  return allTechniques.find((t) => t.id === techId)?.category ?? null;
}

export function SessionRunner({ session, onComplete }: SessionRunnerProps) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState<ItemResult[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [completion, setCompletion] = useState<CompletionData | null>(null);
  const itemStartTime = useRef(0);
  const sessionStartTime = useRef(0);

  useEffect(() => {
    const now = Date.now();
    sessionStartTime.current = now;
    itemStartTime.current = now;
  }, []);

  // Aggregated per-technique outcomes — applied ONCE at session end
  const outcomesRef = useRef<Record<string, SessionOutcome>>({});

  const knowledge = useKnowledgeStore();
  const progress = useProgressStore();

  const currentItem = session.items[currentIndex];
  const answeredCount = results.length;

  const category = currentItem ? categoryOfItem(currentItem) : null;
  const planeColor = category ? `var(--color-cat-${category})` : 'var(--color-accent)';
  const planeInk = category ? `var(--color-cat-${category}-ink)` : 'var(--color-accent-ink)';

  const handleAnswer = useCallback((optionIndex: number) => {
    if (showFeedback || !currentItem || currentItem.type !== 'exercise') return;

    setSelectedAnswer(optionIndex);
    setShowFeedback(true);

    const timeSpent = Math.round((Date.now() - itemStartTime.current) / 1000);
    const ex = currentItem.exercise;
    const correct = ex.correctAnswers.includes(optionIndex);
    const primaryTechnique = primaryTechniqueOf(ex);

    // Credit the primary technique only — deterministic mastery attribution
    // (a multi-technique pool would otherwise smear credit across every tag).
    if (primaryTechnique) {
      const o = outcomesRef.current[primaryTechnique] ?? { correct: 0, total: 0 };
      outcomesRef.current[primaryTechnique] = {
        correct: o.correct + (correct ? 1 : 0),
        total: o.total + 1,
      };
    }

    setResults((prev) => [...prev, {
      itemIndex: currentIndex,
      correct,
      timeSpent,
      techniqueId: primaryTechnique,
      exerciseId: ex.id,
    }]);
  }, [showFeedback, currentItem, currentIndex]);

  const completeSession = useCallback(() => {
    const summary = calculateSessionSummary(session.id, results);
    const outcomes = outcomesRef.current;

    // Mastery snapshot before → after for the summary deltas
    const touchedIds = Object.keys(outcomes);
    const before = new Map(
      touchedIds.map((id) => [id, knowledge.getMastery(id)?.masteryLevel ?? 0])
    );

    knowledge.applySessionOutcomes(outcomes);

    const after = useKnowledgeStore.getState();
    const deltas: MasteryDelta[] = touchedIds
      .map((id) => ({
        techniqueId: id,
        from: before.get(id) ?? 0,
        to: after.techniques[id]?.masteryLevel ?? 0,
      }))
      .filter((d) => d.to !== d.from);

    // Comeback info must be read BEFORE the streak advances
    const daysSince = progress.getDaysSinceLastActive();
    progress.checkStreak();
    progress.addXP(summary.xpEarned);
    progress.addPracticeTime(Math.round((Date.now() - sessionStartTime.current) / 1000));
    progress.completeSession();
    progress.addQuestionsAnswered(results.length);
    // Stamp answered exercises so they enter their per-exercise no-repeat cooldown
    progress.recordExercisesAnswered(
      results.map((r) => r.exerciseId).filter((id): id is string => Boolean(id))
    );

    const progressNow = useProgressStore.getState();
    const masteredCount = Object.values(after.techniques).filter((m) => m.masteryLevel >= 80).length;
    const newBadges = evaluateNewBadges({
      streakCurrent: progressNow.streak.current,
      masteredCount,
      totalQuestionsAnswered: progressNow.totalQuestionsAnswered,
      sessionAccuracy: summary.accuracy,
      sessionItemCount: results.length,
      sessionDurationSec: Math.round((Date.now() - sessionStartTime.current) / 1000),
      hour: new Date().getHours(),
      daysSinceLastActive: daysSince,
      earned: progressNow.earnedBadges,
    });
    newBadges.forEach((b) => progressNow.earnBadge(b.id));

    setCompletion({
      summary,
      newBadges,
      deltas,
      overallMastery: after.getOverallMastery(),
    });
  }, [session.id, results, knowledge, progress]);

  const handleNext = useCallback(() => {
    if (!currentItem) return;

    // Close the loop for non-exercise items when leaving them
    if (currentItem.type === 'learn') {
      knowledge.markSeen(currentItem.technique.id);
    } else if (currentItem.type === 'review') {
      const id = currentItem.technique.id;
      if (!outcomesRef.current[id]) {
        outcomesRef.current[id] = { correct: 0, total: 0, passive: true };
      }
    }

    if (currentIndex + 1 >= session.items.length) {
      completeSession();
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
      itemStartTime.current = Date.now();
    }
  }, [currentItem, currentIndex, session.items.length, knowledge, completeSession]);

  const handleClose = () => {
    if (results.length > 0 && !completion) {
      setShowExitConfirm(true);
    } else {
      navigate('/');
    }
  };

  const feedbackAnnouncement = useMemo(() => {
    if (!showFeedback || !currentItem || currentItem.type !== 'exercise') return '';
    const correct = selectedAnswer !== null && currentItem.exercise.correctAnswers.includes(selectedAnswer);
    const verdict = correct ? t('common.correct') : t('common.incorrect');
    return `${verdict}. ${tContent(currentItem.exercise.explanation, lang)}`;
  }, [showFeedback, currentItem, selectedAnswer, t, lang]);

  if (completion) {
    return (
      <SessionSummaryView
        summary={completion.summary}
        newBadges={completion.newBadges}
        deltas={completion.deltas}
        overallMastery={completion.overallMastery}
        onClose={onComplete}
      />
    );
  }

  return (
    <div className="fixed inset-0 bg-[var(--color-bg)] z-50 flex flex-col">
      {/* Category plane header band */}
      <div style={{ backgroundColor: planeColor, color: planeInk }} className="safe-area-top">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <span className="mono-label border-2 px-2 py-1" style={{ borderColor: planeInk }}>
            {currentIndex + 1}/{session.items.length}
          </span>
          <span className="mono-label flex-1 truncate">
            {category ? t(`categories.${category}`) : t('practice.title')}
          </span>
          <button
            onClick={handleClose}
            aria-label={t('practice.exitSession')}
            className="w-11 h-11 -mr-2 flex items-center justify-center"
          >
            <X size={20} aria-hidden />
          </button>
        </div>
        <div className="max-w-2xl mx-auto px-4 pb-3">
          <SegmentProgress total={session.items.length} done={answeredCount} active={currentIndex} />
        </div>
      </div>

      {/* Screen-reader verdict announcement */}
      <div aria-live="polite" className="sr-only">{feedbackAnnouncement}</div>

      {/* Content area */}
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={reduceMotion ? false : { opacity: 0, x: 48 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, x: -48, transition: { duration: 0.1, ease: [0.7, 0, 1, 1] } }}
              transition={{ duration: reduceMotion ? 0 : 0.3, ease: [0.9, 0, 0.1, 1] }}
              className="space-y-4"
            >
              {currentItem && (
                <ItemView
                  item={currentItem}
                  lang={lang}
                  t={t}
                  selectedAnswer={selectedAnswer}
                  showFeedback={showFeedback}
                  onSelect={handleAnswer}
                  planeColor={planeColor}
                  planeInk={planeInk}
                  reduceMotion={!!reduceMotion}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom action — show immediately for learn/review, after feedback for exercises */}
      {(currentItem?.type !== 'exercise' || showFeedback) && (
        <motion.div
          initial={reduceMotion ? false : { y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, ease: [0.9, 0, 0.1, 1] }}
          className="px-4 pb-6 safe-area-bottom"
        >
          <div className="max-w-2xl mx-auto">
            <Button size="lg" variant="inverse" onClick={handleNext} className="w-full">
              {currentIndex + 1 >= session.items.length ? t('practice.viewResults') : t('common.next')}
              <ArrowRight size={18} aria-hidden />
            </Button>
          </div>
        </motion.div>
      )}

      {/* Exit confirmation */}
      <AnimatePresence>
        {showExitConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[60] bg-[var(--color-carbon)]/60 flex items-center justify-center px-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="exit-confirm-title"
            onKeyDown={(e) => e.key === 'Escape' && setShowExitConfirm(false)}
          >
            <Card variant="outline" padding="lg" className="w-full max-w-sm space-y-4 bg-[var(--color-bg)]">
              <h2 id="exit-confirm-title" className="type-display text-lg">
                {t('practice.exitConfirmTitle')}
              </h2>
              <p className="text-sm text-[var(--color-text-secondary)]">
                {t('practice.exitConfirmBody')}
              </p>
              <div className="flex flex-col gap-2">
                <Button variant="primary" autoFocus onClick={() => setShowExitConfirm(false)}>
                  {t('practice.exitConfirmStay')}
                </Button>
                <Button variant="secondary" onClick={() => navigate('/')}>
                  {t('practice.exitConfirmLeave')}
                </Button>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface ItemViewProps {
  item: SessionItem;
  lang: string;
  t: (key: string) => string;
  selectedAnswer: number | null;
  showFeedback: boolean;
  onSelect: (idx: number) => void;
  planeColor: string;
  planeInk: string;
  reduceMotion: boolean;
}

function ItemView({ item, lang, t, selectedAnswer, showFeedback, onSelect, planeColor, planeInk, reduceMotion }: ItemViewProps) {
  switch (item.type) {
    case 'learn':
      return (
        <div className="space-y-5 pt-5">
          <span className="mono-label text-[var(--color-accent-text)]">{t('practice.newTechnique')}</span>
          {/* Breathing headline: the word performs its own emphasis */}
          <motion.h2
            className="type-display text-xl"
            initial={reduceMotion ? false : { fontStretch: '75%', fontWeight: 500, opacity: 0.6 }}
            animate={{ fontStretch: '125%', fontWeight: 800, opacity: 1 }}
            transition={{ duration: 0.45, ease: [0.9, 0, 0.1, 1] }}
          >
            {tContent(item.technique.name, lang)}
          </motion.h2>
          <p className="text-base leading-relaxed text-[var(--color-text-secondary)]">
            {tContent(item.technique.description, lang)}
          </p>
          {item.technique.examples.length > 0 && (
            <Card variant="outline" padding="md">
              <p className="mono-label text-[var(--color-text-muted)] mb-2">{t('practice.example')}</p>
              <p className="text-sm leading-relaxed">{item.technique.examples[0]}</p>
            </Card>
          )}
        </div>
      );

    case 'review':
      return (
        <div className="space-y-5 pt-5">
          <span
            className="mono-label inline-block px-2 py-1"
            style={{ backgroundColor: planeColor, color: planeInk }}
          >
            {t('practice.reviewLabel')}
          </span>
          <h2 className="type-display text-xl">{tContent(item.technique.name, lang)}</h2>
          <p className="text-base leading-relaxed text-[var(--color-text-secondary)]">
            {tContent(item.technique.description, lang)}
          </p>
        </div>
      );

    case 'exercise': {
      const ex = item.exercise;
      return (
        <div className="space-y-4 pt-5">
          <p className="type-display text-lg">{tContent(ex.question, lang)}</p>
          {ex.scenario && (
            <Card variant="outline" padding="md">
              <p className="mono-label text-[var(--color-text-muted)] mb-2">{t('practice.scenario')}</p>
              <p className="text-sm leading-relaxed">{tContent(ex.scenario, lang)}</p>
            </Card>
          )}
          <div className="space-y-2" role="group" aria-label={tContent(ex.question, lang)}>
            {ex.options.map((opt, i) => {
              let state: 'default' | 'selected' | 'correct' | 'incorrect' | 'dimmed' = 'default';
              if (showFeedback) {
                if (ex.correctAnswers.includes(i)) state = 'correct';
                else if (i === selectedAnswer) state = 'incorrect';
                else state = 'dimmed';
              } else if (i === selectedAnswer) {
                state = 'selected';
              }

              return (
                <QuizOption
                  key={i}
                  index={i}
                  label={tContent(opt, lang)}
                  state={state}
                  tag={t('practice.verdictTag')}
                  onClick={() => onSelect(i)}
                  disabled={showFeedback}
                />
              );
            })}
          </div>
          {showFeedback && (
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: [0.9, 0, 0.1, 1] }}
            >
              <Card variant="inverse" padding="md">
                <p className="mono-label text-[var(--color-signal)] mb-2">{t('practice.explanation')}</p>
                <p className="text-sm leading-relaxed">{tContent(ex.explanation, lang)}</p>
              </Card>
            </motion.div>
          )}
        </div>
      );
    }
  }
}
