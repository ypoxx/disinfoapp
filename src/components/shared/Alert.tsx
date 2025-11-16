import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, AlertCircle, Info } from 'lucide-react';

interface AlertProps {
  type: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  message: string;
  onClose?: () => void;
}

export function Alert({ type, title, message, onClose }: AlertProps) {
  const config = {
    success: {
      icon: CheckCircle2,
      className: 'bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-200',
      iconColor: 'text-green-600 dark:text-green-400',
    },
    error: {
      icon: XCircle,
      className: 'bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-200',
      iconColor: 'text-red-600 dark:text-red-400',
    },
    warning: {
      icon: AlertCircle,
      className: 'bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-900/20 dark:border-yellow-800 dark:text-yellow-200',
      iconColor: 'text-yellow-600 dark:text-yellow-400',
    },
    info: {
      icon: Info,
      className: 'bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-200',
      iconColor: 'text-blue-600 dark:text-blue-400',
    },
  };

  const { icon: Icon, className, iconColor } = config[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={`relative rounded-lg border p-4 ${className}`}
    >
      <div className="flex items-start">
        <Icon className={`mr-3 mt-0.5 h-5 w-5 flex-shrink-0 ${iconColor}`} />
        <div className="flex-1">
          {title && <h4 className="mb-1 font-semibold">{title}</h4>}
          <p className="text-sm">{message}</p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="ml-3 flex-shrink-0 text-gray-400 hover:text-gray-600"
          >
            <XCircle className="h-5 w-5" />
          </button>
        )}
      </div>
    </motion.div>
  );
}
