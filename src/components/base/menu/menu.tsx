import { routerConfig } from '@/router-config';
import { MenuItem } from './menu-item';

export function Menu() {
  return (
    <div className="mb-4">
      <ul className="space-y-0.5">
        {routerConfig.map(
          (item) =>
            item && (
              <MenuItem key={item.path} pathname={item.path}>
                {item.label}
              </MenuItem>
            ),
        )}
      </ul>
    </div>
  );
}
