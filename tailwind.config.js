const baseTypographyStyles = {
  lineHeight: "125%",
  letterSpacing: "-0.5px",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#00703A",
        "off-white": "#FAFAFA",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      typography: {
        huge: {
          ...baseTypographyStyles,
          fontSize: "48px",
          fontWeight: "800",
          lineHeight: "100%",
        },
        blurb: {
          ...baseTypographyStyles,
          lineHeight: "150%",
          fontSize: "14px",
        },
        display: {
          ...baseTypographyStyles,
          fontSize: "40px",
        },
        h1: {
          ...baseTypographyStyles,
          fontSize: "24px",
        },
        h2: {
          ...baseTypographyStyles,
          fontSize: "20px",
        },
        title: {
          ...baseTypographyStyles,
          fontSize: "14px",
        },
        subtitle: {
          ...baseTypographyStyles,
          fontSize: "12px",
          fontWeight: "600",
          textTransform: "uppercase",
          color: "rgba(0, 0, 0, 0.4)",
        },
        body: {
          ...baseTypographyStyles,
          fontSize: "12px",
        },
      },
    },
    boxShadow: {
      card: `-4px 2px 10px 0px #00000005,
         -16px 9px 18px 0px #00000005,
         -35px 20px 24px 0px #00000000,
         -63px 36px 29px 0px #00000000,
         -98px 56px 32px 0px #00000000`,

      "card-hover": `-4px 2px 10px 0px #00000006,
         -16px 9px 18px 0px #00000006,
         -35px 20px 24px 0px #00000000,
         -63px 36px 29px 0px #00000000,
         -98px 56px 32px 0px #00000000`,
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const typographyStyles = {};
      const typographyTheme = theme("typography") || {};
      Object.entries(typographyTheme).forEach(([name, styles]) => {
        typographyStyles[`.text-${name}`] = styles;
      });
      addUtilities(typographyStyles);
    },
  ],
};
