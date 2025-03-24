import type { ComponentPropsWithoutRef } from "react";

import type { Restaurant } from "@/types/restaurant";

export type Props = {
  index: number;
} & Restaurant &
  ComponentPropsWithoutRef<"div">;
