import { Link } from 'react-router-dom';
import { Shield, Menu, X, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { Navigation } from './Navigation';
import { useThemeStore } from '@/stores/themeStore';

export function Header() {
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

        {/* Desktop Navigation & Theme Toggle */}
        <div className="hidden md:flex items-center gap-6">
          <Navigation />
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-accent transition-colors"
            aria-label="Toggle theme"
          >
            {activeTheme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button & Theme Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-accent transition-colors"
            aria-label="Toggle theme"
          >
            {activeTheme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
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
