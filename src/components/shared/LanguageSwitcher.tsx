import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, X } from 'lucide-react';
import {
  useLanguageStore,
  availableLanguages,
  languageNames,
  languageFlags,
  SupportedLanguage,
} from '@/stores/languageStore';

interface LanguageSwitcherProps {
  variant?: 'light' | 'dark';
}

export function LanguageSwitcher({ variant = 'dark' }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguageStore();

  const handleSelect = (lang: SupportedLanguage) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  const bgClass = variant === 'dark' ? 'bg-white/10' : 'bg-black/10';
  const hoverBgClass = variant === 'dark' ? 'hover:bg-white/20' : 'hover:bg-black/20';
  const textClass = variant === 'dark' ? 'text-white' : 'text-gray-900';

  return (
    <div className="relative">
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-10 h-10 rounded-full ${bgClass} backdrop-blur-sm flex items-center justify-center ${textClass} ${hoverBgClass} transition-all active:scale-95`}
        title="Sprache wählen"
      >
        <Globe size={18} />
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 top-12 z-50 min-w-[180px] bg-gray-900/95 backdrop-blur-lg rounded-xl shadow-xl border border-white/10 overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                <span className="text-white/70 text-sm font-medium">Sprache</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 transition-colors"
                >
                  <X size={14} />
                </button>
              </div>

              {/* Language list */}
              <div className="py-2">
                {availableLanguages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => handleSelect(lang)}
                    className={`w-full px-4 py-2.5 flex items-center gap-3 hover:bg-white/10 transition-colors ${
                      language === lang ? 'bg-[#e20074]/20' : ''
                    }`}
                  >
                    <span className="text-xl">{languageFlags[lang]}</span>
                    <span className="text-white font-medium">{languageNames[lang]}</span>
                    {language === lang && (
                      <span className="ml-auto text-[#e20074]">✓</span>
                    )}
                  </button>
                ))}
              </div>

              {/* Footer note */}
              <div className="px-4 py-2 border-t border-white/10">
                <p className="text-white/40 text-xs">
                  Weitere Sprachen folgen bald
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
