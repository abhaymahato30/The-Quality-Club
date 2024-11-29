// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0077FF', // A tech-inspired blue color
        secondary: '#F0F4FF', // Light background color
        accent: '#FF8A00', // A vibrant accent color
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'], // Clean and modern sans-serif font
      },
    },
  },
  plugins: [],
};
