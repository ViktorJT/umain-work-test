import { cx } from "class-variance-authority";

import { Chip } from "@/components/atoms/Chip";

import type { Props } from "./Group.types";

export default function Group({
  column = false,
  activeFilters,
  className,
  heading,
  filters,
}: Props) {
  return (
    <div className={cx("flex flex-col gap-2", className)}>
      <h3 className="text-subtitle">{heading}</h3>

      <div
        className={cx("flex items-start flex-wrap gap-2", column && "flex-col")}
      >
        {filters.map((filter) => (
          <Chip
            active={activeFilters.has(filter.id)}
            key={filter.id}
            {...filter}
          />
        ))}
      </div>
    </div>
  );
}
