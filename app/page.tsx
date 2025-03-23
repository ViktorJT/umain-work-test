import { getRestaurantsWithOpenStatus } from "@/data/getRestaurantsWithOpenStatus";
import { getFiltersByGroup } from "@/data/getFilters";

import { getActiveFilters } from "@/utils/getActiveFilters";

import type { SearchParams } from "@/types/page";

import { Carousel } from "@/components/organisms/Carousel";
import { Sidebar } from "@/components/organisms/Sidebar";
// import { List } from "@/components/organisms/List";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const [restaurants, filterGroups] = await Promise.all([
    getRestaurantsWithOpenStatus(),
    getFiltersByGroup(),
  ]);

  console.log(typeof restaurants);

  const activeFiltersByCategory = getActiveFilters(await searchParams);

  return (
    <main className="grid grid-cols-1 lg:grid-cols-[240px_6fr] max-w-screen">
      <Sidebar
        filterGroups={filterGroups}
        activeFiltersByCategory={activeFiltersByCategory}
      />

      <div className="flex flex-col gap-4">
        <Carousel
          activeFilters={activeFiltersByCategory[filterGroups[0].category]}
          {...filterGroups[0]}
        />

        {/* <List */}
        {/*   restaurants={restaurants} */}
        {/*   activeFilters={ */}
        {/*     new Set([ */}
        {/*       ...activeFiltersByGroup.category, */}
        {/*       ...activeFiltersByGroup.price, */}
        {/*       ...activeFiltersByGroup.duration, */}
        {/*     ]) */}
        {/*   } */}
        {/* /> */}
      </div>
    </main>
  );
}
