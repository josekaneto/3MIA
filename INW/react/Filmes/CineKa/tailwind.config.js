/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-kaneto': '#033325',
        'secondary-kaneto': '#64756A',
        'titulo-kaneto': '#5FAA95'
      }
    },
  },
  plugins: [],
}
