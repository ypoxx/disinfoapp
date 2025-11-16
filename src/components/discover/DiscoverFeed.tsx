import { useEffect, useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { DiscoverCard } from './DiscoverCard';
import { persuasionTechniques } from '@/data/persuasion';
import { useDiscoverStore } from '@/stores/discoverStore';
import { useKnowledgeStore } from '@/stores/knowledgeStore';
import { PersuasionTechnique } from '@/types/persuasion';
import { ArrowLeft, RotateCcw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

/**
 * Shuffle array using Fisher-Yates algorithm with seed for consistency
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
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const [techniques, setTechniques] = useState<PersuasionTechnique[]>([]);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const { markAsSeen, updateLastVisit, seenTechniques, resetSeen } = useDiscoverStore();
  const { markTechniqueViewed } = useKnowledgeStore();

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

            // Mark as seen
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

  const handleAddToLearning = useCallback(
    (techniqueId: string) => {
      // Mark technique as viewed in knowledge store
      markTechniqueViewed(techniqueId);

      // Navigate to technique detail
      navigate(`/techniques/${techniqueId}`);
    },
    [markTechniqueViewed, navigate]
  );

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
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-gradient-to-b from-black/80 to-transparent">
        <button
          onClick={() => navigate(-1)}
          className="w-10 h-10 rounded-full bg-black/70 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/90 transition-all"
        >
          <ArrowLeft size={20} />
        </button>

        <h1 className="text-white text-xl font-bold drop-shadow-lg">Entdecken</h1>

        <button
          onClick={handleReset}
          className="w-10 h-10 rounded-full bg-black/70 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/90 transition-all"
          title="Neu mischen"
        >
          <RotateCcw size={20} />
        </button>
      </div>

      {/* Progress indicator */}
      <div className="fixed top-16 left-0 right-0 z-40 px-4">
        <div className="h-1 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-white rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((visibleIndex + 1) / techniques.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="text-center text-white/60 text-xs mt-1">
          {visibleIndex + 1} / {techniques.length}
          {seenTechniques.size > 0 && ` • ${seenTechniques.size} gesehen`}
        </div>
      </div>

      {/* Scrollable container with snap */}
      <div
        ref={containerRef}
        className="h-screen overflow-y-scroll snap-y snap-mandatory"
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
              onAddToLearning={handleAddToLearning}
            />
          </div>
        ))}

        {/* End card */}
        <section className="relative h-screen w-full flex-shrink-0 snap-start bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900 flex items-center justify-center">
          <div className="text-center px-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: 'spring' }}
              className="text-6xl mb-6"
            >
              🎉
            </motion.div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Alle Techniken entdeckt!
            </h2>
            <p className="text-white/80 mb-8">
              Du hast alle {techniques.length} Manipulationstechniken gesehen.
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-3 bg-white text-purple-900 font-bold rounded-full hover:bg-gray-100 transition-all active:scale-95"
            >
              Nochmal von vorne
            </button>
          </div>
        </section>
      </div>

      {/* Swipe hint (show on first visit) */}
      {visibleIndex === 0 && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-none z-40"
        >
          <div className="flex flex-col items-center text-white/60">
            <div className="text-sm mb-2">Wische nach oben</div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              ↑
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Hide scrollbar */}
      <style>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
