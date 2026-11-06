import { TrendingMagicDetails } from '@/features/home/components/trending-magic-details';
import { TrendingMagicSectionData } from '@/features/home/components/trending-magic-section/constants';
import { HomeLayout } from '@/layouts/home-layout';
import { notFound } from 'next/navigation';

export default async function TrendingMagicDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = TrendingMagicSectionData.find((i) => String(i.id) === id);

  if (!item) {
    notFound();
  }

  return (
    <HomeLayout>
      <TrendingMagicDetails item={item} />
    </HomeLayout>
  );
}
