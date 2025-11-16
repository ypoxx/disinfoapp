import { motion } from 'framer-motion';
import { useKnowledgeStore } from '@/stores/knowledgeStore';
import { persuasionTechniques } from '@/data/persuasion';
import { getMasteryColor, getMasteryLabel } from '@/utils/dashboardUtils';
import { TechniqueCategory } from '@/types/persuasion';
import { Link } from 'react-router-dom';

interface MasteryHeatmapProps {
  filterCategory?: TechniqueCategory;
}

export function MasteryHeatmap({ filterCategory }: MasteryHeatmapProps) {
  const { getTechniqueMastery } = useKnowledgeStore();

  const techniques = filterCategory
    ? persuasionTechniques.filter((t) => t.category === filterCategory)
    : persuasionTechniques;

  return (
    <div className="space-y-4">
      {/* Legend */}
      <div className="flex flex-wrap items-center gap-4 text-sm">
        <span className="font-medium text-muted-foreground">Legende:</span>
        {[
          { label: 'Experte (80-100%)', color: '#10b981' },
          { label: 'Fortgeschritten (60-79%)', color: '#3b82f6' },
          { label: 'Mittel (40-59%)', color: '#f59e0b' },
          { label: 'Anfänger (20-39%)', color: '#ef4444' },
          { label: 'Ungeübt (0-19%)', color: '#6b7280' },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <div
              className="h-4 w-4 rounded"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-xs text-muted-foreground">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Heatmap Grid */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {techniques.map((technique, index) => {
          const mastery = getTechniqueMastery(technique.id);
          const masteryLevel = mastery?.masteryLevel || 0;
          const color = getMasteryColor(masteryLevel);
          const label = getMasteryLabel(masteryLevel);

          return (
            <Link
              key={technique.id}
              to={`/techniques?id=${technique.id}`}
              className="group"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.01 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="relative aspect-square rounded-lg border-2 border-transparent p-3 shadow-sm transition-all hover:border-primary/40 hover:shadow-md"
                style={{ backgroundColor: `${color}15` }}
              >
                {/* Mastery Level Bar */}
                <div className="absolute inset-0 overflow-hidden rounded-lg">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${masteryLevel}%` }}
                    transition={{ duration: 0.6, delay: index * 0.01 }}
                    className="absolute bottom-0 left-0 right-0 opacity-20"
                    style={{ backgroundColor: color }}
                  />
                </div>

                {/* Content */}
                <div className="relative flex h-full flex-col justify-between">
                  <div className="text-xs font-medium line-clamp-3">
                    {technique.name.de}
                  </div>
                  <div className="mt-auto">
                    <div
                      className="text-lg font-bold"
                      style={{ color }}
                    >
                      {masteryLevel}%
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {label}
                    </div>
                  </div>
                </div>

                {/* Tooltip on hover */}
                <div className="absolute -top-2 left-1/2 z-20 hidden -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-lg bg-popover px-3 py-2 text-xs text-popover-foreground shadow-lg group-hover:block">
                  <div className="font-semibold">{technique.name.de}</div>
                  <div className="text-muted-foreground">
                    {mastery ? (
                      <>
                        {mastery.encounterCount} Übungen •{' '}
                        {mastery.correctIdentifications} richtig
                      </>
                    ) : (
                      'Noch nicht geübt'
                    )}
                  </div>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>

      {/* Empty State */}
      {techniques.length === 0 && (
        <div className="py-12 text-center text-muted-foreground">
          Keine Techniken in dieser Kategorie gefunden.
        </div>
      )}
    </div>
  );
}
