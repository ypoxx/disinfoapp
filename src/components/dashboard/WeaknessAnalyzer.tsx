import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, Lightbulb, ExternalLink } from 'lucide-react';
import { useKnowledgeStore } from '@/stores/knowledgeStore';
import { analyzeWeaknesses, formatCategoryName } from '@/utils/dashboardUtils';
import { Link } from 'react-router-dom';

function getPriorityColor(priority: 'high' | 'medium' | 'low') {
  switch (priority) {
    case 'high':
      return 'border-red-500/50 bg-red-500/10 text-red-600';
    case 'medium':
      return 'border-yellow-500/50 bg-yellow-500/10 text-yellow-600';
    case 'low':
      return 'border-blue-500/50 bg-blue-500/10 text-blue-600';
  }
}

function getPriorityLabel(priority: 'high' | 'medium' | 'low') {
  switch (priority) {
    case 'high':
      return 'Hohe Priorität';
    case 'medium':
      return 'Mittlere Priorität';
    case 'low':
      return 'Niedrige Priorität';
  }
}

export function WeaknessAnalyzer() {
  const knowledgeState = useKnowledgeStore();
  const weaknesses = analyzeWeaknesses(knowledgeState);

  if (weaknesses.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-green-500/50 bg-green-500/10 py-12 text-center">
        <div className="mb-4 rounded-full bg-green-500/20 p-4">
          <TrendingDown className="h-12 w-12 rotate-180 text-green-600" />
        </div>
        <h3 className="mb-2 text-lg font-semibold text-green-900 dark:text-green-100">
          Keine Schwächen erkannt!
        </h3>
        <p className="text-sm text-green-700 dark:text-green-300">
          Du machst großartige Fortschritte. Weiter so!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-yellow-500" />
          <h3 className="text-lg font-semibold">Verbesserungsbereiche</h3>
        </div>
        <span className="text-sm text-muted-foreground">
          {weaknesses.length} {weaknesses.length === 1 ? 'Technik' : 'Techniken'}
        </span>
      </div>

      <div className="space-y-3">
        {weaknesses.map((weakness, index) => (
          <motion.div
            key={weakness.techniqueId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className={`rounded-lg border-2 p-4 ${getPriorityColor(weakness.priority)}`}
          >
            {/* Header */}
            <div className="mb-3 flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="mb-1 flex items-center gap-2">
                  <h4 className="font-semibold">{weakness.techniqueName}</h4>
                  <span className="rounded-full px-2 py-0.5 text-xs font-medium">
                    {getPriorityLabel(weakness.priority)}
                  </span>
                </div>
                <p className="text-xs opacity-80">
                  {formatCategoryName(weakness.category)}
                </p>
              </div>
              <Link
                to={`/techniques?id=${weakness.techniqueId}`}
                className="rounded-lg p-2 transition-colors hover:bg-background/50"
                title="Im Explorer öffnen"
              >
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>

            {/* Stats */}
            <div className="mb-3 grid grid-cols-3 gap-3">
              <div className="rounded-lg bg-background/50 p-2 text-center">
                <div className="text-lg font-bold">{weakness.masteryLevel}%</div>
                <div className="text-xs opacity-80">Mastery</div>
              </div>
              <div className="rounded-lg bg-background/50 p-2 text-center">
                <div className="text-lg font-bold">{weakness.accuracy}%</div>
                <div className="text-xs opacity-80">Genauigkeit</div>
              </div>
              <div className="rounded-lg bg-background/50 p-2 text-center">
                <div className="text-lg font-bold">{weakness.encounterCount}</div>
                <div className="text-xs opacity-80">Übungen</div>
              </div>
            </div>

            {/* Recommendations */}
            {weakness.recommendations.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Lightbulb className="h-4 w-4" />
                  <span>Empfehlungen:</span>
                </div>
                <ul className="space-y-1 pl-6">
                  {weakness.recommendations.map((rec, recIndex) => (
                    <li key={recIndex} className="text-sm opacity-90">
                      • {rec}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action Buttons */}
            <div className="mt-3 flex flex-wrap gap-2">
              <Link
                to="/quiz"
                className="inline-flex items-center gap-1 rounded-lg bg-background/70 px-3 py-1.5 text-xs font-medium transition-colors hover:bg-background"
              >
                Quiz starten
              </Link>
              <Link
                to="/simulator"
                className="inline-flex items-center gap-1 rounded-lg bg-background/70 px-3 py-1.5 text-xs font-medium transition-colors hover:bg-background"
              >
                Im Simulator üben
              </Link>
              <Link
                to={`/techniques?id=${weakness.techniqueId}`}
                className="inline-flex items-center gap-1 rounded-lg bg-background/70 px-3 py-1.5 text-xs font-medium transition-colors hover:bg-background"
              >
                Details ansehen
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary */}
      <div className="rounded-lg border bg-muted/50 p-4">
        <h4 className="mb-2 font-medium">Zusammenfassung</h4>
        <p className="text-sm text-muted-foreground">
          {weaknesses.filter((w) => w.priority === 'high').length > 0 ? (
            <>
              Du hast{' '}
              <span className="font-semibold text-red-600">
                {weaknesses.filter((w) => w.priority === 'high').length}
              </span>{' '}
              {weaknesses.filter((w) => w.priority === 'high').length === 1
                ? 'Technik mit hoher Priorität'
                : 'Techniken mit hoher Priorität'}{' '}
              zum Üben. Konzentriere dich zuerst auf diese.
            </>
          ) : (
            <>
              Du hast gute Fortschritte gemacht! Arbeite weiter an den{' '}
              {weaknesses.filter((w) => w.priority === 'medium').length} Techniken mit
              mittlerer Priorität.
            </>
          )}
        </p>
      </div>
    </div>
  );
}
