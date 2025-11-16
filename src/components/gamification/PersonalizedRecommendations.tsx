import { motion } from 'framer-motion';
import { Lightbulb, ArrowRight, Target, TrendingUp, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useKnowledgeStore } from '@/stores/knowledgeStore';
import { useStreakStore } from '@/stores/streakStore';
import { calculateDashboardStats } from '@/utils/dashboardUtils';
import { useMemo } from 'react';

interface Recommendation {
  id: string;
  title: string;
  description: string;
  action: string;
  link: string;
  icon: any;
  priority: 'high' | 'medium' | 'low';
  color: string;
}

export function PersonalizedRecommendations() {
  const knowledgeState = useKnowledgeStore();
  const streakState = useStreakStore();
  const stats = calculateDashboardStats(knowledgeState);

  const recommendations = useMemo(() => {
    const recs: Recommendation[] = [];

    // Streak recommendations
    if (streakState.currentStreak === 0) {
      recs.push({
        id: 'start_streak',
        title: 'Starte deine Lernreise',
        description: 'Beginne heute und baue eine tägliche Lerngewohnheit auf!',
        action: 'Quiz starten',
        link: '/quiz',
        icon: TrendingUp,
        priority: 'high',
        color: '#f59e0b',
      });
    } else if (streakState.currentStreak < 7) {
      recs.push({
        id: 'build_streak',
        title: 'Halte deine Streak am Leben',
        description: `Du bist bei ${streakState.currentStreak} Tagen! Komm morgen wieder!`,
        action: 'Weiter lernen',
        link: '/modules',
        icon: Target,
        priority: 'medium',
        color: '#10b981',
      });
    }

    // Mastery recommendations
    if (stats.viewedTechniques < 10) {
      recs.push({
        id: 'explore_techniques',
        title: 'Entdecke mehr Techniken',
        description: `Du hast ${stats.viewedTechniques} von ${stats.totalTechniques} Techniken gesehen.`,
        action: 'Erkunden',
        link: '/techniques',
        icon: Brain,
        priority: 'high',
        color: '#3b82f6',
      });
    } else if (stats.masteredTechniques < 5) {
      recs.push({
        id: 'master_techniques',
        title: 'Meistere mehr Techniken',
        description: 'Übe mit dem Quiz, um Techniken zu meistern!',
        action: 'Quiz starten',
        link: '/quiz',
        icon: Target,
        priority: 'high',
        color: '#8b5cf6',
      });
    }

    // Weakness recommendations
    if (stats.weaknesses.length > 0) {
      const topWeakness = stats.weaknesses[0];
      recs.push({
        id: 'improve_weakness',
        title: 'Schwachstellen verbessern',
        description: `Übe mehr mit "${topWeakness.techniqueName}"`,
        action: 'Details ansehen',
        link: `/techniques?id=${topWeakness.techniqueId}`,
        icon: TrendingUp,
        priority: 'high',
        color: '#ef4444',
      });
    }

    // Accuracy recommendations
    if (stats.overallAccuracy > 0 && stats.overallAccuracy < 70) {
      recs.push({
        id: 'improve_accuracy',
        title: 'Verbessere deine Genauigkeit',
        description: `Deine aktuelle Genauigkeit liegt bei ${stats.overallAccuracy}%. Ziel: 80%+`,
        action: 'Simulator üben',
        link: '/simulator',
        icon: Target,
        priority: 'medium',
        color: '#f59e0b',
      });
    }

    // Dashboard recommendation
    if (stats.viewedTechniques >= 5) {
      recs.push({
        id: 'check_dashboard',
        title: 'Überprüfe deinen Fortschritt',
        description: 'Sieh dir detaillierte Statistiken im Dashboard an!',
        action: 'Dashboard öffnen',
        link: '/dashboard',
        icon: TrendingUp,
        priority: 'low',
        color: '#06b6d4',
      });
    }

    // Weekly goal recommendation
    if (streakState.weeklyProgress < streakState.weeklyGoal) {
      const remaining = streakState.weeklyGoal - streakState.weeklyProgress;
      recs.push({
        id: 'weekly_goal',
        title: 'Erreiche dein Wochenziel',
        description: `Noch ${remaining} ${remaining === 1 ? 'Tag' : 'Tage'} bis zum Wochenziel!`,
        action: 'Heute lernen',
        link: '/modules',
        icon: Target,
        priority: 'medium',
        color: '#10b981',
      });
    }

    // Sort by priority
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    return recs.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]).slice(0, 3);
  }, [stats, streakState]);

  if (recommendations.length === 0) {
    return (
      <div className="rounded-lg border bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-6 text-center">
        <div className="mb-4 flex justify-center">
          <div className="rounded-full bg-green-500/20 p-4">
            <TrendingUp className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <h3 className="mb-2 text-lg font-bold">Fantastische Arbeit!</h3>
        <p className="text-muted-foreground">
          Du machst großartige Fortschritte. Weiter so!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Lightbulb className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-bold">Empfehlungen für dich</h3>
      </div>

      <div className="space-y-3">
        {recommendations.map((rec, index) => {
          const Icon = rec.icon;
          return (
            <motion.div
              key={rec.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={rec.link} className="group block">
                <div
                  className="rounded-lg border-2 border-transparent bg-card p-4 transition-all hover:border-primary/40 hover:shadow-md"
                  style={{
                    borderLeftColor: rec.color,
                    borderLeftWidth: '4px',
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="rounded-lg p-2"
                      style={{ backgroundColor: `${rec.color}20` }}
                    >
                      <Icon className="h-5 w-5" style={{ color: rec.color }} />
                    </div>

                    <div className="flex-1">
                      <div className="mb-1 flex items-start justify-between gap-2">
                        <h4 className="font-semibold group-hover:text-primary">
                          {rec.title}
                        </h4>
                        <span
                          className="shrink-0 rounded-full px-2 py-0.5 text-xs font-medium"
                          style={{
                            backgroundColor: `${rec.color}20`,
                            color: rec.color,
                          }}
                        >
                          {rec.priority === 'high'
                            ? 'Hoch'
                            : rec.priority === 'medium'
                            ? 'Mittel'
                            : 'Niedrig'}
                        </span>
                      </div>
                      <p className="mb-2 text-sm text-muted-foreground">
                        {rec.description}
                      </p>
                      <div className="flex items-center gap-1 text-sm font-medium text-primary">
                        {rec.action}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
