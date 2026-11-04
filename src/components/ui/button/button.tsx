import Link from 'next/link';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/ui';
import { ButtonBaseProps, ButtonProps } from './types';
import { LoadingCircleIcon } from '@icons';

export const buttonVariants = cva('button', {
  variants: {
    variant: {
      fill: 'button-fill',
      outline: 'button-outline',
      ghost: 'button-ghost',
      link: 'button-link',
    },
    color: {
      primary: 'button-primary',
      secondary: 'button-secondary',
      info: 'button-info',
      warning: 'button-warning',
      success: 'button-success',
      neutral: 'button-neutral',
    },
    rounded: {
      true: 'button-fullRounded',
    },
    fullWidth: {
      true: 'button-fullWidth',
    },
    isDisabled: {
      true: 'button-disabled',
    },
  },
  defaultVariants: {
    variant: 'fill',
  },
});

export const Button = ({
  as = 'button',
  variant,
  color,
  rounded = false,
  fullWidth = false,
  isDisabled = false,
  isLoading = false,
  loadingText,
  loadingClasses,
  startIcon,
  endIcon,
  href,
  children,
  type = 'button',
  className = 'button-text-md',
  ...props
}: ButtonProps) => {
  const buttonClasses = cn(
    buttonVariants({
      variant,
      color,
      rounded,
      fullWidth,
      isDisabled,
    }),
    className,
  );
  const buttonContent = (
    <>
      {isLoading ? (
        <span className={cn(children && 'mr-2')}>
          <LoadingCircleIcon className={cn('size-5 animate-spin', loadingClasses)} />
        </span>
      ) : startIcon ? (
        <span className={cn(children && 'ml-2')}>{startIcon}</span>
      ) : null}
      {isLoading ? (loadingText ? loadingText : children) : children}
      {endIcon ? <span className={cn(children && 'mr-2')}>{endIcon}</span> : null}
    </>
  );

  if (as === 'link') {
    return (
      <Link href={href || '#'} className={buttonClasses} {...(props as ButtonBaseProps)}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={isDisabled || isLoading}
      {...(props as ButtonBaseProps)}
      className={buttonClasses}
    >
      {buttonContent}
    </button>
  );
};
