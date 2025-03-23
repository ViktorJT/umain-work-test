import { ComponentPropsWithoutRef } from "react";

import type { ActiveFilters, Filter, FilterGroup } from "@/types/filter";

export type Props = {
  filters: Filter[];
} & Pick<FilterGroup, "category"> &
  ActiveFilters &
  ComponentPropsWithoutRef<"section">;
