import { CrystalAden } from './components/crystal-aden';
import { CrystalHardin } from './components/crystal-hardin';
import { DragonBelt } from './components/dragon-belt';
import { GrowthRune } from './components/growth-rune';
import { HeroCrown } from './components/hero-crown';
import { SaihaCloaks } from './components/saiha-cloaks';
import { Stones } from './components/stones';
import { TalismanOfAden } from './components/talisman-of-aden';
import { TalismanOfAuthority } from './components/talisman-of-authority';
import { TalismanOfBenir } from './components/talisman-of-benir';
import { TalismanOfEva } from './components/talisman-of-eva';

type RouterConfigItem = {
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
  { path: '/stones', label: 'Драгоценные Камни', element: <Stones /> },
  { path: '/growth-rune', label: 'Руна Развития', element: <GrowthRune /> },
  { path: '/saiha-cloaks', label: 'Плащи Сайхи', element: <SaihaCloaks /> },
].sort((a, b) => a.label.localeCompare(b.label));
