import { fetchData } from "@/utils/fetchData";

import type { Restaurant, RestaurantsResponse } from "@/types/restaurant";
import { ENDPOINTS } from "./constants";

export async function getRestaurants(): Promise<Restaurant[]> {
  const res = await fetchData<RestaurantsResponse>(ENDPOINTS.RESTAURANTS);
  return res.restaurants;
}
