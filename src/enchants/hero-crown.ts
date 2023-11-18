import { RouterConfigItem } from '../types';

export const heroCrown: RouterConfigItem = {
  path: '/hero-crown',
  label: 'Венец Героя',
  config: {
    title: 'Венец Героя',
    chances: [60, 50, 40, 35, 30, 28, 26, 24, 22, 20],
    mode: 'destroy',
    resultMode: 'items',
    type: 'plus',
    startIndex: 1,
  },
};
