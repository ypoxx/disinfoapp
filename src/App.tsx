import { BrowserRouter, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AppRouter } from './AppRouter';
import { useAchievementStore } from './stores/achievementStore';
import { useChallengeStore } from './stores/challengeStore';
import { AchievementNotification } from './components/gamification/AchievementNotification';
import { WelcomeModal } from './components/onboarding/WelcomeModal';
import { FeatureTour } from './components/onboarding/FeatureTour';

/**
 * Dashboard-only components wrapper
 * Only renders onboarding/gamification overlays when on /dashboard routes
 */
function DashboardOverlays() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');
  const { recentlyUnlocked, clearNotification } = useAchievementStore();

  // Only show onboarding and achievements on dashboard
  if (!isDashboard) return null;

  return (
    <>
      <AchievementNotification
        achievement={recentlyUnlocked}
        onClose={clearNotification}
      />
      <WelcomeModal />
      <FeatureTour />
    </>
  );
}

function App() {
  const { initializeAchievements } = useAchievementStore();
  const { generateDailyChallenge } = useChallengeStore();

  useEffect(() => {
    // Initialize achievements on app start
    initializeAchievements();
    // Generate daily challenge
    generateDailyChallenge();
  }, [initializeAchievements, generateDailyChallenge]);

  return (
    <BrowserRouter>
      <AppRouter />
      <DashboardOverlays />
    </BrowserRouter>
  );
}

export default App;
