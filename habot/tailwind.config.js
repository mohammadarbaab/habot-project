/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Make sure to include your React files here
  ],
  theme: {
    extend: {
      fontSize: {
        'sm': '0.75rem',   // Small size 12px
        'base': '0.875rem', // Base size 14px
        'md': '1rem',      // Medium size 16px
        'lg': '1.25rem',   // Large size (20px)
        'xl': '1.5rem',    // Extra large size (24px)
        '2xl': '1.75rem',  // 2x large size (28px)
        '3xl': '2.25rem',  // 3x large size (36px)
      },
    },
  },
  fontFamily: {
    display: ["Poppins", "sans-serif"], // Ensure this is correct
    body: ["Inter", "sans-serif"],      // Ensure this is correct
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
