import type { ComponentPropsWithoutRef } from "react";

export type Props = {
  active?: boolean;
  name: string;
} & ComponentPropsWithoutRef<"button">;
