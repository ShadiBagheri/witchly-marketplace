import type { ComponentProps } from 'react';
import type * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';

export type NavigationMenuProps = ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean;
  dir?: 'rtl' | 'ltr';
};

export type NavigationMenuListProps = ComponentProps<typeof NavigationMenuPrimitive.List>;

export type NavigationMenuItemProps = ComponentProps<typeof NavigationMenuPrimitive.Item>;

export type NavigationMenuTriggerProps = ComponentProps<typeof NavigationMenuPrimitive.Trigger>;

export type NavigationMenuContentProps = ComponentProps<typeof NavigationMenuPrimitive.Content>;

export type NavigationMenuViewportProps = ComponentProps<typeof NavigationMenuPrimitive.Viewport>;

export type NavigationMenuLinkProps = ComponentProps<typeof NavigationMenuPrimitive.Link>;

export type NavigationMenuIndicatorProps = ComponentProps<typeof NavigationMenuPrimitive.Indicator>;
