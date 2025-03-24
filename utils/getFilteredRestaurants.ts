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

  return filteredRestaurants;
}
