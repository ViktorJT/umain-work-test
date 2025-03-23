"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export function useToggleFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const toggle = useCallback(
    (id: string) => {
      const current = new Set(
        searchParams.get("filters")?.split(",").filter(Boolean) ?? [],
      );

      if (current.has(id)) {
        current.delete(id);
      } else {
        current.add(id);
      }

      const nextParams = new URLSearchParams(searchParams.toString());

      if (current.size > 0) {
        nextParams.set("filters", [...current].join(","));
      } else {
        nextParams.delete("filters");
      }

      router.push(`/?${nextParams.toString()}`);
    },
    [searchParams, router],
  );

  return { toggle };
}
