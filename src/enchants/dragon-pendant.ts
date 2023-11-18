import { RouterConfigItem } from '../types';

export const dragonPendant: RouterConfigItem = {
  path: '/dragon-pendant',
  label: 'Подвеска Дракона',
  config: [
    {
      title: 'Подвеска Дракона Ур. 1',
      chances: [100, 90, 80, 70, 70],
      mode: 'drop',
      resultMode: 'enchants',
      type: 'plus',
      startIndex: 1,
    },
    {
      title: 'Подвеска Дракона Ур. 2',
      chances: [100, 80, 70, 60, 30],
      mode: 'drop',
      resultMode: 'enchants',
      type: 'plus',
      startIndex: 1,
    },
    {
      title: 'Подвеска Дракона Ур. 3',
      chances: [90, 50, 30, 12, 5],
      mode: 'drop',
      resultMode: 'enchants',
      type: 'plus',
      startIndex: 1,
    },
    {
      title: 'Подвеска Дракона Ур. 4',
      chances: [70, 30, 10, 5, 2],
      mode: 'drop',
      resultMode: 'enchants',
      type: 'plus',
      startIndex: 1,
    },
  ],
};
