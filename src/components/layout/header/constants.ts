import type { MenuItem } from '@/components/shared/navigation-link/types';

import {
  CardHeartIcon,
  ExploreIcon,
  FireIcon,
  HomeIcon,
  MessageCircleIcon,
  MoonIcon,
  ShoppingCartIcon,
  ShopsIcon,
  UserIcon,
} from '@icons';

// Desktop Navigation
export const mainMenuItem: MenuItem[] = [
  {
    label: 'Home',
    href: '/',
    icon: HomeIcon,
  },
  {
    label: 'Categories',
    submenu: [
      {
        label: 'Altar Supplies & Tool',
        description:
          'Essential altar tools, sacred ritual supplies, ceremonial implements, and witch accessories for building your personal sacred space.',
        href: '/categories/altar-supplies-tools',
      },
      {
        label: 'Ancestral & Lineage Work',
        description:
          'Connect with your ancestors, clear ancestral trauma, and resolve lineage-based energetic blocks through specialized spiritual practices.',
        href: '/categories/ancestral-lineage-work',
      },
      {
        label: 'Apothecary, Oils & Potions',
        description:
          'Anointing oils, ritual baths, magical elixirs, and spell-infused potions crafted under specific cosmic alignments.',
        href: '/categories/apothecary-oils-potions',
      },
      {
        label: 'Astrology & Birth Charts',
        description:
          'Detailed astrological consultations, natal chart interpretations, transit forecasts, and compatibility analysis.',
        href: '/categories/astrology-birth-charts',
      },
      {
        label: 'Candles & Candlemagic',
        description:
          'Hand-crafted ritual candles, spell candles, dressed and blessed candles infused with herbs and oils.',
        href: '/categories/candles-candlemagic',
      },
      {
        label: 'Crystal Healing & Stones',
        description:
          'Sacred crystals, gemstones, healing stone sets, and crystal energy healing sessions.',
        href: '/categories/crystal-healing-stones',
      },
    ],
  },
  {
    label: 'Explore',
    href: '/explore',
    icon: ExploreIcon,
  },
  {
    label: 'Shops',
    href: '/shops',
    icon: ShopsIcon,
  },
  {
    label: 'Services',
    href: '/services',
    icon: CardHeartIcon,
  },
  {
    label: 'Products',
    href: '/shopping/guide',
    icon: MoonIcon,
  },
  {
    label: 'Offers',
    href: '/offers',
    icon: FireIcon,
  },
];

// Mobile More Menu
export const mobileMenuItem: MenuItem[] = mainMenuItem;

// Mobile Bottom Navigation
export const bottomNavigationItems = [
  {
    label: 'Profile',
    icon: UserIcon,
    type: 'sheet',
    action: 'profile',
  },
  {
    label: 'Chats',
    href: '/chats',
    icon: MessageCircleIcon,
    type: 'link',
  },
  {
    label: 'Home',
    href: '/',
    icon: HomeIcon,
    type: 'link',
  },
  {
    label: 'Cart',
    icon: ShoppingCartIcon,
    type: 'sheet',
    action: 'cart',
  },
] as const;
