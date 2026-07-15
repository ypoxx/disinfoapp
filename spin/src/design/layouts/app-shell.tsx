import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { BottomNav } from '../components/bottom-nav';
import { navItems } from '../nav-items';

/** Desktop top bar — same navItems as the mobile carbon bar */
function DesktopNav() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const reduceMotion = useReducedMotion();

  return (
    <header className="hidden md:block rule-b-2 bg-[var(--color-bg)] sticky top-0 z-40">
      <div className="max-w-2xl mx-auto px-4 h-16 flex items-center justify-between">
        <NavLink to="/" className="type-display text-xl leading-none">
          SPIN<span className="align-super text-[0.5em]">®</span>
        </NavLink>
        <nav aria-label={t('nav.main')} className="flex items-stretch h-full">
          {navItems.map(({ to, index, labelKey }) => {
            const active = to === '/' ? pathname === '/' : pathname.startsWith(to);
            return (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className="relative flex items-center gap-1.5 px-4"
              >
                {active && (
                  <motion.span
                    layoutId="desktop-nav-indicator"
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-[var(--color-signal)]"
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : { type: 'spring', stiffness: 500, damping: 40 }
                    }
                  />
                )}
                <span className={`mono-label text-[10px] ${active ? 'text-[var(--color-accent-text)]' : 'text-[var(--color-text-muted)]'}`}>
                  {index}
                </span>
                <span className={`text-sm ${active ? 'font-bold' : 'font-medium text-[var(--color-text-secondary)]'}`}>
                  {t(labelKey)}
                </span>
              </NavLink>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export function AppShell() {
  return (
    <div className="flex flex-col min-h-svh">
      <DesktopNav />

      {/* Main content with bottom padding for the mobile nav bar */}
      <main className="flex-1 pb-20 md:pb-8">
        <div className="max-w-2xl mx-auto px-4 py-4 md:py-8">
          <Outlet />
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
