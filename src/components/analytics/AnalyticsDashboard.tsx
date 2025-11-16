import { motion } from 'framer-motion';
import {
  TrendingUp,
  Target,
  Clock,
  Award,
  Flame,
  BookOpen,
  Trophy,
  Calendar,
  BarChart3,
} from 'lucide-react';
import { useProgressStore } from '@/stores/progressStore';
import { useAchievementStore } from '@/stores/achievementStore';

export function AnalyticsDashboard() {
  const {
    level,
    xp,
    streak,
    modulesCompleted,
    totalTimeSpent,
    modules,
  } = useProgressStore();
  const { achievements } = useAchievementStore();

  const unlockedAchievements = achievements.filter((a) => a.unlockedAt);
  const xpToNextLevel = Math.ceil(Math.pow(level, 2) * 100);
  const xpInCurrentLevel = xp - Math.ceil(Math.pow(level - 1, 2) * 100);
  const xpNeededForLevel = xpToNextLevel - Math.ceil(Math.pow(level - 1, 2) * 100);
  const levelProgress = (xpInCurrentLevel / xpNeededForLevel) * 100;

  const totalModules = 5;
  const completionRate = Math.round((modulesCompleted / totalModules) * 100);

  const averageScore =
    modulesCompleted > 0
      ? Math.round(
          Object.values(modules).reduce((sum, m) => sum + (m.completed ? m.score : 0), 0) /
            modulesCompleted
        )
      : 0;

  const formattedTime = () => {
    const hours = Math.floor(totalTimeSpent / 3600);
    const minutes = Math.floor((totalTimeSpent % 3600) / 60);
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  };

  const stats = [
    {
      icon: TrendingUp,
      label: 'Level',
      value: level,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      icon: Trophy,
      label: 'XP Gesamt',
      value: xp.toLocaleString(),
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
    },
    {
      icon: Flame,
      label: 'Streak',
      value: `${streak.current} Tage`,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
    },
    {
      icon: BookOpen,
      label: 'Module',
      value: `${modulesCompleted}/${totalModules}`,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      icon: Clock,
      label: 'Lernzeit',
      value: formattedTime(),
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
    {
      icon: Award,
      label: 'Erfolge',
      value: `${unlockedAchievements.length}/${achievements.length}`,
      color: 'text-pink-500',
      bgColor: 'bg-pink-500/10',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Deine Statistiken</h2>
        <p className="text-muted-foreground">
          Verfolge deinen Fortschritt und deine Erfolge beim Lernen
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-card border rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <div className={`${stat.bgColor} ${stat.color} w-10 h-10 rounded-lg flex items-center justify-center mb-3`}>
              <stat.icon className="h-5 w-5" />
            </div>
            <div className="text-2xl font-bold mb-1">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Level Progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-card border rounded-lg p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold">Level-Fortschritt</h3>
            <p className="text-sm text-muted-foreground">
              {xpInCurrentLevel.toLocaleString()} / {xpNeededForLevel.toLocaleString()} XP
            </p>
          </div>
          <div className="text-3xl font-bold text-primary">Lvl {level}</div>
        </div>
        <div className="h-3 bg-secondary rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-blue-500"
            initial={{ width: 0 }}
            animate={{ width: `${levelProgress}%` }}
            transition={{ duration: 1, delay: 0.8 }}
          />
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-right">
          {Math.round(levelProgress)}% bis Level {level + 1}
        </p>
      </motion.div>

      {/* Course Progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-card border rounded-lg p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold">Kurs-Fortschritt</h3>
            <p className="text-sm text-muted-foreground">
              {modulesCompleted} von {totalModules} Modulen abgeschlossen
            </p>
          </div>
          <div className="text-3xl font-bold text-green-500">{completionRate}%</div>
        </div>
        <div className="h-3 bg-secondary rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
            initial={{ width: 0 }}
            animate={{ width: `${completionRate}%` }}
            transition={{ duration: 1, delay: 0.9 }}
          />
        </div>
      </motion.div>

      {/* Performance Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="grid md:grid-cols-2 gap-4"
      >
        <div className="bg-card border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-500/10 text-blue-500 w-10 h-10 rounded-lg flex items-center justify-center">
              <Target className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">Durchschnittliche Punktzahl</h3>
              <p className="text-sm text-muted-foreground">In allen Quizzen</p>
            </div>
          </div>
          <div className="text-4xl font-bold text-blue-500">{averageScore}%</div>
        </div>

        <div className="bg-card border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-orange-500/10 text-orange-500 w-10 h-10 rounded-lg flex items-center justify-center">
              <Calendar className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">Längste Streak</h3>
              <p className="text-sm text-muted-foreground">Aufeinanderfolgende Tage</p>
            </div>
          </div>
          <div className="text-4xl font-bold text-orange-500">{streak.longest} Tage</div>
        </div>
      </motion.div>

      {/* Module Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="bg-card border rounded-lg p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-purple-500/10 text-purple-500 w-10 h-10 rounded-lg flex items-center justify-center">
            <BarChart3 className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Modul-Übersicht</h3>
            <p className="text-sm text-muted-foreground">Deine Leistung pro Modul</p>
          </div>
        </div>

        <div className="space-y-4">
          {Object.entries(modules).map(([moduleId, progress]) => (
            <div key={moduleId} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium capitalize">{moduleId}</span>
                <span className="text-muted-foreground">
                  {progress.completed ? `${progress.score}%` : 'Nicht abgeschlossen'}
                </span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className={`h-full ${
                    progress.score >= 90
                      ? 'bg-green-500'
                      : progress.score >= 70
                      ? 'bg-blue-500'
                      : progress.score >= 50
                      ? 'bg-yellow-500'
                      : 'bg-red-500'
                  }`}
                  initial={{ width: 0 }}
                  animate={{ width: progress.completed ? `${progress.score}%` : '0%' }}
                  transition={{ duration: 0.5, delay: 1 }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Recent Achievements */}
      {unlockedAchievements.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-card border rounded-lg p-6"
        >
          <h3 className="text-lg font-semibold mb-4">Neueste Erfolge</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {unlockedAchievements.slice(-6).reverse().map((achievement) => (
              <div
                key={achievement.id}
                className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg"
              >
                <div className="text-2xl">{achievement.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm truncate">{achievement.name.de}</div>
                  <div className="text-xs text-muted-foreground truncate">
                    {achievement.description.de}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
