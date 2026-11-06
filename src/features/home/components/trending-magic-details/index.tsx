'use client';

import Image from 'next/image';
import { TrendingMagicSectionProps } from '../../types';
import {
  BagIcon,
  BoxIcon,
  CheckOverflowIcon,
  HeartFillIcon,
  HeartIcon,
  ShareIcon,
  ShoppingCartIcon,
  ShopsIcon,
  SparklesIcon,
  StarFillIcon,
  TruckIcon,
  UserIcon,
} from '@/components/shared/icons';
import { Button, Typography } from '@/components/ui';
import { useState } from 'react';
import { useFavorites } from '@/hooks/use-favorite';

export const TrendingMagicDetails = ({ item }: { item: TrendingMagicSectionProps }) => {
  const { isFavorite, toggleFavorite, isLoaded } = useFavorites();
  const isFav = isFavorite(item.id);

  const [quantity, setQuantity] = useState(1);

  return (
    <div className="container my-5 md:my-10">
      <div className="flex w-full flex-col items-center gap-6">
        <div className="bg-secondary-800 flex w-full items-center justify-between rounded-2xl p-4">
          <div className="flex items-center gap-2">
            <div className="bg-secondary/45 border-secondary-300 flex h-12 w-12 items-center justify-center rounded-full border backdrop-blur-md">
              <UserIcon className="text-secondary-300 block size-6" />
            </div>
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1">
                <ShopsIcon className="text-warning-300 block size-4" />
                <Typography className="text-warning-100 text-[10px]">SHOP</Typography>
              </div>
              <Typography className="text-neutral-0 sm:body-10">{item.customerName}</Typography>
            </div>
          </div>
          <div>
            <div className="bg-warning/20 border-warning-600 flex items-center gap-1 rounded-full border px-2 py-1 backdrop-blur-lg">
              <StarFillIcon className="text-warning-500 size-3 xl:size-3.5" />
              <span className="text-warning-500 flex gap-1 text-xs">
                {item?.rating?.toFixed(1)}
              </span>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-start justify-between gap-6 lg:flex-row">
          <div className="relative w-full overflow-hidden rounded-2xl">
            <Image
              className="h-auto w-full object-cover lg:h-125 xl:h-152.5"
              src={item.avatar ?? ''}
              alt={item.title ?? 'Product image'}
              width={800}
              height={800}
              priority
            />
          </div>

          <div className="flex w-full flex-col gap-4 xl:gap-6">
            {/* First Box */}
            <div className="bg-secondary-800 flex w-full flex-col gap-5 rounded-2xl p-4">
              <div className="flex flex-col items-start gap-2">
                <div className="bg-secondary/50 border-secondary-300 flex items-center gap-1 rounded-xl border px-2 py-1 backdrop-blur-lg">
                  <Typography className="body-18 text-secondary-300">
                    Altar Supplies & Tools
                  </Typography>
                </div>
                <Typography className="text-warning-300 body-7">{item.title}</Typography>
              </div>

              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <StarFillIcon />
                    <span className="text-neutral-0 flex text-[12px]">
                      {item.rating?.toFixed(1)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 border-r border-neutral-500 pr-3">
                    <div className="text-warning-300 xl:body-18 flex items-center gap-1 text-[11px]">
                      (<span>{item.reviews}</span>
                      <Typography className="body-18">reviews</Typography>)
                    </div>
                  </div>

                  <div className="flex items-center gap-1 border-r border-neutral-500 pr-3">
                    <HeartFillIcon className="size-4" />
                    <Typography className="body-18 text-neutral-0">1</Typography>
                  </div>

                  <div className="flex items-center gap-1 border-r border-neutral-500 pr-3">
                    <BagIcon className="text-warning-300 size-4" />
                    <Typography className="body-18 text-neutral-0">0</Typography>
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className="bg-secondary/50 border-secondary-300 flex cursor-pointer items-center gap-1 rounded-lg border p-2 backdrop-blur-lg">
                    <ShareIcon className="text-warning-100 hover:text-warning-500" />
                  </div>

                  <button
                    onClick={() => toggleFavorite(item.id)}
                    className="cursor-pointer"
                    aria-label="Toggle favorite"
                    disabled={!isLoaded}
                  >
                    {isFav ? (
                      <div className="bg-primary-500 flex items-center gap-1 rounded-lg p-2 transition-colors">
                        <HeartFillIcon className="text-neutral-0" />
                      </div>
                    ) : (
                      <div className="bg-secondary/50 border-secondary-300 hover:bg-secondary/80 flex items-center gap-1 rounded-lg border p-2 backdrop-blur-lg transition-colors">
                        <HeartIcon className="text-neutral-0 hover:text-warning-500 transition-colors" />
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Second Box */}
            <div className="bg-secondary-800 flex w-full flex-col gap-3 rounded-2xl py-2 xl:gap-5 xl:py-4">
              <div className="flex flex-col items-start gap-2 px-4">
                <Typography className="text-neutral-0 heading-2 xl:display-3">{`$${item.price?.toFixed(2)}`}</Typography>
              </div>

              <div className="border-secondary-300 flex w-full items-center justify-between gap-2 border-y py-3 xl:py-5">
                <div className="flex items-center gap-2 px-4">
                  <div className="flex items-center gap-1">
                    <BoxIcon className="text-info-400 size-5" />
                    <Typography className="text-neutral-0 body-14 flex">Availability</Typography>
                  </div>
                  <div className="bg-success/50 border-success-300 flex items-center gap-1 rounded-xl border px-2 py-1 backdrop-blur-lg">
                    <CheckOverflowIcon className="text-success-400 size-4" />
                    <Typography className="body-18 text-success-400">In Stock (10)</Typography>
                  </div>
                </div>

                <div className="flex px-4">
                  <div className="bg-secondary/50 border-secondary-300 hover:bg-secondary/80 text-neutral-0 flex size-8 w-20 items-center justify-between rounded-lg border px-4 backdrop-blur-lg transition-colors">
                    <button
                      onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <div className="text-neutral-0 body-18 flex w-8 justify-center">{quantity}</div>
                    <button
                      onClick={() => setQuantity((prev) => prev + 1)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex w-full items-center justify-between gap-4 px-4 pb-2">
                <Button className="bg-warning-500 hover:bg-warning-400 w-full rounded-xl px-3 py-2 transition duration-300 hover:scale-105">
                  <ShoppingCartIcon className="text-neutral-0 size-5" />
                  <Typography className="text-neutral-0">Add to Cart</Typography>
                </Button>
                <Button className="bg-secondary-900 hover:bg-secondary-600 w-full rounded-xl px-3 py-2 transition duration-300 hover:scale-105">
                  <SparklesIcon className="text-neutral-0 size-5" />
                  <Typography className="text-neutral-0">Buy Now</Typography>
                </Button>
              </div>
            </div>

            {/* Third Box */}
            <div className="bg-secondary-800 flex w-full flex-col items-center gap-3 rounded-2xl py-3 xl:gap-5 xl:py-4">
              <div className="flex w-full items-center justify-between gap-4 px-4">
                <div className="flex items-center gap-3">
                  <TruckIcon className="text-warning-500 size-5" />
                  <Typography className="text-neutral-0 body-14 flex">
                    Active Shipping Methods
                  </Typography>
                </div>

                <Typography className="text-warning-300 body-18 flex">2 methods</Typography>
              </div>

              <div className="border-secondary-300 flex w-full items-center border-y" />

              <div className="flex w-full items-center justify-between gap-4 px-4">
                <div className="flex items-center gap-3">
                  <TruckIcon className="text-info-400 size-5" />
                  <Typography className="text-neutral-0 body-14 flex">UK</Typography>
                </div>

                <Typography className="text-warning-300 body-18 flex">2 days</Typography>
              </div>

              <div className="border-secondary-300 flex w-full items-center border-y" />

              <div className="flex w-full items-center justify-between gap-4 px-4">
                <div className="flex items-center gap-4">
                  <TruckIcon className="text-info-400 size-5" />
                  <Typography className="text-neutral-0 body-14 flex">DDP USA</Typography>
                </div>

                <Typography className="text-warning-300 body-18 flex">10 days</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
