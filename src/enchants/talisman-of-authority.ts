import { RouterConfigItem } from '../types';

export const talismanOfAuthority: RouterConfigItem = {
  path: '/talisman-of-authority',
  label: 'Талисман Властителя',
  config: {
    title: 'Талисман Властителя',
    chances: [
      [70, 60, 50, 40, 50],
      [60, 50, 40, 30, 50],
      [40, 30, 20, 10, 50],
      [25, 20, 15, 10],
    ],
    mode: 'drop',
    resultMode: 'both',
    type: 'level',
    startIndex: 2,
  },
};
