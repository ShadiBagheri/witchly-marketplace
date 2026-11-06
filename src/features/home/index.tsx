'use client';

import { ExploreSection } from './components/explore-section';
import { PractitionersSection } from './components/practitioners-section';
import { DataProps } from './components/practitioners-section/types';
import { TrendingMagicSection } from './components/trending-magic-section';

export const HomeFeature = ({ practitionersSectionData }: DataProps) => {
  return (
    <div className="mb-10 flex flex-col">
      <PractitionersSection practitionersSectionData={practitionersSectionData} />
      <ExploreSection />
      <TrendingMagicSection />
    </div>
  );
};
