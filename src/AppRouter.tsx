import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/shared/Layout';
import { HomePage } from './features/home/HomePage';
import { LearningModules } from './features/lessons/LearningModules';
import { QuizPage } from './features/lessons/QuizPage';
import { ProgressPage } from './features/progress/ProgressPage';
import { SimulatorPage } from './features/simulator/SimulatorPage';
import { TechniqueExplorer } from './features/techniques/TechniqueExplorer';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="modules" element={<LearningModules />} />
        <Route path="modules/:moduleId" element={<QuizPage />} />
        <Route path="progress" element={<ProgressPage />} />
        <Route path="simulator" element={<SimulatorPage />} />
        <Route path="techniques" element={<TechniqueExplorer />} />
      </Route>
    </Routes>
  );
}
