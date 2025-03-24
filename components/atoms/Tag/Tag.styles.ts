import { cva } from "class-variance-authority";

export const tag = cva(
  `
    panel

    px-3 py-2 
    rounded-full
    text-body leading-none
    inline-flex items-center gap-1 
  `,
  {
    variants: {
      variant: {
        open: "",
        closed: "text-black/40",
        delivery: "",
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
