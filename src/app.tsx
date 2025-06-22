import { Outlet } from 'react-router-dom';
import { Menu } from './components/base/menu/menu';

export function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-4 sticky top-4">
              <h1 className="text-2xl font-bold mb-6 text-primary">
                L2 Enchant
              </h1>
              <Menu />
            </div>
          </div>
          <div className="w-full md:w-3/4">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
