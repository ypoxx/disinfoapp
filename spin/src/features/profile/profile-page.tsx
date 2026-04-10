import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Trophy, Clock, Flame, Zap } from 'lucide-react';
import { Card } from '@/design/components/card';
import { MasteryMeter } from '@/design/components/mastery-meter';
import { Button } from '@/design/components/button';
import { useProgressStore } from '@/stores/progress-store';
import { useKnowledgeStore } from '@/stores/knowledge-store';
import { useSettingsStore } from '@/stores/settings-store';
import { useAuthStore } from '@/stores/auth-store';
import { signInWithGoogle, signOut as firebaseSignOut } from '@/lib/firebase';
import { languages } from '@/i18n';
import type { Theme } from '@/stores/settings-store';

export function ProfilePage() {
  const { t, i18n } = useTranslation();
  const [signInError, setSignInError] = useState(false);
  const { xp, streak, totalPracticeTime, earnedBadges } = useProgressStore();
  const { getOverallMastery, techniques: knownTechniques } = useKnowledgeStore();
  const { theme, setTheme, weeklyGoal, setWeeklyGoal } = useSettingsStore();
  const { user } = useAuthStore();

  const mastery = getOverallMastery();
  const techniquesCount = Object.keys(knownTechniques).length;
  const practiceMinutes = Math.round(totalPracticeTime / 60);

  const stats = [
    { icon: Zap, label: t('profile.totalXP'), value: xp },
    { icon: Trophy, label: t('profile.techniquesLearned'), value: techniquesCount },
    { icon: Clock, label: t('profile.practiceTime'), value: `${practiceMinutes}m` },
    { icon: Flame, label: t('profile.longestStreak'), value: streak.longest },
  ];

  return (
    <div className="space-y-6">
      {/* Header with mastery */}
      <div className="flex items-center gap-4">
        {user?.photoURL ? (
          <img src={user.photoURL} alt="" className="w-14 h-14 rounded-full" />
        ) : (
          <div className="w-14 h-14 rounded-full bg-[var(--color-bg-muted)] flex items-center justify-center text-xl font-bold text-[var(--color-text-muted)]">
            {user?.displayName?.[0]?.toUpperCase() ?? 'S'}
          </div>
        )}
        <div className="flex-1">
          <h1 className="text-2xl font-bold tracking-tight">
            {user?.displayName ?? t('profile.title')}
          </h1>
          <p className="text-sm text-[var(--color-text-secondary)]">
            {earnedBadges.length} {t('profile.badges')}
          </p>
        </div>
        <MasteryMeter value={mastery} label={t('profile.mastery')} />
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-3">
        {stats.map(({ icon: Icon, label, value }) => (
          <Card key={label} padding="sm" className="flex items-center gap-3">
            <Icon size={18} className="text-[var(--color-accent)] shrink-0" />
            <div>
              <p className="text-lg font-bold tabular-nums">{value}</p>
              <p className="text-[10px] text-[var(--color-text-muted)]">{label}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Auth */}
      {!user ? (
        <Card>
          <p className="text-sm text-[var(--color-text-secondary)] mb-3">{t('profile.signInPrompt')}</p>
          <Button
            variant="secondary"
            className="w-full"
            onClick={async () => {
              setSignInError(false);
              const ok = await signInWithGoogle();
              if (!ok) setSignInError(true);
            }}
          >
            {t('profile.signInWithGoogle')}
          </Button>
          {signInError && (
            <p className="text-xs text-[var(--color-error-500)] mt-2">
              {t('common.signInFailed')}
            </p>
          )}
        </Card>
      ) : (
        <Button variant="ghost" className="w-full" onClick={() => firebaseSignOut()}>
          {t('common.signOut')}
        </Button>
      )}

      {/* Settings */}
      <Card>
        <h2 className="font-semibold text-sm mb-4">{t('profile.settings')}</h2>
        <div className="space-y-4">
          {/* Language */}
          <div className="flex items-center justify-between">
            <span className="text-sm">{t('profile.language')}</span>
            <select
              value={i18n.language}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              className="text-sm bg-[var(--color-bg-muted)] border border-[var(--color-border)] rounded-[var(--radius-md)] px-2 py-1"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.flag} {lang.name}
                </option>
              ))}
            </select>
          </div>

          {/* Theme */}
          <div className="flex items-center justify-between">
            <span className="text-sm">{t('profile.theme')}</span>
            <div className="flex gap-1 bg-[var(--color-bg-muted)] rounded-[var(--radius-md)] p-0.5">
              {(['light', 'dark', 'system'] as Theme[]).map((th) => (
                <button
                  key={th}
                  onClick={() => setTheme(th)}
                  className={`px-2.5 py-1 text-xs rounded-[var(--radius-sm)] transition-colors
                    ${theme === th
                      ? 'bg-[var(--color-bg-surface)] shadow-[var(--shadow-sm)] text-[var(--color-text)]'
                      : 'text-[var(--color-text-muted)]'
                    }`}
                >
                  {t(`profile.theme${th.charAt(0).toUpperCase() + th.slice(1)}`)}
                </button>
              ))}
            </div>
          </div>

          {/* Weekly Goal */}
          <div className="flex items-center justify-between">
            <span className="text-sm">{t('profile.weeklyGoal')}</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setWeeklyGoal(weeklyGoal - 1)}
                className="w-7 h-7 rounded-full bg-[var(--color-bg-muted)] text-sm flex items-center justify-center"
              >
                -
              </button>
              <span className="text-sm font-medium w-12 text-center">
                {weeklyGoal} {t('profile.daysPerWeek')}
              </span>
              <button
                onClick={() => setWeeklyGoal(weeklyGoal + 1)}
                className="w-7 h-7 rounded-full bg-[var(--color-bg-muted)] text-sm flex items-center justify-center"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
