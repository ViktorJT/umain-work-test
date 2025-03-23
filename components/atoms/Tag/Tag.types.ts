import type { ComponentPropsWithoutRef } from "react";

export type TagVariant = "open" | "closed" | "delivery";

export type Props = {
  label: string;
  variant?: TagVariant;
  className?: string;
} & ComponentPropsWithoutRef<"span">;
