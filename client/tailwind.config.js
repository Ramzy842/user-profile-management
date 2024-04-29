/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-cyan': '#D9E7EC',
        'form-input': "#312C2C",
        'logo' : "#C9D1D2"
      },
    },
  },
  plugins: [],
}