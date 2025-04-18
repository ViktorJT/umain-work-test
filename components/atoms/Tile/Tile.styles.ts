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

    md:hover:border-green
    md:group-hover/carousel:shadow-none md:hover:!shadow-card-hover
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
        md:group-hover/carousel:scale-95
        md:group-hover/tile:scale-110
      `,
    },
  },
  defaultVariants: {
    active: false,
  },
});
