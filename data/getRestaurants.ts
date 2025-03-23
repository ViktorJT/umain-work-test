import { fetchData } from "@/utils/fetchData";

import type { Restaurants } from "@/types/restaurant";

export async function getRestaurants(): Promise<Restaurants> {
  return fetchData<Restaurants>("/restaurants");
}
