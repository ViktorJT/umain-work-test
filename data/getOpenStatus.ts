import { fetchData } from "@/utils/fetchData";
import { ENDPOINTS } from "./constants";

export async function getOpenStatus(id: string): Promise<boolean> {
  const res = await fetchData<{ is_open: boolean }>(ENDPOINTS.OPEN_STATUS + id);
  return res.is_open;
}
