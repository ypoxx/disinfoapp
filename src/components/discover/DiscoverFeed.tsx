import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { DiscoverCard } from './DiscoverCard';
import { persuasionTechniques } from '@/data/persuasion';
import { useDiscoverStore } from '@/stores/discoverStore';
import { PersuasionTechnique } from '@/types/persuasion';
import { RotateCcw, Sparkles } from 'lucide-react';

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
  const containerRef = useRef<HTMLDivElement>(null);
  const [techniques, setTechniques] = useState<PersuasionTechnique[]>([]);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const { markAsSeen, updateLastVisit, seenTechniques, resetSeen } = useDiscoverStore();

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

  const handleReset = () => {
    resetSeen();
    const shuffled = shuffleArray(persuasionTechniques);
    setTechniques(shuffled);
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (techniques.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <div className="flex flex-col items-center gap-3">
          <Sparkles className="w-8 h-8 text-[#e20074] animate-pulse" />
          <span className="text-white/70">Wird geladen...</span>
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
            <span className="text-white font-semibold text-sm">Entdecken</span>
          </div>

          {/* Progress indicator */}
          <div className="flex items-center gap-3">
            <span className="text-white/60 text-xs tabular-nums">
              {visibleIndex + 1} von {techniques.length}
            </span>

            {/* Reset button */}
            <button
              onClick={handleReset}
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all"
              aria-label="Neu mischen"
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
              Alle Begriffe entdeckt
            </h2>

            <p className="text-white/70 text-base mb-8 max-w-xs mx-auto">
              Du hast {techniques.length} Manipulationstechniken kennengelernt.
            </p>

            <button
              onClick={handleReset}
              className="px-6 py-3 bg-white text-[#e20074] font-semibold rounded-full hover:bg-white/90 transition-all active:scale-95"
            >
              Nochmal durchgehen
            </button>

            {seenTechniques.size > 0 && (
              <p className="text-white/50 text-xs mt-6">
                {seenTechniques.size} Begriffe insgesamt gelernt
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
            <span className="text-white/50 text-xs">Nach oben wischen</span>
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
