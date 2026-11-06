import { StarFillIcon } from '@/components/shared/icons';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardMedia,
  Carousel,
  CarouselContent,
  CarouselItem,
  Typography,
} from '@/components/ui';
import Link from 'next/link';
import { ExploreSectionProps } from './types';
import Image from 'next/image';
import AutoScroll from 'embla-carousel-auto-scroll';
import { ExploreSectionData } from './constants';

export const Cards = ({ title, description, items, imageSrc }: ExploreSectionProps) => {
  return (
    <Card className="bg-secondary-800 border-secondary-100 flex h-90 w-full flex-col items-center gap-8 rounded-xl p-10">
      <CardHeader>
        <CardMedia className="h-20 w-20">
          <Image
            className="border-warning-500 shadow-warning-500 h-full w-full rounded-full border object-cover transition-all duration-300 hover:scale-105 hover:shadow-sm"
            src={imageSrc ?? ''}
            alt="pic"
            width={400}
            height={400}
            loading="eager"
          />
        </CardMedia>
      </CardHeader>
      <CardContent className="flex w-full flex-col items-center gap-1 text-center transition-all duration-300 hover:scale-105 md:w-50">
        <Typography className="text-neutral-0 body-15">{title}</Typography>
        <Typography className="text-warning-300 body-18">{description}</Typography>
      </CardContent>
      <CardFooter className="flex flex-col items-center gap-5">
        <div className="h-0.5 w-40 rounded-full bg-amber-100" />
        <div className="flex w-full items-center justify-center gap-3">
          <div className="flex gap-0.5">
            <StarFillIcon />
            <StarFillIcon />
            <StarFillIcon />
          </div>
          <Typography className="body-18 text-warning-300">{items}</Typography>
          <Typography className="body-18 text-warning-300">ITEMS</Typography>
        </div>
      </CardFooter>
    </Card>
  );
};

export const CarouselSection = () => {
  return (
    <>
      <Carousel
        opts={{ align: 'center', loop: true }}
        plugins={[
          AutoScroll({
            speed: 0.5,
            stopOnMouseEnter: false,
            stopOnInteraction: true,
          }),
        ]}
      >
        <CarouselContent className="gap-3">
          {ExploreSectionData.map((e) => (
            <CarouselItem
              key={`h-${e?.id}`}
              itemId={Number(e.id)}
              className="basis-1/2 sm:basis-1/4 lg:basis-1/5 xl:basis-1/6"
            >
              <Link href={`/practitioners/${e.id}`} className="block h-full">
                <Cards
                  title={e.title}
                  description={e.description}
                  items={e.items}
                  imageSrc={e.imageSrc}
                />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};

export const ExploreSection = () => {
  return (
    <section className="w-full py-12">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-2 md:items-center">
          <Typography className="heading-2 lg:heading-1 text-secondary-950 dark:text-neutral-0 text-center">
            Explore a Category
          </Typography>
          <Typography className="body-13 lg:body-10 dark:text-secondary-300 text-center text-neutral-600 md:w-100 lg:w-150">
            Explore our most loved product categories and discover amazing deals across thousands of
            premium items
          </Typography>
        </div>
      </div>
      <div className="mt-5">
        <CarouselSection />
      </div>
    </section>
  );
};
