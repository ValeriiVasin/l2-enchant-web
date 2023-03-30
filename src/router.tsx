import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { App } from './app';

import { routerConfig } from './router-config';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: routerConfig,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
