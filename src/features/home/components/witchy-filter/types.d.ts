import { FilterOptions } from '@/features/home/types';

export type FilterModalContentProps = {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
};

export type FilterCategoryProps = {
  categoryId: string;
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
};

export type FilterOption = {
  value: string;
  label: string;
};

export type WitchyFilterProps = {
  id: string;
  title: string;
  type?: 'slider' | 'switch' | 'checkbox';
  options?: FilterOption[];
};
