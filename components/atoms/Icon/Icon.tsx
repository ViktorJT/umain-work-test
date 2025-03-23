"use client";

import { cx } from "class-variance-authority";

import type { IconMapType, Props } from "./Icon.types";

import ArrowRight from "@/icons/arrow-right.svg";

const iconMap: IconMapType = {
  "arrow-right": ArrowRight,
};

export default function Icon({
  name,
  className,
  "aria-hidden": ariaHidden = true,
}: Props) {
  const Component = iconMap[name];

  if (!Component) return null;

  return (
    <Component
      className={cx("w-full h-full fill-white", className)}
      aria-hidden={ariaHidden}
    />
  );
}
