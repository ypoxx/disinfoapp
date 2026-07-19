import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Flag, Check } from 'lucide-react';
import { storeFeedback } from '@/lib/precision-feedback-store';

interface PrecisionFeedbackProps {
  /** Stable id of the content being rated (exerciseId, caseId, techniqueId) */
  contentId: string;
  /** Where the feedback came from, for triage */
  surface: string;
}

/**
 * "Ungenau? Sag's uns" — an unobtrusive affordance that turns the target
 * audience's sharp eye into a correction channel. Feedback is stored locally
 * (exportable from settings); no network call, no interruption to the flow.
 */
export function PrecisionFeedback({ contentId, surface }: PrecisionFeedbackProps) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [note, setNote] = useState('');

  const reasons = [
    { key: 'imprecise', label: t('feedback.reason.imprecise') },
    { key: 'ambiguous', label: t('feedback.reason.ambiguous') },
    { key: 'wrong', label: t('feedback.reason.wrong') },
    { key: 'generic', label: t('feedback.reason.generic') },
  ];

  const submit = (reason: string) => {
    storeFeedback({ contentId, surface, reason, note: note.trim() || undefined, at: new Date().toISOString() });
    setSent(true);
    setOpen(false);
  };

  if (sent) {
    return (
      <p className="mono-label text-[var(--color-text-muted)] flex items-center gap-1.5 mt-2">
        <Check size={13} aria-hidden /> {t('feedback.thanks')}
      </p>
    );
  }

  return (
    <div className="mt-2">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="mono-label text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors inline-flex items-center gap-1.5 min-h-[2.25rem]"
        >
          <Flag size={13} aria-hidden /> {t('feedback.trigger')}
        </button>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="space-y-2 overflow-hidden"
          >
            <p className="mono-label text-[var(--color-text-muted)]">{t('feedback.prompt')}</p>
            <div className="flex flex-wrap gap-2">
              {reasons.map((r) => (
                <button
                  key={r.key}
                  onClick={() => submit(r.key)}
                  className="mono-label px-2.5 py-1.5 border-2 border-[var(--color-border-hairline)] rounded-[var(--radius-sm)]
                    hover:border-[var(--color-border)] transition-colors min-h-[2.25rem]"
                >
                  {r.label}
                </button>
              ))}
            </div>
            <input
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder={t('feedback.notePlaceholder')}
              aria-label={t('feedback.notePlaceholder')}
              className="w-full text-sm px-3 py-2 rounded-[var(--radius-sm)] bg-[var(--color-bg-surface)]
                border-2 border-[var(--color-border-hairline)] focus:outline-none focus:border-[var(--color-accent)]"
            />
            <button
              onClick={() => setOpen(false)}
              className="mono-label text-[var(--color-text-muted)] underline underline-offset-4 min-h-[2.25rem]"
            >
              {t('common.cancel')}
            </button>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
