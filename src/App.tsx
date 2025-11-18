import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { AppRouter } from './AppRouter';
import { useAchievementStore } from './stores/achievementStore';
import { useChallengeStore } from './stores/challengeStore';
import { AchievementNotification } from './components/gamification/AchievementNotification';
import { WelcomeModal } from './components/onboarding/WelcomeModal';
import { FeatureTour } from './components/onboarding/FeatureTour';

function App() {
  const { initializeAchievements, recentlyUnlocked, clearNotification } = useAchievementStore();
  const { generateDailyChallenge } = useChallengeStore();

  useEffect(() => {
    // Initialize achievements on app start
    initializeAchievements();
    // Generate daily challenge
    generateDailyChallenge();
  }, [initializeAchievements, generateDailyChallenge]);

  return (
    <BrowserRouter basename="/disinfoapp">
      <AppRouter />
      <AchievementNotification
        achievement={recentlyUnlocked}
        onClose={clearNotification}
      />
      <WelcomeModal />
      <FeatureTour />
    </BrowserRouter>
  );
}

export default App;
