import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ButtonColor, ButtonVariant } from './types';
import { Button } from './button';

describe('Button Component', () => {
  test('renders correctly with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: 'Click me' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('button', 'button-fill');
    expect(button).toHaveClass('button-text-md');
    expect(button).toHaveAttribute('type', 'button');
  });

  test('renders children correctly', () => {
    render(<Button>Submit Form</Button>);

    expect(screen.getByRole('button', { name: 'Submit Form' })).toBeInTheDocument();
  });

  test('applies custom className', () => {
    render(<Button className="custom-class">Button</Button>);

    expect(screen.getByRole('button')).toHaveClass('custom-class');
  });

  test.each([
    ['fill', 'button-fill'],
    ['outline', 'button-outline'],
    ['ghost', 'button-ghost'],
    ['link', 'button-link'],
  ] as const)('renders variant="%s"', (variant, expectedClass) => {
    render(<Button variant={variant as ButtonVariant}>Button Variant</Button>);

    expect(screen.getByRole('button', { name: 'Button Variant' })).toHaveClass(expectedClass);
  });

  test.each([
    ['primary', 'button-primary'],
    ['secondary', 'button-secondary'],
    ['info', 'button-info'],
    ['warning', 'button-warning'],
    ['success', 'button-success'],
    ['neutral', 'button-neutral'],
  ] as const)('renders color="%s"', (color, expectedClass) => {
    render(<Button color={color as ButtonColor}>Button Color</Button>);

    expect(screen.getByRole('button', { name: 'Button Color' })).toHaveClass(expectedClass);
  });

  test('applies rounded class when rounded is true', () => {
    render(<Button rounded>Rounded Button</Button>);

    expect(screen.getByRole('button')).toHaveClass('button-fullRounded');
  });

  test('does not apply rounded class by default', () => {
    render(<Button>Default Button</Button>);

    expect(screen.getByRole('button')).not.toHaveClass('button-fullRounded');
  });

  test('applies fullWidth class when fullWidth is true', () => {
    render(<Button fullWidth>Full Width</Button>);

    expect(screen.getByRole('button')).toHaveClass('button-fullWidth');
  });

  test('does not apply fullWidth class by default', () => {
    render(<Button>Default Button</Button>);

    expect(screen.getByRole('button')).not.toHaveClass('button-fullWidth');
  });

  test('applies disabled class when isDisabled is true', () => {
    render(<Button isDisabled>Disabled Button</Button>);

    expect(screen.getByRole('button')).toHaveClass('button-disabled');
  });

  test('disables the button when isDisabled is true', () => {
    render(<Button isDisabled>Disabled Button</Button>);

    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('does not disable the button by default', () => {
    render(<Button>Enabled Button</Button>);

    expect(screen.getByRole('button')).toBeEnabled();
  });

  test('renders loadingText when isLoading is true', () => {
    render(
      <Button isLoading loadingText="Please wait...">
        Submit
      </Button>,
    );

    expect(screen.getByRole('button', { name: /please wait/i })).toBeInTheDocument();
  });

  test('renders children when loadingText is not provided', () => {
    render(<Button isLoading>Submit</Button>);

    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  test('disables the button while loading', () => {
    render(<Button isLoading>Submit</Button>);

    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('applies custom loadingClasses to the loading icon', () => {
    const { container } = render(
      <Button isLoading loadingClasses="custom-spinner">
        Submit
      </Button>,
    );

    expect(container.querySelector('.custom-spinner')).toBeInTheDocument();
  });

  test('renders startIcon', () => {
    render(<Button startIcon={<span data-testid="start-icon">+</span>}>Add Item</Button>);

    expect(screen.getByTestId('start-icon')).toBeInTheDocument();
  });

  test('renders endIcon', () => {
    render(<Button endIcon={<span data-testid="end-icon">→</span>}>Continue</Button>);

    expect(screen.getByTestId('end-icon')).toBeInTheDocument();
  });

  test('renders both startIcon and endIcon', () => {
    render(
      <Button
        startIcon={<span data-testid="start-icon">+</span>}
        endIcon={<span data-testid="end-icon">→</span>}
      >
        Continue
      </Button>,
    );

    expect(screen.getByTestId('start-icon')).toBeInTheDocument();
    expect(screen.getByTestId('end-icon')).toBeInTheDocument();
  });

  test('renders loading icon instead of startIcon while loading', () => {
    render(
      <Button isLoading startIcon={<span data-testid="start-icon">+</span>}>
        Submit
      </Button>,
    );

    expect(screen.queryByTestId('start-icon')).not.toBeInTheDocument();
  });

  test.each(['button', 'submit', 'reset'] as const)('renders type="%s"', (type) => {
    render(<Button type={type}>Action</Button>);

    expect(screen.getByRole('button')).toHaveAttribute('type', type);
  });

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();

    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('does not call onClick when disabled', () => {
    const handleClick = jest.fn();

    render(
      <Button isDisabled onClick={handleClick}>
        Disabled
      </Button>,
    );

    fireEvent.click(screen.getByRole('button'));

    expect(handleClick).not.toHaveBeenCalled();
  });

  test('forwards additional props to the button element', () => {
    render(
      <Button data-testid="custom-button" aria-label="Custom action">
        Action
      </Button>,
    );

    const button = screen.getByTestId('custom-button');

    expect(button).toHaveAttribute('aria-label', 'Custom action');
  });

  test('renders an anchor element when as="link"', () => {
    render(
      <Button as="link" href="/products">
        Products
      </Button>,
    );

    expect(screen.getByRole('link', { name: 'Products' })).toBeInTheDocument();
  });

  test('renders the correct href', () => {
    render(
      <Button as="link" href="/products">
        Products
      </Button>,
    );

    expect(screen.getByRole('link', { name: 'Products' })).toHaveAttribute('href', '/products');
  });

  test('uses # as the default href when href is not provided', () => {
    render(<Button as="link">Products</Button>);

    expect(screen.getByRole('link', { name: 'Products' })).toHaveAttribute('href', '#');
  });

  test('applies variant and color classes to the link', () => {
    render(
      <Button as="link" href="/products" variant="outline" color="secondary">
        Products
      </Button>,
    );

    const link = screen.getByRole('link', { name: 'Products' });

    expect(link).toHaveClass('button', 'button-outline', 'button-secondary');
  });
});
