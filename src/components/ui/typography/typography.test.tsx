import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Typography, typographyVariants } from './typography';
import { ColorVariant } from '@/components/ui/types';

import {
  AlignType,
  DecorationValue,
  DirValue,
  LineClampValue,
  Tags,
  TransformValue,
} from './types';

describe('Typography Component', () => {
  test('render with default props', () => {
    render(<Typography>Typography Test</Typography>);

    const element = screen.getByText('Typography Test');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('P');
    expect(element).toHaveAttribute('dir', 'auto');
    expect(element).toHaveClass('typography');
  });

  test.each([
    ['primary', 'typography-primary'],
    ['secondary', 'typography-secondary'],
    ['info', 'typography-info'],
    ['success', 'typography-success'],
    ['warning', 'typography-warning'],
    ['neutral', 'typography-neutral'],
  ])('render %s color', (color, expectedClass) => {
    render(<Typography color={color as ColorVariant}>Color Test</Typography>);

    const element = screen.getByText('Color Test');
    expect(element).toHaveClass(expectedClass);
  });

  test.each([
    ['left', 'text-left'],
    ['right', 'text-right'],
    ['center', 'text-center'],
    ['justify', 'text-justify'],
  ])('render %s align', (align, expectedClass) => {
    render(<Typography align={align as AlignType}>Align Test</Typography>);

    const element = screen.getByText('Align Test');
    expect(element).toHaveClass(expectedClass);
  });

  test.each([
    ['end', 'truncate'],
    ['start', 'truncate-start'],
  ] as const)('renders with truncate="%s"', (truncate, expectedClass) => {
    render(<Typography truncate={truncate}>Truncate Test</Typography>);

    const element = screen.getByText('Truncate Test');
    expect(element).toHaveClass(expectedClass);
  });

  test.each([
    ['underline', 'underline'],
    ['lineThrough', 'line-through'],
    ['overline', 'overline'],
  ])('render %s decoration', (decoration, expectedClass) => {
    render(<Typography decoration={decoration as DecorationValue}>Decoration Test</Typography>);

    const element = screen.getByText('Decoration Test');
    expect(element).toHaveClass(expectedClass);
  });

  test.each([
    ['uppercase', 'uppercase'],
    ['capitalize', 'capitalize'],
    ['lowercase', 'lowercase'],
  ])('render %s transform', (transform, expectedClass) => {
    render(<Typography transform={transform as TransformValue}>Transform Test</Typography>);

    const element = screen.getByText('Transform Test');
    expect(element).toHaveClass(expectedClass);
  });

  test.each([
    [1, 'line-clamp-1'],
    [2, 'line-clamp-2'],
    [3, 'line-clamp-3'],
    [4, 'line-clamp-4'],
    [5, 'line-clamp-5'],
    [6, 'line-clamp-6'],
    [7, 'line-clamp-7'],
    [8, 'line-clamp-8'],
    [9, 'line-clamp-9'],
    [10, 'line-clamp-10'],
    [11, 'line-clamp-11'],
    [12, 'line-clamp-12'],
  ])('render %s line-clamp', (lineclamp, expectedClass) => {
    render(<Typography lineClamp={lineclamp as LineClampValue}>Line-Clamp Test</Typography>);

    const element = screen.getByText('Line-Clamp Test');
    expect(element).toHaveClass(expectedClass);
  });

  test.each([
    ['rtl', 'rtl'],
    ['ltr', 'ltr'],
    ['auto', 'auto'],
  ])('render with dir="%s"', (dir, expectedDir) => {
    render(<Typography dir={dir as DirValue}>Direction Test</Typography>);

    const element = screen.getByText('Direction Test');
    expect(element).toHaveAttribute('dir', expectedDir);
  });

  test.each([
    ['h1', 'H1'],
    ['h2', 'H2'],
    ['h3', 'H3'],
    ['h4', 'H4'],
    ['h5', 'H5'],
    ['h6', 'H6'],
    ['p', 'P'],
    ['span', 'SPAN'],
    ['div', 'DIV'],
  ])('render %s tag when use that for a props', (tag, expectedTagName) => {
    render(<Typography as={tag as Tags}>Tags Test</Typography>);

    const element = screen.getByText('Tags Test');
    expect(element.tagName).toBe(expectedTagName);
  });

  test('renders child when asChild is True', () => {
    render(
      <Typography asChild>
        <span data-testid="child-element">asChild Test</span>
      </Typography>,
    );

    const element = screen.getByTestId('child-element');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('SPAN');
    expect(element).toHaveTextContent('asChild Test');
  });

  test('applies custom className', () => {
    render(<Typography className="custom-class">Custom Test</Typography>);

    const element = screen.getByText('Custom Test');
    expect(element).toHaveClass('custom-class');
  });

  test('render with data-slot attribute', () => {
    render(<Typography>Data-Slot Test</Typography>);

    const element = screen.getByText('Data-Slot Test');
    expect(element).toHaveAttribute('data-slot');
  });

  test('pass through additional props', () => {
    render(<Typography data-test="test-data">Props Data-Test</Typography>);

    const element = screen.getByText('Props Data-Test');
    expect(element).toHaveAttribute('data-test', 'test-data');
  });

  test('apply inherit class when is True', () => {
    render(<Typography inherit={true}>Inherit True Test</Typography>);

    const element = screen.getByText('Inherit True Test');
    expect(element).toHaveClass('typography-inherit');
  });

  test('does not apply inherit class when is False', () => {
    render(<Typography inherit={false}>Inherit False Test</Typography>);

    const element = screen.getByText('Inherit False Test');
    expect(element).not.toHaveClass('typography-inherit');
  });

  test('does not apply inherit class when is not provided', () => {
    render(<Typography>Not Provided Inherit Test</Typography>);

    const element = screen.getByText('Not Provided Inherit Test');
    expect(element).not.toHaveClass('typography-inherit');
  });

  test('typographyVariants Function includes inherit class when is True', () => {
    const classes = typographyVariants({
      inherit: true,
    });

    expect(classes).toContain('typography-inherit');
  });

  test('typographyVariants Funcrion not includes inherit class when is False', () => {
    const classes = typographyVariants({
      inherit: false,
    });

    expect(classes).not.toContain('typography-inherit');
  });

  test('typographyVariants Function combines classes', () => {
    const classes = typographyVariants({
      color: 'primary',
      decoration: 'lineThrough',
      transform: 'capitalize',
      truncate: 'start',
      align: 'center',
      lineClamp: 2,
      inherit: true,
    });

    expect(classes).toContain('typography');
    expect(classes).toContain('typography-primary');
    expect(classes).toContain('text-center');
    expect(classes).toContain('truncate-start');
    expect(classes).toContain('line-clamp-2');
    expect(classes).toContain('line-through');
    expect(classes).toContain('capitalize');
    expect(classes).toContain('typography-inherit');
  });
});
