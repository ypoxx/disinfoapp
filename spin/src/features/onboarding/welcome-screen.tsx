import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Button } from '@/design/components/button';

interface WelcomeScreenProps {
  onStart: () => void;
}

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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Button size="lg" onClick={onStart} className="w-full">
            {t('onboarding.letsGo')}
          </Button>
        </motion.div>

        {/* Subtle info */}
        <p className="text-[10px] text-[var(--color-text-muted)]">
          Kein Account nötig. Dein Fortschritt wird lokal gespeichert.
        </p>
      </motion.div>
    </div>
  );
}
