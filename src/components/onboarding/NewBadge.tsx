import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface NewBadgeProps {
  show?: boolean;
  className?: string;
}

export function NewBadge({ show = true, className = '' }: NewBadgeProps) {
  if (!show) return null;

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      className={`inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-primary to-purple-600 px-2 py-0.5 text-xs font-bold text-white shadow-lg ${className}`}
    >
      <Sparkles className="h-3 w-3" />
      <span>Neu!</span>
    </motion.div>
  );
}
