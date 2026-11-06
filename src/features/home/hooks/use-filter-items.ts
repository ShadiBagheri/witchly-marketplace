import { useMemo } from 'react';
import { TrendingMagicSectionProps, FilterOptions, CategoryFilter } from '@/features/home/types';

export const useFilterItems = (
  items: TrendingMagicSectionProps[],
  filters: FilterOptions,
  searchQuery: string,
  sortParam: string,
) => {
  return useMemo(() => {
    let result = [...items];
    const query = searchQuery.toLowerCase().trim();

    if (query) {
      result = result.filter(
        (item) =>
          item.title?.toLowerCase().includes(query) ||
          item.customerName?.toLowerCase().includes(query) ||
          item.experiences?.some((exp) =>
            (exp.categoryTitle ?? exp.category).toLowerCase().includes(query),
          ),
      );
    }

    // Tabs
    if (filters.tab !== 'all') {
      result = result.filter((item) => item.tabType === filters.tab);
    }

    // Categories
    if (filters.categories.length > 0 && !filters.categories.includes('all')) {
      result = result.filter((item) =>
        item.experiences?.some((exp) =>
          filters.categories.includes(exp.category as CategoryFilter),
        ),
      );
    }

    //  Price
    result = result.filter((item) => {
      const price = item.price || 0;
      return price >= filters.priceRange.min && price <= filters.priceRange.max;
    });

    // Rating
    if (filters.minRating > 0) {
      result = result.filter((item) => (item.rating || 0) >= filters.minRating);
    }

    // Search
    if (query) {
      result = result.filter(
        (item) =>
          item.title?.toLowerCase().includes(query) ||
          item.customerName?.toLowerCase().includes(query),
      );
    }

    // Sorting
    if (sortParam) {
      result.sort((a, b) => {
        if (sortParam === 'price_asc') return (a.price || 0) - (b.price || 0);
        if (sortParam === 'price_desc') return (b.price || 0) - (a.price || 0);
        if (sortParam === 'rating_asc') return (a.rating || 0) - (b.rating || 0);
        if (sortParam === 'rating_desc') return (b.rating || 0) - (a.rating || 0);
        return 0;
      });
    }

    return result;
  }, [items, filters, searchQuery, sortParam]);
};
