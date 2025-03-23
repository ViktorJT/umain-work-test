import { cx } from "class-variance-authority";

import type { Props } from "./Tag.types";

import { dot, tag } from "./Tag.styles";

export default function Tag({
  label,
  variant = "delivery",
  className,
  ...props
}: Props) {
  return (
    <span className={cx(tag({ variant }), className)} {...props}>
      <span className={dot({ variant })} />
      {label}
    </span>
  );
}
