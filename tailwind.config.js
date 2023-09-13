/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: ["./src/**/*.{js,jsx}"],
  },
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    "font-['coquette']",
    "text-red-600",
    "max-w-xl",
    {
      pattern: /bg-(red|green|blue|yellow|orange|pink|purple|teal)-500/,
    },
    {
      pattern: /text-(red|green|blue|yellow|orange|pink|purple|teal)-500/,
    },
    {
      pattern: /border-(red|green|blue|yellow|orange|pink|purple|teal)-500/,
    },
    {
      pattern: /fill-(red|green|blue|yellow|orange|pink|purple|teal)-500/,
    },
  ]
}
