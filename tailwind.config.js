/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./{html,js}"],
    theme: {
        screens: {
      'sm': '400px',  
      'md': '800px',
      'lg': '1024px',
      'xl': '1440px',     
    },
      extend: {},
    },
    plugins: [],
  }
