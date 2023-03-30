import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { App } from './app';
import { CrystalAden } from './components/crystal-aden';
import { CrystalHardin } from './components/crystal-hardin';
import { DragonBelt } from './components/dragon-belt';
import { TalismanOfAden } from './components/talisman-of-aden';
import { TalismanOfAuthority } from './components/talisman-of-authority';
import { TalismanOfBenir } from './components/talisman-of-benir';
import { Stones } from './components/stones';
import { GrowthRune } from './components/growth-rune';
import { SaihaCloaks } from './components/saiha-cloaks';
import { TalismanOfEva } from './components/talisman-of-eva';
import { HeroCrown } from './components/hero-crown';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/dragon', element: <DragonBelt /> },
      { path: '/aden', element: <CrystalAden /> },
      { path: '/hardin', element: <CrystalHardin /> },
      { path: '/talisman-of-aden', element: <TalismanOfAden /> },
      { path: '/talisman-of-eva', element: <TalismanOfEva /> },
      { path: '/talisman-of-authority', element: <TalismanOfAuthority /> },
      { path: '/hero-crown', element: <HeroCrown /> },
      { path: '/talisman-of-benir', element: <TalismanOfBenir /> },
      { path: '/stones', element: <Stones /> },
      { path: '/growth-rune', element: <GrowthRune /> },
      { path: '/saiha-cloaks', element: <SaihaCloaks /> },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
