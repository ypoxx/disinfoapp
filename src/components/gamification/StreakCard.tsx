import { motion } from 'framer-motion';
import { Flame, Trophy, Calendar, Target } from 'lucide-react';
import { useStreakStore } from '@/stores/streakStore';
import { useEffect } from 'react';

export function StreakCard() {
  const { currentStreak, longestStreak, weeklyGoal, weeklyProgress, totalDaysActive, checkIn } =
    useStreakStore();

  // Check in on mount
  useEffect(() => {
    checkIn();
  }, [checkIn]);

  const weeklyPercentage = Math.min((weeklyProgress / weeklyGoal) * 100, 100);

  return (
    <div className="rounded-lg border bg-gradient-to-br from-orange-500/10 to-red-500/10 p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-bold">Deine Streak</h3>
        <Flame className="h-6 w-6 text-orange-500" />
      </div>

      {/* Current Streak */}
      <div className="mb-6 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 10 }}
          className="mb-2"
        >
          <div className="text-6xl font-bold text-orange-500">{currentStreak}</div>
        </motion.div>
        <div className="text-lg font-medium">
          {currentStreak === 1 ? 'Tag' : 'Tage'} in Folge
        </div>
        <p className="mt-1 text-sm text-muted-foreground">
          Komm jeden Tag zurück, um deine Streak zu erhalten!
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4 border-t pt-4">
        {/* Longest Streak */}
        <div className="text-center">
          <div className="mb-1 flex justify-center">
            <Trophy className="h-4 w-4 text-yellow-500" />
          </div>
          <div className="text-xl font-bold">{longestStreak}</div>
          <div className="text-xs text-muted-foreground">Beste Streak</div>
        </div>

        {/* Total Days */}
        <div className="text-center">
          <div className="mb-1 flex justify-center">
            <Calendar className="h-4 w-4 text-blue-500" />
          </div>
          <div className="text-xl font-bold">{totalDaysActive}</div>
          <div className="text-xs text-muted-foreground">Tage aktiv</div>
        </div>

        {/* Weekly Goal */}
        <div className="text-center">
          <div className="mb-1 flex justify-center">
            <Target className="h-4 w-4 text-green-500" />
          </div>
          <div className="text-xl font-bold">
            {weeklyProgress}/{weeklyGoal}
          </div>
          <div className="text-xs text-muted-foreground">Diese Woche</div>
        </div>
      </div>

      {/* Weekly Progress Bar */}
      <div className="mt-4">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Wochenziel</span>
          <span className="font-medium">{Math.round(weeklyPercentage)}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-muted">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${weeklyPercentage}%` }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full bg-gradient-to-r from-orange-500 to-red-500"
          />
        </div>
      </div>

      {/* Encouragement Message */}
      {currentStreak > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-4 rounded-lg bg-orange-500/20 p-3 text-center text-sm font-medium text-orange-700 dark:text-orange-300"
        >
          {currentStreak >= 100
            ? '🏆 Unglaublich! Du bist eine Legende!'
            : currentStreak >= 30
            ? '🔥 Fantastisch! Du bist auf Feuer!'
            : currentStreak >= 7
            ? '💪 Großartig! Eine Woche geschafft!'
            : currentStreak >= 3
            ? '✨ Super! Bleib dran!'
            : '🌟 Guter Start! Weiter so!'}
        </motion.div>
      )}
    </div>
  );
}
