import { getRestaurants } from "./getRestaurants";
import { getOpenStatus } from "./getOpenStatus";

export async function getRestaurantsWithOpenStatus() {
  const result = await getRestaurants();

  const restaurants = result.restaurants;

  if (!restaurants) {
    throw Error("no restaurants returned from getRestaurantsWithOpenStatus");
  }

  const statuses = await Promise.all(
    restaurants.map((restaurant) => getOpenStatus(restaurant.id)),
  );

  return restaurants.map((restaurant, i) => ({
    ...restaurant,
    isOpen: statuses[i],
  }));
}
