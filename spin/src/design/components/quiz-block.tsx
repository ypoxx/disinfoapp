import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useReducedMotion } from 'framer-motion';
import { Check, X, Minus } from 'lucide-react';
import { Button } from './button';
import { QuizOption } from './quiz-option';

export interface QuizResolution {
  /** Indices the user picked */
  selected: number[];
  /** Fully correct: every correct option picked, nothing wrong picked */
  correct: boolean;
  /** Partial credit 0..1: max(0, hits − false picks) / total correct */
  score: number;
}

interface QuizBlockProps {
  /** Option labels, already resolved to the active language */
  options: string[];
  correctAnswers: number[];
  /** Accessible label for the option group (usually the question) */
  groupLabel: string;
  onResolve: (result: QuizResolution) => void;
}

const indexLabels = ['A', 'B', 'C', 'D', 'E', 'F'];

/**
 * Shared quiz interaction for all exercise formats.
 *
 * Single-answer (correctAnswers.length === 1): one tap commits and resolves.
 * Multi-answer: taps toggle a selection, an explicit "Prüfen" button commits.
 *
 * After resolving, a verdict block states the outcome in words — the stamp on
 * the options alone is not the verdict. Option tags distinguish "Deine Wahl"
 * (what you picked) from "Lösung"/"Übersehen" (what was revealed), so a wrong
 * answer can never be mistaken for a win.
 */
export function QuizBlock({ options, correctAnswers, groupLabel, onResolve }: QuizBlockProps) {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();
  const multi = correctAnswers.length > 1;

  const [selected, setSelected] = useState<number[]>([]);
  const [resolution, setResolution] = useState<QuizResolution | null>(null);
  const verdictRef = useRef<HTMLDivElement>(null);

  // Long multi-select lists can push the verdict below the fold — bring it into view
  useEffect(() => {
    if (resolution) {
      verdictRef.current?.scrollIntoView({
        behavior: reduceMotion ? 'auto' : 'smooth',
        block: 'nearest',
      });
    }
  }, [resolution, reduceMotion]);

  const correctSet = useMemo(() => new Set(correctAnswers), [correctAnswers]);

  const resolve = (picked: number[]) => {
    if (resolution) return;
    const hits = picked.filter((i) => correctSet.has(i)).length;
    const falsePicks = picked.length - hits;
    const score = Math.max(0, hits - falsePicks) / correctAnswers.length;
    const result: QuizResolution = {
      selected: picked,
      correct: hits === correctAnswers.length && falsePicks === 0,
      score,
    };
    setResolution(result);
    onResolve(result);
  };

  const handleTap = (index: number) => {
    if (resolution) return;
    if (!multi) {
      setSelected([index]);
      resolve([index]);
      return;
    }
    setSelected((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const optionState = (index: number) => {
    const isPicked = resolution ? resolution.selected.includes(index) : selected.includes(index);
    if (!resolution) return isPicked ? ('selected' as const) : ('default' as const);
    const isCorrect = correctSet.has(index);
    if (isPicked && isCorrect) return 'correct' as const;
    if (isPicked && !isCorrect) return 'incorrect' as const;
    if (!isPicked && isCorrect) return 'missed' as const;
    return 'dimmed' as const;
  };

  const optionTag = (index: number) => {
    if (!resolution) return undefined;
    const isPicked = resolution.selected.includes(index);
    const isCorrect = correctSet.has(index);
    if (multi) {
      if (isPicked && isCorrect) return t('practice.tagHit');
      if (isPicked && !isCorrect) return t('practice.tagFalsePick');
      if (!isPicked && isCorrect) return t('practice.tagMissed');
      return undefined;
    }
    if (isPicked && isCorrect) return t('practice.verdictTag');
    if (isPicked && !isCorrect) return t('practice.tagYourChoice');
    if (!isPicked && isCorrect) return t('practice.tagSolution');
    return undefined;
  };

  // Verdict text: outcome in words, never only color
  const verdict = useMemo(() => {
    if (!resolution) return null;
    if (resolution.correct) {
      return { kind: 'correct' as const, title: t('practice.verdictCorrect'), detail: '' };
    }
    if (multi) {
      const hits = resolution.selected.filter((i) => correctSet.has(i)).length;
      const falsePicks = resolution.selected.length - hits;
      const missed = correctAnswers.length - hits;
      if (resolution.score > 0) {
        return {
          kind: 'partial' as const,
          title: t('practice.verdictPartial'),
          detail: t('practice.partialDetail', { hits, total: correctAnswers.length, falsePicks, missed }),
        };
      }
      return {
        kind: 'incorrect' as const,
        title: t('practice.verdictIncorrect'),
        detail: t('practice.partialDetail', { hits, total: correctAnswers.length, falsePicks, missed }),
      };
    }
    const letters = correctAnswers.map((i) => indexLabels[i]).join(', ');
    return {
      kind: 'incorrect' as const,
      title: t('practice.verdictIncorrect'),
      detail: t('practice.solutionIs', { letters }),
    };
  }, [resolution, multi, correctAnswers, correctSet, t]);

  const verdictStyles = {
    correct: 'bg-[var(--color-verdict-bg)] text-[var(--color-verdict-ink)]',
    partial: 'bg-[var(--color-bg-muted)] text-[var(--color-text)] border-2 border-[var(--color-border)]',
    incorrect: 'bg-[var(--color-carbon)] text-[var(--color-chalk)]',
  };
  const VerdictIcon = verdict?.kind === 'correct' ? Check : verdict?.kind === 'partial' ? Minus : X;

  return (
    <div className="space-y-3">
      {multi && !resolution && (
        <p className="mono-label text-[var(--color-text-muted)]">
          {t('practice.multiHint')}
        </p>
      )}

      <div className="space-y-2" role="group" aria-label={groupLabel}>
        {options.map((opt, i) => (
          <QuizOption
            key={i}
            index={i}
            label={opt}
            state={optionState(i)}
            tag={optionTag(i)}
            toggleable={multi}
            onClick={() => handleTap(i)}
            disabled={!!resolution}
          />
        ))}
      </div>

      {multi && !resolution && (
        <Button
          size="lg"
          variant="inverse"
          className="w-full"
          disabled={selected.length === 0}
          onClick={() => resolve(selected)}
        >
          {t('practice.checkAnswer')}
          {selected.length > 0 && (
            <span className="mono-label">({selected.length})</span>
          )}
        </Button>
      )}

      {verdict && (
        <motion.div
          ref={verdictRef}
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: [0.9, 0, 0.1, 1] }}
          className={`flex items-center gap-3 p-4 rounded-[var(--radius-md)] ${verdictStyles[verdict.kind]}`}
          role="status"
        >
          <VerdictIcon size={20} aria-hidden className="shrink-0" />
          <div className="min-w-0">
            <p className="type-display text-base leading-tight">{verdict.title}</p>
            {verdict.detail && (
              <p className="text-sm mt-0.5 opacity-90">{verdict.detail}</p>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}
