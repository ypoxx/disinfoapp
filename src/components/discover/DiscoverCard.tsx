import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { PersuasionTechnique, getLocalizedContent, getLocalizedNameWithEnglish } from '@/types/persuasion';
import { Share2, ChevronDown, ChevronUp, Info } from 'lucide-react';

interface DiscoverCardProps {
  technique: PersuasionTechnique;
  isVisible: boolean;
}

/**
 * Category colors with Telekom Magenta as primary accent
 */
const categoryStyles: Record<string, { gradient: string; badge: string }> = {
  cognitive_bias: {
    gradient: 'from-[#e20074]/90 via-purple-900/80 to-blue-900/90',
    badge: 'bg-[#e20074]/30 text-white',
  },
  social_dynamics: {
    gradient: 'from-rose-900/90 via-[#e20074]/70 to-orange-900/80',
    badge: 'bg-rose-500/30 text-white',
  },
  emotional_manipulation: {
    gradient: 'from-amber-900/90 via-orange-800/80 to-red-900/80',
    badge: 'bg-amber-500/30 text-white',
  },
  logical_fallacy: {
    gradient: 'from-emerald-900/90 via-teal-800/80 to-cyan-900/80',
    badge: 'bg-emerald-500/30 text-white',
  },
  nlp: {
    gradient: 'from-violet-900/90 via-purple-800/80 to-fuchsia-900/80',
    badge: 'bg-violet-500/30 text-white',
  },
  digital_influence: {
    gradient: 'from-sky-900/90 via-blue-800/80 to-indigo-900/80',
    badge: 'bg-sky-500/30 text-white',
  },
};

export function DiscoverCard({ technique, isVisible }: DiscoverCardProps) {
  const { t, i18n } = useTranslation();
  const [showAllExamples, setShowAllExamples] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showImageCredit, setShowImageCredit] = useState(false);
  const currentLang = i18n.language;

  const style = categoryStyles[technique.category] || categoryStyles.cognitive_bias;
  const hasImage = technique.image?.src;

  // Localized labels from i18n
  const categoryLabel = t(`techniques.categories.${technique.category}`);
  const difficultyLabel = t(`modules.difficulty.${technique.difficulty}`);

  // Localized technique content with fallback
  const techniqueName = getLocalizedNameWithEnglish(technique.name, currentLang);
  const techniqueDescription = getLocalizedContent(technique.description, currentLang);

  // Show 1 example by default, all on expand
  const visibleExamples = showAllExamples ? technique.examples : technique.examples.slice(0, 1);
  const hasMoreExamples = technique.examples.length > 1;

  const handleShare = async () => {
    const shareData = {
      title: techniqueName,
      text: `${techniqueName}: ${techniqueDescription.slice(0, 100)}...`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(`${shareData.title}\n\n${techniqueDescription}`);
      }
    } catch (error) {
      // User cancelled or error
    }
  };

  return (
    <section className="relative h-screen w-full flex-shrink-0 snap-start overflow-hidden text-white">
      {/* Background gradient (always present as base/fallback) */}
      <div className={`absolute inset-0 bg-gradient-to-b ${style.gradient}`} />

      {/* Background image layer (if available) */}
      {hasImage && (
        <>
          <img
            src={technique.image!.src}
            alt={technique.image!.alt}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              imageLoaded ? 'opacity-40' : 'opacity-0'
            }`}
          />
          {/* Image credit button */}
          {imageLoaded && technique.image!.credit && (
            <button
              onClick={() => setShowImageCredit(!showImageCredit)}
              className="absolute top-20 right-5 z-10 w-6 h-6 rounded-full bg-black/30 flex items-center justify-center text-white/60 hover:text-white hover:bg-black/50 transition-all"
              aria-label="Bildquelle anzeigen"
            >
              <Info size={12} />
            </button>
          )}
          {/* Image credit tooltip */}
          <AnimatePresence>
            {showImageCredit && technique.image!.credit && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-28 right-5 z-10 max-w-[200px] p-2 bg-black/80 backdrop-blur-sm rounded-lg text-xs text-white/80"
              >
                <p className="font-medium mb-1">Bildquelle:</p>
                <p>{technique.image!.credit}</p>
                {technique.image!.context && (
                  <p className="mt-1 text-white/60">{technique.image!.context}</p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}

      {/* Overlay for text readability - stronger when image is present */}
      <div className={`absolute inset-0 bg-gradient-to-t ${
        hasImage && imageLoaded
          ? 'from-black/90 via-black/60 to-black/30'
          : 'from-black/80 via-black/40 to-transparent'
      }`} />

      {/* Top badges */}
      <div className="absolute top-20 left-0 right-0 px-5 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4 }}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold ${style.badge} backdrop-blur-sm`}
        >
          {categoryLabel}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/15 text-white/90 backdrop-blur-sm"
        >
          {difficultyLabel}
        </motion.div>
      </div>

      {/* Main content */}
      <div className="absolute inset-0 flex flex-col justify-end px-5 pb-28">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight"
        >
          {techniqueName}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-white/90 leading-relaxed mb-5"
        >
          {techniqueDescription}
        </motion.p>

        {/* Examples section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-3"
        >
          <div className="text-xs font-semibold text-white/60 uppercase tracking-wider">
            {technique.examples.length === 1
              ? t('discover.example', 'Beispiel')
              : t('discover.examples', 'Beispiele')}
          </div>

          <AnimatePresence mode="sync">
            {visibleExamples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10"
              >
                <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                  „{example}"
                </p>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Show more/less button */}
          {hasMoreExamples && (
            <button
              onClick={() => setShowAllExamples(!showAllExamples)}
              className="flex items-center gap-1.5 text-[#e20074] text-sm font-medium hover:text-white transition-colors"
            >
              {showAllExamples ? (
                <>
                  <ChevronUp size={16} />
                  {t('discover.showLess', 'Weniger anzeigen')}
                </>
              ) : (
                <>
                  <ChevronDown size={16} />
                  {t('discover.showMore', { count: technique.examples.length - 1 })}
                </>
              )}
            </button>
          )}
        </motion.div>

        {/* Effectiveness indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-5 flex items-center gap-3"
        >
          <span className="text-xs text-white/60 uppercase tracking-wider">
            {t('techniques.detail.effectiveness', 'Wirksamkeit')}
          </span>
          <div className="flex gap-1">
            {['low', 'moderate', 'high', 'very_high'].map((level, i) => (
              <div
                key={level}
                className={`w-6 h-1.5 rounded-full transition-all ${
                  ['low', 'moderate', 'high', 'very_high'].indexOf(technique.effectiveness) >= i
                    ? 'bg-[#e20074]'
                    : 'bg-white/20'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Share button - bottom right */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.4, duration: 0.3 }}
        onClick={handleShare}
        className="absolute right-5 bottom-32 w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/25 transition-all active:scale-95 border border-white/20"
        aria-label={t('common.share', 'Teilen')}
      >
        <Share2 size={20} />
      </motion.button>
    </section>
  );
}
