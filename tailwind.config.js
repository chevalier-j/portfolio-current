/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // Idea: Apply the 60/30/10 rule from interior design
        brand: "#ed1703",
        // Monochromatic colors
        "mono-0": "#F8F9FA",
        "mono-1": "#E9ECEF",
        "mono-2": "#DEE2E6",
        "mono-3": "#CED4DA",
        "mono-4": "#ADB5BD",
        "mono-5": "#6C757D",
        "mono-6": "#495057",
        "mono-7": "#343A40",
        "mono-8": "#212529",
        "mono-9": "#0B0B0B",
        // Sunset colors:
        myblue: "#2B3E67",
        mypink: "#AD5262",
        mywine: "#67383D",
        mypurple: "#100C23",
        myorange: "#F98637",
        myred: "#CF411A",
        // Previous Tailwind colors
        /* Primary color: This is where the user’s attention goes. Calls-to-action, buttons, and any other important information should utilize the primary color. Red: #ed1703
          Default Tailwind primary: '#050816' */
        primary: "#050816",
        /* Secondary color: The secondary colors are used to highlight less important elements. Secondary action buttons, less important text, and anything else that doesn’t need immediate attention should be presented in a secondary color.
          Default Tailwind secondary: '#aaa6c3' */
        secondary: "#aaa6c3",
        /* Tertiary/Neutral color: The tertiary colors are used for backgrounds and borders. Tertiary action buttons, less important text, and anything else that doesn’t need immediate attention should be presented in a tertiary color.
          Default Tailwind tertiary: '#151030' */
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        // 'hero-pattern': "url('/src/assets/herobg.png')",
        // 'hero-pattern': "url('/src/assets/nasa.jpg')",
      },
    },
  },
  plugins: [],
}
