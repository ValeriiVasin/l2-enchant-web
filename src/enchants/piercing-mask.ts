import { RouterConfigItem } from '../types';

export const piercingMask: RouterConfigItem = {
  path: '/piercing-mask',
  label: 'Маска Пронзания',
  config: {
    title: 'Маска Пронзания',
    chances: [60, 50, 40, 35, 30, 28, 26, 24, 22, 20],
    mode: 'destroy',
    resultMode: 'items',
    type: 'plus',
    startIndex: 1,
  },
};
