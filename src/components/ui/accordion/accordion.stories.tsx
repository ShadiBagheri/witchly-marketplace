import React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './accordion';

const meta: Meta<typeof Accordion> = {
  title: 'UI/Accordion',
  component: Accordion,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Basic: Story = {
  render: () => (
    <Accordion type="single" collapsible className="border-secondary-400 w-125 rounded-xl border-2">
      <AccordionItem value="item-1" className="p-6">
        <AccordionTrigger className="text-lg font-medium">Click to Expand</AccordionTrigger>
        <AccordionContent className="text-left">
          This is the content inside the accordion.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const SpecialCase: Story = {
  render: () => (
    <Accordion
      type="single"
      collapsible
      className="bg-neutral-30 border-neutral-40 w-full rounded-lg border-2"
    >
      <AccordionItem value="item-1" className="p-6">
        <AccordionTrigger className="flex-row-reverse text-lg">
          Trending Mystical Services
        </AccordionTrigger>
        <AccordionContent className="text-right text-sm">
          Discover the most popular spells, readings, and magical items from our community
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
