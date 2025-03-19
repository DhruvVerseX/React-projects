/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cassandra: ["Cassandra", "sans-serif"],
      },
    },
  },
  plugins: [],
};
