const colors = require('tailwindcss/colors');

// remove new color warnings
delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];
// 


module.exports = {
  mode:'jit',
  darkMode: 'class', // or 'media' or 'class'
  // content:[],
  theme: {
    extend: {
      colors:{
        ...colors
      }
    },
  },
  plugins: [],
}
