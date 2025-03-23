import type { ComponentPropsWithoutRef } from "react";

import type { ImageProps } from "@/components/atoms/Image";

export type Props = {
  label: string;
  image: ImageProps;
} & ComponentPropsWithoutRef<"div">;
