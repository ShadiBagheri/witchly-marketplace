import React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  Card,
  CardAction,
  CardHeader,
  CardMedia,
  CardContent,
  CardDescription,
  CardTitle,
} from './card';
import { Button } from '@/components/ui';

const meta: Meta = {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Tests: Story = {
  args: {
    children: 'A Sample Card',
    className: 'bg-secondary-900 text-neutral-0 p-6',
  },
  render: (args) => <Card {...args}>{args.children}</Card>,
};

export const Basic: Story = {
  render: () => (
    <Card className="flex w-52 flex-col items-center gap-5 rounded-2xl bg-gray-100 px-2 py-5 shadow-2xl">
      <CardHeader className="flex w-full flex-col items-center gap-2">
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <p>Card Content</p>
      </CardContent>
      <CardAction className="flex justify-center">
        <Button className="button-text-sm">Click Me</Button>
      </CardAction>
    </Card>
  ),
};

export const SpecialCase: Story = {
  render: () => (
    <Card className="bg-secondary-800 grid w-87.5 max-w-sm grid-rows-4 rounded-2xl pb-6">
      <div className="relative row-span-3 row-start-1 flex justify-center">
        <CardMedia className="absolute h-full w-full overflow-hidden rounded-t-2xl">
          <div className="bg-secondary-900 text-neutral-0 flex h-full w-full items-center justify-center">
            Image
          </div>
        </CardMedia>
      </div>
      <CardContent className="text-neutral-0 row-span-1 row-start-4 mt-5 flex flex-col items-center gap-1 px-5">
        <CardHeader className="p-0">
          <CardTitle>Experience</CardTitle>
        </CardHeader>
        <CardDescription className="flex w-full flex-col items-center gap-1 text-center">
          <p className="text-sm">
            Career & Finance Tarot Reading | Clarity, Direction, and Next StepsDigital Delivery
          </p>
        </CardDescription>
      </CardContent>
    </Card>
  ),
};
