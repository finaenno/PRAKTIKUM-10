import {
  FiHome,
  FiBook,
  FiList,
  FiLayers,
  FiUser,
  FiClock,
  FiCalendar,
  FiPenTool,
} from 'react-icons/fi';

import ExampleListPage from './pages/ExampleListPage';
import Home from './pages/Home';

export const ProtectedRoutes = [
  {
    name: 'Home',
    breadcrumb: 'Home',
    icon: FiHome,
    path: '/',
    component: Home,
    isShowNav: true,
    exact: true,
  },
  // Tim Manajemen Mapel
  {
    name: 'Mata Pelajaran',
    breadcrumb: 'Mata Pelajaran',
    icon: FiBook,
    path: '/mata-pelajaran',
    component: ExampleListPage,
    isShowNav: true,
    exact: false,
  },
  {
    name: 'Level',
    breadcrumb: 'Level',
    icon: FiList,
    path: '/level',
    component: ExampleListPage,
    isShowNav: true,
    exact: false,
  },
  // Tim Manajemen Kelas
  {
    name: 'Kelas',
    breadcrumb: 'Kelas',
    icon: FiLayers,
    path: '/kelas',
    component: ExampleListPage,
    isShowNav: true,
    exact: false,
  },
  {
    name: 'Siswa',
    breadcrumb: 'Siswa',
    icon: FiUser,
    path: '/siswa',
    component: ExampleListPage,
    isShowNav: true,
    exact: false,
  },
  {
    name: 'Tahun Ajaran',
    breadcrumb: 'Tahun Ajaran',
    icon: FiClock,
    path: '/tahun-ajaran',
    component: ExampleListPage,
    isShowNav: true,
    exact: false,
  },
  // Tim Manajemen Jadwal
  {
    name: 'Jadwal Kelas',
    breadcrumb: 'Jadwal Kelas',
    icon: FiCalendar,
    path: '/Jadwal-kelas',
    component: ExampleListPage,
    isShowNav: true,
    exact: false,
  },
  // Tim Manajemen Jadwal Ujian
  {
    name: 'Jadwal Ujian',
    breadcrumb: 'Jadwal Ujian',
    icon: FiPenTool,
    path: '/Jadwal-ujian',
    component: ExampleListPage,
    isShowNav: true,
    exact: false,
  },
];
