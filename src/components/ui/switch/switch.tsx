import { Switch as SwitchPrimitive } from 'radix-ui';
import { cn } from '@/utils/ui';
import type { SwitchProps } from './types';

export const Switch = ({ children, classNames, dir = 'auto', ...props }: SwitchProps) => {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      dir={dir}
      className={cn('peer switch', classNames?.root)}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn('switch-thumb', classNames?.thumb)}
      >
        {children}
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  );
};
