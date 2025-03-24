"use client";

import { cx } from "class-variance-authority";

import { chipStyles } from "@/components/atoms/Chip";

import { useClearFilters } from "@/hooks/useClearFilter";

import { Props } from "./NoResults.types";

export default function NoResults({ className }: Props) {
  const clearFilters = useClearFilters();

  return (
    <div
      className={cx(
        "col-span-full row-span-full gap-4 flex flex-col items-center justify-center",
        className,
      )}
    >
      <p className="text-subtitle">No restaurants found</p>

      <button
        className={chipStyles({ active: false })}
        type="button"
        onClick={clearFilters}
      >
        clear filters
      </button>
    </div>
  );
}
