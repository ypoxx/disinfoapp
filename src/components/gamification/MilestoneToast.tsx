import { motion, AnimatePresence } from 'framer-motion';
import { X, Trophy, Star, Zap } from 'lucide-react';
import { useEffect } from 'react';

export interface Milestone {
  id: string;
  title: string;
  description: string;
  icon: 'trophy' | 'star' | 'zap';
  color: string;
}

interface MilestoneToastProps {
  milestone: Milestone | null;
  onClose: () => void;
}

export function MilestoneToast({ milestone, onClose }: MilestoneToastProps) {
  // Auto close after 5 seconds
  useEffect(() => {
    if (milestone) {
      const timeout = setTimeout(onClose, 5000);
      return () => clearTimeout(timeout);
    }
  }, [milestone, onClose]);

  const getIcon = (iconType: Milestone['icon']) => {
    switch (iconType) {
      case 'trophy':
        return Trophy;
      case 'star':
        return Star;
      case 'zap':
        return Zap;
    }
  };

  return (
    <AnimatePresence>
      {milestone && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          className="fixed left-1/2 top-4 z-50 w-full max-w-md -translate-x-1/2 px-4"
        >
          <div
            className="overflow-hidden rounded-lg border-2 bg-card shadow-2xl"
            style={{
              borderColor: milestone.color,
              boxShadow: `0 0 30px ${milestone.color}40`,
            }}
          >
            {/* Celebration Animation Background */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{
                    x: Math.random() * 100 + '%',
                    y: '-10%',
                    rotate: Math.random() * 360,
                    opacity: 0.8,
                  }}
                  animate={{
                    y: '110%',
                    rotate: Math.random() * 360 + 720,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    delay: Math.random() * 0.5,
                    ease: 'linear',
                  }}
                  className="absolute h-2 w-2 rounded-full"
                  style={{ backgroundColor: milestone.color }}
                />
              ))}
            </div>

            {/* Content */}
            <div className="relative p-6">
              <button
                onClick={onClose}
                className="absolute right-2 top-2 rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="mb-4 flex items-center gap-4">
                <motion.div
                  initial={{ rotate: -180, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                  className="rounded-full p-3"
                  style={{ backgroundColor: `${milestone.color}20` }}
                >
                  {(() => {
                    const Icon = getIcon(milestone.icon);
                    return <Icon className="h-8 w-8" style={{ color: milestone.color }} />;
                  })()}
                </motion.div>

                <div>
                  <motion.h3
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg font-bold"
                  >
                    {milestone.title}
                  </motion.h3>
                  <motion.p
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-sm text-muted-foreground"
                  >
                    {milestone.description}
                  </motion.p>
                </div>
              </div>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 5, ease: 'linear' }}
                className="h-1 origin-left rounded-full"
                style={{ backgroundColor: milestone.color }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
