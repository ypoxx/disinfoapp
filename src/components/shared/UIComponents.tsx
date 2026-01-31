import { ReactNode, forwardRef, InputHTMLAttributes } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2, CheckCircle, AlertCircle, AlertTriangle, Info } from 'lucide-react';

// ============================================================================
// CARD COMPONENT
// ============================================================================
interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  variant?: 'default' | 'elevated' | 'outlined';
}

export function Card({ children, className = '', hover = false, variant = 'default' }: CardProps) {
  const baseClasses = 'rounded-lg text-card-foreground';

  const variantClasses = {
    default: 'border bg-card shadow-raised',
    elevated: 'bg-card shadow-floating',
    outlined: 'border-2 bg-transparent',
  };

  return (
    <motion.div
      whileHover={hover ? { scale: 1.01, boxShadow: 'var(--telekom-shadow-raised-hover)' } : {}}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={`${baseClasses} ${variantClasses[variant]} p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}

// ============================================================================
// BUTTON COMPONENT
// ============================================================================
interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  icon?: ReactNode;
}

export function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  className = '',
  type = 'button',
  icon,
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50';

  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-hovered active:bg-primary-pressed',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-accent',
    outline: 'border-2 border-border bg-transparent hover:bg-accent hover:border-primary',
    ghost: 'hover:bg-accent',
    destructive: 'bg-destructive text-destructive-foreground hover:opacity-90',
  };

  const sizeClasses = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 py-2',
    lg: 'h-12 px-6 text-lg',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {loading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : icon ? (
        icon
      ) : null}
      {children}
    </button>
  );
}

// ============================================================================
// INPUT COMPONENT
// ============================================================================
interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  helperText?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, size = 'md', className = '', ...props }, ref) => {
    const sizeClasses = {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4',
      lg: 'h-12 px-4 text-lg',
    };

    return (
      <div className="w-full">
        {label && (
          <label className="mb-1.5 block text-sm font-medium text-foreground">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`
            w-full rounded-lg border bg-card
            text-foreground placeholder:text-muted-foreground
            transition-all duration-200 ease-out
            focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20
            disabled:cursor-not-allowed disabled:opacity-50
            ${error ? 'border-destructive focus:border-destructive focus:ring-destructive/20' : 'border-border'}
            ${sizeClasses[size]}
            ${className}
          `}
          {...props}
        />
        {(error || helperText) && (
          <p className={`mt-1.5 text-sm ${error ? 'text-destructive' : 'text-muted-foreground'}`}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

// ============================================================================
// PROGRESS BAR COMPONENT
// ============================================================================
interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'success' | 'warning' | 'danger';
}

export function ProgressBar({
  value,
  max = 100,
  className = '',
  showLabel = false,
  size = 'md',
  color = 'primary',
}: ProgressBarProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const sizeClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
  };

  const colorClasses = {
    primary: 'bg-primary',
    success: 'bg-functional-success',
    warning: 'bg-functional-warning',
    danger: 'bg-functional-danger',
  };

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="mb-2 flex justify-between text-sm">
          <span className="text-muted-foreground">Fortschritt</span>
          <span className="font-semibold">{Math.round(percentage)}%</span>
        </div>
      )}
      <div className={`w-full overflow-hidden rounded-full bg-secondary ${sizeClasses[size]}`}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`h-full rounded-full ${colorClasses[color]}`}
        />
      </div>
    </div>
  );
}

// ============================================================================
// BADGE COMPONENT
// ============================================================================
interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'primary';
  size?: 'sm' | 'md';
  className?: string;
}

export function Badge({ children, variant = 'default', size = 'md', className = '' }: BadgeProps) {
  const variantClasses = {
    default: 'bg-secondary text-secondary-foreground',
    success: 'bg-functional-success-subtle text-success-foreground',
    warning: 'bg-functional-warning-subtle text-warning-foreground',
    error: 'bg-functional-danger-subtle text-danger-foreground',
    info: 'bg-functional-informational-subtle text-info-foreground',
    primary: 'bg-primary/10 text-primary',
  };

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-xs',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </span>
  );
}

// ============================================================================
// ALERT COMPONENT
// ============================================================================
interface AlertProps {
  children: ReactNode;
  variant?: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  onClose?: () => void;
  className?: string;
}

export function Alert({ children, variant = 'info', title, onClose, className = '' }: AlertProps) {
  const variantConfig = {
    success: {
      bg: 'bg-functional-success-subtle',
      border: 'border-functional-success',
      text: 'text-success-foreground',
      icon: CheckCircle,
    },
    error: {
      bg: 'bg-functional-danger-subtle',
      border: 'border-functional-danger',
      text: 'text-danger-foreground',
      icon: AlertCircle,
    },
    warning: {
      bg: 'bg-functional-warning-subtle',
      border: 'border-functional-warning',
      text: 'text-warning-foreground',
      icon: AlertTriangle,
    },
    info: {
      bg: 'bg-functional-informational-subtle',
      border: 'border-functional-informational',
      text: 'text-info-foreground',
      icon: Info,
    },
  };

  const config = variantConfig[variant];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={`relative rounded-lg border-l-4 p-4 ${config.bg} ${config.border} ${className}`}
    >
      <div className="flex gap-3">
        <Icon className={`h-5 w-5 flex-shrink-0 ${config.text}`} />
        <div className="flex-1">
          {title && <h4 className={`mb-1 font-semibold ${config.text}`}>{title}</h4>}
          <p className="text-sm text-foreground">{children}</p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="absolute right-2 top-2 rounded-md p-1 opacity-70 transition-opacity hover:opacity-100"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </motion.div>
  );
}

// ============================================================================
// SKELETON COMPONENT
// ============================================================================
interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
}

export function Skeleton({ className = '', variant = 'text', width, height }: SkeletonProps) {
  const variantClasses = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
  };

  return (
    <div
      className={`animate-pulse bg-secondary ${variantClasses[variant]} ${className}`}
      style={{ width, height }}
    />
  );
}

// ============================================================================
// MODAL COMPONENT
// ============================================================================
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function Modal({ isOpen, onClose, title, children, size = 'md', className = '' }: ModalProps) {
  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={`fixed left-1/2 top-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 ${sizeClasses[size]} ${className}`}
          >
            <div className="mx-4 rounded-xl border bg-card p-6 shadow-lg">
              {/* Header */}
              {title && (
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">{title}</h2>
                  <button
                    onClick={onClose}
                    className="rounded-lg p-1 transition-colors hover:bg-accent"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              )}

              {/* Content */}
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ============================================================================
// TOAST / NOTIFICATION COMPONENT
// ============================================================================
interface ToastProps {
  message: string;
  variant?: 'success' | 'error' | 'warning' | 'info';
  isVisible: boolean;
  onClose: () => void;
}

export function Toast({ message, variant = 'info', isVisible, onClose }: ToastProps) {
  const variantConfig = {
    success: {
      bg: 'bg-functional-success',
      icon: CheckCircle,
    },
    error: {
      bg: 'bg-functional-danger',
      icon: AlertCircle,
    },
    warning: {
      bg: 'bg-functional-warning',
      icon: AlertTriangle,
    },
    info: {
      bg: 'bg-functional-informational',
      icon: Info,
    },
  };

  const config = variantConfig[variant];
  const Icon = config.icon;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 50, x: '-50%' }}
          className={`fixed bottom-6 left-1/2 z-50 flex items-center gap-3 rounded-lg px-4 py-3 text-white shadow-lg ${config.bg}`}
        >
          <Icon className="h-5 w-5 flex-shrink-0" />
          <span className="font-medium">{message}</span>
          <button onClick={onClose} className="ml-2 rounded-md p-1 transition-colors hover:bg-white/20">
            <X className="h-4 w-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ============================================================================
// DIVIDER COMPONENT
// ============================================================================
interface DividerProps {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}

export function Divider({ className = '', orientation = 'horizontal' }: DividerProps) {
  return (
    <div
      className={`
        bg-border
        ${orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px'}
        ${className}
      `}
    />
  );
}
