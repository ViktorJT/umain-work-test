import { getRestaurantsWithOpenStatus } from "@/data/getRestaurantsWithOpenStatus";
import { getFiltersByGroup } from "@/data/getFiltersByGroup";

import { getActiveFilters } from "@/utils/getActiveFilters";

import type { SearchParams } from "@/types/page";

import { Carousel } from "@/components/organisms/Carousel";
import { Sidebar } from "@/components/organisms/Sidebar";
import { List } from "@/components/organisms/List";
import { getFilteredRestaurants } from "@/utils/getFilteredRestaurants";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const restaurants = await getRestaurantsWithOpenStatus();
  const filterGroups = await getFiltersByGroup(restaurants);

  const activeFiltersByCategory = getActiveFilters(await searchParams);

  const filteredRestaurants = getFilteredRestaurants({
    activeFiltersByCategory,
    restaurants,
  });

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

        <List restaurants={filteredRestaurants} />
      </div>
    </main>
  );
}
