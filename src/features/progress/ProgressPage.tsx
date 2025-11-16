import { motion } from 'framer-motion';
import { AnalyticsDashboard } from '@/components/analytics/AnalyticsDashboard';
import { StreakCard } from '@/components/gamification/StreakCard';
import { BadgeShowcase } from '@/components/gamification/BadgeShowcase';
import { PersonalizedRecommendations } from '@/components/gamification/PersonalizedRecommendations';

export function ProgressPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="mb-2 text-3xl font-bold">Dein Fortschritt</h1>
        <p className="text-muted-foreground">
          Verfolge deine Lernreise und erreiche neue Meilensteine
        </p>
      </motion.div>

      {/* Top Section: Streak and Recommendations */}
      <div className="mb-8 grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <StreakCard />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <PersonalizedRecommendations />
        </motion.div>
      </div>

      {/* Analytics Dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-8"
      >
        <AnalyticsDashboard />
      </motion.div>

      {/* Badge Showcase */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <BadgeShowcase />
      </motion.div>
    </div>
  );
}
