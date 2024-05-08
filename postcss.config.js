// module.exports = {
//     "plugins": [
//       {
//         tailwindcss: {},
//         autoprefixer: {},
//       },
//       "postcss-flexbugs-fixes",
//       [
//         "postcss-preset-env",
//         {
//           "autoprefixer": {
//             "flexbox": "no-2009"
//           },
//           "stage": 3,
//           "features": {
//             "custom-properties": false
//           }
//         }
//       ],
//       [
//         '@fullhuman/postcss-purgecss',
//         {
//           content: [
//             './app/**/*.{js,jsx,ts,tsx}',
//             'node_modules/react-bootstrap/**/*.js',
//             'node_modules/bootstrap/**/*.js'
//           ],
//           defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
//           safelist: ["html", "body", /^col/, /^navbar/, /^nav/, /^modal/, /^container/]
//         }
//       ],
//     ]
// }
  
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}