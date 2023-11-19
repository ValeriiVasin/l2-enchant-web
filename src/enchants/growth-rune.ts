import { RouterConfigItem } from '../types';

export const growthRune: RouterConfigItem = {
  path: '/growth-rune',
  label: 'Руна Развития',
  config: {
    title: 'Руна Развития',
    chances: [
      [70, 60, 50, 40, 30],
      [50, 40, 30, 20, 20],
      [30, 20, 15, 10, 25],
      [20, 15, 10, 5],
    ],
    mode: 'drop',
    resultMode: 'both',
    type: 'level',
    startIndex: 2,
  },
};
