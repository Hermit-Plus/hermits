import {
  FaHome,
  FaRegHeart,
  FaHiking,
  FaMagic,
  FaDonate,
  FaSignInAlt
} from 'react-icons/fa';

export const menuItems = [
  {
    id: 1,
    title: 'Donate',
    path: '/donate',
    mName: 'menu-item',
    icon: <FaDonate />
  },
  {
    id: 2,
    title: 'LogIn',
    path: '/login',
    mName: 'menu-item',
    icon: <FaSignInAlt />
  }
];

export const sidebarItems = [
  {
    id: 1,
    title: 'Home',
    path: '/',
    sName: 'sidebar-item',
    icon: <FaHome />
  },
  {
    id: 2,
    title: 'Favorites',
    path: '/favorites',
    sName: 'sidebar-item',
    icon: <FaRegHeart />
  },
  {
    id: 3,
    title: 'Hermits',
    path: '/players',
    sName: 'sidebar-item',
    icon: <FaHiking />
  },
  {
    id: 4,
    title: 'Seasons',
    path: '/seasons',
    sName: 'sidebar-item',
    icon: <FaMagic />
  },
  {
    id: 5,
    title: 'Donate',
    path: '/donate',
    sName: 'sidebar-item',
    icon: <FaDonate />
  },
  {
    id: 6,
    title: 'LogIn',
    path: '/login',
    sName: 'sidebar-item',
    icon: <FaSignInAlt />
  }
];
