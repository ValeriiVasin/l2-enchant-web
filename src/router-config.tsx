import { Agathions } from './components/agathions';
import { ClanCloak } from './components/clan-cloak';
import { CrystalAden } from './components/crystal-aden';
import { CrystalHardin } from './components/crystal-hardin';
import { DimensionalTalisman } from './components/dimensional-talisman';
import { DragonBelt } from './components/dragon-belt';
import { DragonPendant } from './components/dragon-pendant';
import { EventFrozenCanyon } from './components/event-frozen-canyon';
import { GrowthRune } from './components/growth-rune';
import { HeroCrown } from './components/hero-crown';
import { SaihaCloaks } from './components/saiha-cloaks';
import { Stones } from './components/stones';
import { Symbols } from './components/symbols';
import { TalismanOfAden } from './components/talisman-of-aden';
import { TalismanOfAuthority } from './components/talisman-of-authority';
import { TalismanOfBenir } from './components/talisman-of-benir';
import { TalismanOfEva } from './components/talisman-of-eva';
import { TalismanOfMagmeld } from './components/talisman-of-magmeld';

type RouterConfigItem = {
  // control item presence
  // `toDate` should always be next day after event end date
  enabled?: boolean | { fromDate: Date; toDate: Date };
  label: string;
  path: string;
  element: JSX.Element;
};

export const routerConfig: Array<RouterConfigItem> = [
  { path: '/dragon', label: 'Пояс Дракона', element: <DragonBelt /> },
  {
    path: '/aden',
    label: 'Кристалл Адена',
    element: <CrystalAden />,
  },
  { path: '/hardin', label: 'Кристалл Хардина', element: <CrystalHardin /> },
  {
    path: '/talisman-of-aden',
    label: 'Талисман Адена',
    element: <TalismanOfAden />,
  },
  {
    path: '/talisman-of-eva',
    label: 'Талисман Евы',
    element: <TalismanOfEva />,
  },
  {
    path: '/talisman-of-authority',
    label: 'Талисман Властителя',
    element: <TalismanOfAuthority />,
  },
  { path: '/hero-crown', label: 'Венец Героя', element: <HeroCrown /> },
  {
    path: '/talisman-of-benir',
    label: 'Талисман Бенира',
    element: <TalismanOfBenir />,
  },
  {
    path: '/talisman-of-magmeld',
    label: 'Талисман Магмельда',
    element: <TalismanOfMagmeld />,
  },
  { path: '/stones', label: 'Драгоценные Камни', element: <Stones /> },
  { path: '/growth-rune', label: 'Руна Развития', element: <GrowthRune /> },
  { path: '/saiha-cloaks', label: 'Плащи Сайхи', element: <SaihaCloaks /> },
  { path: '/symbols', label: 'Узоры', element: <Symbols /> },
  { path: '/agathions', label: 'Агатионы', element: <Agathions /> },
  {
    path: '/dragon-pendant',
    label: 'Подвеска Дракона',
    element: <DragonPendant />,
  },
  {
    path: '/dimensional-talisman',
    label: 'Талисман Иного Измерения',
    element: <DimensionalTalisman />,
  },
  {
    path: '/clan-cloak',
    label: 'Плащ Клана',
    element: <ClanCloak />,
  },
  {
    path: '/event-frozen-canyon',
    enabled: {
      fromDate: new Date('2023-09-20T10:00:00.00+03:00'),
      toDate: new Date('2023-10-04T10:00:00.00+03:00'),
    },
    label: 'Ивент: Замерзший Каньон',
    element: <EventFrozenCanyon />,
  },
]
  .filter(isNavItemEnabled)
  .sort((a, b) => a.label.localeCompare(b.label));

function isNavItemEnabled(item: RouterConfigItem): boolean {
  if (typeof item.enabled === 'undefined') {
    return true;
  }

  if (typeof item.enabled === 'boolean') {
    return item.enabled;
  }

  const now = Date.now();
  return now > item.enabled.fromDate.getTime();
}
