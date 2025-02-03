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
      extend: {
        dropShadow: {
          'custom': '10px 10px 10px #0369a1', // Using Tailwind's blue-700 color code
        },
      },
    },
    plugins: [],
  }
