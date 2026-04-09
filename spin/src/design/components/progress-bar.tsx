interface ProgressBarProps {
  value: number; // 0-100
  color?: 'accent' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md';
  showLabel?: boolean;
  className?: string;
}

const colorMap = {
  accent: 'bg-[var(--color-accent)]',
  success: 'bg-[var(--color-success-500)]',
  warning: 'bg-[var(--color-warning-500)]',
  danger: 'bg-[var(--color-danger-500)]',
};

export function ProgressBar({
  value,
  color = 'accent',
  size = 'md',
  showLabel = false,
  className = '',
}: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, value));

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div
        className={`flex-1 bg-[var(--color-bg-muted)] rounded-[var(--radius-full)] overflow-hidden ${
          size === 'sm' ? 'h-1.5' : 'h-2.5'
        }`}
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={`h-full rounded-[var(--radius-full)] transition-all duration-500 ease-out ${colorMap[color]}`}
          style={{ width: `${clamped}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-xs font-medium text-[var(--color-text-secondary)] min-w-[2.5rem] text-right">
          {Math.round(clamped)}%
        </span>
      )}
    </div>
  );
}
