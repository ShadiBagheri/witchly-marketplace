import React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { TextInput } from './text-input';
import { Button } from '@/components/ui/button';
import { GlobalIcon } from '@/components/shared/icons';

const meta: Meta<typeof TextInput> = {
  title: 'UI/TextInput',
  component: TextInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Tests: Story = {
  args: {
    placeholder: 'Email...',
    color: 'neutral',
    variant: 'outline',
    fullWidth: false,
  },
  render: (args: Story['args']) => <TextInput {...args} />,
};

export const Basic: Story = {
  render: () => <TextInput placeholder="Email..." />,
};

export const FigmaExample: Story = {
  render: () => (
    <TextInput
      placeholder="Email..."
      fullWidth
      startIcon={<GlobalIcon className="text-primary-500 size-6" />}
      endIcon={<GlobalIcon className="size-6 text-neutral-950" />}
      classNames={{
        root: 'w-72 h-12 flex bg-neutral-100 px-4 py-3 gap-2.5 rounded-xl border-neutral-200 border-[1.5px]',
        input: 'h-full w-full',
      }}
    />
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-5">
      <TextInput variant="outline" placeholder="Outline" />
      <TextInput variant="fill" placeholder="Fill" />
      <TextInput variant="ghost" placeholder="Ghost" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-5">
      <TextInput variant="fill" color="primary" placeholder="Primary" />
      <TextInput variant="fill" color="secondary" placeholder="Secondary" />
      <TextInput variant="fill" color="neutral" placeholder="Neutral" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-5">
      <TextInput classNames={{ root: 'textInput-sm', input: '' }} placeholder="Small" />
      <TextInput classNames={{ root: 'textInput-md', input: '' }} placeholder="Medium" />
      <TextInput classNames={{ root: 'textInput-lg', input: '' }} placeholder="Lage" />
    </div>
  ),
};

export const WithLightInputSize: Story = {
  render: () => (
    <div className="flex flex-col gap-5">
      <TextInput classNames={{ root: 'textInput-sm-light' }} placeholder="e.g. +4917684263714" />
      <TextInput classNames={{ root: 'textInput-md-light' }} placeholder="e.g. +4917684263714" />
      <TextInput classNames={{ root: 'textInput-lg-light' }} placeholder="e.g. +4917684263714" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-5">
      <TextInput placeholder="Normal" />
      <TextInput disabled placeholder="Disabled Gray Input" />
      <TextInput state="error" inputMessage="Error Messages" placeholder="e.g. +4917684263714" />
      <TextInput state="success" inputMessage="Error Messages" placeholder="e.g. +4917684263714" />
      <TextInput state="warning" inputMessage="Error Messages" placeholder="e.g. +4917684263714" />
    </div>
  ),
};

export const OutlineTextInputs: Story = {
  render: () => (
    <div className="flex flex-wrap gap-5">
      <TextInput variant="outline" color="primary" placeholder="Primary Outline" />
      <TextInput variant="outline" color="secondary" placeholder="Secondary Outline" />
      <TextInput variant="outline" color="neutral" placeholder="Neutral Outline" />
    </div>
  ),
};

export const FillTextInputs: Story = {
  render: () => (
    <div className="flex flex-wrap gap-5">
      <TextInput variant="fill" color="primary" placeholder="Primary Fill" />
      <TextInput variant="fill" color="secondary" placeholder="Secondary Fill" />
      <TextInput variant="fill" color="neutral" placeholder="Neutral Fill" />
    </div>
  ),
};

export const GhostTextInputs: Story = {
  render: () => (
    <div className="flex flex-wrap gap-5">
      <TextInput variant="ghost" color="primary" placeholder="Primary Ghost" />
      <TextInput variant="ghost" color="secondary" placeholder="Secondary Ghost" />
      <TextInput variant="ghost" color="neutral" placeholder="Neutral Ghost" />
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-5">
      <TextInput startIcon={<GlobalIcon />} placeholder="Start Icon" />
      <TextInput endIcon={<GlobalIcon />} placeholder="End Icon" />
      <TextInput endIcon={<GlobalIcon />} startIcon={<GlobalIcon />} placeholder="Both Icons" />
    </div>
  ),
};

export const WithEndAction: Story = {
  render: () => (
    <div className="flex flex-col gap-5">
      <TextInput
        endAction={<Button className="button-text-xs">send</Button>}
        classNames={{ root: 'textInput-sm-endAction' }}
        placeholder="marketplace"
      />
      <TextInput
        endAction={<Button className="button-text-sm">send</Button>}
        classNames={{ root: 'textInput-md-endAction' }}
        placeholder="marketplace"
      />
      <TextInput
        endAction={<Button className="button-text-md">send</Button>}
        classNames={{ root: 'textInput-lg-endAction' }}
        placeholder="marketplace"
      />
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col">
      <TextInput
        label="Email"
        classNames={{ root: 'textInput-sm', label: 'textInput-sm-label' }}
        placeholder="Email..."
      />
      <TextInput
        label="Email"
        classNames={{ root: 'textInput-md', label: 'textInput-md-label' }}
        placeholder="Email..."
      />
      <TextInput
        label="Email"
        classNames={{ root: 'textInput-lg', label: 'textInput-lg-label' }}
        placeholder="Email..."
      />
    </div>
  ),
};

export const WithInputMessage: Story = {
  render: () => (
    <div className="flex flex-col">
      <TextInput
        state="error"
        label="Email"
        inputMessage="Error Messages"
        classNames={{
          root: 'textInput-sm',
          label: 'textInput-sm-label',
          inputMessage: 'textInput-sm-inputMessage',
        }}
        placeholder="Email..."
      />
      <TextInput
        state="warning"
        label="Email"
        inputMessage="Error Messages"
        classNames={{
          root: 'textInput-md',
          label: 'textInput-md-label',
          inputMessage: 'textInput-md-inputMessage',
        }}
        placeholder="Email..."
      />
      <TextInput
        state="success"
        label="Email"
        inputMessage="Error Messages"
        classNames={{
          root: 'textInput-lg',
          label: 'textInput-lg-label',
          inputMessage: 'textInput-lg-inputMessage',
        }}
        placeholder="Email..."
      />
    </div>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <div className="flex w-full flex-col gap-5">
      <TextInput placeholder="Normal Text Input" />
      <TextInput fullWidth placeholder="Fullwidth Text Input" />
    </div>
  ),
};
