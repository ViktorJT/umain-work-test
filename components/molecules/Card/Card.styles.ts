import { cva } from "class-variance-authority";

export const container = cva(
  `
    panel

    p-4 
    relative 
    rounded-lg
    shadow-card
    overflow-hidden 
    flex flex-col gap-2 
  `,
  {
    variants: {
      isOpen: {
        true: "",
        false: "pointer-events-none shadow-none",
      },
    },
    defaultVariants: {
      isOpen: true,
    },
  },
);

export const image = cva(
  `
    absolute 
    -top-7 -right-7
    pointer-events-none select-none
  `,
  {
    variants: {
      isOpen: {
        true: "",
        false: "opacity-40",
      },
    },
    defaultVariants: {
      isOpen: true,
    },
  },
);

export const footer = cva(
  `
    flex gap-2 
    items-end justify-between
  `,
  {
    variants: {
      isOpen: {
        true: "",
        false: "opacity-40",
      },
    },
    defaultVariants: {
      isOpen: true,
    },
  },
);
