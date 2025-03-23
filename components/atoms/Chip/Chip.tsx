"use client";

import { cx } from "class-variance-authority";

import { useToggleFilter } from "@/hooks/useToggleFilter";

import type { Props } from "./Chip.types";
import { chip } from "./Chip.styles";

export default function Chip({ name, id, active = false, className }: Props) {
  const { toggle } = useToggleFilter();

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
