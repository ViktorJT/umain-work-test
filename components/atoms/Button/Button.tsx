"use client";

import Link from "next/link";
import { cx } from "class-variance-authority";

import { Icon } from "@/components/atoms/Icon";

import type { Props } from "./Button.types";

export default function Button({
  href,
  icon,
  ariaLabel,
  className,
  ...props
}: Props) {
  return (
    <Link
      className={cx(
        "inline-block p-2.5 size-8  bg-green rounded-full",
        className,
      )}
      href={href}
      aria-label={ariaLabel}
      {...props}
    >
      <Icon {...icon} />
    </Link>
  );
}
