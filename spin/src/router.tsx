import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { AppShell } from './design/layouts/app-shell';
import { TodayPage } from './features/today/today-page';
import { PracticePage } from './features/practice/practice-page';
import { SeziertischPage } from './features/practice/seziertisch';
import { ProfilePage } from './features/profile/profile-page';

// Lazy load heavier pages
const LibraryPage = lazy(() => import('./features/library/library-page').then(m => ({ default: m.LibraryPage })));
const TechniqueDetailPage = lazy(() => import('./features/library/technique-detail').then(m => ({ default: m.TechniqueDetailPage })));

function LazyWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center py-12">
        <div className="w-6 h-6 border-2 border-[var(--color-accent)] border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      {children}
    </Suspense>
  );
}

export const router = createBrowserRouter([
  {
    element: <AppShell />,
    children: [
      { path: '/', element: <TodayPage /> },
      { path: '/practice', element: <PracticePage /> },
      { path: '/seziertisch', element: <SeziertischPage /> },
      { path: '/library', element: <LazyWrapper><LibraryPage /></LazyWrapper> },
      { path: '/library/:techniqueId', element: <LazyWrapper><TechniqueDetailPage /></LazyWrapper> },
      { path: '/profile', element: <ProfilePage /> },
    ],
  },
]);
