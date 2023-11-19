import { RouterConfigItem } from '../types';

export const symbols: RouterConfigItem = {
  path: '/symbols',
  label: 'Узоры',
  config: [
    {
      title: 'Красящий Порошок',
      chances: [50, 25, 20, 15, 10, 8, 6, 5, 5, 5, 5],
      mode: 'safe',
      resultMode: 'enchants',
      type: 'level',
      startIndex: 1,
    },
    {
      title: 'Улучшенный Красящий Порошок',
      chances: [10, 8, 6, 5, 4, 3, 2, 1.5, 0.5],
      mode: 'safe',
      resultMode: 'enchants',
      type: 'level',
      startIndex: 12,
    },
  ],
};
