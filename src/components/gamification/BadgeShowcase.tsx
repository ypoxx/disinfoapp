import { motion, AnimatePresence } from 'framer-motion';
import { Award, Lock } from 'lucide-react';
import { useBadgeStore } from '@/stores/badgeStore';
import { badges, Badge, getRarityColor, getRarityLabel } from '@/data/badges';
import { useState } from 'react';

interface BadgeCardProps {
  badge: Badge;
  isEarned: boolean;
  onClick: () => void;
}

function BadgeCard({ badge, isEarned, onClick }: BadgeCardProps) {
  const rarityColor = getRarityColor(badge.rarity);

  return (
    <motion.button
      whileHover={{ scale: isEarned ? 1.05 : 1 }}
      whileTap={{ scale: isEarned ? 0.95 : 1 }}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-lg border-2 p-4 text-center transition-all ${
        isEarned
          ? 'cursor-pointer border-transparent bg-card shadow-sm hover:shadow-md'
          : 'cursor-default border-dashed border-muted-foreground/20 bg-muted/30'
      }`}
      style={
        isEarned
          ? {
              borderColor: `${rarityColor}40`,
              boxShadow: `0 0 20px ${rarityColor}20`,
            }
          : undefined
      }
    >
      {/* Rarity Glow */}
      {isEarned && (
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${rarityColor}, transparent)`,
          }}
        />
      )}

      {/* Icon */}
      <div className={`relative mb-2 text-4xl ${!isEarned && 'opacity-30 grayscale'}`}>
        {isEarned ? badge.icon : <Lock className="mx-auto h-10 w-10 text-muted-foreground" />}
      </div>

      {/* Name */}
      <div className={`mb-1 font-semibold ${!isEarned && 'text-muted-foreground'}`}>
        {isEarned ? badge.name.de : '???'}
      </div>

      {/* Rarity */}
      {isEarned && (
        <div className="mb-1 text-xs font-medium" style={{ color: rarityColor }}>
          {getRarityLabel(badge.rarity)}
        </div>
      )}

      {/* Points */}
      {isEarned && (
        <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
          <Award className="h-3 w-3" />
          <span>{badge.points} Punkte</span>
        </div>
      )}

      {/* Locked Message */}
      {!isEarned && <div className="text-xs text-muted-foreground">Noch nicht freigeschaltet</div>}
    </motion.button>
  );
}

export function BadgeShowcase() {
  const { earnedBadges, totalPoints } = useBadgeStore();
  const [selectedBadge, setSelectedBadge] = useState<Badge | null>(null);
  const [filter, setFilter] = useState<'all' | 'earned' | 'locked'>('all');

  const earnedCount = earnedBadges.size;
  const totalCount = badges.length;
  const completionPercentage = Math.round((earnedCount / totalCount) * 100);

  const filteredBadges = badges.filter((badge) => {
    if (filter === 'earned') return earnedBadges.has(badge.id);
    if (filter === 'locked') return !earnedBadges.has(badge.id);
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="rounded-lg border bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-bold">Badge-Sammlung</h3>
          <Award className="h-6 w-6 text-purple-500" />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-500">{earnedCount}</div>
            <div className="text-sm text-muted-foreground">Badges verdient</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-500">{completionPercentage}%</div>
            <div className="text-sm text-muted-foreground">Vollständigkeit</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500">{totalPoints}</div>
            <div className="text-sm text-muted-foreground">Gesamtpunkte</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="h-2 overflow-hidden rounded-full bg-muted">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${completionPercentage}%` }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
            />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2">
        <button
          onClick={() => setFilter('all')}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
            filter === 'all'
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted text-muted-foreground hover:bg-muted/80'
          }`}
        >
          Alle ({totalCount})
        </button>
        <button
          onClick={() => setFilter('earned')}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
            filter === 'earned'
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted text-muted-foreground hover:bg-muted/80'
          }`}
        >
          Verdient ({earnedCount})
        </button>
        <button
          onClick={() => setFilter('locked')}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
            filter === 'locked'
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted text-muted-foreground hover:bg-muted/80'
          }`}
        >
          Gesperrt ({totalCount - earnedCount})
        </button>
      </div>

      {/* Badge Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {filteredBadges.map((badge) => (
          <BadgeCard
            key={badge.id}
            badge={badge}
            isEarned={earnedBadges.has(badge.id)}
            onClick={() => setSelectedBadge(badge)}
          />
        ))}
      </div>

      {/* Badge Detail Modal */}
      <AnimatePresence>
        {selectedBadge && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedBadge(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-lg border bg-card p-6 shadow-xl"
              style={{
                borderColor: `${getRarityColor(selectedBadge.rarity)}60`,
                boxShadow: `0 0 40px ${getRarityColor(selectedBadge.rarity)}30`,
              }}
            >
              <div className="mb-4 text-center text-6xl">{selectedBadge.icon}</div>
              <h3 className="mb-2 text-center text-2xl font-bold">{selectedBadge.name.de}</h3>
              <div
                className="mb-4 text-center text-sm font-medium"
                style={{ color: getRarityColor(selectedBadge.rarity) }}
              >
                {getRarityLabel(selectedBadge.rarity)}
              </div>
              <p className="mb-4 text-center text-muted-foreground">
                {selectedBadge.description.de}
              </p>
              <div className="mb-4 rounded-lg bg-muted p-3 text-center">
                <div className="text-sm text-muted-foreground">Belohnung</div>
                <div className="flex items-center justify-center gap-2 text-lg font-bold">
                  <Award className="h-5 w-5 text-primary" />
                  {selectedBadge.points} Punkte
                </div>
              </div>
              <div className="flex justify-center">
                <span
                  className={`inline-block rounded-full px-4 py-2 text-sm font-medium ${
                    earnedBadges.has(selectedBadge.id)
                      ? 'bg-green-500/20 text-green-700 dark:text-green-300'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {earnedBadges.has(selectedBadge.id) ? '✓ Verdient' : '🔒 Gesperrt'}
                </span>
              </div>
              <button
                onClick={() => setSelectedBadge(null)}
                className="mt-4 w-full rounded-lg bg-primary px-4 py-2 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Schließen
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
