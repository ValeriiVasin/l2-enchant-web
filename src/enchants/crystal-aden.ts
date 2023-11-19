import { RouterConfigItem } from '../types';

export const crystalAden: RouterConfigItem = {
  path: '/aden',
  label: 'Кристалл Адена',
  config: [
    {
      title: 'Кристалл Адена - Оружие',
      chances: [
        [70, 60, 50, 40, 60],
        [55, 50, 45, 40, 50],
        [45, 40, 35, 30, 30],
        [25, 20, 15, 10],
      ],
      mode: 'drop',
      resultMode: 'both',
      type: 'level',
      startIndex: 2,
    },
    {
      title: 'Кристалл Адена - Броня',
      chances: [
        [70, 60, 50, 40, 30],
        [55, 50, 45, 40, 30],
        [45, 40, 35, 30, 30],
        [25, 20, 15, 10],
      ],
      mode: 'drop',
      resultMode: 'both',
      type: 'level',
      startIndex: 2,
    },
  ],
};
