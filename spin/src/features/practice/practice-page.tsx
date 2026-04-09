import { useTranslation } from 'react-i18next';
import { Zap, Grid3x3, BarChart3, MonitorPlay } from 'lucide-react';
import { Card } from '@/design/components/card';
import { useKnowledgeStore } from '@/stores/knowledge-store';

interface PracticeOption {
  icon: typeof Zap;
  labelKey: string;
  descKey: string;
  color: string;
}

const practiceOptions: PracticeOption[] = [
  { icon: Zap, labelKey: 'practice.dailySession', descKey: 'today.dailySessionDesc', color: 'var(--color-accent)' },
  { icon: Grid3x3, labelKey: 'practice.quickPractice', descKey: 'practice.categoryPractice', color: 'var(--color-primary-500)' },
  { icon: MonitorPlay, labelKey: 'practice.simulator', descKey: 'practice.simulator', color: 'var(--color-success-500)' },
  { icon: BarChart3, labelKey: 'practice.assessment', descKey: 'practice.assessment', color: 'var(--color-warning-500)' },
];

export function PracticePage() {
  const { t } = useTranslation();
  const { getDueReviews } = useKnowledgeStore();
  const dueCount = getDueReviews().length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{t('practice.title')}</h1>
        {dueCount > 0 && (
          <p className="text-sm text-[var(--color-accent)] mt-1">
            {dueCount} {t('today.dueReviews')}
          </p>
        )}
      </div>

      <div className="space-y-3">
        {practiceOptions.map(({ icon: Icon, labelKey, descKey, color }) => (
          <Card key={labelKey} hover padding="md">
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-[var(--radius-lg)] flex items-center justify-center shrink-0"
                style={{ backgroundColor: `color-mix(in srgb, ${color} 15%, transparent)` }}
              >
                <Icon size={24} style={{ color }} />
              </div>
              <div className="min-w-0">
                <h3 className="font-medium text-sm">{t(labelKey)}</h3>
                <p className="text-xs text-[var(--color-text-secondary)] truncate">{t(descKey)}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
