/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderColor: theme => ({
      default: theme('colors.gray.300', 'currentColor'),
      'primary': 'hsl(26, 100%, 55%)'
    }),
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '1.12px',
    },
    screens: {
      'xs': '375px',
      ...defaultTheme.screens,
    },

    extend: {},
  },
  plugins: [],
};
