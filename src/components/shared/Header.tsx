import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Shield, Menu, X, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { Navigation } from './Navigation';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useThemeStore } from '@/stores/themeStore';

export function Header() {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setTheme, getActiveTheme } = useThemeStore();
  const activeTheme = getActiveTheme();

  const toggleTheme = () => {
    setTheme(activeTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Shield className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">DisinfoApp</span>
        </Link>

        {/* Desktop Navigation & Controls */}
        <div className="hidden md:flex items-center gap-2">
          <Navigation />
          <div className="ml-2 flex items-center gap-1 border-l pl-3">
            <LanguageSwitcher compact />
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label={t('accessibility.toggleTheme')}
            >
              {activeTheme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-1 md:hidden">
          <LanguageSwitcher compact />
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-accent transition-colors"
            aria-label={t('accessibility.toggleTheme')}
          >
            {activeTheme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-accent transition-colors"
            aria-label={t('accessibility.toggleMenu')}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t md:hidden">
          <div className="container mx-auto px-4 py-4">
            <Navigation mobile onNavigate={() => setMobileMenuOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
}
