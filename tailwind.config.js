/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./{html,js}"],
    theme: {
        screens: {
      'sm': '400px',
      // => @media (min-width: 576px) { ... }

      'md': '800px',
      // => @media (min-width: 960px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1440px) { ... }
    },
      extend: {},
    },
    plugins: [],
  }
