import type { ComponentPropsWithoutRef } from "react";

import type { RestaurantsWithOpenStatusResponse } from "@/types/restaurant";

export type Props = RestaurantsWithOpenStatusResponse &
  ComponentPropsWithoutRef<"section">;
