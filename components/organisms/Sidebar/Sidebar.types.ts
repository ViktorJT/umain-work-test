import { ComponentPropsWithoutRef } from "react";

import { Group } from "@/types/filter";

export type Props = {
  filters: Group[];
  activeFilters: Set<string>;
} & ComponentPropsWithoutRef<"section">;
