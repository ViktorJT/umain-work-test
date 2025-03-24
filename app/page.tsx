import { getRestaurantsWithOpenStatus } from "@/data/getRestaurantsWithOpenStatus";
import { getFiltersByGroup } from "@/data/getFiltersByGroup";

import { getFilteredAndSortedRestaurants } from "@/utils/getFilteredAndSortedRestaurants";
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

  const filteredRestaurants = getFilteredAndSortedRestaurants({
    activeFiltersByCategory,
    restaurants,
  });

  const [featuredCategory, secondaryCategory] = filterGroups;

  return (
    <main
      className={`
          pb-9 pt-24 lg:pt-14
          pl-0 lg:pl-4 2xl:pl-0
          max-w-screen-2xl
          mx-auto
        `}
    >
      <Logo className="hidden lg:block w-72 ml-6 mb-10" />

      <div
        className={`
          grid 
          w-full mx-auto
          overflow-x-clip
          grid-cols-1 lg:grid-cols-[240px_1fr] 
        `}
      >
        <Sidebar
          className="hidden lg:flex"
          filterGroups={filterGroups}
          activeFiltersByCategory={activeFiltersByCategory}
        />

        <section className="flex flex-col overflow-x-clip">
          <Logo className="block lg:hidden w-40 ml-6" />

          <Group
            overflow
            className="block lg:hidden"
            activeFilters={activeFiltersByCategory[secondaryCategory.category]}
            {...secondaryCategory}
          />

          <Carousel
            activeFilters={activeFiltersByCategory[featuredCategory.category]}
            {...featuredCategory}
          />

          <List restaurants={filteredRestaurants} />
        </section>
      </div>
    </main>
  );
}
