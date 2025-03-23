import type { SearchParams } from "@/types/page";

export function getActiveFilters(searchParams: SearchParams) {
  return {
    food: new Set(searchParams.category?.split(",").filter(Boolean) ?? []),
    price: new Set(searchParams.price?.split(",").filter(Boolean) ?? []),
    duration: new Set(searchParams.duration?.split(",").filter(Boolean) ?? []),
  };
}
