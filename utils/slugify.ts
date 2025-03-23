export const slugify = (str: string): string => {
  return str
    .toLowerCase()
    .normalize("NFKD") // decompose accents
    .replace(/[^\w\s-$]/g, "") // remove non-word characters
    .trim()
    .replace(/\s+/g, "-"); // replace spaces with dashes
};
