import { NavLink } from 'react-router-dom';
import { Home, Dumbbell, BookOpen, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const navItems = [
  { to: '/', icon: Home, labelKey: 'nav.today' },
  { to: '/practice', icon: Dumbbell, labelKey: 'nav.practice' },
  { to: '/library', icon: BookOpen, labelKey: 'nav.library' },
  { to: '/profile', icon: User, labelKey: 'nav.profile' },
] as const;

export function BottomNav() {
  const { t } = useTranslation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[var(--color-bg-surface)] border-t border-[var(--color-border)] md:hidden safe-area-bottom">
      <div className="flex items-center justify-around h-14 max-w-lg mx-auto">
        {navItems.map(({ to, icon: Icon, labelKey }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-[var(--radius-md)] transition-colors min-w-[4rem]
              ${isActive
                ? 'text-[var(--color-accent)]'
                : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]'
              }`
            }
          >
            <Icon size={22} strokeWidth={1.8} />
            <span className="text-[10px] font-medium">{t(labelKey)}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
