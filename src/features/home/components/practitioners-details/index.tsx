'use client';

import Image from 'next/image';
import {
  HeartFillIcon,
  HeartIcon,
  MessageCircleIcon,
  ShareIcon,
  ShieldIcon,
  SparklesIcon,
  CalendarIcon,
  BagIcon,
  StarIcon,
} from '@/components/shared/icons';
import { Button, Typography } from '@/components/ui';
import { useFavorites } from '@/hooks/use-favorite';
import { PractitionersSectionProps } from '../practitioners-section/types';

export const PractitionersDetails = ({ item }: { item: PractitionersSectionProps }) => {
  const { isFavorite, toggleFavorite, isLoaded } = useFavorites();
  const isFav = item.id ? isFavorite(item.id) : false;

  const getShortName = (name: string) => {
    if (!name) return '';
    const parts = name.trim().split(' ');
    if (parts.length === 1) return name;
    return `${parts[0]} ${parts
      .slice(1)
      .map((w) => `${w[0]}.`)
      .join(' ')}`;
  };

  return (
    <div className="container my-10 flex flex-col gap-5">
      <div className="bg-secondary-800 flex w-full flex-col gap-6 rounded-2xl p-5 md:p-8">
        <div className="flex flex-col items-start gap-5 md:flex-row md:items-start md:justify-between">
          <div className="flex items-start gap-5">
            <div className="border-secondary-300 relative h-30 w-30 shrink-0 overflow-hidden rounded-full border-4">
              <Image
                className="h-full w-full object-cover"
                src={item.avatar ?? ''}
                alt="details"
                width={800}
                height={800}
                priority
              />
            </div>

            <div className="flex flex-col gap-5 md:flex-row">
              <div className="flex flex-col gap-1">
                <Typography className="text-neutral-0 heading-1">{item.customerName}</Typography>
                <Typography className="text-warning-300 body-14">
                  {getShortName(item.customerName)}
                </Typography>
              </div>

              <div className="bg-success/20 border-success-300 mt-3 flex h-6 w-fit animate-pulse items-center gap-1 rounded-full border px-3 py-1">
                <ShieldIcon className="text-success-400 size-2 lg:size-4" />
                <Typography className="lg:body-14 text-success-400 text-[9px]">
                  Verified Witch
                </Typography>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button className="bg-warning-500 hover:bg-warning-400 rounded-xl px-4 py-2 transition">
              <MessageCircleIcon className="text-neutral-0 mr-2 size-4" />
              <Typography className="text-neutral-0">Message</Typography>
            </Button>

            <div className="bg-secondary/50 border-secondary-300 flex cursor-pointer items-center gap-1 rounded-lg border p-2 backdrop-blur-lg">
              <ShareIcon className="text-warning-100 hover:text-warning-500" />
            </div>

            <button
              onClick={() => item.id && toggleFavorite(item.id)}
              className="cursor-pointer"
              disabled={!isLoaded}
            >
              {isFav ? (
                <div className="bg-primary-500 flex items-center gap-1 rounded-lg p-2">
                  <HeartFillIcon className="text-neutral-0" />
                </div>
              ) : (
                <div className="bg-secondary/50 border-secondary-300 flex items-center gap-1 rounded-lg border p-2">
                  <HeartIcon className="text-neutral-0" />
                </div>
              )}
            </button>
          </div>
        </div>

        <div className="grid w-full grid-cols-2 gap-3 md:grid-cols-4">
          <div className="bg-secondary/30 border-secondary-700 flex flex-col items-center justify-center gap-1 rounded-xl border p-4 backdrop-blur-sm">
            <StarIcon className="text-warning-500 mb-1 size-5" />
            <div className="text-neutral-0 flex items-baseline gap-1">
              <span className="text-lg font-bold">{item.rating?.toFixed(1) ?? '0.0'}</span>
              <span className="text-sm">(2)</span> {/* تعداد نظرات */}
            </div>
            <Typography className="text-secondary-300 text-xs">Rating</Typography>
          </div>

          <div className="bg-secondary/30 border-secondary-700 flex flex-col items-center justify-center gap-1 rounded-xl border p-4 backdrop-blur-sm">
            <CalendarIcon className="text-secondary-400 mb-1 size-5" />
            <div className="text-neutral-0 flex items-baseline gap-1">
              <span className="text-lg font-bold">{item.date ?? 0} yrs</span>
            </div>
            <Typography className="text-secondary-300 text-xs">Experience</Typography>
          </div>

          <div className="bg-secondary/30 border-secondary-700 flex flex-col items-center justify-center gap-1 rounded-xl border p-4 backdrop-blur-sm">
            <BagIcon className="text-info-400 mb-1 size-5" />
            <div className="text-neutral-0 flex items-baseline gap-1">
              <span className="text-lg font-bold">9</span> {/* داده تستی */}
            </div>
            <Typography className="text-secondary-300 text-xs">Total Sales</Typography>
          </div>

          <div className="bg-secondary/30 border-secondary-700 flex flex-col items-center justify-center gap-1 rounded-xl border p-4 backdrop-blur-sm">
            <HeartIcon className="text-primary-500 mb-1 size-5" />
            <div className="text-neutral-0 flex items-baseline gap-1">
              <span className="text-lg font-bold">{item.favorite ?? 0}</span>
            </div>
            <Typography className="text-secondary-300 text-xs">Likes</Typography>
          </div>
        </div>
      </div>

      <div className="bg-secondary-800 flex w-full flex-col gap-4 rounded-2xl p-5 md:p-8">
        <div className="flex items-center gap-2">
          <SparklesIcon className="text-warning-500 size-6" />
          <Typography className="text-neutral-0 text-lg font-bold">About</Typography>
        </div>
        <Typography className="text-secondary-300 body-14 text-justify leading-7">
          Peace, Love, & Transmutation. I am a Spiritualist, Rootworker/Medicine Woman, Artist,
          ShadowWorker and Alchemist. I have gifts of sight, hearing, prophetising and many more.
          The tools I use are only to enhance/guide my gifts with the help of my helping/working
          Ancestors & Spirtis. I work with all elements. Message me for any type of spiritual
          workings. My work is Legit & Confidential.
        </Typography>
      </div>
    </div>
  );
};
