import {
  ArrowRightIcon,
  HeartFillIcon,
  LanguageIcon,
  MagicWandIcon,
  ShieldCheckIcon,
  StarFillIcon,
} from '@/components/shared/icons';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Carousel,
  CarouselContent,
  CarouselItem,
  Typography,
} from '@/components/ui';
import Link from 'next/link';
import { DataProps, PractitionersSectionProps } from './types';
import Image from 'next/image';
import AutoScroll from 'embla-carousel-auto-scroll';

export const Cards = ({
  favorite = 0,
  experiance,
  date,
  customerName,
  avatar,
  language,
  average,
  rating = 0,
}: PractitionersSectionProps) => {
  return (
    <Card className="border-secondary-300 flex h-75 w-full flex-col gap-1 rounded-xl border bg-transparent p-1 lg:h-92 xl:h-112.5">
      <CardHeader className="border-secondary-300 flex items-center justify-between rounded-lg border bg-transparent px-2 py-1 xl:p-2">
        <Typography className="text-neutral-0 sm:body-18 xl:body-15 text-[10px]">
          {customerName}
        </Typography>
        <ShieldCheckIcon className="text-info-600 size-4 xl:size-5" />
      </CardHeader>
      <CardContent className="relative p-0">
        <div className="relative h-34 w-full overflow-hidden rounded-lg lg:h-40 xl:h-60">
          <Image
            className="h-full w-full object-cover"
            src={avatar ?? ''}
            alt="pic"
            width={400}
            height={400}
            loading="eager"
          />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-black/60 to-transparent" />
          <div className="absolute right-0 bottom-2 left-0 z-50 flex items-center justify-between px-2">
            <div className="bg-neutral/30 flex items-center gap-1 rounded-full border border-neutral-600 px-1.5 py-0.5 backdrop-blur-lg">
              <StarFillIcon className="text-warning-500 size-3 xl:size-3.5" />
              <span className="text-neutral-0 flex gap-1 text-xs xl:text-sm">
                {rating.toFixed(1)}
              </span>
            </div>
            <div className="bg-neutral/30 flex items-center gap-1 rounded-full border border-neutral-600 px-1.5 py-0.5 backdrop-blur-lg">
              <HeartFillIcon className="text-secondary-300 size-3 xl:size-3.5" />
              <span className="text-neutral-0 flex gap-1 text-xs xl:text-sm">{favorite}</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-1">
        <div className="border-secondary-300 flex flex-col items-start gap-1 rounded-lg border bg-transparent px-2 py-1 xl:gap-2 xl:p-2">
          <div className="flex items-center gap-1">
            <LanguageIcon className="text-warning-300 size-3 xl:size-4" />
            <Typography className="text-warning-300 xl:body-18 text-[11px]">Languages</Typography>
          </div>
          <Typography className="border-secondary-300 text-secondary-300 rounded-md border bg-transparent px-2 py-0.5 text-[7px] xl:text-[9px]">
            {language}
          </Typography>
        </div>
        <div className="border-secondary-300 flex flex-col items-start gap-1 rounded-lg border bg-transparent px-2 py-1 xl:gap-2 xl:p-2">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-1">
              <MagicWandIcon className="text-warning-300 size-2.5 xl:size-3" />
              <Typography className="text-warning-300 xl:body-18 text-[11px]">
                Experiances
              </Typography>
            </div>
            {average && (
              <Typography className="border-warning-600 text-warning-300 sm:body-18 bg-warning/30 rounded-full border px-1.5 text-[9px] backdrop-blur-lg">
                +{average}
              </Typography>
            )}
          </div>
          <div className="flex gap-1">
            {experiance?.map((item) => (
              <Typography
                key={item.id}
                className="border-secondary-300 text-secondary-300 flex rounded-md border bg-transparent px-2 py-0.5 text-[7px] xl:text-[9px]"
              >
                {item.category ?? item.categoryTitle}
              </Typography>
            ))}
          </div>
        </div>
        <Typography className="border-secondary-300 text-secondary-300 flex w-fit rounded-md border bg-transparent px-2 py-0.5 text-[7px] xl:text-[9px]">
          {`${date} Years Experiance`}
        </Typography>
      </CardFooter>
    </Card>
  );
};

export const CarouselSection = ({
  practitionersSectionData,
}: {
  practitionersSectionData: PractitionersSectionProps[];
}) => {
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
          {practitionersSectionData.map((e) => (
            <CarouselItem
              key={`h-${e?.id}`}
              itemId={Number(e.id)}
              className="basis-1/2 md:basis-1/4 lg:basis-1/5"
            >
              <Link href={`/practitioners/${e.id}`} className="block h-full">
                <Cards
                  customerName={e.customerName}
                  date={e.date}
                  avatar={e.avatar}
                  rating={e.rating}
                  favorite={e.favorite}
                  experiance={e.experiance}
                  language={e.language}
                  average={e.average}
                />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};

export const PractitionersSection = ({ practitionersSectionData }: DataProps) => {
  return (
    <section className="bg-secondary-900 w-full py-12">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
          <div className="flex flex-col gap-2">
            <Typography className="heading-2 lg:heading-1 text-warning-200">
              Upcoming Practitioners
            </Typography>
            <Typography className="body-13 lg:body-10 text-secondary-300">
              Scroll to reveal our featured magical services
            </Typography>
          </div>
          <Link
            href="/"
            className="border-secondary-300 text-warning-200 body-15 lg:body-10 flex items-center gap-2 rounded-xl border bg-transparent px-3 py-2 transition duration-300 hover:shadow-lg"
          >
            View All Practitioners
            <ArrowRightIcon className="size-4 lg:size-5" />
          </Link>
        </div>
      </div>
      <div className="mt-10">
        <CarouselSection practitionersSectionData={practitionersSectionData} />
      </div>
    </section>
  );
};
