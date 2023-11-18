import { agathions } from './enchants/agathions';
import { PageContent } from './components/base/page-content';
import { DimensionalTalisman } from './components/dimensional-talisman';
import { HeroCrown } from './components/hero-crown';
import { HunterEarring } from './components/hunter-earring';
import { SaihaCloaks } from './components/saiha-cloaks';
import { Symbols } from './components/symbols';
import { TalismanOfAden } from './components/talisman-of-aden';
import { RouterConfigItem } from './types';
import { eventFronzenCanyon } from './enchants/event-frozen-canyon';
import { clanCloak } from './enchants/clan-cloak';
import { stones } from './enchants/stones';
import { crystalAden } from './enchants/crystal-aden';
import { crystalHardin } from './enchants/crystal-hardin';
import { talismanOfEva } from './enchants/talisman-of-eva';
import { talismanOfBenir } from './enchants/talisman-of-benir';
import { growthRune } from './enchants/growth-rune';
import { dragonPendant } from './enchants/dragon-pendant';
import { talismanOfMagmeld } from './enchants/talisman-of-magmeld';
import { talismanOfAuthority } from './enchants/talisman-of-authority';
import { dragonBelt } from './enchants/dragon-belt';

type Route = {
  path: string;
  label: string;
  element: JSX.Element;
};

export const routerConfig = [
  ...createRouterConfig([
    agathions,
    eventFronzenCanyon,
    clanCloak,
    stones,
    crystalAden,
    crystalHardin,
    talismanOfEva,
    talismanOfBenir,
    growthRune,
    dragonPendant,
    talismanOfMagmeld,
    talismanOfAuthority,
    dragonBelt,
  ]),
  {
    path: '/talisman-of-aden',
    label: 'Талисман Адена',
    element: <TalismanOfAden />,
  },
  { path: '/hero-crown', label: 'Венец Героя', element: <HeroCrown /> },
  { path: '/saiha-cloaks', label: 'Плащи Сайхи', element: <SaihaCloaks /> },
  { path: '/symbols', label: 'Узоры', element: <Symbols /> },
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
