import { RouterConfigItem } from '../types';

const chances = [90, 80, 70, 30, 5, 20, 20, 20, 20, 20];

export const talismanOfBaium: RouterConfigItem = {
  path: '/talisman-of-baium',
  label: 'Талисман Баюма',
  config: [
    {
      title: 'Талисман Баюма',
      chances,
      mode: 'destroy',
      resultMode: 'items',
      type: 'plus',
      startIndex: 1,
    },
    {
      title: 'Свиток: Модифицировать Талисман Баюма',
      chances,
      mode: 'destroy',
      resultMode: 'enchants',
      type: 'plus',
      startIndex: 1,
    },
  ],
};
