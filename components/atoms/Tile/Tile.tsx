"use client";

import { cx } from "class-variance-authority";

import { Image } from "@/components/atoms/Image";

import { useToggleFilter } from "@/hooks/useToggleFilter";

import type { Props } from "./Tile.types";
import { tile } from "./Tile.styles";

export default function Tile({
  id,
  name,
  active,
  category,
  image_url,
  className,
}: Props) {
  const { toggle } = useToggleFilter(category);

  return (
    <button
      onClick={() => toggle(id)}
      className={cx(tile({ active }), className)}
    >
      <p
        className={`
          min-w-0 break-words 
          text-title
          px-2 py-4
          flex-1 
        `}
      >
        {name}
      </p>

      {image_url && (
        <Image
          priority
          className="shrink-0 -mr-3"
          alt={name}
          width={80}
          height={80}
          src={image_url}
        />
      )}
    </button>
  );
}
