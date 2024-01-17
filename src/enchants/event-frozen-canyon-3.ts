import { RouterConfigItem } from '../types';

// https://l2central.info/classic/events_and_promos/2319.html?lang=ru
export const eventFronzenCanyon3: RouterConfigItem = {
  path: '/event-frozen-canyon-3',
  enabled: {
    fromDate: new Date('2024-01-17T10:00:00.00+03:00'),
    toDate: new Date('2024-01-31T10:00:00.00+03:00'),
  },
  label: 'Ивент: Замерзший Каньон 3.0',
  config: {
    title: 'Кукла-снеговик',
    chances: [7, 6, 5, 4, 3, 2, 1, 0.5, 0.25, 0.05, 0.04, 0.02, 0.01, 0.01],
    mode: 'safe',
    resultMode: 'enchants',
    type: 'level',
    startIndex: 2,
  },
};
