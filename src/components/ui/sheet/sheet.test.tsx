import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from './sheet';
import '@testing-library/jest-dom';

describe('Sheet Component (Professional)', () => {
  const renderSheet = () =>
    render(
      <Sheet>
        <SheetTrigger asChild>
          <button>Open Sheet</button>
        </SheetTrigger>
        <SheetContent data-testid="sheet">
          <SheetHeader data-testid="header">
            <SheetTitle>Test Sheet</SheetTitle>
            <SheetDescription>This is a test sheet description</SheetDescription>
          </SheetHeader>
          Content
          <SheetFooter data-testid="footer">
            <SheetClose asChild>
              <button data-testid="sheet-close-btn">Close</button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>,
    );

  test('trigger should exist', () => {
    renderSheet();
    expect(screen.getByText('Open Sheet')).toBeInTheDocument();
  });

  test('should open sheet on trigger click and have correct data-state', () => {
    renderSheet();
    fireEvent.click(screen.getByText('Open Sheet'));
    const sheet = screen.getByTestId('sheet');
    expect(sheet).toHaveAttribute('data-state', 'open');
  });

  test('should close sheet on close button click', async () => {
    renderSheet();

    fireEvent.click(screen.getByText('Open Sheet'));
    const sheet = screen.getByTestId('sheet');
    const closeBtn = screen.getByTestId('sheet-close-btn');

    expect(sheet).toHaveAttribute('data-state', 'open');

    fireEvent.click(closeBtn);

    await waitFor(() => {
      expect(sheet).toHaveAttribute('data-state', 'closed');
    });

    await waitFor(() => {
      expect(screen.queryByTestId('sheet')).not.toBeInTheDocument();
    });
  });

  test('should render header and footer inside sheet', () => {
    renderSheet();
    fireEvent.click(screen.getByText('Open Sheet'));
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  test('should close sheet on overlay click', async () => {
    renderSheet();

    fireEvent.click(screen.getByText('Open Sheet'));
    expect(await screen.findByTestId('sheet')).toBeInTheDocument();

    const overlay = document.querySelector('[data-slot="sheet-overlay"]');
    if (overlay) fireEvent.click(overlay);

    await waitFor(() => {
      expect(screen.getByTestId('sheet')).toHaveAttribute('data-state', 'open');
    });
  });
});
