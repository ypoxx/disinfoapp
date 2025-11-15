import { Link } from 'react-router-dom';
import { Clock, Award, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { modules } from '@/data/modules';
import { useProgressStore } from '@/stores/progressStore';

export function LearningModules() {
  const { modules: userModules } = useProgressStore();

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'advanced':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'expert':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'Anfänger';
      case 'intermediate':
        return 'Fortgeschritten';
      case 'advanced':
        return 'Erweitert';
      case 'expert':
        return 'Experte';
      default:
        return difficulty;
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="mb-4 text-4xl font-bold">Lernmodule</h1>
        <p className="mb-12 text-lg text-muted-foreground">
          Wähle ein Modul und beginne deine Reise zur Desinformations-Erkennung
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module, index) => {
            const progress = userModules[module.id];
            const isCompleted = progress?.completed || false;

            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Link
                  to={`/modules/${module.id}`}
                  className="block h-full rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-all hover:shadow-md"
                >
                  {/* Header */}
                  <div className="mb-4 flex items-start justify-between">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${getDifficultyColor(
                        module.difficulty
                      )}`}
                    >
                      {getDifficultyLabel(module.difficulty)}
                    </span>
                    {isCompleted && <CheckCircle2 className="h-6 w-6 text-green-500" />}
                  </div>

                  {/* Title & Description */}
                  <h3 className="mb-2 text-xl font-semibold">{module.name.de}</h3>
                  <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                    {module.description.de}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between border-t pt-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      <span>{module.duration} Min</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="mr-1 h-4 w-4" />
                      <span>{module.points} XP</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  {progress && !isCompleted && (
                    <div className="mt-4">
                      <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                        <div
                          className="h-full bg-primary transition-all"
                          style={{ width: `${(progress.score / 100) * 100}%` }}
                        />
                      </div>
                    </div>
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
