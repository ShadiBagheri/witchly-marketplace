import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/ui';
import type { BadgeProps } from './types';

export const badgeVariants = cva('badge', {
  variants: {
    variant: {
      fill: 'badge-fill',
      outline: 'badge-outline',
      ghost: 'badge-ghost',
    },
    color: {
      primary: 'badge-primary',
      secondary: 'badge-secondary',
      info: 'badge-info',
      success: 'badge-success',
      warning: 'badge-warning',
      neutral: 'badge-neutral',
    },
    rounded: {
      true: 'badge-fullRounded',
    },
  },
  defaultVariants: {
    variant: 'fill',
    color: 'neutral',
    rounded: true,
  },
});

// ---------- Content Type Detection ----------

enum ContentType {
  Empty,
  Numeric,
  Percent,
  Text,
}

const getContentType = (val: React.ReactNode): ContentType => {
  if (val == null || (typeof val === 'string' && !val.trim())) {
    return ContentType.Empty;
  }

  if (typeof val === 'number' || (typeof val === 'string' && /^\d+$/.test(val))) {
    return ContentType.Numeric;
  }

  if (typeof val === 'string' && /^\d+\s*%$/.test(val)) {
    return ContentType.Percent;
  }

  return ContentType.Text;
};

// ---------- Content Formatting ----------

const formatNumber = (val: string | number, max: number): string => {
  const num = Number(val);

  if (Number.isNaN(num)) return String(val);

  return num > max ? `+${max}` : String(num);
};

// ---------- Class Builders ----------

const getPaddingClass = (type: ContentType, size: string): string | undefined => {
  if (type === ContentType.Empty || type === ContentType.Numeric) {
    return undefined;
  }

  if (type === ContentType.Percent) {
    return 'px-3 py-1';
  }

  return size ? `badge-${size}-padding` : 'badge-padding-base';
};

const getShapeClass = (type: ContentType, size: string): string | undefined => {
  return type === ContentType.Empty || type === ContentType.Numeric
    ? `badge-${size}-shape`
    : undefined;
};

const getIconSizeClass = (size: string): string => {
  return `badge-icon-${size}`;
};

// ---------- Component ----------

export const Badge = ({
  className,
  variant,
  color,
  size = 'md',
  rounded = true,
  children,
  icon,
  iconPosition = 'left',
  maxNumber = 99,
  offset = false,
  ...props
}: BadgeProps) => {
  const contentType = getContentType(children);
  const isEmpty = contentType === ContentType.Empty;
  const isNumeric = contentType === ContentType.Numeric;
  const isNumericLike = isNumeric || contentType === ContentType.Percent;

  const content = isNumeric ? formatNumber(children as string | number, maxNumber) : children;

  const badgeClasses = cn(
    badgeVariants({ variant, color, rounded }),
    size && `badge-${size}`,
    getShapeClass(contentType, size),
    getPaddingClass(contentType, size),
    icon && 'has-icon',
    !offset && className,
  );

  const renderIcon = () => {
    if (!icon) return null;

    const iconSizeClass = getIconSizeClass(size);

    if (React.isValidElement<{ className?: string }>(icon)) {
      return React.cloneElement(icon, {
        className: cn(icon.props.className, iconSizeClass),
      });
    }

    return icon;
  };

  const badge = (
    <span className={badgeClasses} data-numeric={isNumericLike || undefined} {...props}>
      {icon && iconPosition === 'left' && renderIcon()}
      {!isEmpty && content}
      {icon && iconPosition === 'right' && renderIcon()}
    </span>
  );

  if (!offset) return badge;

  return (
    <span
      className={cn(
        'badge-wrapper',
        rounded && 'badge-wrapper-rounded',
        size && `badge-wrapper-${size}`,
        className,
      )}
    >
      {badge}
    </span>
  );
};
