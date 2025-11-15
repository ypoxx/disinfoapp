import { motion } from 'framer-motion';
import { Trophy, TrendingUp, Award, Target } from 'lucide-react';
import { useProgressStore } from '@/stores/progressStore';

export function ProgressPage() {
  const { level, xp, streak, modulesCompleted, totalTimeSpent } = useProgressStore();

  const stats = [
    {
      icon: Trophy,
      label: 'Level',
      value: level,
      color: 'text-yellow-500',
    },
    {
      icon: Award,
      label: 'Erfahrungspunkte',
      value: xp,
      color: 'text-blue-500',
    },
    {
      icon: Target,
      label: 'Module Abgeschlossen',
      value: modulesCompleted,
      color: 'text-green-500',
    },
    {
      icon: TrendingUp,
      label: 'Tagessträhne',
      value: `${streak.current} Tage`,
      color: 'text-orange-500',
    },
  ];

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="mb-4 text-4xl font-bold">Dein Fortschritt</h1>
        <p className="mb-12 text-lg text-muted-foreground">
          Verfolge deine Lernerfolge und Errungenschaften
        </p>

        {/* Stats Grid */}
        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="rounded-lg border bg-card p-6 shadow-sm"
            >
              <div className="mb-2 flex items-center justify-between">
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Learning Time */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-lg border bg-card p-6 shadow-sm"
        >
          <h2 className="mb-4 text-2xl font-semibold">Lernstatistiken</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <div className="text-sm text-muted-foreground">Gesamte Lernzeit</div>
              <div className="text-2xl font-bold">{formatTime(totalTimeSpent)}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Längste Strähne</div>
              <div className="text-2xl font-bold">{streak.longest} Tage</div>
            </div>
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <h2 className="mb-6 text-2xl font-semibold">Errungenschaften</h2>
          <div className="rounded-lg border bg-card p-8 text-center">
            <p className="text-muted-foreground">
              Errungenschaften werden in Phase 4 implementiert.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
