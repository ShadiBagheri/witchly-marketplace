import React from 'react';
import { LinkProps } from 'next/link';
import { VariantProps } from 'class-variance-authority';
import { ColorVariant } from '@/components/ui/types';
import { buttonVariants } from './button';

export type ButtonTypes = 'button' | 'submit' | 'reset';

export type ButtonVariant = 'fill' | 'outline' | 'ghost' | 'link';

export type ButtonColor = Exclude<ColorVariant, 'muted', 'white', 'gray'>;

export type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  variant?: ButtonVariant;
  type?: ButtonTypes;
  color?: ButtonColor;
  rounded?: boolean;
  fullWidth?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  loadingClasses?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

export interface ButtonAsButton extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'color'
> {
  as?: 'button';
  href?: never;
}

export interface ButtonAsLink
  extends
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'color'>,
    Omit<LinkProps, 'href'> {
  as?: 'link';
  href?: LinkProps['href'];
}

export type ButtonProps = ButtonBaseProps & (ButtonAsButton | ButtonAsLink);
