export type TabFilter = 'all' | 'wishes' | 'services' | 'products';
export type CategoryFilter = 'all' | 'tarot' | 'reiki' | 'charms' | 'spell casting' | 'energy work';

export type PriceRange = { min: number; max: number };

export type FilterOptions = {
  tab: TabFilter;
  categories: CategoryFilter[];
  priceRange: PriceRange;
  minRating: number;
};

export type ExperienceItem = {
  id: string | number;
  category: string;
  categoryTitle?: string;
  average?: number;
};

export type TrendingMagicSectionProps = {
  id: string | number;
  customerName?: string;
  title?: string;
  avatar?: string;
  rating?: number;
  experiences?: ExperienceItem[];
  reviews?: number;
  discountPrice?: number;
  price?: number;
  tabType?: TabFilter;
};
