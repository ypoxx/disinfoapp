import { createBrowserRouter } from 'react-router-dom';
import { AppShell } from './design/layouts/app-shell';
import { TodayPage } from './features/today/today-page';
import { PracticePage } from './features/practice/practice-page';
import { LibraryPage } from './features/library/library-page';
import { TechniqueDetailPage } from './features/library/technique-detail';
import { ProfilePage } from './features/profile/profile-page';

export const router = createBrowserRouter([
  {
    element: <AppShell />,
    children: [
      { path: '/', element: <TodayPage /> },
      { path: '/practice', element: <PracticePage /> },
      { path: '/library', element: <LibraryPage /> },
      { path: '/library/:techniqueId', element: <TechniqueDetailPage /> },
      { path: '/profile', element: <ProfilePage /> },
    ],
  },
]);
