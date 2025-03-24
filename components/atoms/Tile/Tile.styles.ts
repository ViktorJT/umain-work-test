import { cva } from "class-variance-authority";

export const tile = cva(
  `
    panel
    group/tile

    flex
    w-40 h-20
    rounded-lg
    shadow-card
    overflow-hidden
    justify-between

    hover:border-green
    group-hover/carousel:shadow-none hover:!shadow-card-hover
    transition-all
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

export const image = cva("shrink-0 -mr-3 duration-300 transition-transform", {
  variants: {
    active: {
      true: "border-green scale-110",
      false: `
        group-hover/carousel:scale-95
        group-hover/tile:scale-110
      `,
    },
  },
  defaultVariants: {
    active: false,
  },
});
