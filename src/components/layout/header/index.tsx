'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import type { dashboardProps } from './types';
import {
  MoonIcon,
  BellIcon,
  UserIcon,
  SparklesIcon,
  ShoppingCartIcon,
  SunIcon,
  BagIcon,
  MessageCircleIcon,
  CloseIcon,
} from '@icons';
import { Navigation } from '@/components/shared/navigation-link/navigation-link';
import { mainMenuItem, bottomNavigationItems } from './constants';
import {
  Button,
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Switch,
  Typography,
} from '@/components/ui';
import { MoreSheet } from '@/components/shared/mobile-bottom-nav/mobile-bottom-nav';
import { SearchBox } from '@/components/shared/search-box/search-box';

// Profile Link for Mobile
const ProfileLink = () => {
  return (
    <Link
      href="/user-dashboard"
      aria-label="User Dashboard"
      className="text-warning-500 hover:bg-secondary-600 flex h-15 w-full flex-col items-center justify-center gap-1 rounded-xl transition-colors"
    >
      <UserIcon className="size-6" />
      <span className="body-18 text-neutral-0">Profile</span>
    </Link>
  );
};

// Cart Sheet
const CartSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Open cart"
          className="text-warning-500 hover:bg-secondary-600 flex h-15 w-full flex-col items-center justify-center gap-1 rounded-xl transition-colors"
        >
          <ShoppingCartIcon className="size-6" />
          <Typography className="body-18 text-neutral-0">Cart</Typography>
        </button>
      </SheetTrigger>

      <SheetContent
        side="bottom"
        overlayClassName="lg:hidden"
        className="border-warning-500 bg-secondary-900 h-auto max-h-[85vh] rounded-t-3xl pt-8 pb-6 lg:hidden"
      >
        <SheetHeader className="border-warning-500 flex flex-row! items-center justify-between border-b px-6 pb-5">
          <SheetTitle className="flex items-center gap-3">
            <div className="bg-secondary-800 text-warning-500 flex size-10 items-center justify-center rounded-xl">
              <ShoppingCartIcon className="size-5" />
            </div>
            <Typography className="body-7 text-neutral-0">Shopping Cart</Typography>
          </SheetTitle>

          <SheetClose asChild>
            <button
              type="button"
              aria-label="Close cart"
              className="text-secondary-400 hover:text-warning-500 transition-colors"
            >
              <CloseIcon className="size-5" />
            </button>
          </SheetClose>
        </SheetHeader>

        {/* Empty Cart */}
        <div className="flex flex-col items-center justify-center px-6 pt-6 pb-4 text-center">
          <div className="bg-secondary-800 mb-4 flex size-16 items-center justify-center rounded-full text-purple-300">
            <BagIcon className="size-9" />
          </div>
          <Typography className="body-7 text-neutral-0 mb-2">Your cart is empty</Typography>
          <Typography className="body-18 text-secondary-300 mb-6">
            Looks like you haven't added any magical items yet.
          </Typography>
          <Link
            href="/shop"
            className="body-15 bg-secondary-500 text-secondary-200 w-full max-w-sm rounded-xl py-3 text-center font-medium transition-colors hover:bg-[#9333ea]"
          >
            Start Shopping
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

// Mobile Bottom Navigation
export const MobileBottomNav = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed inset-x-0 bottom-0 z-50 w-full border-t border-white/10 bg-purple-950 pb-[env(safe-area-inset-bottom)] lg:hidden"
    >
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-5 items-center px-2">
        {bottomNavigationItems.map((item) => {
          // Profile is now a direct Link, Cart uses Sheet
          if (item.type === 'sheet') {
            if (item.action === 'profile') {
              return <ProfileLink key={item.label} />;
            }
            if (item.action === 'cart') {
              return <CartSheet key={item.label} />;
            }
          }

          // Link Actions
          const Icon = item.icon;
          const active = isActive(item.href);

          return (
            <Link
              key={item.label}
              href={item.href}
              aria-label={item.label}
              aria-current={active ? 'page' : undefined}
              className={`flex h-15 flex-col items-center justify-center gap-1 rounded-2xl transition-colors duration-200 ${
                active
                  ? 'bg-secondary-600 text-warning-500'
                  : 'text-warning-500 hover:bg-secondary-600'
              }`}
            >
              <Icon className="size-6 shrink-0" />
              <span className="body-18 text-neutral-0 leading-none">{item.label}</span>
            </Link>
          );
        })}
        <MoreSheet />
      </div>
    </nav>
  );
};

// Mobile Top Header
export const MobildHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-purple-950">
      <div className="w-full py-6 lg:hidden">
        <div className="container flex h-full items-center justify-between">
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <SparklesIcon className="text-warning-400 size-4 lg:size-6" />
            <Typography className="text-neutral-0 body-10 lg:body-7">Witchly</Typography>
          </Link>

          <SearchBox />

          {/* Mobile Notifications */}
          <div className="group relative z-50">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  type="button"
                  className="text-warning-400 hover:bg-secondary-600 flex items-center justify-center rounded-xl p-2.5"
                >
                  <BellIcon className="size-5" />
                </Button>
              </SheetTrigger>

              <SheetContent
                overlayClassName="lg:hidden"
                side="bottom"
                className="bg-secondary-900 h-90 max-h-[85vh] rounded-t-3xl pt-8 pb-5 lg:hidden"
              >
                <SheetHeader className="border-warning-500 flex flex-row! items-center justify-between border-b px-10 pb-5">
                  <SheetTitle className="flex items-center gap-2">
                    <div className="bg-secondary-800 text-warning-500 flex size-10 items-center justify-center rounded-xl">
                      <BellIcon className="size-4" />
                    </div>
                    <Typography className="body-7 text-neutral-0">Notifications</Typography>
                  </SheetTitle>

                  <SheetClose asChild>
                    <button
                      type="button"
                      aria-label="Close notifications"
                      className="text-secondary-400 hover:text-warning-500"
                    >
                      <CloseIcon className="size-5" />
                    </button>
                  </SheetClose>
                </SheetHeader>

                <SheetFooter>
                  <div className="flex flex-col items-center justify-center pb-14">
                    <div className="bg-secondary-950 mb-2 flex size-12 items-center justify-center rounded-xl">
                      <BellIcon className="size-8 text-purple-400/50" />
                    </div>
                    <Typography className="body-15 text-purple-200">
                      No new notifications
                    </Typography>
                  </div>

                  <div className="border-warning-500 border-t px-10">
                    <SheetClose asChild>
                      <Link
                        href="/notifications"
                        className="text-warning-500 bg-secondary-950 mt-5 mb-0 block rounded-xl py-3 text-center text-sm font-medium transition-colors"
                      >
                        View all notifications
                      </Link>
                    </SheetClose>
                  </div>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

// Main Header
export const Header: React.FC<dashboardProps> = ({ isDashboard }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  if (isDashboard) {
    return (
      <header className="bg-purple-950 px-4 py-3">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            Witchly
          </Link>
        </div>
      </header>
    );
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-purple-950">
        <MobildHeader />

        {/* Top Header (Desktop) */}
        <div className="mx-auto hidden w-full max-w-7xl items-center justify-between gap-6 px-4 py-4 lg:flex">
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <SparklesIcon className="text-warning-400 size-6" />
            <Typography className="text-neutral-0 body-10 lg:body-7">Witchly</Typography>
          </Link>

          <SearchBox />

          {/* Action Icons */}
          <div className="flex shrink-0 items-center gap-4">
            {/* Theme Switch */}
            <div className="text-warning-400 hover:text-warning-300 hover:bg-secondary-600 flex items-center rounded-xl p-2 transition-colors">
              <Switch
                checked={isDark}
                onCheckedChange={(checked: boolean) => setTheme(checked ? 'dark' : 'light')}
                classNames={{
                  root: 'data-[state=checked]:bg-transparent',
                  thumb: 'text-warning-400',
                }}
              >
                {isDark ? <MoonIcon className="size-5" /> : <SunIcon className="size-5" />}
              </Switch>
            </div>

            {/* Notifications Dropdown */}
            <div className="group relative z-50">
              <Button className="text-warning-400 hover:bg-secondary-600 flex items-center justify-center rounded-xl p-2.5">
                <BellIcon className="size-5" />
              </Button>
              <div className="bg-secondary-900 border-warning-500 text-neutral-0 absolute top-full right-0 z-50 mt-2 hidden w-80 flex-col overflow-hidden rounded-2xl border shadow-xl group-hover:flex">
                <div className="border-warning-500 flex items-center gap-3 border-b p-4">
                  <div className="bg-secondary-800 text-warning-500 flex size-9 items-center justify-center rounded-xl">
                    <BellIcon className="size-4.5" />
                  </div>
                  <Typography className="body-7">Notifications</Typography>
                </div>
                <div className="flex flex-col items-center justify-center py-8">
                  <BellIcon className="mb-3 size-9 text-purple-400/50" />
                  <Typography className="body-15 text-purple-200">No new notifications</Typography>
                </div>
                <Link
                  href="/notifications"
                  className="text-warning-500 bg-secondary-950 block py-3 text-center text-sm font-medium transition-colors"
                >
                  View all notifications
                </Link>
              </div>
            </div>

            {/* Messages */}
            <Button className="text-warning-400 hover:text-warning-300 hover:bg-secondary-600 rounded-xl p-2.5 transition-colors">
              <MessageCircleIcon className="size-5" />
            </Button>

            {/* Cart Dropdown */}
            <div className="group relative z-50">
              <Button className="text-warning-400 hover:bg-secondary-600 flex items-center justify-center rounded-xl p-2.5 transition-colors">
                <ShoppingCartIcon className="size-5" />
              </Button>
              <div className="border-warning-500 bg-secondary-900 absolute top-full right-0 z-50 mt-2 hidden w-72 flex-col overflow-hidden rounded-2xl border text-white shadow-xl group-hover:flex">
                <div className="flex flex-col items-center justify-center p-6 text-center">
                  <div className="bg-secondary-900 text-warning-500 flex size-9 items-center justify-center rounded-xl">
                    <BagIcon className="size-8 text-purple-300" />
                  </div>
                  <Typography className="body-7 mt-3 mb-2">Your cart is empty</Typography>
                  <Typography className="body-18 text-secondary-300 mb-6">
                    Looks like you haven't added any magical items yet.
                  </Typography>
                  <Link
                    href="/shop"
                    className="bg-secondary-500 text-secondary-200 body-15 w-full rounded-xl py-2.5 font-medium transition-colors hover:bg-[#9333ea]"
                  >
                    Start Shopping
                  </Link>
                </div>
              </div>
            </div>

            {/* Profile Link (جایگزین Dropdown) */}
            <Link
              href="/user-dashboard"
              aria-label="User Dashboard"
              className="text-warning-400 hover:bg-secondary-600 flex items-center justify-center rounded-xl p-2.5 transition-colors"
            >
              <UserIcon className="size-5" />
            </Link>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden w-full border-t border-white/10 lg:block">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-center px-4 py-1.5">
            <Navigation menuList={mainMenuItem} orientation="horizontal" />
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />
    </>
  );
};
