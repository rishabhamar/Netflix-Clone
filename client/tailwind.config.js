/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        header: '600px',
        rate: '400px',
      },
      fontSize:{
        h1: '2.6rem',
      },
      screens:{
        xs: '475px',
      },
      colors:{
        main:"#020617",
        subMain:"#dc2626",
        dry:"#0f172a",
        star:"#fbbf24",
        text:"#e4e4e7",
        border:"#71717a",
        dryGray:"#fafafa",
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}