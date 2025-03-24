import { cx } from "class-variance-authority";

import { Chip } from "@/components/atoms/Chip";

import type { Props } from "./Group.types";

import { title, container, wrapper } from "./Group.styles";

export default function Group({
  overflow = false,
  column = false,
  activeFilters,
  className,
  category,
  heading,
  filters,
}: Props) {
  return (
    <div className={cx("flex flex-col", className)}>
      <h3 className={title({ overflow })}>{heading}</h3>

      <div className={container({ column, overflow })}>
        <div className={wrapper({ overflow })}>
          {filters.map((filter, i: number) => (
            <Chip
              className="snap-start"
              active={activeFilters.has(filter.id)}
              category={category}
              key={filter.id + i}
              {...filter}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
