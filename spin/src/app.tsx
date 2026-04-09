import { RouterProvider } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { router } from './router';
import { initSync } from './lib/sync';
import './i18n';

// Initialize Firebase (side effect import)
import './lib/firebase';

function LoadingFallback() {
  return (
    <div className="min-h-svh flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-[var(--color-accent)] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export function App() {
  useEffect(() => {
    initSync();
  }, []);

  return (
    <Suspense fallback={<LoadingFallback />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
