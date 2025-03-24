import { cva } from "class-variance-authority";

export const title = cva("text-subtitle", {
  variants: {
    overflow: {
      true: "px-4",
      false: "",
    },
  },
  defaultVariants: {
    overflow: false,
  },
});

export const container = cva(
  `
    py-2 
    scroll-smooth snap-x scroll-pl-4
  `,
  {
    variants: {
      column: {
        true: "flex-col",
        false: "",
      },
      overflow: {
        true: "overflow-x-auto px-4",
        false: "flex items-start gap-2 flex-wrap",
      },
    },
    defaultVariants: {
      overflow: false,
      column: false,
    },
  },
);

export const wrapper = cva("", {
  variants: {
    overflow: {
      true: `
        pr-4
        min-w-max 
        flex gap-2 
      `,
      false: "contents",
    },
  },
  defaultVariants: {
    overflow: false,
  },
});
