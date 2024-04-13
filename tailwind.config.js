/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      courierPrime: ['Courier Prime', 'monospace'],
      silkscreen: ['Silkscreen', "sans-serif"]
    },
    container: {
      center: true
    },
  },
  plugins: [],
}