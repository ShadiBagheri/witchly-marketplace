import { HomeFeature } from '@/features/home';
import { HomeLayout } from '@/layouts/home-layout';

// Mock Data
import { PractitionersSectionData } from '@/features/home/components/practitioners-section/constants';

export default function HomePage() {
  return (
    <HomeLayout>
      <HomeFeature practitionersSectionData={PractitionersSectionData} />
    </HomeLayout>
  );
}
