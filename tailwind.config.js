/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'background-dark': '#0d1022',
        'primary-blue': '#7aa2f7',
        'secondary-purple': '#bb9af7',
        'accent-pink': '#f7768e',
      },
    },
  },
  plugins: [],
}
