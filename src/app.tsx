import { Outlet } from 'react-router-dom';
import { Menu } from './components/base/menu/menu';

export function App() {
  return (
    <div className="pure-g">
      <div>
        <Menu />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
