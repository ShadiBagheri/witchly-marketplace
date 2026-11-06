import { PractitionersDetails } from '@/features/home/components/practitioners-details';
import { PractitionersSectionData } from '@/features/home/components/practitioners-section/constants';
import { HomeLayout } from '@/layouts/home-layout';
import { notFound } from 'next/navigation';

export default async function PractitionersDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = PractitionersSectionData.find((i) => String(i.id) === id);

  if (!item) {
    notFound();
  }

  return (
    <HomeLayout>
      <PractitionersDetails item={item} />
    </HomeLayout>
  );
}
