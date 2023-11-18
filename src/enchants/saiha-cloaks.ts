import { RouterConfigItem } from '../types';

export const saihaCloaks: RouterConfigItem = {
  path: '/saiha-cloaks',
  label: 'Плащи Сайхи',
  config: [
    {
      title: 'Плащ Сайхи (Сверкающий Свиток)',
      chances: [95, 85, 75, 60, 55, 40, 30, 20],
      mode: 'safe',
      resultMode: 'enchants',
      type: 'plus',
      startIndex: 1,
    },
    {
      title: 'Плащ Сайхи (Блестящий Свиток)',
      chances: [10, 1],
      mode: 'safe',
      resultMode: 'enchants',
      type: 'plus',
      startIndex: 9,
    },
    {
      title: 'Специальный Плащ Сайхи',
      chances: [70, 60, 50, 40, 30, 20, 10, 5, 3, 2],
      mode: 'safe',
      resultMode: 'enchants',
      type: 'plus',
      startIndex: 1,
    },
  ],
};
