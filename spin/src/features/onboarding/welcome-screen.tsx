import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Sparkles, BookOpen, Clock, Target } from 'lucide-react';
import { Button } from '@/design/components/button';

interface WelcomeScreenProps {
  onStart: () => void;
}

const benefits = [
  { icon: BookOpen, titleKey: 'onboarding.benefit1Title', descKey: 'onboarding.benefit1Desc' },
  { icon: Clock, titleKey: 'onboarding.benefit2Title', descKey: 'onboarding.benefit2Desc' },
  { icon: Target, titleKey: 'onboarding.benefit3Title', descKey: 'onboarding.benefit3Desc' },
] as const;

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  const { t } = useTranslation();

  return (
    <div className="min-h-svh flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 max-w-sm"
      >
        {/* Logo / Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-[var(--color-primary-600)] to-[var(--color-primary-800)] flex items-center justify-center shadow-lg"
        >
          <Sparkles size={36} className="text-white" />
        </motion.div>

        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">{t('onboarding.welcome')}</h1>
          <p className="text-lg text-[var(--color-accent)]">{t('onboarding.tagline')}</p>
        </div>

        {/* Description */}
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
          {t('onboarding.description')}
        </p>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-3 text-left"
        >
          {benefits.map(({ icon: Icon, titleKey, descKey }, i) => (
            <motion.div
              key={titleKey}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="flex items-start gap-3"
            >
              <div className="mt-0.5 shrink-0 w-8 h-8 rounded-lg bg-[var(--color-accent-subtle)] flex items-center justify-center">
                <Icon size={16} className="text-[var(--color-accent)]" />
              </div>
              <div>
                <p className="text-sm font-medium">{t(titleKey)}</p>
                <p className="text-xs text-[var(--color-text-muted)]">{t(descKey)}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Button size="lg" onClick={onStart} className="w-full">
            {t('onboarding.letsGo')}
          </Button>
        </motion.div>

        {/* Subtle info */}
        <p className="text-[10px] text-[var(--color-text-muted)]">
          {t('onboarding.noAccountNeeded')}
        </p>
      </motion.div>
    </div>
  );
}
