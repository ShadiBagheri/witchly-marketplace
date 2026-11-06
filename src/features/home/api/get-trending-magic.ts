import { TrendingMagicSectionData } from '../components/trending-magic-section/constants';
import type { FilterOptions, TrendingMagicSectionProps } from '../types';

type Params = {
  filters: FilterOptions;
  searchQuery: string;
  sortParam: string;
  page: number;
  pageSize: number;
};

type Response = {
  data: TrendingMagicSectionProps[];
  meta: { total: number; page: number; pageSize: number; totalPages: number };
};

export async function getTrendingMagic({
  filters,
  searchQuery,
  sortParam,
  page,
  pageSize,
}: Params): Promise<Response> {
  await new Promise((resolve) => setTimeout(resolve, 600));
  console.log('Fetching page:', page);

  let result = [...TrendingMagicSectionData];
  const query = searchQuery.toLowerCase().trim();

  if (filters.tab !== 'all') {
    result = result.filter((item) => item.tabType === filters.tab);
  }

  if (filters.categories.length > 0 && !filters.categories.includes('all')) {
    result = result.filter((item) =>
      item.experiences?.some((exp) => filters.categories.includes(exp.category as any)),
    );
  }

  result = result.filter((item) => {
    const price = item.price || 0;
    return price >= filters.priceRange.min && price <= filters.priceRange.max;
  });

  if (filters.minRating > 0) {
    result = result.filter((item) => (item.rating || 0) >= filters.minRating);
  }

  if (query) {
    result = result.filter(
      (item) =>
        item.title?.toLowerCase().includes(query) ||
        item.customerName?.toLowerCase().includes(query) ||
        item.experiences?.some((exp) =>
          (exp.categoryTitle ?? exp.category).toLowerCase().includes(query),
        ),
    );
  }

  if (sortParam) {
    result.sort((a, b) => {
      if (sortParam === 'price_asc') return (a.price || 0) - (b.price || 0);
      if (sortParam === 'price_desc') return (b.price || 0) - (a.price || 0);
      if (sortParam === 'rating_asc') return (a.rating || 0) - (b.rating || 0);
      if (sortParam === 'rating_desc') return (b.rating || 0) - (a.rating || 0);
      return 0;
    });
  }

  const total = result.length;
  const start = (page - 1) * pageSize;
  const data = result.slice(start, start + pageSize);

  return {
    data,
    meta: { total, page, pageSize, totalPages: Math.ceil(total / pageSize) },
  };
}
