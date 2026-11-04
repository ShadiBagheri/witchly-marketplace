'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { dashboardProps } from './types';
import {
  SearchIcon,
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
import { Navigation } from '@/components/shared/nqvigation-link/navigation-link';
import { mainMenuItem, mobileMenuItem, bottomNavigationItems } from './constants';
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

// Profile Sheet
const ProfileSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Open profile"
          className="text-warning-500 hover:bg-secondary-600 flex h-[60px] w-full flex-col items-center justify-center gap-1 rounded-xl transition-colors"
        >
          <UserIcon className="size-6" />
          <span className="body-18 text-neutral-0">Profile</span>
        </button>
      </SheetTrigger>

      <SheetContent
        side="bottom"
        overlayClassName="lg:hidden"
        className="border-warning-500 bg-secondary-900 h-auto max-h-[85vh] overflow-y-auto rounded-t-3xl pt-8 pb-5 lg:hidden"
      >
        <SheetHeader className="border-warning-500 flex flex-row! items-center justify-between border-b px-6 pb-5">
          <SheetTitle>
            <Typography className="body-7 text-neutral-0">My Profile</Typography>
          </SheetTitle>

          <SheetClose asChild>
            <button
              type="button"
              aria-label="Close profile"
              className="text-secondary-400 hover:text-warning-500 transition-colors"
            >
              <CloseIcon className="size-5" />
            </button>
          </SheetClose>
        </SheetHeader>

        <div className="border-warning-500 flex items-center gap-3 border-b px-6 pb-5">
          <div className="bg-secondary-800 text-warning-500 flex size-10 items-center justify-center rounded-xl">
            <UserIcon className="size-5" />
          </div>

          <div className="flex flex-col items-start">
            <Typography className="body-10 text-neutral-0">Welcome Guest</Typography>
            <Typography className="body-18 text-purple-200">Sign in to continue</Typography>
          </div>
        </div>

        {/* Profile Links */}
        <div className="-mt-3 flex flex-col px-6">
          <Link
            href="/login"
            className="-mb-2 flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-white/5"
          >
            <div className="bg-warning-500 flex size-10 shrink-0 items-center justify-center rounded-lg text-neutral-800">
              <UserIcon className="size-5" />
            </div>

            <div>
              <Typography className="body-15 text-neutral-0 font-medium">Sign In</Typography>
              <Typography className="body-18 text-purple-200">Access your account</Typography>
            </div>
          </Link>

          <Link
            href="/register"
            className="-mb-2 flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-white/5"
          >
            <div className="bg-warning-500 flex size-10 shrink-0 items-center justify-center rounded-lg text-neutral-800">
              <UserIcon className="size-5" />
            </div>

            <div>
              <Typography className="body-15 text-neutral-0 font-medium">Create Account</Typography>
              <Typography className="body-18 text-purple-200">Join our community</Typography>
            </div>
          </Link>

          <Link
            href="/become-a-witch"
            className="-mb-2 flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-white/5"
          >
            <div className="bg-warning-500 flex size-10 shrink-0 items-center justify-center rounded-lg text-neutral-800">
              <BagIcon className="size-5" />
            </div>

            <div>
              <Typography className="body-15 text-neutral-0 font-medium">Become a Witch</Typography>

              <Typography className="body-18 text-purple-200">Start selling your spells</Typography>
            </div>
          </Link>
        </div>

        {/* Profile Footer */}
        <div className="mx-6 mt-1 rounded-xl bg-white/5 p-3 text-center">
          <Typography className="body-18 text-secondary-100 mb-3">
            Join us to unlock exclusive features and offers
          </Typography>

          <Link
            href="/register"
            className="bg-warning-500 body-15 hover:bg-warning-400 block w-full rounded-xl py-2 font-semibold text-neutral-800 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </SheetContent>
    </Sheet>
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
          className="text-warning-500 hover:bg-secondary-600 flex h-[60px] w-full flex-col items-center justify-center gap-1 rounded-xl transition-colors"
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
          // Sheet Actions
          if (item.type === 'sheet') {
            return (
              <React.Fragment key={item.label}>
                {item.action === 'profile' && <ProfileSheet />}
                {item.action === 'cart' && <CartSheet />}
              </React.Fragment>
            );
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
              className={`flex h-[60px] flex-col items-center justify-center gap-1 rounded-2xl transition-colors duration-200 ${
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

        {/* More */}
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
          {/* Logo */}

          <Link href="/" className="flex shrink-0 items-center gap-2">
            <SparklesIcon className="text-warning-400 size-4 lg:size-6" />

            <Typography className="text-neutral-0 body-10 lg:body-7">Witchly</Typography>
          </Link>

          {/* Search */}
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
  const [isDark, setIsDark] = useState(false);

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

        {/* Top Header */}

        <div className="mx-auto hidden w-full max-w-7xl items-center justify-between gap-6 px-4 py-4 lg:flex">
          {/* Logo */}

          <Link href="/" className="flex shrink-0 items-center gap-2">
            <SparklesIcon className="text-warning-400 size-6" />

            <Typography className="text-neutral-0 body-10 lg:body-7">Witchly</Typography>
          </Link>

          {/* Search */}
          <SearchBox />

          {/* Action Icons */}
          <div className="flex shrink-0 items-center gap-4">
            {/* Theme Switch */}
            <div className="text-warning-400 hover:text-warning-300 hover:bg-secondary-600 flex items-center rounded-xl p-2 transition-colors">
              <Switch
                checked={isDark}
                onCheckedChange={setIsDark}
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

            {/* Profile Dropdown */}

            <div className="group relative z-50">
              <Button className="text-warning-400 hover:bg-secondary-600 flex items-center justify-center rounded-xl p-2.5 transition-colors">
                <UserIcon className="size-5" />
              </Button>

              <div className="bg-secondary-900 border-warning-500 absolute top-full right-0 z-50 mt-2 hidden w-88 flex-col overflow-hidden rounded-2xl border text-white shadow-xl group-hover:flex">
                {/* Header */}

                <div className="border-warning-500 flex items-center gap-3 border-b p-5">
                  <div className="bg-secondary-800 text-warning-500 flex size-10 items-center justify-center rounded-xl">
                    <UserIcon className="size-5" />
                  </div>

                  <div>
                    <Typography className="body-15 font-semibold">Welcome Guest</Typography>

                    <Typography className="body-18 text-purple-200">Sign in to continue</Typography>
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-col gap-2 p-4">
                  <Link
                    href="/login"
                    className="flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-white/5"
                  >
                    <div className="bg-warning-500 flex size-9 items-center justify-center rounded-lg text-neutral-800">
                      <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                        />
                      </svg>
                    </div>

                    <div>
                      <Typography className="body-15 font-medium">Sign In</Typography>

                      <Typography className="body-18 text-purple-200">
                        Access your account
                      </Typography>
                    </div>
                  </Link>

                  <Link
                    href="/register"
                    className="flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-white/5"
                  >
                    <div className="bg-warning-500 flex size-9 items-center justify-center rounded-lg text-neutral-800">
                      <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                        />
                      </svg>
                    </div>

                    <div>
                      <Typography className="body-15 font-medium">Create Account</Typography>

                      <Typography className="body-18 text-purple-200">
                        Join our community
                      </Typography>
                    </div>
                  </Link>

                  <Link
                    href="/become-a-witch"
                    className="flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-white/5"
                  >
                    <div className="bg-warning-500 flex size-9 items-center justify-center rounded-lg text-neutral-800">
                      <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>

                    <div>
                      <Typography className="body-15 font-medium">Become a Witch</Typography>

                      <Typography className="body-18 text-purple-200">
                        Start selling your spells
                      </Typography>
                    </div>
                  </Link>
                </div>

                {/* Footer */}
                <div className="m-4 mt-2 rounded-xl bg-white/5 p-4 text-center">
                  <Typography className="body-18 text-secondary-100 mb-3">
                    Join us to unlock exclusive features and offers
                  </Typography>
                  <Link
                    href="/register"
                    className="bg-warning-500 body-15 hover:bg-warning-600 block w-full rounded-xl py-2.5 font-semibold text-neutral-800 transition-colors"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
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
