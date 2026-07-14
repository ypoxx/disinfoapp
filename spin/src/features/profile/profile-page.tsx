import { useTranslation } from 'react-i18next';
import { CloudOff } from 'lucide-react';
import { Card } from '@/design/components/card';
import { Button } from '@/design/components/button';
import { BadgeDisplay } from '@/design/components/badge-display';
import { useProgressStore } from '@/stores/progress-store';
import { useKnowledgeStore } from '@/stores/knowledge-store';
import { useSettingsStore } from '@/stores/settings-store';
import { useAuthStore } from '@/stores/auth-store';
import { signInWithGoogle, signOut as firebaseSignOut, isFirebaseConfigured } from '@/lib/firebase';
import { badges as allBadges } from '@content/badges';
import { t as tContent } from '@content/types';
import { languages } from '@/i18n';
import type { Theme } from '@/stores/settings-store';

export function ProfilePage() {
  const { t, i18n } = useTranslation();
  const { xp, streak, totalPracticeTime, earnedBadges, sessionsCompleted } = useProgressStore();
  const { getOverallMastery, techniques: knownTechniques } = useKnowledgeStore();
  const { theme, setTheme, weeklyGoal, setWeeklyGoal } = useSettingsStore();
  const { user, syncStatus } = useAuthStore();

  const lang = i18n.language;
  const mastery = getOverallMastery();
  const techniquesCount = Object.keys(knownTechniques).length;
  const practiceMinutes = Math.round(totalPracticeTime / 60);
  const earnedSet = new Set(earnedBadges);

  const stats = [
    { label: t('profile.totalXP'), value: String(xp) },
    { label: t('profile.techniquesLearned'), value: String(techniquesCount) },
    { label: t('profile.practiceTime'), value: `${practiceMinutes} MIN` },
    { label: t('profile.longestStreak'), value: String(streak.longest) },
  ];

  return (
    <div className="space-y-6">
      {/* Poster header with mastery figure */}
      <div className="relative overflow-hidden py-2">
        <span
          aria-hidden
          className="absolute -top-6 right-0 mono-num font-bold text-[7rem] leading-none text-[var(--color-carbon)] opacity-[0.06] select-none pointer-events-none"
        >
          04
        </span>
        <div className="flex items-end justify-between relative">
          <div className="flex items-center gap-3">
            {user?.photoURL && (
              <img src={user.photoURL} alt="" className="w-12 h-12 rounded-[var(--radius-md)] border-2 border-[var(--color-border)]" />
            )}
            <div>
              <h1 className="type-display text-xl">{t('profile.title')}</h1>
              <p className="mono-label text-[var(--color-text-muted)] mt-1">
                {sessionsCompleted} {t('profile.sessions')} · {earnedBadges.length} {t('profile.badges')}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="mono-num text-[2.5rem] font-bold leading-none">{mastery}</p>
            <p className="mono-label text-[var(--color-text-muted)]">{t('profile.mastery')} /100</p>
          </div>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 rule-2 bg-[var(--color-bg-surface)]">
        {stats.map(({ label, value }, i) => (
          <div
            key={label}
            className={`p-4 ${i % 2 === 0 ? 'border-r-2 border-[var(--color-rule)]' : ''} ${i < 2 ? 'border-b-2 border-[var(--color-rule)]' : ''}`}
          >
            <p className="mono-num text-xl font-bold">{value}</p>
            <p className="mono-label text-[var(--color-text-muted)] mt-1">{label}</p>
          </div>
        ))}
      </div>

      {/* Badge collection — earned and locked */}
      <section>
        <h2 className="mono-label mb-3 flex items-baseline gap-2">
          <span className="text-[var(--color-accent-text)]">01</span>
          {t('profile.badges')}
          <span className="text-[var(--color-text-muted)]">
            {earnedBadges.length}/{allBadges.length}
          </span>
        </h2>
        <div className="rule-2 bg-[var(--color-bg-surface)] p-4 grid grid-cols-4 gap-x-2 gap-y-4">
          {allBadges.map((badge) => (
            <BadgeDisplay
              key={badge.id}
              icon={badge.icon}
              name={tContent(badge.name, lang)}
              rarity={badge.rarity}
              earned={earnedSet.has(badge.id)}
              size="md"
            />
          ))}
        </div>
      </section>

      {/* Auth + sync status */}
      {!user ? (
        isFirebaseConfigured && (
          <Card variant="outline">
            <p className="text-sm text-[var(--color-text-secondary)] mb-3">{t('profile.signInPrompt')}</p>
            <Button variant="secondary" className="w-full" onClick={() => signInWithGoogle()}>
              {t('profile.signInWithGoogle')}
            </Button>
          </Card>
        )
      ) : (
        <div className="space-y-2">
          {syncStatus === 'error' && (
            <p className="flex items-center gap-2 text-sm text-[var(--color-accent-text)] rule-2 p-3 bg-[var(--color-bg-surface)]">
              <CloudOff size={16} aria-hidden className="shrink-0" />
              {t('profile.syncError')}
            </p>
          )}
          <Button variant="ghost" className="w-full" onClick={() => firebaseSignOut()}>
            {t('common.signOut')}
          </Button>
        </div>
      )}

      {/* Settings */}
      <section>
        <h2 className="mono-label mb-3 flex items-baseline gap-2">
          <span className="text-[var(--color-accent-text)]">02</span>
          {t('profile.settings')}
        </h2>
        <div className="rule-2 bg-[var(--color-bg-surface)] divide-y divide-[var(--color-border-hairline)]">
          {/* Language */}
          <div className="flex items-center justify-between p-4">
            <label htmlFor="language-select" className="text-sm font-medium">{t('profile.language')}</label>
            <select
              id="language-select"
              value={languages.some((l) => l.code === i18n.language) ? i18n.language : 'de'}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              className="text-sm mono-num bg-[var(--color-bg)] border-2 border-[var(--color-border)] rounded-[var(--radius-md)] px-3 py-2 min-h-[2.75rem]"
            >
              {languages.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.name}
                </option>
              ))}
            </select>
          </div>

          {/* Theme */}
          <div className="flex items-center justify-between p-4">
            <span className="text-sm font-medium" id="theme-label">{t('profile.theme')}</span>
            <div className="flex border-2 border-[var(--color-border)] rounded-[var(--radius-md)]" role="group" aria-labelledby="theme-label">
              {(['light', 'dark', 'system'] as Theme[]).map((th) => (
                <button
                  key={th}
                  onClick={() => setTheme(th)}
                  aria-pressed={theme === th}
                  className={`px-3 py-2 mono-label min-h-[2.75rem] transition-colors duration-100
                    ${theme === th
                      ? 'bg-[var(--color-bg-inverse)] text-[var(--color-text-inverse)]'
                      : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                    }`}
                >
                  {t(`profile.theme${th.charAt(0).toUpperCase() + th.slice(1)}`)}
                </button>
              ))}
            </div>
          </div>

          {/* Weekly Goal */}
          <div className="flex items-center justify-between p-4">
            <span className="text-sm font-medium">{t('profile.weeklyGoal')}</span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setWeeklyGoal(weeklyGoal - 1)}
                aria-label={t('profile.decreaseGoal')}
                className="w-11 h-11 border-2 border-[var(--color-border)] rounded-[var(--radius-md)] mono-num font-bold
                  hover:bg-[var(--color-bg-muted)] active:bg-[var(--color-bg-inverse)] active:text-[var(--color-text-inverse)]
                  transition-colors duration-100"
              >
                −
              </button>
              <span className="mono-num text-sm font-bold w-14 text-center">
                {weeklyGoal} {t('profile.daysPerWeek')}
              </span>
              <button
                onClick={() => setWeeklyGoal(weeklyGoal + 1)}
                aria-label={t('profile.increaseGoal')}
                className="w-11 h-11 border-2 border-[var(--color-border)] rounded-[var(--radius-md)] mono-num font-bold
                  hover:bg-[var(--color-bg-muted)] active:bg-[var(--color-bg-inverse)] active:text-[var(--color-text-inverse)]
                  transition-colors duration-100"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
