import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { DiscoverCard } from './DiscoverCard';
import { persuasionTechniques } from '@/data/persuasion';
import { useDiscoverStore } from '@/stores/discoverStore';
import { PersuasionTechnique } from '@/types/persuasion';
import { RotateCcw, Sparkles, Globe, Check } from 'lucide-react';

/**
 * Supported languages with display names
 */
const LANGUAGES = [
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'de-AT', name: 'Österreich', flag: '🇦🇹' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'hu', name: 'Magyar', flag: '🇭🇺' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'sk', name: 'Slovenčina', flag: '🇸🇰' },
  { code: 'hr', name: 'Hrvatski', flag: '🇭🇷' },
  { code: 'el', name: 'Ελληνικά', flag: '🇬🇷' },
  { code: 'mk', name: 'Македонски', flag: '🇲🇰' },
  { code: 'cnr', name: 'Crnogorski', flag: '🇲🇪' },
];

/**
 * Shuffle array using Fisher-Yates algorithm
 */
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function DiscoverFeed() {
  const { t, i18n } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [techniques, setTechniques] = useState<PersuasionTechnique[]>([]);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const { markAsSeen, updateLastVisit, seenTechniques, resetSeen } = useDiscoverStore();

  // Current language for display (unused but kept for future use)

  // Shuffle techniques on mount
  useEffect(() => {
    const shuffled = shuffleArray(persuasionTechniques);
    setTechniques(shuffled);
    updateLastVisit();
  }, [updateLastVisit]);

  // Intersection Observer to detect which card is visible
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleIndex(index);

            const techniqueId = entry.target.getAttribute('data-technique-id');
            if (techniqueId) {
              markAsSeen(techniqueId);
            }
          }
        });
      },
      {
        root: containerRef.current,
        threshold: 0.5,
      }
    );

    const cards = containerRef.current.querySelectorAll('[data-index]');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [techniques, markAsSeen]);

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setShowLanguageMenu(false);
    if (showLanguageMenu) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [showLanguageMenu]);

  const handleReset = () => {
    resetSeen();
    const shuffled = shuffleArray(persuasionTechniques);
    setTechniques(shuffled);
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setShowLanguageMenu(false);
  };

  if (techniques.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <div className="flex flex-col items-center gap-3">
          <Sparkles className="w-8 h-8 text-[#e20074] animate-pulse" />
          <span className="text-white/70">{t('common.loading')}</span>
        </div>
      </div>
    );
  }

  const progress = ((visibleIndex + 1) / techniques.length) * 100;

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Minimal header with progress */}
      <div className="fixed top-0 left-0 right-0 z-50">
        {/* Progress bar - visual, full width */}
        <div className="h-1 bg-white/10">
          <motion.div
            className="h-full bg-[#e20074]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
        </div>

        {/* Header content */}
        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-b from-black/60 to-transparent">
          {/* Logo/Title */}
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#e20074]" />
            <span className="text-white font-semibold text-sm">{t('discover.title')}</span>
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-2">
            {/* Progress indicator */}
            <span className="text-white/60 text-xs tabular-nums">
              {visibleIndex + 1} / {techniques.length}
            </span>

            {/* Language selector */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowLanguageMenu(!showLanguageMenu);
                }}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all"
                aria-label={t('language.select')}
              >
                <Globe size={16} />
              </button>

              {/* Language dropdown */}
              <AnimatePresence>
                {showLanguageMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-10 w-44 bg-gray-900/95 backdrop-blur-lg rounded-xl border border-white/10 shadow-xl overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="py-1 max-h-80 overflow-y-auto">
                      {LANGUAGES.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageChange(lang.code)}
                          className={`w-full px-3 py-2 text-left text-sm flex items-center gap-2 hover:bg-white/10 transition-colors ${
                            i18n.language === lang.code ? 'text-[#e20074]' : 'text-white/80'
                          }`}
                        >
                          <span className="text-base">{lang.flag}</span>
                          <span className="flex-1">{lang.name}</span>
                          {i18n.language === lang.code && (
                            <Check size={14} className="text-[#e20074]" />
                          )}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Reset button */}
            <button
              onClick={handleReset}
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all"
              aria-label={t('discover.startOver')}
            >
              <RotateCcw size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable container with snap */}
      <div
        ref={containerRef}
        className="h-screen overflow-y-scroll snap-y snap-mandatory scrollbar-hide"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {techniques.map((technique, index) => (
          <div
            key={technique.id}
            data-index={index}
            data-technique-id={technique.id}
            className="snap-start"
          >
            <DiscoverCard
              technique={technique}
              isVisible={visibleIndex === index}
            />
          </div>
        ))}

        {/* End card */}
        <section className="relative h-screen w-full flex-shrink-0 snap-start bg-gradient-to-b from-[#e20074]/90 via-purple-900/80 to-black flex items-center justify-center text-white">
          <div className="text-center px-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: 'spring' }}
              className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6"
            >
              <Sparkles className="w-10 h-10 text-white" />
            </motion.div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              {t('discover.completed')}
            </h2>

            <p className="text-white/70 text-base mb-8 max-w-xs mx-auto">
              {t('discover.completedDescription', { count: techniques.length })}
            </p>

            <button
              onClick={handleReset}
              className="px-6 py-3 bg-white text-[#e20074] font-semibold rounded-full hover:bg-white/90 transition-all active:scale-95"
            >
              {t('discover.startOver')}
            </button>

            {seenTechniques.size > 0 && (
              <p className="text-white/50 text-xs mt-6">
                {t('discover.totalLearned', { count: seenTechniques.size })}
              </p>
            )}
          </div>
        </section>
      </div>

      {/* Swipe hint - only on first card */}
      {visibleIndex === 0 && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 pointer-events-none z-40"
        >
          <div className="flex flex-col items-center gap-1">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-white/50 text-xl"
            >
              ↑
            </motion.div>
            <span className="text-white/50 text-xs">{t('discover.swipeHint')}</span>
          </div>
        </motion.div>
      )}

      {/* Hide scrollbar globally */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
