'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { UserIcon, ShoppingCartIcon, BagIcon, CloseIcon, MoonIcon, SunIcon } from '@icons';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Switch,
  Button,
  Typography,
} from '@/components/ui';

import { Navigation } from '@/components/shared/nqvigation-link/navigation-link';
import { bottomNavigationItems, mobileMenuItem } from '@/components/layout/header/constants';

// Profile Sheet
const ProfileSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Open profile"
          className="text-warning-500 hover:bg-secondary-600 flex h-15 w-full flex-col items-center justify-center gap-1 rounded-xl transition-colors"
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
        {/* Header */}
        <SheetHeader className="border-warning-500 flex flex-row! items-center justify-between border-b px-6 pb-5">
          <SheetTitle className="flex items-center gap-3">
            <div className="bg-secondary-800 text-warning-500 flex size-10 items-center justify-center rounded-xl">
              <UserIcon className="size-5" />
            </div>

            <div className="flex flex-col items-start">
              <Typography className="body-7 text-neutral-0">Welcome Guest</Typography>

              <Typography className="body-18 text-purple-200">Sign in to continue</Typography>
            </div>
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

        {/* Profile Links */}
        <div className="flex flex-col gap-2 px-6 py-5">
          {/* Sign In */}
          <Link
            href="/login"
            className="flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-white/5"
          >
            <div className="bg-warning-500 flex size-10 shrink-0 items-center justify-center rounded-lg text-neutral-800">
              <UserIcon className="size-5" />
            </div>

            <div>
              <Typography className="body-15 text-neutral-0 font-medium">Sign In</Typography>

              <Typography className="body-18 text-purple-200">Access your account</Typography>
            </div>
          </Link>

          {/* Create Account */}
          <Link
            href="/register"
            className="flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-white/5"
          >
            <div className="bg-warning-500 flex size-10 shrink-0 items-center justify-center rounded-lg text-neutral-800">
              <UserIcon className="size-5" />
            </div>

            <div>
              <Typography className="body-15 text-neutral-0 font-medium">Create Account</Typography>

              <Typography className="body-18 text-purple-200">Join our community</Typography>
            </div>
          </Link>

          {/* Become a Witch */}
          <Link
            href="/become-a-witch"
            className="flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-white/5"
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
        <div className="mx-6 mt-1 rounded-xl bg-white/5 p-4 text-center">
          <Typography className="body-18 text-secondary-100 mb-3">
            Join us to unlock exclusive features and offers
          </Typography>

          <Link
            href="/register"
            className="body-15 bg-warning-500 hover:bg-warning-400 block w-full rounded-xl py-3 font-semibold text-neutral-800 transition-colors"
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
          className="text-warning-500 hover:bg-secondary-600 flex h-15 w-full flex-col items-center justify-center gap-1 rounded-xl transition-colors"
        >
          <ShoppingCartIcon className="size-6" />

          <span className="body-18 text-neutral-0">Cart</span>
        </button>
      </SheetTrigger>

      <SheetContent
        side="bottom"
        overlayClassName="lg:hidden"
        className="border-warning-500 bg-secondary-900 h-auto max-h-[85vh] rounded-t-3xl pt-8 pb-6 lg:hidden"
      >
        {/* Header */}
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

        <div className="flex flex-col items-center justify-center px-6 py-12 text-center">
          <div className="bg-secondary-800 mb-4 flex size-16 items-center justify-center rounded-2xl text-purple-300">
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

// More Sheet
export const MoreSheet = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          type="button"
          aria-label="Open more menu"
          className="text-warning-500 hover:bg-secondary-600 flex h-15 w-full flex-col items-center justify-center gap-1 rounded-xl transition-colors"
        >
          <span className="flex h-6 items-center text-2xl leading-none font-bold">...</span>

          <span className="body-18 text-neutral-0">More</span>
        </Button>
      </SheetTrigger>

      <SheetContent
        side="bottom"
        overlayClassName="lg:hidden"
        className="bg-secondary-900 border-warning-500 flex h-[85vh] max-h-[85vh] flex-col overflow-hidden rounded-t-4xl border-t p-0 lg:hidden"
      >
        {/* Fixed Header */}
        <SheetHeader className="border-warning-500 flex shrink-0 flex-row! items-center justify-between border-b px-5 pt-10 pb-5">
          <SheetTitle className="body-7 text-neutral-0">Menu</SheetTitle>

          <SheetClose asChild>
            <button
              type="button"
              aria-label="Close menu"
              className="text-warning-500 hover:text-warning-400 transition-colors"
            >
              <CloseIcon className="size-5" />
            </button>
          </SheetClose>
        </SheetHeader>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-4 pt-4 pb-8">
          {/* Appearance */}
          <div className="bg-secondary-800 border-warning-500/30 mb-2 flex items-center justify-between rounded-2xl border p-4">
            <div className="flex items-center gap-3">
              <div className="bg-secondary-700 text-warning-500 flex size-9 items-center justify-center rounded-full">
                {isDark ? <MoonIcon className="size-5" /> : <SunIcon className="size-5" />}
              </div>

              <div className="flex flex-col">
                <Typography className="body-15 text-neutral-0 font-semibold">Appearance</Typography>
                <Typography className="body-18 text-purple-200">
                  {isDark ? 'Dark mode' : 'Light mode'}
                </Typography>
              </div>
            </div>

            <Switch
              checked={isDark}
              onCheckedChange={setIsDark}
              classNames={{
                root: 'data-[state=checked]:bg-transparent rounded-full border-secondary-400 bg-secondary-700 border ',
                thumb: 'text-warning-500 bg-secondary-700 rounded-full w-10 h-10',
              }}
            >
              {isDark ? <MoonIcon className="size-5" /> : <SunIcon className="size-5" />}
            </Switch>
          </div>

          {/* Divider */}
          <div className="border-warning-500/20 my-2 border-t" />

          {/* Navigation Items */}
          <Navigation menuList={mobileMenuItem} orientation="vertical" className="w-full" />
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
          // Profile and Cart use Sheets
          if (item.type === 'sheet') {
            return (
              <React.Fragment key={item.label}>
                {item.action === 'profile' && <ProfileSheet />}

                {item.action === 'cart' && <CartSheet />}
              </React.Fragment>
            );
          }

          // Home and Chats use Links.
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
              } `}
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
