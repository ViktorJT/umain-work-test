import { Group } from "@/components/molecules/Group";

import type { Props } from "./Sidebar.types";

export default function Sidebar({ filters, activeFilters }: Props) {
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

      {filters.map((group) => (
        <Group
          key={`${group.heading}-group`}
          activeFilters={activeFilters}
          {...group}
        />
      ))}
    </aside>
  );
}
