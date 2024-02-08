/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark_green: '#386641',   //rgb(56, 102, 65)
        main_green:'#6a994e',    //rgb(106, 153, 78)
        light_green:'#a7c957',   //rgb(167, 201, 87)
        baige:'#f2e8cf',         //rgb(242, 232, 207)
        dark_red:"#bc4749"         //rgb(188, 71, 73)
     
      },
      fontSize: {
        extralargetext: '3.375rem',
        heading1: '2.4rem',
        heading2: '1.75rem',
        heading3:'5.7rem'
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};