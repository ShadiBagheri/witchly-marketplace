import React from 'react';
import Link from 'next/link';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './navigation-menu';

const meta: Meta<typeof NavigationMenu> = {
  title: 'UI/NavigationMenu',
  component: NavigationMenu,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NavigationMenu>;

export const Basic: Story = {
  render: () => (
    <NavigationMenu className="mx-auto">
      <NavigationMenuList className="flex gap-10">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-70">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#" className="pb-3">
                    <div className="text-lg">Components</div>
                    <div className="text-neutral-80 text-sm">
                      Browser all components in the library.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#" className="pb-3">
                    <div className="text-lg">Documentation</div>
                    <div className="text-neutral-80 text-sm">Learn how to use the library.</div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#" className="pb-3">
                    <div className="text-lg">Blog</div>
                    <div className="text-neutral-80 text-sm">Read our latest blog posts.</div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="/">Services</NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="/">About</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

export const SimpleLinks: Story = {
  render: () => (
    <NavigationMenu dir="ltr" className="mx-auto">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="/">Docs</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="ml-10">Simple</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="bg-neutral-30 w-50 rounded-sm pt-5 pl-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#" className="pb-3">
                    Components
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#" className="pb-3">
                    Documentation
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#" className="pb-3">
                    Categories
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

export const DropDown: Story = {
  render: () => (
    <NavigationMenu dir="ltr" className="mx-auto">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="bg-neutral-30 grid w-125 grid-cols-[.75fr_1fr] gap-3 p-4">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link className="h-full w-full rounded-md bg-purple-300 p-6" href="/">
                    <div className="text-neutral-20 mt-4 mb-2 text-xl">shadcn/ui</div>
                    <p className="text-sm leading-tight">
                      Beautifully designed components built with Tailwind CSS.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="text-lg text-neutral-100">Introduction</div>
                    <p className="text-neutral-80 line-clamp-2 text-xs">
                      Re-usable components built using Radix UI and Tailwind CSS.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="text-lg text-neutral-100">Installation</div>
                    <p className="text-neutral-80 line-clamp-2 text-xs">
                      How to install dependencies and structure your app.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="text-lg text-neutral-100">Typography</div>
                    <p className="text-neutral-80 line-clamp-2 text-xs">
                      Styles for headings, paragraphs, lists...etc
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

export const DropDownGrid: Story = {
  render: () => (
    <NavigationMenu dir="ltr" className="mx-auto">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="bg-neutral-30 grid w-150 grid-cols-2 gap-5 p-5">
              {components.map((component) => (
                <li key={component.title}>
                  <NavigationMenuLink asChild>
                    <Link href={component.href}>
                      <div className="text-lg font-medium text-neutral-100">{component.title}</div>
                      <p className="text-neutral-80 line-clamp-2 text-sm leading-snug">
                        {component.description}
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

export const WithoutViewport: Story = {
  render: () => (
    <NavigationMenu viewport={false} dir="ltr" className="mx-auto">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="mr-10">Solutions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-70 p-4">
              <a href="#" className="rounded p-2">
                <div className="font-medium">Enterprise</div>
                <div className="text-sm">Solutions for large organizations</div>
              </a>
              <a href="#" className="rounded p-2">
                <div className="font-medium">Startups</div>
                <div className="text-sm">Perfect for growing businesses</div>
              </a>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink>Products</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

export const RTLDirection: Story = {
  render: () => (
    <div className="flex min-h-75 w-full items-center justify-center *:text-xl">
      <NavigationMenu dir="rtl">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/" className="ml-10">
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="ml-10">Categories</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="bg-neutral-30 w-50 rounded-sm p-5">
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="#" className="pb-3">
                      Digital
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="#" className="pb-3">
                      Tools
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/">Services</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  ),
};

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description: 'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
];
