import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/design/components/button';
import { Card } from '@/design/components/card';
import { useProgressStore } from '@/stores/progress-store';
import { useKnowledgeStore } from '@/stores/knowledge-store';
import { useSettingsStore } from '@/stores/settings-store';
import { useAuthStore } from '@/stores/auth-store';
import { isFirebaseConfigured, signInWithGoogle } from '@/lib/firebase';

const SIGNIN_DISMISSED_KEY = 'spin-signin-dismissed';

function getGreetingKey(): string {
  const hour = new Date().getHours();
  if (hour < 12) return 'today.greetingMorning';
  if (hour < 18) return 'today.greetingAfternoon';
  return 'today.greetingEvening';
}

export function TodayPage() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { sessionsCompleted, getDisplayStreak, getWeeklyProgress } = useProgressStore();
  const { getOverallMastery, getDueReviews } = useKnowledgeStore();
  const { weeklyGoal } = useSettingsStore();
  const { user } = useAuthStore();

  const [signInDismissed, setSignInDismissed] = useState(
    () => localStorage.getItem(SIGNIN_DISMISSED_KEY) === 'true'
  );

  const mastery = getOverallMastery();
  const dueCount = getDueReviews().length;
  const streak = getDisplayStreak();
  const weeklyProgress = getWeeklyProgress();
  const activeDays = weeklyProgress.filter(Boolean).length;
  const isFirstTime = sessionsCompleted === 0;
  const showSignInPrompt = isFirebaseConfigured && !user && !signInDismissed && sessionsCompleted < 3;
  const weekdayLetters = t('today.weekdayLetters').split('');
  const todayIndex = (() => {
    const d = new Date().getDay();
    return d === 0 ? 6 : d - 1;
  })();

  const dateLine = new Intl.DateTimeFormat(i18n.language, {
    weekday: 'short',
    day: '2-digit',
    month: '2-digit',
  }).format(new Date());

  const dismissSignIn = () => {
    localStorage.setItem(SIGNIN_DISMISSED_KEY, 'true');
    setSignInDismissed(true);
  };

  return (
    <div className="space-y-6">
      {/* Masthead (mobile — desktop header carries the wordmark) */}
      <div className="flex items-baseline justify-between rule-b-2 pb-2 md:hidden">
        <span className="type-display text-base leading-none">
          SPIN<span className="align-super text-[0.55em]">®</span>
        </span>
        <span className="mono-label text-[var(--color-text-muted)]">{dateLine}</span>
      </div>

      {/* Poster headline with ghost numeral */}
      <div className="relative overflow-hidden py-2">
        <span
          aria-hidden
          className="absolute -top-6 right-0 mono-num font-bold text-[7rem] leading-none text-[var(--color-carbon)] opacity-[0.06] select-none pointer-events-none"
        >
          01
        </span>
        <h1 className="type-display text-xl relative">
          {isFirstTime ? (
            <>
              {t('today.greetingFirstTimeLead')}{' '}
              <span className="bg-[var(--color-signal)] text-[var(--color-accent-ink)] px-1.5 inline-block">
                SPIN
              </span>
            </>
          ) : (
            t(getGreetingKey())
          )}
        </h1>
        <p className="flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] mt-2">
          <ArrowRight size={14} className="text-[var(--color-accent-text)]" aria-hidden />
          {isFirstTime ? t('today.noSessionYet') : t('today.dailySessionDesc')}
        </p>
      </div>

      {/* Primary CTA plane — International Orange */}
      <div className="bg-[var(--color-signal)] text-[var(--color-accent-ink)] p-5 rounded-[var(--radius-md)]">
        <div className="flex items-center justify-between mb-3">
          <span className="mono-label">{t('today.dailySession')}</span>
          <span className="mono-label">3–5 MIN</span>
        </div>
        <h2 className="type-display text-lg">
          {isFirstTime ? t('today.firstSessionTitle') : t('today.dailySessionTitle')}
        </h2>
        <p className="text-sm mt-2 mb-4 opacity-90">
          {t('today.firstSessionDesc')}
        </p>
        <Button size="lg" variant="inverse" onClick={() => navigate('/practice?start=daily')} className="w-full">
          {isFirstTime ? t('today.firstSessionCta') : t('today.startSession')}
          <ArrowRight size={18} aria-hidden />
        </Button>
      </div>

      {/* Due reviews — a number you can act on */}
      {dueCount > 0 && (
        <button
          onClick={() => navigate('/practice?start=daily')}
          className="w-full flex items-center justify-between gap-3 bg-[var(--color-bg-inverse)] text-[var(--color-text-inverse)] p-4 rounded-[var(--radius-md)] min-h-[3rem] group"
        >
          <span className="mono-label">
            <span className="text-[var(--color-signal)]">{dueCount}</span>{' '}
            {t('today.dueReviews')}
          </span>
          <span className="flex items-center gap-1.5 text-sm font-bold">
            {t('today.startReviews')}
            <ArrowRight size={16} className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden />
          </span>
        </button>
      )}

      {/* Wochenziel + Streak split panel */}
      <div className="grid grid-cols-[1.4fr_1fr] rule-2 divide-x-2 divide-[var(--color-rule)] bg-[var(--color-bg-surface)]">
        <div className="p-4">
          <span className="mono-label text-[var(--color-text-muted)]">{t('today.weeklyGoal')}</span>
          <p className="mono-num text-[1.75rem] font-bold leading-tight mt-1">
            {activeDays}<span className="text-[var(--color-text-muted)]">/{weeklyGoal}</span>
          </p>
          <div className="flex gap-1.5 mt-2" aria-label={t('today.weeklyGoal')}>
            {weekdayLetters.map((letter, i) => (
              <span
                key={i}
                className={`w-6 h-6 border-2 flex items-center justify-center mono-label text-[10px]
                  ${weeklyProgress[i]
                    ? 'bg-[var(--color-carbon)] border-[var(--color-carbon)] text-[var(--color-chalk)] dark:bg-[var(--color-chalk)] dark:border-[var(--color-chalk)] dark:text-[var(--color-carbon)]'
                    : i === todayIndex
                      ? 'border-[var(--color-signal)] text-[var(--color-accent-text)]'
                      : 'border-[var(--color-border-hairline)] text-[var(--color-text-muted)]'
                  }`}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>
        <div className="p-4">
          <span className="mono-label text-[var(--color-text-muted)]">{t('today.streakLabel')}</span>
          <p className="mono-num text-[1.75rem] font-bold leading-tight mt-1">{streak}</p>
          <p className="mono-label text-[var(--color-text-muted)] mt-2">{t('today.streak')}</p>
        </div>
      </div>

      {/* Mastery + sessions row */}
      {!isFirstTime && (
        <div className="grid grid-cols-2 rule-2 divide-x-2 divide-[var(--color-rule)] bg-[var(--color-bg-surface)]">
          <div className="p-4">
            <span className="mono-label text-[var(--color-text-muted)]">{t('today.masteryScore')}</span>
            <p className="mono-num text-[1.75rem] font-bold leading-tight mt-1">
              {mastery}<span className="text-sm text-[var(--color-text-muted)]">/100</span>
            </p>
          </div>
          <div className="p-4">
            <span className="mono-label text-[var(--color-text-muted)]">{t('today.sessionsLabel')}</span>
            <p className="mono-num text-[1.75rem] font-bold leading-tight mt-1">{sessionsCompleted}</p>
          </div>
        </div>
      )}

      {/* Sign-in prompt */}
      {showSignInPrompt && (
        <Card variant="soft" className="relative">
          <button
            onClick={dismissSignIn}
            className="absolute right-1 top-1 w-9 h-9 flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
            aria-label={t('common.close')}
          >
            <X size={14} aria-hidden />
          </button>
          <div className="space-y-3 pr-8">
            <p className="text-sm text-[var(--color-text-secondary)]">
              {t('today.signInPrompt')}
            </p>
            <Button variant="secondary" size="sm" onClick={() => signInWithGoogle()}>
              {t('profile.signInWithGoogle')}
            </Button>
          </div>
        </Card>
      )}

      {/* Colophon */}
      <div className="flex items-center justify-between rule-t-2 pt-3">
        <span className="mono-label text-[var(--color-text-muted)]">{t('today.colophon')}</span>
        <span className="mono-label text-[var(--color-text-muted)]">S.01</span>
      </div>
    </div>
  );
}
