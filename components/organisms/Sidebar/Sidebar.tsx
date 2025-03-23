import { Group } from "@/components/molecules/Group";

import type { Props } from "./Sidebar.types";

export default function Sidebar({
  activeFiltersByCategory,
  filterGroups,
}: Props) {
  return (
    <aside
      className={`
        panel

        p-6
        rounded-lg
        shadow-card
        hidden lg:flex
        flex-col gap-8
      `}
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
