import { motion } from 'framer-motion';
import { AnalyticsDashboard } from '@/components/analytics/AnalyticsDashboard';

export function ProgressPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <AnalyticsDashboard />
      </motion.div>
    </div>
  );
}
