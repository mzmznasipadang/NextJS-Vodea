/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',,
  ],
  theme: {
    colors: {
      background : '#F5FAFE', //BG Color
      text: '#001233', //Text Color
      primary: { //Primary Blue and Grey
          100: '#0078F0',
          200: '#0466C9',
          300: '#023E7D',
          400: '#001846',
          500: '#5C677D',
          600: '#979DAD'
      },
      neutral: { //INI SHADES PUTIH KE GREY 
          100: '#FFFFFF',
          200: '#F6F6F6',
          300: '#EDEDED',
          400: '#DFDFDF'
      },
      danger: '#FF5538' //Buat Warna Alert
      
    },
    extend: {},
  },
  plugins: [],
}
