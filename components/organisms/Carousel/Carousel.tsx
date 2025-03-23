"use client";

import { Tile } from "@/components/atoms/Tile";

import { categories } from "@/data/mock";

export default function Carousel() {
  return (
    <section
      className={`
        w-full overflow-x-auto px-4
        scroll-smooth snap-x scroll-pl-4
      `}
    >
      <div className="flex gap-2 py-2 min-w-max pr-4">
        {categories.map(({ label, image }) => (
          <Tile key={label} label={label} image={image} />
        ))}
      </div>
    </section>
  );
}
