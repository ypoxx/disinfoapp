import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/design/components/card';
import { techniques } from '@content/techniques';
import { t as tContent } from '@content/types';

const categoryColors: Record<string, string> = {
  cognitive_bias: '#4263eb',
  social_dynamics: '#f59e0b',
  emotional_manipulation: '#ef4444',
  logical_fallacy: '#8b5cf6',
  nlp: '#06b6d4',
  digital_influence: '#10b981',
};

export function LibraryPage() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const lang = i18n.language;

  const filtered = techniques.filter((tech) => {
    const matchesSearch = !search ||
      tContent(tech.name, lang).toLowerCase().includes(search.toLowerCase()) ||
      tContent(tech.description, lang).toLowerCase().includes(search.toLowerCase());
    const matchesCategory = !selectedCategory || tech.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [...new Set(techniques.map((tech) => tech.category))];

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold tracking-tight">{t('library.title')}</h1>

      {/* Search */}
      <div className="relative">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={t('library.search')}
          className="w-full pl-10 pr-4 py-2.5 text-sm rounded-[var(--radius-lg)]
            bg-[var(--color-bg-muted)] border border-[var(--color-border)]
            focus:outline-none focus:border-[var(--color-accent)]
            placeholder:text-[var(--color-text-muted)]"
        />
      </div>

      {/* Category filter chips */}
      <div className="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4 scrollbar-hide">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-3 py-1.5 text-xs font-medium rounded-[var(--radius-full)] whitespace-nowrap shrink-0 transition-colors
            ${!selectedCategory
              ? 'bg-[var(--color-accent)] text-[var(--color-text-inverse)]'
              : 'bg-[var(--color-bg-muted)] text-[var(--color-text-secondary)] hover:bg-[var(--color-border)]'
            }`}
        >
          {t('library.allCategories')}
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat === selectedCategory ? null : cat)}
            className={`px-3 py-1.5 text-xs font-medium rounded-[var(--radius-full)] whitespace-nowrap shrink-0 transition-colors
              ${cat === selectedCategory
                ? 'bg-[var(--color-accent)] text-[var(--color-text-inverse)]'
                : 'bg-[var(--color-bg-muted)] text-[var(--color-text-secondary)] hover:bg-[var(--color-border)]'
              }`}
          >
            {t(`categories.${cat}`)}
          </button>
        ))}
      </div>

      {/* Technique grid */}
      <div className="space-y-2">
        {filtered.map((tech) => (
          <Card
            key={tech.id}
            hover
            padding="md"
            onClick={() => navigate(`/library/${tech.id}`)}
          >
            <div className="flex items-start gap-3">
              <div
                className="w-2 h-10 rounded-full shrink-0 mt-0.5"
                style={{ backgroundColor: categoryColors[tech.category] || '#94a3b8' }}
              />
              <div className="min-w-0 flex-1">
                <h3 className="font-medium text-sm">{tContent(tech.name, lang)}</h3>
                <p className="text-xs text-[var(--color-text-secondary)] line-clamp-2 mt-0.5">
                  {tContent(tech.description, lang)}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[10px] px-2 py-0.5 rounded-[var(--radius-full)] bg-[var(--color-bg-muted)] text-[var(--color-text-muted)]">
                    {t(`difficulty.${tech.difficulty}`)}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-[var(--radius-full)] bg-[var(--color-bg-muted)] text-[var(--color-text-muted)]">
                    {t(`categories.${tech.category}`)}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <p className="text-center text-xs text-[var(--color-text-muted)]">
        {filtered.length} {t('library.techniques')}
      </p>
    </div>
  );
}
