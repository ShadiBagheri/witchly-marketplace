import type * as React from 'react';
import type { ColorVariant, SizeVariant } from '@/components/ui/types';
import type { badgeVariants } from './badge';
import type { VariantProps } from 'class-variance-authority';

export type BadgeVariant = 'fill' | 'outline' | 'ghost';

export type BadgeColor = Exclude<ColorVariant, 'muted'>;

export type BadgeSize = SizeVariant;

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {
  variant?: BadgeVariant;
  color?: BadgeColor;
  size?: BadgeSize;
  rounded?: boolean;
  children?: React.ReactNode;
  icon?: React.ReactElement<{ className?: string }>;
  iconPosition?: 'left' | 'right';
  maxNumber?: number;
  wrapperClassName?: string;
  offset?: boolean;
}
