import * as React from 'react';
import { TypographyProps } from './types';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/ui';
import { Slot } from 'radix-ui';

export const typographyVariants = cva('typography', {
  variants: {
    color: {
      primary: 'typography-primary',
      secondary: 'typography-secondary',
      info: 'typography-info',
      success: 'typography-success',
      warning: 'typography-warning',
      neutral: 'typography-neutral',
    },
    align: {
      left: 'text-left',
      right: 'text-right',
      center: 'text-center',
      justify: 'text-justify',
    },
    truncate: {
      end: 'truncate',
      start: 'truncate-start',
    },
    decoration: {
      underline: 'underline',
      lineThrough: 'line-through',
      overline: 'overline',
    },
    transform: {
      uppercase: 'uppercase',
      capitalize: 'capitalize',
      lowercase: 'lowercase',
    },
    lineClamp: {
      1: 'line-clamp-1',
      2: 'line-clamp-2',
      3: 'line-clamp-3',
      4: 'line-clamp-4',
      5: 'line-clamp-5',
      6: 'line-clamp-6',
      7: 'line-clamp-7',
      8: 'line-clamp-8',
      9: 'line-clamp-9',
      10: 'line-clamp-10',
      11: 'line-clamp-11',
      12: 'line-clamp-12',
    },
    inherit: {
      true: 'typography-inherit',
    },
  },
});

export const Typography = ({
  as: Tag = 'p',
  children,
  className,
  asChild,
  color,
  align,
  decoration,
  transform,
  lineClamp,
  truncate,
  inherit = false,
  dir = 'auto',
  ...props
}: TypographyProps) => {
  const CompTag = asChild ? Slot.Root : Tag;
  return (
    <CompTag
      data-slot="typography"
      dir={dir}
      className={cn(
        typographyVariants({
          lineClamp,
          inherit,
          color,
          align,
          transform,
          decoration,
          truncate,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </CompTag>
  );
};
