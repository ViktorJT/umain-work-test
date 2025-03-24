import { cx } from "class-variance-authority";

import { Tile } from "@/components/atoms/Tile";

import { Props } from "./Carousel.types";

export default function Carousel({
  activeFilters,
  className,
  category,
  filters,
}: Props) {
  return (
    <section
      className={cx(
        `
          px-6
          group/carousel
          overflow-x-auto 
          scroll-smooth snap-x scroll-pl-6
        `,
        className,
      )}
    >
      <div className="flex gap-2.5 py-2 pr-6">
        {filters.map((filter) => (
          <Tile
            className={`
              snap-start shrink-0 
              transition-shadow
            `}
            active={activeFilters.has(filter.id)}
            key={`${filter.name}-tile`}
            category={category}
            {...filter}
          />
        ))}
      </div>
    </section>
  );
}
