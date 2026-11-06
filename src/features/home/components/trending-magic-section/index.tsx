import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, StarFillIcon, StarIcon, UserIcon } from '@icons';
import { Card, CardContent, CardFooter, CardHeader, Typography } from '@/components/ui';
import { TrendingMagicSectionProps } from '@/features/home/types';
import { TrendingMagicSectionData } from './constants';

export const Cards = ({
  price,
  discountPrice,
  experiences,
  reviews,
  customerName,
  title,
  avatar,
  rating = 0,
}: TrendingMagicSectionProps) => {
  const renderStars = (rating: number = 0) => {
    return [...Array(5)].map((_, i) =>
      i < rating ? (
        <StarFillIcon key={i} className="text-warning-500 size-3" />
      ) : (
        <StarIcon key={i} className="text-secondary-300 size-3" />
      ),
    );
  };
  return (
    <Card className="bg-secondary-900 group shadow-secondary-900 flex h-82 w-full flex-col gap-1 rounded-xl border pb-1 transition duration-300 hover:scale-105 hover:shadow-lg sm:h-85 lg:h-91 xl:h-112">
      <CardHeader className="relative p-0">
        <div className="relative h-34 w-full overflow-hidden rounded-t-lg lg:h-40 xl:h-60">
          <Image
            className="h-full w-full object-cover"
            src={avatar ?? ''}
            alt="pic"
            width={400}
            height={400}
            loading="eager"
          />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-5 px-3 py-1">
        <Typography className="text-neutral-0 group-hover:text-warning-300 body-13">
          {title}
        </Typography>
        <div className="flex items-center gap-2">
          <div className="bg-secondary/45 border-secondary-300 flex h-6 w-6 items-center justify-center rounded-full border backdrop-blur-md">
            <UserIcon className="text-secondary-300 block size-4" />
          </div>
          <Typography className="text-warning-300 sm:body-18 text-[10px]">
            {customerName}
          </Typography>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-1 px-3">
        <div className="border-secondary-300 w-full border-[0.5px]" />
        <div className="border-secondary-300 flex flex-col items-start gap-1 bg-transparent py-2 xl:gap-2">
          <div className="flex items-center gap-2">
            <span className="flex">{renderStars(rating)}</span>
            <div className="text-secondary-300 xl:body-18 flex items-center gap-1 text-[11px]">
              <span>{reviews}</span>
              <Typography>reviews</Typography>
            </div>
          </div>
          <div className="flex flex-wrap gap-1">
            {experiences?.map((item) => (
              <div key={item.id} className="flex items-center gap-1">
                <Typography className="border-secondary-300 text-secondary-300 bg-secondary/30 flex rounded-md border px-1.5 py-0.5 text-[7px] font-bold backdrop-blur-lg xl:text-[9px]">
                  {item.categoryTitle ?? item.category}
                </Typography>

                {item.average && (
                  <Typography className="border-secondary-300 text-secondary-300 bg-secondary/30 flex rounded-md border px-1.5 py-0.5 text-[7px] font-bold backdrop-blur-lg xl:text-[9px]">
                    {`+${item.average}`}
                  </Typography>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="border-secondary-300 w-full border-[0.5px]" />
        <div className="flex flex-col pt-1">
          {discountPrice && (
            <Typography className="text-secondary-300 text-[9px] line-through">
              {`$${discountPrice?.toFixed(2)}`}
            </Typography>
          )}
          {discountPrice ? (
            <Typography className="text-success-300">{`$${price?.toFixed(2)}`}</Typography>
          ) : (
            <Typography className="text-neutral-0">{`$${price?.toFixed(2)}`}</Typography>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export const TrendingMagicSection = () => {
  return (
    <section className="container my-20 w-full">
      <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
        <div className="flex flex-col gap-2">
          <Typography className="heading-2 lg:heading-1 text-secondary-800 dark:text-neutral-0">
            Trending Mystical Services
          </Typography>
          <Typography className="body-13 lg:body-10 text-secondary-950 dark:text-secondary-300">
            Discover the most popular spells, readings, and magical items from our community
          </Typography>
        </div>
        <Link
          href="/browse"
          className="border-secondary-300 text-warning-200 body-15 lg:body-10 bg-secondary-800 flex items-center gap-2 rounded-xl border px-3 py-2 transition duration-300 hover:shadow-lg"
        >
          Browse All Services
          <ArrowRightIcon className="size-4 lg:size-5" />
        </Link>
      </div>
      <div className="mt-10 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {TrendingMagicSectionData.map((item) => (
          <Link key={item.id} href={`/trendingmagic/${item.id}`} className="block h-full">
            <Cards {...item} />
          </Link>
        ))}
      </div>
    </section>
  );
};
