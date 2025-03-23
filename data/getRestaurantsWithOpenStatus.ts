import type { RestaurantWithOpenStatus } from "@/types/restaurant";

import { getRestaurants } from "./getRestaurants";
import { getOpenStatus } from "./getOpenStatus";

export async function getRestaurantsWithOpenStatus(): Promise<
  RestaurantWithOpenStatus[]
> {
  const restaurants = await getRestaurants();

  const statuses = await Promise.all(
    restaurants.map((restaurant) => getOpenStatus(restaurant.id)),
  );

  return restaurants.map((restaurant, i) => ({
    ...restaurant,
    isOpen: statuses[i],
  }));
}
