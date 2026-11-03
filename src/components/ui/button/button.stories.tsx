import { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from './button';
import { ArrowLeftIcon, ArrowRightIcon } from '@icons';

const meta = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Button component has not default styles like padding, margin and fonts. It has only button-text-md class and is applied by default. Border radius is automatically applied. For pixel-perfect designs matching Figma, you can use h-* in className to set the exact height. For text styling according to Figma, use Typography utility classes like body-20 lg:body-10',
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: 'Default Button',
    variant: 'fill',
    color: 'primary',
    rounded: false,
    fullWidth: false,
    isDisabled: false,
    isLoading: false,
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
};

// Variants
export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-5">
      <Button variant="fill">Fill</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

// Color
export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-5">
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="info">Info</Button>
      <Button color="warning">Warning</Button>
      <Button color="success">Success</Button>
      <Button color="neutral">Neutral</Button>
    </div>
  ),
};

// FullRounded
export const FullRounded: Story = {
  render: () => (
    <div className="flex flex-col gap-5">
      <Button rounded className="button-text-xs">
        Full
      </Button>
      <Button rounded variant="outline" className="button-text-md">
        Full
      </Button>
    </div>
  ),
};

// Size
export const SizeButton: Story = {
  render: () => (
    <div className="flex flex-col gap-5">
      <Button className="button-text-xs">Extra Small</Button>
      <Button className="button-text-sm">Small</Button>
      <Button className="button-text-md">Medium</Button>
      <Button className="button-text-lg">Large</Button>
    </div>
  ),
};

// FullWidth
export const FullWidth: Story = {
  parameters: {
    docs: {
      story: 'Use the fullWidth props in your component',
    },
  },
  render: () => (
    <div className="flex w-full flex-col gap-5">
      <Button fullWidth>Full Width Button</Button>
      <Button fullWidth variant="outline">
        Full width
      </Button>
    </div>
  ),
};

// States
export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-5">
      <Button>Normal</Button>
      <Button isDisabled>Disabled Button</Button>
      <Button isLoading>Loading</Button>
      <Button isLoading loadingText="Processing...">
        Submit
      </Button>
    </div>
  ),
};

// With Icons
export const WithIcons: Story = {
  parameters: {
    docs: {
      description: 'Use the startIcon & endIcon props to add icons to the Button',
    },
  },
  render: () => (
    <div className="flex flex-col gap-5">
      <Button startIcon={<ArrowRightIcon />}>Start Icon</Button>
      <Button endIcon={<ArrowLeftIcon />}>End Icon</Button>
      <Button startIcon={<ArrowRightIcon />} endIcon={<ArrowLeftIcon />}>
        Both Icons
      </Button>
    </div>
  ),
};

// Icon Buttons
export const IconButtons: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Use button-icon-* classes for icon-only buttons with different sizes',
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-5">
      <Button className="button-icon-xs">
        <span>+</span>
      </Button>
      <Button className="button-icon-sm">
        <span>+</span>
      </Button>
      <Button className="button-icon-md">
        <span>+</span>
      </Button>
      <Button className="button-icon-lg">
        <span>+</span>
      </Button>
    </div>
  ),
};

// Variants
export const FillButtons: Story = {
  render: () => (
    <div className="flex flex-col gap-5">
      <Button variant="fill" color="primary">
        Primary
      </Button>
      <Button variant="fill" color="secondary">
        Secondary
      </Button>
      <Button variant="fill" color="info">
        Info
      </Button>
      <Button variant="fill" color="warning">
        Warning
      </Button>
      <Button variant="fill" color="success">
        Success
      </Button>
      <Button variant="fill" color="neutral">
        Neutral
      </Button>
    </div>
  ),
};

export const OutlineButtons: Story = {
  render: () => (
    <div className="flex flex-col gap-5">
      <Button variant="outline" color="primary">
        Primary
      </Button>
      <Button variant="outline" color="secondary">
        Secondary
      </Button>
      <Button variant="outline" color="info">
        Info
      </Button>
      <Button variant="outline" color="warning">
        Warning
      </Button>
      <Button variant="outline" color="success">
        Success
      </Button>
      <Button variant="outline" color="neutral">
        Neutral
      </Button>
    </div>
  ),
};

export const GhostButtons: Story = {
  render: () => (
    <div className="flex flex-col gap-5">
      <Button variant="ghost" color="primary">
        Primary
      </Button>
      <Button variant="ghost" color="secondary">
        Secondary
      </Button>
      <Button variant="ghost" color="info">
        Info
      </Button>
      <Button variant="ghost" color="warning">
        Warning
      </Button>
      <Button variant="ghost" color="success">
        Success
      </Button>
      <Button variant="ghost" color="neutral">
        Neutral
      </Button>
    </div>
  ),
};

export const LinkButtons: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Note: When using as="link", if href is not provided, it defaults to "#"',
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-5">
      <Button as="link" variant="link" color="primary">
        Primary
      </Button>
      <Button as="link" variant="link" color="secondary">
        Secondary
      </Button>
      <Button as="link" variant="link" color="info">
        Info
      </Button>
      <Button as="link" variant="link" color="error">
        Error
      </Button>
      <Button as="link" variant="link" color="success">
        Success
      </Button>
      <Button as="link" variant="link" color="neutral">
        Neutral
      </Button>
    </div>
  ),
};

// Variants Disabled
export const FillButtonsDisabled: Story = {
  render: () => (
    <div className="flex flex-col gap-5">
      <Button isDisabled variant="fill" color="primary">
        Primary
      </Button>
      <Button isDisabled variant="fill" color="secondary">
        Secondary
      </Button>
      <Button isDisabled variant="fill" color="info">
        Info
      </Button>
      <Button isDisabled variant="fill" color="warning">
        Warning
      </Button>
      <Button isDisabled variant="fill" color="success">
        Success
      </Button>
      <Button isDisabled variant="fill" color="neutral">
        Neutral
      </Button>
    </div>
  ),
};

export const OutlineButtonsDisabled: Story = {
  render: () => (
    <div className="flex flex-col gap-5">
      <Button isDisabled variant="outline" color="primary">
        Primary
      </Button>
      <Button isDisabled variant="outline" color="secondary">
        Secondary
      </Button>
      <Button isDisabled variant="outline" color="info">
        Info
      </Button>
      <Button isDisabled variant="outline" color="warning">
        Warning
      </Button>
      <Button isDisabled variant="outline" color="success">
        Success
      </Button>
      <Button isDisabled variant="outline" color="neutral">
        Neutral
      </Button>
    </div>
  ),
};

export const GhostButtonsDisabled: Story = {
  render: () => (
    <div className="flex flex-col gap-5">
      <Button isDisabled variant="ghost" color="primary">
        Primary
      </Button>
      <Button isDisabled variant="ghost" color="secondary">
        Secondary
      </Button>
      <Button isDisabled variant="ghost" color="info">
        Info
      </Button>
      <Button isDisabled variant="ghost" color="warning">
        Warning
      </Button>
      <Button isDisabled variant="ghost" color="success">
        Success
      </Button>
      <Button isDisabled variant="ghost" color="neutral">
        Neutral
      </Button>
    </div>
  ),
};

export const LinkButtonsDisabled: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Note: When using as="link", if href is not provided, it defaults to "#"',
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-5">
      <Button isDisabled as="link" variant="link" color="primary">
        Primary
      </Button>
      <Button isDisabled as="link" variant="link" color="secondary">
        Secondary
      </Button>
      <Button isDisabled as="link" variant="link" color="info">
        Info
      </Button>
      <Button isDisabled as="link" variant="link" color="warning">
        Warning
      </Button>
      <Button isDisabled as="link" variant="link" color="success">
        Success
      </Button>
      <Button isDisabled as="link" variant="link" color="neutral">
        Neutral
      </Button>
    </div>
  ),
};
