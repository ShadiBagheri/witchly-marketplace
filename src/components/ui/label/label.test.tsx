import { render, screen } from '@testing-library/react';
import { Label } from './label';
import React from 'react';

describe('Label Component', () => {
  test('render the label', () => {
    const labelText = 'Username';
    render(<Label>{labelText}</Label>);

    const labelElement = screen.getByText(labelText);
    expect(labelElement).toBeInTheDocument();
  });

  test('render with htmlFor and data-slot attributes', () => {
    const testHtmlFor = 'email-address';
    render(<Label htmlFor={testHtmlFor}>Email</Label>);

    const labelElement = screen.getByText('Email');
    expect(labelElement).toHaveAttribute('for', testHtmlFor);
    expect(labelElement).toHaveAttribute('data-slot', 'label');
  });

  test('apply default cva classes', () => {
    render(<Label>cva Label</Label>);

    const labelElement = screen.getByText('cva Label');

    expect(labelElement).toHaveClass('label-base');
    expect(labelElement).toHaveClass('label-left');
  });

  test('apply custom size and align variants', () => {
    render(
      <Label size="lg" align="center">
        Large centered label
      </Label>,
    );

    const labelElement = screen.getByText('Large centered label');

    expect(labelElement).toHaveClass('label-lg');
    expect(labelElement).toHaveClass('label-center');
    expect(labelElement).not.toHaveClass('label-base');
    expect(labelElement).not.toHaveClass('label-left');
  });

  test('merge custom className with cva variants', () => {
    const customClasses = 'font-bold underline';
    render(
      <Label size="sm" className={customClasses}>
        Small label with custom styles
      </Label>,
    );

    const labelElement = screen.getByText('Small label with custom styles');

    expect(labelElement).toHaveClass(customClasses);
    expect(labelElement).toHaveClass('font-bold');
    expect(labelElement).toHaveClass('underline');
    expect(labelElement).toHaveClass('label-sm');
  });

  test('forward ref to the DOM element', () => {
    const mockRef = React.createRef<HTMLLabelElement>();
    render(<Label ref={mockRef}>Ref</Label>);

    expect(mockRef.current).toBeInTheDocument();
    expect(mockRef.current?.tagName).toBe('LABEL');
  });
});
