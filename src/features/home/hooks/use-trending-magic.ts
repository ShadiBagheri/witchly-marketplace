'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { getTrendingMagic } from '../api/get-trending-magic';
import type { FilterOptions } from '../types';

export const useTrendingMagic = (
  filters: FilterOptions,
  searchQuery: string,
  sortParam: string,
  pageSize = 4,
) => {
  return useInfiniteQuery({
    queryKey: ['trending-magic', filters, searchQuery, sortParam, pageSize],
    queryFn: ({ pageParam }) =>
      getTrendingMagic({ filters, searchQuery, sortParam, page: pageParam, pageSize }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.meta.page < lastPage.meta.totalPages) {
        return lastPage.meta.page + 1;
      }
      return undefined;
    },
    placeholderData: (prev) => prev,
  });
};
