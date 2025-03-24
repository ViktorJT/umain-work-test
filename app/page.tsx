import { getRestaurantsWithOpenStatus } from "@/data/getRestaurantsWithOpenStatus";
import { getFiltersByGroup } from "@/data/getFiltersByGroup";

import { getFilteredRestaurants } from "@/utils/getFilteredRestaurants";
import { getActiveFilters } from "@/utils/getActiveFilters";

import type { SearchParams } from "@/types/page";

import Logo from "@/icons/logo.svg";

import { Carousel } from "@/components/organisms/Carousel";
import { Sidebar } from "@/components/organisms/Sidebar";
import { Group } from "@/components/molecules/Group";
import { List } from "@/components/organisms/List";

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

  const [featuredCategory, secondaryCategory] = filterGroups;

  return (
    <main
      className={`
        grid 
        pb-9 pt-24
        overflow-x-clip
        w-full mx-auto
        max-w-screen-2xl
        grid-cols-1 lg:grid-cols-[240px_1fr] 
      `}
    >
      <Sidebar
        className="hidden lg:flex"
        filterGroups={filterGroups}
        activeFiltersByCategory={activeFiltersByCategory}
      />

      <div className="flex flex-col overflow-x-clip">
        <Logo className="w-40 ml-6" />

        <Group
          className="block lg:hidden"
          activeFilters={activeFiltersByCategory[secondaryCategory.category]}
          overflow={true}
          {...secondaryCategory}
        />

        <Carousel
          activeFilters={activeFiltersByCategory[featuredCategory.category]}
          {...featuredCategory}
        />

        <List restaurants={filteredRestaurants} />
      </div>
    </main>
  );
}
