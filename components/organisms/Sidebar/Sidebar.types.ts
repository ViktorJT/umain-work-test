import { ComponentPropsWithoutRef } from "react";

import type { ActiveFiltersByCategory, FilterGroup } from "@/types/filter";

export type Props = {
  filterGroups: FilterGroup[];
  activeFiltersByCategory: ActiveFiltersByCategory;
} & ComponentPropsWithoutRef<"section">;
