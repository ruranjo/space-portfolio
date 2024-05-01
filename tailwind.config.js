/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'], // 'sans' es el nombre de la clave que Tailwind utiliza por defecto para sans-serif
        'changa': ['Changa One', 'sans-serif']
      },

      colors: {
        myBackground: 'hsl(216, 64%, 9%)', // Define tu color de fondo personalizado aquí
        primary: 'hsl(0, 0%, 100%)',
        secondary: 'hsl(222, 52%, 15%)',
        textColor: 'hsl(50, 100%, 67%)',
        textColorPar: 'hsl(11, 55%, 14%)',
        lightPink: 'hsl(15, 50%, 98%)',
      },
    },
  },
  plugins: [],
}
