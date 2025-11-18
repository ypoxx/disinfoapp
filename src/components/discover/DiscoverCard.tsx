import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { PersuasionTechnique } from '@/types/persuasion';
import { Share2, BookOpen, ExternalLink, Award } from 'lucide-react';

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
  return gradients.join(', ');
}

/**
 * Get German category label
 */
function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    cognitive_bias: 'Kognitive Verzerrung',
    social_dynamics: 'Soziale Dynamiken',
    emotional_manipulation: 'Emotionale Manipulation',
    logical_fallacy: 'Logischer Fehlschluss',
    nlp: 'NLP-Techniken',
    digital_influence: 'Digitaler Einfluss',
  };
  return labels[category] || category;
}

/**
 * Generate a professional, educational headline
 */
function generateProfessionalHeadline(technique: PersuasionTechnique): string {
  const templates = [
    `${technique.name.de}: Wie diese Technik funktioniert`,
    `${technique.name.de}: Mechanismen und Wirkweise`,
    `${technique.name.de}: Verstehen und Erkennen`,
    `${technique.name.de}: Wissenschaftlich erklärt`,
    `${technique.name.de}: Hintergründe und Anwendung`,
    `${technique.name.de}: So funktioniert die Beeinflussung`,
  ];

  const hash = technique.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return templates[hash % templates.length];
}

/**
 * Get evidence quality badge
 */
function getEvidenceBadge(quality: string): { icon: string; label: string; color: string } {
  const badges = {
    high: { icon: '✓✓✓', label: 'Hohe Evidenz', color: 'text-green-300' },
    moderate: { icon: '✓✓', label: 'Moderate Evidenz', color: 'text-yellow-300' },
    low: { icon: '✓', label: 'Limitierte Evidenz', color: 'text-orange-300' },
  };
  return badges[quality as keyof typeof badges] || badges.moderate;
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

  const headline = generateProfessionalHeadline(technique);
  const categoryLabel = getCategoryLabel(technique.category);
  const evidenceBadge = getEvidenceBadge(technique.evidence.uncertainty?.evidenceQuality || 'moderate');

  // Show more examples on tap
  const exampleCount = showExamples ? 3 : 1;
  const displayExamples = technique.examples.slice(0, exampleCount);

  // Count studies
  const studyCount = technique.evidence.studies.length;

  return (
    <section
      className="relative h-screen w-full flex-shrink-0 snap-start overflow-hidden"
      style={{
        background: backgroundGradient,
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />

      {/* Category badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="absolute top-4 right-4 text-xs text-white bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full font-medium"
      >
        {categoryLabel}
      </motion.div>

      {/* Difficulty indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="absolute top-4 left-4 text-xs text-white bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full font-medium"
      >
        {technique.difficulty === 'beginner' && 'Grundlagen'}
        {technique.difficulty === 'intermediate' && 'Fortgeschritten'}
        {technique.difficulty === 'advanced' && 'Experte'}
        {technique.difficulty === 'expert' && 'Spezialist'}
      </motion.div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 pb-24 overflow-y-auto">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl sm:text-3xl font-bold text-white mb-3 drop-shadow-lg leading-tight"
        >
          {headline}
        </motion.h1>

        {/* Scientific Evidence Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-3 mb-4 flex-wrap"
        >
          <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <Award size={14} className="text-white" />
            <span className="text-xs text-white font-medium">
              {studyCount} {studyCount === 1 ? 'Studie' : 'Studien'}
            </span>
          </div>
          <div className={`flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full ${evidenceBadge.color}`}>
            <span className="text-xs font-medium">
              {evidenceBadge.icon} {evidenceBadge.label}
            </span>
          </div>
        </motion.div>

        {/* Full Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
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
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="text-sm sm:text-base text-white/90 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 mb-3"
            >
              <div className="flex items-start gap-2">
                <span className="text-white/60 text-xs mt-0.5 flex-shrink-0">Beispiel {index + 1}</span>
                <span className="flex-1">{example}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Show more examples button */}
        {technique.examples.length > 1 && !showExamples && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            onClick={() => setShowExamples(true)}
            className="text-blue-300 text-sm font-medium hover:text-blue-200 transition-colors w-fit mb-4 underline"
          >
            + {technique.examples.length - 1} weitere Beispiele anzeigen
          </motion.button>
        )}

        {/* Effectiveness indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="flex items-center gap-2 text-white/80 text-sm mb-4 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 w-fit"
        >
          <span className="font-medium">Effektivität:</span>
          <span className="font-bold text-white">
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
          transition={{ delay: 0.9 }}
          onClick={() => navigate(`/techniques/${technique.id}`)}
          className="flex items-center gap-2 text-blue-300 font-semibold text-base hover:text-blue-200 transition-colors w-fit"
        >
          <ExternalLink size={18} />
          Detaillierte Analyse ansehen
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
