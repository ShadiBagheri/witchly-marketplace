'use client';

import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/ui';
import { TextInputProps } from './types';
import { Label } from '@/components/ui/label';

export const textInputVariants = cva('textInput', {
  variants: {
    variant: {
      outline: 'textInput-outline',
      fill: 'textInput-fill',
      ghost: 'textInput-ghost',
    },
    color: {
      primary: 'textInput-primary',
      secondary: 'textInput-secondary',
      neutral: 'textInput-neutral',
    },
    fullWidth: {
      true: 'w-full',
    },
    disabled: {
      true: 'textInput-disabled',
    },
  },
  defaultVariants: {
    color: 'neutral',
  },
});

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      classNames,
      variant,
      color,
      disabled,
      fullWidth = false,
      placeholder = 'Marketplace...',
      value,
      dir = 'ltr',
      onValueChange,
      startIcon,
      endIcon,
      endAction,
      label,
      inputMessage,
      labelProps,
      ...props
    },
    ref,
  ) => {
    const inputClasses = cn(
      textInputVariants({
        color,
        variant,
        fullWidth,
        disabled,
      }),
      classNames?.root,
      { ...props },
    );

    const inputId = React.useId();
    const hasLabel = !!label;
    const showMessage = !!inputMessage;

    return (
      <div className={cn('flex flex-col items-start', fullWidth ? 'w-full' : 'w-fit')} dir={dir}>
        {hasLabel && (
          <Label
            className={cn(classNames?.label, 'textInputLabel')}
            htmlFor={inputId}
            color={color}
            {...labelProps}
            dir={dir}
          >
            {label}
          </Label>
        )}
        <div className={inputClasses} dir={dir}>
          {startIcon && startIcon}
          <input
            id={inputId}
            dir={dir}
            type={props.type}
            ref={ref}
            data-slot="input"
            value={value}
            placeholder={placeholder}
            onChange={onValueChange}
            disabled={disabled}
            {...props}
            className={cn('w-full flex-1 focus:outline-none', classNames?.input)}
          />
          {endAction ? endAction : endIcon && endIcon}
        </div>
        {showMessage && (
          <Label
            className={cn(classNames?.inputMessage, 'textInputMessage')}
            htmlFor={inputId}
            color={color}
            {...labelProps}
            dir={dir}
          >
            {inputMessage}
          </Label>
        )}
      </div>
    );
  },
);

TextInput.displayName = 'TextInput';
