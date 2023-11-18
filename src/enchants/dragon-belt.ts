import { RouterConfigItem } from '../types';

export const dragonBelt: RouterConfigItem = {
  path: '/dragon',
  label: 'Пояс Дракона',
  config: {
    title: 'Пояс Дракона',
    chances: [95, 90, 85, 55, 50, 40, 33, 30, 25, 15],
    mode: 'destroy',
    resultMode: 'items',
    type: 'plus',
    startIndex: 1,
  },
};
