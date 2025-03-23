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
    ? restaurants.filter((restaurant) =>
        restaurant.filter_ids.some((id) => allActiveFilters.has(id)),
      )
    : restaurants;

  return filteredRestaurants;
}
