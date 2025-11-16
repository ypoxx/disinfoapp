import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Grid3x3, Network, TrendingUp, BookOpen } from 'lucide-react';
import { Button, Card } from '@/components/shared/UIComponents';
import { TechniqueGrid } from '@/components/techniques/TechniqueGrid';
import { TechniqueFilters } from '@/components/techniques/TechniqueFilters';
import { TechniqueDetail } from '@/components/techniques/TechniqueDetail';
import {
  persuasionTechniques,
  getTechniquesByImportance,
} from '@/data/persuasion';
import { filterTechniques, sortTechniques } from '@/data/persuasion/utils';
import { useKnowledgeStore } from '@/stores/knowledgeStore';
import type {
  PersuasionTechnique,
  TechniqueFilters as Filters,
  TechniqueSortBy,
} from '@/types/persuasion';

type ViewMode = 'grid' | 'graph';

export function TechniqueExplorer() {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTechnique, setSelectedTechnique] = useState<PersuasionTechnique | null>(null);
  const [sortBy, setSortBy] = useState<TechniqueSortBy>('name');

  const { markTechniqueViewed } = useKnowledgeStore();

  // Mark page visit for achievement
  useEffect(() => {
    markTechniqueViewed('_explorer_visit_');
  }, [markTechniqueViewed]);

  // Mark technique as viewed when opened
  const handleSelectTechnique = (technique: PersuasionTechnique) => {
    setSelectedTechnique(technique);
    markTechniqueViewed(technique.id);
  };

  // Filter state
  const [filters, setFilters] = useState<Filters>({
    categories: [],
    difficulties: [],
    effectiveness: [],
    taxonomyGroups: [],
  });

  // Filtered and sorted techniques
  const displayedTechniques = useMemo(() => {
    const filterCriteria: Filters = {
      ...filters,
      query: searchQuery || undefined,
    };

    const filtered = filterTechniques(filterCriteria);
    return sortTechniques(filtered, sortBy, 'asc');
  }, [searchQuery, filters, sortBy]);

  // Most important techniques for highlights
  const importantTechniques = useMemo(() => getTechniquesByImportance(6), []);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="mb-3 text-4xl font-bold">Persuasions-Techniken Explorer</h1>
        <p className="text-lg text-muted-foreground">
          Entdecke {persuasionTechniques.length} wissenschaftlich dokumentierte
          Manipulationstechniken und lerne, sie zu erkennen
        </p>
      </motion.div>

      {/* Stats Cards */}
      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="text-center">
            <BookOpen className="mx-auto mb-2 h-8 w-8 text-primary" />
            <div className="text-2xl font-bold">{persuasionTechniques.length}</div>
            <div className="text-sm text-muted-foreground">Techniken</div>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="text-center">
            <Network className="mx-auto mb-2 h-8 w-8 text-blue-600" />
            <div className="text-2xl font-bold">27</div>
            <div className="text-sm text-muted-foreground">Verbindungen</div>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="text-center">
            <TrendingUp className="mx-auto mb-2 h-8 w-8 text-green-600" />
            <div className="text-2xl font-bold">12</div>
            <div className="text-sm text-muted-foreground">Gegenmaßnahmen</div>
          </Card>
        </motion.div>
      </div>

      {/* Top Techniques */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-8"
      >
        <Card>
          <h2 className="mb-4 text-xl font-bold">🔥 Wichtigste Techniken</h2>
          <p className="mb-4 text-sm text-muted-foreground">
            Diese Techniken sind besonders verbreitet und wirksam
          </p>
          <div className="flex flex-wrap gap-2">
            {importantTechniques.map((technique) => (
              <button
                key={technique.id}
                onClick={() => handleSelectTechnique(technique)}
                className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
              >
                {technique.name.de}
              </button>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Search and Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mb-6"
      >
        <Card>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Techniken durchsuchen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border bg-background px-10 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Controls */}
            <div className="flex gap-2">
              <Button
                variant={showFilters ? 'primary' : 'outline'}
                onClick={() => setShowFilters(!showFilters)}
                className="gap-2"
              >
                <Filter className="h-4 w-4" />
                Filter
              </Button>

              <div className="flex rounded-lg border bg-background">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-2 ${
                    viewMode === 'grid'
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  } rounded-l-lg transition-colors`}
                  title="Rasteransicht"
                >
                  <Grid3x3 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('graph')}
                  className={`px-3 py-2 ${
                    viewMode === 'graph'
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  } rounded-r-lg transition-colors`}
                  title="Graphansicht"
                >
                  <Network className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mt-4 border-t pt-4"
            >
              <TechniqueFilters
                filters={filters}
                onChange={setFilters}
                onReset={() =>
                  setFilters({
                    categories: [],
                    difficulties: [],
                    effectiveness: [],
                    taxonomyGroups: [],
                  })
                }
              />
            </motion.div>
          )}

          {/* Sort */}
          <div className="mt-4 flex items-center gap-2 border-t pt-4">
            <span className="text-sm text-muted-foreground">Sortieren nach:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as TechniqueSortBy)}
              className="rounded border bg-background px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="name">Name</option>
              <option value="difficulty">Schwierigkeit</option>
              <option value="effectiveness">Effektivität</option>
              <option value="category">Kategorie</option>
              <option value="evidence_quality">Evidenzqualität</option>
            </select>
            <span className="ml-auto text-sm text-muted-foreground">
              {displayedTechniques.length} Ergebnis(se)
            </span>
          </div>
        </Card>
      </motion.div>

      {/* Results */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        {displayedTechniques.length === 0 ? (
          <Card className="py-12 text-center">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="mb-2 text-lg font-semibold">Keine Techniken gefunden</h3>
            <p className="text-muted-foreground">
              Versuche andere Suchbegriffe oder Filter
            </p>
          </Card>
        ) : viewMode === 'grid' ? (
          <TechniqueGrid
            techniques={displayedTechniques}
            onSelectTechnique={handleSelectTechnique}
          />
        ) : (
          <Card className="p-8 text-center">
            <Network className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
            <h3 className="mb-2 text-lg font-semibold">Graph-Ansicht</h3>
            <p className="text-muted-foreground">
              Die interaktive Graph-Visualisierung wird in Kürze implementiert
            </p>
          </Card>
        )}
      </motion.div>

      {/* Detail Modal */}
      {selectedTechnique && (
        <TechniqueDetail
          technique={selectedTechnique}
          onClose={() => setSelectedTechnique(null)}
        />
      )}
    </div>
  );
}
