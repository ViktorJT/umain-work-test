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
        px-4
        overflow-x-auto 
        scroll-smooth snap-x scroll-pl-4
      `,
        className,
      )}
    >
      <div className="flex gap-2 py-2 pr-4">
        {filters.map((filter) => (
          <Tile
            className="snap-start shrink-0"
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
