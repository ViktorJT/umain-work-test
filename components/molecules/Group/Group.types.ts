import type { ComponentPropsWithoutRef } from "react";

import { ActiveFilters, FilterGroup } from "@/types/filter";

export type Props = { column: boolean } & FilterGroup &
  ActiveFilters &
  ComponentPropsWithoutRef<"div">;
