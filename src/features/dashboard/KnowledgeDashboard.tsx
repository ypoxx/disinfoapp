import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  TrendingUp,
  Target,
  Award,
  BarChart3,
  Activity,
  AlertTriangle,
  Calendar,
} from 'lucide-react';
import { useKnowledgeStore } from '@/stores/knowledgeStore';
import { calculateDashboardStats } from '@/utils/dashboardUtils';
import { MasteryHeatmap } from '@/components/dashboard/MasteryHeatmap';
import { CategoryRadarChart } from '@/components/dashboard/CategoryRadarChart';
import { LearningTimeline } from '@/components/dashboard/LearningTimeline';
import { WeaknessAnalyzer } from '@/components/dashboard/WeaknessAnalyzer';
import { TechniqueCategory } from '@/types/persuasion';

type TabType = 'overview' | 'heatmap' | 'radar' | 'timeline' | 'weaknesses';

export function KnowledgeDashboard() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [heatmapFilter, setHeatmapFilter] = useState<TechniqueCategory | undefined>();

  const knowledgeState = useKnowledgeStore();
  const stats = calculateDashboardStats(knowledgeState);

  const tabs: { id: TabType; label: string; icon: any }[] = [
    { id: 'overview', label: 'Übersicht', icon: BarChart3 },
    { id: 'heatmap', label: 'Heatmap', icon: Brain },
    { id: 'radar', label: 'Kategorien', icon: Activity },
    { id: 'timeline', label: 'Timeline', icon: Calendar },
    { id: 'weaknesses', label: 'Schwächen', icon: AlertTriangle },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="mb-2 text-3xl font-bold">Wissens-Dashboard</h1>
        <p className="text-muted-foreground">
          Verfolge deinen Lernfortschritt und identifiziere Verbesserungsbereiche
        </p>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
      >
        {/* Overall Mastery */}
        <div className="rounded-lg border bg-gradient-to-br from-primary/10 to-primary/5 p-6">
          <div className="mb-2 flex items-center justify-between">
            <TrendingUp className="h-5 w-5 text-primary" />
            <span className="text-xs text-muted-foreground">Durchschnitt</span>
          </div>
          <div className="text-3xl font-bold text-primary">{stats.averageMastery}%</div>
          <div className="text-sm text-muted-foreground">Gesamte Beherrschung</div>
        </div>

        {/* Techniques Viewed */}
        <div className="rounded-lg border bg-gradient-to-br from-blue-500/10 to-blue-500/5 p-6">
          <div className="mb-2 flex items-center justify-between">
            <Brain className="h-5 w-5 text-blue-600" />
            <span className="text-xs text-muted-foreground">von {stats.totalTechniques}</span>
          </div>
          <div className="text-3xl font-bold text-blue-600">{stats.viewedTechniques}</div>
          <div className="text-sm text-muted-foreground">Techniken gesehen</div>
        </div>

        {/* Mastered Techniques */}
        <div className="rounded-lg border bg-gradient-to-br from-green-500/10 to-green-500/5 p-6">
          <div className="mb-2 flex items-center justify-between">
            <Award className="h-5 w-5 text-green-600" />
            <span className="text-xs text-muted-foreground">≥70% Mastery</span>
          </div>
          <div className="text-3xl font-bold text-green-600">{stats.masteredTechniques}</div>
          <div className="text-sm text-muted-foreground">Gemeisterte Techniken</div>
        </div>

        {/* Overall Accuracy */}
        <div className="rounded-lg border bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 p-6">
          <div className="mb-2 flex items-center justify-between">
            <Target className="h-5 w-5 text-yellow-600" />
            <span className="text-xs text-muted-foreground">{stats.totalPracticeCount} Übungen</span>
          </div>
          <div className="text-3xl font-bold text-yellow-600">{stats.overallAccuracy}%</div>
          <div className="text-sm text-muted-foreground">Genauigkeit</div>
        </div>
      </motion.div>

      {/* Category Insights */}
      {(stats.strongestCategory || stats.weakestCategory) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 grid gap-4 md:grid-cols-2"
        >
          {stats.strongestCategory && (
            <div className="rounded-lg border bg-green-500/10 p-4">
              <div className="mb-2 flex items-center gap-2 text-green-700 dark:text-green-400">
                <TrendingUp className="h-5 w-5" />
                <span className="font-semibold">Stärkste Kategorie</span>
              </div>
              <div className="text-lg font-bold">{stats.strongestCategory.category.replace('_', ' ')}</div>
              <div className="text-sm text-muted-foreground">
                {stats.strongestCategory.averageMastery}% durchschnittliche Beherrschung
              </div>
            </div>
          )}

          {stats.weakestCategory && (
            <div className="rounded-lg border bg-yellow-500/10 p-4">
              <div className="mb-2 flex items-center gap-2 text-yellow-700 dark:text-yellow-400">
                <AlertTriangle className="h-5 w-5" />
                <span className="font-semibold">Schwächste Kategorie</span>
              </div>
              <div className="text-lg font-bold">{stats.weakestCategory.category.replace('_', ' ')}</div>
              <div className="text-sm text-muted-foreground">
                {stats.weakestCategory.averageMastery}% durchschnittliche Beherrschung
              </div>
            </div>
          )}
        </motion.div>
      )}

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-6 flex flex-wrap gap-2 border-b"
      >
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 border-b-2 px-4 py-3 font-medium transition-colors ${
                activeTab === tab.id
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </motion.div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === 'overview' && (
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Quick Stats */}
            <div className="space-y-6">
              <div className="rounded-lg border bg-card p-6">
                <h2 className="mb-4 text-xl font-bold">Schnellübersicht</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Fortschritt</span>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-32 overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full bg-primary transition-all"
                          style={{
                            width: `${(stats.viewedTechniques / stats.totalTechniques) * 100}%`,
                          }}
                        />
                      </div>
                      <span className="text-sm font-medium">
                        {Math.round((stats.viewedTechniques / stats.totalTechniques) * 100)}%
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Gemeisterte Rate</span>
                    <span className="font-medium">
                      {stats.viewedTechniques > 0
                        ? Math.round((stats.masteredTechniques / stats.viewedTechniques) * 100)
                        : 0}%
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Gesamt Übungen</span>
                    <span className="font-medium">{stats.totalPracticeCount}</span>
                  </div>
                </div>
              </div>

              <WeaknessAnalyzer />
            </div>

            {/* Timeline */}
            <div>
              <LearningTimeline />
            </div>
          </div>
        )}

        {activeTab === 'heatmap' && (
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">Filter:</span>
              <button
                onClick={() => setHeatmapFilter(undefined)}
                className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                  !heatmapFilter
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                Alle
              </button>
              {['cognitive_bias', 'social_dynamics', 'logical_fallacy', 'emotional_manipulation', 'nlp', 'digital_influence'].map(
                (category) => (
                  <button
                    key={category}
                    onClick={() => setHeatmapFilter(category as TechniqueCategory)}
                    className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                      heatmapFilter === category
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    {category.replace('_', ' ')}
                  </button>
                ),
              )}
            </div>
            <MasteryHeatmap filterCategory={heatmapFilter} />
          </div>
        )}

        {activeTab === 'radar' && (
          <div>
            <CategoryRadarChart />
          </div>
        )}

        {activeTab === 'timeline' && (
          <div>
            <LearningTimeline />
          </div>
        )}

        {activeTab === 'weaknesses' && (
          <div>
            <WeaknessAnalyzer />
          </div>
        )}
      </motion.div>
    </div>
  );
}
