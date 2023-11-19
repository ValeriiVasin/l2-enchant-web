import { RouterConfigItem } from '../types';

// https://l2central.info/classic/events_and_promos/2092.html?lang=ru
export const eventFronzenCanyon: RouterConfigItem = {
  path: '/event-frozen-canyon',
  enabled: {
    fromDate: new Date('2023-09-20T10:00:00.00+03:00'),
    toDate: new Date('2023-10-04T10:00:00.00+03:00'),
  },
  label: 'Ивент: Замерзший Каньон',
  config: {
    title: 'Кукла-снеговик',
    chances: [8, 7, 6, 5, 4, 2, 1.3, 1, 0.3, 0.07, 0.04, 0.04, 0.03, 0.01],
    mode: 'safe',
    resultMode: 'enchants',
    type: 'level',
    startIndex: 2,
  },
};
