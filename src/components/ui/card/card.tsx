import * as React from 'react';
import { cn } from '@/utils/ui';

type CardProps = React.ComponentProps<'div'>;

export const Card = ({ className, ...props }: CardProps) => {
  return (
    <div data-slot="card" className={cn('bg-background text-foreground', className)} {...props} />
  );
};

export const CardHeader = ({ className, ...props }: CardProps) => {
  return <div data-slot="card-header" className={className} {...props} />;
};

export const CardMedia = ({ className, ...props }: CardProps) => {
  return (
    <div
      data-slot="card-media"
      className={cn('flex w-full justify-center', className)}
      {...props}
    />
  );
};

export const CardAction = ({ className, ...props }: CardProps) => {
  return <div data-slot="card-action" className={cn('w-full', className)} {...props} />;
};

export const CardContent = ({ className, ...props }: CardProps) => {
  return <div data-slot="card-content" className={cn('w-full', className)} {...props} />;
};

export const CardTitle = ({ className, ...props }: CardProps) => {
  return <div data-slot="card-title" className={className} {...props} />;
};

export const CardDescription = ({ className, ...props }: CardProps) => {
  return <div data-slot="card-description" className={className} {...props} />;
};

export const CardFooter = ({ className, ...props }: CardProps) => {
  return <div data-slot="card-footer" className={cn('w-full', className)} {...props} />;
};
