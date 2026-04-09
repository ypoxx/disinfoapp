import { Outlet } from 'react-router-dom';
import { BottomNav } from '../components/bottom-nav';

export function AppShell() {
  return (
    <div className="flex flex-col min-h-svh">
      {/* Main content with bottom padding for mobile nav */}
      <main className="flex-1 pb-16 md:pb-0">
        <div className="max-w-2xl mx-auto px-4 py-4 md:py-8">
          <Outlet />
        </div>
      </main>

      {/* Bottom navigation (mobile only) */}
      <BottomNav />
    </div>
  );
}
