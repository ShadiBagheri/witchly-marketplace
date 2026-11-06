'use client';

import { Suspense } from 'react';
import { BrowseSection } from '@/features/home/components/browse';
import { HomeLayout } from '@/layouts/home-layout';

function BrowseSkeleton() {
  return (
    <div className="container py-10">
      <div className="mb-6 h-10 w-48 animate-pulse rounded-lg bg-neutral-200" />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-80 animate-pulse rounded-xl bg-neutral-200" />
        ))}
      </div>
    </div>
  );
}

export default function BrowsePage() {
  return (
    <HomeLayout>
      <Suspense fallback={<BrowseSkeleton />}>
        <BrowseSection />
      </Suspense>
    </HomeLayout>
  );
}
