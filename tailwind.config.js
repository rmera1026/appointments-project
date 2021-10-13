// module.exports = {
//   purge: ['./src/**/*.{js,jsx,ts,tsx}', 
//   './public/index.html'],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },

//   // when this was inputted: plugins: [require(@tailwindcss/forms')] it gave me errors.
//   plugins: []
// }

 // tailwind.config.js
 module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {},
   },
   variants: {},
   plugins: [],
 }