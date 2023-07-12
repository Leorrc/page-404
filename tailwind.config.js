/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        bgMain: "url('/bg.jpg')",
      },
      fontFamily: {
        sans: "Outfit, sans-serif",
      },
    },
  },
  plugins: [],
};
