import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Target,
  BookOpen,
  TrendingUp,
  Trophy,
  ArrowRight,
  Sparkles,
  AlertCircle,
} from 'lucide-react';
import { useKnowledgeStore } from '@/stores/knowledgeStore';
import { useStreakStore } from '@/stores/streakStore';
import { useProgressStore } from '@/stores/progressStore';
import { getNextBestAction } from '@/utils/adaptiveLearning';
import { useMemo } from 'react';

const actionIcons = {
  quiz: Brain,
  practice: Target,
  learn: BookOpen,
  review: TrendingUp,
  celebrate: Trophy,
};

const priorityStyles = {
  critical: {
    bg: 'bg-gradient-to-br from-red-500/20 to-red-600/20',
    border: 'border-red-500/50',
    text: 'text-red-900 dark:text-red-100',
    icon: 'text-red-600',
    badge: 'bg-red-500 text-white',
  },
  high: {
    bg: 'bg-gradient-to-br from-orange-500/20 to-orange-600/20',
    border: 'border-orange-500/50',
    text: 'text-orange-900 dark:text-orange-100',
    icon: 'text-orange-600',
    badge: 'bg-orange-500 text-white',
  },
  medium: {
    bg: 'bg-gradient-to-br from-blue-500/20 to-blue-600/20',
    border: 'border-blue-500/50',
    text: 'text-blue-900 dark:text-blue-100',
    icon: 'text-blue-600',
    badge: 'bg-blue-500 text-white',
  },
  low: {
    bg: 'bg-gradient-to-br from-green-500/20 to-green-600/20',
    border: 'border-green-500/50',
    text: 'text-green-900 dark:text-green-100',
    icon: 'text-green-600',
    badge: 'bg-green-500 text-white',
  },
};

export function NextBestAction() {
  const knowledgeState = useKnowledgeStore();
  const { currentStreak } = useStreakStore();
  const { modulesCompleted } = useProgressStore();

  const nextAction = useMemo(() => {
    return getNextBestAction(knowledgeState, currentStreak > 0, modulesCompleted);
  }, [knowledgeState, currentStreak, modulesCompleted]);

  const Icon = actionIcons[nextAction.type];
  const styles = priorityStyles[nextAction.priority];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative overflow-hidden"
    >
      <Link to={nextAction.link} className="group block">
        <div
          className={`rounded-xl border-2 p-6 transition-all hover:scale-[1.02] hover:shadow-lg ${styles.bg} ${styles.border}`}
        >
          {/* Priority Badge */}
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {nextAction.priority === 'critical' && (
                <AlertCircle className="h-5 w-5 text-red-600 animate-pulse" />
              )}
              {nextAction.priority !== 'low' && (
                <span className={`rounded-full px-3 py-1 text-xs font-bold ${styles.badge}`}>
                  {nextAction.priority === 'critical'
                    ? 'DRINGEND'
                    : nextAction.priority === 'high'
                    ? 'WICHTIG'
                    : 'EMPFOHLEN'}
                </span>
              )}
            </div>
            <Sparkles className={`h-5 w-5 ${styles.icon}`} />
          </div>

          {/* Content */}
          <div className="mb-4 flex items-start gap-4">
            <div className={`rounded-lg bg-white/50 p-3 dark:bg-black/20 ${styles.icon}`}>
              <Icon className="h-8 w-8" />
            </div>
            <div className="flex-1">
              <h3 className={`mb-2 text-xl font-bold ${styles.text}`}>{nextAction.title}</h3>
              <p className={`mb-3 text-sm ${styles.text} opacity-90`}>
                {nextAction.description}
              </p>
              <div className={`text-xs opacity-70 ${styles.text}`}>
                Grund: {nextAction.reason}
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div
            className={`flex items-center justify-center gap-2 rounded-lg bg-white/70 py-3 font-semibold transition-colors group-hover:bg-white dark:bg-black/30 dark:group-hover:bg-black/50 ${styles.text}`}
          >
            <span>Los geht's</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>

      {/* Decorative Elements */}
      <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 opacity-10">
        <Icon className="h-full w-full" />
      </div>
    </motion.div>
  );
}
