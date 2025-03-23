export function getActiveFilters(input: string): Set<string> {
  return new Set(
    input
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean),
  );
}
