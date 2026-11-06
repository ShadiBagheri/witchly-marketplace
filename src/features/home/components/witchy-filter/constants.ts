import { WitchyFilterProps } from './types';

export const WitchyFilterData: WitchyFilterProps[] = [
  {
    id: 'tab',
    title: 'Item Type',
    options: [
      { value: 'all', label: 'All' },
      { value: 'wishes', label: 'Wishes' },
      { value: 'services', label: 'Services' },
      { value: 'products', label: 'Products' },
    ],
  },
  {
    id: 'categories',
    title: 'Categories',
    options: [
      { value: 'all', label: 'All Categories' },
      { value: 'tarot', label: 'Tarot' },
      { value: 'reiki', label: 'Reiki' },
      { value: 'charms', label: 'Charms' },
      { value: 'spell casting', label: 'Spell Casting' },
      { value: 'energy work', label: 'Energy Work' },
    ],
  },
  {
    id: 'price',
    title: 'Price Range',
    type: 'slider',
  },
  {
    id: 'rating',
    title: 'Minimum Rating',
    type: 'slider',
  },
];
