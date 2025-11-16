import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { PersuasionTechnique } from '@/types/persuasion';
import { getCachedTechniqueImage } from '@/services/imageService';
import { TypewriterText } from './TypewriterText';
import { Share2, BookOpen, ExternalLink } from 'lucide-react';

interface DiscoverCardProps {
  technique: PersuasionTechnique;
  isVisible: boolean;
  onAddToLearning: (techniqueId: string) => void;
}

/**
 * Generate a catchy TikTok-style headline for a technique
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

  // Use technique ID to deterministically select a template
  const hash = technique.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return templates[hash % templates.length];
}

export function DiscoverCard({ technique, isVisible, onAddToLearning }: DiscoverCardProps) {
  const navigate = useNavigate();
  const [backgroundStyle, setBackgroundStyle] = useState<React.CSSProperties>({});
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [imageSource, setImageSource] = useState<string>('');

  useEffect(() => {
    if (isVisible) {
      // Start typewriter after a small delay when card becomes visible
      const timer = setTimeout(() => setShowTypewriter(true), 300);
      return () => clearTimeout(timer);
    } else {
      setShowTypewriter(false);
    }
  }, [isVisible]);

  useEffect(() => {
    // Load image/gradient
    getCachedTechniqueImage(technique.name.en, technique.category, technique.id).then(
      (result) => {
        if (result.url) {
          setBackgroundStyle({
            backgroundImage: `url(${result.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          });
          setImageSource(result.source);
        } else if (result.gradient) {
          setBackgroundStyle({
            background: result.gradient,
          });
          setImageSource('generated');
        }
      }
    );
  }, [technique]);

  const handleShare = async () => {
    const shareData = {
      title: technique.name.de,
      text: technique.description.de,
      url: window.location.origin + `/techniques/${technique.id}`,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareData.url);
        // Could add toast notification here
      }
    } catch (error) {
      console.error('Share failed:', error);
    }
  };

  const headline = generateCatchyHeadline(technique);
  const shortDescription = technique.description.de.slice(0, 200) + '...';

  return (
    <section
      className="relative h-screen w-full flex-shrink-0 snap-start overflow-hidden"
      style={backgroundStyle}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

      {/* Image source attribution (small, top-left) */}
      {imageSource && imageSource !== 'generated' && (
        <div className="absolute top-2 left-2 text-[10px] text-white/60 bg-black/30 px-2 py-1 rounded">
          {imageSource === 'wikipedia' && '📚 Wikipedia'}
          {imageSource === 'unsplash' && '📷 Unsplash'}
        </div>
      )}

      {/* Category badge */}
      <div className="absolute top-2 right-2 text-xs text-white bg-black/50 px-3 py-1 rounded-full">
        {technique.category.replace('_', ' ')}
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 pb-24">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold text-white mb-3 drop-shadow-lg"
        >
          {headline}
        </motion.h1>

        {/* Description with typewriter effect */}
        <div className="text-white/90 text-base sm:text-lg leading-relaxed mb-4 drop-shadow-md">
          {showTypewriter ? (
            <TypewriterText text={shortDescription} speed={15} />
          ) : (
            <div className="h-24" /> // Placeholder to prevent layout shift
          )}
        </div>

        {/* Example */}
        {technique.examples[0] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 2, duration: 0.5 }}
            className="text-sm text-white/80 italic border-l-2 border-white/50 pl-3 mb-4"
          >
            💡 Beispiel: {technique.examples[0]}
          </motion.div>
        )}

        {/* Read more link */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 2.5, duration: 0.5 }}
          onClick={() => navigate(`/techniques/${technique.id}`)}
          className="flex items-center gap-2 text-yellow-300 font-medium hover:text-yellow-200 transition-colors w-fit"
        >
          <ExternalLink size={16} />
          Mehr erfahren
        </motion.button>
      </div>

      {/* Action buttons (right side) */}
      <div className="absolute right-4 bottom-32 flex flex-col gap-4">
        {/* Add to learning path */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1, duration: 0.3 }}
          onClick={() => onAddToLearning(technique.id)}
          className="w-14 h-14 rounded-full bg-black/70 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/90 transition-all active:scale-95"
          title="Zum Lernpfad hinzufügen"
        >
          <BookOpen size={24} />
        </motion.button>

        {/* Share button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.3 }}
          onClick={handleShare}
          className="w-14 h-14 rounded-full bg-black/70 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/90 transition-all active:scale-95"
          title="Teilen"
        >
          <Share2 size={24} />
        </motion.button>
      </div>
    </section>
  );
}
