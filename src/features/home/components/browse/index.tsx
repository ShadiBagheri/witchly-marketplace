import { Typography } from '@/components/ui';
import { FilterModalContent } from '../witchy-filter';
import { useTrendingMagic } from '../../hooks/use-trending-magic';
import { useEffect, useState } from 'react';
import { useUrlParams } from '../../hooks/use-url-params';
import Link from 'next/link';
import { Cards } from '../trending-magic-section';
import { FilterIcon } from '@/components/shared/icons';

export const BrowseSection = () => {
  const { filters, searchQuery, sortParam, updateFilters, updateSearch, updateSort, resetFilters } =
    useUrlParams();

  const [localQuery, _setLocalQuery] = useState(searchQuery);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (localQuery !== searchQuery) updateSearch(localQuery);
    }, 500);
    return () => clearTimeout(handler);
  }, [localQuery, searchQuery, updateSearch]);

  const { data, isPending, isError, error, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useTrendingMagic(filters, searchQuery, sortParam, 4);

  const allItems = data?.pages.flatMap((page) => page.data) ?? [];
  const totalItems = data?.pages[0]?.meta.total ?? 0;
  const totalPages = data?.pages[0]?.meta.totalPages ?? 0;

  const hasActiveFilters =
    filters.tab !== 'all' ||
    filters.categories.length > 0 ||
    filters.minRating > 0 ||
    filters.priceRange.min > 0 ||
    filters.priceRange.max < 1000 ||
    searchQuery.trim() !== '';

  return (
    <div className="container grid w-full grid-cols-1 gap-6 py-10 lg:grid-cols-12">
      <div className="lg:hidden">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="bg-secondary-800 text-neutral-0 flex w-full items-center justify-center gap-2 rounded-xl py-3"
        >
          <FilterIcon className="text-warning-500 size-5" />
          <Typography className="body-14 font-semibold">Filters</Typography>
          {hasActiveFilters && (
            <span className="bg-warning-500 ml-2 flex size-5 items-center justify-center rounded-full text-[10px] font-bold">
              !
            </span>
          )}
        </button>
      </div>

      <div className="hidden lg:col-span-3 lg:block">
        <div className="bg-secondary-800 flex h-fit flex-col rounded-xl pt-5">
          <div className="flex items-center justify-between px-5">
            <div className="flex items-center gap-3">
              <FilterIcon className="text-warning-500 size-4.5" />
              <Typography className="body-7 text-neutral-0">Filter</Typography>
            </div>
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="text-warning-500 hover:text-warning-400 text-xs transition-colors"
              >
                Clear
              </button>
            )}
          </div>
          <div className="border-secondary-300 mt-4 w-full border-b" />
          <div className="w-full p-6">
            <FilterModalContent filters={filters} onFiltersChange={updateFilters} />
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 transform bg-neutral-900 transition-transform duration-300 ease-in-out lg:hidden ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="bg-secondary-800 flex h-full flex-col overflow-y-auto pt-5">
          <div className="flex items-center justify-between px-5">
            <div className="flex items-center gap-3">
              <FilterIcon className="text-warning-500 size-4.5" />
              <Typography className="body-7 text-neutral-0">Filter</Typography>
            </div>
            <div className="flex items-center gap-2">
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="text-warning-500 hover:text-warning-400 text-xs transition-colors"
                >
                  Clear
                </button>
              )}
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="text-neutral-0 hover:text-warning-500"
              >
                <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="border-secondary-300 mt-4 w-full border-b" />
          <div className="w-full p-6">
            <FilterModalContent filters={filters} onFiltersChange={updateFilters} />
          </div>
        </div>
      </div>

      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        />
      )}

      <div className="flex flex-col gap-6 lg:col-span-9">
        {!isPending && !isError && (
          <p className="text-sm text-gray-500">
            Showing {allItems.length} of {totalItems} items (Page {data?.pages.length ?? 1} of{' '}
            {totalPages})
          </p>
        )}

        {/* Loading */}
        {isPending && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-80 animate-pulse rounded-xl bg-neutral-200" />
            ))}
          </div>
        )}

        {/* Error */}
        {isError && (
          <div className="rounded-xl border border-red-300 bg-red-50 p-6 text-center text-red-700">
            <p className="font-semibold">Something went wrong.</p>
            <p className="text-sm">{error.message}</p>
          </div>
        )}

        {/* Empty */}
        {!isPending && !isError && allItems.length === 0 && (
          <div className="py-10 text-center text-neutral-500">
            No results found. Try changing filters or search.
          </div>
        )}

        {/* Data */}
        {!isPending && !isError && allItems.length > 0 && (
          <>
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              {allItems.map((item) => (
                <Link key={item.id} href={`/trendingmagic/${item.id}`} className="block h-full">
                  <Cards {...item} />
                </Link>
              ))}
            </div>

            {/* Load More */}
            <div className="flex justify-center py-4">
              {hasNextPage ? (
                <button
                  onClick={() => fetchNextPage()}
                  disabled={isFetchingNextPage}
                  className="bg-warning-500 text-neutral-0 rounded-lg px-6 py-2 disabled:opacity-50"
                >
                  {isFetchingNextPage ? 'Loading...' : 'Load More'}
                </button>
              ) : (
                <span className="text-sm text-neutral-500">You have reached the end.</span>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
