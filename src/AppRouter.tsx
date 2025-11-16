import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/shared/Layout';
import { HomePage } from './features/home/HomePage';
import { LearningModules } from './features/lessons/LearningModules';
import { QuizPage } from './features/lessons/QuizPage';
import { ProgressPage } from './features/progress/ProgressPage';
import { SimulatorPage } from './features/simulator/SimulatorPage';
import { TechniqueExplorer } from './features/techniques/TechniqueExplorer';
import { TechniqueQuizPage } from './features/quiz/TechniqueQuizPage';
import { KnowledgeDashboard } from './features/dashboard/KnowledgeDashboard';
import { DiscoverFeed } from './components/discover/DiscoverFeed';

export function AppRouter() {
  return (
    <Routes>
      {/* Immersive full-screen route without layout */}
      <Route path="/discover" element={<DiscoverFeed />} />

      {/* Standard routes with layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="modules" element={<LearningModules />} />
        <Route path="modules/:moduleId" element={<QuizPage />} />
        <Route path="progress" element={<ProgressPage />} />
        <Route path="simulator" element={<SimulatorPage />} />
        <Route path="techniques" element={<TechniqueExplorer />} />
        <Route path="quiz" element={<TechniqueQuizPage />} />
        <Route path="dashboard" element={<KnowledgeDashboard />} />
      </Route>
    </Routes>
  );
}
