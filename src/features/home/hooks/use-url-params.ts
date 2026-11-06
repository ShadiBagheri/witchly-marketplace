'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { TabFilter, CategoryFilter, FilterOptions } from '@/features/home/types';

export const useUrlParams = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const searchQuery = searchParams.get('q') || '';
  const sortParam = searchParams.get('sort') || '';

  const filters: FilterOptions = {
    tab: (searchParams.get('tab') as TabFilter) || 'all',
    categories: (searchParams.get('categories')?.split(',') as CategoryFilter[]) || [],
    priceRange: {
      min: parseInt(searchParams.get('minPrice') || '0', 10) || 0,
      max: parseInt(searchParams.get('maxPrice') || '1000', 10) || 1000,
    },
    minRating: parseInt(searchParams.get('minRating') || '0', 10) || 0,
  };

  const updateUrl = (updates: (params: URLSearchParams) => void) => {
    const params = new URLSearchParams(searchParams.toString());
    updates(params);
    router.push(`?${params.toString()}`);
  };

  const updateFilters = (newFilters: FilterOptions) => {
    updateUrl((params) => {
      if (newFilters.tab !== 'all') params.set('tab', newFilters.tab);
      else params.delete('tab');

      if (newFilters.categories.length > 0)
        params.set('categories', newFilters.categories.join(','));
      else params.delete('categories');

      if (newFilters.priceRange.min > 0)
        params.set('minPrice', newFilters.priceRange.min.toString());
      else params.delete('minPrice');

      if (newFilters.priceRange.max < 1000)
        params.set('maxPrice', newFilters.priceRange.max.toString());
      else params.delete('maxPrice');

      if (newFilters.minRating > 0) params.set('minRating', newFilters.minRating.toString());
      else params.delete('minRating');
    });
  };

  const updateSearch = (query: string) => {
    updateUrl((params) => {
      if (query.trim()) params.set('q', query.trim());
      else params.delete('q');
    });
  };

  const updateSort = (sortValue: string) => {
    updateUrl((params) => {
      if (sortValue) params.set('sort', sortValue);
      else params.delete('sort');
    });
  };

  const resetFilters = () => {
    updateUrl((params) => {
      ['tab', 'categories', 'minPrice', 'maxPrice', 'minRating', 'q', 'sort'].forEach((key) =>
        params.delete(key),
      );
    });
  };

  return { filters, searchQuery, sortParam, updateFilters, updateSearch, updateSort, resetFilters };
};
