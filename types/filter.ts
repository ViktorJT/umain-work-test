export type FilterCategory = "food" | "price" | "duration";

export type PriceRangeFilter = {
  range: string;
  id: string;
};

export type Filter = {
  image_url?: string;
  name: string;
  id: string;
};

export type FilterGroup = {
  category: FilterCategory;
  filters: Filter[];
  heading: string;
};

export type FiltersResponse = {
  filters: Filter[];
};

export type FiltersByGroupResponse = Promise<
  [FilterGroup, FilterGroup, FilterGroup]
>;

export type ActiveFilters = {
  activeFilters: Set<string>;
};

export type ActiveFiltersByCategory = {
  food: Set<string>;
  price: Set<string>;
  duration: Set<string>;
};
