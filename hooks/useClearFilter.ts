"use client";

import { useRouter } from "next/navigation";

export function useClearFilters() {
  const router = useRouter();

  return () => {
    router.push("/");
  };
}
