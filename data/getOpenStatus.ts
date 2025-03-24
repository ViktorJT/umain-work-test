import { fetchData } from "@/utils/fetchData";
import { ENDPOINTS } from "./constants";

export async function getOpenStatus(id: string): Promise<boolean> {
  const res = await fetchData<{ is_open: boolean }>(
    ENDPOINTS.OPEN_STATUS + id,
    { next: { revalidate: 15 } }, // probably needs very tight revalidation? Could be that stores close in the middle of the day idk
  );
  return res.is_open;
}
