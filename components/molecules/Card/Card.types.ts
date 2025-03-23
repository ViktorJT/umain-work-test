import type { ComponentPropsWithoutRef } from "react";

import type { ButtonProps } from "@/components/atoms/Button";
import type { ImageProps } from "next/image";

export type Props = {
  deliveryTime: string;
  button: ButtonProps;
  image: ImageProps;
  isOpen: boolean;
  index: number;
  title: string;
} & ComponentPropsWithoutRef<"div">;
