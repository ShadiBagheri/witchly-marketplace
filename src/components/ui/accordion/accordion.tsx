'use client';

import * as React from 'react';
import { Accordion as AccordionPrimitive } from 'radix-ui';
import { cn } from '@/utils/ui';
import { ArrowDownIcon } from '@icons';

const Accordion = ({
  className,
  activeFilterValue,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root> & { activeFilterValue?: unknown }) => {
  return <AccordionPrimitive.Root className={cn(className)} data-slot="accordion" {...props} />;
};

const AccordionItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('accordion-item', className)}
    data-slot="accordion-item"
    {...props}
  />
));

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn('accordion-trigger', className)}
      data-slot="accordion-trigger"
      {...props}
    >
      {children}
      <ArrowDownIcon className="accordion-icon" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn('accordion-content', className)}
    data-slot="accordion-content"
    {...props}
  >
    {children}
  </AccordionPrimitive.Content>
));

Accordion.displayName = 'Accordion';
AccordionItem.displayName = 'AccordionItem';
AccordionTrigger.displayName = 'AccordionTrigger';
AccordionContent.displayName = 'AccordionContent';

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
