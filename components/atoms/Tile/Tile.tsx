"use client";

import { cx } from "class-variance-authority";

import { Image } from "@/components/atoms/Image";

import type { Props } from "./Tile.types";

export default function Tile({ name, image_url, className }: Props) {
  return (
    <div
      className={cx(
        `
          panel 

          w-40 h-20
          snap-start
          flex gap-2
          rounded-lg
          shadow-card
          overflow-hidden
          items-center justify-between
        `,
        className,
      )}
    >
      <p
        className={`
          min-w-0 break-words 
          text-title
          pl-2 py-4
          flex-1 
        `}
      >
        {name}
      </p>

      <Image
        priority
        className="shrink-0 -mr-3"
        alt={name}
        width={80}
        height={80}
        src={image_url}
      />
    </div>
  );
}
