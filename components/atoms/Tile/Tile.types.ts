import type { ComponentPropsWithoutRef } from "react";

import { Filter, FilterGroup } from "@/types/filter";

export type Props = { active: boolean } & Pick<FilterGroup, "category"> &
  Filter &
  ComponentPropsWithoutRef<"div">;
