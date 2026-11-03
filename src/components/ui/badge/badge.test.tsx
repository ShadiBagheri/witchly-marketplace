import React from 'react';
import { render, screen } from '@testing-library/react';
import { Badge } from './badge';
import '@testing-library/jest-dom';

describe('Badge Component', () => {
  test('renders correctly with default props', () => {
    render(<Badge>New</Badge>);
    const badge = screen.getByText('New');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('badge');
    expect(badge).toHaveClass('badge-fill');
    expect(badge).toHaveClass('badge-neutral');
    expect(badge).toHaveClass('badge-fullRounded');
    expect(badge).toHaveClass('badge-md');
  });
  test('renders children correctly', () => {
    render(<Badge>Featured</Badge>);
    expect(screen.getByText('Featured')).toBeInTheDocument();
  });
  test('renders React elements as children', () => {
    render(
      <Badge>
        <strong>Featured</strong>
      </Badge>,
    );
    expect(screen.getByText('Featured')).toBeInTheDocument();
  });

  test.each([
    ['fill', 'badge-fill'],
    ['outline', 'badge-outline'],
    ['ghost', 'badge-ghost'],
  ] as const)('applies %s variant', (variant, expectedClass) => {
    render(<Badge variant={variant}>New</Badge>);

    expect(screen.getByText('New')).toHaveClass(expectedClass);
  });

  test.each([
    ['primary', 'badge-primary'],
    ['secondary', 'badge-secondary'],
    ['info', 'badge-info'],
    ['success', 'badge-success'],
    ['warning', 'badge-warning'],
    ['neutral', 'badge-neutral'],
  ] as const)('applies %s color', (color, expectedClass) => {
    render(<Badge color={color}>New</Badge>);

    expect(screen.getByText('New')).toHaveClass(expectedClass);
  });

  test.each(['sm', 'md', 'lg'] as const)('applies %s size', (size) => {
    render(<Badge size={size}>New</Badge>);

    expect(screen.getByText('New')).toHaveClass(`badge-${size}`);
  });

  test('applies rounded class by default', () => {
    render(<Badge>New</Badge>);

    expect(screen.getByText('New')).toHaveClass('badge-fullRounded');
  });

  test('does not apply rounded class when rounded is false', () => {
    render(<Badge rounded={false}>New</Badge>);

    expect(screen.getByText('New')).not.toHaveClass('badge-fullRounded');
  });

  test('applies custom className', () => {
    render(<Badge className="custom-badge">New</Badge>);

    expect(screen.getByText('New')).toHaveClass('custom-badge');
  });

  test('renders numeric content correctly', () => {
    render(<Badge>{5}</Badge>);

    const badge = screen.getByText('5');

    expect(badge).toBeInTheDocument();
    expect(badge).toHaveAttribute('data-numeric', 'true');
    expect(badge).toHaveClass('badge-md-shape');
  });

  test('detects numeric string content', () => {
    render(<Badge>25</Badge>);

    const badge = screen.getByText('25');

    expect(badge).toHaveAttribute('data-numeric', 'true');
  });

  test('detects percentage content', () => {
    render(<Badge>75%</Badge>);

    const badge = screen.getByText('75%');

    expect(badge).toHaveAttribute('data-numeric', 'true');
    expect(badge).toHaveClass('px-3');
    expect(badge).toHaveClass('py-1');
  });

  test('applies text padding class for text content', () => {
    render(<Badge>Active</Badge>);

    expect(screen.getByText('Active')).toHaveClass('badge-md-padding');
  });

  test('does not render content when children are empty', () => {
    const { container } = render(<Badge>{null}</Badge>);

    const badge = container.querySelector('.badge');

    expect(badge).toBeInTheDocument();
    expect(badge).toBeEmptyDOMElement();
    expect(badge).toHaveClass('badge-md-shape');
  });

  test('treats whitespace-only content as empty', () => {
    const { container } = render(<Badge> </Badge>);

    const badge = container.querySelector('.badge');

    expect(badge).toBeEmptyDOMElement();
  });

  test('formats numbers greater than maxNumber', () => {
    render(<Badge maxNumber={99}>{120}</Badge>);

    expect(screen.getByText('+99')).toBeInTheDocument();
  });

  test('does not format numbers less than maxNumber', () => {
    render(<Badge maxNumber={99}>{50}</Badge>);

    expect(screen.getByText('50')).toBeInTheDocument();
  });

  test('uses default maxNumber of 99', () => {
    render(<Badge>{150}</Badge>);

    expect(screen.getByText('+99')).toBeInTheDocument();
  });

  test('supports custom maxNumber', () => {
    render(<Badge maxNumber={9}>{15}</Badge>);

    expect(screen.getByText('+9')).toBeInTheDocument();
  });

  test('formats numeric strings as numbers', () => {
    render(<Badge>150</Badge>);

    expect(screen.getByText('+99')).toBeInTheDocument();
  });

  const testIcon = (
    <svg data-testid="badge-icon" className="original-icon">
      <path d="M0 0" />
    </svg>
  );

  test('renders icon on the left by default', () => {
    render(<Badge icon={testIcon}>New</Badge>);

    const badge = screen.getByText('New').closest('.badge');
    const icon = screen.getByTestId('badge-icon');

    expect(icon).toBeInTheDocument();
    expect(badge?.firstElementChild).toBe(icon);
  });

  test('renders icon on the right when iconPosition is right', () => {
    render(
      <Badge icon={testIcon} iconPosition="right">
        New
      </Badge>,
    );

    const badge = screen.getByText('New').closest('.badge');
    const icon = screen.getByTestId('badge-icon');

    expect(icon).toBeInTheDocument();
    expect(badge?.lastElementChild).toBe(icon);
  });

  test('applies icon size class to the icon', () => {
    render(
      <Badge icon={testIcon} size="lg">
        New
      </Badge>,
    );

    expect(screen.getByTestId('badge-icon')).toHaveClass('badge-icon-lg');
  });

  test('preserves the original icon className', () => {
    render(<Badge icon={testIcon}>New</Badge>);

    const icon = screen.getByTestId('badge-icon');

    expect(icon).toHaveClass('original-icon');
    expect(icon).toHaveClass('badge-icon-md');
  });

  test('applies has-icon class when icon is provided', () => {
    render(<Badge icon={testIcon}>New</Badge>);

    expect(screen.getByText('New')).toHaveClass('has-icon');
  });

  test('does not apply has-icon class without an icon', () => {
    render(<Badge>New</Badge>);

    expect(screen.getByText('New')).not.toHaveClass('has-icon');
  });

  test('renders badge without wrapper by default', () => {
    const { container } = render(<Badge>New</Badge>);

    expect(container.querySelector('.badge-wrapper')).not.toBeInTheDocument();
  });

  it('renders wrapper when offset is true', () => {
    const { container } = render(<Badge offset>New</Badge>);

    expect(container.querySelector('.badge-wrapper')).toBeInTheDocument();
  });

  test('applies wrapper rounded class when rounded is true', () => {
    const { container } = render(
      <Badge offset rounded>
        New
      </Badge>,
    );

    expect(container.querySelector('.badge-wrapper')).toHaveClass('badge-wrapper-rounded');
  });

  test('does not apply wrapper rounded class when rounded is false', () => {
    const { container } = render(
      <Badge offset rounded={false}>
        New
      </Badge>,
    );

    expect(container.querySelector('.badge-wrapper')).not.toHaveClass('badge-wrapper-rounded');
  });

  test('applies size class to wrapper', () => {
    const { container } = render(
      <Badge offset size="lg">
        New
      </Badge>,
    );

    expect(container.querySelector('.badge-wrapper')).toHaveClass('badge-wrapper-lg');
  });

  test('applies className to wrapper when offset is true', () => {
    const { container } = render(
      <Badge offset className="custom-wrapper">
        New
      </Badge>,
    );

    expect(container.querySelector('.badge-wrapper')).toHaveClass('custom-wrapper');
  });

  test('does not apply className to badge when offset is true', () => {
    render(
      <Badge offset className="custom-wrapper">
        New
      </Badge>,
    );

    expect(screen.getByText('New')).not.toHaveClass('custom-wrapper');
  });

  test('forwards HTML attributes to the badge element', () => {
    render(
      <Badge data-testid="custom-badge" title="Badge tooltip">
        New
      </Badge>,
    );

    const badge = screen.getByTestId('custom-badge');

    expect(badge).toHaveAttribute('title', 'Badge tooltip');
  });

  test('forwards aria attributes', () => {
    render(<Badge aria-label="New notification">5</Badge>);

    expect(screen.getByLabelText('New notification')).toBeInTheDocument();
  });
});
