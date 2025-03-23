import { fetchData } from "@/utils/fetchData";

export async function getOpenStatus(id: string): Promise<boolean> {
  const res = await fetchData<{ is_open: boolean }>(`/open/${id}`);
  return res.is_open;
}
