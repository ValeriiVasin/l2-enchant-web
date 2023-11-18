import { RouterConfigItem } from '../types';

export const stones: RouterConfigItem = {
  path: '/stones',
  label: 'Драгоценные Камни',
  config: [
    {
      title: 'Большие Камни',
      chances: [35, 25, 15, 10],
      mode: 'drop',
      resultMode: 'enchants',
      type: 'level',
      startIndex: 2,
    },
    {
      title: 'Исключительные Камни',
      chances: [30, 30, 20, 10],
      mode: 'drop',
      resultMode: 'enchants',
      type: 'level',
      startIndex: 2,
    },
  ],
};
