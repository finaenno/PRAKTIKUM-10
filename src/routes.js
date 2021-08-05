import { lazy } from 'react';
import { FiHome, FiStar } from 'react-icons/fi';

export const ProtectedRoutes = [
  {
    name: 'Home',
    icon: FiHome,
    path: '/',
    component: lazy(() => import('./pages/Home')),
    isShowNav: true,
    exact: true,
  },
  // Examples
  {
    name: 'Example',
    icon: FiStar,
    path: '/example',
    component: lazy(() => import('./modules/examples/ExampleContainer')),
    isShowNav: true,
    exact: false,
  },
];
