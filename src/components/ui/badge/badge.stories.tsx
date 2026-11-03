import React from 'react';
import { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Badge } from './badge';
import { SparklesIcon } from '@icons';

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The Badge component is used to display notifications and numeric or text labels. Numbers exceeding the max limit will be displayed as "+max".',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Playground: Story = {
  args: {
    children: 45,
    color: 'neutral',
    variant: 'fill',
    size: 'md',
    rounded: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Interactive state for testing all properties (variant, color, size, rounded, maxNumber, icon, and more)',
      },
    },
  },
  render: (args) => <Badge {...args} />,
};

export const Colors: Story = {
  parameters: {
    docs: {
      description: { story: 'All available colors in fill mode.' },
    },
  },
  render: () => {
    const colors = ['primary', 'secondary', 'info', 'warning', 'success', 'neutral'] as const;
    return (
      <div className="flex flex-wrap items-center gap-4">
        {colors.map((color) => (
          <Badge key={color} color={color}>
            {color}
          </Badge>
        ))}
      </div>
    );
  },
};

export const Variants: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Show two variant states: fill and ghost.',
      },
    },
  },
  render: () => {
    const variants = ['fill', 'ghost', 'outline'] as const;
    const colors = ['primary', 'secondary', 'info', 'warning', 'success', 'neutral'] as const;
    return (
      <div className="space-y-6">
        {variants.map((variant) => (
          <div key={variant}>
            <h3 className="mb-2 text-sm font-medium capitalize">{variant} Variant</h3>
            <div className="flex flex-wrap items-center gap-3">
              {colors.map((color) => (
                <Badge key={`${variant}-${color}`} variant={variant} color={color} size="xs">
                  9
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
};

export const Sizes: Story = {
  parameters: {
    docs: {
      description: { story: 'All sizes available from xs to 4xl.' },
    },
  },
  render: () => {
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'] as const;
    return (
      <div className="flex flex-wrap items-center gap-3">
        {sizes.map((size) => (
          <Badge key={size} size={size}>
            {size}
          </Badge>
        ))}
      </div>
    );
  },
};

export const WithIcons: Story = {
  parameters: {
    docs: {
      description: { story: 'Badges with icons on left or right position.' },
    },
  },
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="mb-2 text-sm font-medium">Icon on Left (Default)</h3>
        <div className="flex flex-wrap gap-3">
          <Badge icon={<SparklesIcon />} color="primary">
            Featured
          </Badge>
          <Badge icon={<SparklesIcon />} color="secondary">
            5 Notifications
          </Badge>
          <Badge icon={<SparklesIcon />} color="neutral">
            Completed
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium">Icon on Right</h3>
        <div className="flex flex-wrap gap-3">
          <Badge icon={<SparklesIcon />} iconPosition="right" color="primary">
            New
          </Badge>
          <Badge icon={<SparklesIcon />} iconPosition="right" color="secondary">
            Warning
          </Badge>
          <Badge icon={<SparklesIcon />} iconPosition="right" color="neutral">
            Success
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium">With Different Sizes</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Badge size="sm" icon={<SparklesIcon />} color="primary">
            Small
          </Badge>
          <Badge size="md" icon={<SparklesIcon />} color="secondary">
            Medium
          </Badge>
          <Badge size="lg" icon={<SparklesIcon />} color="neutral">
            Large
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium">Numeric with Icon</h3>
        <div className="flex flex-wrap gap-3">
          <Badge icon={<SparklesIcon />} color="primary">
            99
          </Badge>
          <Badge icon={<SparklesIcon />} color="secondary">
            150
          </Badge>
          <Badge icon={<SparklesIcon />} color="neutral">
            5
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium">Ghost Variant with Icons</h3>
        <div className="flex flex-wrap gap-3">
          <Badge variant="ghost" icon={<SparklesIcon />} color="primary">
            Ghost Primary
          </Badge>
          <Badge variant="ghost" icon={<SparklesIcon />} color="secondary">
            Ghost Secondary
          </Badge>
          <Badge variant="ghost" icon={<SparklesIcon />} color="neutral">
            Ghost Neutral
          </Badge>
        </div>
      </div>
    </div>
  ),
};

export const IconOnly: Story = {
  parameters: {
    docs: {
      description: { story: 'Badges with only icons, no text.' },
    },
  },
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge icon={<SparklesIcon />} color="primary" />
      <Badge icon={<SparklesIcon />} color="secondary" />
      <Badge icon={<SparklesIcon />} color="neutral" />
    </div>
  ),
};

export const Rounded: Story = {
  parameters: {
    docs: {
      description: { story: 'Displaying badges with rounded or sharp corners.' },
    },
  },
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="mb-2 text-sm font-medium">Rounded (default)</h3>
        <div className="flex flex-wrap gap-3">
          <Badge size="sm">5</Badge>
          <Badge size="sm">25</Badge>
          <Badge size="sm">99</Badge>
        </div>
      </div>
      <div>
        <h3 className="mb-2 text-sm font-medium">Not Rounded</h3>
        <div className="flex flex-wrap gap-3">
          <Badge rounded={false} size="sm">
            5
          </Badge>
          <Badge rounded={false} size="sm">
            25
          </Badge>
          <Badge rounded={false} size="sm">
            99
          </Badge>
        </div>
      </div>
    </div>
  ),
};

export const MaxNumber: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'When the numerical value exceeds the allowed limit, it is displayed as "+max" or with a custom value.',
      },
    },
  },
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="mb-1 text-sm font-medium">Default max (99)</h3>
        <div className="flex flex-wrap gap-3">
          <Badge size="sm">50</Badge>
          <Badge size="sm">100</Badge>
          <Badge size="sm">999</Badge>
        </div>
      </div>

      <div>
        <h3 className="mb-1 text-sm font-medium">Custom max (50)</h3>
        <div className="flex flex-wrap gap-3">
          <Badge maxNumber={50}>75</Badge>
          <Badge maxNumber={50}>100</Badge>
        </div>
      </div>

      <div>
        <h3 className="mb-1 text-sm font-medium">Custom max (9)</h3>
        <div className="flex flex-wrap gap-3">
          <Badge maxNumber={9} size="sm">
            15
          </Badge>
          <Badge maxNumber={9} size="sm">
            25
          </Badge>
        </div>
      </div>
    </div>
  ),
};

export const UsageExamples: Story = {
  parameters: {
    docs: {
      description: { story: 'Real-world usage examples.' },
    },
  },
  render: () => (
    <div className="flex flex-col space-y-8">
      <div className="space-y-4">
        <h3 className="mb-2 text-sm font-medium">Button with Badge</h3>
        <div className="relative h-14 w-14 rounded-md bg-neutral-400">
          <Badge offset size="xs" className="absolute -top-2 -right-2">
            16
          </Badge>
        </div>
        <div className="relative h-14 w-14 rounded-md bg-neutral-400">
          <Badge offset size="sm" className="absolute -top-2 -right-2">
            40
          </Badge>
        </div>
        <div className="relative h-14 w-14 rounded-md bg-neutral-400">
          <Badge offset size="md" className="absolute -top-2 -right-2">
            120
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium">Badge with Icons in Cards</h3>
        <div className="flex flex-col gap-4">
          <div className="bg-secondary-500 relative h-70 w-75 rounded-md">
            <Badge icon={<SparklesIcon />} className="absolute top-1 right-1">
              Special Offer
            </Badge>
          </div>
          <div className="bg-primary-500 relative h-70 w-75 rounded-md">
            <Badge
              variant="outline"
              color="neutral"
              size="lg"
              icon={<SparklesIcon />}
              iconPosition="right"
              className="absolute top-1 right-1"
            >
              Hot Deal
            </Badge>
          </div>
          <div className="relative h-70 w-75 rounded-md bg-neutral-300">
            <Badge
              variant="ghost"
              icon={<SparklesIcon />}
              color="primary"
              className="absolute top-1 right-1"
            >
              Verified
            </Badge>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium">Status Badges</h3>
        <div className="flex flex-wrap gap-3">
          <Badge icon={<SparklesIcon />} color="primary">
            Active
          </Badge>
          <Badge icon={<SparklesIcon />} color="secondary">
            Pending
          </Badge>
          <Badge icon={<SparklesIcon />} color="neutral">
            Updated
          </Badge>
        </div>
      </div>
    </div>
  ),
};
