"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

import type { FilterCategory } from "@/types/filter";

export function useToggleFilter(category: FilterCategory) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const toggle = useCallback(
    (id: string) => {
      const current = new Set(
        searchParams.get(category)?.split(",").filter(Boolean) ?? [],
      );

      if (current.has(id)) {
        current.delete(id);
      } else {
        current.add(id);
      }

      const nextParams = new URLSearchParams(searchParams.toString());

      if (current.size > 0) {
        nextParams.set(category, [...current].join(","));
      } else {
        nextParams.delete(category);
      }

      router.push(`/?${nextParams.toString()}`);
    },
    [category, router, searchParams],
  );

  return { toggle };
}
