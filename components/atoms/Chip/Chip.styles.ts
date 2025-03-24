import { cva } from "class-variance-authority";

export const chip = cva(
  `
    panel

    px-3 py-2
    rounded-lg
    text-body leading-none

    hover:border-green hover:bg-off-white
    transition-colors
  `,
  {
    variants: {
      active: {
        true: `
          bg-green border-green
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
