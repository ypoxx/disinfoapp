interface SegmentProgressProps {
  /** Total number of segments (session items) */
  total: number;
  /** Number of completed segments */
  done: number;
  /** Index of the active segment (omit when the run is complete) */
  active?: number;
  className?: string;
}

/**
 * Segmented session progress — one discrete segment per item, so every rep
 * visibly clicks into place and the bar actually reaches 100% at the end.
 */
export function SegmentProgress({ total, done, active, className = '' }: SegmentProgressProps) {
  return (
    <div
      className={`flex gap-1 ${className}`}
      role="progressbar"
      aria-valuenow={done}
      aria-valuemin={0}
      aria-valuemax={total}
    >
      {Array.from({ length: total }, (_, i) => {
        const state = i < done ? 'done' : i === active ? 'active' : 'todo';
        return (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-[var(--radius-sm)] transition-colors duration-150 ${
              state === 'done'
                ? 'bg-[var(--color-rule)]'
                : state === 'active'
                  ? 'bg-[var(--color-accent)]'
                  : 'bg-[var(--color-bg-muted)]'
            }`}
          />
        );
      })}
    </div>
  );
}
