import { agathions } from './enchants/agathions';
import { PageContent } from './components/base/page-content';

import { CrystalAden } from './components/crystal-aden';
import { CrystalHardin } from './components/crystal-hardin';
import { DimensionalTalisman } from './components/dimensional-talisman';
import { DragonBelt } from './components/dragon-belt';
import { DragonPendant } from './components/dragon-pendant';
import { GrowthRune } from './components/growth-rune';
import { HeroCrown } from './components/hero-crown';
import { HunterEarring } from './components/hunter-earring';
import { SaihaCloaks } from './components/saiha-cloaks';
import { Stones } from './components/stones';
import { Symbols } from './components/symbols';
import { TalismanOfAden } from './components/talisman-of-aden';
import { TalismanOfAuthority } from './components/talisman-of-authority';
import { TalismanOfBenir } from './components/talisman-of-benir';
import { TalismanOfEva } from './components/talisman-of-eva';
import { TalismanOfMagmeld } from './components/talisman-of-magmeld';
import { RouterConfigItem } from './types';
import { eventFronzenCanyon } from './enchants/event-frozen-canyon';
import { clanCloak } from './enchants/clan-cloak';

type Route = {
  path: string;
  label: string;
  element: JSX.Element;
};

export const routerConfig = [
  ...createRouterConfig([agathions, eventFronzenCanyon, clanCloak]),
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
    path: '/hunter-earring',
    label: 'Серьга Охотника',
    element: <HunterEarring />,
  },
].sort((a, b) => a.label.localeCompare(b.label));

function isNavItemEnabled(condition: RouterConfigItem['enabled']): boolean {
  if (typeof condition === 'undefined') {
    return true;
  }

  if (typeof condition === 'boolean') {
    return condition;
  }

  const now = Date.now();
  return now > condition.fromDate.getTime() && now < condition.toDate.getTime();
}

function toRoute(item: RouterConfigItem): Route | null {
  if (!isNavItemEnabled(item.enabled)) {
    return null;
  }

  const { path, label, config } = item;

  return { path, label, element: <PageContent config={config} /> };
}

function createRouterConfig(items: Array<RouterConfigItem>): Array<Route> {
  return items
    .map(toRoute)
    .filter((item): item is Route => item !== null)
    .sort((a, b) => a.label.localeCompare(b.label));
}
