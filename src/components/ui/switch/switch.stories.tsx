import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Switch } from './switch';
import { MoonIcon, SunIcon } from '@/components/shared/icons';

const meta: Meta<typeof Switch> = {
  title: 'UI/Switch',
  component: Switch,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Basic: Story = {
  render: () => {
    return (
      <div className="flex items-center justify-center gap-2">
        <Switch className="bg-secondary-300" />
        <span>Basic Mode</span>
      </div>
    );
  },
};

export const SpecialCase: Story = {
  render: () => {
    const [isDark, setIsDark] = useState(false);

    return (
      <div className="flex items-center justify-center gap-4">
        <Switch
          checked={isDark}
          onCheckedChange={setIsDark}
          classNames={{
            root: 'data-[state=checked]:bg-transparent',
            thumb: 'text-warning-500',
          }}
        >
          {isDark ? <MoonIcon className="text-lg" /> : <SunIcon className="text-lg" />}
        </Switch>
        <span>{isDark ? 'Dark Mode' : 'Light Mode'}</span>
      </div>
    );
  },
};
