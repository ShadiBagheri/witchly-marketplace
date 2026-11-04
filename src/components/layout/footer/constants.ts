import { AwardIcon, ChevronRightIcon, ShieldIcon, StarIcon, UsersIcon } from '@icons';
import { InfoCardsProps } from './types';

export const explore = [
  { label: 'Find a top Witch', href: '/', icon: ChevronRightIcon },
  { label: 'All Products', href: '/', icon: ChevronRightIcon },
  { label: 'All Services', href: '/', icon: ChevronRightIcon },
  { label: 'Shop', href: '/', icon: ChevronRightIcon },
];

export const company = [
  { label: 'About Us', href: '/', icon: ChevronRightIcon },
  { label: 'Become a Witch', href: '/', icon: ChevronRightIcon },
];

export const support = [{ label: 'Contact Us', href: '/', icon: ChevronRightIcon }];

export const help = [
  { label: 'FAQs', href: '/', icon: ChevronRightIcon },
  { label: 'Terms of Service', href: '/', icon: ChevronRightIcon },
  { label: 'Privacy Policy', href: '/', icon: ChevronRightIcon },
];

export const infoCards: InfoCardsProps[] = [
  { title: 'Secure & Private', Icon: ShieldIcon },
  { title: 'Verified Experts', Icon: AwardIcon },
  { title: '5/5 Rating', Icon: StarIcon },
  { title: '563+ Members', Icon: UsersIcon },
];
