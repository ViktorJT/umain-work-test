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
          group/list
          auto-rows-[200px]
          gap-2.5 md:gap-4 pl-6 pr-6 lg:pr-10 2xl:pr-0
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(3,_minmax(0,_320px))] 

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
