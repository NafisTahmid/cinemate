// tailwind.config.js
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Define 'other' as a custom breakpoint
        'other': { 'min': '340px', 'max': '1200px' },
      },
    },
  },
  plugins: [],
}