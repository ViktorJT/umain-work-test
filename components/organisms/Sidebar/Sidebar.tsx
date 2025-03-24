import { cx } from "class-variance-authority";

import { Group } from "@/components/molecules/Group";

import type { Props } from "./Sidebar.types";

export default function Sidebar({
  activeFiltersByCategory,
  filterGroups,
  className,
}: Props) {
  return (
    <aside
      className={cx(
        `
        panel

        p-6
        rounded-lg
        shadow-card
        flex-col gap-8
      `,
        className,
      )}
    >
      <h2 className="text-h1">Filter</h2>

      {filterGroups.map((filterGroup, i: number) => (
        <Group
          activeFilters={activeFiltersByCategory[filterGroup.category]}
          key={filterGroup.category}
          column={i === 0}
          {...filterGroup}
        />
      ))}
    </aside>
  );
}
