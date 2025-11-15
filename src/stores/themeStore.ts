import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'light' | 'dark' | 'system';

interface ThemeState {
  theme: Theme;
  systemTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
  setSystemTheme: (theme: 'light' | 'dark') => void;
  getActiveTheme: () => 'light' | 'dark';
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'system',
      systemTheme: 'light',

      setTheme: (theme: Theme) => {
        set({ theme });
        applyTheme(theme, get().systemTheme);
      },

      setSystemTheme: (systemTheme: 'light' | 'dark') => {
        set({ systemTheme });
        if (get().theme === 'system') {
          applyTheme('system', systemTheme);
        }
      },

      getActiveTheme: () => {
        const state = get();
        return state.theme === 'system' ? state.systemTheme : state.theme;
      },
    }),
    {
      name: 'theme-preference',
      onRehydrateStorage: () => (state) => {
        if (state) {
          applyTheme(state.theme, state.systemTheme);
        }
      },
    }
  )
);

function applyTheme(theme: Theme, systemTheme: 'light' | 'dark') {
  const root = document.documentElement;
  const activeTheme = theme === 'system' ? systemTheme : theme;

  if (activeTheme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
}

// Initialize system theme detection
if (typeof window !== 'undefined') {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  // Set initial system theme
  useThemeStore.getState().setSystemTheme(mediaQuery.matches ? 'dark' : 'light');

  // Listen for system theme changes
  mediaQuery.addEventListener('change', (e) => {
    useThemeStore.getState().setSystemTheme(e.matches ? 'dark' : 'light');
  });
}
