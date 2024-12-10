/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        15: "15px",
      },
      spacing: {
        50: "200px",
      },
    },
  },
  plugins: [],
};
