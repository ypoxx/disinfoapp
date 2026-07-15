import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/design/components/button';
import { getTechnique, techniques } from '@content/techniques';
import { t as tContent } from '@content/types';
import { useKnowledgeStore } from '@/stores/knowledge-store';

interface SectionProps {
  index: string;
  title: string;
  children: React.ReactNode;
}

function Section({ index, title, children }: SectionProps) {
  return (
    <section className="rule-t-2 pt-4">
      <h2 className="flex items-baseline gap-2 mb-3">
        <span className="mono-label text-[var(--color-accent-text)]">{index}</span>
        <span className="mono-label">{title}</span>
      </h2>
      {children}
    </section>
  );
}

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
      <div className="text-center py-12 space-y-4">
        <p className="text-[var(--color-text-secondary)]">{t('library.notFound')}</p>
        <Button variant="ghost" onClick={() => navigate('/library')}>
          <ArrowLeft size={16} aria-hidden /> {t('common.back')}
        </Button>
      </div>
    );
  }

  const relatedTechniques = technique.relatedTechniques
    .map((id) => getTechnique(id))
    .filter(Boolean);
  const index = String(techniques.indexOf(technique) + 1).padStart(2, '0');
  const uncertainty = technique.evidence.uncertainty;

  return (
    <div className="space-y-5">
      {/* Back */}
      <button
        onClick={() => navigate('/library')}
        className="flex items-center gap-1.5 mono-label text-[var(--color-text-secondary)] hover:text-[var(--color-text)] min-h-[2.75rem]"
      >
        <ArrowLeft size={16} aria-hidden /> {t('common.back')}
      </button>

      {/* Poster header: technique on its taxonomy plane */}
      <header
        className="relative overflow-hidden p-5 pt-6 rounded-[var(--radius-md)]"
        style={{
          backgroundColor: `var(--color-cat-${technique.category})`,
          color: `var(--color-cat-${technique.category}-ink)`,
        }}
      >
        <span
          aria-hidden
          className="absolute -top-8 -right-2 mono-num font-bold text-[9rem] leading-none opacity-15 select-none pointer-events-none"
        >
          {index}
        </span>
        <div className="relative space-y-3">
          <span className="mono-label">{t(`categories.${technique.category}`)}</span>
          <h1 className="type-display text-xl">{tContent(technique.name, lang)}</h1>
          <div className="flex items-center gap-3 pt-1">
            <span className="mono-label border-2 px-2 py-1" style={{ borderColor: 'currentColor' }}>
              {t(`difficulty.${technique.difficulty}`)}
            </span>
            {mastery && (
              <span className="mono-label border-2 px-2 py-1" style={{ borderColor: 'currentColor' }}>
                {t('profile.mastery')} {mastery.masteryLevel}/100
              </span>
            )}
          </div>
        </div>
      </header>

      {/* Description */}
      <p className="text-base leading-relaxed">{tContent(technique.description, lang)}</p>

      {/* Practice CTA — the library is not a dead end */}
      <Button
        size="lg"
        onClick={() => navigate(`/practice?category=${technique.category}`)}
        className="w-full"
      >
        {t('library.practiceCategory')}
        <ArrowRight size={18} aria-hidden />
      </Button>

      <Section index="01" title={t('library.examples')}>
        <ul className="space-y-3">
          {technique.examples.map((ex, i) => (
            <li
              key={i}
              className="text-sm leading-relaxed text-[var(--color-text-secondary)] pl-3 border-l-2"
              style={{ borderColor: `var(--color-cat-${technique.category})` }}
            >
              {ex}
            </li>
          ))}
        </ul>
      </Section>

      <Section index="02" title={t('library.warningSignals')}>
        <ul className="space-y-2">
          {technique.warningNeurons.map((signal, i) => (
            <li key={i} className="text-sm leading-relaxed text-[var(--color-text-secondary)] flex items-start gap-2">
              <span className="mono-num text-[var(--color-accent-text)] shrink-0">{String(i + 1).padStart(2, '0')}</span>
              {signal}
            </li>
          ))}
        </ul>
      </Section>

      <Section index="03" title={t('library.evidence')}>
        <p className="text-sm leading-relaxed text-[var(--color-text-secondary)] mb-3">
          {technique.evidence.findings}
        </p>
        {uncertainty && (
          /* Evidence as a datasheet line */
          <p className="mono-label text-[var(--color-text-muted)] mb-3">
            {t('library.confidence')} {String(uncertainty.confidence).replace('.', ',')}
            {' · '}N {uncertainty.sampleSize}
            {' · '}{t('library.evidenceQuality')}: {t(`library.quality.${uncertainty.evidenceQuality}`)}
          </p>
        )}
        <ul className="space-y-1">
          {technique.evidence.studies.map((study, i) => (
            <li key={i} className="text-xs mono-num text-[var(--color-text-muted)]">
              [{i + 1}] {study}
            </li>
          ))}
        </ul>
      </Section>

      {relatedTechniques.length > 0 && (
        <Section index="04" title={t('library.relatedTechniques')}>
          <div className="flex flex-wrap gap-2">
            {relatedTechniques.map((related) => (
              <button
                key={related!.id}
                onClick={() => navigate(`/library/${related!.id}`)}
                className="mono-label px-3 py-2 border-2 border-[var(--color-border-hairline)] min-h-[2.5rem]
                  text-[var(--color-text-secondary)]
                  hover:border-[var(--color-border)] hover:text-[var(--color-text)]
                  transition-colors duration-100"
              >
                {tContent(related!.name, lang)}
              </button>
            ))}
          </div>
        </Section>
      )}
    </div>
  );
}
