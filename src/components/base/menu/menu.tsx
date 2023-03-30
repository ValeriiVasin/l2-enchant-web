import { routerConfig } from '../../../router-config';
import { MenuItem } from './menu-item';

export function Menu() {
  return (
    <div className="pure-menu">
      <ul className="pure-menu-list">
        {routerConfig.map((item) => (
          <MenuItem key={item.path} pathname={item.path}>
            {item.label}
          </MenuItem>
        ))}
      </ul>
    </div>
  );
}
