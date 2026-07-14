import { NavLink, useLocation } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { navItems } from '../nav-items';

function isItemActive(pathname: string, to: string): boolean {
  if (to === '/') return pathname === '/';
  return pathname.startsWith(to);
}

/**
 * Carbon nav bar (dark in both themes) — pure type, mono indices,
 * a 2px signal indicator that snaps between tabs with a dead-stop spring.
 */
export function BottomNav() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const reduceMotion = useReducedMotion();

  return (
    <nav
      aria-label={t('nav.main')}
      className="fixed bottom-0 left-0 right-0 z-40 bg-[var(--color-carbon)] md:hidden safe-area-bottom"
    >
      <div className="flex items-stretch h-16 max-w-lg mx-auto">
        {navItems.map(({ to, index, labelKey }) => {
          const active = isItemActive(pathname, to);
          return (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className="relative flex-1 flex flex-col items-center justify-center gap-0.5 min-h-[3rem]"
            >
              {active && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute top-0 left-2 right-2 h-[2px] bg-[var(--color-signal)]"
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { type: 'spring', stiffness: 500, damping: 40 }
                  }
                />
              )}
              <span
                className={`mono-label text-[10px] ${
                  active ? 'text-[var(--color-signal)]' : 'text-[#98958e]'
                }`}
              >
                {index}
              </span>
              <span
                className={`text-[13px] leading-none ${
                  active ? 'font-bold text-[var(--color-chalk)]' : 'font-medium text-[#98958e]'
                }`}
              >
                {t(labelKey)}
              </span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
