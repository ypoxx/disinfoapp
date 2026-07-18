import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { techniques } from '@content/techniques';
import { learningPaths, techniquesInPath } from '@content/paths';
import { t as tContent, type TechniqueCategory } from '@content/types';
import { useKnowledgeStore } from '@/stores/knowledge-store';

export function LibraryPage() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<TechniqueCategory | null>(null);
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const { techniques: knowledge } = useKnowledgeStore();

  const lang = i18n.language;

  const activePath = learningPaths.find((p) => p.id === selectedPath);
  const pathIds = activePath ? new Set(techniquesInPath(activePath)) : null;

  const filtered = techniques.filter((tech) => {
    const matchesSearch = !search ||
      tContent(tech.name, lang).toLowerCase().includes(search.toLowerCase()) ||
      tContent(tech.description, lang).toLowerCase().includes(search.toLowerCase());
    const matchesCategory = !selectedCategory || tech.category === selectedCategory;
    const matchesPath = !pathIds || pathIds.has(tech.id);
    return matchesSearch && matchesCategory && matchesPath;
  });

  const categories = [...new Set(techniques.map((tech) => tech.category))];
  const visiblePaths = learningPaths.filter((p) => techniquesInPath(p).length > 0);

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden py-2">
        <span
          aria-hidden
          className="absolute -top-6 right-0 mono-num font-bold text-[7rem] leading-none text-[var(--color-carbon)] opacity-[0.06] select-none pointer-events-none"
        >
          03
        </span>
        <h1 className="type-display text-xl relative">{t('library.title')}</h1>
        <p className="mono-label text-[var(--color-text-muted)] mt-2">
          {techniques.length} {t('library.techniques')}
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" aria-hidden />
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={t('library.search')}
          aria-label={t('library.search')}
          className="w-full pl-10 pr-4 py-3 text-sm rounded-[var(--radius-md)]
            bg-[var(--color-bg-surface)] border-2 border-[var(--color-border)]
            focus:outline-none focus:border-[var(--color-accent)]
            placeholder:text-[var(--color-text-muted)]"
        />
      </div>

      {/* Learning paths — curated shelves through the catalogue */}
      {visiblePaths.length > 1 && (
        <div className="space-y-2">
          <p className="mono-label text-[var(--color-text-muted)]">{t('library.paths')}</p>
          <div className="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4 scrollbar-hide" role="group" aria-label={t('library.paths')}>
            {visiblePaths.map((p) => {
              const count = techniquesInPath(p).length;
              const active = selectedPath === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedPath(active ? null : p.id)}
                  aria-pressed={active}
                  className={`text-left px-3 py-2 shrink-0 border-2 rounded-[var(--radius-md)] min-h-[3.25rem] min-w-[9rem] transition-colors duration-100
                    ${active
                      ? 'bg-[var(--color-bg-inverse)] border-[var(--color-bg-inverse)] text-[var(--color-text-inverse)]'
                      : 'border-[var(--color-border-hairline)] hover:border-[var(--color-border)] bg-[var(--color-bg-surface)]'
                    }`}
                >
                  <span className="block font-bold text-sm">{tContent(p.name, lang)}</span>
                  <span className={`mono-label ${active ? 'opacity-70' : 'text-[var(--color-text-muted)]'}`}>
                    {count} {t('library.pathTechniques')}
                  </span>
                </button>
              );
            })}
          </div>
          {activePath?.isRadar && (
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              {t('library.radarExplainer')}
            </p>
          )}
        </div>
      )}

      {/* Category filter chips — each category owns its poster hue */}
      <div className="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4 scrollbar-hide" role="group" aria-label={t('library.allCategories')}>
        <button
          onClick={() => setSelectedCategory(null)}
          className={`mono-label px-3 py-2 whitespace-nowrap shrink-0 border-2 transition-colors duration-100 min-h-[2.5rem]
            ${!selectedCategory
              ? 'bg-[var(--color-bg-inverse)] border-[var(--color-bg-inverse)] text-[var(--color-text-inverse)]'
              : 'border-[var(--color-border-hairline)] text-[var(--color-text-secondary)] hover:border-[var(--color-border)]'
            }`}
        >
          {t('library.allCategories')}
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat === selectedCategory ? null : cat)}
            className={`mono-label px-3 py-2 whitespace-nowrap shrink-0 border-2 transition-colors duration-100 min-h-[2.5rem]`}
            style={
              cat === selectedCategory
                ? {
                    backgroundColor: `var(--color-cat-${cat})`,
                    borderColor: `var(--color-cat-${cat})`,
                    color: `var(--color-cat-${cat}-ink)`,
                  }
                : undefined
            }
          >
            <span className={cat === selectedCategory ? '' : 'text-[var(--color-text-secondary)]'}>
              {t(`categories.${cat}`)}
            </span>
          </button>
        ))}
      </div>

      {/* Technique index */}
      {filtered.length > 0 ? (
        <ol className="rule-t-2">
          {filtered.map((tech) => {
            const mastery = knowledge[tech.id]?.masteryLevel;
            const index = String(techniques.indexOf(tech) + 1).padStart(2, '0');
            return (
              <li key={tech.id} className="border-b border-[var(--color-border-hairline)]">
                <button
                  onClick={() => navigate(`/library/${tech.id}`)}
                  className="w-full flex items-stretch gap-3 py-3 text-left group min-h-[3rem]"
                >
                  <span
                    className="w-1 shrink-0 rounded-[var(--radius-sm)]"
                    style={{ backgroundColor: `var(--color-cat-${tech.category})` }}
                    aria-hidden
                  />
                  <span className="mono-num text-sm text-[var(--color-text-muted)] pt-0.5 shrink-0 w-7">
                    {index}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block font-bold text-sm group-hover:underline decoration-2 decoration-[var(--color-accent)] underline-offset-4">
                      {tContent(tech.name, lang)}
                      {tech.evidenceTier === 'frontier' && (
                        <span className="mono-label ml-2 align-middle border-2 border-[var(--color-signal)] text-[var(--color-accent-text)] px-1.5 py-0.5">
                          {t('library.radarShelf')}
                        </span>
                      )}
                    </span>
                    <span className="block text-xs text-[var(--color-text-secondary)] line-clamp-1 mt-0.5">
                      {tContent(tech.description, lang)}
                    </span>
                  </span>
                  <span className="mono-num text-sm shrink-0 pt-0.5 text-right w-9">
                    {mastery !== undefined ? (
                      <span className={mastery >= 80 ? 'text-[var(--color-accent-text)] font-bold' : 'text-[var(--color-text-muted)]'}>
                        {mastery}
                      </span>
                    ) : (
                      <span className="text-[var(--color-border-hairline)]">—</span>
                    )}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      ) : (
        /* Empty state */
        <div className="rule-2 bg-[var(--color-bg-surface)] p-8 text-center space-y-3">
          <p className="type-display text-lg">{t('library.noResultsTitle')}</p>
          <p className="text-sm text-[var(--color-text-secondary)]">{t('library.noResultsBody')}</p>
          <button
            onClick={() => { setSearch(''); setSelectedCategory(null); setSelectedPath(null); }}
            className="mono-label text-[var(--color-accent-text)] underline underline-offset-4 decoration-2 min-h-[2.75rem]"
          >
            {t('library.resetFilters')}
          </button>
        </div>
      )}
    </div>
  );
}
