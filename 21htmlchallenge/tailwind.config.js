/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'drawers': "url('src.assets/img/drawers.jpg)"
    },
    colors:{
      'gray-blue':'#475569',
      'ligth-gray-blue':'#64748b',
      
    },
    fontFamily:{
      manrope:['Manrope','sans-serif']
    },
    
  },
  plugins: [],
}

