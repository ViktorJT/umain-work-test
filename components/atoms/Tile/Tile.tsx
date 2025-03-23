/* eslint-disable jsx-a11y/alt-text */
"use client";

import { cx } from "class-variance-authority";
import { Image } from "@/components/atoms/Image";
import type { Props } from "./Tile.types";

export default function Tile({ label, image, className, ...props }: Props) {
  return (
    <div
      className={cx(
        `
          panel 

          w-40 h-20
          snap-start
          flex gap-2
          rounded-lg
          overflow-hidden
          items-center justify-between
        `,
        className,
      )}
      {...props}
    >
      <p
        className={`
          min-w-0 break-words 
          text-title
          pl-2 py-4
          flex-1 
        `}
      >
        {label}
      </p>
      <Image
        priority
        className="shrink-0 -mr-3"
        width={80}
        height={80}
        {...image}
      />
    </div>
  );
}
