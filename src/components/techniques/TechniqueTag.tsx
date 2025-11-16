import { motion } from 'framer-motion';
import { Brain, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getTechniqueById } from '@/data/persuasion';
import type { PersuasionTechnique } from '@/types/persuasion';

interface TechniqueTagProps {
  techniqueId: string;
  showLink?: boolean;
  size?: 'sm' | 'md';
}

const categoryColors: Record<string, string> = {
  cognitive_bias: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 border-purple-300 dark:border-purple-700',
  social_dynamics: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border-blue-300 dark:border-blue-700',
  logical_fallacy: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 border-red-300 dark:border-red-700',
  emotional_manipulation: 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300 border-pink-300 dark:border-pink-700',
  nlp_technique: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 border-indigo-300 dark:border-indigo-700',
  digital_technique: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-green-300 dark:border-green-700',
};

export function TechniqueTag({ techniqueId, showLink = false, size = 'md' }: TechniqueTagProps) {
  const technique = getTechniqueById(techniqueId);

  if (!technique) {
    return null;
  }

  const sizeClasses = size === 'sm' ? 'text-xs px-2 py-0.5' : 'text-sm px-3 py-1';
  const colorClass = categoryColors[technique.category] || categoryColors.cognitive_bias;

  const content = (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`inline-flex items-center gap-1.5 rounded-full border font-medium ${colorClass} ${sizeClasses} ${
        showLink ? 'cursor-pointer hover:shadow-md transition-all' : ''
      }`}
    >
      <Brain className={size === 'sm' ? 'h-3 w-3' : 'h-3.5 w-3.5'} />
      <span>{technique.name.de}</span>
      {showLink && <ExternalLink className="h-3 w-3" />}
    </motion.div>
  );

  if (showLink) {
    return (
      <Link to="/techniques" state={{ selectedTechniqueId: techniqueId }}>
        {content}
      </Link>
    );
  }

  return content;
}

interface TechniqueTagListProps {
  techniqueIds: string[];
  showLinks?: boolean;
  maxDisplay?: number;
}

export function TechniqueTagList({ techniqueIds, showLinks = false, maxDisplay }: TechniqueTagListProps) {
  const displayIds = maxDisplay ? techniqueIds.slice(0, maxDisplay) : techniqueIds;
  const remaining = maxDisplay && techniqueIds.length > maxDisplay ? techniqueIds.length - maxDisplay : 0;

  return (
    <div className="flex flex-wrap gap-2">
      {displayIds.map((id) => (
        <TechniqueTag key={id} techniqueId={id} showLink={showLinks} />
      ))}
      {remaining > 0 && (
        <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground">
          +{remaining} weitere
        </div>
      )}
    </div>
  );
}
