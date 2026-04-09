import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Theme = 'light' | 'dark' | 'system';

interface SettingsState {
  theme: Theme;
  weeklyGoal: number; // days per week
  setTheme: (theme: Theme) => void;
  setWeeklyGoal: (days: number) => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      theme: 'system',
      weeklyGoal: 5,

      setTheme: (theme) => {
        set({ theme });
        applyTheme(theme);
      },

      setWeeklyGoal: (days) => set({ weeklyGoal: Math.max(1, Math.min(7, days)) }),
    }),
    { name: 'spin-settings' }
  )
);

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === 'system') {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    root.classList.toggle('dark', prefersDark);
  } else {
    root.classList.toggle('dark', theme === 'dark');
  }
}

// Initialize theme on load
if (typeof window !== 'undefined') {
  const stored = useSettingsStore.getState().theme;
  applyTheme(stored);

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (useSettingsStore.getState().theme === 'system') {
      applyTheme('system');
    }
  });
}
