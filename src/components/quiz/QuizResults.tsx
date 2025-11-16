import { motion } from 'framer-motion';
import { Trophy, Star, TrendingUp, RotateCcw, Home } from 'lucide-react';
import { Button, Card } from '@/components/shared/UIComponents';
import { useNavigate } from 'react-router-dom';

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  timeSpent: number;
  xpEarned: number;
  onRetry?: () => void;
}

export function QuizResults({
  score,
  totalQuestions,
  timeSpent,
  xpEarned,
  onRetry,
}: QuizResultsProps) {
  const navigate = useNavigate();
  const percentage = Math.round(score);
  const passed = percentage >= 70;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getGrade = (percent: number) => {
    if (percent >= 90) return { grade: 'Exzellent', color: 'text-green-600', emoji: '🌟' };
    if (percent >= 80) return { grade: 'Sehr gut', color: 'text-blue-600', emoji: '🎯' };
    if (percent >= 70) return { grade: 'Gut', color: 'text-yellow-600', emoji: '👍' };
    if (percent >= 60) return { grade: 'Befriedigend', color: 'text-orange-600', emoji: '📚' };
    return { grade: 'Nicht bestanden', color: 'text-red-600', emoji: '🔄' };
  };

  const gradeInfo = getGrade(percentage);

  return (
    <div className="mx-auto max-w-3xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="text-center">
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="mb-6 flex justify-center"
          >
            <div
              className={`rounded-full p-6 ${
                passed ? 'bg-green-100 dark:bg-green-900/20' : 'bg-orange-100 dark:bg-orange-900/20'
              }`}
            >
              <Trophy
                className={`h-16 w-16 ${passed ? 'text-green-600' : 'text-orange-600'}`}
              />
            </div>
          </motion.div>

          {/* Title */}
          <h1 className="mb-2 text-3xl font-bold">Quiz abgeschlossen!</h1>
          <p className="mb-8 text-lg text-muted-foreground">
            {passed
              ? 'Herzlichen Glückwunsch! Du hast bestanden!'
              : 'Noch nicht ganz geschafft. Versuch es noch einmal!'}
          </p>

          {/* Score Circle */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 150 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative h-48 w-48">
              <svg className="h-full w-full -rotate-90 transform">
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="none"
                  className="text-secondary"
                />
                <motion.circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="none"
                  strokeLinecap="round"
                  className={passed ? 'text-green-600' : 'text-orange-600'}
                  initial={{ strokeDashoffset: 553 }}
                  animate={{ strokeDashoffset: 553 - (553 * percentage) / 100 }}
                  transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
                  style={{ strokeDasharray: 553 }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl font-bold">{percentage}%</span>
                <span className={`text-lg font-semibold ${gradeInfo.color}`}>
                  {gradeInfo.emoji} {gradeInfo.grade}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="mb-8 grid grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Star className="mx-auto mb-2 h-8 w-8 text-yellow-500" />
              <div className="text-2xl font-bold">{xpEarned}</div>
              <div className="text-sm text-muted-foreground">XP verdient</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <TrendingUp className="mx-auto mb-2 h-8 w-8 text-blue-500" />
              <div className="text-2xl font-bold">
                {Math.round((percentage / 100) * totalQuestions)}/{totalQuestions}
              </div>
              <div className="text-sm text-muted-foreground">Richtige Antworten</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Trophy className="mx-auto mb-2 h-8 w-8 text-purple-500" />
              <div className="text-2xl font-bold">{formatTime(timeSpent)}</div>
              <div className="text-sm text-muted-foreground">Zeit benötigt</div>
            </motion.div>
          </div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col gap-3 sm:flex-row sm:justify-center"
          >
            <Button onClick={() => navigate('/modules')} variant="primary" size="lg">
              <Home className="mr-2 h-5 w-5" />
              Zurück zu den Modulen
            </Button>
            {onRetry && !passed && (
              <Button onClick={onRetry} variant="outline" size="lg">
                <RotateCcw className="mr-2 h-5 w-5" />
                Erneut versuchen
              </Button>
            )}
          </motion.div>
        </Card>
      </motion.div>
    </div>
  );
}
