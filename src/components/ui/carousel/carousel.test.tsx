import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselIndicator,
  useCarousel,
} from './carousel';

// Mock embla-carousel-react
const mockScrollPrev = jest.fn();
const mockScrollNext = jest.fn();
const mockScrollTo = jest.fn();
const mockSelectedScrollSnap = jest.fn(() => 0);
const mockScrollSnapList = jest.fn(() => [0, 1, 2, 3, 4]);
const mockCanScrollPrev = jest.fn(() => true);
const mockCanScrollNext = jest.fn(() => true);
const mockOn = jest.fn();
const mockOff = jest.fn();

const mockApi = {
  scrollPrev: mockScrollPrev,
  scrollNext: mockScrollNext,
  scrollTo: mockScrollTo,
  selectedScrollSnap: mockSelectedScrollSnap,
  scrollSnapList: mockScrollSnapList,
  canScrollPrev: mockCanScrollPrev,
  canScrollNext: mockCanScrollNext,
  on: mockOn,
  off: mockOff,
};

jest.mock('embla-carousel-react', () => ({
  __esModule: true,
  default: jest.fn(() => [{ current: null }, mockApi]),
}));

// Mock icons
jest.mock('../../shared/icons/index', () => ({
  ChevronLeftIcon: ({ className }: { className?: string }) => (
    <svg data-testid="chevron-left-icon" className={className} />
  ),
  ChevronRightIcon: ({ className }: { className?: string }) => (
    <svg data-testid="chevron-right-icon" className={className} />
  ),
}));

// Test component that uses useCarousel hook
const TestComponent = () => {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } = useCarousel();
  return (
    <div>
      <button onClick={scrollPrev} disabled={!canScrollPrev}>
        Prev
      </button>
      <button onClick={scrollNext} disabled={!canScrollNext}>
        Next
      </button>
    </div>
  );
};

describe('Carousel', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockCanScrollPrev.mockReturnValue(true);
    mockCanScrollNext.mockReturnValue(true);
    mockSelectedScrollSnap.mockReturnValue(0);
    mockScrollSnapList.mockReturnValue([0, 1, 2, 3]);
    mockOn.mockImplementation((event, callback) => {
      if (event === 'select') {
        (mockApi as any).selectCallback = callback;
      }
      if (event === 'reInit') {
        (mockApi as any).reInitCallback = callback;
      }
      return mockApi;
    });
  });

  test('renders correctly with children', () => {
    render(
      <Carousel>
        <div>Carousel Content</div>
      </Carousel>,
    );

    expect(screen.getByRole('region')).toBeInTheDocument();
    expect(screen.getByText('Carousel Content')).toBeInTheDocument();
  });

  test('applies custom className', () => {
    render(
      <Carousel className="custom-carousel">
        <div>Content</div>
      </Carousel>,
    );

    expect(screen.getByRole('region')).toHaveClass('custom-carousel');
  });

  test('forwards ref to the root element', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(
      <Carousel ref={ref}>
        <div>Content</div>
      </Carousel>,
    );

    expect(ref.current).toBeInTheDocument();
  });

  test('calls setApi when provided', () => {
    const setApi = jest.fn();

    render(
      <Carousel setApi={setApi}>
        <div>Content</div>
      </Carousel>,
    );

    expect(setApi).toHaveBeenCalledWith(mockApi);
  });

  test('sets up event listeners on mount', () => {
    render(
      <Carousel>
        <div>Content</div>
      </Carousel>,
    );

    expect(mockOn).toHaveBeenCalledWith('reInit', expect.any(Function));
    expect(mockOn).toHaveBeenCalledWith('select', expect.any(Function));
  });

  test('cleans up event listeners on unmount', () => {
    const { unmount } = render(
      <Carousel>
        <div>Content</div>
      </Carousel>,
    );

    unmount();

    expect(mockOff).toHaveBeenCalledWith('select', expect.any(Function));
  });
});

describe('CarouselContent', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockCanScrollPrev.mockReturnValue(true);
    mockCanScrollNext.mockReturnValue(true);
  });

  test('renders correctly', () => {
    render(
      <Carousel>
        <CarouselContent data-testid="carousel-content">
          <div>Item</div>
        </CarouselContent>
      </Carousel>,
    );

    const content = screen.getByTestId('carousel-content');
    expect(content).toBeInTheDocument();
    expect(content).toHaveClass('flex', 'gap-4', 'px-4');
  });

  test('applies custom className', () => {
    render(
      <Carousel>
        <CarouselContent className="custom-content" data-testid="content">
          <div>Item</div>
        </CarouselContent>
      </Carousel>,
    );

    expect(screen.getByTestId('content')).toHaveClass('custom-content');
  });

  test('forwards ref to the element', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(
      <Carousel>
        <CarouselContent ref={ref}>
          <div>Item</div>
        </CarouselContent>
      </Carousel>,
    );

    expect(ref.current).toBeInTheDocument();
  });

  test('uses flex-row for horizontal orientation', () => {
    render(
      <Carousel orientation="horizontal">
        <CarouselContent data-testid="content">
          <div>Item</div>
        </CarouselContent>
      </Carousel>,
    );

    const content = screen.getByTestId('content');
    expect(content).toHaveClass('flex-row');
    expect(content).not.toHaveClass('flex-col');
  });

  test('uses flex-col for vertical orientation', () => {
    render(
      <Carousel orientation="vertical">
        <CarouselContent data-testid="content">
          <div>Item</div>
        </CarouselContent>
      </Carousel>,
    );

    const content = screen.getByTestId('content');
    expect(content).toHaveClass('flex-col');
    expect(content).not.toHaveClass('flex-row');
  });
});

describe('CarouselItem', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders correctly', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem data-testid="carousel-item">Item 1</CarouselItem>
        </CarouselContent>
      </Carousel>,
    );

    const item = screen.getByTestId('carousel-item');
    expect(item).toBeInTheDocument();
    expect(item).toHaveClass('carousel-item');
    expect(item).toHaveAttribute('role', 'group');
    expect(item).toHaveAttribute('aria-roledescription', 'slide');
  });

  test('applies custom className', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem className="custom-item" data-testid="item">
            Item
          </CarouselItem>
        </CarouselContent>
      </Carousel>,
    );

    expect(screen.getByTestId('item')).toHaveClass('custom-item');
  });

  test('forwards ref to the element', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem ref={ref}>Item</CarouselItem>
        </CarouselContent>
      </Carousel>,
    );

    expect(ref.current).toBeInTheDocument();
  });
});

describe('CarouselPrevious', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockCanScrollPrev.mockReturnValue(true);
    mockScrollPrev.mockClear();
  });

  test('renders correctly', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item</CarouselItem>
        </CarouselContent>
        <CarouselPrevious data-testid="prev-button" />
      </Carousel>,
    );

    const button = screen.getByTestId('prev-button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('carousel-previous');
    expect(screen.getByTestId('chevron-left-icon')).toBeInTheDocument();
  });

  test('applies custom className', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item</CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="custom-prev" data-testid="prev" />
      </Carousel>,
    );

    expect(screen.getByTestId('prev')).toHaveClass('custom-prev');
  });

  test('calls scrollPrev when clicked', async () => {
    const user = userEvent.setup();
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item</CarouselItem>
        </CarouselContent>
        <CarouselPrevious data-testid="prev" />
      </Carousel>,
    );

    const button = screen.getByTestId('prev');
    await user.click(button);

    expect(mockScrollPrev).toHaveBeenCalled();
  });

  test('forwards ref to the button', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item</CarouselItem>
        </CarouselContent>
        <CarouselPrevious ref={ref} />
      </Carousel>,
    );

    expect(ref.current).toBeInTheDocument();
    expect(ref.current?.tagName).toBe('BUTTON');
  });

  test('passes additional props to the button', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item</CarouselItem>
        </CarouselContent>
        <CarouselPrevious aria-label="Previous Slide" data-testid="prev" />
      </Carousel>,
    );

    const button = screen.getByTestId('prev');
    expect(button).toHaveAttribute('aria-label', 'Previous Slide');
  });
});

describe('CarouselNext', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockCanScrollNext.mockReturnValue(true);
    mockScrollNext.mockClear();
  });

  test('renders correctly', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item</CarouselItem>
        </CarouselContent>
        <CarouselNext data-testid="next-button" />
      </Carousel>,
    );

    const button = screen.getByTestId('next-button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('carousel-next', 'xl:button-icon-lg');
    expect(screen.getByTestId('chevron-right-icon')).toBeInTheDocument();
  });

  test('applies custom className', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item</CarouselItem>
        </CarouselContent>
        <CarouselNext className="custom-next" data-testid="next" />
      </Carousel>,
    );

    expect(screen.getByTestId('next')).toHaveClass('custom-next');
  });

  test('calls scrollNext when clicked', async () => {
    const user = userEvent.setup();
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item</CarouselItem>
        </CarouselContent>
        <CarouselNext data-testid="next" />
      </Carousel>,
    );

    const button = screen.getByTestId('next');
    await user.click(button);

    expect(mockScrollNext).toHaveBeenCalled();
  });

  test('forwards ref to the button', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item</CarouselItem>
        </CarouselContent>
        <CarouselNext ref={ref} />
      </Carousel>,
    );

    expect(ref.current).toBeInTheDocument();
    expect(ref.current?.tagName).toBe('BUTTON');
  });

  test('passes additional props to the button', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item</CarouselItem>
        </CarouselContent>
        <CarouselNext aria-label="Next Slide" data-testid="next" />
      </Carousel>,
    );

    const button = screen.getByTestId('next');
    expect(button).toHaveAttribute('aria-label', 'Next Slide');
  });
});

describe('CarouselIndicator', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockSelectedScrollSnap.mockReturnValue(0);
    mockScrollSnapList.mockReturnValue([0, 1, 2, 3]);
    mockOn.mockImplementation((event, callback) => {
      if (event === 'select') {
        (mockApi as any).selectCallback = callback;
      }
      return mockApi;
    });
  });

  test('renders 3 dots by default', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 2</CarouselItem>
          <CarouselItem>Item 3</CarouselItem>
        </CarouselContent>
        <CarouselIndicator data-testid="indicators" />
      </Carousel>,
    );

    const container = screen.getByTestId('indicators');
    const buttons = container.querySelectorAll('button');
    expect(buttons).toHaveLength(3);
  });

  test('applies custom className', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item</CarouselItem>
        </CarouselContent>
        <CarouselIndicator className="custom-indicator" data-testid="indicators" />
      </Carousel>,
    );

    const container = screen.getByTestId('indicators');
    expect(container).toHaveClass('custom-indicator');
    expect(container).toHaveClass('carousel-indicators');
  });

  test('highlights the active dot based on current slide', () => {
    mockSelectedScrollSnap.mockReturnValue(1);

    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 2</CarouselItem>
          <CarouselItem>Item 3</CarouselItem>
        </CarouselContent>
        <CarouselIndicator data-testid="indicators" />
      </Carousel>,
    );

    const buttons = screen.getByTestId('indicators').querySelectorAll('button');
    expect(buttons[1]).toHaveClass('carousel-dot-active');
    expect(buttons[0]).toHaveClass('carousel-dot-inactive');
    expect(buttons[2]).toHaveClass('carousel-dot-inactive');
  });

  test('calls scrollTo with correct index when dot is clicked', async () => {
    const user = userEvent.setup();
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 2</CarouselItem>
          <CarouselItem>Item 3</CarouselItem>
        </CarouselContent>
        <CarouselIndicator data-testid="indicators" />
      </Carousel>,
    );

    const buttons = screen.getByTestId('indicators').querySelectorAll('button');
    await user.click(buttons[2]);

    expect(mockScrollTo).toHaveBeenCalledWith(2);
  });

  test('handles modulo for current index when beyond total dots', () => {
    mockSelectedScrollSnap.mockReturnValue(5);

    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 2</CarouselItem>
          <CarouselItem>Item 3</CarouselItem>
        </CarouselContent>
        <CarouselIndicator data-testid="indicators" />
      </Carousel>,
    );

    const buttons = screen.getByTestId('indicators').querySelectorAll('button');
    expect(buttons[2]).toHaveClass('carousel-dot-active');
  });

  test('updates active dot when slide changes', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 2</CarouselItem>
          <CarouselItem>Item 3</CarouselItem>
        </CarouselContent>
        <CarouselIndicator data-testid="indicators" />
      </Carousel>,
    );

    const selectCallback = (mockApi as any).selectCallback;
    if (selectCallback) {
      mockSelectedScrollSnap.mockReturnValue(2);
      act(() => {
        selectCallback(mockApi);
      });
    }

    const buttons = screen.getByTestId('indicators').querySelectorAll('button');
    expect(buttons[2]).toHaveClass('carousel-dot-active');
  });

  test('forwards ref to the container', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item</CarouselItem>
        </CarouselContent>
        <CarouselIndicator ref={ref} />
      </Carousel>,
    );

    expect(ref.current).toBeInTheDocument();
  });

  test('cleans up event listener on unmount', () => {
    const { unmount } = render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item</CarouselItem>
        </CarouselContent>
        <CarouselIndicator />
      </Carousel>,
    );

    unmount();

    expect(mockOff).toHaveBeenCalledWith('select', expect.any(Function));
  });
});

describe('useCarousel Hook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockCanScrollPrev.mockReturnValue(true);
    mockCanScrollNext.mockReturnValue(true);
  });

  test('throws error when used outside of Carousel provider', () => {
    const consoleError = console.error;
    console.error = jest.fn();

    expect(() => {
      render(<TestComponent />);
    }).toThrow('useCarousel must be used within a <Carousel />');

    console.error = consoleError;
  });

  test('provides context when used within Carousel', () => {
    render(
      <Carousel>
        <TestComponent />
      </Carousel>,
    );

    expect(screen.getByText('Prev')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
  });

  test('provides scrollPrev and scrollNext functions', async () => {
    const user = userEvent.setup();
    render(
      <Carousel>
        <TestComponent />
      </Carousel>,
    );

    await user.click(screen.getByText('Prev'));
    expect(mockScrollPrev).toHaveBeenCalled();

    await user.click(screen.getByText('Next'));
    expect(mockScrollNext).toHaveBeenCalled();
  });
});

describe('Integration Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockCanScrollPrev.mockReturnValue(true);
    mockCanScrollNext.mockReturnValue(true);
    mockSelectedScrollSnap.mockReturnValue(0);
    mockScrollSnapList.mockReturnValue([0, 1, 2, 3]);
  });

  test('renders a complete carousel with all components', () => {
    render(
      <Carousel>
        <CarouselContent>
          {[1, 2, 3, 4].map((item) => (
            <CarouselItem key={item}>
              <div>Item {item}</div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        <CarouselIndicator />
      </Carousel>,
    );

    expect(screen.getByRole('region')).toBeInTheDocument();
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('Item 3')).toBeInTheDocument();
    expect(screen.getByText('Item 4')).toBeInTheDocument();
    // Previous, Next, and 3 indicator dots = 5 buttons total
    expect(screen.getAllByRole('button')).toHaveLength(5);
  });

  test('handles empty content gracefully', () => {
    render(
      <Carousel>
        <CarouselContent />
      </Carousel>,
    );

    expect(screen.getByRole('region')).toBeInTheDocument();
  });

  test('handles single item correctly', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Single Item</CarouselItem>
        </CarouselContent>
        <CarouselIndicator />
      </Carousel>,
    );

    expect(screen.getByText('Single Item')).toBeInTheDocument();
    const dots = document.querySelectorAll('.carousel-dot');
    expect(dots).toHaveLength(3);
  });

  test('maintains orientation context across all subcomponents', () => {
    render(
      <Carousel orientation="vertical">
        <CarouselContent data-testid="content">
          <CarouselItem data-testid="item">Item</CarouselItem>
        </CarouselContent>
      </Carousel>,
    );

    const content = screen.getByTestId('content');
    const item = screen.getByTestId('item');

    expect(content).toHaveClass('flex-col');
    expect(content).toHaveAttribute('data-orientation', 'vertical');
    expect(item).toHaveAttribute('data-orientation', 'vertical');
  });

  test('disables previous button when canScrollPrev is false', () => {
    mockCanScrollPrev.mockReturnValue(false);

    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 2</CarouselItem>
        </CarouselContent>
        <TestComponent />
      </Carousel>,
    );

    const prevButton = screen.getByText('Prev');
    expect(prevButton).toBeDisabled();
    const nextButton = screen.getByText('Next');
    expect(nextButton).not.toBeDisabled();
  });

  test('disables next button when canScrollNext is false', () => {
    mockCanScrollNext.mockReturnValue(false);

    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 2</CarouselItem>
        </CarouselContent>
        <TestComponent />
      </Carousel>,
    );

    const nextButton = screen.getByText('Next');
    expect(nextButton).toBeDisabled();
    const prevButton = screen.getByText('Prev');
    expect(prevButton).not.toBeDisabled();
  });
});
