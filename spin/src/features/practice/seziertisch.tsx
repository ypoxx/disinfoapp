import { useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, X } from 'lucide-react';
import { Button } from '@/design/components/button';
import { Card } from '@/design/components/card';
import { QuizBlock, type QuizResolution } from '@/design/components/quiz-block';
import { PrecisionFeedback } from '@/design/components/precision-feedback';
import { t as tContent } from '@content/types';
import { caseForWeek, currentWeekIndex, getCaseById, seziertischCases } from '@content/cases';

/**
 * Seziertisch — "Fall der Woche". The user dissects a full comms piece by
 * marking every technique present. The multi-select QuizBlock powers the
 * interaction; afterwards each element gets a teaching note.
 */
export function SeziertischPage() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const navigate = useNavigate();
  const [params] = useSearchParams();

  // Lazy state init reads the clock once on mount (never during render)
  const [weekIndex] = useState(currentWeekIndex);
  const activeCase = getCaseById(params.get('case') ?? '') ?? caseForWeek(weekIndex);

  const [resolution, setResolution] = useState<QuizResolution | null>(null);

  const correctAnswers = useMemo(
    () => activeCase.options.map((o, i) => (o.present ? i : -1)).filter((i) => i >= 0),
    [activeCase]
  );

  return (
    <div className="fixed inset-0 bg-[var(--color-bg)] z-50 flex flex-col overflow-y-auto">
      {/* Header band */}
      <div className="bg-[var(--color-carbon)] text-[var(--color-chalk)] safe-area-top">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => navigate('/practice')}
            aria-label={t('common.back')}
            className="w-11 h-11 -ml-2 flex items-center justify-center"
          >
            <ArrowLeft size={20} aria-hidden />
          </button>
          <div className="flex-1">
            <p className="mono-label text-[var(--color-signal)]">{t('seziertisch.caseOfTheWeek')}</p>
            <p className="mono-label opacity-70">{t(`seziertisch.format.${activeCase.format}`)}</p>
          </div>
        </div>
      </div>

      <div className="flex-1 px-4 pb-10">
        <div className="max-w-2xl mx-auto space-y-5 pt-5">
          <h1 className="type-display text-xl">{tContent(activeCase.title, lang)}</h1>

          {/* The piece under the microscope */}
          <Card variant="outline" padding="md">
            <p className="mono-label text-[var(--color-text-muted)] mb-2">{t('seziertisch.thePiece')}</p>
            <p className="text-sm leading-relaxed whitespace-pre-line">{tContent(activeCase.piece, lang)}</p>
          </Card>

          {!resolution && (
            <p className="text-sm text-[var(--color-text-secondary)]">{t('seziertisch.instruction')}</p>
          )}

          {/* Multi-select dissection */}
          <QuizBlock
            options={activeCase.options.map((o) => tContent(o.label, lang))}
            correctAnswers={correctAnswers}
            groupLabel={tContent(activeCase.title, lang)}
            onResolve={setResolution}
          />

          {/* Per-element teaching notes after resolving */}
          {resolution && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-3"
            >
              <p className="mono-label text-[var(--color-text-muted)]">{t('seziertisch.breakdown')}</p>
              {activeCase.options.map((o, i) => (
                <div
                  key={i}
                  className="flex gap-3 p-3 rounded-[var(--radius-md)] border-2"
                  style={{
                    borderColor: o.present ? 'var(--color-signal)' : 'var(--color-border-hairline)',
                  }}
                >
                  <span className="shrink-0 mt-0.5" aria-hidden>
                    {o.present ? (
                      <Check size={18} className="text-[var(--color-accent-text)]" />
                    ) : (
                      <X size={18} className="text-[var(--color-text-muted)]" />
                    )}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-bold">
                      {tContent(o.label, lang)}
                      <span className="mono-label ml-2 text-[var(--color-text-muted)]">
                        {o.present ? t('seziertisch.present') : t('seziertisch.absent')}
                      </span>
                    </p>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mt-1">
                      {tContent(o.note, lang)}
                    </p>
                    {o.techniqueId && (
                      <button
                        onClick={() => navigate(`/library/${o.techniqueId}`)}
                        className="mono-label text-[var(--color-accent-text)] underline underline-offset-4 decoration-2 mt-1 min-h-[2.25rem]"
                      >
                        {t('seziertisch.openTechnique')}
                      </button>
                    )}
                  </div>
                </div>
              ))}

              <Card variant="inverse" padding="md">
                <p className="mono-label text-[var(--color-signal)] mb-2">{t('seziertisch.debrief')}</p>
                <p className="text-sm leading-relaxed">{tContent(activeCase.summary, lang)}</p>
                <PrecisionFeedback contentId={activeCase.id} surface="seziertisch" />
              </Card>

              <Button size="lg" variant="inverse" onClick={() => navigate('/practice')} className="w-full">
                {t('seziertisch.done')}
                <ArrowRight size={18} aria-hidden />
              </Button>
            </motion.div>
          )}

          {seziertischCases.length > 1 && !resolution && (
            <p className="mono-label text-[var(--color-text-muted)] text-center pt-2">
              {seziertischCases.length} {t('seziertisch.casesAvailable')}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
