'use client';

import Link from 'next/link';
import { TrendingMagicSectionData } from '@/features/home/components/trending-magic-section/constants';
import { Cards } from '@/features/home/components/trending-magic-section';
import { Typography } from '@/components/ui';
import { ArrowRightIcon, HeartFillIcon } from '@/components/shared/icons';
import { useFavorites } from '@/hooks/use-favorite';

export const FavoriteList = () => {
  const { favorites, isLoaded, toggleFavorite } = useFavorites();

  const favoriteItems = TrendingMagicSectionData.filter((item) =>
    favorites.includes(String(item.id)),
  );

  if (!isLoaded) {
    return (
      <div className="container mx-auto py-10">
        <div className="h-80 animate-pulse rounded-xl bg-neutral-200" />
      </div>
    );
  }

  return (
    <div className="container mx-auto flex flex-col gap-6 py-10">
      <div className="flex items-center gap-4">
        <Link
          href="/browse"
          className="text-secondary-800 hover:text-warning-500 flex items-center gap-2 transition-colors"
        >
          <ArrowRightIcon className="size-5 rotate-180" />
          <Typography className="body-16">Back to Browse</Typography>
        </Link>
      </div>

      {favoriteItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
          <Typography className="text-secondary-500 heading-2">
            Your favorites list is empty.
          </Typography>
          <Typography className="text-secondary-400 body-14">
            Start adding items to your favorites by clicking the heart icon.
          </Typography>
          <Link
            href="/"
            className="bg-warning-500 hover:bg-warning-400 text-neutral-0 mt-4 rounded-xl px-6 py-2 transition duration-300 hover:scale-105"
          >
            Home Page
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {favoriteItems.map((item) => (
            <div key={item.id} className="group relative h-full">
              <Link href={`/trendingmagic/${item.id}`} className="block h-full">
                <Cards {...item} />
              </Link>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  toggleFavorite(item.id);
                }}
                className="bg-primary-500 hover:bg-primary-400 absolute top-2 right-2 z-10 flex size-8 cursor-pointer items-center justify-center rounded-full shadow-md transition-all"
                aria-label="Remove from favorites"
              >
                <HeartFillIcon className="text-neutral-0 size-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
