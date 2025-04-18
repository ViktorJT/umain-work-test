import { cva } from "class-variance-authority";

export const container = cva(
  `
    panel
    group/card

    p-4 
    relative 
    rounded-lg
    shadow-card
    overflow-hidden 
    flex flex-col gap-2 

    md:hover:border-green
    md:group-hover/list:shadow-none md:hover:!shadow-card-hover
    transition-all
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
    transition-transform duration-300
  `,
  {
    variants: {
      isOpen: {
        true: "md:group-hover/card:scale-125 md:group-hover/card:-rotate-12",
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
