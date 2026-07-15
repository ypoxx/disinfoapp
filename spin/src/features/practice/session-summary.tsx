import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from '@/design/components/button';
import { SplitFlap } from '@/design/components/split-flap';
import { BadgeDisplay } from '@/design/components/badge-display';
import { t as tContent } from '@content/types';
import type { Badge } from '@content/types';
import { techniques as allTechniques } from '@content/techniques';
import type { SessionSummary } from '@/engine/types';

export interface MasteryDelta {
  techniqueId: string;
  from: number;
  to: number;
}

interface SessionSummaryViewProps {
  summary: SessionSummary;
  newBadges: Badge[];
  deltas: MasteryDelta[];
  overallMastery: number;
  onClose: () => void;
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

const enter = (reduce: boolean, delay: number) => ({
  initial: reduce ? false : { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3, ease: [0.9, 0, 0.1, 1] as const, delay: reduce ? 0 : delay },
});

export function SessionSummaryView({ summary, newBadges, deltas, overallMastery, onClose }: SessionSummaryViewProps) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const reduce = !!useReducedMotion();

  return (
    <div className="fixed inset-0 bg-[var(--color-bg)] z-50 overflow-y-auto">
      <div className="min-h-full flex flex-col max-w-2xl mx-auto px-4 py-8 safe-area-top safe-area-bottom">
        {/* Poster headline */}
        <motion.div {...enter(reduce, 0)}>
          <span className="mono-label text-[var(--color-accent-text)]">
            {t('practice.sessionReportLabel')}
          </span>
          <h1 className="type-display text-xl mt-2">{t('practice.sessionComplete')}</h1>
        </motion.div>

        {/* Stats triptych */}
        <motion.div
          {...enter(reduce, 0.15)}
          className="grid grid-cols-3 rule-2 divide-x-2 divide-[var(--color-rule)] mt-6 bg-[var(--color-bg-surface)]"
        >
          {[
            { label: t('common.correct'), value: `${summary.correctCount}/${summary.totalItems}` },
            { label: t('practice.time'), value: formatTime(summary.timeSpent) },
            { label: t('practice.xp'), value: `+${summary.xpEarned}` },
          ].map(({ label, value }) => (
            <div key={label} className="p-3 text-center">
              <p className="mono-num text-xl font-bold">{value}</p>
              <p className="mono-label text-[var(--color-text-muted)] mt-1">{label}</p>
            </div>
          ))}
        </motion.div>

        {/* Mastery hero: split-flap departure board */}
        <motion.div {...enter(reduce, 0.3)} className="mt-6 bg-[var(--color-carbon)] p-6 rounded-[var(--radius-md)]">
          <div className="flex items-center justify-between">
            <span className="mono-label text-[#98958e]">{t('practice.masteryRating')}</span>
            <span className="mono-label text-[#98958e]">/100</span>
          </div>
          <div className="flex justify-center py-6">
            <SplitFlap
              value={overallMastery}
              digits={2}
              size="lg"
              aria-label={`${t('practice.masteryRating')}: ${overallMastery}`}
            />
          </div>
          {deltas.length > 0 && (
            <div className="space-y-2 border-t border-[#33332f] pt-4">
              {deltas.map(({ techniqueId, from, to }) => {
                const technique = allTechniques.find((tech) => tech.id === techniqueId);
                const diff = to - from;
                return (
                  <div key={techniqueId} className="flex items-baseline justify-between gap-3">
                    <span className="mono-label text-[var(--color-chalk)] truncate">
                      {technique ? tContent(technique.name, lang) : techniqueId}
                    </span>
                    <span className="flex-1 border-b border-dotted border-[#33332f]" aria-hidden />
                    <span className={`mono-num text-sm font-bold ${diff >= 0 ? 'text-[var(--color-signal)]' : 'text-[#98958e]'}`}>
                      {diff >= 0 ? '+' : ''}{diff}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </motion.div>

        {/* Badge unlock moment */}
        {newBadges.length > 0 && (
          <motion.div {...enter(reduce, 0.5)} className="mt-6 rule-2 bg-[var(--color-bg-surface)] p-4">
            <span className="mono-label text-[var(--color-accent-text)]">{t('practice.newBadges')}</span>
            <div className="flex flex-wrap gap-4 mt-3">
              {newBadges.map((badge, i) => (
                <motion.div
                  key={badge.id}
                  initial={reduce ? false : { opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: reduce ? 0 : 0.6 + i * 0.12, type: 'spring', stiffness: 500, damping: 30 }}
                >
                  <BadgeDisplay
                    icon={badge.icon}
                    name={tContent(badge.name, lang)}
                    rarity={badge.rarity}
                    size="md"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Action */}
        <motion.div {...enter(reduce, 0.45)} className="mt-auto pt-8">
          <Button size="lg" onClick={onClose} className="w-full">
            {t('practice.backToToday')}
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
