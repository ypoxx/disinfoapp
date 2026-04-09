import type { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padding?: 'sm' | 'md' | 'lg';
  hover?: boolean;
}

const paddingClasses = {
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
};

export function Card({ children, padding = 'md', hover = false, className = '', ...props }: CardProps) {
  return (
    <div
      className={`
        bg-[var(--color-bg-surface)] rounded-[var(--radius-lg)]
        border border-[var(--color-border)] shadow-[var(--shadow-sm)]
        ${paddingClasses[padding]}
        ${hover ? 'transition-shadow hover:shadow-[var(--shadow-md)] cursor-pointer' : ''}
        ${className}
      `.trim()}
      {...props}
    >
      {children}
    </div>
  );
}
