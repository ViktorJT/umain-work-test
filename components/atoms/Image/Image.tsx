import { cx } from "class-variance-authority";
import NextImage from "next/image";

import { getFilename } from "@/utils/getFilename";

import type { Props } from "./Image.types";

export default function Image({
  priority = false,
  height = 64,
  width = 64,
  className,
  alt = "",
  src,
}: Props) {
  const filename = getFilename(src);

  return (
    <NextImage
      alt={alt}
      width={width}
      height={height}
      placeholder="blur"
      priority={priority}
      src={`/images/${filename}.webp`}
      blurDataURL={`/images/${filename}.jpg`}
      className={cx("object-cover", className)}
      onError={(e) => {
        e.currentTarget.src = `/images/${filename}.png`;
      }}
    />
  );
}
