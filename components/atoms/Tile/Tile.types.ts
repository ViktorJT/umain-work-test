import type { ComponentPropsWithoutRef } from "react";

import { Filter } from "@/types/filter";

export type Props = { active: boolean } & Filter &
  ComponentPropsWithoutRef<"div">;
