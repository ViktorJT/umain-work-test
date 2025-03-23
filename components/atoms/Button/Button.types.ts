import type { ComponentPropsWithoutRef } from "react";
import type { IconProps } from "@/components/atoms/Icon";

export type Props = {
  className?: string;
  ariaLabel: string;
  icon: IconProps;
  href: string;
} & ComponentPropsWithoutRef<"a">;
