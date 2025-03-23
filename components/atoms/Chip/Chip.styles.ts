import { cva } from "class-variance-authority";

export const chip = cva(
  `
    panel

    px-3 py-1
    rounded-lg
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
