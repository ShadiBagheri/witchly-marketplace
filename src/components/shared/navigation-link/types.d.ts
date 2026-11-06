import type { ComponentType, ReactNode } from 'react';

export type SimpleLink = {
  label: string;
  href: string;
  icon?: ComponentType<any>;
  description?: string;
};

export type MenuItem = {
  label: string;
  href?: string;
  icon?: ComponentType<any>;
  submenu?: SimpleLink[];
};

export type NavigationProps = {
  menuList: MenuItem[];
  orientation?: 'horizontal' | 'vertical';
  className?: string;
};

export type NavLinkProps = {
  href?: string;
  className?: string;
  children?: ReactNode;
};
