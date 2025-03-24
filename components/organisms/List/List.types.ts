import type { ComponentPropsWithoutRef } from "react";

import type { RestaurantsResponse } from "@/types/restaurant";

export type Props = RestaurantsResponse & ComponentPropsWithoutRef<"section">;
