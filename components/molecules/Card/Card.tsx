import { cx } from "class-variance-authority";
import { use } from "react";

import { cachedGetOpenStatus } from "@/utils/cachedGetOpenStatus";
import { formatDeliveryTime } from "@/utils/formatDeliveryTime";

import { Button } from "@/components/atoms/Button";
import { Image } from "@/components/atoms/Image";
import { Tag } from "@/components/atoms/Tag";

import type { Props } from "./Card.types";
import { container, footer, image } from "./Card.styles";

export default function Card({
  delivery_time_minutes,
  image_url,
  index,
  id,
  name,
  className,
}: Props) {
  const isOpen = use(cachedGetOpenStatus(id));

  return (
    <div className={cx(container({ isOpen }), className)}>
      <Image
        className={image({ isOpen })}
        priority={index <= 3}
        src={image_url}
        height={140}
        width={140}
        alt={name}
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

        <div className={footer({ isOpen })}>
          <p className="text-h1 line-clamp-3">{name}</p>

          <Button
            href={`/restaurants/${id}`}
            ariaLabel={`Go to ${name}`}
            icon={{ name: "arrow-right" }}
          />
        </div>

        {!isOpen && (
          <div
            className={`
              m-auto 
              absolute inset-0 
              flex items-center justify-center
            `}
          >
            <p
              className={`
                panel 

                px-3 py-2 
                rounded-lg 
                leading-none 
                bg-off-white
              `}
            >
              Opens tomorrow at 12pm
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
