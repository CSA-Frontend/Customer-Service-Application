/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors:{
      'deep-purple':'#65107F',
      'light-purple':'#FCF3FF'
    },
   
   extend: {
    spacing:{
      '128': '48.875rem'
    }
   },
  },
  plugins: [],
}

