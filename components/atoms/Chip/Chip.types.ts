import type { ComponentPropsWithoutRef } from "react";

import type { Filter } from "@/types/filter";

export type Props = {
  active?: boolean;
} & Filter &
  ComponentPropsWithoutRef<"button">;
