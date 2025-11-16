import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Star } from 'lucide-react';
import { Achievement } from '@/types';
import { useEffect } from 'react';

interface AchievementNotificationProps {
  achievement: Achievement | null;
  onClose: () => void;
}

export function AchievementNotification({ achievement, onClose }: AchievementNotificationProps) {
  useEffect(() => {
    if (achievement) {
      // Auto-close after 5 seconds
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [achievement, onClose]);

  if (!achievement) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100, scale: 0.3 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -100, scale: 0.3 }}
        className="fixed top-4 left-1/2 z-50 -translate-x-1/2 transform"
      >
        <div className="relative overflow-hidden rounded-xl border-2 border-yellow-500 bg-gradient-to-r from-yellow-50 to-orange-50 p-6 shadow-2xl dark:from-yellow-900/20 dark:to-orange-900/20 min-w-[320px]">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-transparent to-orange-400/20" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-2 top-2 rounded-full p-1 hover:bg-black/10 z-10 transition-colors"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Content */}
          <div className="relative flex items-center space-x-4">
            <motion.div
              className="relative"
              animate={{
                rotate: [0, -10, 10, -10, 10, 0],
                scale: [1, 1.2, 1.2, 1.2, 1.2, 1],
              }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-5xl">{achievement.icon}</div>
              {/* Rotating sparkles */}
              <motion.div
                className="absolute -top-1 -right-1"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles className="h-5 w-5 text-yellow-500" />
              </motion.div>
            </motion.div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-base font-bold text-yellow-900 dark:text-yellow-100">
                  Erfolg freigeschaltet!
                </h3>
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
                >
                  <Star className="h-4 w-4 text-yellow-600 fill-yellow-600" />
                </motion.div>
              </div>
              <p className="text-sm font-semibold text-yellow-800 dark:text-yellow-200">
                {achievement.name.de}
              </p>
              <p className="text-xs text-yellow-700/80 dark:text-yellow-300/80 mt-0.5">
                {achievement.description.de}
              </p>
            </div>
          </div>

          {/* Sparkle Effects */}
          <div className="absolute -right-1 -top-1 h-4 w-4 animate-ping rounded-full bg-yellow-400" />
          <div className="absolute -left-1 -bottom-1 h-3 w-3 animate-ping rounded-full bg-orange-400 animation-delay-500" />
          <div className="absolute right-8 top-2 h-2 w-2 animate-ping rounded-full bg-yellow-300 animation-delay-1000" />

          {/* Progress Indicator */}
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-500 to-orange-500"
            initial={{ width: '100%' }}
            animate={{ width: '0%' }}
            transition={{ duration: 5, ease: 'linear' }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
