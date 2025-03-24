import { cx } from "class-variance-authority";

import { Button } from "@/components/atoms/Button";
import { Image } from "@/components/atoms/Image";
import { Tag } from "@/components/atoms/Tag";

import type { Props } from "./Card.types";
import { formatDeliveryTime } from "@/utils/formatDeliveryTime";

export default function Card({
  delivery_time_minutes,
  image_url,
  index,
  id,
  name,
  isOpen,
  className,
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
    >
      <Image
        priority={index <= 3}
        height={140}
        width={140}
        className={`
          absolute 
          -top-7 -right-7
          pointer-events-none select-none
        `}
        alt={name}
        src={image_url}
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
          {isOpen && (
            <Tag
              variant="delivery"
              label={formatDeliveryTime(delivery_time_minutes)}
            />
          )}
        </div>

        <div className="flex gap-2 items-end justify-between">
          <p className="text-h1 line-clamp-3">{name}</p>

          <Button
            href={`/restaurants/${id}`}
            ariaLabel={`Go to ${name}`}
            icon={{ name: "arrow-right" }}
          />
        </div>
      </div>
    </div>
  );
}
