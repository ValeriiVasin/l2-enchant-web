import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

import { App } from './app';

import { routerConfig } from './router-config';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Navigate to={routerConfig[0].path} />,
      },
      ...routerConfig,
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
