import { cx } from "class-variance-authority";

import { getRestaurantsWithOpenStatus } from "@/data/getRestaurantsWithOpenStatus";

import { Card } from "@/components/molecules/Card";

import type { Props } from "./List.types";

export default async function List(props: Props) {
  const restaurants = await getRestaurantsWithOpenStatus();

  return (
    <section
      className={cx(
        `
          grid  
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
          auto-rows-[200px]
          gap-1 px-4
        `,
        props.className,
      )}
    >
      {restaurants.map((restaurant, i) => {
        return (
          <Card
            index={i}
            key={restaurant.id}
            title={restaurant.name}
            image={{
              src: restaurant.image_url,
              alt: restaurant.name,
            }}
            isOpen={restaurant.isOpen}
            deliveryTime={`${restaurant.delivery_time_minutes} min`}
            button={{
              href: `/restaurants/${restaurant.id}`,
              ariaLabel: `Go to ${restaurant.name}`,
              icon: { name: "arrow-right" },
            }}
          />
        );
      })}
    </section>
  );
}
