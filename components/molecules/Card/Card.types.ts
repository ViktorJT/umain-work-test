import type { ComponentPropsWithoutRef } from "react";

import type { RestaurantWithOpenStatus } from "@/types/restaurant";

export type Props = {
  index: number;
} & RestaurantWithOpenStatus &
  ComponentPropsWithoutRef<"div">;
