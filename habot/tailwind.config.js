/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        'custom': '680px',  // Custom breakpoint 777px par set kiya
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}

