interface MasteryMeterProps {
  value: number; // 0-100
  label?: string;
  size?: 'sm' | 'md';
  className?: string;
}

export function MasteryMeter({ value, label, size = 'md', className = '' }: MasteryMeterProps) {
  const clamped = Math.max(0, Math.min(100, value));
  const radius = size === 'sm' ? 28 : 40;
  const stroke = size === 'sm' ? 4 : 5;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (clamped / 100) * circumference;
  const svgSize = (radius + stroke) * 2;

  const getColor = () => {
    if (clamped >= 80) return 'var(--color-success-500)';
    if (clamped >= 50) return 'var(--color-accent)';
    if (clamped >= 25) return 'var(--color-warning-500)';
    return 'var(--color-danger-500)';
  };

  return (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      <div className="relative" style={{ width: svgSize, height: svgSize }}>
        <svg width={svgSize} height={svgSize} className="-rotate-90">
          <circle
            cx={radius + stroke}
            cy={radius + stroke}
            r={radius}
            fill="none"
            stroke="var(--color-bg-muted)"
            strokeWidth={stroke}
          />
          <circle
            cx={radius + stroke}
            cy={radius + stroke}
            r={radius}
            fill="none"
            stroke={getColor()}
            strokeWidth={stroke}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-700 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`font-bold tabular-nums ${size === 'sm' ? 'text-sm' : 'text-lg'}`}>
            {Math.round(clamped)}
          </span>
        </div>
      </div>
      {label && (
        <span className="text-xs text-[var(--color-text-secondary)]">{label}</span>
      )}
    </div>
  );
}
