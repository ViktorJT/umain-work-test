/* eslint-disable jsx-a11y/alt-text */
"use client";

import { cx } from "class-variance-authority";

import { Button } from "@/components/atoms/Button";
import { Image } from "@/components/atoms/Image";
import { Tag } from "@/components/atoms/Tag";

import type { Props } from "./Card.types";

export default function Card({
  title,
  image,
  button,
  isOpen,
  className,
  deliveryTime,
  ...props
}: Props) {
  return (
    <div
      className={cx(
        `
          panel

          p-4 
          relative 
          rounded-lg
          shadow-card
          overflow-hidden 
          flex flex-col gap-2 
        `,
        className,
      )}
      {...props}
    >
      <Image
        width={140}
        height={140}
        className={`
          absolute 
          top-0 right-0
          pointer-events-none select-none
        `}
        {...image}
      />

      <div
        className={`
          absolute 
          inset-0 p-4 
          flex flex-col justify-between
        `}
      >
        <div className="flex gap-2">
          <Tag
            variant={isOpen ? "open" : "closed"}
            label={isOpen ? "Open" : "Closed"}
          />
          {isOpen && <Tag variant="delivery" label={deliveryTime} />}
        </div>

        <div className="flex gap-2 items-end justify-between">
          <p className="text-h1 line-clamp-3">{title}</p>

          <Button {...button} />
        </div>
      </div>
    </div>
  );
}
