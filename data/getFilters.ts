import { fetchData } from "@/utils/fetchData";

import type { FiltersResponse, Group } from "@/types/filter";

export async function getFilters(): Promise<[Group, Group, Group]> {
  const res = await fetchData<FiltersResponse>("/filter");

  const categories = {
    heading: "Food Category",
    filters: res.filters,
    column: true,
  };

  const deliveryTime = {
    heading: "Delivery Time",
    filters: ["0–10 min", "10–30 min", "30–60 min", "1 hour+"].map((name) => ({
      name,
      id: Math.random().toString(),
    })),
  };

  const priceRange = {
    heading: "Price Range",
    filters: ["$", "$$", "$$$", "$$$$"].map((name) => ({
      name,
      id: Math.random().toString(),
    })),
  };

  return [categories, deliveryTime, priceRange];
}
