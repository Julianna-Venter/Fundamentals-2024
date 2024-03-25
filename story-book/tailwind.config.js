/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html, js,ts,jsx,tsx}", "./.storybook/**/*.{ts,tsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [],
};
