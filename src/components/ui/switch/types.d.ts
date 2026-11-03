import type { ComponentProps } from 'react';
import type * as SwitchPrimitive from '@radix-ui/react-switch';
import type { PropsWithChildren } from '@/types/children';

export type SwitchProps = Omit<ComponentProps<typeof SwitchPrimitive.Root>, 'className'> &
  PropsWithChildren & {
    classNames?: {
      root?: string;
      thumb?: string;
    };
    dir?: 'rtl' | 'ltr' | 'auto';
  };
