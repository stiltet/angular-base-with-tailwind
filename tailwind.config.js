module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontSize: {
      xs: [".75rem", "1rem"],
      sm: [".875rem", "1.25rem"],
      base: ["1rem", "1.5rem"],
      lg: ["1.125rem", "1.75rem"],
      xl: ["1.25rem", "1.75rem"],
      "2xl": ["1.5rem", "2rem"],
      "3xl": ["1.875rem", "2.25rem"],
      "4xl": ["2.25rem", "2.5rem"],
      "5xl": ["3rem", "1"],
      "6xl": ["4rem", "1"],
      "7xl": ["5rem", "1"],
    },
    extend: {
      colors: {
        brand: {
          // App specific colors here.
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
