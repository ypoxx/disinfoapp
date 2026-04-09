import type { BadgeRarity } from '@content/types';

interface BadgeDisplayProps {
  icon: string;
  name: string;
  rarity: BadgeRarity;
  earned?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const rarityColors: Record<BadgeRarity, string> = {
  common: 'border-[var(--color-neutral-300)]',
  rare: 'border-[var(--color-primary-400)]',
  epic: 'border-[var(--color-accent-500)]',
  legendary: 'border-[var(--color-accent-400)] shadow-[0_0_12px_rgba(245,158,11,0.3)]',
};

const sizeClasses = {
  sm: 'w-10 h-10 text-lg',
  md: 'w-14 h-14 text-2xl',
  lg: 'w-20 h-20 text-4xl',
};

export function BadgeDisplay({ icon, name, rarity, earned = true, size = 'md', className = '' }: BadgeDisplayProps) {
  return (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      <div
        className={`
          ${sizeClasses[size]} rounded-full border-2
          flex items-center justify-center
          ${earned ? rarityColors[rarity] : 'border-[var(--color-border)] opacity-40'}
          ${earned ? 'bg-[var(--color-bg-surface)]' : 'bg-[var(--color-bg-muted)]'}
          transition-all
        `.trim()}
        title={name}
      >
        {earned ? icon : '?'}
      </div>
      {size !== 'sm' && (
        <span className={`text-xs text-center ${earned ? 'text-[var(--color-text)]' : 'text-[var(--color-text-muted)]'}`}>
          {name}
        </span>
      )}
    </div>
  );
}
