import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Zap, Grid3x3, BarChart3, MonitorPlay } from 'lucide-react';
import { Card } from '@/design/components/card';
import { useKnowledgeStore } from '@/stores/knowledge-store';
import { buildSession } from '@/engine/session-builder';
import type { Session } from '@/engine/types';
import { SessionRunner } from './session-runner';

interface PracticeOption {
  id: string;
  icon: typeof Zap;
  labelKey: string;
  descKey: string;
  color: string;
}

const practiceOptions: PracticeOption[] = [
  { id: 'daily', icon: Zap, labelKey: 'practice.dailySession', descKey: 'today.dailySessionDesc', color: 'var(--color-accent)' },
  { id: 'quick', icon: Grid3x3, labelKey: 'practice.quickPractice', descKey: 'practice.categoryPractice', color: 'var(--color-primary-500)' },
  { id: 'simulator', icon: MonitorPlay, labelKey: 'practice.simulator', descKey: 'practice.simulator', color: 'var(--color-success-500)' },
  { id: 'assessment', icon: BarChart3, labelKey: 'practice.assessment', descKey: 'practice.assessment', color: 'var(--color-warning-500)' },
];

export function PracticePage() {
  const { t } = useTranslation();
  const { getDueReviews, techniques: knowledgeState } = useKnowledgeStore();
  const [activeSession, setActiveSession] = useState<Session | null>(null);

  const dueCount = getDueReviews().length;

  const startSession = (type: string) => {
    const config = {
      knowledgeState,
      maxItems: type === 'quick' ? 5 : 7,
    };
    const session = buildSession(config);
    setActiveSession(session);
  };

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
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{t('practice.title')}</h1>
        {dueCount > 0 && (
          <p className="text-sm text-[var(--color-accent)] mt-1">
            {dueCount} {t('today.dueReviews')}
          </p>
        )}
      </div>

      <div className="space-y-3">
        {practiceOptions.map(({ id, icon: Icon, labelKey, descKey, color }) => (
          <Card key={id} hover padding="md" onClick={() => startSession(id)}>
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
