import type { ComponentPropsWithoutRef } from "react";

import type { Filter, FilterGroup } from "@/types/filter";

export type Props = {
  active?: boolean;
} & Pick<FilterGroup, "category"> &
  Filter &
  ComponentPropsWithoutRef<"button">;
