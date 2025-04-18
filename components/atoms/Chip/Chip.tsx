"use client";

import { cx } from "class-variance-authority";

import { useToggleFilter } from "@/hooks/useToggleFilter";

import type { Props } from "./Chip.types";
import { chip } from "./Chip.styles";

export default function Chip({
  active = false,
  className,
  category,
  name,
  id,
}: Props) {
  const { toggle } = useToggleFilter(category);

  return (
    <button
      type="button"
      onClick={() => toggle(id)}
      className={cx(chip({ active }), className)}
    >
      {name}
    </button>
  );
}
