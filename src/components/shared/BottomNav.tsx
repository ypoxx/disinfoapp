import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home, BookOpen, Smartphone, BarChart3, MoreHorizontal, Zap as ZapIcon } from 'lucide-react';
import { useState } from 'react';
import { Brain, LineChart, Sparkles } from 'lucide-react';

export function BottomNav() {
  const { t } = useTranslation();
  const [moreOpen, setMoreOpen] = useState(false);

  const mainItems = [
    { to: '/', icon: Home, label: t('nav.home') },
    { to: '/practice', icon: ZapIcon, label: 'Üben' },
    { to: '/modules', icon: BookOpen, label: t('nav.modules') },
    { to: '/progress', icon: BarChart3, label: t('nav.progress') },
  ];

  const moreItems = [
    { to: '/simulator', icon: Smartphone, label: t('nav.simulator') },
    { to: '/discover', icon: Sparkles, label: t('nav.discover') },
    { to: '/techniques', icon: Brain, label: t('nav.techniques') },
    { to: '/dashboard', icon: LineChart, label: t('nav.dashboard') },
  ];

  return (
    <>
      {/* More menu overlay */}
      {moreOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 md:hidden"
          onClick={() => setMoreOpen(false)}
        />
      )}

      {/* More menu popup */}
      {moreOpen && (
        <div className="fixed bottom-16 left-0 right-0 z-50 border-t bg-background px-2 pb-2 pt-3 md:hidden">
          <div className="grid grid-cols-4 gap-1">
            {moreItems.map(({ to, icon: Icon, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setMoreOpen(false)}
                className={({ isActive }) =>
                  `flex flex-col items-center gap-1 rounded-lg py-2 text-xs transition-colors ${
                    isActive
                      ? 'bg-primary/10 text-primary font-medium'
                      : 'text-muted-foreground hover:text-foreground'
                  }`
                }
              >
                <Icon className="h-5 w-5" />
                <span className="truncate max-w-[4rem]">{label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      )}

      {/* Bottom tab bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 md:hidden">
        <div className="flex items-stretch justify-around">
          {mainItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `flex min-h-[56px] flex-1 flex-col items-center justify-center gap-0.5 text-[10px] transition-colors ${
                  isActive
                    ? 'text-primary font-medium'
                    : 'text-muted-foreground'
                }`
              }
            >
              <Icon className="h-5 w-5" />
              <span className="truncate">{label}</span>
            </NavLink>
          ))}
          <button
            onClick={() => setMoreOpen(!moreOpen)}
            className={`flex min-h-[56px] flex-1 flex-col items-center justify-center gap-0.5 text-[10px] transition-colors ${
              moreOpen ? 'text-primary font-medium' : 'text-muted-foreground'
            }`}
          >
            <MoreHorizontal className="h-5 w-5" />
            <span>{t('nav.more', 'Mehr')}</span>
          </button>
        </div>
      </nav>
    </>
  );
}
