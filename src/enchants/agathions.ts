import { RouterConfigItem } from '../types';

export const agathions: RouterConfigItem = {
  path: '/agathions',
  label: 'Агатионы',
  config: {
    title: 'Агатион Яйцо Дракона',
    chances: [100, 100, 100, 65, 50, 35, 24, 18, 14, 8],
    mode: 'destroy',
    resultMode: 'items',
    type: 'plus',
    startIndex: 1,
  },
};
