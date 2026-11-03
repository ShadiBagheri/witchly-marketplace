import React from 'react';
import Image from 'next/image';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardMedia,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselIndicator,
} from './carousel';

const meta: Meta<typeof Carousel> = {
  title: 'UI/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Tests: Story = {
  args: {
    children: (
      <>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/4">
              <div className="p-1">
                <Card className="border-neutral-60 rounded-2xl border p-2">
                  <CardMedia className="overflow-hidden">
                    <Image
                      src="/landing/images/image-7.svg"
                      alt={`Slide ${index + 1}`}
                      width={130}
                      height={130}
                      className="object-fit"
                    />
                  </CardMedia>
                  <CardHeader className="bg-white">
                    <CardTitle className="text-lg">Featured Content {index + 1}</CardTitle>
                    <CardDescription>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselIndicator />
        <CarouselPrevious />
        <CarouselNext />
      </>
    ),
  },
  render: (args) => <Carousel>{args.children}</Carousel>,
};

export const Basic: Story = {
  render: () => (
    <Carousel>
      <CarouselContent>
        <CarouselItem className="basis-1/3 md:basis-1/2">
          <div className="p-1">
            <Card className="rounded-lg border shadow-sm">
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-4xl font-semibold">1</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="basis-1/3 md:basis-1/2">
          <div className="p-1">
            <Card className="rounded-lg border shadow-sm">
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-4xl font-semibold">2</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="basis-1/3 md:basis-1/2">
          <div className="p-1">
            <Card className="rounded-lg border shadow-sm">
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-4xl font-semibold">3</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

export const WithIndicators: Story = {
  render: () => (
    <Carousel>
      <div className="mb-3 flex items-end justify-end gap-2">
        <CarouselPrevious />
        <CarouselNext />
      </div>
      <CarouselContent>
        <CarouselItem className="basis-1/2">
          <div className="p-1">
            <Card className="rounded-lg border shadow-sm">
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-4xl font-semibold">1</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="basis-1/2">
          <div className="p-1">
            <Card className="rounded-lg border shadow-sm">
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-4xl font-semibold">2</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="basis-1/2">
          <div className="p-1">
            <Card className="rounded-lg border shadow-sm">
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-4xl font-semibold">3</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="basis-1/2">
          <div className="p-1">
            <Card className="rounded-lg border shadow-sm">
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-4xl font-semibold">4</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselIndicator />
    </Carousel>
  ),
};

export const BasisExamples: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Basis 1/2 - 2 items per row */}
      <div>
        <h3 className="mb-4 text-lg font-semibold">Basis 1/2 (2 items per row)</h3>
        <Carousel>
          <div className="mb-3 flex items-end justify-end gap-2">
            <CarouselPrevious />
            <CarouselNext />
          </div>
          <CarouselContent>
            {Array.from({ length: 4 }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/2">
                <div className="p-1">
                  <Card className="rounded-lg border shadow-sm">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-2xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Basis 1/3 - 3 items per row */}
      <div>
        <h3 className="mb-4 text-lg font-semibold">Basis 1/3 (3 items per row)</h3>
        <Carousel>
          <div className="mb-3 flex items-end justify-end gap-2">
            <CarouselPrevious />
            <CarouselNext />
          </div>
          <CarouselContent>
            {Array.from({ length: 6 }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/3">
                <div className="p-1">
                  <Card className="rounded-lg border shadow-sm">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselIndicator />
        </Carousel>
      </div>

      {/* Basis 1/4 - 4 items per row */}
      <div>
        <h3 className="mb-4 text-lg font-semibold">Basis 1/4 (4 items per row)</h3>
        <Carousel>
          <div className="mb-3 flex items-end justify-end gap-2">
            <CarouselPrevious />
            <CarouselNext />
          </div>
          <CarouselContent>
            {Array.from({ length: 8 }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/4">
                <div className="p-1">
                  <Card className="rounded-lg border shadow-sm">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-lg font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselIndicator />
        </Carousel>
      </div>

      {/* Basis 1/5 - 5 items per row */}
      <div>
        <h3 className="mb-4 text-lg font-semibold">Basis 1/5 (5 items per row)</h3>
        <Carousel>
          <div className="mb-3 flex items-end justify-end gap-2">
            <CarouselPrevious />
            <CarouselNext />
          </div>
          <CarouselContent>
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/5">
                <div className="p-1">
                  <Card className="rounded-lg border shadow-sm">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-base font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselIndicator />
        </Carousel>
      </div>

      {/* Mixed Basis Sizes */}
      <div>
        <h3 className="mb-4 text-lg font-semibold">Mixed Basis Sizes</h3>
        <Carousel>
          <div className="mb-3 flex items-end justify-end gap-2">
            <CarouselPrevious />
            <CarouselNext />
          </div>
          <CarouselContent>
            <CarouselItem className="basis-1/2">
              <div className="p-1">
                <Card className="rounded-lg border bg-blue-50 shadow-sm">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-2xl font-semibold">1/2</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <div className="p-1">
                <Card className="rounded-lg border bg-green-50 shadow-sm">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-xl font-semibold">1/3</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <div className="p-1">
                <Card className="rounded-lg border bg-yellow-50 shadow-sm">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-lg font-semibold">1/4</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/5">
              <div className="p-1">
                <Card className="rounded-lg border bg-red-50 shadow-sm">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-base font-semibold">1/5</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselIndicator />
        </Carousel>
      </div>
    </div>
  ),
};
