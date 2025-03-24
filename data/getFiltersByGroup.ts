import { formatDeliveryTime } from "@/utils/formatDeliveryTime";
import { fetchData } from "@/utils/fetchData";

import type { Restaurant } from "@/types/restaurant";
import type {
  FiltersByGroupResponse,
  FiltersResponse,
  FilterGroup,
  Filter,
} from "@/types/filter";

import { DELIVERY_TIMES } from "./constants";
import { getUniquePriceRanges } from "./getUniquePriceRanges";
import { getDeliveryTimeId } from "@/utils/getDeliveryTimeId";

export async function getFiltersByGroup(
  restaurants: Restaurant[],
): FiltersByGroupResponse {
  const [foodFilterRes, uniquePricesRes] = await Promise.all([
    fetchData<FiltersResponse>("/filter"),
    getUniquePriceRanges(restaurants),
  ]);

  const food: FilterGroup = {
    category: "food",
    heading: "Food Category",
    filters: foodFilterRes.filters.map(
      (filter): Filter => ({
        ...filter,
      }),
    ),
  };

  const deliveryTime: FilterGroup = {
    category: "duration",
    heading: "Delivery Time",
    filters: DELIVERY_TIMES.map((time) => ({
      id: getDeliveryTimeId(time),
      name: formatDeliveryTime(time),
    })),
  };

  const priceRange: FilterGroup = {
    category: "price",
    heading: "Price Range",
    filters: uniquePricesRes.map(
      ({ id, range }): Filter => ({
        id,
        name: range,
      }),
    ),
  };

  return [food, deliveryTime, priceRange];
}
