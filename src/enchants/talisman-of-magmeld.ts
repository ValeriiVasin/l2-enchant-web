import { RouterConfigItem } from '../types';

export const talismanOfMagmeld: RouterConfigItem = {
  path: '/talisman-of-magmeld',
  label: 'Талисман Магмельда',
  config: {
    title: 'Талисман Магмельда',
    chances: [
      [60, 55, 50, 40, 50],
      [45, 40, 35, 30, 50, 45],
      [40, 40, 35, 30, 25, 50],
      [35, 30, 25, 20, 15, 50],
      [35, 25, 20, 15, 10, 30],
    ],
    mode: 'drop',
    resultMode: 'enchants',
    type: 'level',
    startIndex: 2,
  },
};
