export async function fetchData<T>(
  endpoint: string,
  init?: RequestInit,
): Promise<T> {
  const baseUrl = process.env.API_BASE_URL;

  const res = await fetch(`${baseUrl}${endpoint}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 60 },
    ...init,
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}: ${res.statusText}`);
  }

  return res.json();
}
