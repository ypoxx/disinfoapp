import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { AppRouter } from './AppRouter';
import { useAchievementStore } from './stores/achievementStore';
import { useChallengeStore } from './stores/challengeStore';
import { AchievementNotification } from './components/gamification/AchievementNotification';
import { WelcomeModal } from './components/onboarding/WelcomeModal';
import { ErrorBoundary } from './components/shared/ErrorBoundary';

function App() {
  const { initializeAchievements, recentlyUnlocked, clearNotification } = useAchievementStore();
  const { generateDailyChallenge } = useChallengeStore();

  useEffect(() => {
    initializeAchievements();
    generateDailyChallenge();
  }, [initializeAchievements, generateDailyChallenge]);

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AppRouter />
        <AchievementNotification
          achievement={recentlyUnlocked}
          onClose={clearNotification}
        />
        <WelcomeModal />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
