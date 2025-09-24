/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          background: "rgb(var(--color-background) / <alpha-value>)",
          foreground: "rgb(var(--color-foreground) / <alpha-value>)",
          primary: "rgb(var(--color-primary) / <alpha-value>)",
          secondary: "rgb(var(--color-secondary) / <alpha-value>)",
          border: "rgb(var(--color-border) / <alpha-value>)",
          "background-card":
            "rgb(var(--color-background-card) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};
