import { fetchData } from "@/utils/fetchData";

import type { Restaurant, RestaurantsResponse } from "@/types/restaurant";

export async function getRestaurants(): Promise<Restaurant[]> {
  const res = await fetchData<RestaurantsResponse>("/restaurants");
  return res.restaurants;
}
