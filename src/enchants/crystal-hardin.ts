import { RouterConfigItem } from '../types';

export const crystalHardin: RouterConfigItem = {
  path: '/hardin',
  label: 'Кристалл Хардина',
  config: {
    title: 'Кристалл Хардина',
    chances: [
      [60, 55, 50, 45, 45],
      [40, 35, 30, 25, 35],
      [30, 25, 20, 15, 25],
      [20, 15, 10, 5],
    ],
    mode: 'drop',
    resultMode: 'both',
    type: 'level',
    startIndex: 2,
  },
};
