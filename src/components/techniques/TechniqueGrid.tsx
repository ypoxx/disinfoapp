import { motion } from 'framer-motion';
import {
  Brain,
  Users,
  AlertTriangle,
  Heart,
  MessageSquare,
  Laptop,
  TrendingUp,
  Shield,
} from 'lucide-react';
import { Card } from '@/components/shared/UIComponents';
import type { PersuasionTechnique, TechniqueCategory } from '@/types/persuasion';

interface TechniqueGridProps {
  techniques: PersuasionTechnique[];
  onSelectTechnique: (technique: PersuasionTechnique) => void;
}

const categoryIcons: Record<TechniqueCategory, React.ReactNode> = {
  cognitive_bias: <Brain className="h-5 w-5" />,
  social_dynamics: <Users className="h-5 w-5" />,
  logical_fallacy: <AlertTriangle className="h-5 w-5" />,
  emotional_manipulation: <Heart className="h-5 w-5" />,
  nlp_technique: <MessageSquare className="h-5 w-5" />,
  digital_technique: <Laptop className="h-5 w-5" />,
};

const categoryColors: Record<TechniqueCategory, string> = {
  cognitive_bias: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
  social_dynamics: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  logical_fallacy: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
  emotional_manipulation: 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300',
  nlp_technique: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300',
  digital_technique: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
};

const difficultyLabels = {
  beginner: { label: 'Einfach', color: 'bg-green-500' },
  intermediate: { label: 'Mittel', color: 'bg-yellow-500' },
  advanced: { label: 'Fortgeschritten', color: 'bg-orange-500' },
  expert: { label: 'Experte', color: 'bg-red-500' },
};

const effectivenessLabels = {
  low: { label: 'Niedrig', bars: 1 },
  moderate: { label: 'Mittel', bars: 2 },
  high: { label: 'Hoch', bars: 3 },
  very_high: { label: 'Sehr Hoch', bars: 4 },
};

export function TechniqueGrid({ techniques, onSelectTechnique }: TechniqueGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {techniques.map((technique, index) => (
        <motion.div
          key={technique.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          <Card
            className="group h-full cursor-pointer transition-all hover:shadow-lg"
            onClick={() => onSelectTechnique(technique)}
          >
            {/* Category Badge */}
            <div className="mb-3 flex items-center justify-between">
              <div
                className={`flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${
                  categoryColors[technique.category]
                }`}
              >
                {categoryIcons[technique.category]}
                <span className="capitalize">
                  {technique.category.replace('_', ' ')}
                </span>
              </div>
              <div
                className={`h-2 w-2 rounded-full ${difficultyLabels[technique.difficulty].color}`}
                title={difficultyLabels[technique.difficulty].label}
              />
            </div>

            {/* Title */}
            <h3 className="mb-2 text-xl font-bold group-hover:text-primary transition-colors">
              {technique.name.de}
            </h3>

            {/* Description */}
            <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">
              {technique.description.de}
            </p>

            {/* Effectiveness */}
            <div className="mb-3">
              <div className="mb-1 flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Effektivität:</span>
                <span className="font-medium">
                  {effectivenessLabels[technique.effectiveness].label}
                </span>
              </div>
              <div className="flex gap-1">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 flex-1 rounded-full ${
                      i < effectivenessLabels[technique.effectiveness].bars
                        ? 'bg-primary'
                        : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Evidence Quality */}
            {technique.evidence.uncertainty && (
              <div className="mb-4 flex items-center gap-2 text-xs">
                <Shield className="h-3 w-3 text-muted-foreground" />
                <span className="text-muted-foreground">Evidenz:</span>
                <span
                  className={`font-medium ${
                    technique.evidence.uncertainty.evidenceQuality === 'high'
                      ? 'text-green-600 dark:text-green-400'
                      : technique.evidence.uncertainty.evidenceQuality === 'moderate'
                      ? 'text-yellow-600 dark:text-yellow-400'
                      : 'text-orange-600 dark:text-orange-400'
                  }`}
                >
                  {technique.evidence.uncertainty.evidenceQuality === 'high'
                    ? 'Hoch'
                    : technique.evidence.uncertainty.evidenceQuality === 'moderate'
                    ? 'Mittel'
                    : 'Niedrig'}
                </span>
              </div>
            )}

            {/* Warning Signs Count */}
            <div className="flex items-center gap-4 border-t pt-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                <span>{technique.relatedTechniques.length} verbunden</span>
              </div>
              <div className="flex items-center gap-1">
                <AlertTriangle className="h-3 w-3" />
                <span>{technique.warningNeurons.length} Warnsignale</span>
              </div>
            </div>

            {/* Hover Indicator */}
            <div className="mt-3 flex items-center justify-end opacity-0 transition-opacity group-hover:opacity-100">
              <span className="text-xs font-medium text-primary">
                Klicke für Details →
              </span>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
