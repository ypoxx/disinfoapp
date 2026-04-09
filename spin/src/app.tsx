import { RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';
import { router } from './router';
import './i18n';

function LoadingFallback() {
  return (
    <div className="min-h-svh flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-[var(--color-accent)] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
