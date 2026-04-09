import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, BookOpen, AlertTriangle, FlaskConical, Link2 } from 'lucide-react';
import { Card } from '@/design/components/card';
import { Button } from '@/design/components/button';
import { MasteryMeter } from '@/design/components/mastery-meter';
import { getTechnique } from '@content/techniques';
import { t as tContent } from '@content/types';
import { useKnowledgeStore } from '@/stores/knowledge-store';

export function TechniqueDetailPage() {
  const { techniqueId } = useParams<{ techniqueId: string }>();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { getMastery } = useKnowledgeStore();

  const technique = techniqueId ? getTechnique(techniqueId) : undefined;
  const lang = i18n.language;
  const mastery = techniqueId ? getMastery(techniqueId) : undefined;

  if (!technique) {
    return (
      <div className="text-center py-12">
        <p className="text-[var(--color-text-secondary)]">Technique not found</p>
        <Button variant="ghost" onClick={() => navigate('/library')} className="mt-4">
          <ArrowLeft size={16} /> {t('common.back')}
        </Button>
      </div>
    );
  }

  const relatedTechniques = technique.relatedTechniques
    .map((id) => getTechnique(id))
    .filter(Boolean);

  return (
    <div className="space-y-4">
      {/* Back button */}
      <button
        onClick={() => navigate('/library')}
        className="flex items-center gap-1 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
      >
        <ArrowLeft size={16} /> {t('common.back')}
      </button>

      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{tContent(technique.name, lang)}</h1>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs px-2 py-0.5 rounded-[var(--radius-full)] bg-[var(--color-bg-muted)]">
              {t(`difficulty.${technique.difficulty}`)}
            </span>
            <span className="text-xs px-2 py-0.5 rounded-[var(--radius-full)] bg-[var(--color-bg-muted)]">
              {t(`categories.${technique.category}`)}
            </span>
          </div>
        </div>
        {mastery && <MasteryMeter value={mastery.masteryLevel} size="sm" />}
      </div>

      {/* Description */}
      <Card>
        <p className="text-sm leading-relaxed">{tContent(technique.description, lang)}</p>
      </Card>

      {/* Examples */}
      <Card>
        <div className="flex items-center gap-2 mb-3">
          <BookOpen size={16} className="text-[var(--color-accent)]" />
          <h2 className="font-semibold text-sm">{t('library.examples')}</h2>
        </div>
        <ul className="space-y-2">
          {technique.examples.map((ex, i) => (
            <li key={i} className="text-sm text-[var(--color-text-secondary)] pl-4 border-l-2 border-[var(--color-border)]">
              {ex}
            </li>
          ))}
        </ul>
      </Card>

      {/* Warning Signals */}
      <Card>
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle size={16} className="text-[var(--color-warning-500)]" />
          <h2 className="font-semibold text-sm">{t('library.warningSignals')}</h2>
        </div>
        <ul className="space-y-1.5">
          {technique.warningNeurons.map((signal, i) => (
            <li key={i} className="text-sm text-[var(--color-text-secondary)] flex items-start gap-2">
              <span className="text-[var(--color-warning-500)] mt-1 shrink-0">•</span>
              {signal}
            </li>
          ))}
        </ul>
      </Card>

      {/* Evidence */}
      <Card>
        <div className="flex items-center gap-2 mb-3">
          <FlaskConical size={16} className="text-[var(--color-primary-500)]" />
          <h2 className="font-semibold text-sm">{t('library.evidence')}</h2>
        </div>
        <p className="text-sm text-[var(--color-text-secondary)] mb-3">{technique.evidence.findings}</p>
        <div className="space-y-1">
          {technique.evidence.studies.map((study, i) => (
            <p key={i} className="text-xs text-[var(--color-text-muted)]">{study}</p>
          ))}
        </div>
        {technique.evidence.uncertainty && (
          <div className="flex gap-4 mt-3 pt-3 border-t border-[var(--color-border)]">
            <div className="text-center">
              <p className="text-lg font-bold">{Math.round(technique.evidence.uncertainty.confidence * 100)}%</p>
              <p className="text-[10px] text-[var(--color-text-muted)]">Konfidenz</p>
            </div>
            <div className="text-center">
              <p className="text-xs font-medium">{technique.evidence.uncertainty.sampleSize}</p>
              <p className="text-[10px] text-[var(--color-text-muted)]">Stichprobe</p>
            </div>
          </div>
        )}
      </Card>

      {/* Related Techniques */}
      {relatedTechniques.length > 0 && (
        <Card>
          <div className="flex items-center gap-2 mb-3">
            <Link2 size={16} className="text-[var(--color-text-secondary)]" />
            <h2 className="font-semibold text-sm">{t('library.relatedTechniques')}</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {relatedTechniques.map((related) => (
              <button
                key={related!.id}
                onClick={() => navigate(`/library/${related!.id}`)}
                className="px-3 py-1.5 text-xs font-medium rounded-[var(--radius-full)]
                  bg-[var(--color-bg-muted)] text-[var(--color-text-secondary)]
                  hover:bg-[var(--color-accent-subtle)] hover:text-[var(--color-accent)]
                  transition-colors"
              >
                {tContent(related!.name, lang)}
              </button>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}
