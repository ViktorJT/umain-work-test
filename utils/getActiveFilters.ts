import type { ActiveFiltersByCategory } from "@/types/filter";
import type { SearchParams } from "@/types/page";

export const getActiveFilters = (
  searchParams: SearchParams,
): ActiveFiltersByCategory => ({
  food: new Set(searchParams.food?.split(",").filter(Boolean) ?? []),
  price: new Set(searchParams.price?.split(",").filter(Boolean) ?? []),
  duration: new Set(searchParams.duration?.split(",").filter(Boolean) ?? []),
});
