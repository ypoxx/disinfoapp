import { useTranslation } from 'react-i18next';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/design/components/button';

interface WelcomeScreenProps {
  onStart: () => void;
}

const benefits = [
  { index: '01', titleKey: 'onboarding.benefit1Title', descKey: 'onboarding.benefit1Desc' },
  { index: '02', titleKey: 'onboarding.benefit2Title', descKey: 'onboarding.benefit2Desc' },
  { index: '03', titleKey: 'onboarding.benefit3Title', descKey: 'onboarding.benefit3Desc' },
] as const;

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  const { t } = useTranslation();
  const reduce = !!useReducedMotion();

  const enter = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.35, ease: [0.9, 0, 0.1, 1] as const, delay: reduce ? 0 : delay },
  });

  return (
    <div className="min-h-svh flex flex-col px-6 py-8 max-w-md mx-auto w-full">
      {/* Masthead */}
      <motion.div {...enter(0)} className="flex items-baseline justify-between rule-b-2 pb-2">
        <span className="type-display text-base leading-none">
          SPIN<span className="align-super text-[0.55em]">®</span>
        </span>
        <span className="mono-label text-[var(--color-text-muted)]">N° 001</span>
      </motion.div>

      {/* Poster statement */}
      <div className="flex-1 flex flex-col justify-center py-8">
        <motion.h1 {...enter(0.1)} className="type-display text-2xl">
          {t('onboarding.posterLine1')}{' '}
          <span className="bg-[var(--color-signal)] text-[var(--color-accent-ink)] px-2 inline-block">
            {t('onboarding.posterHighlight')}
          </span>
        </motion.h1>
        <motion.p {...enter(0.2)} className="text-base text-[var(--color-text-secondary)] leading-relaxed mt-5">
          {t('onboarding.description')}
        </motion.p>

        {/* Benefits as an index */}
        <motion.ol {...enter(0.3)} className="mt-8 rule-t-2">
          {benefits.map(({ index, titleKey, descKey }) => (
            <li key={titleKey} className="flex items-baseline gap-3 py-3 border-b border-[var(--color-border-hairline)]">
              <span className="mono-label text-[var(--color-accent-text)] shrink-0">{index}</span>
              <div>
                <p className="font-bold text-sm">{t(titleKey)}</p>
                <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">{t(descKey)}</p>
              </div>
            </li>
          ))}
        </motion.ol>
      </div>

      {/* CTA */}
      <motion.div {...enter(0.45)} className="space-y-3 pb-safe">
        <Button size="lg" onClick={onStart} className="w-full">
          {t('onboarding.letsGo')}
          <ArrowRight size={18} aria-hidden />
        </Button>
        <p className="mono-label text-[var(--color-text-muted)] text-center">
          {t('onboarding.noAccountNeeded')}
        </p>
      </motion.div>
    </div>
  );
}
