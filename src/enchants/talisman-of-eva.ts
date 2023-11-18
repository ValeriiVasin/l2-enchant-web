import { RouterConfigItem } from '../types';

export const talismanOfEva: RouterConfigItem = {
  path: '/talisman-of-eva',
  label: 'Талисман Евы',
  config: {
    title: 'Талисман Евы',
    chances: [60, 50, 40, 35, 30, 28, 26, 24, 22, 20],
    mode: 'destroy',
    resultMode: 'items',
    startIndex: 1,
    type: 'plus',
  },
};
