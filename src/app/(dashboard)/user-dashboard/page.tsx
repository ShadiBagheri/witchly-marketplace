import { Suspense } from 'react';
import { UserDashboardListFeature } from '@/features/user-dashboard';
import { HomeLayout } from '@/layouts/home-layout';

export default function UserDashboardPage() {
  return (
    <HomeLayout>
      <Suspense fallback={<div className="h-80 animate-pulse rounded-xl bg-neutral-200" />}>
        <UserDashboardListFeature />
      </Suspense>
    </HomeLayout>
  );
}
