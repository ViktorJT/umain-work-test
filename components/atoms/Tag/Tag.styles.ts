import { cva } from "class-variance-authority";

export const tag = cva(
  "border-[0.5px] border-black/40 bg-white inline-flex items-center gap-1 rounded-full px-3 py-1 text-body",
  {
    variants: {
      variant: {
        open: "text-black",
        closed: "text-black/40",
        delivery: "text-black",
      },
    },
    defaultVariants: {
      variant: "delivery",
    },
  },
);

export const dot = cva("h-2 w-2 rounded-full", {
  variants: {
    variant: {
      open: "bg-green",
      closed: "bg-black",
      delivery: "hidden",
    },
  },
});
