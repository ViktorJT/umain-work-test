import { cx } from "class-variance-authority";

import { Card } from "@/components/molecules/Card";

import type { Props } from "./List.types";
import { NoResults } from "@/components/molecules/NoResults";

export default function List({ restaurants, className }: Props) {
  return (
    <section
      className={cx(
        `
          grid  
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
          auto-rows-[200px]
          gap-2 px-4
        `,
        className,
      )}
    >
      {restaurants.length ? (
        restaurants.map((restaurant, i) => {
          return <Card key={restaurant.id} index={i} {...restaurant} />;
        })
      ) : (
        <NoResults />
      )}
    </section>
  );
}
