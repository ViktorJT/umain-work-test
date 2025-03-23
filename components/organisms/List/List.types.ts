import type { ComponentPropsWithoutRef } from "react";

import type { RestaurantsWithOpenStatus } from "@/types/restaurant";

export type Props = RestaurantsWithOpenStatus &
  ComponentPropsWithoutRef<"section">;
