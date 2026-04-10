import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Play, RotateCcw, Target, Cloud, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/design/components/card';
import { Button } from '@/design/components/button';
import { StreakDisplay } from '@/design/components/streak-display';
import { MasteryMeter } from '@/design/components/mastery-meter';
import { ProgressBar } from '@/design/components/progress-bar';
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
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { streak, xp, sessionsCompleted } = useProgressStore();
  const { getOverallMastery, getDueReviews } = useKnowledgeStore();
  const { weeklyGoal } = useSettingsStore();
  const { user } = useAuthStore();

  const [signInDismissed, setSignInDismissed] = useState(
    () => localStorage.getItem(SIGNIN_DISMISSED_KEY) === 'true'
  );

  const mastery = getOverallMastery();
  const dueCount = getDueReviews().length;
  const activeDays = streak.weeklyProgress.filter(Boolean).length;
  const weeklyProgress = Math.round((activeDays / weeklyGoal) * 100);
  const isFirstTime = sessionsCompleted === 0;
  const showSignInPrompt = isFirebaseConfigured && !user && !signInDismissed && sessionsCompleted < 3;

  const dismissSignIn = () => {
    localStorage.setItem(SIGNIN_DISMISSED_KEY, 'true');
    setSignInDismissed(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            {isFirstTime ? t('today.greetingFirstTime') : t(getGreetingKey())}
          </h1>
          <p className="text-sm text-[var(--color-text-secondary)]">
            {xp > 0 ? `${xp} XP` : t('today.noSessionYet')}
          </p>
        </div>
        {!isFirstTime && <StreakDisplay current={streak.current} />}
      </div>

      {/* First-time user: prominent CTA */}
      {isFirstTime ? (
        <Card padding="lg" className="relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)] opacity-5 rounded-full -translate-y-8 translate-x-8" />
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">{t('today.firstSessionTitle')}</h2>
            <p className="text-sm text-[var(--color-text-secondary)]">
              {t('today.firstSessionDesc')}
            </p>
            <Button size="lg" onClick={() => navigate('/practice')} className="w-full">
              <Play size={18} />
              {t('today.firstSessionCta')}
            </Button>
          </div>
        </Card>
      ) : (
        <>
          {/* Daily Session CTA */}
          <Card padding="lg" className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)] opacity-5 rounded-full -translate-y-8 translate-x-8" />
            <div className="space-y-3">
              <h2 className="text-lg font-semibold">{t('today.dailySession')}</h2>
              <p className="text-sm text-[var(--color-text-secondary)]">
                {t('today.dailySessionDesc')}
              </p>
              <Button size="lg" onClick={() => navigate('/practice')} className="w-full">
                <Play size={18} />
                {t('today.startSession')}
              </Button>
            </div>
          </Card>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3">
            <Card className="flex flex-col items-center gap-2">
              <MasteryMeter value={mastery} size="sm" />
              <span className="text-xs text-[var(--color-text-secondary)]">{t('today.masteryScore')}</span>
            </Card>

            <Card className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-1.5 text-[var(--color-accent)]">
                <RotateCcw size={18} />
                <span className="text-2xl font-bold tabular-nums">{dueCount}</span>
              </div>
              <span className="text-xs text-[var(--color-text-secondary)]">{t('today.dueReviews')}</span>
            </Card>
          </div>
        </>
      )}

      {/* Sign-in prompt */}
      {showSignInPrompt && (
        <Card className="relative">
          <button
            onClick={dismissSignIn}
            className="absolute right-2 top-2 p-1 rounded text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors"
            aria-label={t('common.close')}
          >
            <X size={14} />
          </button>
          <div className="flex items-start gap-3 pr-6">
            <div className="mt-0.5 shrink-0 w-8 h-8 rounded-lg bg-[var(--color-accent-subtle)] flex items-center justify-center">
              <Cloud size={16} className="text-[var(--color-accent)]" />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-[var(--color-text-secondary)]">
                {t('today.signInPrompt')}
              </p>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => signInWithGoogle()}
              >
                {t('profile.signInWithGoogle')}
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Weekly Goal */}
      <Card>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Target size={16} className="text-[var(--color-accent)]" />
            <span className="text-sm font-medium">{t('today.weeklyGoal')}</span>
          </div>
          <span className="text-sm text-[var(--color-text-secondary)]">
            {activeDays}/{weeklyGoal}
          </span>
        </div>
        <ProgressBar value={weeklyProgress} color={weeklyProgress >= 100 ? 'success' : 'accent'} />
        {/* Weekly dots */}
        <div className="flex justify-between mt-3">
          {['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].map((day, i) => (
            <div key={day} className="flex flex-col items-center gap-1">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-medium
                  ${streak.weeklyProgress[i]
                    ? 'bg-[var(--color-accent)] text-[var(--color-text-inverse)]'
                    : 'bg-[var(--color-bg-muted)] text-[var(--color-text-muted)]'
                  }`}
              >
                {day[0]}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Quick stats footer */}
      {sessionsCompleted > 0 && (
        <p className="text-center text-xs text-[var(--color-text-muted)]">
          {t('today.sessionsCompleted', { count: sessionsCompleted })}
        </p>
      )}
    </div>
  );
}
