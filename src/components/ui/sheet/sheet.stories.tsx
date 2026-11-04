import React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from './sheet';

const meta: Meta<typeof Sheet> = {
  title: 'UI/Sheet',
  component: Sheet,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sheet>;

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <button className="rounded bg-blue-500 px-4 py-2 text-white">Open Sheet</button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Default Sheet</SheetTitle>
          <SheetDescription>Right-side drawer with header & footer</SheetDescription>
        </SheetHeader>
        <div className="p-4">Content goes here</div>
        <SheetFooter>
          <SheetClose asChild>
            <button className="rounded bg-gray-200 px-3 py-2">Close</button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const LeftSide: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <button className="rounded bg-green-500 px-4 py-2 text-white">Open Left Sheet</button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Left Sheet</SheetTitle>
          <SheetDescription>This sheet opens from the left</SheetDescription>
        </SheetHeader>
        <div className="p-4">Some left-side content</div>
      </SheetContent>
    </Sheet>
  ),
};

export const TopSide: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <button className="rounded bg-purple-500 px-4 py-2 text-white">Open Top Sheet</button>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>Top Sheet</SheetTitle>
        </SheetHeader>
        <div className="p-4">Content that slides from top</div>
      </SheetContent>
    </Sheet>
  ),
};

export const BottomSide: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <button className="rounded bg-orange-500 px-4 py-2 text-white">Open Bottom Sheet</button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Bottom Sheet</SheetTitle>
        </SheetHeader>
        <div className="p-4">Content that slides from bottom</div>
      </SheetContent>
    </Sheet>
  ),
};

export const WithoutHeaderFooter: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <button className="rounded bg-gray-700 px-4 py-2 text-white">Open Simple Sheet</button>
      </SheetTrigger>
      <SheetContent side="right">
        <div className="p-6">Just simple content without header/footer</div>
      </SheetContent>
    </Sheet>
  ),
};
