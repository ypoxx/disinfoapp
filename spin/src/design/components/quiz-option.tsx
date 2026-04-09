import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

type OptionState = 'default' | 'selected' | 'correct' | 'incorrect';

interface QuizOptionProps {
  label: string;
  state?: OptionState;
  index: number;
  onClick?: () => void;
  disabled?: boolean;
}

const stateClasses: Record<OptionState, string> = {
  default:
    'border-[var(--color-border)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-subtle)] cursor-pointer',
  selected:
    'border-[var(--color-accent)] bg-[var(--color-accent-subtle)]',
  correct:
    'border-[var(--color-success-500)] bg-[var(--color-success-50)]',
  incorrect:
    'border-[var(--color-danger-500)] bg-[var(--color-danger-50)]',
};

const indexLabels = ['A', 'B', 'C', 'D', 'E', 'F'];

export function QuizOption({ label, state = 'default', index, onClick, disabled }: QuizOptionProps) {
  return (
    <motion.button
      className={`
        w-full flex items-center gap-3 p-4 rounded-[var(--radius-lg)]
        border-2 text-left transition-colors min-h-[3rem]
        ${stateClasses[state]}
        ${disabled ? 'pointer-events-none' : ''}
      `.trim()}
      onClick={onClick}
      disabled={disabled}
      whileTap={state === 'default' ? { scale: 0.98 } : undefined}
    >
      <span className="w-7 h-7 rounded-full bg-[var(--color-bg-muted)] flex items-center justify-center text-xs font-bold shrink-0">
        {state === 'correct' ? <Check size={14} className="text-[var(--color-success-600)]" /> :
         state === 'incorrect' ? <X size={14} className="text-[var(--color-danger-600)]" /> :
         indexLabels[index]}
      </span>
      <span className="text-sm">{label}</span>
    </motion.button>
  );
}
