import { cache } from "react";
import { getOpenStatus } from "@/data/getOpenStatus";

export const cachedGetOpenStatus = cache(async (id: string) => {
  return await getOpenStatus(id);
});
