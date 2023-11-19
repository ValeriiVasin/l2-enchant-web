import { RouterConfigItem } from '../types';

export const tantar: RouterConfigItem = {
  path: '/tantar',
  label: 'Свиток Провидца',
  config: {
    title: 'Свиток Провидца',
    chances: [100, 90, 80, 70, 60, 50, 45, 40, 40],
    mode: 'double-drop',
    // enchants would contain amount of attempts we would spend for enchanting
    // and can be used to calculate the price
    resultMode: 'items',
    type: 'level',
    startIndex: 2,
  },
};
