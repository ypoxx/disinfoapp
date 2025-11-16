import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { AppRouter } from './AppRouter';
import { useAchievementStore } from './stores/achievementStore';
import { useChallengeStore } from './stores/challengeStore';
import { AchievementNotification } from './components/gamification/AchievementNotification';

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
    <BrowserRouter>
      <AppRouter />
      <AchievementNotification
        achievement={recentlyUnlocked}
        onClose={clearNotification}
      />
    </BrowserRouter>
  );
}

export default App;
