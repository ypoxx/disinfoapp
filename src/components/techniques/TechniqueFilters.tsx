import { X } from 'lucide-react';
import { Button } from '@/components/shared/UIComponents';
import { taxonomyGroups } from '@/data/persuasion';
import type { TechniqueFilters as Filters, TechniqueCategory, DifficultyLevel, EffectivenessLevel } from '@/types/persuasion';

interface TechniqueFiltersProps {
  filters: Filters;
  onChange: (filters: Filters) => void;
  onReset: () => void;
}

const categories: { value: TechniqueCategory; label: string }[] = [
  { value: 'cognitive_bias', label: 'Kognitive Verzerrungen' },
  { value: 'social_dynamics', label: 'Soziale Dynamiken' },
  { value: 'logical_fallacy', label: 'Logische Fehlschlüsse' },
  { value: 'emotional_manipulation', label: 'Emotionale Manipulation' },
  { value: 'nlp_technique', label: 'NLP-Techniken' },
  { value: 'digital_technique', label: 'Digitale Techniken' },
];

const difficulties: { value: DifficultyLevel; label: string }[] = [
  { value: 'beginner', label: 'Einfach' },
  { value: 'intermediate', label: 'Mittel' },
  { value: 'advanced', label: 'Fortgeschritten' },
  { value: 'expert', label: 'Experte' },
];

const effectiveness: { value: EffectivenessLevel; label: string }[] = [
  { value: 'low', label: 'Niedrig' },
  { value: 'moderate', label: 'Mittel' },
  { value: 'high', label: 'Hoch' },
  { value: 'very_high', label: 'Sehr Hoch' },
];

export function TechniqueFilters({ filters, onChange, onReset }: TechniqueFiltersProps) {
  const toggleCategory = (category: TechniqueCategory) => {
    const newCategories = filters.categories?.includes(category)
      ? filters.categories.filter((c) => c !== category)
      : [...(filters.categories || []), category];
    onChange({ ...filters, categories: newCategories });
  };

  const toggleDifficulty = (difficulty: DifficultyLevel) => {
    const newDifficulties = filters.difficulties?.includes(difficulty)
      ? filters.difficulties.filter((d) => d !== difficulty)
      : [...(filters.difficulties || []), difficulty];
    onChange({ ...filters, difficulties: newDifficulties });
  };

  const toggleEffectiveness = (eff: EffectivenessLevel) => {
    const newEffectiveness = filters.effectiveness?.includes(eff)
      ? filters.effectiveness.filter((e) => e !== eff)
      : [...(filters.effectiveness || []), eff];
    onChange({ ...filters, effectiveness: newEffectiveness });
  };

  const toggleTaxonomyGroup = (groupId: string) => {
    const newGroups = filters.taxonomyGroups?.includes(groupId)
      ? filters.taxonomyGroups.filter((g) => g !== groupId)
      : [...(filters.taxonomyGroups || []), groupId];
    onChange({ ...filters, taxonomyGroups: newGroups });
  };

  const hasActiveFilters =
    (filters.categories?.length ?? 0) > 0 ||
    (filters.difficulties?.length ?? 0) > 0 ||
    (filters.effectiveness?.length ?? 0) > 0 ||
    (filters.taxonomyGroups?.length ?? 0) > 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Filter</h3>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={onReset} className="gap-1">
            <X className="h-4 w-4" />
            Zurücksetzen
          </Button>
        )}
      </div>

      {/* Categories */}
      <div>
        <h4 className="mb-2 text-sm font-medium text-muted-foreground">Kategorie</h4>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => toggleCategory(cat.value)}
              className={`rounded-full px-3 py-1 text-sm transition-colors ${
                filters.categories?.includes(cat.value)
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Difficulty */}
      <div>
        <h4 className="mb-2 text-sm font-medium text-muted-foreground">Schwierigkeit</h4>
        <div className="flex flex-wrap gap-2">
          {difficulties.map((diff) => (
            <button
              key={diff.value}
              onClick={() => toggleDifficulty(diff.value)}
              className={`rounded-full px-3 py-1 text-sm transition-colors ${
                filters.difficulties?.includes(diff.value)
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {diff.label}
            </button>
          ))}
        </div>
      </div>

      {/* Effectiveness */}
      <div>
        <h4 className="mb-2 text-sm font-medium text-muted-foreground">Effektivität</h4>
        <div className="flex flex-wrap gap-2">
          {effectiveness.map((eff) => (
            <button
              key={eff.value}
              onClick={() => toggleEffectiveness(eff.value)}
              className={`rounded-full px-3 py-1 text-sm transition-colors ${
                filters.effectiveness?.includes(eff.value)
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {eff.label}
            </button>
          ))}
        </div>
      </div>

      {/* Taxonomy Groups */}
      <div>
        <h4 className="mb-2 text-sm font-medium text-muted-foreground">Themengruppen</h4>
        <div className="flex flex-wrap gap-2">
          {taxonomyGroups.slice(0, 8).map((group) => (
            <button
              key={group.id}
              onClick={() => toggleTaxonomyGroup(group.id)}
              className={`rounded-full px-3 py-1 text-sm transition-colors ${
                filters.taxonomyGroups?.includes(group.id)
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {group.name.de}
            </button>
          ))}
        </div>
      </div>

      {/* Active Filters Summary */}
      {hasActiveFilters && (
        <div className="rounded-lg bg-primary/5 p-3 text-sm">
          <div className="font-medium text-primary">Aktive Filter:</div>
          <div className="mt-1 text-muted-foreground">
            {(filters.categories?.length ?? 0) > 0 && (
              <div>• {filters.categories!.length} Kategorien</div>
            )}
            {(filters.difficulties?.length ?? 0) > 0 && (
              <div>• {filters.difficulties!.length} Schwierigkeitsstufen</div>
            )}
            {(filters.effectiveness?.length ?? 0) > 0 && (
              <div>• {filters.effectiveness!.length} Effektivitätsstufen</div>
            )}
            {(filters.taxonomyGroups?.length ?? 0) > 0 && (
              <div>• {filters.taxonomyGroups!.length} Themengruppen</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
