import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home, BookOpen, BarChart3, Smartphone, Brain, Sparkles, Zap } from 'lucide-react';
import { useOnboardingStore } from '@/stores/onboardingStore';
import { NewBadge } from '../onboarding/NewBadge';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface NavigationProps {
  mobile?: boolean;
  onNavigate?: () => void;
}

export function Navigation({ mobile = false, onNavigate }: NavigationProps) {
  const { t } = useTranslation();
  const { hasVisitedPage, markPageVisited } = useOnboardingStore();
  const location = useLocation();

  // Mark current page as visited
  useEffect(() => {
    markPageVisited(location.pathname);
  }, [location.pathname, markPageVisited]);

  const navItems = [
    { to: '/', icon: Home, labelKey: 'nav.home' },
    { to: '/practice', icon: Zap, labelKey: 'nav.practice' },
    { to: '/modules', icon: BookOpen, labelKey: 'nav.modules' },
    { to: '/simulator', icon: Smartphone, labelKey: 'nav.simulator' },
    { to: '/techniques', icon: Brain, labelKey: 'nav.techniques' },
    { to: '/discover', icon: Sparkles, labelKey: 'nav.discover' },
    { to: '/progress', icon: BarChart3, labelKey: 'nav.progress' },
  ];

  const baseClasses = mobile
    ? 'flex items-center space-x-3 rounded-lg px-3 py-2 text-base hover:bg-accent'
    : 'flex items-center space-x-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground';

  const activeClasses = 'bg-accent text-accent-foreground';

  return (
    <nav className={mobile ? 'flex flex-col space-y-2' : 'flex items-center space-x-1'}>
      {navItems.map(({ to, icon: Icon, labelKey }) => {
        const isNew = !hasVisitedPage(to);
        return (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `${baseClasses} ${isActive ? activeClasses : 'text-muted-foreground'} relative`
            }
            onClick={onNavigate}
          >
            <Icon className="h-4 w-4" />
            <span>{t(labelKey)}</span>
            {isNew && to !== '/' && (
              <NewBadge className="absolute -right-1 -top-1 scale-75" />
            )}
          </NavLink>
        );
      })}
    </nav>
  );
}
