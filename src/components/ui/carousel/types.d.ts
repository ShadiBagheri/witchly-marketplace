import type { OptionsType, PluginType } from 'embla-carousel-react';
import type * as React from 'react';

export type Orientation = 'horizontal' | 'vertical';

export type CarouselProps = React.HTMLAttributes<HTMLDivElement> & {
  orientation?: Orientation;
  setApi?: (api: CarouselApi) => void;
  opts?: Partial<OptionsType>;
  plugins?: PluginType[];
  className?: string;
};

export type CarouselGridProps = React.HTMLAttributes<HTMLDivElement> & {
  itemsPerSlide?: number;
  gridCols?: number;
  gridRows?: number;
  className?: string;
  children: React.ReactNode;
};

export type CarouselGridItemProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

export type CarouselContentProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

export type CarouselItemProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  itemId?: number;
};

export type CarouselPreviousProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

export type CarouselNextProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

export type CarouselApi = {
  canScrollPrev: () => boolean;
  canScrollNext: () => boolean;
  scrollPrev: () => void;
  scrollNext: () => void;
  scrollTo: (index: number) => void;
  selectedScrollSnap: () => number;
  scrollSnapList: () => number[];
  on: (event: string, callback: () => void) => void;
  off: (event: string, callback: () => void) => void;
};

export type CarouselContextType = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  selectedIndex?: number;
  orientation: Orientation;
  selectedScrollSnap: () => number;
  scrollSnapList: () => number[];
};
