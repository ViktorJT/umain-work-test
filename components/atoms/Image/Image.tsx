import { cx } from "class-variance-authority";
import NextImage from "next/image";

import { getFilename } from "@/utils/getFilename";

import type { Props } from "./Image.types";

export default function Image({
  priority = false,
  height = 140,
  width = 140,
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
      blurDataURL={`/blur/${filename}-20.jpg`}
      className={cx("object-cover", className)}
      src={`/webp/${filename}-${width ?? height}.webp`}
      onError={(e) => {
        e.currentTarget.src = `/images/${filename}-${width ?? height}.png`;
      }}
    />
  );
}
