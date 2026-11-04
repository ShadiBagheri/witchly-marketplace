import * as React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';

export type SheetProps = React.ComponentProps<typeof SheetPrimitive.Root>;

export type SheetTriggerProps = React.ComponentProps<typeof SheetPrimitive.Trigger>;

export type SheetCloseProps = React.ComponentProps<typeof SheetPrimitive.Close>;

export type SheetPortalProps = React.ComponentProps<typeof SheetPrimitive.Portal>;

export type SheetOverlayProps = React.ComponentProps<typeof SheetPrimitive.Overlay>;

export type SheetContentProps = React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: 'top' | 'right' | 'bottom' | 'left';
};
export type SheetHeaderProps = React.ComponentProps<'div'>;

export type SheetHeaderProps = React.ComponentProps<'div'>;

export type SheetFooterProps = React.ComponentProps<'div'>;

export type SheetTitleProps = React.ComponentProps<typeof SheetPrimitive.Title>;

export type SheetDescriptionProps = React.ComponentProps<typeof SheetPrimitive.Description>;
