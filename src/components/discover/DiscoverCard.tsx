import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { PersuasionTechnique } from '@/types/persuasion';
import { Share2, BookOpen, ExternalLink } from 'lucide-react';

interface DiscoverCardProps {
  technique: PersuasionTechnique;
  isVisible: boolean;
  onAddToLearning: (techniqueId: string) => void;
}

/**
 * Generate a beautiful mesh gradient based on technique category
 * Returns CSS background string with multiple layers for depth
 */
function generateMeshGradient(category: string): string {
  const categoryGradients: Record<string, string[]> = {
    cognitive_bias: [
      'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.8) 0%, transparent 50%)',
      'radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.7) 0%, transparent 50%)',
      'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.6) 0%, transparent 70%)',
      'linear-gradient(135deg, #1e3a8a 0%, #312e81 100%)',
    ],
    social_dynamics: [
      'radial-gradient(circle at 30% 40%, rgba(236, 72, 153, 0.8) 0%, transparent 50%)',
      'radial-gradient(circle at 70% 60%, rgba(244, 63, 94, 0.7) 0%, transparent 50%)',
      'radial-gradient(circle at 50% 80%, rgba(239, 68, 68, 0.6) 0%, transparent 70%)',
      'linear-gradient(135deg, #9f1239 0%, #881337 100%)',
    ],
    emotional_manipulation: [
      'radial-gradient(circle at 25% 25%, rgba(245, 158, 11, 0.8) 0%, transparent 50%)',
      'radial-gradient(circle at 75% 75%, rgba(249, 115, 22, 0.7) 0%, transparent 50%)',
      'radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.6) 0%, transparent 70%)',
      'linear-gradient(135deg, #c2410c 0%, #b91c1c 100%)',
    ],
    logical_fallacy: [
      'radial-gradient(circle at 35% 35%, rgba(16, 185, 129, 0.8) 0%, transparent 50%)',
      'radial-gradient(circle at 65% 65%, rgba(20, 184, 166, 0.7) 0%, transparent 50%)',
      'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.6) 0%, transparent 70%)',
      'linear-gradient(135deg, #065f46 0%, #134e4a 100%)',
    ],
    nlp: [
      'radial-gradient(circle at 40% 20%, rgba(139, 92, 246, 0.8) 0%, transparent 50%)',
      'radial-gradient(circle at 60% 80%, rgba(168, 85, 247, 0.7) 0%, transparent 50%)',
      'radial-gradient(circle at 50% 50%, rgba(217, 70, 239, 0.6) 0%, transparent 70%)',
      'linear-gradient(135deg, #6b21a8 0%, #86198f 100%)',
    ],
    digital_influence: [
      'radial-gradient(circle at 30% 60%, rgba(6, 182, 212, 0.8) 0%, transparent 50%)',
      'radial-gradient(circle at 70% 40%, rgba(14, 165, 233, 0.7) 0%, transparent 50%)',
      'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.6) 0%, transparent 70%)',
      'linear-gradient(135deg, #075985 0%, #1e40af 100%)',
    ],
  };

  const gradients = categoryGradients[category] || categoryGradients.cognitive_bias;

  // Combine all gradient layers
  return gradients.join(', ');
}

/**
 * Generate a catchy headline for a technique
 */
function generateCatchyHeadline(technique: PersuasionTechnique): string {
  const templates = [
    `🤯 ${technique.name.de}: Der Trick, der dich manipuliert`,
    `⚠️ So nutzt ${technique.name.de} deine Psyche aus`,
    `💡 ${technique.name.de}: Das musst du wissen!`,
    `🎯 ${technique.name.de} - Erkenne die Manipulation`,
    `🔥 ${technique.name.de}: Davor solltest du dich schützen`,
    `🧠 Die Wahrheit über ${technique.name.de}`,
    `❗ ${technique.name.de}: Wirst du gerade manipuliert?`,
    `🚨 ${technique.name.de} - Überall um dich herum`,
  ];

  const hash = technique.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return templates[hash % templates.length];
}

export function DiscoverCard({ technique, isVisible, onAddToLearning }: DiscoverCardProps) {
  const navigate = useNavigate();
  const [showExamples, setShowExamples] = useState(false);

  // Generate gradient immediately (synchronously)
  const backgroundGradient = useMemo(
    () => generateMeshGradient(technique.category),
    [technique.category]
  );

  const handleShare = async () => {
    const shareData = {
      title: technique.name.de,
      text: technique.description.de,
      url: window.location.origin + `/disinfoapp/techniques/${technique.id}`,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareData.url);
      }
    } catch (error) {
      console.error('Share failed:', error);
    }
  };

  const headline = generateCatchyHeadline(technique);

  // Show more examples on tap
  const exampleCount = showExamples ? 3 : 1;
  const displayExamples = technique.examples.slice(0, exampleCount);

  return (
    <section
      className="relative h-screen w-full flex-shrink-0 snap-start overflow-hidden"
      style={{
        background: backgroundGradient,
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />

      {/* Category badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="absolute top-4 right-4 text-xs text-white bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full font-medium"
      >
        {technique.category.replace('_', ' ')}
      </motion.div>

      {/* Difficulty indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="absolute top-4 left-4 text-xs text-white bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full font-medium"
      >
        {technique.difficulty === 'beginner' && '⭐ Einfach'}
        {technique.difficulty === 'intermediate' && '⭐⭐ Mittel'}
        {technique.difficulty === 'advanced' && '⭐⭐⭐ Schwer'}
        {technique.difficulty === 'expert' && '⭐⭐⭐⭐ Experte'}
      </motion.div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 pb-24 overflow-y-auto">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-4 drop-shadow-lg leading-tight"
        >
          {headline}
        </motion.h1>

        {/* Full Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-white/95 text-base sm:text-lg leading-relaxed mb-5 drop-shadow-md"
        >
          {technique.description.de}
        </motion.div>

        {/* Examples */}
        <AnimatePresence>
          {displayExamples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              className="text-sm sm:text-base text-white/90 border-l-3 border-white/60 pl-4 mb-3 italic"
            >
              💡 <span className="font-semibold">Beispiel:</span> {example}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Show more examples button */}
        {technique.examples.length > 1 && !showExamples && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            onClick={() => setShowExamples(true)}
            className="text-yellow-300 text-sm font-medium hover:text-yellow-200 transition-colors w-fit mb-4"
          >
            + Weitere Beispiele anzeigen
          </motion.button>
        )}

        {/* Effectiveness indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-2 text-white/80 text-sm mb-4"
        >
          <span className="font-medium">Effektivität:</span>
          <div className="flex gap-1">
            {['very_high', 'high'].includes(technique.effectiveness) && '🔥🔥🔥'}
            {technique.effectiveness === 'moderate' && '🔥🔥'}
            {technique.effectiveness === 'low' && '🔥'}
          </div>
          <span className="text-xs">
            {technique.effectiveness === 'very_high' && 'Sehr hoch'}
            {technique.effectiveness === 'high' && 'Hoch'}
            {technique.effectiveness === 'moderate' && 'Moderat'}
            {technique.effectiveness === 'low' && 'Niedrig'}
          </span>
        </motion.div>

        {/* Read more link */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          onClick={() => navigate(`/techniques/${technique.id}`)}
          className="flex items-center gap-2 text-yellow-300 font-semibold text-base hover:text-yellow-200 transition-colors w-fit"
        >
          <ExternalLink size={18} />
          Vollständige Details ansehen
        </motion.button>
      </div>

      {/* Action buttons (right side) */}
      <div className="absolute right-4 bottom-32 flex flex-col gap-4">
        {/* Add to learning path */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.3 }}
          onClick={() => onAddToLearning(technique.id)}
          className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-900 hover:bg-white transition-all active:scale-95 shadow-lg"
          title="Zum Lernpfad hinzufügen"
        >
          <BookOpen size={24} />
        </motion.button>

        {/* Share button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.3 }}
          onClick={handleShare}
          className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-900 hover:bg-white transition-all active:scale-95 shadow-lg"
          title="Teilen"
        >
          <Share2 size={24} />
        </motion.button>
      </div>
    </section>
  );
}
