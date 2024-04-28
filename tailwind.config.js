/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {colors:{my_color: {400:'#00935f',600:'#00935f'}},
    fontFamily:{
    
      ROboto:'"Roboto Condensed", sans-serif'
     
    }
  
  
  },
  },
  plugins: [require("daisyui")],
}

