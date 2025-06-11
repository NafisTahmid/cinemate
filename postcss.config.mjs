export default {
  plugins: {
    "@tailwindcss/postcss": {},
     autoprefixer: {},
  },
  theme: {
    extend: {
      screens: {
        "other": {'min': '340px', 'max': '1200px'}
      }
    },
  },
}