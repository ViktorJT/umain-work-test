import { getDeliveryTimeId } from "@/utils/getDeliveryTimeId";

import { ActiveFiltersByCategory } from "@/types/filter";
import type { Restaurant } from "@/types/restaurant";

type Props = {
  restaurants: Restaurant[];
  activeFiltersByCategory: ActiveFiltersByCategory;
};

export function getFilteredAndSortedRestaurants({
  restaurants,
  activeFiltersByCategory,
}: Props) {
  const filteredRestaurants = Object.values(activeFiltersByCategory).some(
    (set) => set.size > 0,
  )
    ? restaurants.filter(
        ({ filter_ids, delivery_time_minutes, price_range_id }) => {
          const delivery_time_id = getDeliveryTimeId(delivery_time_minutes);

          return Object.entries(activeFiltersByCategory).every(
            ([group, activeSet]) => {
              if (activeSet.size === 0) return true;

              if (group === "food") {
                return filter_ids.some((id) => activeSet.has(id));
              }

              if (group === "price") {
                return activeSet.has(price_range_id);
              }

              if (group === "duration") {
                return activeSet.has(delivery_time_id);
              }

              return true;
            },
          );
        },
      )
    : restaurants;

  const sortedFilteredRestaurants = filteredRestaurants.sort(
    (a, b) => b.rating - a.rating,
  );

  return sortedFilteredRestaurants;
}
