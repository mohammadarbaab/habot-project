/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Make sure to include your React files here
    './index.html',
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
        h1: "55px",
        h2: "50px",
        h3: "45px",
        h4: "40px",
        h5: "35px",
        h6: "30px",
        btn1:"25px",
        btn2:"20px",
        p1: "18px",
        p2: "16px",
        p3: "14px",
        p4: "12px",
        p5: "10px",
        p6: "8px",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"], // Ensure this is correct
        body: ["Inter", "sans-serif"],      // Ensure this is correct
        inter: ['"Inter"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
      },
      maxWidth: {
        "max-width-of-section": "1600px",
      },
      width: {
        "width-of-component": "88%",
        "59%": "59%",
        "49%": "49%",
        "48%": "48%",
      },
      colors: {
        "nav-button-color": "#00732F",
        "nav-opt-text-color": "#6D6E71",
        "header-serch-icon-color": "#E7760D",
        "header-serch-placeholder-color": "#6B7280",
        "habot-heading-color": "#271555",
        "buy-supply-bg-color": "#072F57",
        "verified-bg-color": "#E8FBFF",
        "footer-bg-color": "#123557",
      },
      fontWeight: {
        h1: "700",
        h2: "500",
        p2: "400",
        p3: "300",
      },
      screens: {
        "screen-1434px": { max: "1434px" },
        "screen-1282px": { max: "1282px" },
        "screen-1144px": { max: "1144px" },
        "screen-1020px": { max: "1020px" },
        "screen-970px": { max: "970px" },
        "screen-862px": { max: "862px" },
        "screen-820px": { max: "820px" },
        "screen-764px": { max: "764px" },
        "screen-750px": { max: "750px" },
        "screen-580px": { max: "580px" },
        "screen-554px": { max: "554px" },
        "screen-518px": { max: "518px" },
        "screen-480px": { max: "480px" },
        "screen-420px": { max: "420px" },
        "screen-370px": { max: "370px" },
        "screen-340px": { max: "340px" },
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
