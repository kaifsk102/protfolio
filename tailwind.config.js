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
        keyframes: {
          slideIn: {
            '0%': { transform: 'translateY(-100%)' },
            '100%': { transform: 'translateY(0)' },
          },
          slideOut: {
            '0%': { transform: 'translateY(0)' },
            '100%': { transform: 'translateY(-100%)' },
          },
        },
        animation: {
          slideIn: 'slideIn 0.5s ease-out forwards',
          slideOut: 'slideOut 0.5s ease-out forwards',
        },
        dropShadow: {
          'custom': '10px 10px 10px #0369a1', // Using Tailwind's blue-700 color code
        },
      },
    },
    plugins: [],
  }
