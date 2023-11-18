import { RouterConfigItem } from '../types';

export const talismanOfBenir: RouterConfigItem = {
  path: '/talisman-of-benir',
  label: 'Талисман Бенира',
  config: {
    title: 'Талисман Бенира',
    chances: [
      [50, 45, 40, 35, 50],
      [45, 40, 35, 30, 25, 50],
      [35, 30, 25, 20, 15, 50],
      [35, 30, 25, 20, 15, 50],
    ],
    mode: 'drop',
    resultMode: 'enchants',
    type: 'level',
    startIndex: 2,
  },
};
