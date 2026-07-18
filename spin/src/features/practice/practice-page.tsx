import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { useKnowledgeStore } from '@/stores/knowledge-store';
import { useProgressStore } from '@/stores/progress-store';
import { buildSession, type SessionType } from '@/engine/session-builder';
import type { Session } from '@/engine/types';
import { SessionRunner } from './session-runner';

export function PracticePage() {
  const { t } = useTranslation();
  const { getDueReviews, techniques: knowledgeState, answeredExercises } = useKnowledgeStore();
  const recentScores = useProgressStore((s) => s.recentScores);
  const [activeSession, setActiveSession] = useState<Session | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const dueCount = getDueReviews().length;

  const startSession = (type: SessionType, category?: string) => {
    const session = buildSession({
      knowledgeState,
      answeredExercises,
      recentScores,
      sessionType: type,
      maxItems: type === 'quick' ? 5 : 7,
      category,
    });
    setActiveSession(session);
  };

  // Deep links: /practice?start=daily|quick|refresh | /practice?category=<cat>
  const startParam = searchParams.get('start');
  const categoryParam = searchParams.get('category');
  useEffect(() => {
    if (activeSession) return;
    if (startParam) {
      setSearchParams({}, { replace: true });
      const type: SessionType =
        startParam === 'quick' ? 'quick' : startParam === 'refresh' ? 'refresh' : 'daily';
      startSession(type);
    } else if (categoryParam) {
      setSearchParams({}, { replace: true });
      startSession('daily', categoryParam);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startParam, categoryParam]);

  if (activeSession) {
    return (
      <SessionRunner
        session={activeSession}
        onComplete={() => setActiveSession(null)}
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden py-2">
        <span
          aria-hidden
          className="absolute -top-6 right-0 mono-num font-bold text-[7rem] leading-none text-[var(--color-carbon)] opacity-[0.06] select-none pointer-events-none"
        >
          02
        </span>
        <h1 className="type-display text-xl relative">{t('practice.title')}</h1>
        {dueCount > 0 && (
          <p className="mono-label text-[var(--color-accent-text)] mt-2">
            {dueCount} {t('today.dueReviews')}
          </p>
        )}
      </div>

      {/* Tagesübung — the main plane */}
      <button
        onClick={() => startSession('daily')}
        className="w-full text-left bg-[var(--color-signal)] text-[var(--color-accent-ink)] p-5 rounded-[var(--radius-md)] group"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="mono-label">01</span>
          <span className="mono-label">7 {t('practice.itemsLabel')} · 3–5 MIN</span>
        </div>
        <span className="type-display text-lg block">{t('practice.dailySession')}</span>
        <span className="flex items-center gap-1.5 text-sm font-bold mt-3">
          {t('today.startSession')}
          <ArrowRight size={16} className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden />
        </span>
      </button>

      {/* Schnelles Training */}
      <button
        onClick={() => startSession('quick')}
        className="w-full text-left rule-2 bg-[var(--color-bg-surface)] p-5 rounded-[var(--radius-md)] group
          hover:bg-[var(--color-bg-muted)] transition-colors duration-100"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="mono-label text-[var(--color-text-muted)]">02</span>
          <span className="mono-label text-[var(--color-text-muted)]">5 {t('practice.itemsLabel')} · 2–3 MIN</span>
        </div>
        <span className="type-display text-lg block">{t('practice.quickPractice')}</span>
        <span className="flex items-center gap-1.5 text-sm font-bold mt-3 text-[var(--color-text-secondary)]">
          {t('today.startSession')}
          <ArrowRight size={16} className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden />
        </span>
      </button>

      {/* Auffrischen — appears when the review backlog builds up */}
      {dueCount >= 3 && (
        <button
          onClick={() => startSession('refresh')}
          className="w-full text-left rule-2 bg-[var(--color-bg-surface)] p-5 rounded-[var(--radius-md)] group
            hover:bg-[var(--color-bg-muted)] transition-colors duration-100"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="mono-label text-[var(--color-text-muted)]">03</span>
            <span className="mono-label text-[var(--color-accent-text)]">
              {dueCount} {t('today.dueReviews')}
            </span>
          </div>
          <span className="type-display text-lg block">{t('practice.refreshSession')}</span>
          <span className="flex items-center gap-1.5 text-sm font-bold mt-3 text-[var(--color-text-secondary)]">
            {t('today.startSession')}
            <ArrowRight size={16} className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden />
          </span>
        </button>
      )}
    </div>
  );
}
