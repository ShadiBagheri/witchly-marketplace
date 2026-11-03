import * as React from 'react';
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react';
import { cn } from '@/utils/ui';
import {
  CarouselProps,
  CarouselContentProps,
  CarouselItemProps,
  CarouselPreviousProps,
  CarouselNextProps,
  CarouselApi,
  CarouselContextType,
} from './types';
import { ChevronLeftIcon, ChevronRightIcon } from '@icons';

export const CarouselContext = React.createContext<CarouselContextType | null>(null);

export const useCarousel = () => {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }
  return context;
};

export const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ orientation = 'horizontal', setApi, opts, plugins, className, children, ...props }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        align: 'start',
        containScroll: 'trimSnaps',
        loop: true,
        breakpoints: {
          '(max-width: 640px)': {
            align: 'center',
            dragFree: true,
          },
        },
        ...opts,
        axis: orientation === 'horizontal' ? 'x' : 'y',
      },
      plugins,
    );

    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((api: UseEmblaCarouselType[1]) => {
      if (!api) return;
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === 'ArrowRight') {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext],
    );

    React.useEffect(() => {
      if (!api || !setApi) return;
      setApi(api as CarouselApi);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) return;
      onSelect(api);
      api.on('reInit', onSelect);
      api.on('select', onSelect);

      return () => {
        api.off('select', onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api,
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
          orientation,
          selectedScrollSnap: () => api?.selectedScrollSnap() || 0,
          scrollSnapList: () => api?.scrollSnapList() || [],
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn('carousel', className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  },
);
Carousel.displayName = 'Carousel';

export const CarouselContent = React.forwardRef<HTMLDivElement, CarouselContentProps>(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();

    return (
      <div ref={carouselRef} className="carousel-content" data-orientation={orientation}>
        <div
          ref={ref}
          className={cn(
            'flex gap-4 px-4',
            orientation === 'vertical' ? 'h-full flex-col' : 'flex-row',
            className,
          )}
          data-orientation={orientation}
          {...props}
        />
      </div>
    );
  },
);
CarouselContent.displayName = 'CarouselContent';

export const CarouselItem = React.forwardRef<HTMLDivElement, CarouselItemProps>(
  ({ className, itemId, ...props }, ref) => {
    const { orientation, selectedScrollSnap } = useCarousel();
    const currentIndex = selectedScrollSnap();
    const isSelected = itemId !== undefined && currentIndex === itemId;
    return (
      <div
        ref={ref}
        role="group"
        aria-roledescription="slide"
        className={cn('carousel-item', isSelected && 'is-selected', className)}
        data-orientation={orientation}
        {...props}
      />
    );
  },
);
CarouselItem.displayName = 'CarouselItem';

export const CarouselPrevious = React.forwardRef<HTMLButtonElement, CarouselPreviousProps>(
  ({ className, ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();

    return (
      <button
        ref={ref}
        className={cn('carousel-previous', className)}
        data-orientation={orientation}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        {...props}
      >
        <ChevronLeftIcon className="text-warning-200 xl:text-2xl" />
      </button>
    );
  },
);
CarouselPrevious.displayName = 'CarouselPrevious';

export const CarouselNext = React.forwardRef<HTMLButtonElement, CarouselNextProps>(
  ({ className, ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();

    return (
      <button
        ref={ref}
        className={cn('carousel-next xl:button-icon-lg', className)}
        data-orientation={orientation}
        disabled={!canScrollNext}
        onClick={scrollNext}
        {...props}
      >
        <ChevronRightIcon className="text-warning-200 xl:text-2xl" />
      </button>
    );
  },
);
CarouselNext.displayName = 'CarouselNext';

export const CarouselIndicator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { api, selectedScrollSnap } = useCarousel();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    const handler = () => setCurrent(selectedScrollSnap());
    setCurrent(selectedScrollSnap());
    api.on('select', handler);
    return () => {
      api.off('select', handler);
    };
  }, [api, selectedScrollSnap]);

  const totalDots = 3;

  const activeIndex = current % totalDots;

  return (
    <div
      ref={ref}
      className={cn('carousel-indicators flex items-center gap-1.5', className)}
      {...props}
    >
      {Array.from({ length: totalDots }).map((_, index) => {
        const isActive = activeIndex === index;
        return (
          <button
            key={index}
            className={cn(
              'carousel-dot rounded-full transition-all duration-300',
              isActive ? 'carousel-dot-active' : 'carousel-dot-inactive',
            )}
            onClick={() => api?.scrollTo(index)}
          />
        );
      })}
    </div>
  );
});
CarouselIndicator.displayName = 'CarouselIndicator';
