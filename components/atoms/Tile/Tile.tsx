"use client";

import { cx } from "class-variance-authority";

import { Image } from "@/components/atoms/Image";

import { useToggleFilter } from "@/hooks/useToggleFilter";

import type { Props } from "./Tile.types";
import { image, tile } from "./Tile.styles";

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
          text-title text-left leading-none
          min-w-0 break-words 
          px-2 py-4
          flex-1 
        `}
      >
        {name}
      </p>

      {image_url && (
        <Image
          priority
          className={image({ active })}
          alt={name}
          width={80}
          height={80}
          src={image_url}
        />
      )}
    </button>
  );
}
