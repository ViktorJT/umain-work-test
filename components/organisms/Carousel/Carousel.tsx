import { Tile } from "@/components/atoms/Tile";

import { Props } from "./Carousel.types";

export default function Carousel({ category, filters, activeFilters }: Props) {
  return (
    <section
      className={`
        w-full overflow-x-auto px-4
        scroll-smooth snap-x scroll-pl-4
      `}
    >
      <div className="flex gap-2 py-2 min-w-max pr-4">
        {filters.map((filter) => (
          <Tile
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
