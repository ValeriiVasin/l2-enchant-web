import { Outlet } from 'react-router-dom';
import { Menu } from './components/base/menu/menu';
import { useEffect } from 'react';

export function App() {
  useEffect(() => {
    const isSystemDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    document.documentElement.classList.toggle('dark', isSystemDarkMode);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 sticky top-4">
              <Menu />
            </div>
          </div>
          <div className="w-full md:w-3/4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
