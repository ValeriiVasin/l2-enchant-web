import { RouterConfigItem } from '../types';

const chances = [85, 80, 75, 60, 50, 40, 30, 20, 15, 7];

export const clanCloak: RouterConfigItem = {
  path: '/clan-cloak',
  label: 'Плащ Клана',
  config: [
    {
      title: 'Плащ Клана (Плащи)',
      chances,
      mode: 'destroy',
      resultMode: 'items',
      startIndex: 1,
      type: 'plus',
    },
    {
      title: 'Плащ Клана (Заточки)',
      chances,
      mode: 'destroy',
      resultMode: 'enchants',
      startIndex: 1,
      type: 'plus',
    },
  ],
};
