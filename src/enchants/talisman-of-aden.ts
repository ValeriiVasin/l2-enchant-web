import { RouterConfigItem } from '../types';

export const talismanOfAden: RouterConfigItem = {
  path: '/talisman-of-aden',
  label: 'Талисман Адена',
  config: {
    title: 'Талисман Адена',
    chances: [80, 70, 60, 40, 30, 24, 16, 10, 10],
    mode: 'destroy',
    resultMode: 'items',
    type: 'plus',
    startIndex: 2,
  },
};
