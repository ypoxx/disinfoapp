import { motion } from 'framer-motion';
import { Trophy, TrendingUp, Award, Target, Lock, CheckCircle2 } from 'lucide-react';
import { useProgressStore } from '@/stores/progressStore';
import { modules } from '@/data/modules';
import { achievements } from '@/data/achievements';
import { Card, Badge, ProgressBar } from '@/components/shared/UIComponents';

export function ProgressPage() {
  const { level, xp, streak, modulesCompleted, totalTimeSpent, modules: userModules, achievements: userAchievements } = useProgressStore();

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

        {/* Module Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <h2 className="mb-6 text-2xl font-semibold">Modul-Fortschritt</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((module, index) => {
              const progress = userModules[module.id];
              const isCompleted = progress?.completed || false;
              const score = progress?.score || 0;

              return (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <Card className={isCompleted ? 'border-green-500' : ''}>
                    <div className="mb-3 flex items-start justify-between">
                      <h3 className="font-semibold">{module.name.de}</h3>
                      {isCompleted ? (
                        <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-500" />
                      ) : (
                        <Lock className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                      )}
                    </div>
                    {isCompleted ? (
                      <>
                        <div className="mb-2">
                          <Badge variant={score >= 90 ? 'success' : score >= 70 ? 'info' : 'warning'}>
                            {score}% erreicht
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {progress?.attempts} Versuch{progress?.attempts !== 1 ? 'e' : ''}
                        </div>
                      </>
                    ) : (
                      <div className="text-sm text-muted-foreground">Noch nicht absolviert</div>
                    )}
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12"
        >
          <h2 className="mb-6 text-2xl font-semibold">Errungenschaften</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {achievements.slice(0, 8).map((achievement, index) => {
              const userAchievement = userAchievements.find((a) => a.id === achievement.id);
              const isUnlocked = !!userAchievement?.unlockedAt;

              return (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <Card
                    className={`text-center ${
                      isUnlocked
                        ? 'border-yellow-500 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20'
                        : 'opacity-60'
                    }`}
                  >
                    <div className="mb-2 text-4xl">{achievement.icon}</div>
                    <h3 className="mb-1 font-semibold">{achievement.name.de}</h3>
                    <p className="mb-3 text-xs text-muted-foreground">
                      {achievement.description.de}
                    </p>
                    {!isUnlocked && (
                      <div className="mt-2">
                        <ProgressBar
                          value={userAchievement?.progress || 0}
                          max={achievement.requiredProgress}
                        />
                      </div>
                    )}
                    {isUnlocked && (
                      <Badge variant="success" className="mt-2">
                        Freigeschaltet!
                      </Badge>
                    )}
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* XP Progress to Next Level */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-12"
        >
          <Card>
            <h2 className="mb-4 text-2xl font-semibold">Nächstes Level</h2>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium">Level {level}</span>
              <span className="text-sm font-medium">Level {level + 1}</span>
            </div>
            <ProgressBar
              value={xp % 100}
              max={100}
              showLabel
            />
            <p className="mt-2 text-sm text-muted-foreground">
              Noch {100 - (xp % 100)} XP bis zum nächsten Level
            </p>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}
