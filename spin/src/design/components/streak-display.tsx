import { Flame } from 'lucide-react';

interface StreakDisplayProps {
  current: number;
  className?: string;
}

export function StreakDisplay({ current, className = '' }: StreakDisplayProps) {
  const isActive = current > 0;

  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <Flame
        size={20}
        className={isActive ? 'text-[var(--color-accent-500)]' : 'text-[var(--color-text-muted)]'}
        fill={isActive ? 'var(--color-accent-500)' : 'none'}
      />
      <span className={`text-lg font-bold tabular-nums ${isActive ? 'text-[var(--color-text)]' : 'text-[var(--color-text-muted)]'}`}>
        {current}
      </span>
    </div>
  );
}
