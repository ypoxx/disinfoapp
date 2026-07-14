import {
  Flame,
  GraduationCap,
  Crown,
  HelpCircle,
  Smartphone,
  Sunrise,
  Moon,
  CheckCircle2,
  Zap,
  RotateCcw,
  Award,
  type LucideIcon,
} from 'lucide-react';
import type { BadgeRarity } from '@content/types';

interface BadgeDisplayProps {
  icon: string;
  name: string;
  rarity: BadgeRarity;
  earned?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

/** content/badges.ts stores Lucide slugs — map them to real components */
const iconMap: Record<string, LucideIcon> = {
  'flame': Flame,
  'graduation-cap': GraduationCap,
  'crown': Crown,
  'help-circle': HelpCircle,
  'smartphone': Smartphone,
  'sunrise': Sunrise,
  'moon': Moon,
  'check-circle-2': CheckCircle2,
  'zap': Zap,
  'rotate-ccw': RotateCcw,
};

const rarityColors: Record<BadgeRarity, string> = {
  common: 'border-[var(--color-border)]',
  rare: 'border-[var(--color-cat-social_dynamics)]',
  epic: 'border-[var(--color-cat-digital_influence)]',
  legendary: 'border-[var(--color-accent)]',
};

const sizeClasses = {
  sm: 'w-10 h-10',
  md: 'w-14 h-14',
  lg: 'w-20 h-20',
};

const iconSizes = { sm: 18, md: 24, lg: 36 };

export function BadgeDisplay({ icon, name, rarity, earned = true, size = 'md', className = '' }: BadgeDisplayProps) {
  const Icon = iconMap[icon] ?? Award;

  return (
    <div className={`flex flex-col items-center gap-1.5 ${className}`}>
      <div
        className={`
          ${sizeClasses[size]} rounded-[var(--radius-md)] border-2
          flex items-center justify-center
          ${earned ? rarityColors[rarity] : 'border-[var(--color-border-hairline)]'}
          ${earned ? 'bg-[var(--color-bg-surface)] text-[var(--color-text)]' : 'bg-[var(--color-bg-muted)] text-[var(--color-text-muted)] opacity-50'}
        `.trim()}
        title={name}
      >
        <Icon size={iconSizes[size]} strokeWidth={2} aria-hidden />
      </div>
      {size !== 'sm' && (
        <span
          className={`text-[11px] leading-tight text-center max-w-[5.5rem] ${
            earned ? 'text-[var(--color-text)] font-medium' : 'text-[var(--color-text-muted)]'
          }`}
        >
          {name}
        </span>
      )}
    </div>
  );
}
