import { cva } from "class-variance-authority";

export const chip = cva(
  `
    panel

    px-3 py-2
    rounded-lg
    text-body leading-none

    md:hover:border-green md:hover:bg-off-white
    transition-colors
  `,
  {
    variants: {
      active: {
        true: `
          bg-green border-green
          md:hover:text-black
          text-white
        `,
        false: "",
      },
    },
    defaultVariants: {
      active: false,
    },
  },
);
