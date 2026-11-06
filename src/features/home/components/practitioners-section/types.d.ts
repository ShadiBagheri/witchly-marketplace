export type CategoryProps = {
  title: string;
  category: string;
};

export type ExperianceProps = {
  id?: string | number;
  category?: string;
  categoryTitle?: string;
};

export type PractitionersSectionProps = {
  id?: string | number;
  customerName: string;
  avatar?: string;
  rating?: number;
  favorite?: number;
  experiance?: ExperianceProps[];
  date?: number;
  language?: string;
  average?: number;
};

export type DataProps = {
  practitionersSectionData: PractitionersSectionProps[];
};
