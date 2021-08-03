import { lazy } from 'react';
import {
  FiHome,
  FiBook,
  FiList,
  FiLayers,
  FiUser,
  FiClock,
  FiCalendar,
  FiPenTool,
  FiStar,
} from 'react-icons/fi';

export const ProtectedRoutes = [
  {
    name: 'Home',
    breadcrumb: 'Home',
    icon: FiHome,
    path: '/',
    component: lazy(() => import('./pages/Home')),
    isShowNav: true,
    exact: true,
  },
  // Examples
  {
    name: 'Example',
    breadcrumb: 'Example',
    icon: FiStar,
    path: '/example',
    component: lazy(() => import('./modules/examples/ExampleContainer')),
    isShowNav: true,
    exact: false,
  },
  // Tim Manajemen Mapel
  {
    name: 'Mata Pelajaran',
    breadcrumb: 'Mata Pelajaran',
    icon: FiBook,
    path: '/mata-pelajaran',
    component: lazy(() => import('./modules/examples/ExampleContainer')),
    isShowNav: true,
    exact: false,
  },
  {
    name: 'Level',
    breadcrumb: 'Level',
    icon: FiList,
    path: '/level',
    component: lazy(() => import('./modules/examples/ExampleContainer')),
    isShowNav: true,
    exact: false,
  },
  // Tim Manajemen Kelas
  {
    name: 'Kelas',
    breadcrumb: 'Kelas',
    icon: FiLayers,
    path: '/kelas',
    component: lazy(() => import('./modules/examples/ExampleContainer')),
    isShowNav: true,
    exact: false,
  },
  {
    name: 'Siswa',
    breadcrumb: 'Siswa',
    icon: FiUser,
    path: '/siswa',
    component: lazy(() => import('./modules/examples/ExampleContainer')),
    isShowNav: true,
    exact: false,
  },
  {
    name: 'Tahun Ajaran',
    breadcrumb: 'Tahun Ajaran',
    icon: FiClock,
    path: '/tahun-ajaran',
    component: lazy(() => import('./modules/examples/ExampleContainer')),
    isShowNav: true,
    exact: false,
  },
  // Tim Manajemen Jadwal
  {
    name: 'Jadwal Kelas',
    breadcrumb: 'Jadwal Kelas',
    icon: FiCalendar,
    path: '/jadwal-kelas',
    component: lazy(() => import('./modules/examples/ExampleContainer')),
    isShowNav: true,
    exact: false,
  },
  // Tim Manajemen Jadwal Ujian
  {
    name: 'Jadwal Ujian',
    breadcrumb: 'Jadwal Ujian',
    icon: FiPenTool,
    path: '/jadwal-ujian',
    component: lazy(() => import('./modules/examples/ExampleContainer')),
    isShowNav: true,
    exact: false,
  },
];
