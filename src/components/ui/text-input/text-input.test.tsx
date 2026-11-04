import React from 'react';
import { render, screen } from '@testing-library/react';
import { TextInput } from './text-input';
import { TextInputVariant } from './types';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('TextInput Component', () => {
  test('render default TextInput props', () => {
    render(<TextInput />);

    const inputElement = screen.getByRole('textbox');
    const containerElement = inputElement.parentElement;

    expect(inputElement).toBeInTheDocument();
    expect(containerElement).toBeInTheDocument();
    expect(containerElement).toHaveClass('textInput-neutral');
  });

  test('render with placeholder text', () => {
    const defaultPlaceholder = 'Default placeholder text';

    render(<TextInput placeholder={defaultPlaceholder} />);
    const inputElement = screen.getByPlaceholderText(defaultPlaceholder);

    expect(inputElement).toBeInTheDocument();
  });

  test.each([
    ['outline', 'textInput-outline'],
    ['fill', 'textInput-fill'],
    ['ghost', 'textInput-ghost'],
  ])('renders %s variants', (variant, expectedClass) => {
    render(<TextInput variant={variant as TextInputVariant} />);

    const inputElement = screen.getByRole('textbox');
    const containerElement = inputElement.parentElement;

    expect(containerElement).toHaveClass(expectedClass);
  });

  test.each([
    ['primary', 'textInput-primary'],
    ['secondary', 'textInput-secondary'],
    ['neutral', 'textInput-neutral'],
  ])('renders %s colors', (color, expectedClass) => {
    render(<TextInput color={color as 'primary' | 'secondary' | 'neutral'} />);

    const inputElement = screen.getByRole('textbox');
    const containerElement = inputElement.parentElement;

    expect(containerElement).toHaveClass(expectedClass);
  });

  test('Display the correct initial value prop', () => {
    const initialValue = 'This is a initial Value';
    const mockOnValueChange = jest.fn();
    render(<TextInput value={initialValue} onValueChange={mockOnValueChange} />);

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveValue(initialValue);
  });

  test('onValueChange with the new value when user types', async () => {
    const mockOnValueChange = jest.fn();
    const initialValue = 'start';

    const TestComponent = () => {
      const [value, setValue] = React.useState(initialValue);
      return (
        <TextInput value={value} onValueChange={(event: any) => setValue(event.target.value)} />
      );
    };
    render(<TestComponent />);

    const inputElement = screen.getByRole('textbox');
    await userEvent.type(inputElement, 'end');

    expect(inputElement).toHaveValue('startend');
  });

  test('apply w-full when class fullWidth is true', () => {
    render(<TextInput fullWidth={true} />);
    const inputElement = screen.getByRole('textbox');
    const containerElement = inputElement.parentElement;

    expect(containerElement).toHaveClass('w-full');
  });

  test('when the disabled prop is ture', () => {
    render(<TextInput disabled={true} />);

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeDisabled();

    userEvent.click(inputElement);
    expect(inputElement).not.toHaveFocus();
  });

  test('render the startIcon when provided', () => {
    render(<TextInput startIcon={<span>👈</span>} />);

    const startIconElement = screen.getByText('👈');
    expect(startIconElement).toBeInTheDocument();
  });

  test('render the endIcon when provided', () => {
    render(<TextInput endIcon={<span>👉</span>} />);

    const endIconElement = screen.getByText('👉');
    expect(endIconElement).toBeInTheDocument();
  });

  test('render the endAction', () => {
    render(<TextInput endAction={<span>🛎️</span>} />);

    const endActionElement = screen.getByText('🛎️');
    expect(endActionElement).toBeInTheDocument();
  });

  test('render the TextInput with type="text"', () => {
    render(<TextInput type="text" />);

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });

  test('render the TextInput with type="password"', () => {
    render(<TextInput type="password" placeholder="Enter your password" />);

    const inputElement = screen.getByPlaceholderText('Enter your password');
    expect(inputElement).toHaveAttribute('type', 'password');
  });

  test('render the TextInput with type="email"', () => {
    render(<TextInput type="email" aria-label="user email" />);

    const inputElement = screen.getByRole('textbox', { name: 'user email' });
    expect(inputElement).toHaveAttribute('type', 'email');
  });

  test('render the TextInput with type="search"', () => {
    render(<TextInput type="search" placeholder="Search Input" />);

    const inputElement = screen.getByPlaceholderText('Search Input');
    expect(inputElement).toHaveAttribute('type', 'search');
  });

  test('render the TextInput with type="file"', () => {
    render(<TextInput type="file" placeholder="File Input" />);

    const inputElement = screen.getByPlaceholderText('File Input');
    expect(inputElement).toHaveAttribute('type', 'file');
  });

  test('render the TextInput with type="number"', () => {
    render(<TextInput type="number" placeholder="Number Input" />);

    const inputElement = screen.getByPlaceholderText('Number Input');
    expect(inputElement).toHaveAttribute('type', 'number');
  });

  test('render the TextInput with type="reset"', () => {
    render(<TextInput type="reset" placeholder="Reset Input" />);

    const inputElement = screen.getByPlaceholderText('Reset Input');
    expect(inputElement).toHaveAttribute('type', 'reset');
  });

  test('render the TextInput with type="checkbox"', () => {
    render(<TextInput type="checkbox" placeholder="Checkbox Input" />);

    const inputElement = screen.getByPlaceholderText('Checkbox Input');
    expect(inputElement).toHaveAttribute('type', 'checkbox');
  });

  test('render the TextInput with type="radio"', () => {
    render(<TextInput type="radio" placeholder="Radio Input" />);

    const inputElement = screen.getByPlaceholderText('Radio Input');
    expect(inputElement).toHaveAttribute('type', 'radio');
  });

  test('render the Label', () => {
    const initialLabel = 'Label TextInput';
    render(<TextInput label={initialLabel} />);

    const labelElement = screen.getByText(initialLabel);
    const inputElement = screen.getByRole('textbox');
    const inputId = inputElement.id;

    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveAttribute('for', inputId);
  });

  test('renders the input message when inputMessage is provided', () => {
    const message = 'Help Message';
    render(<TextInput inputMessage={message} />);

    const messageElement = screen.getByText(message);
    expect(messageElement).toBeInTheDocument();
    expect(messageElement).toHaveClass('textInputMessage');
  });

  test('endAction takes precedence over endIcon', () => {
    const EndAction = <span>Action</span>;
    const EndIcon = <span>Icon</span>;
    render(<TextInput endAction={EndAction} endIcon={EndIcon} />);

    expect(screen.getByText('Action')).toBeInTheDocument();
    expect(screen.queryByText('Icon')).not.toBeInTheDocument();
  });

  test('forwards ref to the underlying input element', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<TextInput ref={ref} />);

    const inputElement = screen.getByRole('textbox');

    expect(ref.current).toBe(inputElement);
  });
});
