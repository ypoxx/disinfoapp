import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  AlertTriangle,
  Shield,
  BookOpen,
  Network,
  Brain,
  TrendingUp,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import {
  getRelationshipsForTechnique,
  getCounterMeasuresForTechnique,
  getTechniqueById,
  getPhasesForTechnique,
  getRecommendedTechniques,
} from '@/data/persuasion';
import { Card } from '@/components/shared/UIComponents';
import type { PersuasionTechnique } from '@/types/persuasion';

interface TechniqueDetailProps {
  technique: PersuasionTechnique;
  onClose: () => void;
  onNavigate?: (techniqueId: string) => void;
}

type TabType = 'overview' | 'counter-measures' | 'relationships' | 'evidence' | 'phases';

export function TechniqueDetail({ technique, onClose, onNavigate }: TechniqueDetailProps) {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  const relationships = getRelationshipsForTechnique(technique.id);
  const counterMeasures = getCounterMeasuresForTechnique(technique.id);
  const phases = getPhasesForTechnique(technique.id);
  const recommended = getRecommendedTechniques(technique.id, 4);

  const handleNavigate = (techniqueId: string) => {
    if (onNavigate) {
      onNavigate(techniqueId);
    } else {
      const newTechnique = getTechniqueById(techniqueId);
      if (newTechnique) {
        onClose();
        // Re-open with new technique
        setTimeout(() => {
          const event = new CustomEvent('open-technique', { detail: newTechnique });
          window.dispatchEvent(event);
        }, 100);
      }
    }
  };

  const tabs = [
    { id: 'overview' as TabType, label: 'Überblick', icon: <BookOpen className="h-4 w-4" /> },
    {
      id: 'counter-measures' as TabType,
      label: 'Gegenmaßnahmen',
      icon: <Shield className="h-4 w-4" />,
      badge: counterMeasures.length,
    },
    {
      id: 'relationships' as TabType,
      label: 'Verbindungen',
      icon: <Network className="h-4 w-4" />,
      badge: relationships.length,
    },
    { id: 'evidence' as TabType, label: 'Evidenz', icon: <Brain className="h-4 w-4" /> },
    {
      id: 'phases' as TabType,
      label: 'Phasen',
      icon: <TrendingUp className="h-4 w-4" />,
      badge: phases.length,
    },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-xl bg-background shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-full bg-background/80 p-2 backdrop-blur transition-colors hover:bg-muted"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Scrollable Content */}
          <div className="max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="border-b bg-muted/30 p-6 pb-4">
              <div className="mb-3 flex items-start gap-3">
                <div className="flex-1">
                  <h2 className="mb-2 text-3xl font-bold">{technique.name.de}</h2>
                  <p className="text-sm text-muted-foreground">{technique.name.en}</p>
                </div>
                <div
                  className={`rounded-lg px-3 py-1 text-sm font-medium ${
                    technique.difficulty === 'beginner'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                      : technique.difficulty === 'intermediate'
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                      : technique.difficulty === 'advanced'
                      ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300'
                      : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                  }`}
                >
                  {technique.difficulty === 'beginner'
                    ? 'Einfach'
                    : technique.difficulty === 'intermediate'
                    ? 'Mittel'
                    : technique.difficulty === 'advanced'
                    ? 'Fortgeschritten'
                    : 'Experte'}
                </div>
              </div>

              {/* Tabs */}
              <div className="flex gap-2 overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:bg-muted'
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                    {tab.badge !== undefined && (
                      <span
                        className={`ml-1 rounded-full px-1.5 py-0.5 text-xs ${
                          activeTab === tab.id
                            ? 'bg-primary-foreground/20'
                            : 'bg-muted'
                        }`}
                      >
                        {tab.badge}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  {/* Description */}
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">Beschreibung</h3>
                    <p className="text-muted-foreground">{technique.description.de}</p>
                  </div>

                  {/* Examples */}
                  <div>
                    <h3 className="mb-3 text-lg font-semibold">Beispiele</h3>
                    <div className="space-y-2">
                      {technique.examples.map((example, index) => (
                        <div
                          key={index}
                          className="flex gap-3 rounded-lg bg-muted/50 p-3"
                        >
                          <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                            {index + 1}
                          </div>
                          <p className="text-sm">{example}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Warning Signs */}
                  <div>
                    <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
                      <AlertTriangle className="h-5 w-5 text-yellow-600" />
                      Warnsignale
                    </h3>
                    <div className="grid gap-2 md:grid-cols-2">
                      {technique.warningNeurons.map((warning, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-2 rounded-lg border border-yellow-200 bg-yellow-50 p-3 dark:border-yellow-900/30 dark:bg-yellow-900/10"
                        >
                          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-yellow-600" />
                          <span className="text-sm">{warning}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recommended Techniques */}
                  {recommended.length > 0 && (
                    <div>
                      <h3 className="mb-3 text-lg font-semibold">Ähnliche Techniken</h3>
                      <div className="grid gap-3 md:grid-cols-2">
                        {recommended.map((rec) => (
                          <button
                            key={rec.id}
                            onClick={() => handleNavigate(rec.id)}
                            className="rounded-lg border bg-muted/30 p-3 text-left transition-colors hover:bg-muted/50"
                          >
                            <div className="mb-1 font-medium">{rec.name.de}</div>
                            <div className="line-clamp-2 text-xs text-muted-foreground">
                              {rec.description.de}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Counter-Measures Tab */}
              {activeTab === 'counter-measures' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  {counterMeasures.length === 0 ? (
                    <div className="rounded-lg bg-muted/30 p-6 text-center">
                      <Shield className="mx-auto mb-2 h-12 w-12 text-muted-foreground" />
                      <p className="text-muted-foreground">
                        Keine spezifischen Gegenmaßnahmen dokumentiert
                      </p>
                    </div>
                  ) : (
                    counterMeasures.map((cm) => {
                      const effectiveness = cm.effectiveness.find(
                        (e) => e.techniqueId === technique.id
                      );
                      return (
                        <Card key={cm.id}>
                          <div className="mb-2 flex items-start justify-between">
                            <div>
                              <h4 className="mb-1 font-semibold">{cm.name.de}</h4>
                              <p className="text-sm text-muted-foreground">
                                {cm.description.de}
                              </p>
                            </div>
                            {effectiveness && (
                              <div
                                className={`rounded-full px-3 py-1 text-xs font-medium ${
                                  effectiveness.effectiveness === 'very_high'
                                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30'
                                    : effectiveness.effectiveness === 'high'
                                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30'
                                    : effectiveness.effectiveness === 'moderate'
                                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30'
                                    : 'bg-gray-100 text-gray-800 dark:bg-gray-900/30'
                                }`}
                              >
                                {effectiveness.effectiveness === 'very_high'
                                  ? 'Sehr effektiv'
                                  : effectiveness.effectiveness === 'high'
                                  ? 'Effektiv'
                                  : effectiveness.effectiveness === 'moderate'
                                  ? 'Moderat'
                                  : 'Niedrig'}
                              </div>
                            )}
                          </div>
                          <div className="mt-3 space-y-2">
                            {cm.implementation.map((step, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-sm">
                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                                <span>{step}</span>
                              </div>
                            ))}
                          </div>
                        </Card>
                      );
                    })
                  )}
                </motion.div>
              )}

              {/* Relationships Tab */}
              {activeTab === 'relationships' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-3"
                >
                  {relationships.length === 0 ? (
                    <div className="rounded-lg bg-muted/30 p-6 text-center">
                      <Network className="mx-auto mb-2 h-12 w-12 text-muted-foreground" />
                      <p className="text-muted-foreground">
                        Keine dokumentierten Verbindungen
                      </p>
                    </div>
                  ) : (
                    relationships.map((rel, idx) => {
                      const isSource = rel.source === technique.id;
                      const otherId = isSource ? rel.target : rel.source;
                      const other = getTechniqueById(otherId);
                      if (!other) return null;

                      return (
                        <div
                          key={idx}
                          onClick={() => handleNavigate(otherId)}
                          className="cursor-pointer"
                        >
                          <Card className="transition-colors hover:bg-muted/50">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="mb-1 flex items-center gap-2">
                                  <h4 className="font-semibold">{other.name.de}</h4>
                                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                                    {rel.type.replace('_', ' ')}
                                  </span>
                                </div>
                                <p className="mb-2 text-sm text-muted-foreground">
                                  {rel.description.de}
                                </p>
                                <div className="flex items-center gap-2">
                                  <div className="text-xs text-muted-foreground">
                                    Stärke: {Math.round(rel.strength * 100)}%
                                  </div>
                                  <div className="h-2 flex-1 max-w-xs overflow-hidden rounded-full bg-muted">
                                    <div
                                      className="h-full bg-primary"
                                      style={{ width: `${rel.strength * 100}%` }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <ExternalLink className="h-4 w-4 text-muted-foreground" />
                            </div>
                          </Card>
                        </div>
                      );
                    })
                  )}
                </motion.div>
              )}

              {/* Evidence Tab */}
              {activeTab === 'evidence' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  {/* Summary */}
                  {technique.evidence.uncertainty && (
                    <Card className="bg-blue-50 dark:bg-blue-900/10">
                      <div className="mb-3 flex items-center gap-2">
                        <Brain className="h-5 w-5 text-blue-600" />
                        <h3 className="font-semibold">Evidenz-Qualität</h3>
                      </div>
                      <div className="grid gap-4 md:grid-cols-3">
                        <div>
                          <div className="text-2xl font-bold text-blue-600">
                            {technique.evidence.uncertainty.evidenceQuality === 'high'
                              ? 'Hoch'
                              : technique.evidence.uncertainty.evidenceQuality === 'moderate'
                              ? 'Mittel'
                              : 'Niedrig'}
                          </div>
                          <div className="text-xs text-muted-foreground">Qualität</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-blue-600">
                            {Math.round(technique.evidence.uncertainty.confidence * 100)}%
                          </div>
                          <div className="text-xs text-muted-foreground">Konfidenz</div>
                        </div>
                        <div>
                          <div className="text-sm font-bold text-blue-600">
                            {technique.evidence.uncertainty.sampleSize}
                          </div>
                          <div className="text-xs text-muted-foreground">Stichprobe</div>
                        </div>
                      </div>
                    </Card>
                  )}

                  {/* Findings */}
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">Forschungsergebnisse</h3>
                    <p className="text-muted-foreground">{technique.evidence.findings}</p>
                  </div>

                  {/* Studies */}
                  <div>
                    <h3 className="mb-3 text-lg font-semibold">Studien</h3>
                    <div className="space-y-2">
                      {technique.evidence.studies.map((study, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 rounded-lg bg-muted/50 p-3"
                        >
                          <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span className="text-sm">{study}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Phases Tab */}
              {activeTab === 'phases' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  {phases.length === 0 ? (
                    <div className="rounded-lg bg-muted/30 p-6 text-center">
                      <TrendingUp className="mx-auto mb-2 h-12 w-12 text-muted-foreground" />
                      <p className="text-muted-foreground">
                        Keine Phasen-Zuordnungen dokumentiert
                      </p>
                    </div>
                  ) : (
                    phases.map(({ phase, effectiveness, timing }) => (
                      <Card key={phase.id}>
                        <div className="mb-2 flex items-start justify-between">
                          <div>
                            <h4 className="mb-1 font-semibold">{phase.name.de}</h4>
                            <p className="text-sm text-muted-foreground">
                              {phase.description.de}
                            </p>
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            <div
                              className={`rounded-full px-3 py-1 text-xs font-medium ${
                                effectiveness === 'very_high'
                                  ? 'bg-green-100 text-green-800 dark:bg-green-900/30'
                                  : effectiveness === 'high'
                                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30'
                                  : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30'
                              }`}
                            >
                              {effectiveness === 'very_high'
                                ? 'Sehr effektiv'
                                : effectiveness === 'high'
                                ? 'Effektiv'
                                : 'Moderat'}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Timing: {timing}
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))
                  )}
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
