import { useTranslation } from 'react-i18next';
import { Play, RotateCcw, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/design/components/card';
import { Button } from '@/design/components/button';
import { StreakDisplay } from '@/design/components/streak-display';
import { MasteryMeter } from '@/design/components/mastery-meter';
import { ProgressBar } from '@/design/components/progress-bar';
import { useProgressStore } from '@/stores/progress-store';
import { useKnowledgeStore } from '@/stores/knowledge-store';
import { useSettingsStore } from '@/stores/settings-store';

export function TodayPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { streak, xp, sessionsCompleted } = useProgressStore();
  const { getOverallMastery, getDueReviews } = useKnowledgeStore();
  const { weeklyGoal } = useSettingsStore();

  const mastery = getOverallMastery();
  const dueCount = getDueReviews().length;
  const activeDays = streak.weeklyProgress.filter(Boolean).length;
  const weeklyProgress = Math.round((activeDays / weeklyGoal) * 100);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{t('today.greeting')}</h1>
          <p className="text-sm text-[var(--color-text-secondary)]">
            {xp > 0 ? `${xp} XP` : t('today.noSessionYet')}
          </p>
        </div>
        <StreakDisplay current={streak.current} />
      </div>

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
          {sessionsCompleted} Sessions abgeschlossen
        </p>
      )}
    </div>
  );
}
