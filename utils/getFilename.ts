import { StaticImport } from "next/dist/shared/lib/get-img-props";

export const getFilename = (src: string | StaticImport): string =>
  (src as string).split("/").pop()!.split(".")[0];
