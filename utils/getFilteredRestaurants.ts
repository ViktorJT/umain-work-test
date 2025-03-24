import { getDeliveryTimeId } from "@/utils/getDeliveryTimeId";

import { ActiveFiltersByCategory } from "@/types/filter";
import type { RestaurantWithOpenStatus } from "@/types/restaurant";

type Props = {
  restaurants: RestaurantWithOpenStatus[];
  activeFiltersByCategory: ActiveFiltersByCategory;
};

export function getFilteredRestaurants({
  restaurants,
  activeFiltersByCategory,
}: Props) {
  const allActiveFilters = new Set(
    Object.values(activeFiltersByCategory).flatMap((groupSet) =>
      Array.from(groupSet),
    ),
  );

  const filteredRestaurants = allActiveFilters.size
    ? restaurants.filter(
        ({ filter_ids, delivery_time_minutes, price_range_id }) => {
          const delivery_time_id = getDeliveryTimeId(delivery_time_minutes);

          return [...filter_ids, delivery_time_id, price_range_id].some((id) =>
            allActiveFilters.has(id),
          );
        },
      )
    : restaurants;

  return filteredRestaurants;
}
