/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      // Note: This is @notapatch and not the docs
      //       I think what it is trying to say is that if you define
      //       a custom font here you are also removing the default
      //       font families sans, serif and mono.
      //
      'display': ['Varela Round', 'sans-serif'],
      'body': ['Open Sans', 'sans-serif'],
    },
    extend: {

      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },

    },
  },
  plugins: [],
}

