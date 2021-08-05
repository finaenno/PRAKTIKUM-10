import { lazy } from 'react';
import { FaHome, FaStar } from 'react-icons/fa';

export const ProtectedRoutes = [
  {
    name: 'Home',
    icon: FaHome,
    path: '/',
    component: lazy(() => import('./pages/Home')),
    isShowNav: true,
    exact: true,
  },
  // Examples
  {
    name: 'Example',
    icon: FaStar,
    path: '/example',
    component: lazy(() => import('./modules/examples/ExampleContainer')),
    isShowNav: true,
    exact: false,
  },
];
