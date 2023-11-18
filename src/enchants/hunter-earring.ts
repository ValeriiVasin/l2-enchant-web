import { RouterConfigItem } from '../types';

export const hunterEarring: RouterConfigItem = {
  path: '/hunter-earring',
  label: 'Серьга Охотника',
  config: {
    title: 'Серьга Охотника',
    chances: [90, 80, 69, 58, 45, 28, 26, 24, 22, 20],
    mode: 'destroy',
    resultMode: 'items',
    type: 'plus',
    startIndex: 1,
  },
};
