import { type ButtonHTMLAttributes, forwardRef } from 'react';

type Variant = 'primary' | 'secondary' | 'inverse' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

/**
 * Poster Logic buttons: flat rectangles, 2px borders, print-invert on press.
 * No shadows, no scale tricks — a button behaves like a printing plate.
 */
const variantClasses: Record<Variant, string> = {
  primary:
    'bg-[var(--color-accent)] text-[var(--color-accent-ink)] border-2 border-[var(--color-accent)] ' +
    'hover:bg-[var(--color-accent-hover)] hover:border-[var(--color-accent-hover)] ' +
    'active:bg-[var(--color-bg-inverse)] active:border-[var(--color-bg-inverse)] active:text-[var(--color-text-inverse)]',
  secondary:
    'bg-transparent text-[var(--color-text)] border-2 border-[var(--color-border)] ' +
    'hover:bg-[var(--color-bg-muted)] ' +
    'active:bg-[var(--color-bg-inverse)] active:text-[var(--color-text-inverse)]',
  inverse:
    'bg-[var(--color-bg-inverse)] text-[var(--color-text-inverse)] border-2 border-[var(--color-bg-inverse)] ' +
    'hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent-ink)] ' +
    'active:bg-[var(--color-accent-hover)] active:border-[var(--color-accent-hover)]',
  ghost:
    'text-[var(--color-text-secondary)] border-2 border-transparent underline-offset-4 ' +
    'hover:text-[var(--color-text)] hover:underline decoration-2 decoration-[var(--color-accent)]',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-3 py-2 text-sm min-h-[2.5rem]',
  md: 'px-4 py-2.5 text-sm min-h-[2.75rem]',
  lg: 'px-6 py-3.5 text-base min-h-[3rem]',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, disabled, ...props }, ref) => (
    <button
      ref={ref}
      className={`
        inline-flex items-center justify-center gap-2 font-bold rounded-[var(--radius-md)]
        transition-[background-color,color,border-color] duration-100
        disabled:opacity-40 disabled:pointer-events-none
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `.trim()}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
);

Button.displayName = 'Button';
