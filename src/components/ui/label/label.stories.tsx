import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Label } from './label';
import { TextInput } from '@/components/ui/text-input';

const meta: Meta<typeof Label> = {
  title: 'UI/Label',
  component: Label,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Tests: Story = {
  args: {
    htmlFor: 'email',
    color: 'neutral',
    size: 'md',
    align: 'left',
  },
  render: (args: Story['args']) => <Label {...args}>Email Address...</Label>,
};
// Tests.decorators = [withTests({ results })];

export const Basic: Story = {
  render: () => (
    <div className="flex gap-2">
      <Label htmlFor="checkBox">Email Address</Label>
      <input id="checkBox" type="checkbox" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="flex gap-2">
        <Label color="primary">Primary Color</Label>
        <input type="checkbox" />
      </div>
      <div className="flex gap-2">
        <Label color="secondary">Secondary Color</Label>
        <input type="checkbox" />
      </div>
      <div className="flex gap-2">
        <Label htmlFor="neutralColor" color="neutral">
          Neutral Color
        </Label>
        <input id="neutralColor" type="checkbox" />
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <Label htmlFor="xs" size="xs" align="left">
          Email
        </Label>
        <TextInput id="xs" placeholder="Enter your email address" />
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="sm" size="sm" align="left">
          Email
        </Label>
        <TextInput id="sm" placeholder="Enter your email address" />
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="md" size="md" align="left">
          Email
        </Label>
        <TextInput id="md" placeholder="Enter your email address" />
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="lg" size="lg" align="left">
          Email
        </Label>
        <TextInput id="lg" placeholder="Enter your email address" />
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="xl" size="xl" align="left">
          Email
        </Label>
        <TextInput id="xl" placeholder="Enter your email address" />
      </div>
    </div>
  ),
};

export const Aligns: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <Label htmlFor="xs" size="md" align="right">
          Right
        </Label>
        <TextInput id="xs" placeholder="Right label" />
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="sm" size="md" align="left">
          Left
        </Label>
        <TextInput id="sm" placeholder="Left label" />
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="md" size="md" align="center">
          Center
        </Label>
        <TextInput id="md" placeholder="Center label" />
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="lg" size="md" align="justify">
          Justify
        </Label>
        <TextInput id="lg" placeholder="Justify label" />
      </div>
    </div>
  ),
};
