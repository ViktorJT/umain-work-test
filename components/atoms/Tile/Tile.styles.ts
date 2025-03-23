import { cva } from "class-variance-authority";

export const tile = cva(
  `
    panel 

    flex
    w-40 h-20
    snap-start
    rounded-lg
    shadow-card
    overflow-hidden
    items-center justify-between
  `,
  {
    variants: {
      active: {
        true: "border-green",
        false: "",
      },
    },
    defaultVariants: {
      active: false,
    },
  },
);
