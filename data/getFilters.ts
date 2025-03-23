import { fetchData } from "@/utils/fetchData";

import type { Filter, FiltersResponse } from "@/types/filter";

export async function getFilters(): Promise<Filter[]> {
  const res = await fetchData<FiltersResponse>("/filter");
  return res.filters;
}
