import { ComponentPropsWithoutRef } from "react";

import type { ActiveFilters, Filter } from "@/types/filter";

export type Props = {
  filters: Filter[];
} & ActiveFilters &
  ComponentPropsWithoutRef<"section">;
