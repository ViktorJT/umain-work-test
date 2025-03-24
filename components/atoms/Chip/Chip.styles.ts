import { cva } from "class-variance-authority";

export const chip = cva(
  `
    panel

    px-4 py-3
    rounded-lg
    text-body leading-none
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
