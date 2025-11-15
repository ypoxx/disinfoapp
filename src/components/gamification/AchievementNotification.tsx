import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, X } from 'lucide-react';
import { Achievement } from '@/types';

interface AchievementNotificationProps {
  achievement: Achievement | null;
  onClose: () => void;
}

export function AchievementNotification({ achievement, onClose }: AchievementNotificationProps) {
  if (!achievement) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100, scale: 0.3 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -100, scale: 0.3 }}
        className="fixed top-4 left-1/2 z-50 -translate-x-1/2 transform"
      >
        <div className="relative overflow-hidden rounded-lg border-2 border-yellow-500 bg-gradient-to-r from-yellow-50 to-orange-50 p-6 shadow-2xl dark:from-yellow-900/20 dark:to-orange-900/20">
          {/* Confetti Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-transparent to-orange-400/20" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-2 top-2 rounded-full p-1 hover:bg-black/10"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Content */}
          <div className="relative flex items-center space-x-4">
            <motion.div
              animate={{
                rotate: [0, -10, 10, -10, 0],
                scale: [1, 1.1, 1.1, 1.1, 1],
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Trophy className="h-12 w-12 text-yellow-600" />
            </motion.div>
            <div>
              <h3 className="text-lg font-bold">Erfolg freigeschaltet!</h3>
              <p className="text-sm font-semibold">{achievement.name.de}</p>
              <p className="text-xs text-muted-foreground">{achievement.description.de}</p>
            </div>
          </div>

          {/* Sparkle Effects */}
          <div className="absolute -right-1 -top-1 h-4 w-4 animate-ping rounded-full bg-yellow-400" />
          <div className="absolute -left-1 -bottom-1 h-3 w-3 animate-ping rounded-full bg-orange-400" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
