import type { ComponentPropsWithoutRef } from "react";

import { ActiveFilters, Group } from "@/types/filter";

export type Props = Group & ActiveFilters & ComponentPropsWithoutRef<"div">;
