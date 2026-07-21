import { motion, useReducedMotion } from 'framer-motion';

type OptionState = 'default' | 'selected' | 'correct' | 'incorrect' | 'missed' | 'dimmed';

interface QuizOptionProps {
  label: string;
  state?: OptionState;
  index: number;
  onClick?: () => void;
  disabled?: boolean;
  /** Mono tag shown on the verdict row (e.g. "Richtig", "Deine Wahl", "Übersehen") */
  tag?: string;
  /** Multi-select mode: option toggles instead of committing */
  toggleable?: boolean;
}

const indexLabels = ['A', 'B', 'C', 'D', 'E', 'F'];

/**
 * Poster Logic verdict language:
 * - correct   → print-invert onto the signal plane with a 2px "misregistered
 *               ghost" offset — a hard 100ms swap, like a stamp landing
 * - incorrect → the pick "deflates": condensed type, muted, a short shudder
 * - missed    → a correct option the user did NOT pick: outlined in signal,
 *               no stamp — the solution is shown, not awarded
 * - dimmed    → the untaken options step back
 */
export function QuizOption({ label, state = 'default', index, onClick, disabled, tag, toggleable }: QuizOptionProps) {
  const reduceMotion = useReducedMotion();

  const stateClasses: Record<OptionState, string> = {
    default:
      'bg-[var(--color-bg-surface)] border-[var(--color-border-hairline)] ' +
      'hover:border-[var(--color-border)] cursor-pointer',
    selected: 'bg-[var(--color-bg-muted)] border-[var(--color-border)] cursor-pointer',
    correct:
      'bg-[var(--color-verdict-bg)] border-[var(--color-border)] text-[var(--color-verdict-ink)] ' +
      'shadow-[4px_4px_0_0_var(--color-rule)]',
    incorrect: 'bg-[var(--color-miss-bg)] border-[var(--color-border-hairline)] text-[var(--color-miss-ink)]',
    missed:
      'bg-[var(--color-bg-surface)] border-[var(--color-signal)] text-[var(--color-text)] ' +
      'border-dashed',
    dimmed: 'bg-[var(--color-bg-surface)] border-[var(--color-border-hairline)] opacity-50',
  };

  const cellClasses: Record<OptionState, string> = {
    default: 'border-[var(--color-border-hairline)] text-[var(--color-text-secondary)]',
    selected: 'border-[var(--color-border)] bg-[var(--color-border)] text-[var(--color-bg)]',
    correct: 'border-[var(--color-verdict-ink)] bg-[var(--color-verdict-ink)] text-[var(--color-chalk)]',
    incorrect: 'border-[var(--color-border-hairline)] text-[var(--color-miss-ink)]',
    missed: 'border-[var(--color-signal)] text-[var(--color-accent-text)]',
    dimmed: 'border-[var(--color-border-hairline)] text-[var(--color-text-muted)]',
  };

  const tagClasses: Record<OptionState, string> = {
    default: '',
    selected: '',
    correct: 'bg-[var(--color-verdict-ink)] text-[var(--color-chalk)]',
    incorrect: 'border-2 border-[var(--color-miss-ink)] text-[var(--color-miss-ink)]',
    missed: 'border-2 border-[var(--color-signal)] text-[var(--color-accent-text)]',
    dimmed: '',
  };

  return (
    <motion.button
      className={`
        w-full flex items-center gap-3 p-4 rounded-[var(--radius-md)]
        border-2 text-left min-h-[3rem]
        transition-[background-color,border-color,color,box-shadow,opacity] duration-100
        ${stateClasses[state]}
        ${disabled ? 'pointer-events-none' : ''}
      `.trim()}
      onClick={onClick}
      disabled={disabled}
      aria-pressed={toggleable ? state === 'selected' : undefined}
      animate={
        state === 'incorrect' && !reduceMotion
          ? { x: [0, -3, 3, -2, 0] }
          : { x: 0 }
      }
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      <span
        className={`
          w-7 h-7 border-2 rounded-[var(--radius-sm)] flex items-center justify-center
          mono-label shrink-0 transition-colors duration-100
          ${cellClasses[state]}
        `.trim()}
      >
        {indexLabels[index]}
      </span>
      <span className={`text-sm font-medium flex-1 ${state === 'incorrect' ? 'type-condensed' : ''}`}>
        {label}
      </span>
      {tag && tagClasses[state] && (
        <span className={`mono-label px-2 py-1 shrink-0 ${tagClasses[state]}`}>
          {tag}
        </span>
      )}
    </motion.button>
  );
}
