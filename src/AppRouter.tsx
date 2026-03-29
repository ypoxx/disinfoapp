import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/shared/Layout';

// Lazy load all pages for code splitting
const HomePage = lazy(() =>
  import('./features/home/HomePage').then((m) => ({ default: m.HomePage }))
);
const LearningModules = lazy(() =>
  import('./features/lessons/LearningModules').then((m) => ({ default: m.LearningModules }))
);
const QuizPage = lazy(() =>
  import('./features/lessons/QuizPage').then((m) => ({ default: m.QuizPage }))
);
const ProgressPage = lazy(() =>
  import('./features/progress/ProgressPage').then((m) => ({ default: m.ProgressPage }))
);
const SimulatorPage = lazy(() =>
  import('./features/simulator/SimulatorPage').then((m) => ({ default: m.SimulatorPage }))
);
const TechniqueExplorer = lazy(() =>
  import('./features/techniques/TechniqueExplorer').then((m) => ({ default: m.TechniqueExplorer }))
);
const TechniqueQuizPage = lazy(() =>
  import('./features/quiz/TechniqueQuizPage').then((m) => ({ default: m.TechniqueQuizPage }))
);
const KnowledgeDashboard = lazy(() =>
  import('./features/dashboard/KnowledgeDashboard').then((m) => ({ default: m.KnowledgeDashboard }))
);
const DiscoverFeed = lazy(() =>
  import('./components/discover/DiscoverFeed').then((m) => ({ default: m.DiscoverFeed }))
);

function PageLoader() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
    </div>
  );
}

export function AppRouter() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* All routes within Layout (header + footer + bottom nav) */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/discover" element={<DiscoverFeed />} />
          <Route path="/modules" element={<LearningModules />} />
          <Route path="/modules/:moduleId" element={<QuizPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/simulator" element={<SimulatorPage />} />
          <Route path="/techniques" element={<TechniqueExplorer />} />
          <Route path="/quiz" element={<TechniqueQuizPage />} />
          <Route path="/dashboard" element={<KnowledgeDashboard />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
