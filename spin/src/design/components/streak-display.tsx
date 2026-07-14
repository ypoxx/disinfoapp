import { useTranslation } from 'react-i18next';

interface StreakDisplayProps {
  current: number;
  className?: string;
}

/** Typographic streak — a number that means something, not a flame emoji. */
export function StreakDisplay({ current, className = '' }: StreakDisplayProps) {
  const { t } = useTranslation();
  const isActive = current > 0;

  return (
    <div className={`flex flex-col items-end ${className}`}>
      <span
        className={`mono-num text-[1.75rem] font-bold leading-none ${
          isActive ? 'text-[var(--color-text)]' : 'text-[var(--color-text-muted)]'
        }`}
      >
        {current}
      </span>
      <span className="mono-label text-[var(--color-text-muted)]">{t('today.streak')}</span>
    </div>
  );
}
