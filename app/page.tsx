import { getRestaurantsWithOpenStatus } from "@/data/getRestaurantsWithOpenStatus";
import { getFilters } from "@/data/getFilters";

import { getActiveFilters } from "@/utils/getActiveFilters";

import { Carousel } from "@/components/organisms/Carousel";
import { Sidebar } from "@/components/organisms/Sidebar";
import { List } from "@/components/organisms/List";

export default async function Home({
  searchParams,
}: {
  searchParams: { filters?: string };
}) {
  const [restaurants, filters] = await Promise.all([
    getRestaurantsWithOpenStatus(),
    getFilters(),
  ]);

  const activeFilters = getActiveFilters(searchParams.filters ?? "");

  return (
    <main className="grid grid-cols-1 lg:grid-cols-[240px_6fr] max-w-screen">
      <Sidebar filters={filters} activeFilters={activeFilters} />
      <div className="flex flex-col gap-4">
        <Carousel filters={filters[0].filters} activeFilters={activeFilters} />
        <List restaurants={restaurants} />
      </div>
    </main>
  );
}
