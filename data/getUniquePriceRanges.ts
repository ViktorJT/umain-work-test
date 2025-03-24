import { PriceRangeFilter } from "@/types/filter";
import type { Restaurant } from "@/types/restaurant";

import { fetchData } from "@/utils/fetchData";
import { ENDPOINTS } from "./constants";

export async function getUniquePriceRanges(restaurants: Restaurant[]) {
  const uniquePriceRangeIds = Array.from(
    new Set(restaurants.map((r) => r.price_range_id)),
  );

  return await Promise.all(
    uniquePriceRangeIds.map((id) =>
      fetchData<PriceRangeFilter>(ENDPOINTS.PRICE_RANGE + id, {
        next: { revalidate: false }, // This probably never changes? Mihgt probably never need a redeployment so just keeping it off
      }),
    ),
  );
}
