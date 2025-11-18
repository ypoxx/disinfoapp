import { NavLink } from 'react-router-dom';
import { Home, BookOpen, BarChart3, Smartphone, Brain, LineChart, Sparkles } from 'lucide-react';
import { useOnboardingStore } from '@/stores/onboardingStore';
import { NewBadge } from '../onboarding/NewBadge';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface NavigationProps {
  mobile?: boolean;
  onNavigate?: () => void;
}

export function Navigation({ mobile = false, onNavigate }: NavigationProps) {
  const { hasVisitedPage, markPageVisited } = useOnboardingStore();
  const location = useLocation();

  // Mark current page as visited
  useEffect(() => {
    markPageVisited(location.pathname);
  }, [location.pathname, markPageVisited]);

  const navItems = [
    { to: '/', icon: Home, label: 'Start' },
    { to: '/discover', icon: Sparkles, label: 'Entdecken' },
    { to: '/modules', icon: BookOpen, label: 'Lernmodule' },
    { to: '/techniques', icon: Brain, label: 'Techniken' },
    { to: '/simulator', icon: Smartphone, label: 'Simulator' },
    { to: '/dashboard', icon: LineChart, label: 'Dashboard' },
    { to: '/progress', icon: BarChart3, label: 'Fortschritt' },
  ];

  const baseClasses = mobile
    ? 'flex items-center space-x-3 rounded-lg px-3 py-2 text-base hover:bg-accent'
    : 'flex items-center space-x-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground';

  const activeClasses = 'bg-accent text-accent-foreground';

  return (
    <nav className={mobile ? 'flex flex-col space-y-2' : 'flex items-center space-x-1'}>
      {navItems.map(({ to, icon: Icon, label }) => {
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
            <span>{label}</span>
            {isNew && to !== '/' && (
              <NewBadge className="absolute -right-1 -top-1 scale-75" />
            )}
          </NavLink>
        );
      })}
    </nav>
  );
}
