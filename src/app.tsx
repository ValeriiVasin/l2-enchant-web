import { Outlet } from 'react-router-dom';
import { Menu } from './components/base/menu/menu';

export function App() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/4 p-4">
        <Menu />
      </div>
      <div className="w-full md:w-3/4 p-4">
        <Outlet />
      </div>
    </div>
  );
}
