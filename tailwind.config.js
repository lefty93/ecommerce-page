/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderColor: theme => ({
      default: theme('colors.gray.300', 'currentColor'),
      'primary': 'hsl(26, 100%, 55%)'
    }),
    extend: {},
  },
  plugins: [],
};
