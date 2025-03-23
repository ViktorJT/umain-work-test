import { ComponentPropsWithoutRef } from "react";

import { Group } from "@/types/filter";

export type Props = {
  filters: Group[];
} & ComponentPropsWithoutRef<"section">;
