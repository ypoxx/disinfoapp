import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Trophy, Target, Clock, Zap } from 'lucide-react';
import { Button } from '@/design/components/button';
import { Card } from '@/design/components/card';
import { MasteryMeter } from '@/design/components/mastery-meter';
import type { SessionSummary } from '@/engine/types';

interface SessionSummaryViewProps {
  summary: SessionSummary;
  onClose: () => void;
}

export function SessionSummaryView({ summary, onClose }: SessionSummaryViewProps) {
  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 bg-[var(--color-bg)] z-50 flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-sm space-y-6"
      >
        {/* Header */}
        <div className="text-center space-y-2">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            <Trophy size={48} className="mx-auto text-[var(--color-accent-500)]" />
          </motion.div>
          <h1 className="text-2xl font-bold">{t('practice.sessionComplete')}</h1>
        </div>

        {/* Accuracy ring */}
        <div className="flex justify-center">
          <MasteryMeter value={summary.accuracy} label={t('practice.accuracy')} />
        </div>

        {/* Stats */}
        <Card>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Zap size={16} className="text-[var(--color-accent)]" />
              <div>
                <p className="text-lg font-bold">{summary.xpEarned}</p>
                <p className="text-[10px] text-[var(--color-text-muted)]">XP</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Target size={16} className="text-[var(--color-success-500)]" />
              <div>
                <p className="text-lg font-bold">{summary.correctCount}/{summary.totalItems}</p>
                <p className="text-[10px] text-[var(--color-text-muted)]">{t('common.correct')}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-[var(--color-primary-400)]" />
              <div>
                <p className="text-lg font-bold">{Math.round(summary.timeSpent / 60)}m</p>
                <p className="text-[10px] text-[var(--color-text-muted)]">Zeit</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[var(--color-accent-subtle)] flex items-center justify-center text-[10px] font-bold text-[var(--color-accent)]">
                {summary.techniquesReviewed.length}
              </div>
              <div>
                <p className="text-lg font-bold">{summary.techniquesReviewed.length}</p>
                <p className="text-[10px] text-[var(--color-text-muted)]">{t('practice.techniquesReviewed')}</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Action */}
        <Button size="lg" onClick={onClose} className="w-full">
          {t('common.continue')}
        </Button>
      </motion.div>
    </div>
  );
}
