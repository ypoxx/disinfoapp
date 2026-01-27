import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { PersuasionTechnique } from '@/types/persuasion';
import { SupportedLanguage } from '@/stores/languageStore';
import { t, ui, getCategoryLabel as getCategoryLabelI18n, getDifficultyLabel, getEffectivenessLabel, getEvidenceLabel, getStudyCountLabel } from '@/utils/i18n';
import { Share2, BookOpen, ExternalLink, Award } from 'lucide-react';
import { getImageForTechnique } from '@/services/imageService';

interface DiscoverCardProps {
  technique: PersuasionTechnique;
  isVisible: boolean;
  onAddToLearning: (techniqueId: string) => void;
  language: SupportedLanguage;
}

/**
 * Generate a beautiful mesh gradient based on technique category
 * Telekom-inspired with Magenta accents
 */
function generateMeshGradient(category: string): string {
  // Magenta RGB: 226, 0, 116 = rgba(226, 0, 116, x)
  const categoryGradients: Record<string, string[]> = {
    cognitive_bias: [
      'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.7) 0%, transparent 50%)',
      'radial-gradient(circle at 80% 70%, rgba(226, 0, 116, 0.4) 0%, transparent 50%)',
      'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.5) 0%, transparent 70%)',
      'linear-gradient(135deg, #1e2a4a 0%, #1a1a2e 100%)',
    ],
    social_dynamics: [
      'radial-gradient(circle at 30% 40%, rgba(226, 0, 116, 0.8) 0%, transparent 50%)',
      'radial-gradient(circle at 70% 60%, rgba(184, 0, 92, 0.7) 0%, transparent 50%)',
      'radial-gradient(circle at 50% 80%, rgba(122, 0, 61, 0.6) 0%, transparent 70%)',
      'linear-gradient(135deg, #3d0020 0%, #1a0010 100%)',
    ],
    emotional_manipulation: [
      'radial-gradient(circle at 25% 25%, rgba(245, 158, 11, 0.7) 0%, transparent 50%)',
      'radial-gradient(circle at 75% 75%, rgba(226, 0, 116, 0.5) 0%, transparent 50%)',
      'radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.5) 0%, transparent 70%)',
      'linear-gradient(135deg, #3d1c00 0%, #2d0a0a 100%)',
    ],
    logical_fallacy: [
      'radial-gradient(circle at 35% 35%, rgba(16, 185, 129, 0.7) 0%, transparent 50%)',
      'radial-gradient(circle at 65% 65%, rgba(226, 0, 116, 0.3) 0%, transparent 50%)',
      'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.5) 0%, transparent 70%)',
      'linear-gradient(135deg, #0a2520 0%, #0a1a1a 100%)',
    ],
    nlp: [
      'radial-gradient(circle at 40% 20%, rgba(139, 92, 246, 0.7) 0%, transparent 50%)',
      'radial-gradient(circle at 60% 80%, rgba(226, 0, 116, 0.5) 0%, transparent 50%)',
      'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.5) 0%, transparent 70%)',
      'linear-gradient(135deg, #2d1a4a 0%, #1a0a2e 100%)',
    ],
    digital_influence: [
      'radial-gradient(circle at 30% 60%, rgba(6, 182, 212, 0.7) 0%, transparent 50%)',
      'radial-gradient(circle at 70% 40%, rgba(226, 0, 116, 0.4) 0%, transparent 50%)',
      'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.5) 0%, transparent 70%)',
      'linear-gradient(135deg, #0a1a2e 0%, #0d0d1a 100%)',
    ],
  };

  const gradients = categoryGradients[category] || categoryGradients.cognitive_bias;
  return gradients.join(', ');
}

/**
 * Get the technique name based on language
 */
function getTechniqueName(
  technique: PersuasionTechnique,
  language: SupportedLanguage
): { primary: string; secondary?: string } {
  const primary = language === 'en' ? (technique.name.en || technique.name.de) : technique.name.de;
  // Show English name as subtitle if different from primary and we're in German
  const secondary = language === 'de' && technique.name.en !== technique.name.de ? technique.name.en : undefined;
  return { primary, secondary };
}

/**
 * Get evidence quality badge colors
 */
function getEvidenceBadgeColor(quality: string): string {
  const colors: Record<string, string> = {
    high: 'text-green-300',
    moderate: 'text-yellow-300',
    low: 'text-orange-300',
  };
  return colors[quality] || colors.moderate;
}

/**
 * Get evidence quality icon
 */
function getEvidenceIcon(quality: string): string {
  const icons: Record<string, string> = {
    high: '✓✓✓',
    moderate: '✓✓',
    low: '✓',
  };
  return icons[quality] || icons.moderate;
}

export function DiscoverCard({ technique, isVisible, onAddToLearning, language }: DiscoverCardProps) {
  const navigate = useNavigate();
  const [showExamples, setShowExamples] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Get the curated image URL for this technique
  const imageUrl = useMemo(() => getImageForTechnique(technique.id), [technique.id]);

  // Generate gradient as fallback
  const backgroundGradient = useMemo(
    () => generateMeshGradient(technique.category),
    [technique.category]
  );

  // Preload image when card becomes visible
  useEffect(() => {
    if (isVisible && imageUrl && !imageLoaded && !imageError) {
      const img = new Image();
      img.onload = () => setImageLoaded(true);
      img.onerror = () => setImageError(true);
      img.src = imageUrl;
    }
  }, [isVisible, imageUrl, imageLoaded, imageError]);

  const handleShare = async () => {
    const shareData = {
      title: t(technique.name, language),
      text: t(technique.description, language),
      url: window.location.origin + `/dashboard/techniques/${technique.id}`,
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

  const techniqueName = getTechniqueName(technique, language);
  const categoryLabel = getCategoryLabelI18n(technique.category, language);
  const evidenceQuality = technique.evidence.uncertainty?.evidenceQuality || 'moderate';

  // Show more examples on tap
  const exampleCount = showExamples ? 3 : 1;
  const displayExamples = technique.examples.slice(0, exampleCount);

  // Count studies
  const studyCount = technique.evidence.studies.length;

  return (
    <section
      className="relative h-screen w-full flex-shrink-0 snap-start overflow-hidden font-sans"
      style={{
        background: backgroundGradient,
      }}
    >
      {/* Background image layer */}
      {imageUrl && !imageError && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: imageLoaded ? 1 : 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <img
            src={imageUrl}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
      )}

      {/* Dark overlay for text readability - stronger when image is visible */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          imageLoaded && !imageError
            ? 'bg-gradient-to-t from-black/98 via-black/70 to-black/30'
            : 'bg-gradient-to-t from-black/95 via-black/60 to-black/40'
        }`}
      />

      {/* Category badge - top right, below header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="absolute top-24 right-4 text-xs text-white bg-[#e20074]/80 backdrop-blur-sm px-3 py-1.5 rounded-lg font-medium"
      >
        {categoryLabel}
      </motion.div>

      {/* Difficulty indicator - top left, below header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="absolute top-24 left-4 text-xs text-white/90 bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-lg font-medium"
      >
        {getDifficultyLabel(technique.difficulty, language)}
      </motion.div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 pb-24 overflow-y-auto">
        {/* Technique Name - Clean, bold typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-3"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg leading-tight tracking-tight">
            {techniqueName.primary}
          </h1>
          {techniqueName.secondary && (
            <p className="text-lg text-white/60 mt-1 font-medium">{techniqueName.secondary}</p>
          )}
        </motion.div>

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
              {getStudyCountLabel(studyCount, language)}
            </span>
          </div>
          <div className={`flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full ${getEvidenceBadgeColor(evidenceQuality)}`}>
            <span className="text-xs font-medium">
              {getEvidenceIcon(evidenceQuality)} {getEvidenceLabel(evidenceQuality, language)}
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
          {t(technique.description, language)}
        </motion.div>

        {/* Examples - Note: examples are currently only in German */}
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
                <span className="text-white/60 text-xs mt-0.5 flex-shrink-0">{ui('label.example', language)} {index + 1}</span>
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
            className="text-[#ff6eb4] text-sm font-medium hover:text-[#ff8dc7] transition-colors w-fit mb-4 underline"
          >
            + {technique.examples.length - 1} {ui('action.showMoreExamples', language)}
          </motion.button>
        )}

        {/* Effectiveness indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="flex items-center gap-2 text-white/80 text-sm mb-4 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 w-fit"
        >
          <span className="font-medium">{ui('label.effectiveness', language)}:</span>
          <span className="font-bold text-white">
            {getEffectivenessLabel(technique.effectiveness, language)}
          </span>
        </motion.div>

        {/* Read more link */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          onClick={() => navigate(`/dashboard/techniques/${technique.id}`)}
          className="flex items-center gap-2 text-[#ff6eb4] font-semibold text-base hover:text-[#ff8dc7] transition-colors w-fit"
        >
          <ExternalLink size={18} />
          {ui('action.learnMore', language)}
        </motion.button>
      </div>

      {/* Action buttons (right side) - Telekom Magenta accent */}
      <div className="absolute right-4 bottom-32 flex flex-col gap-3">
        {/* Add to learning path */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.3 }}
          onClick={() => onAddToLearning(technique.id)}
          className="w-12 h-12 rounded-full bg-[#e20074] backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#ff1493] transition-all active:scale-95 shadow-lg"
          title={ui('action.openInDashboard', language)}
        >
          <BookOpen size={20} />
        </motion.button>

        {/* Share button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.3 }}
          onClick={handleShare}
          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all active:scale-95 shadow-lg"
          title={ui('action.share', language)}
        >
          <Share2 size={20} />
        </motion.button>
      </div>
    </section>
  );
}
