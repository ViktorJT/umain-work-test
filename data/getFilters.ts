import { fetchData } from "@/utils/fetchData";
import { slugify } from "@/utils/slugify";

import type {
  Filter,
  FilterGroup,
  FiltersResponse,
  FiltersByGroupResponse,
} from "@/types/filter";

export async function getFiltersByGroup(): FiltersByGroupResponse {
  const res = await fetchData<FiltersResponse>("/filter");

  const categories: FilterGroup = {
    filters: res.filters.map(
      (filter): Filter => ({
        ...filter,
        id: slugify(filter.name),
      }),
    ),
    category: "food",
    heading: "Food Category",
  };

  const deliveryTime: FilterGroup = {
    category: "duration",
    heading: "Delivery Time",
    filters: ["0–10 min", "10–30 min", "30–60 min", "1 hour+"].map(
      (name): Filter => ({
        id: slugify(name),
        name,
      }),
    ),
  };

  const priceRange: FilterGroup = {
    category: "price",
    heading: "Price Range",
    filters: ["$", "$$", "$$$", "$$$$"].map(
      (name): Filter => ({
        id: slugify(name),
        name,
      }),
    ),
  };

  return [categories, deliveryTime, priceRange];
}
