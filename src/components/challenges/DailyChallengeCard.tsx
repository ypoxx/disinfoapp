import { motion } from 'framer-motion';
import { Calendar, Trophy, Clock, Target, CheckCircle, Sparkles } from 'lucide-react';
import { useChallengeStore } from '@/stores/challengeStore';
import { useEffect } from 'react';

export function DailyChallengeCard() {
  const { dailyChallenge, generateDailyChallenge, isChallengeCompleted } = useChallengeStore();

  useEffect(() => {
    generateDailyChallenge();
  }, [generateDailyChallenge]);

  if (!dailyChallenge) {
    return null;
  }

  const isCompleted = isChallengeCompleted(dailyChallenge.id);
  const expiresAt = new Date(dailyChallenge.expiresAt);
  const now = new Date();
  const hoursLeft = Math.max(0, Math.floor((expiresAt.getTime() - now.getTime()) / (1000 * 60 * 60)));
  const minutesLeft = Math.max(0, Math.floor(((expiresAt.getTime() - now.getTime()) % (1000 * 60 * 60)) / (1000 * 60)));

  const difficultyColors = {
    beginner: 'bg-green-500',
    intermediate: 'bg-blue-500',
    advanced: 'bg-purple-500',
    expert: 'bg-red-500',
  };

  const difficultyLabels = {
    beginner: 'Anfänger',
    intermediate: 'Fortgeschritten',
    advanced: 'Experte',
    expert: 'Meister',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative overflow-hidden rounded-lg border ${
        isCompleted
          ? 'bg-green-500/5 border-green-500/20'
          : 'bg-gradient-to-br from-primary/5 to-blue-500/5 border-primary/20'
      }`}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl" />

      <div className="relative p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`${isCompleted ? 'bg-green-500' : 'bg-gradient-to-br from-primary to-blue-500'} w-12 h-12 rounded-lg flex items-center justify-center`}>
              {isCompleted ? (
                <CheckCircle className="h-6 w-6 text-white" />
              ) : (
                <Calendar className="h-6 w-6 text-white" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-lg">Tägliche Challenge</h3>
                {!isCompleted && <Sparkles className="h-4 w-4 text-yellow-500 animate-pulse" />}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>
                  {hoursLeft > 0 ? `${hoursLeft}h ${minutesLeft}m` : `${minutesLeft}m`} verbleibend
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${difficultyColors[dailyChallenge.difficulty]}`}>
              {difficultyLabels[dailyChallenge.difficulty]}
            </div>
            <div className="flex items-center gap-1 text-yellow-500">
              <Trophy className="h-4 w-4" />
              <span className="text-sm font-semibold">+{dailyChallenge.points} XP</span>
            </div>
          </div>
        </div>

        {/* Challenge Details */}
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-base mb-1">{dailyChallenge.title.de}</h4>
            <p className="text-sm text-muted-foreground">{dailyChallenge.description.de}</p>
          </div>

          {/* Requirements */}
          {Object.keys(dailyChallenge.requirements).length > 0 && (
            <div className="bg-background/50 rounded-lg p-3 space-y-2">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Target className="h-4 w-4 text-primary" />
                <span>Anforderungen:</span>
              </div>
              <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                {dailyChallenge.requirements.minScore && (
                  <li>• Mindestens {dailyChallenge.requirements.minScore}% erreichen</li>
                )}
                {dailyChallenge.requirements.timeLimit && (
                  <li>
                    • In unter {Math.floor(dailyChallenge.requirements.timeLimit / 60)} Minuten
                    abschließen
                  </li>
                )}
                {dailyChallenge.requirements.modulesComplete &&
                  dailyChallenge.requirements.modulesComplete.length > 0 && (
                    <li>
                      • Module:{' '}
                      {dailyChallenge.requirements.modulesComplete
                        .map((m) => m.charAt(0).toUpperCase() + m.slice(1))
                        .join(', ')}
                    </li>
                  )}
              </ul>
            </div>
          )}

          {/* Status */}
          {isCompleted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/20 rounded-lg"
            >
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="font-semibold text-green-600 dark:text-green-400">
                Challenge abgeschlossen! 🎉
              </span>
            </motion.div>
          ) : (
            <div className="pt-2">
              <div className="text-sm text-muted-foreground mb-2">Fortschritt</div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-blue-500"
                  initial={{ width: 0 }}
                  animate={{ width: isCompleted ? '100%' : '0%' }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
