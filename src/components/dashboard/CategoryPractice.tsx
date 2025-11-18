import { motion } from 'framer-motion';
import { Target, ArrowRight, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useKnowledgeStore } from '@/stores/knowledgeStore';
import { getCategoryRecommendations } from '@/utils/adaptiveLearning';
import { useMemo } from 'react';

const categoryIcons: Record<string, string> = {
  cognitive_bias: '🧠',
  social_dynamics: '👥',
  emotional_manipulation: '❤️',
  logical_fallacy: '🤔',
  nlp: '💬',
  digital_influence: '📱',
};

const priorityStyles = {
  high: {
    border: 'border-red-500/50',
    bg: 'bg-red-50 dark:bg-red-900/10',
    text: 'text-red-900 dark:text-red-100',
    badge: 'bg-red-500 text-white',
    icon: AlertTriangle,
  },
  medium: {
    border: 'border-yellow-500/50',
    bg: 'bg-yellow-50 dark:bg-yellow-900/10',
    text: 'text-yellow-900 dark:text-yellow-100',
    badge: 'bg-yellow-500 text-white',
    icon: TrendingUp,
  },
  low: {
    border: 'border-green-500/50',
    bg: 'bg-green-50 dark:bg-green-900/10',
    text: 'text-green-900 dark:text-green-100',
    badge: 'bg-green-500 text-white',
    icon: CheckCircle,
  },
};

export function CategoryPractice() {
  const knowledgeState = useKnowledgeStore();
  const recommendations = useMemo(() => {
    return getCategoryRecommendations(knowledgeState).slice(0, 4);
  }, [knowledgeState]);

  if (recommendations.length === 0) {
    return (
      <div className="rounded-lg border bg-muted/50 p-6 text-center">
        <Target className="mx-auto mb-3 h-12 w-12 text-muted-foreground" />
        <p className="text-sm text-muted-foreground">
          Beginne mit dem Quiz, um Kategorien-Empfehlungen zu erhalten!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Target className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-bold">Kategorien-Training</h3>
        </div>
        <span className="text-sm text-muted-foreground">Nach Priorität sortiert</span>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {recommendations.map((rec, index) => {
          const styles = priorityStyles[rec.priority];
          const Icon = styles.icon;
          const emoji = categoryIcons[rec.category] || '📚';

          return (
            <motion.div
              key={rec.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/quiz?category=${rec.category}`}
                className="group block h-full"
              >
                <div
                  className={`h-full rounded-lg border-2 p-4 transition-all hover:scale-[1.02] hover:shadow-md ${styles.border} ${styles.bg}`}
                >
                  {/* Header */}
                  <div className="mb-3 flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{emoji}</span>
                      <div>
                        <h4 className={`font-semibold ${styles.text}`}>
                          {rec.categoryName}
                        </h4>
                        <p className="text-xs opacity-70">
                          {rec.techniqueCount} Techniken
                        </p>
                      </div>
                    </div>
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Stats */}
                  <div className="mb-3 grid grid-cols-2 gap-2">
                    <div className="rounded bg-white/50 p-2 text-center dark:bg-black/20">
                      <div className={`text-lg font-bold ${styles.text}`}>
                        {rec.avgMastery}%
                      </div>
                      <div className="text-xs opacity-70">Mastery</div>
                    </div>
                    <div className="rounded bg-white/50 p-2 text-center dark:bg-black/20">
                      <div className={`text-lg font-bold ${styles.text}`}>
                        {rec.avgAccuracy}%
                      </div>
                      <div className="text-xs opacity-70">Genauigkeit</div>
                    </div>
                  </div>

                  {/* Priority Badge */}
                  {rec.priority !== 'low' && (
                    <div className="mb-2">
                      <span className={`rounded-full px-2 py-1 text-xs font-bold ${styles.badge}`}>
                        {rec.priority === 'high' ? 'HOHE PRIORITÄT' : 'MITTLERE PRIORITÄT'}
                      </span>
                    </div>
                  )}

                  {/* Recommendation */}
                  <p className={`mb-3 text-xs ${styles.text} opacity-80`}>
                    {rec.recommendation}
                  </p>

                  {/* Weak Techniques Warning */}
                  {rec.weakTechniqueCount > 0 && (
                    <div className="mb-3 rounded bg-white/50 p-2 text-xs dark:bg-black/20">
                      <AlertTriangle className="mr-1 inline h-3 w-3" />
                      {rec.weakTechniqueCount} {rec.weakTechniqueCount === 1 ? 'Technik' : 'Techniken'} unter 60%
                    </div>
                  )}

                  {/* Action */}
                  <div className={`flex items-center justify-center gap-1 font-medium ${styles.text}`}>
                    <span className="text-sm">Jetzt üben</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Help Text */}
      <div className="rounded-lg border bg-muted/30 p-3 text-xs text-muted-foreground">
        <strong>Tipp:</strong> Fokussiere dich auf Kategorien mit hoher Priorität für schnelle
        Verbesserung. Kategorien mit niedriger Priorität kannst du mit gelegentlichen Reviews
        aufrechterhalten.
      </div>
    </div>
  );
}
