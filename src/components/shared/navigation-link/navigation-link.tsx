'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/ui';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui';
import { ChevronDownIcon } from '@icons';
import type { MenuItem, NavigationProps } from './types';

// Route Utilities
const normalizePath = (path?: string): string => {
  if (!path || path === '#') return '';

  const pathname = path.split(/[?#]/)[0];
  return pathname.replace(/\/+$/, '') || '/';
};

// Exact route matching
const isRouteActive = (pathname: string, href?: string): boolean => {
  const current = normalizePath(pathname);
  const target = normalizePath(href);

  if (!current || !target) return false;
  return current === target;
};

// Parent is active when its own route or one of its submenu routes is active.
const isMenuActive = (pathname: string, item: MenuItem): boolean => {
  if (isRouteActive(pathname, item.href)) {
    return true;
  }

  return item.submenu?.some((sub) => isRouteActive(pathname, sub.href)) ?? false;
};

// Navigation Styles
const navigationStyles = cva('relative', {
  variants: {
    orientation: {
      horizontal: cn(
        'relative inline-flex items-center gap-2 py-2',
        'text-warning-300',
        'after:absolute after:bottom-0 after:left-0',
        'after:h-[2px] after:w-full',
        'after:origin-left after:scale-x-0',
        'after:bg-warning-500',
        'after:transition-transform',
        'after:duration-300 after:ease-out',
        'transition-colors duration-300',
        'hover:text-warning-500',
        'hover:after:scale-x-100',
        '[&.is-active]:!text-warning-500',
        '[&.is-active]:after:!scale-x-100',
        '[&_svg]:shrink-0',
        '[&_svg]:transition-colors',
        '[&_svg]:duration-300',
        'body-11 leading-[100%]',
      ),
      vertical: cn(
        'relative flex w-full items-center ',
        'pr-6 pl-4 py-3 text-left',
        'body-11 leading-[160%]',
        'text-warning-300 ',
        'before:absolute before:left-0 before:top-0',
        'before:h-full before:w-full',
        'before:content-[""]',
        '[&.is-active]:text-warning-300',
        '[&.is-active]:bg-none',
      ),
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

// Navigation Icon
const NavigationIcon = ({
  item,
  orientation,
}: {
  item: MenuItem;
  orientation: 'horizontal' | 'vertical';
}) => {
  if (!item.icon) return null;

  const Icon = item.icon;

  return (
    <Icon
      className={cn(
        'shrink-0 stroke-current text-current',
        '[&_path]:stroke-current',
        orientation === 'vertical' ? 'size-5' : 'md:size-4 lg:size-5',
      )}
      stroke="currentColor"
    />
  );
};

// Simple Navigation Item
const SimpleItem: React.FC<{
  item: MenuItem;
  orientation: 'horizontal' | 'vertical';
}> = ({ item, orientation }) => {
  const pathname = usePathname();
  const active = isRouteActive(pathname, item.href);

  return (
    <Link
      href={item.href || '#'}
      aria-current={active ? 'page' : undefined}
      className={cn(navigationStyles({ orientation }), active && 'is-active')}
    >
      <NavigationIcon item={item} orientation={orientation} />
      <span
        className={cn(
          'flex items-center',
          'md:body-18 lg:body-15 xl:body-12',
          orientation === 'vertical' && 'text-left',
        )}
      >
        {item.label}
      </span>
    </Link>
  );
};

// Dropdown
const Dropdown: React.FC<{
  item: MenuItem;
  orientation: 'horizontal' | 'vertical';
}> = ({ item, orientation }) => {
  const pathname = usePathname();
  const subLinks = item.submenu ?? [];
  const active = isMenuActive(pathname, item);

  // Desktop Dropdown
  if (orientation === 'horizontal') {
    return (
      <>
        <NavigationMenuTrigger
          className={cn(
            'group',
            '!bg-transparent',
            'hover:!bg-transparent',
            'focus:!bg-transparent',
            'data-[state=open]:!bg-transparent',
            'data-[state=open]:!text-warning-300',
            navigationStyles({
              orientation: 'horizontal',
            }),
            active && 'is-active',
          )}
        >
          <NavigationIcon item={item} orientation="horizontal" />
          <span className="md:body-18 lg:body-15 xl:body-12">{item.label}</span>

          <ChevronDownIcon className="relative top-[1px] ml-1 size-3 transition-transform duration-300 group-data-[state=open]:rotate-180" />
        </NavigationMenuTrigger>

        {/* Dropdown Content */}
        <NavigationMenuContent
          className={cn(
            '!right-auto !left-0 !translate-x-0',
            '!h-auto !w-auto',
            '!overflow-visible',
            '!border-0 !bg-transparent !p-0',
            '!shadow-none',
          )}
        >
          {/* Scrollable Container */}
          <div
            className={cn(
              'h-100',
              'w-75',
              'overflow-y-auto overscroll-contain',
              'rounded-2xl',
              'border-warning-500 border',
              'bg-secondary-900 p-2',
              'scrollbar-thin',
            )}
          >
            <ul className="space-y-1 text-left">
              {subLinks.map((sub, index) => {
                const subActive = isRouteActive(pathname, sub.href);

                return (
                  <li key={`${sub.href}-${index}`}>
                    <Link
                      href={sub.href}
                      aria-current={subActive ? 'page' : undefined}
                      className={cn(
                        'group block w-full rounded-xl p-3',
                        'text-left transition-colors duration-300',
                        'hover:bg-secondary-600',
                        subActive && 'bg-secondary-600',
                      )}
                    >
                      <span
                        className={cn(
                          'body-14 block font-medium',
                          'text-warning-300',
                          'transition-colors duration-200',
                          'group-hover:text-warning-500',
                          subActive && 'text-warning-500',
                        )}
                      >
                        {sub.label}
                      </span>
                      {sub.description && (
                        <span className={cn('body-18 mt-1 block', 'text-secondary-300')}>
                          {sub.description}
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </NavigationMenuContent>
      </>
    );
  }

  // Mobile Dropdown
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value={item.href || item.label} className="border-none">
        <AccordionTrigger
          className={cn(
            'justify-between hover:no-underline',
            navigationStyles({
              orientation: 'vertical',
            }),
            active && 'is-active',
          )}
        >
          <span className="inline-flex items-center gap-2">
            <NavigationIcon item={item} orientation="vertical" />
            {item.label}
          </span>
        </AccordionTrigger>
        <AccordionContent className="mt-3 px-6 pb-4">
          {subLinks.map((sub, index) => {
            const subActive = isRouteActive(pathname, sub.href);

            return (
              <Link
                key={`${sub.href}-${index}`}
                href={sub.href}
                aria-current={subActive ? 'page' : undefined}
                className={cn(
                  'body-11 flex w-full flex-col',
                  'items-start gap-1 pb-3.5',
                  'text-warning-500 leading-[140%]',
                  'dark:text-neutral-0',
                  'last:pb-0 hover:bg-neutral-100',
                  subActive && 'text-secondary-500',
                )}
              >
                <span className="inline-flex items-center gap-2 font-medium">
                  {sub.icon && <sub.icon />}
                  {sub.label}
                </span>
                {sub.description && (
                  <span className="body-13 text-secondary-400 line-clamp-2">{sub.description}</span>
                )}
              </Link>
            );
          })}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

// Main Navigation
export const Navigation: React.FC<NavigationProps> = ({
  menuList,
  className,
  orientation = 'horizontal',
}) => {
  if (!menuList?.length) return null;

  return (
    <NavigationMenu
      dir="ltr"
      viewport={false}
      orientation={orientation}
      className="block w-full lg:flex"
    >
      <NavigationMenuList
        className={cn(
          className,
          orientation === 'vertical'
            ? 'flex-col items-stretch'
            : 'flex w-fit items-center justify-between md:gap-6 lg:gap-8 xl:gap-10',
        )}
      >
        {menuList.map((item, index) => (
          <NavigationMenuItem key={`${item.label}-${index}`}>
            {item.submenu?.length ? (
              <Dropdown item={item} orientation={orientation} />
            ) : (
              <SimpleItem item={item} orientation={orientation} />
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
