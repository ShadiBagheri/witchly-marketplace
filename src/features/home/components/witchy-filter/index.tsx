'use client';

import { useState } from 'react';
import { Typography, Slider } from '@/components/ui';
import { FilterModalContentProps } from './types';
import { WitchyFilterData } from './constants';
import { CategoryFilter, TabFilter } from '../../types';

const PriceRow = ({ label, value }: { label: string; value: number }) => (
  <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
    <Typography className="body-18 text-neutral-0 dark:text-neutral-300">{label}</Typography>
    <Typography className="body-16 text-warning-400">{`$${value}`}</Typography>
  </div>
);

const PriceSlider = ({
  priceRange,
  onPriceChange,
}: {
  priceRange: { min: number; max: number };
  onPriceChange: (range: { min: number; max: number }) => void;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <PriceRow label="Min Price:" value={priceRange.min} />
      <Slider
        value={[priceRange.min]}
        onValueChange={([price]: number[]) =>
          onPriceChange({ ...priceRange, min: Math.min(price, priceRange.max) })
        }
        min={0}
        max={1000}
        step={10}
        className="mb-6"
      />
      <PriceRow label="Max Price:" value={priceRange.max} />
      <Slider
        value={[priceRange.max]}
        onValueChange={([price]: number[]) =>
          onPriceChange({ ...priceRange, max: Math.max(price, priceRange.min) })
        }
        min={0}
        max={1000}
        step={10}
      />
    </div>
  );
};

const RatingSlider = ({
  value = 0,
  onChange,
}: {
  value?: number;
  onChange: (val: number) => void;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <Typography className="body-18 text-neutral-0">Minimum Rate:</Typography>
        <Typography className="text-warning-400 body-16">{(value ?? 0).toFixed(1)}</Typography>
      </div>
      <Slider
        value={[value ?? 0]}
        onValueChange={([val]: number[]) => onChange(val)}
        min={0}
        max={5}
        step={0.5}
      />
    </div>
  );
};

export const FilterModalContent = ({ filters, onFiltersChange }: FilterModalContentProps) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleSelectChange = (filterId: string, value: string) => {
    if (filterId === 'tab') {
      onFiltersChange({ ...filters, tab: value as TabFilter });
    } else if (filterId === 'categories') {
      if (value === 'all') {
        onFiltersChange({ ...filters, categories: [] });
      } else {
        onFiltersChange({ ...filters, categories: [value as CategoryFilter] });
      }
    }
    setOpenDropdown(null);
  };

  const getSelectedLabel = (filterId: string) => {
    if (filterId === 'tab') return filters.tab;
    if (filterId === 'categories') return filters.categories[0] || 'all';
    return '';
  };

  return (
    <div className="flex flex-col gap-6">
      {WitchyFilterData.map((category) => {
        const selectedValue = getSelectedLabel(category.id);
        const selectedOption = category.options?.find((o) => o.value === selectedValue);

        return (
          <div key={category.id} className="relative flex flex-col gap-2">
            <Typography className="body-16 text-neutral-0">{category.title}</Typography>

            {category.id === 'price' && category.type === 'slider' ? (
              <PriceSlider
                priceRange={filters.priceRange}
                onPriceChange={(priceRange) => onFiltersChange({ ...filters, priceRange })}
              />
            ) : category.id === 'rating' && category.type === 'slider' ? (
              <RatingSlider
                value={filters.minRating}
                onChange={(minRating) => onFiltersChange({ ...filters, minRating })}
              />
            ) : (
              <div className="relative w-full">
                <button
                  type="button"
                  onClick={() => setOpenDropdown(openDropdown === category.id ? null : category.id)}
                  className="bg-secondary-900 text-secondary-300 flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm"
                >
                  <span>{selectedOption ? selectedOption.label : `Select ${category.title}`}</span>
                  <svg
                    className={`h-4 w-4 transition-transform ${openDropdown === category.id ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {openDropdown === category.id && (
                  <ul className="bg-secondary-900 absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md shadow-lg">
                    {category.options?.map((option) => (
                      <li key={option.value}>
                        <button
                          type="button"
                          onClick={() => handleSelectChange(category.id, option.value)}
                          className={`hover:bg-secondary-500 block w-full px-3 py-2 text-left text-sm dark:hover:bg-neutral-700 ${
                            selectedValue === option.value
                              ? 'bg-secondary-500 text-secondary-300 font-medium'
                              : 'text-secondary-300 dark:text-neutral-200'
                          }`}
                        >
                          {option.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
