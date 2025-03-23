import { ComponentPropsWithoutRef } from "react";

import { Filter } from "@/types/filter";

export type Props = {
  filters: Filter[];
} & ComponentPropsWithoutRef<"section">;
