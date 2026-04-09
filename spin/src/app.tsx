import { RouterProvider } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import { router } from './router';
import { initSync } from './lib/sync';
import { OnboardingFlow } from './features/onboarding/onboarding-flow';
import './i18n';

// Initialize Firebase (side effect import)
import './lib/firebase';

const ONBOARDING_KEY = 'spin-onboarded';

function LoadingFallback() {
  return (
    <div className="min-h-svh flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-[var(--color-accent)] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export function App() {
  const [onboarded, setOnboarded] = useState(() =>
    localStorage.getItem(ONBOARDING_KEY) === 'true'
  );

  useEffect(() => {
    initSync();
  }, []);

  const handleOnboardingComplete = () => {
    localStorage.setItem(ONBOARDING_KEY, 'true');
    setOnboarded(true);
  };

  if (!onboarded) {
    return <OnboardingFlow onComplete={handleOnboardingComplete} />;
  }

  return (
    <Suspense fallback={<LoadingFallback />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
