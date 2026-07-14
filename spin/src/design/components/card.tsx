import type { HTMLAttributes, ReactNode } from 'react';

type Variant = 'soft' | 'outline' | 'inverse';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padding?: 'sm' | 'md' | 'lg';
  /** soft = hairline sheet, outline = 2px carbon plate, inverse = carbon plane */
  variant?: Variant;
}

const paddingClasses = {
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
};

const variantClasses: Record<Variant, string> = {
  soft: 'bg-[var(--color-bg-surface)] border border-[var(--color-border-hairline)]',
  outline: 'bg-[var(--color-bg-surface)] border-2 border-[var(--color-border)]',
  inverse: 'bg-[var(--color-bg-inverse)] text-[var(--color-text-inverse)]',
};

/** Flat poster surface. No shadows, no rounded corners — planes and rules. */
export function Card({ children, padding = 'md', variant = 'soft', className = '', ...props }: CardProps) {
  return (
    <div
      className={`
        rounded-[var(--radius-md)]
        ${variantClasses[variant]}
        ${paddingClasses[padding]}
        ${className}
      `.trim()}
      {...props}
    >
      {children}
    </div>
  );
}
