// components/atoms/Chip/Chip.tsx
import { cx } from "class-variance-authority";

import type { Props } from "./Chip.types";
import { chip } from "./Chip.styles";

export default function Chip({ name, active = false, className }: Props) {
  return (
    <button type="button" className={cx(chip({ active }), className)}>
      {name}
    </button>
  );
}
